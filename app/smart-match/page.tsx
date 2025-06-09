"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Brain,
  Diamond,
  Users,
  RefreshCw,
  Check,
  Clock,
  Handshake,
  UserCheck,
  Building,
  MapPin,
  Filter,
  Search,
} from "lucide-react"

export default function SmartMatchPage() {
  const [userType, setUserType] = useState<"buyer" | "seller">("buyer")
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [matchesFound, setMatchesFound] = useState(false)

  // Simulate AI matching process
  const runMatchingProcess = () => {
    setIsLoading(true)
    setProgress(0)
    setMatchesFound(false)

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 15
        if (newProgress >= 100) {
          clearInterval(interval)
          setIsLoading(false)
          setMatchesFound(true)
          return 100
        }
        return newProgress
      })
    }, 500)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-cyan-400 font-mono">SMART MATCH ENGINE</h1>
          <p className="text-gray-400 font-mono">AI-powered matching system for buyers and sellers</p>
        </div>
        <Badge variant="outline" className="flex items-center gap-1 border-cyan-500 text-cyan-400 font-mono">
          <Brain className="h-3 w-3 animate-pulse" />
          <span>NEURAL MATCHING v2.4</span>
        </Badge>
      </div>

      {/* User Type Selection */}
      <Card className="bg-gray-900/50 border-cyan-500/30">
        <CardHeader>
          <CardTitle className="text-cyan-400 font-mono text-lg">{">"} SELECT USER TYPE</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button
              variant={userType === "buyer" ? "default" : "outline"}
              className={`h-24 flex items-center justify-start px-6 ${
                userType === "buyer"
                  ? "bg-gradient-to-r from-cyan-600 to-blue-600"
                  : "border-cyan-500/30 hover:border-cyan-400 text-gray-400"
              }`}
              onClick={() => setUserType("buyer")}
            >
              <UserCheck className={`h-8 w-8 mr-4 ${userType === "buyer" ? "text-white" : "text-cyan-400"}`} />
              <div className="text-left">
                <div className={`text-xl font-bold font-mono ${userType === "buyer" ? "text-white" : "text-cyan-400"}`}>
                  DIAMOND BUYER
                </div>
                <div className="text-sm font-mono text-gray-300">Find perfect diamonds for your needs</div>
              </div>
            </Button>

            <Button
              variant={userType === "seller" ? "default" : "outline"}
              className={`h-24 flex items-center justify-start px-6 ${
                userType === "seller"
                  ? "bg-gradient-to-r from-cyan-600 to-blue-600"
                  : "border-cyan-500/30 hover:border-cyan-400 text-gray-400"
              }`}
              onClick={() => setUserType("seller")}
            >
              <Building className={`h-8 w-8 mr-4 ${userType === "seller" ? "text-white" : "text-cyan-400"}`} />
              <div className="text-left">
                <div
                  className={`text-xl font-bold font-mono ${userType === "seller" ? "text-white" : "text-cyan-400"}`}
                >
                  DIAMOND SELLER
                </div>
                <div className="text-sm font-mono text-gray-300">Find buyers for your inventory</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Main Interface */}
      <Tabs defaultValue="preferences" className="space-y-6">
        <TabsList className="bg-gray-900 border border-cyan-500/30 p-0">
          <TabsTrigger
            value="preferences"
            className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 rounded-none border-r border-cyan-500/30 px-6 py-3 font-mono"
          >
            PREFERENCES
          </TabsTrigger>
          <TabsTrigger
            value="matches"
            className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 rounded-none border-r border-cyan-500/30 px-6 py-3 font-mono"
          >
            MATCHES
          </TabsTrigger>
          <TabsTrigger
            value="history"
            className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 rounded-none px-6 py-3 font-mono"
          >
            HISTORY
          </TabsTrigger>
        </TabsList>

        {/* Preferences Tab */}
        <TabsContent value="preferences">
          <Card className="bg-gray-900/50 border-cyan-500/30">
            <CardHeader>
              <CardTitle className="text-cyan-400 font-mono text-lg">
                {">"} {userType === "buyer" ? "BUYER" : "SELLER"} PREFERENCES
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {userType === "buyer" ? (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 font-mono">Diamond Type</label>
                      <Select defaultValue="certified">
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-gray-300 font-mono">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="certified">Certified Diamonds</SelectItem>
                          <SelectItem value="non-certified">Non-Certified Diamonds</SelectItem>
                          <SelectItem value="both">Both Types</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 font-mono">Shape</label>
                      <Select defaultValue="round">
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-gray-300 font-mono">
                          <SelectValue placeholder="Select shape" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="round">Round</SelectItem>
                          <SelectItem value="princess">Princess</SelectItem>
                          <SelectItem value="cushion">Cushion</SelectItem>
                          <SelectItem value="oval">Oval</SelectItem>
                          <SelectItem value="emerald">Emerald</SelectItem>
                          <SelectItem value="any">Any Shape</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 font-mono">Carat Range</label>
                      <Select defaultValue="1-2">
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-gray-300 font-mono">
                          <SelectValue placeholder="Select carat range" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="0-1">0 - 1 carat</SelectItem>
                          <SelectItem value="1-2">1 - 2 carats</SelectItem>
                          <SelectItem value="2-3">2 - 3 carats</SelectItem>
                          <SelectItem value="3+">3+ carats</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 font-mono">Color Range</label>
                      <Select defaultValue="d-f">
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-gray-300 font-mono">
                          <SelectValue placeholder="Select color range" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="d-f">D-F (Colorless)</SelectItem>
                          <SelectItem value="g-j">G-J (Near Colorless)</SelectItem>
                          <SelectItem value="k-m">K-M (Faint Yellow)</SelectItem>
                          <SelectItem value="any">Any Color</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 font-mono">Clarity Range</label>
                      <Select defaultValue="vs">
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-gray-300 font-mono">
                          <SelectValue placeholder="Select clarity range" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="fl-vvs">FL-VVS (Flawless-Very Very Slightly Included)</SelectItem>
                          <SelectItem value="vs">VS (Very Slightly Included)</SelectItem>
                          <SelectItem value="si">SI (Slightly Included)</SelectItem>
                          <SelectItem value="i">I (Included)</SelectItem>
                          <SelectItem value="any">Any Clarity</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 font-mono">Budget Range</label>
                      <Select defaultValue="5k-10k">
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-gray-300 font-mono">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="0-5k">$0 - $5,000</SelectItem>
                          <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10k-20k">$10,000 - $20,000</SelectItem>
                          <SelectItem value="20k+">$20,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 font-mono">Urgency</label>
                      <Select defaultValue="medium">
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-gray-300 font-mono">
                          <SelectValue placeholder="Select urgency" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="high">High (Need within 7 days)</SelectItem>
                          <SelectItem value="medium">Medium (Need within 30 days)</SelectItem>
                          <SelectItem value="low">Low (No immediate timeline)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 font-mono">Location</label>
                      <Select defaultValue="global">
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-gray-300 font-mono">
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="north-america">North America</SelectItem>
                          <SelectItem value="europe">Europe</SelectItem>
                          <SelectItem value="asia">Asia</SelectItem>
                          <SelectItem value="global">Global (No preference)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 font-mono">Purpose</label>
                      <Select defaultValue="engagement">
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-gray-300 font-mono">
                          <SelectValue placeholder="Select purpose" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="engagement">Engagement Ring</SelectItem>
                          <SelectItem value="investment">Investment</SelectItem>
                          <SelectItem value="jewelry">Jewelry Creation</SelectItem>
                          <SelectItem value="resale">Resale</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 font-mono">Inventory Type</label>
                      <Select defaultValue="certified">
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-gray-300 font-mono">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="certified">Certified Diamonds</SelectItem>
                          <SelectItem value="non-certified">Non-Certified Diamonds</SelectItem>
                          <SelectItem value="both">Both Types</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 font-mono">Inventory Size</label>
                      <Select defaultValue="medium">
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-gray-300 font-mono">
                          <SelectValue placeholder="Select inventory size" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="small">Small (1-50 diamonds)</SelectItem>
                          <SelectItem value="medium">Medium (51-500 diamonds)</SelectItem>
                          <SelectItem value="large">Large (500+ diamonds)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 font-mono">Target Market</label>
                      <Select defaultValue="retailers">
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-gray-300 font-mono">
                          <SelectValue placeholder="Select target market" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="retailers">Jewelry Retailers</SelectItem>
                          <SelectItem value="wholesalers">Wholesalers</SelectItem>
                          <SelectItem value="manufacturers">Manufacturers</SelectItem>
                          <SelectItem value="all">All Buyers</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 font-mono">Price Flexibility</label>
                      <Select defaultValue="moderate">
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-gray-300 font-mono">
                          <SelectValue placeholder="Select price flexibility" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="fixed">Fixed (No negotiation)</SelectItem>
                          <SelectItem value="moderate">Moderate (±5% negotiation)</SelectItem>
                          <SelectItem value="flexible">Flexible (±10% negotiation)</SelectItem>
                          <SelectItem value="very-flexible">Very Flexible (Open to offers)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 font-mono">Geographic Focus</label>
                      <Select defaultValue="global">
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-gray-300 font-mono">
                          <SelectValue placeholder="Select geographic focus" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="north-america">North America</SelectItem>
                          <SelectItem value="europe">Europe</SelectItem>
                          <SelectItem value="asia">Asia</SelectItem>
                          <SelectItem value="global">Global</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 font-mono">Selling Timeframe</label>
                      <Select defaultValue="medium">
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-gray-300 font-mono">
                          <SelectValue placeholder="Select timeframe" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="urgent">Urgent (Within 7 days)</SelectItem>
                          <SelectItem value="medium">Medium (Within 30 days)</SelectItem>
                          <SelectItem value="relaxed">Relaxed (No immediate timeline)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 font-mono">Specialty</label>
                      <Select defaultValue="none">
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-gray-300 font-mono">
                          <SelectValue placeholder="Select specialty" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="fancy-color">Fancy Color Diamonds</SelectItem>
                          <SelectItem value="large-carat">Large Carat Diamonds</SelectItem>
                          <SelectItem value="rare-cuts">Rare Cuts</SelectItem>
                          <SelectItem value="none">No Specialty</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 font-mono">Volume Discount</label>
                      <Select defaultValue="yes">
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-gray-300 font-mono">
                          <SelectValue placeholder="Select volume discount" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="yes">Yes (Offer volume discounts)</SelectItem>
                          <SelectItem value="no">No (Fixed pricing)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 font-mono">Certification</label>
                      <Select defaultValue="gia">
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-gray-300 font-mono">
                          <SelectValue placeholder="Select certification" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="gia">GIA</SelectItem>
                          <SelectItem value="igi">IGI</SelectItem>
                          <SelectItem value="hrd">HRD</SelectItem>
                          <SelectItem value="multiple">Multiple Labs</SelectItem>
                          <SelectItem value="none">Non-Certified</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between pt-4">
                <Button variant="outline" className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 font-mono">
                  <Filter className="h-4 w-4 mr-2" />
                  ADVANCED FILTERS
                </Button>
                <Button
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 font-mono"
                  onClick={runMatchingProcess}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                      PROCESSING...
                    </>
                  ) : (
                    <>
                      <Brain className="h-4 w-4 mr-2" />
                      RUN AI MATCHING
                    </>
                  )}
                </Button>
              </div>

              {isLoading && (
                <div className="space-y-2 pt-4">
                  <div className="flex justify-between items-center text-sm font-mono">
                    <span className="text-cyan-400">NEURAL MATCHING IN PROGRESS</span>
                    <span className="text-cyan-400">{Math.round(progress)}%</span>
                  </div>
                  <Progress
                    value={progress}
                    className="h-2 bg-gray-800"
                    indicatorClassName="bg-gradient-to-r from-cyan-500 to-blue-500"
                  />
                  <div className="text-xs text-gray-400 font-mono animate-pulse">
                    {progress < 30
                      ? "Analyzing preferences..."
                      : progress < 60
                        ? "Scanning global database..."
                        : progress < 90
                          ? "Calculating compatibility scores..."
                          : "Finalizing matches..."}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Matches Tab */}
        <TabsContent value="matches">
          <Card className="bg-gray-900/50 border-cyan-500/30">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-cyan-400 font-mono text-lg">{">"} MATCH RESULTS</CardTitle>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <Input
                    placeholder="Search matches..."
                    className="pl-10 bg-gray-800 border-gray-700 text-gray-300 font-mono w-64"
                  />
                </div>
                <Select defaultValue="relevance">
                  <SelectTrigger className="bg-gray-800 border-gray-700 text-gray-300 font-mono w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="relevance">Match Relevance</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              {!matchesFound ? (
                <div className="text-center py-12">
                  <Brain className="h-16 w-16 text-gray-700 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-400 font-mono">NO MATCHES FOUND YET</h3>
                  <p className="text-gray-500 font-mono mt-2">Run the AI matching process to find potential matches</p>
                  <Button
                    className="mt-6 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 font-mono"
                    onClick={runMatchingProcess}
                  >
                    <Brain className="h-4 w-4 mr-2" />
                    RUN AI MATCHING
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/50 font-mono">
                      <Check className="h-3 w-3 mr-1" />
                      {userType === "buyer" ? "12 SELLERS MATCHED" : "18 BUYERS MATCHED"}
                    </Badge>
                    <div className="text-sm text-gray-400 font-mono">
                      Last updated: {new Date().toLocaleTimeString()}
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Match cards - different for buyers and sellers */}
                    {userType === "buyer"
                      ? // Buyer sees seller matches
                        Array.from({ length: 5 }).map((_, index) => (
                          <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-cyan-500/50">
                            <CardContent className="p-6">
                              <div className="flex items-start justify-between">
                                <div className="flex items-start space-x-4">
                                  <div className="p-3 bg-cyan-500/10 rounded-lg">
                                    <Diamond className="h-8 w-8 text-cyan-400" />
                                  </div>
                                  <div>
                                    <h3 className="text-lg font-bold text-white font-mono">
                                      {
                                        [
                                          "GIA Certified Round Brilliant",
                                          "VS1 Oval Diamond Collection",
                                          "Premium Princess Cut Diamonds",
                                          "Emerald Cut Selection",
                                          "Asscher Cut Diamonds",
                                        ][index]
                                      }
                                    </h3>
                                    <div className="flex items-center mt-1">
                                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/50 font-mono text-xs mr-2">
                                        {["CERTIFIED", "CERTIFIED", "NON-CERT", "CERTIFIED", "NON-CERT"][index]}
                                      </Badge>
                                      <div className="flex items-center text-gray-400 text-xs font-mono">
                                        <MapPin className="h-3 w-3 mr-1" />
                                        {["North America", "Europe", "Asia", "Global", "North America"][index]}
                                      </div>
                                    </div>
                                    <div className="mt-3 text-sm text-gray-300 font-mono">
                                      {
                                        [
                                          "1.0-1.5ct, D-F color, VS1-VS2 clarity, Excellent cut",
                                          "1.5-2.0ct, G-H color, VS2-SI1 clarity, Very Good cut",
                                          "0.8-1.2ct, F-G color, SI1-SI2 clarity, Excellent cut",
                                          "2.0-3.0ct, G-H color, VS1-VS2 clarity, Very Good cut",
                                          "1.0-2.0ct, E-F color, VVS2-VS1 clarity, Excellent cut",
                                        ][index]
                                      }
                                    </div>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <div className="flex items-center justify-end mb-2">
                                    <Badge
                                      className="bg-cyan-500/20 text-cyan-400 border-cyan-500/50 font-mono"
                                      variant="outline"
                                    >
                                      {["98%", "95%", "92%", "89%", "87%"][index]} MATCH
                                    </Badge>
                                  </div>
                                  <div className="text-lg font-bold text-green-400 font-mono">
                                    ${["5,800", "7,200", "4,500", "12,500", "8,900"][index]}/ct
                                  </div>
                                  <div className="text-xs text-gray-400 font-mono mt-1">
                                    {["12", "8", "15", "5", "10"][index]} diamonds available
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700">
                                <div className="flex items-center text-gray-400 text-sm font-mono">
                                  <Clock className="h-4 w-4 mr-2" />
                                  Available for {["immediate", "7-day", "14-day", "immediate", "7-day"][index]} delivery
                                </div>
                                <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 font-mono">
                                  <Handshake className="h-4 w-4 mr-2" />
                                  INITIATE CONTACT
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        ))
                      : // Seller sees buyer matches
                        Array.from({ length: 5 }).map((_, index) => (
                          <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-cyan-500/50">
                            <CardContent className="p-6">
                              <div className="flex items-start justify-between">
                                <div className="flex items-start space-x-4">
                                  <div className="p-3 bg-cyan-500/10 rounded-lg">
                                    <Users className="h-8 w-8 text-cyan-400" />
                                  </div>
                                  <div>
                                    <h3 className="text-lg font-bold text-white font-mono">
                                      {
                                        [
                                          "Luxury Jewelry Retailer",
                                          "Diamond Wholesaler",
                                          "Engagement Ring Specialist",
                                          "Investment Firm",
                                          "Custom Jewelry Designer",
                                        ][index]
                                      }
                                    </h3>
                                    <div className="flex items-center mt-1">
                                      <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/50 font-mono text-xs mr-2">
                                        {["RETAILER", "WHOLESALER", "RETAILER", "INVESTOR", "MANUFACTURER"][index]}
                                      </Badge>
                                      <div className="flex items-center text-gray-400 text-xs font-mono">
                                        <MapPin className="h-3 w-3 mr-1" />
                                        {["North America", "Asia", "Europe", "Global", "North America"][index]}
                                      </div>
                                    </div>
                                    <div className="mt-3 text-sm text-gray-300 font-mono">
                                      {
                                        [
                                          "Seeking certified diamonds for luxury jewelry line",
                                          "Looking for bulk purchase of mixed quality diamonds",
                                          "Needs premium quality engagement diamonds",
                                          "Acquiring investment-grade diamonds for portfolio",
                                          "Requires unique cuts for custom jewelry designs",
                                        ][index]
                                      }
                                    </div>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <div className="flex items-center justify-end mb-2">
                                    <Badge
                                      className="bg-cyan-500/20 text-cyan-400 border-cyan-500/50 font-mono"
                                      variant="outline"
                                    >
                                      {["97%", "94%", "91%", "88%", "85%"][index]} MATCH
                                    </Badge>
                                  </div>
                                  <div className="text-lg font-bold text-green-400 font-mono">
                                    ${["50,000", "120,000", "35,000", "250,000", "45,000"][index]}
                                  </div>
                                  <div className="text-xs text-gray-400 font-mono mt-1">Estimated order value</div>
                                </div>
                              </div>
                              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700">
                                <div className="flex items-center text-gray-400 text-sm font-mono">
                                  <Clock className="h-4 w-4 mr-2" />
                                  {["Immediate", "30-day", "7-day", "90-day", "14-day"][index]} purchase timeline
                                </div>
                                <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 font-mono">
                                  <Handshake className="h-4 w-4 mr-2" />
                                  INITIATE CONTACT
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div className="text-sm text-gray-400 font-mono">
                      Showing 5 of {userType === "buyer" ? "12" : "18"} matches
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 font-mono"
                      >
                        PREVIOUS
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 font-mono"
                      >
                        NEXT
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* History Tab */}
        <TabsContent value="history">
          <Card className="bg-gray-900/50 border-cyan-500/30">
            <CardHeader>
              <CardTitle className="text-cyan-400 font-mono text-lg">{">"} MATCH HISTORY</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <Clock className="h-16 w-16 text-gray-700 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-400 font-mono">NO MATCH HISTORY</h3>
                <p className="text-gray-500 font-mono mt-2">
                  Your match history will appear here after you initiate contact with matches
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
