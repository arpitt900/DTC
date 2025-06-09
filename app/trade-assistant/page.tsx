"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Brain,
  Send,
  Sparkles,
  Diamond,
  MessageSquare,
  Clock,
  ChevronRight,
  RefreshCw,
  Zap,
  FileText,
  BarChart3,
  User,
} from "lucide-react"

export default function TradeAssistantPage() {
  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; content: string; timestamp: Date }>>([
    {
      role: "assistant",
      content:
        "Hello, I'm your AI Trade Assistant. I can help you with diamond trading, market insights, and deal optimization. How can I assist you today?",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return

    // Add user message
    const userMessage = {
      role: "user" as const,
      content: inputValue,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI thinking and responding
    setTimeout(() => {
      let response = ""

      if (inputValue.toLowerCase().includes("market trend")) {
        response =
          "Based on our latest AI analysis, round brilliant diamonds in the 1.0-1.5ct range are showing strong demand with a 12.4% price increase projected over the next 6 months. Oval shapes are also trending upward with a 28.7% increase in search volume. Would you like more specific market insights for a particular diamond category?"
      } else if (inputValue.toLowerCase().includes("price") || inputValue.toLowerCase().includes("value")) {
        response =
          "For pricing optimization, I recommend focusing on VS clarity grades in the F-G color range, which currently offer the best value-to-price ratio in the market. Based on recent transactions, these diamonds are selling at 4-7% higher margins than SI clarity grades. Would you like me to analyze a specific diamond's pricing potential?"
      } else if (inputValue.toLowerCase().includes("deal") || inputValue.toLowerCase().includes("negotiation")) {
        response =
          "To optimize your deal, I recommend highlighting the excellent cut grade and VS1 clarity, which are key selling points in the current market. Based on similar recent transactions, a competitive offer would be in the $12,000-$12,800 range. Would you like me to generate a detailed deal optimization strategy?"
      } else if (inputValue.toLowerCase().includes("certification") || inputValue.toLowerCase().includes("grading")) {
        response =
          "GIA certification currently commands a 15-20% premium over non-certified diamonds with similar specifications. For diamonds over 1ct, I strongly recommend obtaining GIA certification to maximize value. Would you like information about automated grading options?"
      } else {
        response =
          "I understand you're interested in diamond trading. Could you provide more specific details about what you're looking for? I can help with market trends, pricing optimization, deal negotiation, or finding specific diamonds that match your criteria."
      }

      const assistantMessage = {
        role: "assistant" as const,
        content: response,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, assistantMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-cyan-400 font-mono">TRADE ASSISTANT</h1>
          <p className="text-gray-400 font-mono">AI-powered conversational assistant for diamond trading</p>
        </div>
        <Badge variant="outline" className="flex items-center gap-1 border-cyan-500 text-cyan-400 font-mono">
          <Brain className="h-3 w-3 animate-pulse" />
          <span>NEURAL CONVERSATION v4.1</span>
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          {/* Chat Interface */}
          <Card className="bg-gray-900/50 border-cyan-500/30 flex flex-col h-[600px]">
            <CardHeader className="border-b border-gray-800">
              <div className="flex items-center justify-between">
                <CardTitle className="text-cyan-400 font-mono text-lg flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  DIAMOND TRADE ASSISTANT
                </CardTitle>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/50 font-mono">ONLINE</Badge>
              </div>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} mb-4`}>
                  <div
                    className={`max-w-[80%] rounded-lg p-4 ${
                      message.role === "user"
                        ? "bg-cyan-500/20 text-white"
                        : "bg-gray-800 border border-gray-700 text-gray-300"
                    }`}
                  >
                    <div className="flex items-center mb-1">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${
                          message.role === "user" ? "bg-cyan-500/30" : "bg-gray-700"
                        }`}
                      >
                        {message.role === "user" ? (
                          <User className="h-3 w-3 text-cyan-400" />
                        ) : (
                          <Brain className="h-3 w-3 text-cyan-400" />
                        )}
                      </div>
                      <div className="text-xs text-gray-400 font-mono">
                        {message.role === "user" ? "YOU" : "AI ASSISTANT"} •{" "}
                        {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </div>
                    </div>
                    <div className="text-sm font-mono whitespace-pre-wrap">{message.content}</div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start mb-4">
                  <div className="max-w-[80%] rounded-lg p-4 bg-gray-800 border border-gray-700">
                    <div className="flex items-center mb-1">
                      <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center mr-2">
                        <Brain className="h-3 w-3 text-cyan-400" />
                      </div>
                      <div className="text-xs text-gray-400 font-mono">AI ASSISTANT • Typing...</div>
                    </div>
                    <div className="flex space-x-1">
                      <div
                        className="w-2 h-2 rounded-full bg-cyan-500 animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 rounded-full bg-cyan-500 animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 rounded-full bg-cyan-500 animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </CardContent>
            <div className="p-4 border-t border-gray-800">
              <div className="flex space-x-2">
                <Input
                  placeholder="Type your message..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="bg-gray-800 border-gray-700 text-gray-300 font-mono"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={inputValue.trim() === "" || isTyping}
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <div className="text-xs text-gray-500 font-mono">Powered by Neural Conversation v4.1</div>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm" className="h-7 px-2 text-gray-400 hover:text-cyan-400">
                    <RefreshCw className="h-3 w-3 mr-1" />
                    <span className="text-xs">Reset</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="h-7 px-2 text-gray-400 hover:text-cyan-400">
                    <FileText className="h-3 w-3 mr-1" />
                    <span className="text-xs">Save</span>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          {/* Suggested Queries */}
          <Card className="bg-gray-900/50 border-cyan-500/30">
            <CardHeader>
              <CardTitle className="text-cyan-400 font-mono text-sm">SUGGESTED QUERIES</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {[
                "What are the current market trends for round brilliant diamonds?",
                "Help me optimize pricing for a 1.5ct VS1 F color diamond",
                "What's the best negotiation strategy for bulk diamond purchases?",
                "Compare GIA vs IGI certification value impact",
                "Analyze market demand for fancy colored diamonds",
              ].map((query, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start border-gray-700 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400 font-mono text-xs"
                  onClick={() => {
                    setInputValue(query)
                  }}
                >
                  <ChevronRight className="h-3 w-3 mr-2 text-cyan-500" />
                  {query}
                </Button>
              ))}
            </CardContent>
          </Card>

          {/* Recent Insights */}
          <Card className="bg-gray-900/50 border-cyan-500/30">
            <CardHeader>
              <CardTitle className="text-cyan-400 font-mono text-sm">MARKET INSIGHTS</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center">
                  <Sparkles className="h-4 w-4 text-cyan-400 mr-2" />
                  <h3 className="text-sm font-medium text-white font-mono">TRENDING SHAPES</h3>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { shape: "Oval", trend: "+28.7%" },
                    { shape: "Round", trend: "+12.4%" },
                    { shape: "Cushion", trend: "+8.2%" },
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-800 rounded-md p-2 text-center">
                      <div className="text-xs text-gray-300 font-mono">{item.shape}</div>
                      <div className="text-xs text-green-400 font-mono">{item.trend}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center">
                  <Diamond className="h-4 w-4 text-cyan-400 mr-2" />
                  <h3 className="text-sm font-medium text-white font-mono">PRICE MOVEMENTS</h3>
                </div>
                <div className="space-y-2">
                  {[
                    { category: "1-2ct, VS, F-G", change: "+5.2%", direction: "up" },
                    { category: "2-3ct, VVS, D-F", change: "+7.8%", direction: "up" },
                    { category: "Lab Grown, 1-2ct", change: "-3.5%", direction: "down" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-800 rounded-md p-2">
                      <div className="text-xs text-gray-300 font-mono">{item.category}</div>
                      <div
                        className={`text-xs font-mono ${item.direction === "up" ? "text-green-400" : "text-red-400"}`}
                      >
                        {item.change}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-cyan-400 mr-2" />
                  <h3 className="text-sm font-medium text-white font-mono">RECENT UPDATES</h3>
                </div>
                <div className="text-xs text-gray-400 font-mono">
                  Last market data update: {new Date().toLocaleTimeString()}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="space-y-2">
            <Button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 font-mono justify-start">
              <Zap className="h-4 w-4 mr-2" />
              OPTIMIZE CURRENT DEAL
            </Button>
            <Button
              variant="outline"
              className="w-full border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 font-mono justify-start"
            >
              <BarChart3 className="h-4 w-4 mr-2" />
              VIEW MARKET DASHBOARD
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
