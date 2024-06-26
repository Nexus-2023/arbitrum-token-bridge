import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IMessageProvider, IMessageProviderInterface } from "../IMessageProvider";
export declare class IMessageProvider__factory {
    static readonly abi: {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
    }[];
    static createInterface(): IMessageProviderInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IMessageProvider;
}
