"use client"

import { SidebarTrigger } from '@/components/ui/sidebar'
import { useIsMobile } from "@/hooks/use-mobile"

export function MobileHeader() {
  const isMobile = useIsMobile()
  
  if (!isMobile) return null
  
  return (
    <div className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between bg-background/80 backdrop-blur-sm p-4 border-b">
      <h1 className="font-bold uppercase text-teal-700">Volodymyr Pavlenko</h1>
      <SidebarTrigger className="size-8" />
    </div>
  )
}