"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import {
  Diamond,
  Download,
  LineChart,
  BarChart3,
  PieChart,
  Maximize2,
  Minimize2,
  RefreshCw,
  Zap,
  Terminal,
  Sparkles,
  Layers,
  Filter,
  Activity,
  Brain,
  Eye,
} from "lucide-react"

export function DiamondSearchConsole() {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("visualization")
  const [searchQuery, setSearchQuery] = useState("")
  const [progress, setProgress] = useState(0)
  const [analysisComplete, setAnalysisComplete] = useState(false)
  const [consoleLines, setConsoleLines] = useState<string[]>([])
  const [currentCommand, setCurrentCommand] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const consoleRef = useRef<HTMLDivElement>(null)

  const aiCommands = [
    "INITIALIZING DIAMOND_AI_CORE_v3.7.2...",
    "LOADING NEURAL_NETWORK_MODELS...",
    "CONNECTING TO GLOBAL_DIAMOND_DATABASE...",
    "CALIBRATING PRICE_PREDICTION_ALGORITHMS...",
    "ANALYZING MARKET_SENTIMENT_DATA...",
    "PROCESSING 4C_CORRELATION_MATRICES...",
    "SCANNING 847,293 DIAMOND_RECORDS...",
    "DETECTING PRICE_ANOMALIES...",
    "GENERATING PREDICTIVE_MODELS...",
    "OPTIMIZING RECOMMENDATION_ENGINE...",
    "ANALYSIS_COMPLETE - CONFIDENCE: 94.7%",
  ]

  const systemStats = [
    { label: "CPU", value: "87%", color: "text-cyan-400" },
    { label: "GPU", value: "92%", color: "text-green-400" },
    { label: "RAM", value: "76%", color: "text-yellow-400" },
    { label: "NET", value: "1.2GB/s", color: "text-blue-400" },
  ]

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setProgress((oldProgress) => {
          const newProgress = Math.min(oldProgress + 10, 100)
          if (newProgress === 100) {
            setIsLoading(false)
            setAnalysisComplete(true)
          }
          return newProgress
        })
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isLoading, progress])

  useEffect(() => {
    if (isLoading && !isTyping) {
      setIsTyping(true)
      let commandIndex = 0

      const typeCommand = () => {
        if (commandIndex < aiCommands.length) {
          const command = aiCommands[commandIndex]
          let charIndex = 0
          setCurrentCommand("")

          const typeInterval = setInterval(() => {
            if (charIndex <= command.length) {
              setCurrentCommand(command.substring(0, charIndex))
              charIndex++
            } else {
              clearInterval(typeInterval)
              setConsoleLines((prev) => [...prev, `> ${command}`])
              setCurrentCommand("")
              commandIndex++

              if (commandIndex < aiCommands.length) {
                setTimeout(typeCommand, 200)
              } else {
                setIsTyping(false)
              }
            }
          }, 50)
        }
      }

      typeCommand()
    }
  }, [isLoading])

  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight
    }
  }, [consoleLines, currentCommand])

  const handleRefresh = () => {
    setIsLoading(true)
    setProgress(0)
    setAnalysisComplete(false)
    setConsoleLines([])
    setCurrentCommand("")
    setIsTyping(false)
  }

  const handleSearch = () => {
    if (searchQuery.trim()) {
      handleRefresh()
    }
  }

  return (
    <div className={`${isFullscreen ? "fixed inset-4 z-50 overflow-auto" : ""} relative`}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-lg"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent rounded-lg"></div>

      {/* Main Console */}
      <Card className="relative bg-black/90 border-cyan-500/30 shadow-2xl shadow-cyan-500/20 backdrop-blur-sm">
        <CardHeader className="pb-3 border-b border-cyan-500/30 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-md mr-3 shadow-lg shadow-cyan-500/50">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl flex items-center text-white">
                  DIAMOND_AI_CONSOLE
                  <div className="flex items-center ml-4 space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-400 font-mono">ONLINE</span>
                  </div>
                </CardTitle>
                <CardDescription className="text-cyan-300 font-mono text-sm">
                  Neural Network v3.7.2 | Quantum Processing Enabled
                </CardDescription>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {/* System Stats */}
              <div className="hidden md:flex items-center space-x-4 mr-4">
                {systemStats.map((stat, i) => (
                  <div key={i} className="text-xs font-mono">
                    <span className="text-gray-400">{stat.label}:</span>
                    <span className={`ml-1 ${stat.color}`}>{stat.value}</span>
                  </div>
                ))}
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleRefresh}
                disabled={isLoading}
                className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10"
              >
                <RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10"
              >
                {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-6 bg-black/50">
          {/* Command Input */}
          <div className="mb-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <Terminal className="h-4 w-4 text-cyan-400" />
              </div>
              <Input
                placeholder="ENTER DIAMOND SEARCH PARAMETERS..."
                className="pl-12 pr-24 bg-gray-900/80 border-cyan-500/50 text-cyan-100 placeholder:text-cyan-400/60 font-mono focus-visible:ring-cyan-400 focus-visible:border-cyan-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <Button
                className="absolute right-0 top-0 bottom-0 rounded-l-none bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-lg shadow-cyan-500/30"
                onClick={handleSearch}
              >
                <span className="font-mono">EXECUTE</span>
                <Zap className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* AI Console Terminal */}
          <div className="mb-6 bg-black border border-cyan-500/30 rounded-lg overflow-hidden shadow-inner shadow-cyan-500/20">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-4 py-2 border-b border-cyan-500/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-cyan-400 font-mono text-sm ml-4">DIAMOND_AI_TERMINAL</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Activity className="h-4 w-4 text-green-400 animate-pulse" />
                  <span className="text-xs text-green-400 font-mono">PROCESSING</span>
                </div>
              </div>
            </div>

            <div
              ref={consoleRef}
              className="p-4 h-48 overflow-auto font-mono text-sm bg-black scrollbar-thin scrollbar-thumb-cyan-500/30 scrollbar-track-transparent"
            >
              {consoleLines.map((line, i) => (
                <div key={i} className="text-cyan-300 mb-1 flex items-center">
                  <span className="text-cyan-500 mr-2">$</span>
                  <span>{line.replace("> ", "")}</span>
                  {line.includes("COMPLETE") && <Sparkles className="h-3 w-3 text-yellow-400 ml-2 animate-pulse" />}
                </div>
              ))}
              {currentCommand && (
                <div className="text-cyan-300 mb-1 flex items-center">
                  <span className="text-cyan-500 mr-2">$</span>
                  <span>{currentCommand}</span>
                  <span className="animate-pulse text-cyan-400 ml-1">█</span>
                </div>
              )}
              {!isLoading && consoleLines.length === 0 && (
                <div className="text-cyan-400/60">
                  <div>DIAMOND_AI_CONSOLE v3.7.2 READY</div>
                  <div>ENTER SEARCH PARAMETERS TO BEGIN ANALYSIS...</div>
                </div>
              )}
            </div>
          </div>

          {/* Progress Bar */}
          {isLoading && (
            <div className="mb-6 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Eye className="h-4 w-4 text-cyan-400 mr-2 animate-pulse" />
                  <span className="text-cyan-300 font-mono text-sm">NEURAL ANALYSIS PROGRESS</span>
                </div>
                <span className="text-cyan-400 font-mono text-sm">{progress}%</span>
              </div>
              <Progress
                value={progress}
                className="h-2 bg-gray-800 border border-cyan-500/30"
                indicatorClassName="bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/50"
              />
            </div>
          )}

          {/* Analysis Results */}
          {!isLoading && analysisComplete && (
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
              <div className="flex items-center justify-between">
                <TabsList className="bg-gray-900/80 border border-cyan-500/30">
                  <TabsTrigger
                    value="visualization"
                    className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-300 text-gray-400 font-mono"
                  >
                    <LineChart className="h-4 w-4 mr-2" />
                    VISUAL
                  </TabsTrigger>
                  <TabsTrigger
                    value="comparison"
                    className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-300 text-gray-400 font-mono"
                  >
                    <BarChart3 className="h-4 w-4 mr-2" />
                    COMPARE
                  </TabsTrigger>
                  <TabsTrigger
                    value="distribution"
                    className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-300 text-gray-400 font-mono"
                  >
                    <PieChart className="h-4 w-4 mr-2" />
                    DISTRIB
                  </TabsTrigger>
                </TabsList>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 font-mono"
                >
                  <Download className="h-4 w-4 mr-2" />
                  EXPORT_DATA
                </Button>
              </div>

              <TabsContent value="visualization" className="space-y-4">
                {/* Control Panel */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {[
                    { label: "CHART_TYPE", options: ["PRICE_VS_CARAT", "PRICE_VS_CLARITY", "PRICE_VS_COLOR"] },
                    { label: "X_AXIS", options: ["CARAT", "CLARITY", "COLOR", "CUT"] },
                    { label: "Y_AXIS", options: ["PRICE", "PRICE_PER_CARAT", "DISCOUNT"] },
                    { label: "COLOR_BY", options: ["SHAPE", "CLARITY", "COLOR", "LAB"] },
                  ].map((control, i) => (
                    <div key={i} className="space-y-2">
                      <Label className="text-cyan-300 font-mono text-xs">{control.label}</Label>
                      <select className="w-full bg-gray-900/80 border border-cyan-500/50 text-cyan-100 font-mono text-sm rounded px-3 py-2 focus:outline-none focus:border-cyan-400">
                        {control.options.map((option, j) => (
                          <option key={j} value={option.toLowerCase()}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}
                </div>

                {/* Visualization Area */}
                <div className="h-[400px] bg-gray-900/50 border border-cyan-500/30 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 to-transparent"></div>
                  <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-full h-[300px] flex items-center justify-center">
                        <div className="grid grid-cols-8 gap-2 opacity-60">
                          {Array.from({ length: 64 }).map((_, i) => (
                            <div
                              key={i}
                              className={`w-3 h-3 rounded-sm ${
                                Math.random() > 0.7
                                  ? "bg-cyan-400"
                                  : Math.random() > 0.5
                                    ? "bg-blue-400"
                                    : "bg-gray-600"
                              } animate-pulse`}
                              style={{ animationDelay: `${i * 50}ms` }}
                            ></div>
                          ))}
                        </div>
                      </div>
                      <p className="text-cyan-300 font-mono text-sm">NEURAL_NETWORK_VISUALIZATION_ACTIVE</p>
                    </div>
                  </div>
                </div>

                {/* Data Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { label: "AVG_PRICE", value: "$7,850", unit: "PER_CARAT", icon: Layers },
                    { label: "PRICE_RANGE", value: "$3.2K - $28.5K", unit: "TOTAL", icon: Filter },
                    { label: "DATASET_SIZE", value: "142", unit: "DIAMONDS", icon: Diamond },
                  ].map((metric, i) => (
                    <div key={i} className="bg-gray-900/50 border border-cyan-500/30 rounded-lg p-4">
                      <div className="flex items-center text-sm font-mono mb-2 text-cyan-300">
                        <metric.icon className="h-4 w-4 mr-2" />
                        {metric.label}
                      </div>
                      <div className="text-2xl font-bold text-white font-mono">{metric.value}</div>
                      <div className="text-xs text-cyan-400 font-mono mt-1">{metric.unit}</div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="comparison" className="space-y-4">
                <div className="text-center text-cyan-300 font-mono">COMPARISON_MODULE_LOADING...</div>
              </TabsContent>

              <TabsContent value="distribution" className="space-y-4">
                <div className="text-center text-cyan-300 font-mono">DISTRIBUTION_ANALYSIS_LOADING...</div>
              </TabsContent>
            </Tabs>
          )}

          {/* AI Insights Panel */}
          {analysisComplete && (
            <div className="mt-6 bg-gradient-to-r from-gray-900/80 to-black/80 border border-cyan-500/30 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Brain className="h-5 w-5 text-cyan-400 mr-2 animate-pulse" />
                <h3 className="font-mono text-cyan-300 font-semibold">AI_NEURAL_INSIGHTS</h3>
                <Badge className="ml-auto bg-green-500/20 text-green-400 border-green-500/30 font-mono text-xs">
                  CONFIDENCE: 94.7%
                </Badge>
              </div>
              <div className="space-y-2 text-sm font-mono">
                {[
                  "ROUND_BRILLIANT_1.0-1.5CT: PRICE_STABILITY_INDEX = 0.97",
                  "VS1_CLARITY: PREMIUM_DETECTED = +3.2% ABOVE_MARKET_AVG",
                  "OVAL_SHAPE: GROWTH_TREND_DETECTED = +18.5% QoQ",
                  "OPTIMAL_PURCHASE_RANGE: $7,200-$8,500 PER_CARAT",
                ].map((insight, i) => (
                  <div key={i} className="flex items-center text-cyan-300">
                    <span className="text-cyan-500 mr-2">►</span>
                    <span>{insight}</span>
                    <div className="ml-auto">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
