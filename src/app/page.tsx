import { cn } from '@/lib/utils'

import HeroSection from '@/components/hero-section'
import AuctionList from '@/components/auction/list'
import CollectList from '@/components/collect/list'

export default function Page() {
  return (
    <div className="pb-96">
      <HeroSection />
      <AuctionList />
      <CollectList />
    </div>
  )
}
