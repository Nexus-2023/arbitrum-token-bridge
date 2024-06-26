import { TransactionReceipt } from '@ethersproject/providers';
import { Provider } from '@ethersproject/abstract-provider';
import { Signer } from '@ethersproject/abstract-signer';
import { ContractTransaction } from '@ethersproject/contracts';
import { BigNumber } from '@ethersproject/bignumber';
import { SignerOrProvider } from '../dataEntities/signerOrProvider';
import { Overrides } from 'ethers';
import { RedeemTransaction } from './L2Transaction';
import { RetryableMessageParams } from '../dataEntities/message';
export declare enum L1ToL2MessageStatus {
    /**
     * The retryable ticket has yet to be created
     */
    NOT_YET_CREATED = 1,
    /**
     * An attempt was made to create the retryable ticket, but it failed.
     * This could be due to not enough submission cost being paid by the L1 transaction
     */
    CREATION_FAILED = 2,
    /**
     * The retryable ticket has been created but has not been redeemed. This could be due to the
     * auto redeem failing, or if the params (max l2 gas price) * (max l2 gas) = 0 then no auto
     * redeem tx is ever issued. An auto redeem is also never issued for ETH deposits.
     * A manual redeem is now required.
     */
    FUNDS_DEPOSITED_ON_L2 = 3,
    /**
     * The retryable ticket has been redeemed (either by auto, or manually) and the
     * l2 transaction has been executed
     */
    REDEEMED = 4,
    /**
     * The message has either expired or has been canceled. It can no longer be redeemed.
     */
    EXPIRED = 5
}
export declare enum EthDepositStatus {
    /**
     * ETH is not deposited on L2 yet
     */
    PENDING = 1,
    /**
     * ETH is deposited successfully on L2
     */
    DEPOSITED = 2
}
/**
 * Conditional type for Signer or Provider. If T is of type Provider
 * then L1ToL2MessageReaderOrWriter<T> will be of type L1ToL2MessageReader.
 * If T is of type Signer then L1ToL2MessageReaderOrWriter<T> will be of
 * type L1ToL2MessageWriter.
 */
export type L1ToL2MessageReaderOrWriter<T extends SignerOrProvider> = T extends Provider ? L1ToL2MessageReader : L1ToL2MessageWriter;
export declare abstract class L1ToL2Message {
    readonly chainId: number;
    readonly sender: string;
    readonly messageNumber: BigNumber;
    readonly l1BaseFee: BigNumber;
    readonly messageData: RetryableMessageParams;
    /**
     * When messages are sent from L1 to L2 a retryable ticket is created on L2.
     * The retryableCreationId can be used to retrieve information about the success or failure of the
     * creation of the retryable ticket.
     */
    readonly retryableCreationId: string;
    /**
     * The submit retryable transactions use the typed transaction envelope 2718.
     * The id of these transactions is the hash of the RLP encoded transaction.
     * @param l2ChainId
     * @param fromAddress the aliased address that called the L1 inbox as emitted in the bridge event.
     * @param messageNumber
     * @param l1BaseFee
     * @param destAddress
     * @param l2CallValue
     * @param l1Value
     * @param maxSubmissionFee
     * @param excessFeeRefundAddress refund address specified in the retryable creation. Note the L1 inbox aliases this address if it is a L1 smart contract. The user is expected to provide this value already aliased when needed.
     * @param callValueRefundAddress refund address specified in the retryable creation. Note the L1 inbox aliases this address if it is a L1 smart contract. The user is expected to provide this value already aliased when needed.
     * @param gasLimit
     * @param maxFeePerGas
     * @param data
     * @returns
     */
    static calculateSubmitRetryableId(l2ChainId: number, fromAddress: string, messageNumber: BigNumber, l1BaseFee: BigNumber, destAddress: string, l2CallValue: BigNumber, l1Value: BigNumber, maxSubmissionFee: BigNumber, excessFeeRefundAddress: string, callValueRefundAddress: string, gasLimit: BigNumber, maxFeePerGas: BigNumber, data: string): string;
    static fromEventComponents<T extends SignerOrProvider>(l2SignerOrProvider: T, chainId: number, sender: string, messageNumber: BigNumber, l1BaseFee: BigNumber, messageData: RetryableMessageParams): L1ToL2MessageReaderOrWriter<T>;
    protected constructor(chainId: number, sender: string, messageNumber: BigNumber, l1BaseFee: BigNumber, messageData: RetryableMessageParams);
}
/**
 * If the status is redeemed an l2TxReceipt is populated.
 * For all other statuses l2TxReceipt is not populated
 */
