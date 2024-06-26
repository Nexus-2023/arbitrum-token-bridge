"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.L1ToL2MessageCreator = void 0;
const ethers_1 = require("ethers");
const L1ToL2MessageGasEstimator_1 = require("./L1ToL2MessageGasEstimator");
const L1Transaction_1 = require("./L1Transaction");
const Inbox__factory_1 = require("../abi/factories/Inbox__factory");
const ERC20Inbox__factory_1 = require("../abi/factories/ERC20Inbox__factory");
const networks_1 = require("../dataEntities/networks");
const signerOrProvider_1 = require("../dataEntities/signerOrProvider");
const errors_1 = require("../dataEntities/errors");
const lib_1 = require("../utils/lib");
const transactionRequest_1 = require("../dataEntities/transactionRequest");
/**
 * Creates retryable tickets by directly calling the Inbox contract on L1
 */
class L1ToL2MessageCreator {
    constructor(l1Signer) {
        this.l1Signer = l1Signer;
        if (!signerOrProvider_1.SignerProviderUtils.signerHasProvider(l1Signer)) {
            throw new errors_1.MissingProviderArbSdkError('l1Signer');
        }
    }
    /**
     * Gets a current estimate for the supplied params
     * @param params
     * @param l1Provider
     * @param l2Provider
     * @param retryableGasOverrides
     * @returns
     */
    static async getTicketEstimate(params, l1Provider, l2Provider, retryableGasOverrides) {
        const baseFee = await (0, lib_1.getBaseFee)(l1Provider);
        const gasEstimator = new L1ToL2MessageGasEstimator_1.L1ToL2MessageGasEstimator(l2Provider);
        return await gasEstimator.estimateAll(params, baseFee, l1Provider, retryableGasOverrides);
    }
    /**
     * Prepare calldata for a call to create a retryable ticket
     * @param params
     * @param estimates
     * @param excessFeeRefundAddress
     * @param callValueRefundAddress
     * @param nativeTokenIsEth
     * @returns
     */
    static getTicketCreationRequestCallData(params, estimates, excessFeeRefundAddress, callValueRefundAddress, nativeTokenIsEth) {
        if (!nativeTokenIsEth) {
            return ERC20Inbox__factory_1.ERC20Inbox__factory.createInterface().encodeFunctionData('createRetryableTicket', [
                params.to,
                params.l2CallValue,
                estimates.maxSubmissionCost,
                excessFeeRefundAddress,
                callValueRefundAddress,
                estimates.gasLimit,
                estimates.maxFeePerGas,
                estimates.deposit,
                params.data,
            ]);
        }
        return Inbox__factory_1.Inbox__factory.createInterface().encodeFunctionData('createRetryableTicket', [
            params.to,
            params.l2CallValue,
            estimates.maxSubmissionCost,
            excessFeeRefundAddress,
            callValueRefundAddress,
            estimates.gasLimit,
            estimates.maxFeePerGas,
            params.data,
        ]);
    }
    /**
     * Generate a transaction request for creating a retryable ticket
     * @param params
     * @param l1Provider
     * @param l2Provider
     * @param options
     * @returns
     */
    static async getTicketCreationRequest(params, l1Provider, l2Provider, options) {
        const excessFeeRefundAddress = params.excessFeeRefundAddress || params.from;
        const callValueRefundAddress = params.callValueRefundAddress || params.from;
        const parsedParams = Object.assign(Object.assign({}, params), { excessFeeRefundAddress,
            callValueRefundAddress });
        const estimates = await L1ToL2MessageCreator.getTicketEstimate(parsedParams, l1Provider, l2Provider, options);
        const l2Network = await (0, networks_1.getL2Network)(l2Provider);
        const nativeTokenIsEth = typeof l2Network.nativeToken === 'undefined';
        const data = L1ToL2MessageCreator.getTicketCreationRequestCallData(params, estimates, excessFeeRefundAddress, callValueRefundAddress, nativeTokenIsEth);
        return {
            txRequest: {
                to: l2Network.ethBridge.inbox,
                data,
                value: nativeTokenIsEth ? estimates.deposit : ethers_1.constants.Zero,
                from: params.from,
            },
            retryableData: {
                data: params.data,
                from: params.from,
                to: params.to,
                excessFeeRefundAddress: excessFeeRefundAddress,
                callValueRefundAddress: callValueRefundAddress,
                l2CallValue: params.l2CallValue,
                maxSubmissionCost: estimates.maxSubmissionCost,
                maxFeePerGas: estimates.maxFeePerGas,
                gasLimit: estimates.gasLimit,
                deposit: estimates.deposit,
            },
            isValid: async () => {
                const reEstimates = await L1ToL2MessageCreator.getTicketEstimate(parsedParams, l1Provider, l2Provider, options);
                return L1ToL2MessageGasEstimator_1.L1ToL2MessageGasEstimator.isValid(estimates, reEstimates);
            },
        };
    }
    /**
     * Creates a retryable ticket by directly calling the Inbox contract on L1
     */
    async createRetryableTicket(params, l2Provider, options) {
        const l1Provider = signerOrProvider_1.SignerProviderUtils.getProviderOrThrow(this.l1Signer);
        const createRequest = (0, transactionRequest_1.isL1ToL2TransactionRequest)(params)
            ? params
            : await L1ToL2MessageCreator.getTicketCreationRequest(params, l1Provider, l2Provider, options);
        const tx = await this.l1Signer.sendTransaction(Object.assign(Object.assign({}, createRequest.txRequest), params.overrides));
        return L1Transaction_1.L1TransactionReceipt.monkeyPatchWait(tx);
    }
}
exports.L1ToL2MessageCreator = L1ToL2MessageCreator;
