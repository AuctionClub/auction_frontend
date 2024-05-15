'use client'

import React from 'react'

import { useScroll } from 'ahooks'

import { cn } from '@/lib/utils'

import { ConnectButton } from '@rainbow-me/rainbowkit'

export const Navbar = () => {
  const scroll = useScroll(() => document)

  return (
    <header
      className={cn(
        'w-full sticky top-0 backdrop-blur transition-[background-color,border-width] border-x-0  flex justify-center z-10',
        (scroll?.top ?? 0) > 60 && 'bg-background/50 border-b border-border/50'
      )}
    >
      <div className="w-full flex justify-between items-center h-16 p-4 sm:p-8 md:max-w-screen-lg 2xl:max-w-screen-xl">
        <span className="ml-2 font-semibold text-primary text-3xl">
          DIYAuction
        </span>
        <ConnectButton />
      </div>
    </header>
  )
}