export type L1ToL2MessageWaitResult = {
    status: L1ToL2MessageStatus.REDEEMED;
    l2TxReceipt: TransactionReceipt;
} | {
    status: Exclude<L1ToL2MessageStatus, L1ToL2MessageStatus.REDEEMED>;
};
export type EthDepositMessageWaitResult = {
    l2TxReceipt: TransactionReceipt | null;
};
export declare class L1ToL2MessageReader extends L1ToL2Message {
    readonly l2Provider: Provider;
    private retryableCreationReceipt;
    constructor(l2Provider: Provider, chainId: number, sender: string, messageNumber: BigNumber, l1BaseFee: BigNumber, messageData: RetryableMessageParams);
    /**
     * Try to get the receipt for the retryable ticket creation.
     * This is the L2 transaction that creates the retryable ticket.
     * If confirmations or timeout is provided, this will wait for the ticket to be created
     * @returns Null if retryable has not been created
     */
    getRetryableCreationReceipt(confirmations?: number, timeout?: number): Promise<TransactionReceipt | null>;
    /**
     * When retryable tickets are created, and gas is supplied to it, an attempt is
     * made to redeem the ticket straight away. This is called an auto redeem.
     * @returns TransactionReceipt of the auto redeem attempt if exists, otherwise null
     */
    getAutoRedeemAttempt(): Promise<TransactionReceipt | null>;
    /**
     * Receipt for the successful l2 transaction created by this message.
     * @returns TransactionReceipt of the first successful redeem if exists, otherwise the current status of the message.
     */
    getSuccessfulRedeem(): Promise<L1ToL2MessageWaitResult>;
    /**
     * Has this message expired. Once expired the retryable ticket can no longer be redeemed.
     * @deprecated Will be removed in v3.0.0
     * @returns
     */
    isExpired(): Promise<boolean>;
    private retryableExists;
    status(): Promise<L1ToL2MessageStatus>;
    /**
     * Wait for the retryable ticket to be created, for it to be redeemed, and for the l2Tx to be executed.
     * Note: The terminal status of a transaction that only does an eth deposit is FUNDS_DEPOSITED_ON_L2 as
     * no L2 transaction needs to be executed, however the terminal state of any other transaction is REDEEMED
     * which represents that the retryable ticket has been redeemed and the L2 tx has been executed.
     * @param confirmations Amount of confirmations the retryable ticket and the auto redeem receipt should have
     * @param timeout Amount of time to wait for the retryable ticket to be created
     * Defaults to 15 minutes, as by this time all transactions are expected to be included on L2. Throws on timeout.
     * @returns The wait result contains a status, and optionally the l2TxReceipt.
     * If the status is "REDEEMED" then a l2TxReceipt is also available on the result.
     * If the status has any other value then l2TxReceipt is not populated.
     */
    waitForStatus(confirmations?: number, timeout?: number): Promise<L1ToL2MessageWaitResult>;
    /**
     * The minimium lifetime of a retryable tx
     * @returns
     */
    static getLifetime(l2Provider: Provider): Promise<BigNumber>;
    /**
     * Timestamp at which this message expires
     * @returns
     */
    getTimeout(): Promise<BigNumber>;
    /**
     * Address to which CallValue will be credited to on L2 if the retryable ticket times out or is cancelled.
     * The Beneficiary is also the address with the right to cancel a Retryable Ticket (if the ticket hasn’t been redeemed yet).
     * @returns
     */
    getBeneficiary(): Promise<string>;
}
export declare class L1ToL2MessageReaderClassic {
    private retryableCreationReceipt;
    readonly messageNumber: BigNumber;
    readonly retryableCreationId: string;
    readonly autoRedeemId: string;
    readonly l2TxHash: string;
    readonly l2Provider: Provider;
    constructor(l2Provider: Provider, chainId: number, messageNumber: BigNumber);
    private calculateL2DerivedHash;
    /**
     * Try to get the receipt for the retryable ticket creation.
     * This is the L2 transaction that creates the retryable ticket.
     * If confirmations or timeout is provided, this will wait for the ticket to be created
     * @returns Null if retryable has not been created
     */
    getRetryableCreationReceipt(confirmations?: number, timeout?: number): Promise<TransactionReceipt | null>;
    status(): Promise<L1ToL2MessageStatus>;
}
export declare class L1ToL2MessageWriter extends L1ToL2MessageReader {
    readonly l2Signer: Signer;
    constructor(l2Signer: Signer, chainId: number, sender: string, messageNumber: BigNumber, l1BaseFee: BigNumber, messageData: RetryableMessageParams);
    /**
     * Manually redeem the retryable ticket.
     * Throws if message status is not L1ToL2MessageStatus.FUNDS_DEPOSITED_ON_L2
     */
    redeem(overrides?: Overrides): Promise<RedeemTransaction>;
    /**
     * Cancel the retryable ticket.
     * Throws if message status is not L1ToL2MessageStatus.FUNDS_DEPOSITED_ON_L2
     */
    cancel(overrides?: Overrides): Promise<ContractTransaction>;
    /**
     * Increase the timeout of a retryable ticket.
     * Throws if message status is not L1ToL2MessageStatus.FUNDS_DEPOSITED_ON_L2
     */
    keepAlive(overrides?: Overrides): Promise<ContractTransaction>;
}
/**
 * A message for Eth deposits from L1 to L2
 */
