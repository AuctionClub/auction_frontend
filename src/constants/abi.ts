export const BritishAuctionAbi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_platformAddress",
        type: "address",
        internalType: "address payable",
      },
    ],
    stateMutability: "nonpayable",
  },
  { type: "receive", stateMutability: "payable" },
  {
    type: "function",
    name: "auctions",
    inputs: [
      { name: "", type: "uint256", internalType: "uint256" },
    ],
    outputs: [
      { name: "seller", type: "address", internalType: "address" },
      { name: "nftAddress", type: "address", internalType: "address" },
      { name: "nftTokenId", type: "uint256", internalType: "uint256" },
      {
        name: "startingPrice",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "currentHighestBid",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "currentHighestBidder",
        type: "address",
        internalType: "address",
      },
      { name: "ended", type: "bool", internalType: "bool" },
      {
        name: "totalBidAmount",
        type: "uint256",
        internalType: "uint256",
      },
      { name: "startTime", type: "uint256", internalType: "uint256" },
      { name: "endTime", type: "uint256", internalType: "uint256" },
      { name: "interval", type: "uint256", internalType: "uint256" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "balances",
    inputs: [
      { name: "", type: "address", internalType: "address" },
    ],
    outputs: [
      { name: "", type: "uint256", internalType: "uint256" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "bid",
    inputs: [
      { name: "_itemId", type: "uint256", internalType: "uint256" },
      { name: "bitAmount", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "cancelAuction",
    inputs: [
      { name: "_itemId", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "checkUpkeep",
    inputs: [
      { name: "checkData", type: "bytes", internalType: "bytes" },
    ],
    outputs: [
      { name: "upkeepNeeded", type: "bool", internalType: "bool" },
      { name: "performData", type: "bytes", internalType: "bytes" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "createAuction",
    inputs: [
      {
        name: "_startingPrice",
        type: "uint256",
        internalType: "uint256",
      },
      { name: "_startTime", type: "uint256", internalType: "uint256" },
      { name: "nftAddress", type: "address", internalType: "address" },
      { name: "nftTokenId", type: "uint256", internalType: "uint256" },
      { name: "interval", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "isOnAuction",
    inputs: [
      { name: "nftAddress", type: "address", internalType: "address" },
      { name: "tokenId", type: "uint256", internalType: "uint256" },
    ],
    outputs: [
      { name: "", type: "bool", internalType: "bool" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "nextAuctionId",
    inputs: [],
    outputs: [
      { name: "", type: "uint256", internalType: "uint256" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "pendingReturns",
    inputs: [
      { name: "", type: "address", internalType: "address" },
    ],
    outputs: [
      { name: "", type: "uint256", internalType: "uint256" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "performUpkeep",
    inputs: [
      { name: "performData", type: "bytes", internalType: "bytes" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "platformAddress",
    inputs: [],
    outputs: [
      { name: "", type: "address", internalType: "address payable" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "reserve",
    inputs: [],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "withdrawBalance",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "withdrawPendingReturns",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "AuctionCancelled",
    inputs: [
      {
        name: "auctionId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "AuctionCreated",
    inputs: [
      {
        name: "auctionId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "seller",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "startingPrice",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "_startTime",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "AuctionEnded",
    inputs: [
      {
        name: "auctionId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "winner",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "HighestBidIncreased",
    inputs: [
      {
        name: "auctionId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "bidder",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ReserveAdded",
    inputs: [
      {
        name: "user",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "RewardDistributed",
    inputs: [
      {
        name: "auctionId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "bidder",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "reward",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
];
export const DutchAuction = [
  {
    type: "constructor",
    inputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "FEE_PERCENTAGE",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "auctionCount",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "auctions",
    inputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "seller",
        type: "address",
        internalType: "address payable",
      },
      {
        name: "nftAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "startPrice",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "reservePrice",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "startTime",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "endTime",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "price_decay_interval",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "price_decay_amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "reserve_duration",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "isActive",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "bid",
    inputs: [
      {
        name: "auctionId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "checkUpkeep",
    inputs: [
      {
        name: "checkData",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "upkeepNeeded",
        type: "bool",
        internalType: "bool",
      },
      {
        name: "performData",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "finalizeAuction",
    inputs: [
      {
        name: "auctionId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getCurrentPrice",
    inputs: [
      {
        name: "auctionId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isOnAuction",
    inputs: [
      {
        name: "nftAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "performUpkeep",
    inputs: [
      {
        name: "performData",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "startAuction",
    inputs: [
      {
        name: "nftAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "startPrice",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "reservePrice",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "startTime",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "price_decay_interval",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "price_decay_amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "reserve_duration",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [
      {
        name: "newOwner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "AuctionEnded",
    inputs: [
      {
        name: "auctionId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "buyer",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "finalPrice",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "AuctionFailed",
    inputs: [
      {
        name: "auctionId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "AuctionStarted",
    inputs: [
      {
        name: "auctionId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "seller",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "startPrice",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "reservePrice",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "startTime",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "OwnableInvalidOwner",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "OwnableUnauthorizedAccount",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
  },
];
