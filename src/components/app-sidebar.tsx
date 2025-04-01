import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { User, Home, Github, Linkedin, Mail } from "lucide-react"
import SidebarGroupComponent from './ui/sidebar-group'


const navigationItems = [
  {
    title: "Home",
    url: "/",
    icon: Home
  },
  {
    title: "About me",
    url: "/about",
    icon: User
  },
]

const socialLinksItems = [
  {
    title: "Linkedin",
    url: "https://www.linkedin.com/in/volodymyr-pavlenko-a7a336176/",
    icon: Linkedin,
    openInNewWindow: true
  },
  {
    title: "Github",
    url: "https://github.com/solaryasha",
    icon: Github,
    openInNewWindow: true
  },
  {
    title: "Gmail",
    url: "mailto:solaryasha@gmail.com",
    icon: Mail,
    openInNewWindow: true
  }
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className='uppercase mb-4 text-base text-teal-700 font-bold tracking-wide'>Volodymyr Pavlenko</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className='uppercase'>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroupComponent headerText='Find me in' menuItems={socialLinksItems}/>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}