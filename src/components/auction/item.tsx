import Image from 'next/image'
import { LapTimerIcon } from '@radix-ui/react-icons'

type AuctionItemProps = {
  item: any
}

export default function AuctionItem({ item }: AuctionItemProps) {
  return (
    <div className="w-[250px] rounded-lg shadow-lg overflow-hidden mr-5 last:mr-0 cursor-pointer relative top-0 hover:-top-2 transition-[top] duration-100 ease-in">
      <Image
        src={item.img}
        width={250}
        height={250}
        alt="Picture of the author"
      />
      <div className="px-2 py-4 relative pt-12">
        <div className="w-[90%] text-sm rounded-2xl text-[#fff] flex flex-col items-center font-bold py-1 px-4 bg-[#f87171] overflow-hidden absolute z-1 -top-8 left-[5%]">
          <div className="w-full flex items-center overflow-hidden">
            <LapTimerIcon className="mr-2" />
            <span>{item.deadline}</span>
          </div>
          <div className="w-full flex items-center overflow-hidden">
            <span className="mr-2">bid:</span>
            <span>{item.currentBid}</span>
          </div>
          <div className="w-full flex items-center overflow-hidden">
            <span className="mr-2">bidder:</span>
            <span className="flex-1 truncate">{item.currentBidder}</span>
          </div>
        </div>
        <p className="font-bold text-lg mb-1">NFT Name</p>
        <div className="text-xs">
          <div className="flex">
            <p>起拍价：</p>
            <p>{item.price}</p>
          </div>
          <div className="flex mt-0.5">
            <p>类型：</p>
            <p>{item.tags.join(' · ')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
