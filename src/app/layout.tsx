import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react"
import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'
import { MobileHeader } from '@/components/mobile-header'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "solaryasha.com - full-stack engineer",
  description: "Full stack developer portfolio showcasing projects and skills",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
      <SidebarProvider>
          <MobileHeader />
        <div className="flex h-screen w-full">
          <AppSidebar />
            <div className="flex flex-col w-full h-full p-4 md:pt-4 pt-16">
            {children}
          </div>
        </div>
        </SidebarProvider>
      </body>
    </html>
  )
}

