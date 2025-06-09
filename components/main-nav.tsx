```tsx file="components/dashboard/sidebar.tsx"
[v0-no-op-code-block-prefix]import { LayoutDashboard, Settings, ShoppingCart, Users, Store } from 'lucide-react'

import { MainNav } from "@/components/main-nav"
import { SidebarNavItem } from "@/components/sidebar-nav"

interface SidebarProps {
  items: SidebarNavItem[]
}

export function Sidebar({ items }: SidebarProps) {
  return (
    <div className="flex h-full max-w-[280px] flex-col border-r bg-background py-6">
      <div className="px-6 pb-10">
        <MainNav className="px-6" />
      </div>
      <nav className="flex flex-col space-y-1">
        {items.map((item) => (
          <SidebarNavItem
            key={item.href}
            title={item.title}
            href={item.href}
            icon={item.icon}
            description={item.description}
          />
        ))}
      </nav>
    </div>
  )
}

const sidebarNavItems: SidebarNavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    description: "Get an overview of your account",
  },
  {
    title: "Customers",
    href: "/customers",
    icon: Users,
    description: "Manage your customers",
  },
  {
    title: "Orders",
    href: "/orders",
    icon: ShoppingCart,
    description: "Manage your orders",
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
    description: "Manage your settings",
  },
  {
    title: "AI Store Genesis",
    href: "/ai-store-genesis",
    icon: Store,
    description: "Create branded jewelry stores"
  }
]

export function DashboardSidebar() {
  return <Sidebar items={sidebarNavItems} />
}
