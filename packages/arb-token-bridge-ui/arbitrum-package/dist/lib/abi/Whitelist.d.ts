import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface WhitelistInterface extends utils.Interface {
    contractName: "Whitelist";
    functions: {
        "isAllowed(address)": FunctionFragment;
        "owner()": FunctionFragment;
        "setOwner(address)": FunctionFragment;
        "setWhitelist(address[],bool[])": FunctionFragment;
        "triggerConsumers(address,address[])": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "isAllowed", values: [string]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "setOwner", values: [string]): string;
    encodeFunctionData(functionFragment: "setWhitelist", values: [string[], boolean[]]): string;
    encodeFunctionData(functionFragment: "triggerConsumers", values: [string, string[]]): string;
    decodeFunctionResult(functionFragment: "isAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "triggerConsumers", data: BytesLike): Result;
    events: {
        "OwnerUpdated(address)": EventFragment;
        "WhitelistUpgraded(address,address[])": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OwnerUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WhitelistUpgraded"): EventFragment;
}
export type OwnerUpdatedEvent = TypedEvent<[string], {
    newOwner: string;
}>;
export type OwnerUpdatedEventFilter = TypedEventFilter<OwnerUpdatedEvent>;
export type WhitelistUpgradedEvent = TypedEvent<[
    string,
    string[]
], {
    newWhitelist: string;
    targets: string[];
}>;
export type WhitelistUpgradedEventFilter = TypedEventFilter<WhitelistUpgradedEvent>;
export interface Whitelist extends BaseContract {
    contractName: "Whitelist";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: WhitelistInterface;
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
        isAllowed(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        setOwner(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setWhitelist(user: string[], val: boolean[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        triggerConsumers(newWhitelist: string, targets: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    isAllowed(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    owner(overrides?: CallOverrides): Promise<string>;
    setOwner(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setWhitelist(user: string[], val: boolean[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    triggerConsumers(newWhitelist: string, targets: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        isAllowed(arg0: string, overrides?: CallOverrides): Promise<boolean>;
        owner(overrides?: CallOverrides): Promise<string>;
        setOwner(newOwner: string, overrides?: CallOverrides): Promise<void>;
        setWhitelist(user: string[], val: boolean[], overrides?: CallOverrides): Promise<void>;
        triggerConsumers(newWhitelist: string, targets: string[], overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "OwnerUpdated(address)"(newOwner?: null): OwnerUpdatedEventFilter;
        OwnerUpdated(newOwner?: null): OwnerUpdatedEventFilter;
        "WhitelistUpgraded(address,address[])"(newWhitelist?: null, targets?: null): WhitelistUpgradedEventFilter;
        WhitelistUpgraded(newWhitelist?: null, targets?: null): WhitelistUpgradedEventFilter;
    };
    estimateGas: {
        isAllowed(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        setOwner(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setWhitelist(user: string[], val: boolean[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        triggerConsumers(newWhitelist: string, targets: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        isAllowed(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setOwner(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setWhitelist(user: string[], val: boolean[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        triggerConsumers(newWhitelist: string, targets: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
