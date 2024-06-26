import { BaseContract, BigNumber, BigNumberish, Signer, utils } from "ethers";
import { EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IDelayedMessageProviderInterface extends utils.Interface {
    contractName: "IDelayedMessageProvider";
    functions: {};
    events: {
        "InboxMessageDelivered(uint256,bytes)": EventFragment;
        "InboxMessageDeliveredFromOrigin(uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "InboxMessageDelivered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "InboxMessageDeliveredFromOrigin"): EventFragment;
}
export type InboxMessageDeliveredEvent = TypedEvent<[
    BigNumber,
    string
], {
    messageNum: BigNumber;
    data: string;
}>;
export type InboxMessageDeliveredEventFilter = TypedEventFilter<InboxMessageDeliveredEvent>;
export type InboxMessageDeliveredFromOriginEvent = TypedEvent<[
    BigNumber
], {
    messageNum: BigNumber;
}>;
export type InboxMessageDeliveredFromOriginEventFilter = TypedEventFilter<InboxMessageDeliveredFromOriginEvent>;
export interface IDelayedMessageProvider extends BaseContract {
    contractName: "IDelayedMessageProvider";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IDelayedMessageProviderInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {};
    callStatic: {};
    filters: {
        "InboxMessageDelivered(uint256,bytes)"(messageNum?: BigNumberish | null, data?: null): InboxMessageDeliveredEventFilter;
        InboxMessageDelivered(messageNum?: BigNumberish | null, data?: null): InboxMessageDeliveredEventFilter;
        "InboxMessageDeliveredFromOrigin(uint256)"(messageNum?: BigNumberish | null): InboxMessageDeliveredFromOriginEventFilter;
        InboxMessageDeliveredFromOrigin(messageNum?: BigNumberish | null): InboxMessageDeliveredFromOriginEventFilter;
    };
    estimateGas: {};
    populateTransaction: {};
}
