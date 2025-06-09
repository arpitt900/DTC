"use client"

import { Bell, Settings, User, LogOut, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

export function Header() {
  return (
    <header className="h-16 border-b border-cyan-500/30 bg-gray-900/80 backdrop-blur-sm flex items-center justify-between px-6">
      {/* Left side - Current module info */}
      <div className="flex items-center space-x-4">
        <div className="text-sm font-mono">
          <span className="text-gray-400">MODULE:</span>
          <span className="text-cyan-400 ml-2">DIAMOND_AI_PORTAL</span>
        </div>
        <Badge className="bg-green-500/20 text-green-400 border-green-500/50 font-mono text-xs">ACTIVE</Badge>
      </div>

      {/* Right side - System controls */}
      <div className="flex items-center space-x-4">
        {/* System metrics */}
        <div className="hidden md:flex items-center space-x-4 text-xs font-mono">
          <div className="text-cyan-400">NET: 1.2GB/s</div>
          <div className="text-cyan-400">LATENCY: 12ms</div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-green-400">ONLINE</span>
          </div>
        </div>

        {/* Notifications */}
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-cyan-400">
          <Bell className="h-5 w-5" />
        </Button>

        {/* Fullscreen */}
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-cyan-400">
          <Maximize2 className="h-5 w-5" />
        </Button>

        {/* User menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-cyan-400">
              <User className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-gray-800 border-gray-700 text-gray-300">
            <DropdownMenuLabel className="font-mono text-cyan-400">ADMIN_USER</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-gray-700" />
            <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700 font-mono">
              <Settings className="mr-2 h-4 w-4" />
              System Config
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700 font-mono">
              <User className="mr-2 h-4 w-4" />
              User Profile
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-gray-700" />
            <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700 font-mono text-red-400">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
