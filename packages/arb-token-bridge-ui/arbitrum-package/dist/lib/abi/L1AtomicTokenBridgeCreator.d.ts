import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export type L1DeploymentAddressesStruct = {
    router: string;
    standardGateway: string;
    customGateway: string;
    wethGateway: string;
    weth: string;
};
export type L1DeploymentAddressesStructOutput = [
    string,
    string,
    string,
    string,
    string
] & {
    router: string;
    standardGateway: string;
    customGateway: string;
    wethGateway: string;
    weth: string;
};
export type L2DeploymentAddressesStruct = {
    router: string;
    standardGateway: string;
    customGateway: string;
    wethGateway: string;
    weth: string;
    proxyAdmin: string;
    beaconProxyFactory: string;
    upgradeExecutor: string;
    multicall: string;
};
export type L2DeploymentAddressesStructOutput = [
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
    router: string;
    standardGateway: string;
    customGateway: string;
    wethGateway: string;
    weth: string;
    proxyAdmin: string;
    beaconProxyFactory: string;
    upgradeExecutor: string;
    multicall: string;
};
export declare namespace L1AtomicTokenBridgeCreator {
    type L1TemplatesStruct = {
        routerTemplate: string;
        standardGatewayTemplate: string;
        customGatewayTemplate: string;
        wethGatewayTemplate: string;
        feeTokenBasedRouterTemplate: string;
        feeTokenBasedStandardGatewayTemplate: string;
        feeTokenBasedCustomGatewayTemplate: string;
        upgradeExecutor: string;
    };
    type L1TemplatesStructOutput = [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
    ] & {
        routerTemplate: string;
        standardGatewayTemplate: string;
        customGatewayTemplate: string;
        wethGatewayTemplate: string;
        feeTokenBasedRouterTemplate: string;
        feeTokenBasedStandardGatewayTemplate: string;
        feeTokenBasedCustomGatewayTemplate: string;
        upgradeExecutor: string;
    };
}
export interface L1AtomicTokenBridgeCreatorInterface extends utils.Interface {
    contractName: "L1AtomicTokenBridgeCreator";
    functions: {
        "canonicalL2FactoryAddress()": FunctionFragment;
        "createTokenBridge(address,address,uint256,uint256)": FunctionFragment;
        "gasLimitForL2FactoryDeployment()": FunctionFragment;
        "getRouter(address)": FunctionFragment;
        "inboxToL1Deployment(address)": FunctionFragment;
        "inboxToL2Deployment(address)": FunctionFragment;
        "initialize(address)": FunctionFragment;
        "l1Multicall()": FunctionFragment;
        "l1Templates()": FunctionFragment;
        "l1Weth()": FunctionFragment;
        "l2CustomGatewayTemplate()": FunctionFragment;
        "l2MulticallTemplate()": FunctionFragment;
        "l2RouterTemplate()": FunctionFragment;
        "l2StandardGatewayTemplate()": FunctionFragment;
        "l2TokenBridgeFactoryTemplate()": FunctionFragment;
        "l2WethGatewayTemplate()": FunctionFragment;
        "l2WethTemplate()": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "retryableSender()": FunctionFragment;
        "setDeployment(address,(address,address,address,address,address),(address,address,address,address,address,address,address,address,address))": FunctionFragment;
        "setTemplates((address,address,address,address,address,address,address,address),address,address,address,address,address,address,address,address,address,uint256)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "canonicalL2FactoryAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "createTokenBridge", values: [string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "gasLimitForL2FactoryDeployment", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRouter", values: [string]): string;
    encodeFunctionData(functionFragment: "inboxToL1Deployment", values: [string]): string;
    encodeFunctionData(functionFragment: "inboxToL2Deployment", values: [string]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string]): string;
    encodeFunctionData(functionFragment: "l1Multicall", values?: undefined): string;
    encodeFunctionData(functionFragment: "l1Templates", values?: undefined): string;
    encodeFunctionData(functionFragment: "l1Weth", values?: undefined): string;
    encodeFunctionData(functionFragment: "l2CustomGatewayTemplate", values?: undefined): string;
    encodeFunctionData(functionFragment: "l2MulticallTemplate", values?: undefined): string;
    encodeFunctionData(functionFragment: "l2RouterTemplate", values?: undefined): string;
    encodeFunctionData(functionFragment: "l2StandardGatewayTemplate", values?: undefined): string;
    encodeFunctionData(functionFragment: "l2TokenBridgeFactoryTemplate", values?: undefined): string;
    encodeFunctionData(functionFragment: "l2WethGatewayTemplate", values?: undefined): string;
    encodeFunctionData(functionFragment: "l2WethTemplate", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "retryableSender", values?: undefined): string;
    encodeFunctionData(functionFragment: "setDeployment", values: [string, L1DeploymentAddressesStruct, L2DeploymentAddressesStruct]): string;
    encodeFunctionData(functionFragment: "setTemplates", values: [
        L1AtomicTokenBridgeCreator.L1TemplatesStruct,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    decodeFunctionResult(functionFragment: "canonicalL2FactoryAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createTokenBridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gasLimitForL2FactoryDeployment", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "inboxToL1Deployment", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "inboxToL2Deployment", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "l1Multicall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "l1Templates", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "l1Weth", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "l2CustomGatewayTemplate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "l2MulticallTemplate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "l2RouterTemplate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "l2StandardGatewayTemplate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "l2TokenBridgeFactoryTemplate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "l2WethGatewayTemplate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "l2WethTemplate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "retryableSender", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDeployment", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTemplates", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "Initialized(uint8)": EventFragment;
        "OrbitTokenBridgeCreated(address,address,tuple,tuple,address,address)": EventFragment;
        "OrbitTokenBridgeDeploymentSet(address,tuple,tuple)": EventFragment;
        "OrbitTokenBridgeTemplatesUpdated()": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OrbitTokenBridgeCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OrbitTokenBridgeDeploymentSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OrbitTokenBridgeTemplatesUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
export type InitializedEvent = TypedEvent<[number], {
    version: number;
}>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export type OrbitTokenBridgeCreatedEvent = TypedEvent<[
    string,
    string,
    L1DeploymentAddressesStructOutput,
    L2DeploymentAddressesStructOutput,
    string,
    string
], {
    inbox: string;
    owner: string;
    l1Deployment: L1DeploymentAddressesStructOutput;
    l2Deployment: L2DeploymentAddressesStructOutput;
    proxyAdmin: string;
    upgradeExecutor: string;
}>;
export type OrbitTokenBridgeCreatedEventFilter = TypedEventFilter<OrbitTokenBridgeCreatedEvent>;
export type OrbitTokenBridgeDeploymentSetEvent = TypedEvent<[
    string,
    L1DeploymentAddressesStructOutput,
    L2DeploymentAddressesStructOutput
], {
    inbox: string;
    l1: L1DeploymentAddressesStructOutput;
    l2: L2DeploymentAddressesStructOutput;
}>;
export type OrbitTokenBridgeDeploymentSetEventFilter = TypedEventFilter<OrbitTokenBridgeDeploymentSetEvent>;
export type OrbitTokenBridgeTemplatesUpdatedEvent = TypedEvent<[], {}>;
export type OrbitTokenBridgeTemplatesUpdatedEventFilter = TypedEventFilter<OrbitTokenBridgeTemplatesUpdatedEvent>;
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], {
    previousOwner: string;
    newOwner: string;
}>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface L1AtomicTokenBridgeCreator extends BaseContract {
    contractName: "L1AtomicTokenBridgeCreator";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: L1AtomicTokenBridgeCreatorInterface;
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
        canonicalL2FactoryAddress(overrides?: CallOverrides): Promise<[string]>;
        createTokenBridge(inbox: string, rollupOwner: string, maxGasForContracts: BigNumberish, gasPriceBid: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        gasLimitForL2FactoryDeployment(overrides?: CallOverrides): Promise<[BigNumber]>;
        getRouter(inbox: string, overrides?: CallOverrides): Promise<[string]>;
        inboxToL1Deployment(arg0: string, overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            string,
            string
        ] & {
            router: string;
            standardGateway: string;
            customGateway: string;
            wethGateway: string;
            weth: string;
        }>;
        inboxToL2Deployment(arg0: string, overrides?: CallOverrides): Promise<[
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
            router: string;
            standardGateway: string;
            customGateway: string;
            wethGateway: string;
            weth: string;
            proxyAdmin: string;
            beaconProxyFactory: string;
            upgradeExecutor: string;
            multicall: string;
        }>;
        initialize(_retryableSender: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        l1Multicall(overrides?: CallOverrides): Promise<[string]>;
        l1Templates(overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string
        ] & {
            routerTemplate: string;
            standardGatewayTemplate: string;
            customGatewayTemplate: string;
            wethGatewayTemplate: string;
            feeTokenBasedRouterTemplate: string;
            feeTokenBasedStandardGatewayTemplate: string;
            feeTokenBasedCustomGatewayTemplate: string;
            upgradeExecutor: string;
        }>;
        l1Weth(overrides?: CallOverrides): Promise<[string]>;
        l2CustomGatewayTemplate(overrides?: CallOverrides): Promise<[string]>;
        l2MulticallTemplate(overrides?: CallOverrides): Promise<[string]>;
        l2RouterTemplate(overrides?: CallOverrides): Promise<[string]>;
        l2StandardGatewayTemplate(overrides?: CallOverrides): Promise<[string]>;
        l2TokenBridgeFactoryTemplate(overrides?: CallOverrides): Promise<[string]>;
        l2WethGatewayTemplate(overrides?: CallOverrides): Promise<[string]>;
        l2WethTemplate(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        retryableSender(overrides?: CallOverrides): Promise<[string]>;
        setDeployment(inbox: string, l1Deployment: L1DeploymentAddressesStruct, l2Deployment: L2DeploymentAddressesStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setTemplates(_l1Templates: L1AtomicTokenBridgeCreator.L1TemplatesStruct, _l2TokenBridgeFactoryTemplate: string, _l2RouterTemplate: string, _l2StandardGatewayTemplate: string, _l2CustomGatewayTemplate: string, _l2WethGatewayTemplate: string, _l2WethTemplate: string, _l2MulticallTemplate: string, _l1Weth: string, _l1Multicall: string, _gasLimitForL2FactoryDeployment: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    canonicalL2FactoryAddress(overrides?: CallOverrides): Promise<string>;
    createTokenBridge(inbox: string, rollupOwner: string, maxGasForContracts: BigNumberish, gasPriceBid: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    gasLimitForL2FactoryDeployment(overrides?: CallOverrides): Promise<BigNumber>;
    getRouter(inbox: string, overrides?: CallOverrides): Promise<string>;
    inboxToL1Deployment(arg0: string, overrides?: CallOverrides): Promise<[
        string,
        string,
        string,
        string,
        string
    ] & {
        router: string;
        standardGateway: string;
        customGateway: string;
        wethGateway: string;
        weth: string;
    }>;
    inboxToL2Deployment(arg0: string, overrides?: CallOverrides): Promise<[
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
        router: string;
        standardGateway: string;
        customGateway: string;
        wethGateway: string;
        weth: string;
        proxyAdmin: string;
        beaconProxyFactory: string;
        upgradeExecutor: string;
        multicall: string;
    }>;
    initialize(_retryableSender: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    l1Multicall(overrides?: CallOverrides): Promise<string>;
    l1Templates(overrides?: CallOverrides): Promise<[
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
    ] & {
        routerTemplate: string;
        standardGatewayTemplate: string;
        customGatewayTemplate: string;
        wethGatewayTemplate: string;
        feeTokenBasedRouterTemplate: string;
        feeTokenBasedStandardGatewayTemplate: string;
        feeTokenBasedCustomGatewayTemplate: string;
        upgradeExecutor: string;
    }>;
    l1Weth(overrides?: CallOverrides): Promise<string>;
    l2CustomGatewayTemplate(overrides?: CallOverrides): Promise<string>;
    l2MulticallTemplate(overrides?: CallOverrides): Promise<string>;
    l2RouterTemplate(overrides?: CallOverrides): Promise<string>;
    l2StandardGatewayTemplate(overrides?: CallOverrides): Promise<string>;
    l2TokenBridgeFactoryTemplate(overrides?: CallOverrides): Promise<string>;
    l2WethGatewayTemplate(overrides?: CallOverrides): Promise<string>;
    l2WethTemplate(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    retryableSender(overrides?: CallOverrides): Promise<string>;
    setDeployment(inbox: string, l1Deployment: L1DeploymentAddressesStruct, l2Deployment: L2DeploymentAddressesStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setTemplates(_l1Templates: L1AtomicTokenBridgeCreator.L1TemplatesStruct, _l2TokenBridgeFactoryTemplate: string, _l2RouterTemplate: string, _l2StandardGatewayTemplate: string, _l2CustomGatewayTemplate: string, _l2WethGatewayTemplate: string, _l2WethTemplate: string, _l2MulticallTemplate: string, _l1Weth: string, _l1Multicall: string, _gasLimitForL2FactoryDeployment: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        canonicalL2FactoryAddress(overrides?: CallOverrides): Promise<string>;
        createTokenBridge(inbox: string, rollupOwner: string, maxGasForContracts: BigNumberish, gasPriceBid: BigNumberish, overrides?: CallOverrides): Promise<void>;
        gasLimitForL2FactoryDeployment(overrides?: CallOverrides): Promise<BigNumber>;
        getRouter(inbox: string, overrides?: CallOverrides): Promise<string>;
        inboxToL1Deployment(arg0: string, overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            string,
            string
        ] & {
            router: string;
            standardGateway: string;
            customGateway: string;
            wethGateway: string;
            weth: string;
        }>;
        inboxToL2Deployment(arg0: string, overrides?: CallOverrides): Promise<[
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
            router: string;
            standardGateway: string;
            customGateway: string;
            wethGateway: string;
            weth: string;
            proxyAdmin: string;
            beaconProxyFactory: string;
            upgradeExecutor: string;
            multicall: string;
        }>;
        initialize(_retryableSender: string, overrides?: CallOverrides): Promise<void>;
        l1Multicall(overrides?: CallOverrides): Promise<string>;
        l1Templates(overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string
        ] & {
            routerTemplate: string;
            standardGatewayTemplate: string;
            customGatewayTemplate: string;
            wethGatewayTemplate: string;
            feeTokenBasedRouterTemplate: string;
            feeTokenBasedStandardGatewayTemplate: string;
            feeTokenBasedCustomGatewayTemplate: string;
            upgradeExecutor: string;
        }>;
        l1Weth(overrides?: CallOverrides): Promise<string>;
        l2CustomGatewayTemplate(overrides?: CallOverrides): Promise<string>;
        l2MulticallTemplate(overrides?: CallOverrides): Promise<string>;
        l2RouterTemplate(overrides?: CallOverrides): Promise<string>;
        l2StandardGatewayTemplate(overrides?: CallOverrides): Promise<string>;
        l2TokenBridgeFactoryTemplate(overrides?: CallOverrides): Promise<string>;
        l2WethGatewayTemplate(overrides?: CallOverrides): Promise<string>;
        l2WethTemplate(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        retryableSender(overrides?: CallOverrides): Promise<string>;
        setDeployment(inbox: string, l1Deployment: L1DeploymentAddressesStruct, l2Deployment: L2DeploymentAddressesStruct, overrides?: CallOverrides): Promise<void>;
        setTemplates(_l1Templates: L1AtomicTokenBridgeCreator.L1TemplatesStruct, _l2TokenBridgeFactoryTemplate: string, _l2RouterTemplate: string, _l2StandardGatewayTemplate: string, _l2CustomGatewayTemplate: string, _l2WethGatewayTemplate: string, _l2WethTemplate: string, _l2MulticallTemplate: string, _l1Weth: string, _l1Multicall: string, _gasLimitForL2FactoryDeployment: BigNumberish, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "OrbitTokenBridgeCreated(address,address,tuple,tuple,address,address)"(inbox?: string | null, owner?: string | null, l1Deployment?: null, l2Deployment?: null, proxyAdmin?: null, upgradeExecutor?: null): OrbitTokenBridgeCreatedEventFilter;
        OrbitTokenBridgeCreated(inbox?: string | null, owner?: string | null, l1Deployment?: null, l2Deployment?: null, proxyAdmin?: null, upgradeExecutor?: null): OrbitTokenBridgeCreatedEventFilter;
        "OrbitTokenBridgeDeploymentSet(address,tuple,tuple)"(inbox?: string | null, l1?: null, l2?: null): OrbitTokenBridgeDeploymentSetEventFilter;
        OrbitTokenBridgeDeploymentSet(inbox?: string | null, l1?: null, l2?: null): OrbitTokenBridgeDeploymentSetEventFilter;
        "OrbitTokenBridgeTemplatesUpdated()"(): OrbitTokenBridgeTemplatesUpdatedEventFilter;
        OrbitTokenBridgeTemplatesUpdated(): OrbitTokenBridgeTemplatesUpdatedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        canonicalL2FactoryAddress(overrides?: CallOverrides): Promise<BigNumber>;
        createTokenBridge(inbox: string, rollupOwner: string, maxGasForContracts: BigNumberish, gasPriceBid: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        gasLimitForL2FactoryDeployment(overrides?: CallOverrides): Promise<BigNumber>;
        getRouter(inbox: string, overrides?: CallOverrides): Promise<BigNumber>;
        inboxToL1Deployment(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        inboxToL2Deployment(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_retryableSender: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        l1Multicall(overrides?: CallOverrides): Promise<BigNumber>;
        l1Templates(overrides?: CallOverrides): Promise<BigNumber>;
        l1Weth(overrides?: CallOverrides): Promise<BigNumber>;
        l2CustomGatewayTemplate(overrides?: CallOverrides): Promise<BigNumber>;
        l2MulticallTemplate(overrides?: CallOverrides): Promise<BigNumber>;
        l2RouterTemplate(overrides?: CallOverrides): Promise<BigNumber>;
        l2StandardGatewayTemplate(overrides?: CallOverrides): Promise<BigNumber>;
        l2TokenBridgeFactoryTemplate(overrides?: CallOverrides): Promise<BigNumber>;
        l2WethGatewayTemplate(overrides?: CallOverrides): Promise<BigNumber>;
        l2WethTemplate(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        retryableSender(overrides?: CallOverrides): Promise<BigNumber>;
        setDeployment(inbox: string, l1Deployment: L1DeploymentAddressesStruct, l2Deployment: L2DeploymentAddressesStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setTemplates(_l1Templates: L1AtomicTokenBridgeCreator.L1TemplatesStruct, _l2TokenBridgeFactoryTemplate: string, _l2RouterTemplate: string, _l2StandardGatewayTemplate: string, _l2CustomGatewayTemplate: string, _l2WethGatewayTemplate: string, _l2WethTemplate: string, _l2MulticallTemplate: string, _l1Weth: string, _l1Multicall: string, _gasLimitForL2FactoryDeployment: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        canonicalL2FactoryAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createTokenBridge(inbox: string, rollupOwner: string, maxGasForContracts: BigNumberish, gasPriceBid: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        gasLimitForL2FactoryDeployment(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRouter(inbox: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        inboxToL1Deployment(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        inboxToL2Deployment(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_retryableSender: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        l1Multicall(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        l1Templates(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        l1Weth(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        l2CustomGatewayTemplate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        l2MulticallTemplate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        l2RouterTemplate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        l2StandardGatewayTemplate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        l2TokenBridgeFactoryTemplate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        l2WethGatewayTemplate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        l2WethTemplate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        retryableSender(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setDeployment(inbox: string, l1Deployment: L1DeploymentAddressesStruct, l2Deployment: L2DeploymentAddressesStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setTemplates(_l1Templates: L1AtomicTokenBridgeCreator.L1TemplatesStruct, _l2TokenBridgeFactoryTemplate: string, _l2RouterTemplate: string, _l2StandardGatewayTemplate: string, _l2CustomGatewayTemplate: string, _l2WethGatewayTemplate: string, _l2WethTemplate: string, _l2MulticallTemplate: string, _l1Weth: string, _l1Multicall: string, _gasLimitForL2FactoryDeployment: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
