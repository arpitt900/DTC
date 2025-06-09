import type React from "react"
import { Sidebar } from "@/components/dashboard/sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-row">
      <Sidebar />
      <main className="flex-1 overflow-auto p-6 bg-gray-800/30 dark:bg-gray-900">{children}</main>
    </div>
  )
}
