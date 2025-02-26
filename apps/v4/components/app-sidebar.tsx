"use client"

import * as React from "react"
import { Index } from "@/__registry__"
import {
  
  BookOpen,
  Bot,


  GalleryVerticalEnd,
  
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavUser } from "@/registry/new-york-v4/blocks/sidebar-07/components/nav-user"
import { TeamSwitcher } from "@/registry/new-york-v4/blocks/sidebar-07/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/registry/new-york-v4/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Miguel",
    email: "miguel@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "FreeFlex",
      logo: GalleryVerticalEnd,
      plan: "Pro",
    }
  ],
  navMain: [
    {
      title: "Bookings",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  components: Object.values(Index).filter(
    (item) => item.type === "registry:ui"
  ),
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
        <SidebarGroup className="py-0 group-data-[collapsible=icon]:hidden">
         
        </SidebarGroup>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <SidebarGroupLabel>Components</SidebarGroupLabel>
          <SidebarMenu>
            {data.components.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton asChild>
                  <a href={`/#${item.name}`}>
                    <span>{getComponentName(item.name)}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))      }
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
function getComponentName(name: string) {
  // convert kebab-case to title case
                                                               return name.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())
}
