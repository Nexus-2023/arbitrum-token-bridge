import {
  Connector,
  __privateAdd,
  __privateGet,
  __privateMethod,
  __privateSet,
  __publicField
} from "./chunk-5NCTPR6C.js";

// src/walletConnectLegacy.ts
import {
  SwitchChainError,
  UserRejectedRequestError,
  getClient,
  normalizeChainId
} from "@wagmi/core";
import { providers } from "ethers";
import { getAddress, hexValue } from "ethers/lib/utils.js";
var switchChainAllowedRegex = /(imtoken|metamask|rainbow|trust wallet|uniswap wallet|ledger)/i;
var _provider, _switchChain, switchChain_fn;
var WalletConnectLegacyConnector = class extends Connector {
  constructor(config) {
    super(config);
    __privateAdd(this, _switchChain);
    __publicField(this, "id", "walletConnectLegacy");
    __publicField(this, "name", "WalletConnectLegacy");
    __publicField(this, "ready", true);
    __privateAdd(this, _provider, void 0);
    __publicField(this, "onAccountsChanged", (accounts) => {
      if (accounts.length === 0)
        this.emit("disconnect");
      else
        this.emit("change", { account: getAddress(accounts[0]) });
    });
    __publicField(this, "onChainChanged", (chainId) => {
      const id = normalizeChainId(chainId);
      const unsupported = this.isChainUnsupported(id);
      this.emit("change", { chain: { id, unsupported } });
    });
    __publicField(this, "onDisconnect", () => {
      this.emit("disconnect");
    });
  }
  async connect({ chainId } = {}) {
    try {
      let targetChainId = chainId;
      if (!targetChainId) {
        const lastUsedChainId = getClient().lastUsedChainId;
        if (lastUsedChainId && !this.isChainUnsupported(lastUsedChainId))
          targetChainId = lastUsedChainId;
      }
      const provider = await this.getProvider({
        chainId: targetChainId,
        create: true
      });
      provider.on("accountsChanged", this.onAccountsChanged);
      provider.on("chainChanged", this.onChainChanged);
      provider.on("disconnect", this.onDisconnect);
      setTimeout(() => this.emit("message", { type: "connecting" }), 0);
      const accounts = await provider.enable();
      const account = getAddress(accounts[0]);
      const id = await this.getChainId();
      const unsupported = this.isChainUnsupported(id);
      const walletName = provider.connector?.peerMeta?.name ?? "";
      if (switchChainAllowedRegex.test(walletName))
        this.switchChain = __privateMethod(this, _switchChain, switchChain_fn);
      return {
        account,
        chain: { id, unsupported },
        provider: new providers.Web3Provider(
          provider
        )
      };
    } catch (error) {
      if (/user closed modal/i.test(error.message))
        throw new UserRejectedRequestError(error);
      throw error;
    }
  }
  async disconnect() {
    const provider = await this.getProvider();
    await provider.disconnect();
    provider.removeListener("accountsChanged", this.onAccountsChanged);
    provider.removeListener("chainChanged", this.onChainChanged);
    provider.removeListener("disconnect", this.onDisconnect);
    typeof localStorage !== "undefined" && localStorage.removeItem("walletconnect");
  }
  async getAccount() {
    const provider = await this.getProvider();
    const accounts = provider.accounts;
    return getAddress(accounts[0]);
  }
  async getChainId() {
    const provider = await this.getProvider();
    const chainId = normalizeChainId(provider.chainId);
    return chainId;
  }
  async getProvider({
    chainId,
    create
  } = {}) {
    if (!__privateGet(this, _provider) || chainId || create) {
      const rpc = !this.options?.infuraId ? this.chains.reduce(
        (rpc2, chain) => ({
          ...rpc2,
          [chain.id]: chain.rpcUrls.default.http[0]
        }),
        {}
      ) : {};
      const WalletConnectProvider = (await import("@walletconnect/legacy-provider")).default;
      __privateSet(this, _provider, new WalletConnectProvider({
        ...this.options,
        chainId,
        rpc: { ...rpc, ...this.options?.rpc }
      }));
      __privateGet(this, _provider).http = await __privateGet(this, _provider).setHttpProvider(chainId);
    }
    return __privateGet(this, _provider);
  }
  async getSigner({ chainId } = {}) {
    const [provider, account] = await Promise.all([
      this.getProvider({ chainId }),
      this.getAccount()
    ]);
    return new providers.Web3Provider(
      provider,
      chainId
    ).getSigner(account);
  }
  async isAuthorized() {
    try {
      const account = await this.getAccount();
      return !!account;
    } catch {
      return false;
    }
  }
};
_provider = new WeakMap();
_switchChain = new WeakSet();
switchChain_fn = async function(chainId) {
  const provider = await this.getProvider();
  const id = hexValue(chainId);
  try {
    await Promise.race([
      provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: id }]
      }),
      new Promise(
        (res) => this.on("change", ({ chain }) => {
          if (chain?.id === chainId)
            res(chainId);
        })
      )
    ]);
    return this.chains.find((x) => x.id === chainId) ?? {
      id: chainId,
      name: `Chain ${id}`,
      network: `${id}`,
      nativeCurrency: { name: "Ether", decimals: 18, symbol: "ETH" },
      rpcUrls: { default: { http: [""] }, public: { http: [""] } }
    };
  } catch (error) {
    const message = typeof error === "string" ? error : error?.message;
    if (/user rejected request/i.test(message))
      throw new UserRejectedRequestError(error);
    throw new SwitchChainError(error);
  }
};
export {
  WalletConnectLegacyConnector
};
