"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowDownRight, ArrowUpRight, TrendingDown, TrendingUp } from "lucide-react"

const priceTrends = [
  {
    category: "Round, 1.0-1.5ct, VS",
    timeframe: "Last 30 days",
    change: 3.2,
    current: 7500,
    forecast: 7740,
  },
  {
    category: "Oval, 1.5-2.0ct, VS-SI",
    timeframe: "Last 30 days",
    change: 5.8,
    current: 6800,
    forecast: 7190,
  },
  {
    category: "Princess, 1.0-2.0ct, SI",
    timeframe: "Last 30 days",
    change: -1.7,
    current: 5200,
    forecast: 5110,
  },
  {
    category: "Lab-Grown, Round, 1.0-2.0ct",
    timeframe: "Last 30 days",
    change: -4.3,
    current: 2200,
    forecast: 2105,
  },
]

const shapeTrends = [
  {
    shape: "Oval",
    trend: 18.5,
    timeframe: "Last 6 months",
  },
  {
    shape: "Cushion",
    trend: 12.3,
    timeframe: "Last 6 months",
  },
  {
    shape: "Pear",
    trend: 8.7,
    timeframe: "Last 6 months",
  },
  {
    shape: "Princess",
    trend: -5.2,
    timeframe: "Last 6 months",
  },
  {
    shape: "Asscher",
    trend: -3.8,
    timeframe: "Last 6 months",
  },
  {
    shape: "Marquise",
    trend: -2.1,
    timeframe: "Last 6 months",
  },
]

