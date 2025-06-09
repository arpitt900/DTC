"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Diamond,
  Crown,
  Heart,
  Sparkles,
  Settings,
  Eye,
  ShoppingCart,
  Zap,
  Star,
  Camera,
  Volume2,
  RotateCcw,
  Maximize,
} from "lucide-react"

export default function VirtualShowroomDemo() {
  const [selectedCounter, setSelectedCounter] = useState("entrance")
  const [isLoading, setIsLoading] = useState(true)
  const [customerCount, setCustomerCount] = useState(12)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    const customerTimer = setInterval(() => {
      setCustomerCount((prev) => prev + Math.floor(Math.random() * 3) - 1)
    }, 5000)
    return () => {
      clearTimeout(timer)
      clearInterval(customerTimer)
    }
  }, [])

  const counters = [
    {
      id: "rings",
      name: "Ring Counter",
      icon: Diamond,
      position: { top: "20%", left: "15%" },
      products: 245,
      featured: "Solitaire Diamond Ring - $3,200",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "necklaces",
      name: "Necklace Counter",
      icon: Sparkles,
      position: { top: "20%", right: "15%" },
      products: 189,
      featured: "Pearl Necklace Set - $1,850",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "bracelets",
      name: "Bracelet Counter",
      icon: Crown,
      position: { top: "50%", left: "10%" },
      products: 156,
      featured: "Tennis Bracelet - $2,100",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "bangles",
      name: "Bangles Counter",
      icon: Star,
      position: { top: "50%", right: "10%" },
      products: 203,
      featured: "Gold Bangle Set - $1,650",
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: "bridal",
      name: "Bridal Counter",
      icon: Heart,
      position: { bottom: "30%", left: "50%", transform: "translateX(-50%)" },
      products: 89,
      featured: "Bridal Set Collection - $8,500",
      color: "from-red-500 to-pink-500",
    },
    {
      id: "earrings",
      name: "Earrings Counter",
      icon: Sparkles,
      position: { top: "35%", left: "35%" },
      products: 167,
      featured: "Diamond Studs - $1,200",
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: "pendants",
      name: "Pendant Sets",
      icon: Diamond,
      position: { top: "35%", right: "35%" },
      products: 134,
      featured: "Heart Pendant - $950",
      color: "from-teal-500 to-cyan-500",
    },
    {
      id: "custom",
      name: "Customization Counter",
      icon: Settings,
      position: { bottom: "15%", left: "50%", transform: "translateX(-50%)" },
      products: 0,
      featured: "Design Your Dream Piece",
      color: "from-gray-500 to-slate-500",
    },
  ]

  const selectedCounterData = counters.find((c) => c.id === selectedCounter)

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <div className="text-purple-400 font-mono">Loading Virtual Showroom...</div>
          <div className="text-gray-400 text-sm font-mono">Initializing 3D Environment</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white">
      {/* Header */}
      <div className="bg-black/50 border-b border-purple-500/30 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="border-purple-500/50 text-purple-400"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <div>
              <h1 className="text-xl font-bold font-mono text-purple-400">VIRTUAL SHOWROOM DEMO</h1>
              <p className="text-sm text-gray-400 font-mono">Diamond Dreams Boutique</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
              {customerCount} Visitors Online
            </Badge>
            <div className="flex space-x-2">
              <Button size="sm" variant="outline" className="border-purple-500/50 text-purple-400">
                <Camera className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-purple-500/50 text-purple-400">
                <Volume2 className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-purple-500/50 text-purple-400">
                <Maximize className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Showroom View */}
          <div className="lg:col-span-3">
            <Card className="bg-gray-900/50 border-purple-500/30 h-[600px] relative overflow-hidden">
              <CardContent className="p-0 h-full">
                {/* Showroom Floor Plan */}
                <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900">
                  {/* Floor Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 40px)`,
                      }}
                    ></div>
                  </div>

                  {/* Entrance */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-4 bg-gradient-to-t from-purple-500/50 to-transparent">
                    <div className="text-center text-xs font-mono text-purple-400 mt-1">ENTRANCE</div>
                  </div>

                  {/* Counters */}
                  {counters.map((counter) => (
                    <div
                      key={counter.id}
                      className={`absolute cursor-pointer transition-all duration-300 ${
                        selectedCounter === counter.id ? "scale-110 z-10" : "hover:scale-105"
                      }`}
                      style={counter.position}
                      onClick={() => setSelectedCounter(counter.id)}
                    >
                      <div className={`w-20 h-20 rounded-lg bg-gradient-to-br ${counter.color} p-1 shadow-lg`}>
                        <div className="w-full h-full bg-black/30 rounded-lg flex flex-col items-center justify-center">
                          <counter.icon className="h-6 w-6 text-white mb-1" />
                          <div className="text-xs font-mono text-white text-center leading-tight">
                            {counter.name.split(" ")[0]}
                          </div>
                        </div>
                      </div>

                      {/* Hover Info */}
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 px-2 py-1 rounded text-xs font-mono text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                        {counter.products} items
                      </div>

                      {/* Selection Indicator */}
                      {selectedCounter === counter.id && (
                        <div className="absolute -inset-2 border-2 border-purple-400 rounded-lg animate-pulse"></div>
                      )}
                    </div>
                  ))}

                  {/* Lighting Effects */}
                  <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300/10 rounded-full blur-xl"></div>
                  <div className="absolute top-10 right-10 w-32 h-32 bg-blue-300/10 rounded-full blur-xl"></div>
                  <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-purple-300/10 rounded-full blur-xl"></div>

                  {/* Virtual Customers */}
                  <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-1/3 left-2/3 w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
                </div>

                {/* Controls Overlay */}
                <div className="absolute bottom-4 left-4 flex space-x-2">
                  <Button size="sm" className="bg-purple-600/80 hover:bg-purple-500">
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Reset View
                  </Button>
                  <Button size="sm" variant="outline" className="border-purple-500/50 text-purple-400 bg-black/50">
                    <Zap className="h-4 w-4 mr-2" />
                    Auto Tour
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Counter Navigation */}
            <div className="mt-4 flex flex-wrap gap-2">
              {counters.map((counter) => (
                <Button
                  key={counter.id}
                  size="sm"
                  variant={selectedCounter === counter.id ? "default" : "outline"}
                  className={`font-mono ${
                    selectedCounter === counter.id
                      ? `bg-gradient-to-r ${counter.color} text-white`
                      : "border-purple-500/50 text-purple-400"
                  }`}
                  onClick={() => setSelectedCounter(counter.id)}
                >
                  <counter.icon className="h-4 w-4 mr-2" />
                  {counter.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Counter Details Panel */}
          <div className="space-y-6">
            {selectedCounterData && (
              <Card className="bg-gray-900/50 border-purple-500/30">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${selectedCounterData.color}`}>
                      <selectedCounterData.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white font-mono">{selectedCounterData.name}</h3>
                      <p className="text-sm text-gray-400 font-mono">
                        {selectedCounterData.products} Products Available
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-black/30 rounded-lg p-4">
                      <div className="text-sm font-mono text-purple-400 mb-2">FEATURED ITEM</div>
                      <div className="text-white font-mono">{selectedCounterData.featured}</div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-black/30 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-purple-400 font-mono">4.9★</div>
                        <div className="text-xs text-gray-400 font-mono">Rating</div>
                      </div>
                      <div className="bg-black/30 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-green-400 font-mono">89%</div>
                        <div className="text-xs text-gray-400 font-mono">In Stock</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 font-mono">
                        <Eye className="h-4 w-4 mr-2" />
                        Explore Counter
                      </Button>
                      <Button variant="outline" className="w-full border-purple-500/50 text-purple-400 font-mono">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Quick Order
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Live Activity */}
            <Card className="bg-gray-900/50 border-purple-500/30">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-white font-mono mb-4">LIVE ACTIVITY</h3>
                <div className="space-y-3">
                  {[
                    { action: "Customer viewed", item: "Diamond Ring", time: "2s ago", color: "text-blue-400" },
                    { action: "Purchase made", item: "Pearl Necklace", time: "1m ago", color: "text-green-400" },
                    { action: "Custom order", item: "Bridal Set", time: "3m ago", color: "text-purple-400" },
                    { action: "Inquiry sent", item: "Tennis Bracelet", time: "5m ago", color: "text-yellow-400" },
                  ].map((activity, i) => (
                    <div key={i} className="flex items-center space-x-3 text-xs font-mono">
                      <div
                        className={`w-2 h-2 rounded-full ${activity.color.replace("text-", "bg-")} animate-pulse`}
                      ></div>
                      <div className="flex-1">
                        <span className="text-gray-400">{activity.action}</span>
                        <span className="text-white ml-1">{activity.item}</span>
                      </div>
                      <span className="text-gray-500">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-gray-900/50 border-purple-500/30">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-white font-mono mb-4">TODAY'S STATS</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 font-mono text-sm">Visitors</span>
                    <span className="text-purple-400 font-mono font-bold">1,247</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 font-mono text-sm">Sales</span>
                    <span className="text-green-400 font-mono font-bold">$23,450</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 font-mono text-sm">Inquiries</span>
                    <span className="text-blue-400 font-mono font-bold">89</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 font-mono text-sm">Conversion</span>
                    <span className="text-yellow-400 font-mono font-bold">12.3%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
