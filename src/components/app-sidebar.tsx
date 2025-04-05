import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
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
    <Sidebar collapsible='icon'>
      <SidebarHeader>
        <h1 className="font-bold uppercase text-teal-700 px-2">Volodymyr Pavlenko</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroupComponent menuItems={navigationItems} />
        <SidebarGroupComponent headerText='Find me in' menuItems={socialLinksItems}/>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}