import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

interface Props {
  headerText?: string;
  menuItems: MenuItem[]
}

interface MenuItem {
  title: string,
  url: string,
  icon: React.FC
  openInNewWindow?: boolean  
}

export default function SidebarGroupComponent(props: Props) {
  const { headerText, menuItems } = props;
  return (
    <SidebarGroup>
      {headerText && (
      <SidebarGroupLabel className='uppercase mb-4 text-base text-teal-700 font-bold tracking-wide'>
        {headerText}
      </SidebarGroupLabel>
      )}
      <SidebarGroupContent>
        <SidebarMenu>
          {menuItems.map(item => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild className='uppercase'>
                <a href={item.url} target={item.openInNewWindow ? "_blank" : "_self"} rel="noreferrer noopener">
                  <item.icon />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}