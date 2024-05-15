import { cn } from '@/lib/utils'

import HeroSection from '@/components/hero-section'
import AuctionList from '@/components/auction-list'

export default function Page() {
  return (
    <div className="pb-96">
      <HeroSection />
      <AuctionList />
    </div>
  )
}
