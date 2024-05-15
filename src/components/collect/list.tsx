import { ScrollArea } from '@radix-ui/themes'
import { ChevronRightIcon } from '@radix-ui/react-icons'
import AuctionItem from '@/components/collect/item'

export default function CollectList() {
  const list = [
    {
      img: 'https://i.seadn.io/s/raw/files/b8c7c610c8a6ffbc66db01a6c6559ebc.png?auto=format&dpr=1&w=1000',
      price: '1.23ETH',
      tags: ['荷兰拍卖', 'pleasure', '狂热', '慈善'],
      currentBid: '10ETH',
      currentBidder: '0x111112222',
      deadline: '2024-01-01 00:00:00',
      mintDate: '2024-05-03',
    },
    {
      img: 'https://i.seadn.io/s/raw/files/b8c7c610c8a6ffbc66db01a6c6559ebc.png?auto=format&dpr=1&w=1000',
      price: '1.23ETH',
      tags: ['荷兰拍卖', 'pleasure', '狂热', '慈善'],
      currentBid: '10ETH',
      currentBidder: '0x8888888111122222233444444',
      deadline: '2024-01-01 00:00:00',
      mintDate: '2024-05-03',
    },
    {
      img: 'https://i.seadn.io/s/raw/files/b8c7c610c8a6ffbc66db01a6c6559ebc.png?auto=format&dpr=1&w=1000',
      price: '1.23ETH',
      tags: ['英式拍卖', 'pleasure', '狂热'],
      currentBid: '10ETH',
      currentBidder: '0x111112222',
      deadline: '2024-01-01 00:00:00',
      mintDate: '2024-05-03',
    },
    {
      img: 'https://i.seadn.io/s/raw/files/b8c7c610c8a6ffbc66db01a6c6559ebc.png?auto=format&dpr=1&w=1000',
      price: '10ETH',
      tags: ['荷兰拍卖', 'pleasure', '狂热', '慈善'],
      currentBid: '10ETH',
      currentBidder: '0x111112222',
      deadline: '2024-01-01 00:00:00',
      mintDate: '2024-05-03',
    },
    {
      img: 'https://i.seadn.io/s/raw/files/b8c7c610c8a6ffbc66db01a6c6559ebc.png?auto=format&dpr=1&w=1000',
      price: '0.5ETH',
      tags: ['荷兰拍卖', '狂热', '慈善'],
      currentBid: '10ETH',
      currentBidder: '0x111112222',
      deadline: '2024-01-01 00:00:00',
      mintDate: '2024-05-03',
    },
    {
      img: 'https://i.seadn.io/s/raw/files/b8c7c610c8a6ffbc66db01a6c6559ebc.png?auto=format&dpr=1&w=1000',
      price: '6ETH',
      tags: ['荷兰拍卖', 'pleasure', '狂热', '慈善'],
      currentBid: '10ETH',
      currentBidder: '0x111112222',
      deadline: '2024-01-01 00:00:00',
      mintDate: '2024-05-03',
    },
    {
      img: 'https://i.seadn.io/s/raw/files/b8c7c610c8a6ffbc66db01a6c6559ebc.png?auto=format&dpr=1&w=1000',
      price: '1.23ETH',
      tags: ['荷兰拍卖', 'pleasure', '狂热', '慈善'],
      currentBid: '10ETH',
      currentBidder: '0x111112222',
      deadline: '2024-01-01 00:00:00',
      mintDate: '2024-05-03',
    },
  ]
  return (
    <div className="my-20 flex place-content-center relative">
      <div className="md:max-w-screen-lg flex-1 2xl:max-w-7xl px-6 md:px-10">
        <div className="flex justify-between font-bold text-lg">
          <div>Collect</div>
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
            {list.map((i) => {
              return <AuctionItem item={i} />
            })}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
