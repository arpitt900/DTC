"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Brain, RefreshCw, TrendingUp, TrendingDown, DollarSign, Percent, BarChart3, CheckCircle } from "lucide-react"

export default function DealOptimizerPage() {
  const [isOptimizing, setIsOptimizing] = useState(false)
  const [progress, setProgress] = useState(0)
  const [optimizationComplete, setOptimizationComplete] = useState(false)
  const [dealType, setDealType] = useState("buy")

  const runOptimization = () => {
    setIsOptimizing(true)
    setProgress(0)
    setOptimizationComplete(false)

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 15
        if (newProgress >= 100) {
          clearInterval(interval)
          setIsOptimizing(false)
          setOptimizationComplete(true)
          return 100
        }
        return newProgress
      })
    }, 300)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-cyan-400 font-mono">DEAL OPTIMIZATION ENGINE</h1>
          <p className="text-gray-400 font-mono">AI-powered deal analysis and optimization for diamond trading</p>
        </div>
        <Badge variant="outline" className="flex items-center gap-1 border-cyan-500 text-cyan-400 font-mono">
          <Brain className="h-3 w-3 animate-pulse" />
          <span>NEURAL NEGOTIATION v3.5</span>
        </Badge>
      </div>

      {/* Deal Type Selection */}
      <Card className="bg-gray-900/50 border-cyan-500/30">
        <CardHeader>
          <CardTitle className="text-cyan-400 font-mono text-lg">{">"} DEAL TYPE</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button
              variant={dealType === "buy" ? "default" : "outline"}
              className={`h-24 flex items-center justify-start px-6 ${
                dealType === "buy"
                  ? "bg-gradient-to-r from-cyan-600 to-blue-600"
                  : "border-cyan-500/30 hover:border-cyan-400 text-gray-400"
              }`}
              onClick={() => setDealType("buy")}
            >
              <DollarSign className={`h-8 w-8 mr-4 ${dealType === "buy" ? "text-white" : "text-cyan-400"}`} />
              <div className="text-left">
                <div className={`text-xl font-bold font-mono ${dealType === "buy" ? "text-white" : "text-cyan-400"}`}>
                  BUYING OPTIMIZATION
                </div>
                <div className="text-sm font-mono text-gray-300">Optimize your diamond purchase</div>
              </div>
            </Button>

            <Button
              variant={dealType === "sell" ? "default" : "outline"}
              className={`h-24 flex items-center justify-start px-6 ${
                dealType === "sell"
                  ? "bg-gradient-to-r from-cyan-600 to-blue-600"
                  : "border-cyan-500/30 hover:border-cyan-400 text-gray-400"
              }`}
              onClick={() => setDealType("sell")}
            >
              <Percent className={`h-8 w-8 mr-4 ${dealType === "sell" ? "text-white" : "text-cyan-400"}`} />
              <div className="text-left">
                <div className={`text-xl font-bold font-mono ${dealType === "sell" ? "text-white" : "text-cyan-400"}`}>
                  SELLING OPTIMIZATION
                </div>
                <div className="text-sm font-mono text-gray-300">Optimize your diamond sale</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Deal Parameters */}
      <Card className="bg-gray-900/50 border-cyan-500/30">
        <CardHeader>
          <CardTitle className="text-cyan-400 font-mono text-lg">{">"} DEAL PARAMETERS</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-300 font-mono">Diamond Type</Label>
                <Select defaultValue="certified">
                  <SelectTrigger className="bg-gray-800 border-gray-700 text-gray-300 font-mono">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="certified">Certified Diamond</SelectItem>
                    <SelectItem value="non-certified">Non-Certified Diamond</SelectItem>
                    <SelectItem value="lab-grown">Lab-Grown Diamond</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-300 font-mono">Certification</Label>
                <Select defaultValue="gia">
                  <SelectTrigger className="bg-gray-800 border-gray-700 text-gray-300 font-mono">
                    <SelectValue placeholder="Select certification" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="gia">GIA</SelectItem>
                    <SelectItem value="igi">IGI</SelectItem>
                    <SelectItem value="hrd">HRD</SelectItem>
                    <SelectItem value="none">None</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-300 font-mono">Shape</Label>
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
                    <SelectItem value="pear">Pear</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-300 font-mono">Carat Weight</Label>
                <Input
                  type="number"
                  placeholder="1.5"
                  className="bg-gray-800 border-gray-700 text-gray-300 font-mono"
                  defaultValue="1.5"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-300 font-mono">Color</Label>
                <Select defaultValue="f">
                  <SelectTrigger className="bg-gray-800 border-gray-700 text-gray-300 font-mono">
                    <SelectValue placeholder="Select color" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="d">D</SelectItem>
                    <SelectItem value="e">E</SelectItem>
                    <SelectItem value="f">F</SelectItem>
                    <SelectItem value="g">G</SelectItem>
                    <SelectItem value="h">H</SelectItem>
                    <SelectItem value="i">I</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-300 font-mono">Clarity</Label>
                <Select defaultValue="vs1">
                  <SelectTrigger className="bg-gray-800 border-gray-700 text-gray-300 font-mono">
                    <SelectValue placeholder="Select clarity" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="if">IF</SelectItem>
                    <SelectItem value="vvs1">VVS1</SelectItem>
                    <SelectItem value="vvs2">VVS2</SelectItem>
                    <SelectItem value="vs1">VS1</SelectItem>
                    <SelectItem value="vs2">VS2</SelectItem>
                    <SelectItem value="si1">SI1</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-300 font-mono">Cut</Label>
                <Select defaultValue="excellent">
                  <SelectTrigger className="bg-gray-800 border-gray-700 text-gray-300 font-mono">
                    <SelectValue placeholder="Select cut" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="excellent">Excellent</SelectItem>
                    <SelectItem value="very-good">Very Good</SelectItem>
                    <SelectItem value="good">Good</SelectItem>
                    <SelectItem value="fair">Fair</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-300 font-mono">
                  {dealType === "buy" ? "Asking Price ($)" : "Desired Price ($)"}
                </Label>
                <Input
                  type="number"
                  placeholder="12500"
                  className="bg-gray-800 border-gray-700 text-gray-300 font-mono"
                  defaultValue="12500"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-300 font-mono">Urgency</Label>
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
                <Label className="text-sm font-medium text-gray-300 font-mono">Market</Label>
                <Select defaultValue="global">
                  <SelectTrigger className="bg-gray-800 border-gray-700 text-gray-300 font-mono">
                    <SelectValue placeholder="Select market" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="north-america">North America</SelectItem>
                    <SelectItem value="europe">Europe</SelectItem>
                    <SelectItem value="asia">Asia</SelectItem>
                    <SelectItem value="global">Global</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex items-center justify-end">
              <Button
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 font-mono"
                onClick={runOptimization}
                disabled={isOptimizing}
              >
                {isOptimizing ? (
                  <>
                    <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                    OPTIMIZING...
                  </>
                ) : (
                  <>
                    <Brain className="h-4 w-4 mr-2" />
                    OPTIMIZE DEAL
                  </>
                )}
              </Button>
            </div>

            {isOptimizing && (
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-mono">
                  <span className="text-cyan-400">OPTIMIZATION PROGRESS</span>
                  <span className="text-cyan-400">{Math.round(progress)}%</span>
                </div>
                <Progress
                  value={progress}
                  className="h-2 bg-gray-800"
                  indicatorClassName="bg-gradient-to-r from-cyan-500 to-blue-500"
                />
                <div className="text-xs text-gray-400 font-mono animate-pulse">
                  {progress < 30
                    ? "Analyzing market data..."
                    : progress < 60
                      ? "Calculating optimal price points..."
                      : progress < 90
                        ? "Generating negotiation strategy..."
                        : "Finalizing recommendations..."}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Optimization Results */}
      {optimizationComplete && (
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-gray-900 border border-cyan-500/30 p-0">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 rounded-none border-r border-cyan-500/30 px-6 py-3 font-mono"
            >
              OVERVIEW
            </TabsTrigger>
            <TabsTrigger
              value="strategy"
              className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 rounded-none border-r border-cyan-500/30 px-6 py-3 font-mono"
            >
              STRATEGY
            </TabsTrigger>
            <TabsTrigger
              value="market"
              className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 rounded-none border-r border-cyan-500/30 px-6 py-3 font-mono"
            >
              MARKET DATA
            </TabsTrigger>
            <TabsTrigger
              value="alternatives"
              className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 rounded-none px-6 py-3 font-mono"
            >
              ALTERNATIVES
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <Card className="bg-gray-900/50 border-cyan-500/30">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-cyan-400 font-mono text-lg">{">"} DEAL OPTIMIZATION RESULTS</CardTitle>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/50 font-mono">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  OPTIMIZATION COMPLETE
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Summary Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="bg-gray-800/50 border-gray-700">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-mono text-sm text-gray-400">OPTIMAL PRICE</div>
                          <DollarSign className="h-5 w-5 text-cyan-400" />
                        </div>
                        <div className="text-2xl font-bold text-white font-mono">
                          ${dealType === "buy" ? "11,850" : "13,200"}
                        </div>
                        <div className="text-xs text-cyan-400 font-mono mt-1">
                          {dealType === "buy" ? "5.2% below asking" : "5.6% above market average"}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-800/50 border-gray-700">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-mono text-sm text-gray-400">MARKET POSITION</div>
                          <BarChart3 className="h-5 w-5 text-purple-400" />
                        </div>
                        <div className="text-xl font-bold text-white font-mono">FAVORABLE</div>
                        <div className="text-xs text-purple-400 font-mono mt-1">
                          {dealType === "buy" ? "Buyer's market for this category" : "Strong demand for this category"}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-800/50 border-gray-700">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-mono text-sm text-gray-400">PRICE TREND</div>
                          {dealType === "buy" ? (
                            <TrendingDown className="h-5 w-5 text-green-400" />
                          ) : (
                            <TrendingUp className="h-5 w-5 text-green-400" />
                          )}
                        </div>
                        <div className="text-xl font-bold text-white font-mono">
                          {dealType === "buy" ? "-2.3%" : "+4.8%"}
                        </div>
                        <div className="text-xs text-green-400 font-mono mt-1">30-day forecast</div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Key Points */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-cyan-400 font-mono">{">"} KEY INSIGHTS</h3>
                    <div className="space-y-4">
                      {[
                        {
                          title:
                            dealType === "buy"
                              ? "Current asking price is 5.2% above market average"
                              : "Current desired price is 5.6% below optimal market value",
                          description:
                            dealType === "buy"
                              ? "Based on recent transactions of similar diamonds (F color, VS1 clarity, 1.5ct), the market average is $11,850."
                              : "Based on recent transactions of similar diamonds (F color, VS1 clarity, 1.5ct), the optimal market value is $13,200.",
                          icon: DollarSign,
                          color: "text-yellow-400",
                        },
                        {
                          title:
                            dealType === "buy"
                              ? "Excellent cut provides strong negotiation leverage"
                              : "Excellent cut is a premium selling point",
                          description:
                            dealType === "buy"
                              ? "Only 32% of similar diamonds on the market have excellent cut grade, which gives you room to negotiate on other factors."\
                              : "Excellent cut diamonds in this category are commanding a 12% premium over very good cut
