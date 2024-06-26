import { SignerOrProvider } from './signerOrProvider';
export interface Network {
    chainID: number;
    name: string;
    explorerUrl: string;
    gif?: string;
    isCustom: boolean;
    /**
     * Minimum possible block time for the chain (in seconds).
     */
    blockTime: number;
    /**
     * Chain ids of children chains, i.e. chains that settle to this chain.
     */
    partnerChainIDs: number[];
}
/**
 * Represents an L1 chain, e.g. Ethereum Mainnet or Sepolia.
 */
export interface L1Network extends Network {
    isArbitrum: false;
}
/**
 * Represents an Arbitrum chain, e.g. Arbitrum One, Arbitrum Sepolia, or an L3 chain.
 */
export interface L2Network extends Network {
    tokenBridge: TokenBridge;
    ethBridge: EthBridge;
    /**
     * Chain id of the parent chain, i.e. the chain on which this chain settles to.
     */
    partnerChainID: number;
    isArbitrum: true;
    confirmPeriodBlocks: number;
    retryableLifetimeSeconds: number;
    nitroGenesisBlock: number;
    nitroGenesisL1Block: number;
    /**
     * How long to wait (ms) for a deposit to arrive on l2 before timing out a request
     */
    depositTimeout: number;
    /**
     * In case of a chain that uses ETH as its native/gas token, this is either `undefined` or the zero address
     *
     * In case of a chain that uses an ERC-20 token from the parent chain as its native/gas token, this is the address of said token on the parent chain
     */
    nativeToken?: string;
}
export interface TokenBridge {
    l1GatewayRouter: string;
    l2GatewayRouter: string;
    l1ERC20Gateway: string;
    l2ERC20Gateway: string;
    l1CustomGateway: string;
    l2CustomGateway: string;
    l1WethGateway: string;
    l2WethGateway: string;
    l2Weth: string;
    l1Weth: string;
    l1ProxyAdmin: string;
    l2ProxyAdmin: string;
    l1MultiCall: string;
    l2Multicall: string;
}
export interface EthBridge {
    bridge: string;
    inbox: string;
    sequencerInbox: string;
    outbox: string;
    rollup: string;
    classicOutboxes?: {
        [addr: string]: number;
    };
}
export interface L1Networks {
    [id: string]: L1Network;
}
export interface L2Networks {
    [id: string]: L2Network;
}
export interface Networks {
    [id: string]: L1Network | L2Network;
}
/**
 * Storage for all networks, either L1, L2 or L3.
 */
export declare const networks: Networks;
/**
 * Determines if a chain is specifically an L1 chain (not L2 or L3).
 */
export declare const isL1Network: (chain: L1Network | L2Network) => chain is L1Network;
/**
 * Returns the parent chain for the given chain.
 */
export declare const getParentForNetwork: (chain: L1Network | L2Network) => L1Network | L2Network;
/**
 * Index of *only* L1 chains that have been added.
 */
export declare let l1Networks: L1Networks;
/**
 * Index of all Arbitrum chains that have been added.
 */
export declare let l2Networks: L2Networks;
/**
 * Returns the network associated with the given Signer, Provider or chain id.
 * @note Throws if the chain is not recognized.
 */
export declare const getNetwork: (signerOrProviderOrChainID: SignerOrProvider | number, layer: 1 | 2) => Promise<L1Network | L2Network>;
/**
 * Returns the L1 chain associated with the given signer, provider or chain id.
 *
 * @note Throws if the chain is not an L1 chain.
 */
export declare const getL1Network: (signerOrProviderOrChainID: SignerOrProvider | number) => Promise<L1Network>;
/**
 * Returns the Arbitrum chain associated with the given signer, provider or chain id.
 *
 * @note Throws if the chain is not an Arbitrum chain.
 */
export declare const getL2Network: (signerOrProviderOrChainID: SignerOrProvider | number) => Promise<L2Network>;
/**
 * Returns the addresses of all contracts that make up the ETH bridge
 * @param rollupContractAddress Address of the Rollup contract
 * @param l1SignerOrProvider A parent chain signer or provider
 * @returns EthBridge object with all information about the ETH bridge
 */
export declare const getEthBridgeInformation: (rollupContractAddress: string, l1SignerOrProvider: SignerOrProvider) => Promise<EthBridge>;
/**
 * Registers a pair of custom L1 and L2 chains, or a single custom Arbitrum chain (L2 or L3).
 *
 * @param customL1Network the custom L1 chain (optional)
 * @param customL2Network the custom L2 or L3 chain
 */
export declare const addCustomNetwork: ({ customL1Network, customL2Network, }: {
    customL1Network?: L1Network | undefined;
    customL2Network: L2Network;
}) => void;
/**
 * Registers a custom network that matches the one created by a Nitro local node. Useful in development.
 *
 * @see {@link https://github.com/OffchainLabs/nitro}
 */
export declare const addDefaultLocalNetwork: () => {
    l1Network: L1Network;
    l2Network: L2Network;
};
declare const resetNetworksToDefault: () => void;
export { resetNetworksToDefault };