export declare class EthDepositMessage {
    private readonly l2Provider;
    readonly l2ChainId: number;
    readonly messageNumber: BigNumber;
    readonly from: string;
    readonly to: string;
    readonly value: BigNumber;
    readonly l2DepositTxHash: string;
    private l2DepositTxReceipt;
    static calculateDepositTxId(l2ChainId: number, messageNumber: BigNumber, fromAddress: string, toAddress: string, value: BigNumber): string;
    /**
     * Parse the data field in
     * event InboxMessageDelivered(uint256 indexed messageNum, bytes data);
     * @param eventData
     * @returns destination and amount
     */
    private static parseEthDepositData;
    /**
     * Create an EthDepositMessage from data emitted in event when calling ethDeposit on Inbox.sol
     * @param l2Provider
     * @param messageNumber The message number in the Inbox.InboxMessageDelivered event
     * @param senderAddr The sender address from Bridge.MessageDelivered event
     * @param inboxMessageEventData The data field from the Inbox.InboxMessageDelivered event
     * @returns
     */
    static fromEventComponents(l2Provider: Provider, messageNumber: BigNumber, senderAddr: string, inboxMessageEventData: string): Promise<EthDepositMessage>;
    /**
     *
     * @param l2Provider
     * @param l2ChainId
     * @param messageNumber
     * @param to Recipient address of the ETH on L2
     * @param value
     */
    constructor(l2Provider: Provider, l2ChainId: number, messageNumber: BigNumber, from: string, to: string, value: BigNumber);
    status(): Promise<EthDepositStatus>;
    wait(confirmations?: number, timeout?: number): Promise<TransactionReceipt | null>;
}
