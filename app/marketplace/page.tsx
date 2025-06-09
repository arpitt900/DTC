"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Diamond, Search, ArrowRight, Sparkles, Layers, Brain, Terminal, Zap, Activity } from "lucide-react"
import { MainNav } from "@/components/main-nav"

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("")

  const marketplaceCategories = [
    {
      title: "CERTIFIED DIAMONDS",
      description: "GIA, IGI, HRD certified diamonds with AI-powered matching",
      icon: Diamond,
      count: "2,847",
      href: "/dashboard/inventory/certified",
      badge: "CERTIFIED",
      badgeColor: "bg-green-500/20 text-green-400 border-green-500/50",
    },
    {
      title: "NON-CERTIFIED DIAMONDS",
      description: "High-quality ungraded diamonds with AI quality assessment",
      icon: Sparkles,
      count: "1,293",
      href: "/dashboard/inventory/non-certified",
      badge: "NON-CERT",
      badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/50",
    },
    {
      title: "LUXURY JEWELLERY",
      description: "Premium jewelry pieces with custom design analytics",
      icon: Layers,
      count: "456",
      href: "/dashboard/inventory/jewellery",
      badge: "LUXURY",
      badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/50",
    },
    {
      title: "AI SEARCH CONSOLE",
      description: "Advanced neural network-powered diamond search system",
      icon: Terminal,
      count: "∞",
      href: "/dashboard/search",
      badge: "AI-CORE",
      badgeColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/50",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent"></div>

      {/* Header */}
      <header className="relative z-50 border-b border-cyan-500/30 bg-black/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center">
          <MainNav />
          <div className="ml-auto flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4 text-xs font-mono">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-green-400">MARKETPLACE ONLINE</span>
              </div>
            </div>
            <Link href="/dashboard">
              <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 font-mono">
                ACCESS PORTAL
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="container py-20">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/50 font-mono">
                <Activity className="h-3 w-3 mr-1 animate-pulse" />
                GLOBAL MARKETPLACE
              </Badge>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                DIAMOND MARKETPLACE
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
                {">"} Access the world's most advanced diamond trading platform
                <br />
                {">"} Powered by quantum AI and neural network analysis
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-cyan-400" />
                <Input
                  placeholder="SEARCH DIAMONDS, JEWELRY, OR USE AI COMMANDS..."
                  className="pl-12 pr-24 h-14 bg-gray-900/80 border-cyan-500/50 text-cyan-100 placeholder:text-cyan-400/60 font-mono text-lg focus-visible:ring-cyan-400 focus-visible:border-cyan-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button
                  className="absolute right-2 top-2 bottom-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 font-mono"
                  onClick={() => {
                    // Redirect to search console with query
                    window.location.href = `/dashboard/search?q=${encodeURIComponent(searchQuery)}`
                  }}
                >
                  <Zap className="h-4 w-4 mr-2" />
                  SEARCH
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Marketplace Categories */}
        <section className="container py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-cyan-400 font-mono mb-4">{">"} MARKETPLACE MODULES</h2>
            <p className="text-gray-400 font-mono">Select a category to begin trading</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {marketplaceCategories.map((category, index) => (
              <Link key={index} href={category.href}>
                <Card className="group bg-gray-900/50 border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 cursor-pointer h-full">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-cyan-500/20 rounded-lg">
                          <category.icon className="h-8 w-8 text-cyan-400 group-hover:animate-pulse" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white font-mono">{category.title}</h3>
                          <p className="text-cyan-400 font-mono text-sm">{category.count} items available</p>
                        </div>
                      </div>
                      <Badge className={`${category.badgeColor} font-mono text-xs`}>{category.badge}</Badge>
                    </div>

                    <p className="text-gray-400 font-mono text-sm">
                      {">"} {category.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-cyan-400 font-mono text-sm">
                        <span>ACCESS MODULE</span>
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-400 font-mono">ONLINE</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="container py-20">
          <div className="bg-gray-900/50 border border-cyan-500/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-cyan-400 font-mono mb-6">{">"} QUICK ACTIONS</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/dashboard/search">
                <Button className="w-full h-16 bg-gray-800 border border-gray-700 hover:border-cyan-500 text-left justify-start font-mono">
                  <Terminal className="h-6 w-6 text-cyan-400 mr-3" />
                  <div>
                    <div className="text-white">LAUNCH AI CONSOLE</div>
                    <div className="text-xs text-gray-400">Advanced search & analysis</div>
                  </div>
                </Button>
              </Link>

              <Link href="/dashboard/ai-insights">
                <Button className="w-full h-16 bg-gray-800 border border-gray-700 hover:border-cyan-500 text-left justify-start font-mono">
                  <Brain className="h-6 w-6 text-cyan-400 mr-3" />
                  <div>
                    <div className="text-white">AI INSIGHTS</div>
                    <div className="text-xs text-gray-400">Market predictions & trends</div>
                  </div>
                </Button>
              </Link>

              <Link href="/dashboard">
                <Button className="w-full h-16 bg-gray-800 border border-gray-700 hover:border-cyan-500 text-left justify-start font-mono">
                  <Activity className="h-6 w-6 text-cyan-400 mr-3" />
                  <div>
                    <div className="text-white">DASHBOARD</div>
                    <div className="text-xs text-gray-400">Control center & analytics</div>
                  </div>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* System Status */}
        <section className="container py-20">
          <div className="text-center">
            <div className="inline-flex items-center space-x-4 bg-gray-900/50 border border-cyan-500/30 rounded-lg px-8 py-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-green-400 font-mono">ALL SYSTEMS OPERATIONAL</span>
              </div>
              <div className="text-gray-400 font-mono text-sm">|</div>
              <div className="text-cyan-400 font-mono text-sm">2.4M+ DIAMONDS INDEXED</div>
              <div className="text-gray-400 font-mono text-sm">|</div>
              <div className="text-cyan-400 font-mono text-sm">99.7% AI ACCURACY</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
