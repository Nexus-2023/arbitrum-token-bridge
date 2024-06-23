import { Signer, ContractFactory, Overrides, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SequencerInboxStub, SequencerInboxStubInterface, ISequencerInbox } from "../SequencerInboxStub";
type SequencerInboxStubConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SequencerInboxStub__factory extends ContractFactory {
    constructor(...args: SequencerInboxStubConstructorParams);
    deploy(bridge_: string, sequencer_: string, maxTimeVariation_: ISequencerInbox.MaxTimeVariationStruct, maxDataSize_: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<SequencerInboxStub>;
    getDeployTransaction(bridge_: string, sequencer_: string, maxTimeVariation_: ISequencerInbox.MaxTimeVariationStruct, maxDataSize_: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): SequencerInboxStub;
    connect(signer: Signer): SequencerInboxStub__factory;
    static readonly contractName: "SequencerInboxStub";
    readonly contractName: "SequencerInboxStub";
    static readonly bytecode = "0x610100604052306080524660c05262000023620000c5602090811b62001c4217901c565b151560e0523480156200003557600080fd5b5060405162002e2238038062002e2283398101604081905262000058916200017b565b60a052600180546001600160a01b039485166001600160a01b03199182161782556002805490911633179055815160045560208083015160055560408084015160065560609093015160075592909316600090815260039092529020805460ff1916909117905562000272565b60408051600481526024810182526020810180516001600160e01b03166302881c7960e11b17905290516000918291829160649162000105919062000234565b600060405180830381855afa9150503d806000811462000142576040519150601f19603f3d011682016040523d82523d6000602084013e62000147565b606091505b50915091508180156200015b575080516020145b9250505090565b6001600160a01b03811681146200017857600080fd5b50565b60008060008084860360e08112156200019357600080fd5b8551620001a08162000162565b6020870151909550620001b38162000162565b93506080603f1982011215620001c857600080fd5b50604051608081016001600160401b0381118282101715620001fa57634e487b7160e01b600052604160045260246000fd5b6040908152868101518252606080880151602084015260808801519183019190915260a08701519082015260c09095015193969295505050565b6000825160005b818110156200025757602081860181015185830152016200023b565b8181111562000267576000828501525b509190910192915050565b60805160a05160c05160e051612b61620002c1600039600081816115370152611e820152600061122f0152600081816103d201528181612123015261215f015260006104c80152612b616000f3fe608060405234801561001057600080fd5b50600436106101795760003560e01c80637fa3a40e116100d9578063d9dd67ab11610087578063d9dd67ab14610370578063e0bc972914610383578063e5a358c814610396578063e78cea92146103ba578063e8eb1dc3146103cd578063ebea461d146103f4578063f19815781461042a57600080fd5b80637fa3a40e146102e857806384420860146102f15780638f111f3c1461030457806396cc5c7814610317578063b31761f81461031f578063cb23bcb514610332578063d1ce8da81461035d57600080fd5b80636633ae85116101365780636633ae851461020f5780636ae71f12146102225780636d46e9871461022a5780636e7df3e71461024d5780636f12b0c914610260578063715ea34b1461027357806371c3e6fe146102c557600080fd5b806306f130561461017e5780631637be48146101995780631f7a92b2146101cc5780631f956632146101e1578063258f0495146101f457806327957a4914610207575b600080fd5b61018661043d565b6040519081526020015b60405180910390f35b6101bc6101a736600461238c565b60009081526008602052604090205460ff1690565b6040519015158152602001610190565b6101df6101da3660046123bd565b6104bd565b005b6101df6101ef36600461240c565b610675565b61018661020236600461238c565b61077b565b610186602881565b6101df61021d36600461238c565b6107e4565b6101df6109cf565b6101bc610238366004612445565b60096020526000908152604090205460ff1681565b6101df61025b36600461240c565b610bd5565b6101df61026e3660046124b1565b610cdb565b6102a661028136600461238c565b60086020526000908152604090205460ff81169061010090046001600160401b031682565b6040805192151583526001600160401b03909116602083015201610190565b6101bc6102d3366004612445565b60036020526000908152604090205460ff1681565b61018660005481565b6101df6102ff36600461238c565b610eca565b6101df61031236600461251b565b61101d565b6101df61122c565b6101df61032d366004612597565b6112a3565b600254610345906001600160a01b031681565b6040516001600160a01b039091168152602001610190565b6101df61036b36600461260a565b6113a3565b61018661037e36600461238c565b611687565b6101df61039136600461251b565b61170a565b6103a1600160fe1b81565b6040516001600160f81b03199091168152602001610190565b600154610345906001600160a01b031681565b6101867f000000000000000000000000000000000000000000000000000000000000000081565b60045460055460065460075461040a9392919084565b604080519485526020850193909352918301526060820152608001610190565b6101df61043836600461264b565b61185f565b600154604080516221048360e21b815290516000926001600160a01b0316916284120c916004808301926020929190829003018186803b15801561048057600080fd5b505afa158015610494573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b891906126bb565b905090565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156105505760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b60648201526084015b60405180910390fd5b6001546001600160a01b03161561057a57604051633bcd329760e21b815260040160405180910390fd5b6001600160a01b0382166105a157604051631ad0f74360e01b815260040160405180910390fd5b600180546001600160a01b0319166001600160a01b0384169081179091556040805163cb23bcb560e01b8152905163cb23bcb591600480820192602092909190829003018186803b1580156105f557600080fd5b505afa158015610609573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061062d91906126d4565b600280546001600160a01b0319166001600160a01b03929092169190911790558035600490815560208201356005556040820135600655606082013560075581905b50505050565b600260009054906101000a90046001600160a01b03166001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156106c357600080fd5b505afa1580156106d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106fb91906126d4565b6001600160a01b0316336001600160a01b03161461073d57600254604051631194af8760e11b81526105479133916001600160a01b03909116906004016126f1565b6001600160a01b038216600090815260096020526040808220805460ff191684151517905551600491600080516020612b0c83398151915291a25050565b600081815260086020908152604080832081518083019092525460ff81161515825261010090046001600160401b0316918101829052906107d15760405162f20c5d60e01b815260048101849052602401610547565b602001516001600160401b031692915050565b6000816040516020016107f991815260200190565b60408051808303601f190181529082905260015481516020830120638db5993b60e01b8452600b6004850152600060248501819052604485019190915291935090916001600160a01b0390911690638db5993b90606401602060405180830381600087803b15801561086a57600080fd5b505af115801561087e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108a291906126bb565b905080156108e95760405162461bcd60e51b81526020600482015260146024820152731053149150511657d111531056515117d253925560621b6044820152606401610547565b807fff64905f73a67fb594e0f940a8075a860db489ad991e032f48c81123eb52d60b836040516109199190612737565b60405180910390a260008061092e6001611cda565b915091506000806000806109488660016000806001611d06565b9350935093509350836000146109935760405162461bcd60e51b815260206004820152601060248201526f1053149150511657d4d15457d253925560821b6044820152606401610547565b808385600080516020612aec833981519152856000548a60026040516109bc949392919061276a565b60405180910390a4505050505050505050565b600260009054906101000a90046001600160a01b03166001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b158015610a1d57600080fd5b505afa158015610a31573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a5591906126d4565b6001600160a01b0316336001600160a01b031614610b045760025460408051638da5cb5b60e01b8152905133926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b158015610ab157600080fd5b505afa158015610ac5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ae991906126d4565b604051631194af8760e11b81526004016105479291906126f1565b6001546040805163cb23bcb560e01b815290516000926001600160a01b03169163cb23bcb5916004808301926020929190829003018186803b158015610b4957600080fd5b505afa158015610b5d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b8191906126d4565b6002549091506001600160a01b0380831691161415610bb35760405163d054909f60e01b815260040160405180910390fd5b600280546001600160a01b0319166001600160a01b0392909216919091179055565b600260009054906101000a90046001600160a01b03166001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b158015610c2357600080fd5b505afa158015610c37573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c5b91906126d4565b6001600160a01b0316336001600160a01b031614610c9d57600254604051631194af8760e11b81526105479133916001600160a01b03909116906004016126f1565b6001600160a01b038216600090815260036020526040808220805460ff191684151517905551600191600080516020612b0c83398151915291a25050565b8060005a9050333214610d015760405163feb3d07160e01b815260040160405180910390fd5b3360009081526003602052604090205460ff16610d3157604051632dd9fc9760e01b815260040160405180910390fd5b600080610d3f888888612106565b90925090506000808080610d56868b8d8480611d06565b93509350935093508c8414610d885760405163ac7411c960e01b815260048101859052602481018e9052604401610547565b80838e600080516020612aec833981519152856000548a6000604051610db1949392919061276a565b60405180910390a4505050506001600160a01b038416159150610ec19050573660006020610de083601f6127f4565b610dea919061280c565b9050610200610dfa600283612912565b610e04919061280c565b610e0f826006612921565b610e1991906127f4565b610e2390846127f4565b9250333214610e3157600091505b836001600160a01b031663e3db8a49335a610e4c9087612940565b856040518463ffffffff1660e01b8152600401610e6b93929190612957565b602060405180830381600087803b158015610e8557600080fd5b505af1158015610e99573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ebd9190612978565b5050505b50505050505050565b600260009054906101000a90046001600160a01b03166001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b158015610f1857600080fd5b505afa158015610f2c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f5091906126d4565b6001600160a01b0316336001600160a01b031614610f9257600254604051631194af8760e11b81526105479133916001600160a01b03909116906004016126f1565b60008181526008602052604090205460ff16610fc35760405162f20c5d60e01b815260048101829052602401610547565b600081815260086020526040808220805460ff191690555182917f5cb4218b272fd214168ac43e90fb4d05d6c36f0b17ffb4c2dd07c234d744eb2a91a2604051600390600080516020612b0c83398151915290600090a250565b8260005a90503332146110435760405163feb3d07160e01b815260040160405180910390fd5b3360009081526003602052604090205460ff1661107357604051632dd9fc9760e01b815260040160405180910390fd5b6000806110818a8a8a612106565b90925090508a81838b8b8a8a600080808061109f89888a8989611d06565b93509350935093508a84141580156110b957506000198b14155b156110e15760405163ac7411c960e01b815260048101859052602481018c9052604401610547565b808385600080516020612aec833981519152856000548f600060405161110a949392919061276a565b60405180910390a4505050506001600160a01b038b1615985061122197505050505050505057366000602061114083601f6127f4565b61114a919061280c565b905061020061115a600283612912565b611164919061280c565b61116f826006612921565b61117991906127f4565b61118390846127f4565b925033321461119157600091505b836001600160a01b031663e3db8a49335a6111ac9087612940565b856040518463ffffffff1660e01b81526004016111cb93929190612957565b602060405180830381600087803b1580156111e557600080fd5b505af11580156111f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061121d9190612978565b5050505b505050505050505050565b467f0000000000000000000000000000000000000000000000000000000000000000141561126d57604051635180dd8360e11b815260040160405180910390fd5b60408051608081018252600180825260208201819052918101829052606001819052600481905560058190556006819055600755565b600260009054906101000a90046001600160a01b03166001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156112f157600080fd5b505afa158015611305573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061132991906126d4565b6001600160a01b0316336001600160a01b03161461136b57600254604051631194af8760e11b81526105479133916001600160a01b03909116906004016126f1565b80516004556020810151600555604080820151600655606082015160075551600090600080516020612b0c833981519152908290a250565b600260009054906101000a90046001600160a01b03166001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156113f157600080fd5b505afa158015611405573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061142991906126d4565b6001600160a01b0316336001600160a01b03161461146b57600254604051631194af8760e11b81526105479133916001600160a01b03909116906004016126f1565b6000828260405161147d929190612995565b604051908190038120607f60f91b6020830152602182015260410160408051601f1981840301815291905280516020909101209050600160ff1b81186201000083106115015760405162461bcd60e51b81526020600482015260136024820152726b657973657420697320746f6f206c6172676560681b6044820152606401610547565b60008181526008602052604090205460ff161561153457604051637d17eeed60e11b815260048101829052602401610547565b437f0000000000000000000000000000000000000000000000000000000000000000156115d05760646001600160a01b031663a3b1b31d6040518163ffffffff1660e01b815260040160206040518083038186803b15801561159557600080fd5b505afa1580156115a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115cd91906126bb565b90505b604080518082018252600181526001600160401b0383811660208084019182526000878152600890915284902092518354915168ffffffffffffffffff1990921690151568ffffffffffffffff0019161761010091909216021790555182907fabca9b7986bc22ad0160eb0cb88ae75411eacfba4052af0b457a9335ef6557229061165e90889088906129a5565b60405180910390a2604051600290600080516020612b0c83398151915290600090a25050505050565b6001546040516316bf557960e01b8152600481018390526000916001600160a01b0316906316bf55799060240160206040518083038186803b1580156116cc57600080fd5b505afa1580156116e0573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061170491906126bb565b92915050565b8260005a3360009081526003602052604090205490915060ff1615801561173c57506002546001600160a01b03163314155b1561175a57604051632dd9fc9760e01b815260040160405180910390fd5b6000806117688a8a8a612106565b909250905060008b82848b8a8a8680806117858787838888611d06565b929c5090945092509050888a148015906117a157506000198914155b156117c95760405163ac7411c960e01b8152600481018b9052602481018a9052604401610547565b80838b600080516020612aec833981519152856000548d60016040516117f2949392919061276a565b60405180910390a4505050505050505050807ffe325ca1efe4c5c1062c981c3ee74b781debe4ea9440306a96d2a55759c66c208c8c6040516118359291906129a5565b60405180910390a25050506001600160a01b0382161561122157366000602061114083601f6127f4565b600054861161188157604051633eb9f37d60e11b815260040160405180910390fd5b6000611931868461189560208901896129ea565b6118a560408a0160208b016129ea565b6118b060018d612940565b6040805160f89690961b6001600160f81b03191660208088019190915260609590951b6001600160601b031916602187015260c093841b6001600160c01b031990811660358801529290931b909116603d85015260458401526065830188905260858084018790528151808503909101815260a59093019052815191012090565b600454909150439061194660208801886129ea565b6001600160401b031661195991906127f4565b106119775760405163ad3515d960e01b815260040160405180910390fd5b600654429061198c60408801602089016129ea565b6001600160401b031661199f91906127f4565b106119bd5760405163c76d17e560e01b815260040160405180910390fd5b60006001881115611a55576001546001600160a01b031663d5719dc26119e460028b612940565b6040518263ffffffff1660e01b8152600401611a0291815260200190565b60206040518083038186803b158015611a1a57600080fd5b505afa158015611a2e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a5291906126bb565b90505b60408051602080820184905281830185905282518083038401815260609092019092528051910120600180546001600160a01b03169063d5719dc290611a9b908c612940565b6040518263ffffffff1660e01b8152600401611ab991815260200190565b60206040518083038186803b158015611ad157600080fd5b505afa158015611ae5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b0991906126bb565b14611b27576040516313947fd760e01b815260040160405180910390fd5b600080611b338a611cda565b9150915060008a90506000600160009054906101000a90046001600160a01b03166001600160a01b0316635fca4a166040518163ffffffff1660e01b815260040160206040518083038186803b158015611b8c57600080fd5b505afa158015611ba0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bc491906126bb565b9050600080548d83611bd691906127f4565b611be09190612940565b9050600080600080611bf6898860008989611d06565b9350935093509350808385600080516020612aec833981519152856000548d6002604051611c27949392919061276a565b60405180910390a45050505050505050505050505050505050565b60408051600481526024810182526020810180516001600160e01b03166302881c7960e11b179052905160009182918291606491611c809190612a13565b600060405180830381855afa9150503d8060008114611cbb576040519150601f19603f3d011682016040523d82523d6000602084013e611cc0565b606091505b5091509150818015611cd3575080516020145b9250505090565b6000611ce4612365565b600080611cf0856122b3565b8151602090920191909120969095509350505050565b600080600080600054881015611d2f57604051633eb9f37d60e11b815260040160405180910390fd5b600160009054906101000a90046001600160a01b03166001600160a01b031663eca067ad6040518163ffffffff1660e01b815260040160206040518083038186803b158015611d7d57600080fd5b505afa158015611d91573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611db591906126bb565b881115611dd55760405163925f8bd360e01b815260040160405180910390fd5b60015460405163432cc52b60e11b8152600481018b9052602481018a905260448101889052606481018790526001600160a01b03909116906386598a5690608401608060405180830381600087803b158015611e3057600080fd5b505af1158015611e44573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e689190612a2f565b60008c90559296509094509250905086156120fa573360607f000000000000000000000000000000000000000000000000000000000000000015611fd5576000606c6001600160a01b031663c6f7de0e6040518163ffffffff1660e01b815260040160206040518083038186803b158015611ee257600080fd5b505afa158015611ef6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f1a91906126bb565b90506000611f28488361280c565b90506001600160401b03811115611f755760405162461bcd60e51b8152602060048201526011602482015270130c57d1d054d7d393d517d55253950d8d607a1b6044820152606401610547565b60408051426020820152606086901b6001600160601b03191681830152605481018f9052607481018a905248609482015260c09290921b6001600160c01b03191660b48301528051609c81840301815260bc9092019052915061201e9050565b604080514260208201526001600160601b0319606085901b1691810191909152605481018c90526074810187905248609482015260b40160405160208183030381529060405290505b60015481516020830120604051637a88b10760e01b81526000926001600160a01b031691637a88b1079161206a9187916004016001600160a01b03929092168252602082015260400190565b602060405180830381600087803b15801561208457600080fd5b505af1158015612098573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120bc91906126bb565b9050807fff64905f73a67fb594e0f940a8075a860db489ad991e032f48c81123eb52d60b836040516120ee9190612737565b60405180910390a25050505b95509550955095915050565b6000612110612365565b8484600061211f8260286127f4565b90507f000000000000000000000000000000000000000000000000000000000000000081111561218b57604051634634691b60e01b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006024820152604401610547565b81158015906121c35750600160fe1b8084846000816121ac576121ac6129d4565b9050013560f81c60f81b166001600160f81b031916145b156121e157604051631f97007f60e01b815260040160405180910390fd5b6021821080159061220f575082826000818110612200576122006129d4565b90910135600160ff1b16151590505b15612263576000612224602160018587612a65565b61222d91612a8f565b60008181526008602052604090205490915060ff166122615760405162f20c5d60e01b815260048101829052602401610547565b505b60008061226f886122b3565b915091506000828b8b60405160200161228a93929190612aad565b60408051808303601f1901815291905280516020909101209b919a509098505050505050505050565b60606122bd612365565b60006122c761235a565b9050600081600001518260200151836040015184606001518860405160200161232f95949392919060c095861b6001600160c01b0319908116825294861b8516600882015292851b8416601084015290841b8316601883015290921b16602082015260280190565b6040516020818303038152906040529050602881511461235157612351612ad5565b94909350915050565b612362612365565b90565b60408051608081018252600080825260208201819052918101829052606081019190915290565b60006020828403121561239e57600080fd5b5035919050565b6001600160a01b03811681146123ba57600080fd5b50565b60008082840360a08112156123d157600080fd5b83356123dc816123a5565b92506080601f19820112156123f057600080fd5b506020830190509250929050565b80151581146123ba57600080fd5b6000806040838503121561241f57600080fd5b823561242a816123a5565b9150602083013561243a816123fe565b809150509250929050565b60006020828403121561245757600080fd5b8135612462816123a5565b9392505050565b60008083601f84011261247b57600080fd5b5081356001600160401b0381111561249257600080fd5b6020830191508360208285010111156124aa57600080fd5b9250929050565b6000806000806000608086880312156124c957600080fd5b8535945060208601356001600160401b038111156124e657600080fd5b6124f288828901612469565b90955093505060408601359150606086013561250d816123a5565b809150509295509295909350565b600080600080600080600060c0888a03121561253657600080fd5b8735965060208801356001600160401b0381111561255357600080fd5b61255f8a828b01612469565b90975095505060408801359350606088013561257a816123a5565b969995985093969295946080840135945060a09093013592915050565b6000608082840312156125a957600080fd5b604051608081018181106001600160401b03821117156125d957634e487b7160e01b600052604160045260246000fd5b8060405250823581526020830135602082015260408301356040820152606083013560608201528091505092915050565b6000806020838503121561261d57600080fd5b82356001600160401b0381111561263357600080fd5b61263f85828601612469565b90969095509350505050565b60008060008060008060e0878903121561266457600080fd5b86359550602087013560ff8116811461267c57600080fd5b9450608087018881111561268f57600080fd5b60408801945035925060a08701356126a6816123a5565b8092505060c087013590509295509295509295565b6000602082840312156126cd57600080fd5b5051919050565b6000602082840312156126e657600080fd5b8151612462816123a5565b6001600160a01b0392831681529116602082015260400190565b60005b8381101561272657818101518382015260200161270e565b8381111561066f5750506000910152565b602081526000825180602084015261275681604085016020870161270b565b601f01601f19169190910160400192915050565b600060e0820190508582528460208301526001600160401b038085511660408401528060208601511660608401528060408601511660808401528060608601511660a084015250600383106127cf57634e487b7160e01b600052602160045260246000fd5b8260c083015295945050505050565b634e487b7160e01b600052601160045260246000fd5b60008219821115612807576128076127de565b500190565b60008261282957634e487b7160e01b600052601260045260246000fd5b500490565b600181815b8085111561286957816000190482111561284f5761284f6127de565b8085161561285c57918102915b93841c9390800290612833565b509250929050565b60008261288057506001611704565b8161288d57506000611704565b81600181146128a357600281146128ad576128c9565b6001915050611704565b60ff8411156128be576128be6127de565b50506001821b611704565b5060208310610133831016604e8410600b84101617156128ec575081810a611704565b6128f6838361282e565b806000190482111561290a5761290a6127de565b029392505050565b600061246260ff841683612871565b600081600019048311821515161561293b5761293b6127de565b500290565b600082821015612952576129526127de565b500390565b6001600160a01b039390931683526020830191909152604082015260600190565b60006020828403121561298a57600080fd5b8151612462816123fe565b8183823760009101908152919050565b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b634e487b7160e01b600052603260045260246000fd5b6000602082840312156129fc57600080fd5b81356001600160401b038116811461246257600080fd5b60008251612a2581846020870161270b565b9190910192915050565b60008060008060808587031215612a4557600080fd5b505082516020840151604085015160609095015191969095509092509050565b60008085851115612a7557600080fd5b83861115612a8257600080fd5b5050820193919092039150565b8035602083101561170457600019602084900360031b1b1692915050565b60008451612abf81846020890161270b565b8201838582376000930192835250909392505050565b634e487b7160e01b600052600160045260246000fdfe7394f4a19a13c7b92b5bb71033245305946ef78452f7b4986ac1390b5df4ebd7ea8787f128d10b2cc0317b0c3960f9ad447f7f6c1ed189db1083ccffd20f456ea26469706673582212206288bca7535c4cfc768efb57e36a53eec12f01b8ef362f80aa93cf6b87306afe64736f6c63430008090033";
    static readonly abi: ({
        inputs: ({
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        })[];
        stateMutability: string;
        type: string;
        name?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: ({
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: ({
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): SequencerInboxStubInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SequencerInboxStub;
}
export {};