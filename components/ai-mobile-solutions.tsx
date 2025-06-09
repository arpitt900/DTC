"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Smartphone,
  Brain,
  Zap,
  Eye,
  MessageSquare,
  ShoppingCart,
  BarChart3,
  Camera,
  Sparkles,
  Globe,
  ArrowRight,
  CheckCircle,
  Cpu,
  Network,
  Bell,
} from "lucide-react"

export function AiMobileSolutions() {
  const [activeDemo, setActiveDemo] = useState("ai-recognition")

  const features = [
    {
      icon: Brain,
      title: "AI Diamond Recognition",
      description: "Instant diamond identification and grading using computer vision and neural networks",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Eye,
      title: "AR Diamond Viewer",
      description: "Augmented reality visualization of diamonds in real-world settings with AI-powered recommendations",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: MessageSquare,
      title: "AI Trading Assistant",
      description: "Intelligent chatbot for instant market insights, price negotiations, and trade recommendations",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Real-time market predictions and personalized investment opportunities powered by machine learning",
      color: "from-orange-500 to-red-500",
    },
  ]

  const benefits = [
    {
      icon: Zap,
      title: "Lightning-Fast AI Processing",
      description:
        "Process diamond evaluations and market analysis in under 2 seconds using quantum-accelerated algorithms",
    },
    {
      icon: Globe,
      title: "Global Market Integration",
      description: "Connect to 147+ international diamond markets with real-time pricing and availability updates",
    },
    {
      icon: Camera,
      title: "Smart Photo Analysis",
      description:
        "Upload diamond photos for instant AI grading, authenticity verification, and market value estimation",
    },
    {
      icon: Bell,
      title: "Intelligent Notifications",
      description:
        "AI-powered alerts for price changes, market opportunities, and personalized trading recommendations",
    },
    {
      icon: ShoppingCart,
      title: "One-Tap Trading",
      description: "Execute trades instantly with AI-verified transactions and automated compliance checking",
    },
    {
      icon: Network,
      title: "Neural Network Matching",
      description: "Advanced AI matching system connects buyers and sellers based on preferences and trading history",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/50 font-mono mb-4">
            <Smartphone className="h-3 w-3 mr-1" />
            AI-POWERED MOBILE SOLUTIONS
          </Badge>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            NEXT-GEN MOBILE TRADING
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
            {">"} Revolutionary mobile platform combining AI, AR, and quantum computing
            <br />
            {">"} Transform diamond trading with intelligent mobile solutions
          </p>
        </div>

        {/* Main Demo Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Mobile Mockup */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-[600px] bg-gray-900 rounded-[3rem] border-4 border-cyan-500/30 shadow-2xl">
              {/* Phone Screen */}
              <div className="absolute inset-4 bg-black rounded-[2.5rem] overflow-hidden">
                {/* Status Bar */}
                <div className="h-8 bg-gray-900 flex items-center justify-between px-4 text-xs text-cyan-400 font-mono">
                  <span>DIAMOND AI</span>
                  <span>99%</span>
                </div>

                {/* App Content */}
                <div className="p-4 space-y-4">
                  {activeDemo === "ai-recognition" && (
                    <div className="space-y-4">
                      <div className="text-center">
                        <h3 className="text-cyan-400 font-mono text-sm mb-2">AI DIAMOND SCANNER</h3>
                        <div className="w-48 h-48 mx-auto bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-500/30 flex items-center justify-center">
                          <div className="relative">
                            <div className="w-24 h-24 border-2 border-cyan-400 rounded-full animate-pulse"></div>
                            <Sparkles className="absolute inset-0 m-auto h-8 w-8 text-cyan-400 animate-spin" />
                          </div>
                        </div>
                        <div className="mt-4 space-y-2 text-xs font-mono">
                          <div className="flex justify-between text-cyan-400">
                            <span>Carat:</span>
                            <span>2.47ct</span>
                          </div>
                          <div className="flex justify-between text-cyan-400">
                            <span>Color:</span>
                            <span>D (Colorless)</span>
                          </div>
                          <div className="flex justify-between text-cyan-400">
                            <span>Clarity:</span>
                            <span>VVS1</span>
                          </div>
                          <div className="flex justify-between text-green-400">
                            <span>AI Confidence:</span>
                            <span>99.7%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeDemo === "ar-viewer" && (
                    <div className="space-y-4">
                      <div className="text-center">
                        <h3 className="text-purple-400 font-mono text-sm mb-2">AR DIAMOND VIEWER</h3>
                        <div className="w-48 h-48 mx-auto bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30 flex items-center justify-center">
                          <Eye className="h-16 w-16 text-purple-400 animate-pulse" />
                        </div>
                        <div className="mt-4 text-xs font-mono text-purple-400">
                          <p>{">"} AR MODE ACTIVE</p>
                          <p>{">"} REAL-TIME VISUALIZATION</p>
                          <p>{">"} 3D DIAMOND RENDERING</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Floating AI Indicators */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center animate-pulse">
                <Brain className="h-4 w-4 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                <Cpu className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white font-mono mb-8">AI-POWERED FEATURES</h3>

            {features.map((feature, index) => (
              <Card
                key={index}
                className={`group cursor-pointer transition-all duration-300 ${
                  activeDemo === feature.title.toLowerCase().replace(/\s+/g, "-")
                    ? "bg-gray-800/80 border-cyan-500/50"
                    : "bg-gray-900/50 border-gray-700/50 hover:border-cyan-500/30"
                }`}
                onClick={() => setActiveDemo(feature.title.toLowerCase().replace(/\s+/g, "-"))}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${feature.color} bg-opacity-20`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white font-mono mb-2">{feature.title}</h4>
                      <p className="text-gray-400 text-sm font-mono">{feature.description}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-cyan-400 font-mono mb-12">
            {">"} REVOLUTIONARY CAPABILITIES
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 group"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <benefit.icon className="h-8 w-8 text-cyan-400 group-hover:animate-pulse" />
                    <CheckCircle className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white font-mono mb-2">{benefit.title}</h4>
                    <p className="text-gray-400 text-sm font-mono">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gray-900/50 border border-cyan-500/30 rounded-lg p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "AI ACCURACY", value: "99.7%", icon: Brain },
              { label: "PROCESSING SPEED", value: "<2s", icon: Zap },
              { label: "GLOBAL MARKETS", value: "147+", icon: Globe },
              { label: "ACTIVE USERS", value: "12.8K", icon: Smartphone },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white font-mono">{stat.value}</div>
                <div className="text-xs text-gray-400 font-mono">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-8">
          <h3 className="text-3xl font-bold text-white font-mono">READY TO REVOLUTIONIZE MOBILE TRADING?</h3>
          <p className="text-gray-400 font-mono max-w-2xl mx-auto">
            {">"} Experience the future of diamond trading with AI-powered mobile solutions
            <br />
            {">"} Download the beta app and join the next generation of traders
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 font-mono"
            >
              <Smartphone className="mr-2 h-5 w-5" />
              REQUEST BETA ACCESS
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-mono"
            >
              <Eye className="mr-2 h-5 w-5" />
              WATCH DEMO
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-8 text-xs font-mono text-gray-500">
            <span>• iOS & ANDROID</span>
            <span>• QUANTUM SECURITY</span>
            <span>• REAL-TIME SYNC</span>
            <span>• OFFLINE CAPABLE</span>
          </div>
        </div>
      </div>
    </section>
  )
}
