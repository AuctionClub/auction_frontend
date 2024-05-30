"use client";

import { ScrollArea } from "@radix-ui/themes";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import AuctionItem from "@/components/auction/item";
import useTheGraph from "@/hooks/useTheGraph";
import PopoverWarp from "../popover";

export default function AuctionList() {
  const { data, loading, error } = useTheGraph({
    url: "https://api.studio.thegraph.com/query/76625/auctionclub0/version/latest", query: `
       {
  auctionCancelleds(first: 5) {
    id
    auctionId
    blockNumber
    blockTimestamp
  }
  auctionCreateds(first: 5) {
    id
    auctionId
    seller
    startingPrice
    _startTime
    
  }
}
       `,
  });
  console.log(data, loading, error);

  const list = [
    {
      tokenId: 1,
      contractAddress: "0xxxx",
      img: "https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000",
      price: "1.23ETH",
      tags: ["荷兰拍卖", "pleasure", "狂热", "慈善"],
      currentBid: "10ETH",
      currentBidder: "0x111112222",
      deadline: "2024-01-01 00:00:00",
    },
    {
      tokenId: 2,
      contractAddress: "0xxxx",
      img: "https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000",
      price: "1.23ETH",
      tags: ["荷兰拍卖", "pleasure", "狂热", "慈善"],
      currentBid: "10ETH",
      currentBidder: "0x8888888111122222233444444",
      deadline: "2024-01-01 00:00:00",
    },
    {
      tokenId: 3,
      contractAddress: "0xxxx",
      img: "https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000",
      price: "1.23ETH",
      tags: ["英式拍卖", "pleasure", "狂热"],
      currentBid: "10ETH",
      currentBidder: "0x111112222",
      deadline: "2024-01-01 00:00:00",
    },
    {
      tokenId: 7,
      contractAddress: "0xxxx",
      img: "https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000",
      price: "10ETH",
      tags: ["荷兰拍卖", "pleasure", "狂热", "慈善"],
      currentBid: "10ETH",
      currentBidder: "0x111112222",
      deadline: "2024-01-01 00:00:00",
    },
    {
      tokenId: 4,
      contractAddress: "0xxxx",
      img: "https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000",
      price: "0.5ETH",
      tags: ["荷兰拍卖", "狂热", "慈善"],
      currentBid: "10ETH",
      currentBidder: "0x111112222",
      deadline: "2024-01-01 00:00:00",
    },
    {
      tokenId: 5,
      contractAddress: "0xxxx",
      img: "https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000",
      price: "6ETH",
      tags: ["荷兰拍卖", "pleasure", "狂热", "慈善"],
      currentBid: "10ETH",
      currentBidder: "0x111112222",
      deadline: "2024-01-01 00:00:00",
    },
    {
      tokenId: 6,
      contractAddress: "0xxxx",
      img: "https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000",
      price: "1.23ETH",
      tags: ["荷兰拍卖", "pleasure", "狂热", "慈善"],
      currentBid: "10ETH",
      currentBidder: "0x111112222",
      deadline: "2024-01-01 00:00:00",
    },
  ];
  return (
    <div className="my-20 flex place-content-center relative">
      <div className="md:max-w-screen-lg flex-1 2xl:max-w-7xl px-6 md:px-10">
        <div className="flex justify-between font-bold text-lg">
          <div>Market</div>

          <div className="flex items-center cursor-pointer">
            more
            <ChevronRightIcon className="w-5 h-5" />
          </div>
        </div>

        <ScrollArea
          size="3"
          radius="full"
          type="always"
          scrollbars="horizontal"
        >
          <div className="flex justify-between mb-5 mt-5">
            {list.map((e, i) => (
              <PopoverWarp className="ml-2 mr-2" key={i} item={e}>
                <AuctionItem item={e} />
              </PopoverWarp>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}