export function MarketTrendAnalysis() {
  const [loading, setLoading] = useState(true)
  const [analysisConfidence, setAnalysisConfidence] = useState(0.85) // Example value
  const [caretVisible, setCaretVisible] = useState(true)

  useEffect(() => {
    // Simulate data loading and analysis
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCaretVisible((prev) => !prev)
    }, 500) // Blink every 0.5 second

    return () => clearInterval(interval)
  }, [])

  const renderTerminalText = (text: string, color = "text-cyan-500") => {
    return <span className={color + " font-mono text-sm"}>{text}</span>
  }

  const renderStatusLight = (isOn: boolean) => {
    return (
      <span
        className={`inline-block h-2 w-2 rounded-full mr-1 ${
          isOn ? "bg-green-500 shadow-green-500" : "bg-red-500 shadow-red-500"
        } shadow-md`}
      />
    )
  }

  const renderAnimatedCaret = () => {
    return <span className="text-cyan-500 font-mono text-sm">{caretVisible ? "_" : " "}</span>
  }

  return (
    <div className="bg-gray-900 text-white p-6 rounded-md shadow-lg space-y-6">
      {/* Console Header */}
      <div className="flex items-center justify-between mb-4">
        <div>{renderTerminalText("AI Market Analysis Console", "text-green-500")}</div>
        <div className="flex items-center">
          {renderStatusLight(!loading)}
          {renderTerminalText(
            loading ? "Analyzing..." : "Analysis Complete",
            loading ? "text-yellow-500" : "text-green-500",
          )}
        </div>
      </div>

      {/* Diamond Price Trends */}
      <div className="border border-gray-700 rounded-md p-4">
        <h3 className="text-lg font-semibold mb-2 text-cyan-500">{renderTerminalText("> Diamond Price Trends")}</h3>
        <p className="text-sm text-gray-400 mb-4">
          {renderTerminalText("AI-powered analysis of diamond price movements and forecasts")}
        </p>

        {/* Terminal-style Chart Visualization */}
        <div className="h-[200px] bg-gray-800 rounded-md flex items-center justify-center mb-4">
          {loading
            ? renderTerminalText("Loading chart data...")
            : renderTerminalText("Line chart visualization", "text-gray-500")}
        </div>

        {/* Price Trend Cards in Terminal Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {priceTrends.map((trend, index) => (
            <div key={index} className="bg-gray-800 border border-gray-700 rounded-md p-3">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-sm text-cyan-500">{trend.category}</h4>
                  <p className="text-xs text-gray-400">{trend.timeframe}</p>
                </div>
                <div className={`flex items-center ${trend.change >= 0 ? "text-emerald-600" : "text-red-600"}`}>
                  {trend.change >= 0 ? (
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 mr-1" />
                  )}
                  <span className="font-medium text-sm">
                    {trend.change >= 0 ? "+" : ""}
                    {trend.change}%
                  </span>
                </div>
              </div>
              <div className="mt-3 space-y-1">
                <div className="flex justify-between text-xs">
                  <span>Current:</span>
                  <span className="font-medium">${trend.current.toLocaleString()}/ct</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>Forecast (30d):</span>
                  <span className="font-medium">${trend.forecast.toLocaleString()}/ct</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Terminal-style Tabs */}
      <div className="border border-gray-700 rounded-md">
        <Tabs defaultValue="shape">
          <TabsList className="grid w-full grid-cols-4 bg-gray-800 rounded-t-md">
            <TabsTrigger value="shape" className="data-[state=active]:bg-gray-700 rounded-tl-md">
              {renderTerminalText("> Shape Trends")}
            </TabsTrigger>
            <TabsTrigger value="size" className="data-[state=active]:bg-gray-700">
              {renderTerminalText("> Size Trends")}
            </TabsTrigger>
            <TabsTrigger value="quality" className="data-[state=active]:bg-gray-700">
              {renderTerminalText("> Quality Trends")}
            </TabsTrigger>
            <TabsTrigger value="lab-grown" className="data-[state=active]:bg-gray-700 rounded-tr-md">
              {renderTerminalText("> Lab-Grown Market")}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="shape" className="p-4">
            <div className="border border-gray-700 rounded-md p-4">
              <h3 className="text-lg font-semibold mb-2 text-cyan-500">
                {renderTerminalText("> Diamond Shape Popularity Trends")}
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                {renderTerminalText("Analysis of changing consumer preferences for diamond shapes")}
              </p>

              {/* Terminal-style Chart Visualization */}
              <div className="h-[200px] bg-gray-800 rounded-md flex items-center justify-center mb-4">
                {loading
                  ? renderTerminalText("Loading chart data...")
                  : renderTerminalText("Bar chart visualization", "text-gray-500")}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-md font-semibold mb-2 text-cyan-500">{renderTerminalText("Rising Shapes")}</h4>
                  <div className="space-y-4">
                    {shapeTrends
                      .filter((t) => t.trend > 0)
                      .map((trend, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center">
                            <TrendingUp className="h-4 w-4 text-emerald-600 mr-2" />
                            <span className="font-medium">{trend.shape}</span>
                          </div>
                          <div className="flex items-center">
                            <Badge variant="outline" className="text-emerald-600">
                              +{trend.trend}%
                            </Badge>
                            <span className="text-xs text-muted-foreground ml-2">{trend.timeframe}</span>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-md font-semibold mb-2 text-cyan-500">{renderTerminalText("Declining Shapes")}</h4>
                  <div className="space-y-4">
                    {shapeTrends
                      .filter((t) => t.trend < 0)
                      .map((trend, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center">
                            <TrendingDown className="h-4 w-4 text-red-600 mr-2" />
                            <span className="font-medium">{trend.shape}</span>
                          </div>
                          <div className="flex items-center">
                            <Badge variant="outline" className="text-red-600">
                              {trend.trend}%
                            </Badge>
                            <span className="text-xs text-muted-foreground ml-2">{trend.timeframe}</span>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Remaining TabsContent sections - Size, Quality, Lab-Grown */}
          <TabsContent value="size" className="p-4">
            <div className="border border-gray-700 rounded-md p-4">
              <h3 className="text-lg font-semibold mb-2 text-cyan-500">
                {renderTerminalText("> Diamond Size Trends")}
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                {renderTerminalText("Analysis of market demand for different carat weights")}
              </p>
              <div className="h-[200px] bg-gray-800 rounded-md flex items-center justify-center">
                {loading
                  ? renderTerminalText("Loading chart data...")
                  : renderTerminalText("Size trends visualization will appear here", "text-gray-500")}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="quality" className="p-4">
            <div className="border border-gray-700 rounded-md p-4">
              <h3 className="text-lg font-semibold mb-2 text-cyan-500">
                {renderTerminalText("> Diamond Quality Trends")}
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                {renderTerminalText("Analysis of market preferences for color, clarity, and cut")}
              </p>
              <div className="h-[200px] bg-gray-800 rounded-md flex items-center justify-center">
                {loading
                  ? renderTerminalText("Loading chart data...")
                  : renderTerminalText("Quality trends visualization will appear here", "text-gray-500")}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="lab-grown" className="p-4">
            <div className="border border-gray-700 rounded-md p-4">
              <h3 className="text-lg font-semibold mb-2 text-cyan-500">
                {renderTerminalText("> Lab-Grown Diamond Market")}
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                {renderTerminalText("Analysis of the growing lab-grown diamond market")}
              </p>
              <div className="h-[200px] bg-gray-800 rounded-md flex items-center justify-center">
                {loading
                  ? renderTerminalText("Loading chart data...")
                  : renderTerminalText("Lab-grown market visualization will appear here", "text-gray-500")}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* System Metrics and Confidence Indicator */}
      <div className="flex items-center justify-between">
        <div>{renderTerminalText("System Metrics: CPU 70% | RAM 60%")}</div>
        <div>
          {renderTerminalText(
            `Analysis Confidence: ${(analysisConfidence * 100).toFixed(0)}%`,
            analysisConfidence > 0.75 ? "text-green-500" : "text-yellow-500",
          )}
        </div>
      </div>
      <div>
        {renderTerminalText("Ready", "text-green-500")}
        {renderAnimatedCaret()}
      </div>
    </div>
  )
}
