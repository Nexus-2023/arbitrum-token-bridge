import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export type GlobalStateStruct = {
    bytes32Vals: [BytesLike, BytesLike];
    u64Vals: [BigNumberish, BigNumberish];
};
export type GlobalStateStructOutput = [
    [
        string,
        string
    ],
    [
        BigNumber,
        BigNumber
    ]
] & {
    bytes32Vals: [string, string];
    u64Vals: [BigNumber, BigNumber];
};
export type ExecutionStateStruct = {
    globalState: GlobalStateStruct;
    machineStatus: BigNumberish;
};
export type ExecutionStateStructOutput = [GlobalStateStructOutput, number] & {
    globalState: GlobalStateStructOutput;
    machineStatus: number;
};
export type AssertionStruct = {
    beforeState: ExecutionStateStruct;
    afterState: ExecutionStateStruct;
    numBlocks: BigNumberish;
};
export type AssertionStructOutput = [
    ExecutionStateStructOutput,
    ExecutionStateStructOutput,
    BigNumber
] & {
    beforeState: ExecutionStateStructOutput;
    afterState: ExecutionStateStructOutput;
    numBlocks: BigNumber;
};
export type ConfigStruct = {
    confirmPeriodBlocks: BigNumberish;
    extraChallengeTimeBlocks: BigNumberish;
    stakeToken: string;
    baseStake: BigNumberish;
    wasmModuleRoot: BytesLike;
    owner: string;
    loserStakeEscrow: string;
    chainId: BigNumberish;
    chainConfig: string;
    genesisBlockNum: BigNumberish;
    sequencerInboxMaxTimeVariation: ISequencerInbox.MaxTimeVariationStruct;
};
export type ConfigStructOutput = [
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    string,
    string,
    string,
    BigNumber,
    string,
    BigNumber,
    ISequencerInbox.MaxTimeVariationStructOutput
] & {
    confirmPeriodBlocks: BigNumber;
    extraChallengeTimeBlocks: BigNumber;
    stakeToken: string;
    baseStake: BigNumber;
    wasmModuleRoot: string;
    owner: string;
    loserStakeEscrow: string;
    chainId: BigNumber;
    chainConfig: string;
    genesisBlockNum: BigNumber;
    sequencerInboxMaxTimeVariation: ISequencerInbox.MaxTimeVariationStructOutput;
};
export type ContractDependenciesStruct = {
    bridge: string;
    sequencerInbox: string;
    inbox: string;
    outbox: string;
    rollupEventInbox: string;
    challengeManager: string;
    rollupAdminLogic: string;
    rollupUserLogic: string;
    validatorUtils: string;
    validatorWalletCreator: string;
};
export type ContractDependenciesStructOutput = [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string
] & {
    bridge: string;
    sequencerInbox: string;
    inbox: string;
    outbox: string;
    rollupEventInbox: string;
    challengeManager: string;
    rollupAdminLogic: string;
    rollupUserLogic: string;
    validatorUtils: string;
    validatorWalletCreator: string;
};
export declare namespace ISequencerInbox {
    type MaxTimeVariationStruct = {
        delayBlocks: BigNumberish;
        futureBlocks: BigNumberish;
        delaySeconds: BigNumberish;
        futureSeconds: BigNumberish;
    };
    type MaxTimeVariationStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        delayBlocks: BigNumber;
        futureBlocks: BigNumber;
        delaySeconds: BigNumber;
        futureSeconds: BigNumber;
    };
}
export interface IRollupAdminInterface extends utils.Interface {
    contractName: "IRollupAdmin";
    functions: {
        "forceConfirmNode(uint64,bytes32,bytes32)": FunctionFragment;
        "forceCreateNode(uint64,uint256,(((bytes32[2],uint64[2]),uint8),((bytes32[2],uint64[2]),uint8),uint64),bytes32)": FunctionFragment;
        "forceRefundStaker(address[])": FunctionFragment;
        "forceResolveChallenge(address[],address[])": FunctionFragment;
        "initialize((uint64,uint64,address,uint256,bytes32,address,address,uint256,string,uint64,(uint256,uint256,uint256,uint256)),(address,address,address,address,address,address,address,address,address,address))": FunctionFragment;
        "pause()": FunctionFragment;
        "removeOldOutbox(address)": FunctionFragment;
        "resume()": FunctionFragment;
        "setBaseStake(uint256)": FunctionFragment;
        "setConfirmPeriodBlocks(uint64)": FunctionFragment;
        "setDelayedInbox(address,bool)": FunctionFragment;
        "setExtraChallengeTimeBlocks(uint64)": FunctionFragment;
        "setLoserStakeEscrow(address)": FunctionFragment;
        "setMinimumAssertionPeriod(uint256)": FunctionFragment;
        "setOutbox(address)": FunctionFragment;
        "setOwner(address)": FunctionFragment;
        "setSequencerInbox(address)": FunctionFragment;
        "setStakeToken(address)": FunctionFragment;
        "setValidator(address[],bool[])": FunctionFragment;
        "setValidatorWhitelistDisabled(bool)": FunctionFragment;
        "setWasmModuleRoot(bytes32)": FunctionFragment;
        "upgradeBeacon(address,address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "forceConfirmNode", values: [BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "forceCreateNode", values: [BigNumberish, BigNumberish, AssertionStruct, BytesLike]): string;
    encodeFunctionData(functionFragment: "forceRefundStaker", values: [string[]]): string;
    encodeFunctionData(functionFragment: "forceResolveChallenge", values: [string[], string[]]): string;
    encodeFunctionData(functionFragment: "initialize", values: [ConfigStruct, ContractDependenciesStruct]): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeOldOutbox", values: [string]): string;
    encodeFunctionData(functionFragment: "resume", values?: undefined): string;
    encodeFunctionData(functionFragment: "setBaseStake", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setConfirmPeriodBlocks", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setDelayedInbox", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "setExtraChallengeTimeBlocks", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setLoserStakeEscrow", values: [string]): string;
    encodeFunctionData(functionFragment: "setMinimumAssertionPeriod", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setOutbox", values: [string]): string;
    encodeFunctionData(functionFragment: "setOwner", values: [string]): string;
    encodeFunctionData(functionFragment: "setSequencerInbox", values: [string]): string;
    encodeFunctionData(functionFragment: "setStakeToken", values: [string]): string;
    encodeFunctionData(functionFragment: "setValidator", values: [string[], boolean[]]): string;
    encodeFunctionData(functionFragment: "setValidatorWhitelistDisabled", values: [boolean]): string;
    encodeFunctionData(functionFragment: "setWasmModuleRoot", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "upgradeBeacon", values: [string, string]): string;
    decodeFunctionResult(functionFragment: "forceConfirmNode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "forceCreateNode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "forceRefundStaker", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "forceResolveChallenge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeOldOutbox", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resume", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBaseStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setConfirmPeriodBlocks", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDelayedInbox", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setExtraChallengeTimeBlocks", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLoserStakeEscrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMinimumAssertionPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOutbox", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSequencerInbox", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setStakeToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setValidator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setValidatorWhitelistDisabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setWasmModuleRoot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeBeacon", data: BytesLike): Result;
    events: {
        "OwnerFunctionCalled(uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OwnerFunctionCalled"): EventFragment;
}
export type OwnerFunctionCalledEvent = TypedEvent<[
    BigNumber
], {
    id: BigNumber;
}>;
export type OwnerFunctionCalledEventFilter = TypedEventFilter<OwnerFunctionCalledEvent>;
export interface IRollupAdmin extends BaseContract {
    contractName: "IRollupAdmin";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IRollupAdminInterface;
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
        forceConfirmNode(nodeNum: BigNumberish, blockHash: BytesLike, sendRoot: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        forceCreateNode(prevNode: BigNumberish, prevNodeInboxMaxCount: BigNumberish, assertion: AssertionStruct, expectedNodeHash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        forceRefundStaker(stacker: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        forceResolveChallenge(stackerA: string[], stackerB: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        initialize(config: ConfigStruct, connectedContracts: ContractDependenciesStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        removeOldOutbox(_outbox: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        resume(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setBaseStake(newBaseStake: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setConfirmPeriodBlocks(newConfirmPeriod: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setDelayedInbox(_inbox: string, _enabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setExtraChallengeTimeBlocks(newExtraTimeBlocks: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setLoserStakeEscrow(newLoserStakerEscrow: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMinimumAssertionPeriod(newPeriod: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setOutbox(_outbox: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setOwner(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setSequencerInbox(_sequencerInbox: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setStakeToken(newStakeToken: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setValidator(_validator: string[], _val: boolean[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setValidatorWhitelistDisabled(_validatorWhitelistDisabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setWasmModuleRoot(newWasmModuleRoot: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        upgradeBeacon(beacon: string, newImplementation: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    forceConfirmNode(nodeNum: BigNumberish, blockHash: BytesLike, sendRoot: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    forceCreateNode(prevNode: BigNumberish, prevNodeInboxMaxCount: BigNumberish, assertion: AssertionStruct, expectedNodeHash: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    forceRefundStaker(stacker: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    forceResolveChallenge(stackerA: string[], stackerB: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    initialize(config: ConfigStruct, connectedContracts: ContractDependenciesStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    pause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    removeOldOutbox(_outbox: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    resume(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setBaseStake(newBaseStake: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setConfirmPeriodBlocks(newConfirmPeriod: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setDelayedInbox(_inbox: string, _enabled: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setExtraChallengeTimeBlocks(newExtraTimeBlocks: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setLoserStakeEscrow(newLoserStakerEscrow: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMinimumAssertionPeriod(newPeriod: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setOutbox(_outbox: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setOwner(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setSequencerInbox(_sequencerInbox: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setStakeToken(newStakeToken: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setValidator(_validator: string[], _val: boolean[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setValidatorWhitelistDisabled(_validatorWhitelistDisabled: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setWasmModuleRoot(newWasmModuleRoot: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    upgradeBeacon(beacon: string, newImplementation: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        forceConfirmNode(nodeNum: BigNumberish, blockHash: BytesLike, sendRoot: BytesLike, overrides?: CallOverrides): Promise<void>;
        forceCreateNode(prevNode: BigNumberish, prevNodeInboxMaxCount: BigNumberish, assertion: AssertionStruct, expectedNodeHash: BytesLike, overrides?: CallOverrides): Promise<void>;
        forceRefundStaker(stacker: string[], overrides?: CallOverrides): Promise<void>;
        forceResolveChallenge(stackerA: string[], stackerB: string[], overrides?: CallOverrides): Promise<void>;
        initialize(config: ConfigStruct, connectedContracts: ContractDependenciesStruct, overrides?: CallOverrides): Promise<void>;
        pause(overrides?: CallOverrides): Promise<void>;
        removeOldOutbox(_outbox: string, overrides?: CallOverrides): Promise<void>;
        resume(overrides?: CallOverrides): Promise<void>;
        setBaseStake(newBaseStake: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setConfirmPeriodBlocks(newConfirmPeriod: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setDelayedInbox(_inbox: string, _enabled: boolean, overrides?: CallOverrides): Promise<void>;
        setExtraChallengeTimeBlocks(newExtraTimeBlocks: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setLoserStakeEscrow(newLoserStakerEscrow: string, overrides?: CallOverrides): Promise<void>;
        setMinimumAssertionPeriod(newPeriod: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setOutbox(_outbox: string, overrides?: CallOverrides): Promise<void>;
        setOwner(newOwner: string, overrides?: CallOverrides): Promise<void>;
        setSequencerInbox(_sequencerInbox: string, overrides?: CallOverrides): Promise<void>;
        setStakeToken(newStakeToken: string, overrides?: CallOverrides): Promise<void>;
        setValidator(_validator: string[], _val: boolean[], overrides?: CallOverrides): Promise<void>;
        setValidatorWhitelistDisabled(_validatorWhitelistDisabled: boolean, overrides?: CallOverrides): Promise<void>;
        setWasmModuleRoot(newWasmModuleRoot: BytesLike, overrides?: CallOverrides): Promise<void>;
        upgradeBeacon(beacon: string, newImplementation: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "OwnerFunctionCalled(uint256)"(id?: BigNumberish | null): OwnerFunctionCalledEventFilter;
        OwnerFunctionCalled(id?: BigNumberish | null): OwnerFunctionCalledEventFilter;
    };
    estimateGas: {
        forceConfirmNode(nodeNum: BigNumberish, blockHash: BytesLike, sendRoot: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        forceCreateNode(prevNode: BigNumberish, prevNodeInboxMaxCount: BigNumberish, assertion: AssertionStruct, expectedNodeHash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        forceRefundStaker(stacker: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        forceResolveChallenge(stackerA: string[], stackerB: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        initialize(config: ConfigStruct, connectedContracts: ContractDependenciesStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        removeOldOutbox(_outbox: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        resume(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setBaseStake(newBaseStake: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setConfirmPeriodBlocks(newConfirmPeriod: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setDelayedInbox(_inbox: string, _enabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setExtraChallengeTimeBlocks(newExtraTimeBlocks: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setLoserStakeEscrow(newLoserStakerEscrow: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMinimumAssertionPeriod(newPeriod: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setOutbox(_outbox: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setOwner(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setSequencerInbox(_sequencerInbox: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setStakeToken(newStakeToken: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setValidator(_validator: string[], _val: boolean[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setValidatorWhitelistDisabled(_validatorWhitelistDisabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setWasmModuleRoot(newWasmModuleRoot: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        upgradeBeacon(beacon: string, newImplementation: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        forceConfirmNode(nodeNum: BigNumberish, blockHash: BytesLike, sendRoot: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        forceCreateNode(prevNode: BigNumberish, prevNodeInboxMaxCount: BigNumberish, assertion: AssertionStruct, expectedNodeHash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        forceRefundStaker(stacker: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        forceResolveChallenge(stackerA: string[], stackerB: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        initialize(config: ConfigStruct, connectedContracts: ContractDependenciesStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        removeOldOutbox(_outbox: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        resume(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setBaseStake(newBaseStake: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setConfirmPeriodBlocks(newConfirmPeriod: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setDelayedInbox(_inbox: string, _enabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setExtraChallengeTimeBlocks(newExtraTimeBlocks: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setLoserStakeEscrow(newLoserStakerEscrow: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMinimumAssertionPeriod(newPeriod: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setOutbox(_outbox: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setOwner(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setSequencerInbox(_sequencerInbox: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setStakeToken(newStakeToken: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setValidator(_validator: string[], _val: boolean[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setValidatorWhitelistDisabled(_validatorWhitelistDisabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setWasmModuleRoot(newWasmModuleRoot: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        upgradeBeacon(beacon: string, newImplementation: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
