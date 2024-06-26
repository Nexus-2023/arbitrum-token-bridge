"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IOrbitGatewayRouter__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "inbox",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_gateway",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_maxGas",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_gasPriceBid",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_maxSubmissionCost",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "_creditBackAddress",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_feeAmount",
                type: "uint256",
            },
        ],
        name: "setGateway",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class IOrbitGatewayRouter__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IOrbitGatewayRouter__factory = IOrbitGatewayRouter__factory;
IOrbitGatewayRouter__factory.abi = _abi;
