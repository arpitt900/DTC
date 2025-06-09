"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Diamond,
  Crown,
  Heart,
  Sparkles,
  Star,
  Search,
  Filter,
  ShoppingCart,
  Eye,
  Zap,
  Menu,
  User,
  Bell,
} from "lucide-react"

export default function VirtualJewelryShowroom() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [isLoading, setIsLoading] = useState(true)
  const [cartCount, setCartCount] = useState(3)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  const categories = [
    { id: "all", name: "All", icon: Sparkles },
    { id: "rings", name: "Rings", icon: Diamond },
    { id: "necklaces", name: "Necklaces", icon: Star },
    { id: "bracelets", name: "Bracelets", icon: Crown },
    { id: "earrings", name: "Earrings", icon: Heart },
  ]

  const products = [
    {
      id: 1,
      name: "Diamond Ring",
      price: "$2,450",
      category: "rings",
      image: "/diamond-round.png",
      rating: 4.9,
      inStock: true,
    },
    {
      id: 2,
      name: "Pearl Necklace",
      price: "$1,850",
      category: "necklaces",
      image: "/diamond-oval.png",
      rating: 4.8,
      inStock: true,
    },
    {
      id: 3,
      name: "Tennis Bracelet",
      price: "$3,200",
      category: "bracelets",
      image: "/diamond-princess.png",
      rating: 4.9,
      inStock: false,
    },
    {
      id: 4,
      name: "Diamond Studs",
      price: "$1,200",
      category: "earrings",
      image: "/diamond-cushion.png",
      rating: 4.7,
      inStock: true,
    },
    {
      id: 5,
      name: "Solitaire Ring",
      price: "$4,500",
      category: "rings",
      image: "/diamond-emerald.png",
      rating: 5.0,
      inStock: true,
    },
    {
      id: 6,
      name: "Gold Chain",
      price: "$980",
      category: "necklaces",
      image: "/diamond-pear.png",
      rating: 4.6,
      inStock: true,
    },
    {
      id: 7,
      name: "Charm Bracelet",
      price: "$1,650",
      category: "bracelets",
      image: "/diamond-marquise.png",
      rating: 4.8,
      inStock: true,
    },
    {
      id: 8,
      name: "Hoop Earrings",
      price: "$750",
      category: "earrings",
      image: "/diamond-round.png",
      rating: 4.5,
      inStock: true,
    },
  ]

  const filteredProducts =
    selectedCategory === "all" ? products : products.filter((product) => product.category === selectedCategory)

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-900 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <div className="text-purple-400 font-mono">Loading Virtual Showroom...</div>
          <div className="text-gray-400 text-sm font-mono">Preparing your luxury experience</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-900">
      {/* Mobile App Container */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          {/* Phone Frame */}
          <div className="relative mx-auto w-full max-w-sm bg-gray-900 rounded-[3rem] border-4 border-purple-500/30 shadow-2xl overflow-hidden">
            {/* Phone Screen */}
            <div className="bg-black rounded-[2.5rem] overflow-hidden">
              {/* Status Bar */}
              <div className="h-12 bg-gradient-to-r from-purple-900/50 to-blue-900/50 flex items-center justify-between px-6 text-sm text-purple-400 font-mono">
                <span>YOUR STORE</span>
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-1 h-3 bg-purple-400 rounded-full"></div>
                    <div className="w-1 h-3 bg-purple-400 rounded-full"></div>
                    <div className="w-1 h-3 bg-purple-400 rounded-full"></div>
                    <div className="w-1 h-3 bg-purple-400/50 rounded-full"></div>
                  </div>
                  <span>99%</span>
                </div>
              </div>

              {/* App Header */}
              <div className="px-6 py-4 bg-gradient-to-b from-black to-gray-900">
                <div className="flex items-center justify-between mb-4">
                  <Button size="sm" variant="ghost" className="text-purple-400 p-0">
                    <Menu className="h-5 w-5" />
                  </Button>
                  <div className="flex items-center space-x-3">
                    <Button size="sm" variant="ghost" className="text-purple-400 p-0 relative">
                      <Bell className="h-5 w-5" />
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs flex items-center justify-center text-white">
                        2
                      </div>
                    </Button>
                    <Button size="sm" variant="ghost" className="text-purple-400 p-0 relative">
                      <ShoppingCart className="h-5 w-5" />
                      {cartCount > 0 && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 rounded-full text-xs flex items-center justify-center text-white">
                          {cartCount}
                        </div>
                      )}
                    </Button>
                    <Button size="sm" variant="ghost" className="text-purple-400 p-0">
                      <User className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                {/* Store Title */}
                <div className="text-center mb-6">
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent font-mono">
                    Diamond Dreams
                  </h1>
                  <p className="text-gray-400 text-sm font-mono mt-1">Luxury Jewelry Collection</p>
                </div>

                {/* Search Bar */}
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search jewelry..."
                    className="w-full bg-gray-800/50 border border-purple-500/30 rounded-lg pl-10 pr-4 py-2 text-white text-sm font-mono focus:outline-none focus:border-purple-400"
                  />
                  <Button
                    size="sm"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600 hover:bg-purple-500 h-6 w-6 p-0"
                  >
                    <Filter className="h-3 w-3" />
                  </Button>
                </div>

                {/* Category Pills */}
                <div className="flex space-x-2 overflow-x-auto pb-2">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      size="sm"
                      variant={selectedCategory === category.id ? "default" : "outline"}
                      className={`flex-shrink-0 font-mono text-xs ${
                        selectedCategory === category.id
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0"
                          : "border-purple-500/50 text-purple-400 bg-transparent hover:bg-purple-500/10"
                      }`}
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      <category.icon className="h-3 w-3 mr-1" />
                      {category.name}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Products Grid */}
              <div className="px-4 pb-6 max-h-96 overflow-y-auto">
                <div className="grid grid-cols-2 gap-3">
                  {filteredProducts.map((product) => (
                    <Card
                      key={product.id}
                      className="bg-gray-800/50 border border-purple-500/30 hover:border-purple-400 transition-all duration-300 group cursor-pointer"
                    >
                      <CardContent className="p-3">
                        {/* Product Image */}
                        <div className="relative w-full h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg mb-3 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                          <Diamond className="h-8 w-8 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />

                          {/* Stock Status */}
                          <div className="absolute top-1 right-1">
                            <div
                              className={`w-2 h-2 rounded-full ${product.inStock ? "bg-green-400" : "bg-red-400"}`}
                            ></div>
                          </div>

                          {/* Quick Actions */}
                          <div className="absolute inset-0 bg-black/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
                            <Button size="sm" className="bg-purple-600 hover:bg-purple-500 h-6 w-6 p-0">
                              <Eye className="h-3 w-3" />
                            </Button>
                            <Button size="sm" className="bg-pink-600 hover:bg-pink-500 h-6 w-6 p-0">
                              <ShoppingCart className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>

                        {/* Product Info */}
                        <div className="space-y-1">
                          <h3 className="text-white font-mono text-xs font-medium truncate">{product.name}</h3>
                          <div className="flex items-center justify-between">
                            <span className="text-cyan-400 font-mono text-sm font-bold">{product.price}</span>
                            <div className="flex items-center space-x-1">
                              <Star className="h-3 w-3 text-yellow-400 fill-current" />
                              <span className="text-gray-400 text-xs font-mono">{product.rating}</span>
                            </div>
                          </div>

                          {/* Stock Status Text */}
                          <div className="text-xs font-mono">
                            {product.inStock ? (
                              <span className="text-green-400">In Stock</span>
                            ) : (
                              <span className="text-red-400">Out of Stock</span>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Load More */}
                <div className="mt-4 text-center">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-purple-500/50 text-purple-400 font-mono bg-transparent hover:bg-purple-500/10"
                  >
                    <Zap className="h-4 w-4 mr-2" />
                    Load More
                  </Button>
                </div>
              </div>

              {/* Bottom Navigation */}
              <div className="bg-gray-900/80 border-t border-purple-500/30 px-4 py-3">
                <div className="flex items-center justify-between">
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/50 text-xs font-mono">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
                    247 Online
                  </Badge>

                  <div className="flex space-x-4 text-xs font-mono text-gray-400">
                    <span>💎 1.2K items</span>
                    <span>🛒 89 sold today</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* External Controls */}
          <div className="mt-8 text-center space-y-4">
            <div className="flex justify-center space-x-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 font-mono"
              >
                <Eye className="mr-2 h-5 w-5" />
                Enter Full Experience
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-xs font-mono text-gray-400">
              <span>• IMMERSIVE 3D VIEW</span>
              <span>• REAL-TIME INVENTORY</span>
              <span>• AI ASSISTANT</span>
            </div>

            <div className="bg-gray-900/50 border border-purple-500/30 rounded-lg p-4 max-w-sm mx-auto">
              <h3 className="text-purple-400 font-mono text-sm font-bold mb-2">LIVE SHOWROOM STATS</h3>
              <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                <div className="text-center">
                  <div className="text-lg font-bold text-cyan-400">247</div>
                  <div className="text-gray-400">Visitors</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400">$23.4K</div>
                  <div className="text-gray-400">Sales Today</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
