import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface CryptographyPrimitivesTesterInterface extends utils.Interface {
    contractName: "CryptographyPrimitivesTester";
    functions: {
        "keccakF(uint256[25])": FunctionFragment;
        "sha256Block(bytes32[2],bytes32)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "keccakF", values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "sha256Block", values: [[BytesLike, BytesLike], BytesLike]): string;
    decodeFunctionResult(functionFragment: "keccakF", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sha256Block", data: BytesLike): Result;
    events: {};
}
export interface CryptographyPrimitivesTester extends BaseContract {
    contractName: "CryptographyPrimitivesTester";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CryptographyPrimitivesTesterInterface;
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
        keccakF(input: BigNumberish[], overrides?: CallOverrides): Promise<[BigNumber[]]>;
        sha256Block(inputChunk: [BytesLike, BytesLike], hashState: BytesLike, overrides?: CallOverrides): Promise<[string]>;
    };
    keccakF(input: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber[]>;
    sha256Block(inputChunk: [BytesLike, BytesLike], hashState: BytesLike, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        keccakF(input: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber[]>;
        sha256Block(inputChunk: [BytesLike, BytesLike], hashState: BytesLike, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        keccakF(input: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        sha256Block(inputChunk: [BytesLike, BytesLike], hashState: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        keccakF(input: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sha256Block(inputChunk: [BytesLike, BytesLike], hashState: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
