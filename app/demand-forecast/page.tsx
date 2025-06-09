"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  BarChart3,
  Brain,
  TrendingUp,
  TrendingDown,
  Calendar,
  Globe,
  Diamond,
  Sparkles,
  RefreshCw,
  ArrowRight,
  LineChart,
  PieChart,
  Zap,
} from "lucide-react"

export default function DemandForecastPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [forecastGenerated, setForecastGenerated] = useState(true)
  const [selectedRegion, setSelectedRegion] = useState("global")
  const [selectedTimeframe, setSelectedTimeframe] = useState("6-months")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const generateForecast = () => {
    setIsLoading(true)
    setForecastGenerated(false)

    setTimeout(() => {
      setIsLoading(false)
      setForecastGenerated(true)
    }, 2500)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-cyan-400 font-mono">DEMAND FORECAST ENGINE</h1>
          <p className="text-gray-400 font-mono">AI-powered predictive analytics for diamond market demand</p>
        </div>
        <Badge variant="outline" className="flex items-center gap-1 border-cyan-500 text-cyan-400 font-mono">
          <Brain className="h-3 w-3 animate-pulse" />
          <span>NEURAL PREDICTION v3.2</span>
        </Badge>
      </div>

      {/* Forecast Controls */}
      <Card className="bg-gray-900/50 border-cyan-500/30">
        <CardHeader>
          <CardTitle className="text-cyan-400 font-mono text-lg">{">"} FORECAST PARAMETERS</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 font-mono">Region</label>
              <Select defaultValue={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger className="bg-gray-800 border-gray-700 text-gray-300 font-mono">
                  <SelectValue placeholder="Select region" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700">
                  <SelectItem value="global">Global</SelectItem>
                  <SelectItem value="north-america">North America</SelectItem>
                  <SelectItem value="europe">Europe</SelectItem>
                  <SelectItem value="asia">Asia</SelectItem>
                  <SelectItem value="middle-east">Middle East</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 font-mono">Timeframe</label>
              <Select defaultValue={selectedTimeframe} onValueChange={setSelectedTimeframe}>
                <SelectTrigger className="bg-gray-800 border-gray-700 text-gray-300 font-mono">
                  <SelectValue placeholder="Select timeframe" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700">
                  <SelectItem value="3-months">3 Months</SelectItem>
                  <SelectItem value="6-months">6 Months</SelectItem>
                  <SelectItem value="12-months">12 Months</SelectItem>
                  <SelectItem value="24-months">24 Months</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 font-mono">Category</label>
              <Select defaultValue={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-gray-800 border-gray-700 text-gray-300 font-mono">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700">
                  <SelectItem value="all">All Diamonds</SelectItem>
                  <SelectItem value="certified">Certified Diamonds</SelectItem>
                  <SelectItem value="non-certified">Non-Certified Diamonds</SelectItem>
                  <SelectItem value="jewelry">Jewelry</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end">
              <Button
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 font-mono"
                onClick={generateForecast}
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
                    GENERATE FORECAST
                  </>
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Forecast Results */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="bg-gray-900 border border-cyan-500/30 p-0">
          <TabsTrigger
            value="overview"
            className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 rounded-none border-r border-cyan-500/30 px-6 py-3 font-mono"
          >
            OVERVIEW
          </TabsTrigger>
          <TabsTrigger
            value="trends"
            className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 rounded-none border-r border-cyan-500/30 px-6 py-3 font-mono"
          >
            TRENDS
          </TabsTrigger>
          <TabsTrigger
            value="categories"
            className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 rounded-none border-r border-cyan-500/30 px-6 py-3 font-mono"
          >
            CATEGORIES
          </TabsTrigger>
          <TabsTrigger
            value="regional"
            className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 rounded-none px-6 py-3 font-mono"
          >
            REGIONAL
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview">
          <Card className="bg-gray-900/50 border-cyan-500/30">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-cyan-400 font-mono text-lg">{">"} DEMAND FORECAST OVERVIEW</CardTitle>
              <div className="flex items-center space-x-2">
                <Badge className="bg-green-500/20 text-green-400 border-green-500/50 font-mono">97.2% CONFIDENCE</Badge>
                <div className="text-sm text-gray-400 font-mono">Last updated: {new Date().toLocaleTimeString()}</div>
              </div>
            </CardHeader>
            <CardContent>
              {!forecastGenerated ? (
                <div className="text-center py-12">
                  <Brain className="h-16 w-16 text-gray-700 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-400 font-mono">NO FORECAST GENERATED</h3>
                  <p className="text-gray-500 font-mono mt-2">Generate a forecast to see predictive demand analytics</p>
                  <Button
                    className="mt-6 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 font-mono"
                    onClick={generateForecast}
                  >
                    <Brain className="h-4 w-4 mr-2" />
                    GENERATE FORECAST
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Summary Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <Card className="bg-gray-800/50 border-gray-700">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-mono text-sm text-gray-400">OVERALL DEMAND</div>
                          <TrendingUp className="h-5 w-5 text-green-400" />
                        </div>
                        <div className="text-2xl font-bold text-white font-mono">+12.4%</div>
                        <div className="text-xs text-green-400 font-mono mt-1">Projected growth over 6 months</div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-800/50 border-gray-700">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-mono text-sm text-gray-400">HIGHEST DEMAND</div>
                          <Diamond className="h-5 w-5 text-cyan-400" />
                        </div>
                        <div className="text-xl font-bold text-white font-mono">ROUND BRILLIANT</div>
                        <div className="text-xs text-cyan-400 font-mono mt-1">1.0-1.5ct, VS clarity</div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-800/50 border-gray-700">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-mono text-sm text-gray-400">FASTEST GROWING</div>
                          <Sparkles className="h-5 w-5 text-purple-400" />
                        </div>
                        <div className="text-xl font-bold text-white font-mono">OVAL SHAPE</div>
                        <div className="text-xs text-purple-400 font-mono mt-1">+28.7% projected growth</div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-800/50 border-gray-700">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-mono text-sm text-gray-400">DECLINING DEMAND</div>
                          <TrendingDown className="h-5 w-5 text-red-400" />
                        </div>
                        <div className="text-xl font-bold text-white font-mono">PRINCESS CUT</div>
                        <div className="text-xs text-red-400 font-mono mt-1">-8.3% projected decline</div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Main Chart */}
                  <Card className="bg-gray-800/50 border-gray-700">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="font-mono text-lg text-cyan-400">DEMAND FORECAST VISUALIZATION</div>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 font-mono"
                          >
                            <LineChart className="h-4 w-4 mr-2" />
                            LINE
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 font-mono"
                          >
                            <BarChart3 className="h-4 w-4 mr-2" />
                            BAR
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 font-mono"
                          >
                            <PieChart className="h-4 w-4 mr-2" />
                            PIE
                          </Button>
                        </div>
                      </div>
                      <div className="h-[400px] bg-gray-900 rounded-lg flex items-center justify-center">
                        <div className="text-gray-500 font-mono">Demand forecast visualization</div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Key Insights */}
                  <div>
                    <h3 className="text-lg font-bold text-cyan-400 font-mono mb-4">{">"} KEY INSIGHTS</h3>
                    <div className="space-y-4">
                      {[
                        {
                          title: "Oval shapes projected to overtake princess cuts in popularity",
                          description:
                            "Market data indicates a strong shift toward oval shapes, particularly in the 1.5-2.0ct range, with projected growth of 28.7% over the next 6 months.",
                          icon: TrendingUp,
                          color: "text-green-400",
                        },
                        {
                          title: "Increased demand for lab-grown diamonds in North America",
                          description:
                            "Lab-grown diamonds are showing accelerated adoption in North America, with a 32.4% projected increase in demand, primarily in the 1.0-2.0ct range.",
                          icon: Globe,
                          color: "text-blue-400",
                        },
                        {
                          title: "Seasonal spike expected for engagement rings in Q2",
                          description:
                            "Historical data and social trends indicate a 24.8% increase in engagement ring demand during Q2, with round brilliants remaining the preferred shape.",
                          icon: Calendar,
                          color: "text-purple-400",
                        },
                        {
                          title: "Fancy colored diamonds showing premium resilience",
                          description:
                            "While white diamond prices may fluctuate, fancy colored diamonds are projected to maintain premium pricing with a potential 5.2% increase in value.",
                          icon: Diamond,
                          color: "text-yellow-400",
                        },
                      ].map((insight, index) => (
                        <Card key={index} className="bg-gray-800/50 border-gray-700">
                          <CardContent className="p-4">
                            <div className="flex items-start space-x-4">
                              <div className="p-2 bg-gray-900 rounded-lg">
                                <insight.icon className={`h-6 w-6 ${insight.color}`} />
                              </div>
                              <div>
                                <h4 className="text-white font-mono font-medium">{insight.title}</h4>
                                <p className="text-gray-400 font-mono text-sm mt-1">{insight.description}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4">
                    <Button
                      variant="outline"
                      className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 font-mono"
                    >
                      <Zap className="h-4 w-4 mr-2" />
                      EXPORT FORECAST
                    </Button>
                    <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 font-mono">
                      OPTIMIZE INVENTORY
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Trends Tab */}
        <TabsContent value="trends">
          <Card className="bg-gray-900/50 border-cyan-500/30">
            <CardHeader>
              <CardTitle className="text-cyan-400 font-mono text-lg">{">"} DEMAND TRENDS ANALYSIS</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[500px] bg-gray-800 rounded-lg flex items-center justify-center">
                <div className="text-gray-500 font-mono">Demand trends visualization</div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Categories Tab */}
        <TabsContent value="categories">
          <Card className="bg-gray-900/50 border-cyan-500/30">
            <CardHeader>
              <CardTitle className="text-cyan-400 font-mono text-lg">{">"} CATEGORY DEMAND ANALYSIS</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[500px] bg-gray-800 rounded-lg flex items-center justify-center">
                <div className="text-gray-500 font-mono">Category demand visualization</div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Regional Tab */}
        <TabsContent value="regional">
          <Card className="bg-gray-900/50 border-cyan-500/30">
            <CardHeader>
              <CardTitle className="text-cyan-400 font-mono text-lg">{">"} REGIONAL DEMAND ANALYSIS</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[500px] bg-gray-800 rounded-lg flex items-center justify-center">
                <div className="text-gray-500 font-mono">Regional demand visualization</div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
