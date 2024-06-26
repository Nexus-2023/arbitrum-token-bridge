import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface L1ArbitrumGatewayInterface extends utils.Interface {
    contractName: "L1ArbitrumGateway";
    functions: {
        "calculateL2TokenAddress(address)": FunctionFragment;
        "counterpartGateway()": FunctionFragment;
        "finalizeInboundTransfer(address,address,address,uint256,bytes)": FunctionFragment;
        "getExternalCall(uint256,address,bytes)": FunctionFragment;
        "getOutboundCalldata(address,address,address,uint256,bytes)": FunctionFragment;
        "inbox()": FunctionFragment;
        "outboundTransfer(address,address,uint256,uint256,uint256,bytes)": FunctionFragment;
        "outboundTransferCustomRefund(address,address,address,uint256,uint256,uint256,bytes)": FunctionFragment;
        "postUpgradeInit()": FunctionFragment;
        "router()": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "calculateL2TokenAddress", values: [string]): string;
    encodeFunctionData(functionFragment: "counterpartGateway", values?: undefined): string;
    encodeFunctionData(functionFragment: "finalizeInboundTransfer", values: [string, string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "getExternalCall", values: [BigNumberish, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "getOutboundCalldata", values: [string, string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "inbox", values?: undefined): string;
    encodeFunctionData(functionFragment: "outboundTransfer", values: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "outboundTransferCustomRefund", values: [
        string,
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "postUpgradeInit", values?: undefined): string;
    encodeFunctionData(functionFragment: "router", values?: undefined): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "calculateL2TokenAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "counterpartGateway", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "finalizeInboundTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getExternalCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOutboundCalldata", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "inbox", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "outboundTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "outboundTransferCustomRefund", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "postUpgradeInit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "router", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    events: {
        "DepositInitiated(address,address,address,uint256,uint256)": EventFragment;
        "TxToL2(address,address,uint256,bytes)": EventFragment;
        "WithdrawalFinalized(address,address,address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "DepositInitiated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TxToL2"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WithdrawalFinalized"): EventFragment;
}
export type DepositInitiatedEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber
], {
    l1Token: string;
    _from: string;
    _to: string;
    _sequenceNumber: BigNumber;
    _amount: BigNumber;
}>;
export type DepositInitiatedEventFilter = TypedEventFilter<DepositInitiatedEvent>;
export type TxToL2Event = TypedEvent<[
    string,
    string,
    BigNumber,
    string
], {
    _from: string;
    _to: string;
    _seqNum: BigNumber;
    _data: string;
}>;
export type TxToL2EventFilter = TypedEventFilter<TxToL2Event>;
export type WithdrawalFinalizedEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber
], {
    l1Token: string;
    _from: string;
    _to: string;
    _exitNum: BigNumber;
    _amount: BigNumber;
}>;
export type WithdrawalFinalizedEventFilter = TypedEventFilter<WithdrawalFinalizedEvent>;
export interface L1ArbitrumGateway extends BaseContract {
    contractName: "L1ArbitrumGateway";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: L1ArbitrumGatewayInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        calculateL2TokenAddress(l1ERC20: string, overrides?: CallOverrides): Promise<[string]>;
        counterpartGateway(overrides?: CallOverrides): Promise<[string]>;
        finalizeInboundTransfer(_token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getExternalCall(arg0: BigNumberish, _initialDestination: string, _initialData: BytesLike, overrides?: CallOverrides): Promise<[string, string] & {
            target: string;
            data: string;
        }>;
        getOutboundCalldata(_l1Token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<[string] & {
            outboundCalldata: string;
        }>;
        inbox(overrides?: CallOverrides): Promise<[string]>;
        outboundTransfer(_l1Token: string, _to: string, _amount: BigNumberish, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        outboundTransferCustomRefund(_l1Token: string, _refundTo: string, _to: string, _amount: BigNumberish, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        postUpgradeInit(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        router(overrides?: CallOverrides): Promise<[string]>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
    };
    calculateL2TokenAddress(l1ERC20: string, overrides?: CallOverrides): Promise<string>;
    counterpartGateway(overrides?: CallOverrides): Promise<string>;
    finalizeInboundTransfer(_token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getExternalCall(arg0: BigNumberish, _initialDestination: string, _initialData: BytesLike, overrides?: CallOverrides): Promise<[string, string] & {
        target: string;
        data: string;
    }>;
    getOutboundCalldata(_l1Token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<string>;
    inbox(overrides?: CallOverrides): Promise<string>;
    outboundTransfer(_l1Token: string, _to: string, _amount: BigNumberish, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    outboundTransferCustomRefund(_l1Token: string, _refundTo: string, _to: string, _amount: BigNumberish, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    postUpgradeInit(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    router(overrides?: CallOverrides): Promise<string>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        calculateL2TokenAddress(l1ERC20: string, overrides?: CallOverrides): Promise<string>;
        counterpartGateway(overrides?: CallOverrides): Promise<string>;
        finalizeInboundTransfer(_token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        getExternalCall(arg0: BigNumberish, _initialDestination: string, _initialData: BytesLike, overrides?: CallOverrides): Promise<[string, string] & {
            target: string;
            data: string;
        }>;
        getOutboundCalldata(_l1Token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<string>;
        inbox(overrides?: CallOverrides): Promise<string>;
        outboundTransfer(_l1Token: string, _to: string, _amount: BigNumberish, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<string>;
        outboundTransferCustomRefund(_l1Token: string, _refundTo: string, _to: string, _amount: BigNumberish, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<string>;
        postUpgradeInit(overrides?: CallOverrides): Promise<void>;
        router(overrides?: CallOverrides): Promise<string>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "DepositInitiated(address,address,address,uint256,uint256)"(l1Token?: null, _from?: string | null, _to?: string | null, _sequenceNumber?: BigNumberish | null, _amount?: null): DepositInitiatedEventFilter;
        DepositInitiated(l1Token?: null, _from?: string | null, _to?: string | null, _sequenceNumber?: BigNumberish | null, _amount?: null): DepositInitiatedEventFilter;
        "TxToL2(address,address,uint256,bytes)"(_from?: string | null, _to?: string | null, _seqNum?: BigNumberish | null, _data?: null): TxToL2EventFilter;
        TxToL2(_from?: string | null, _to?: string | null, _seqNum?: BigNumberish | null, _data?: null): TxToL2EventFilter;
        "WithdrawalFinalized(address,address,address,uint256,uint256)"(l1Token?: null, _from?: string | null, _to?: string | null, _exitNum?: BigNumberish | null, _amount?: null): WithdrawalFinalizedEventFilter;
        WithdrawalFinalized(l1Token?: null, _from?: string | null, _to?: string | null, _exitNum?: BigNumberish | null, _amount?: null): WithdrawalFinalizedEventFilter;
    };
    estimateGas: {
        calculateL2TokenAddress(l1ERC20: string, overrides?: CallOverrides): Promise<BigNumber>;
        counterpartGateway(overrides?: CallOverrides): Promise<BigNumber>;
        finalizeInboundTransfer(_token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getExternalCall(arg0: BigNumberish, _initialDestination: string, _initialData: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getOutboundCalldata(_l1Token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        inbox(overrides?: CallOverrides): Promise<BigNumber>;
        outboundTransfer(_l1Token: string, _to: string, _amount: BigNumberish, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        outboundTransferCustomRefund(_l1Token: string, _refundTo: string, _to: string, _amount: BigNumberish, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        postUpgradeInit(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        router(overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        calculateL2TokenAddress(l1ERC20: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        counterpartGateway(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        finalizeInboundTransfer(_token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getExternalCall(arg0: BigNumberish, _initialDestination: string, _initialData: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getOutboundCalldata(_l1Token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        inbox(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        outboundTransfer(_l1Token: string, _to: string, _amount: BigNumberish, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        outboundTransferCustomRefund(_l1Token: string, _refundTo: string, _to: string, _amount: BigNumberish, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        postUpgradeInit(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        router(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
