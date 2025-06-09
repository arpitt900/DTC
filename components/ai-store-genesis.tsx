"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Store,
  Palette,
  Globe,
  Crown,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Wand2,
  Rocket,
  Users,
  Eye,
  BarChart3,
  Star,
  Diamond,
  Share2,
  CreditCard,
  Shield,
  Clock,
} from "lucide-react"

export function AiStoreGenesis() {
  const [storeName, setStoreName] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [activeStep, setActiveStep] = useState(1)

  const handleGenerateStore = () => {
    if (!storeName.trim()) return
    setIsGenerating(true)
    setTimeout(() => {
      setIsGenerating(false)
      setActiveStep(4)
    }, 3000)
  }

  const features = [
    {
      icon: Wand2,
      title: "Virtual Showroom Creation",
      description: "Generate your 3D virtual jewelry showroom with specialized counters in under 60 seconds",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Palette,
      title: "Smart Counter Design",
      description:
        "AI creates dedicated counters: Rings, Necklaces, Bracelets, Bangles, Bridal, Earrings, Pendants & Custom",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Diamond,
      title: "Grand Showroom Experience",
      description: "Immersive 3D environment with realistic lighting and premium showroom aesthetics",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Users,
      title: "Virtual Shopping Assistant",
      description: "AI-powered virtual sales assistant guides customers through your showroom",
      color: "from-green-500 to-emerald-500",
    },
  ]

  const benefits = [
    {
      icon: Clock,
      title: "Launch in 60 Seconds",
      description: "From concept to live app faster than making coffee",
    },
    {
      icon: Crown,
      title: "Your Brand, Your Rules",
      description: "Complete white-label solution with your branding",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Instant access to worldwide jewelry inventory",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security for all transactions",
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Track sales, customers, and inventory insights",
    },
    {
      icon: CreditCard,
      title: "Payment Ready",
      description: "Integrated payment processing and checkout",
    },
  ]

  const steps = [
    {
      step: 1,
      title: "Enter Store Name",
      description: "Tell us your jewelry brand name",
      icon: Store,
    },
    {
      step: 2,
      title: "AI Design Generation",
      description: "Our AI creates your custom design",
      icon: Wand2,
    },
    {
      step: 3,
      title: "Inventory Connection",
      description: "Connect to global jewelry suppliers",
      icon: Diamond,
    },
    {
      step: 4,
      title: "Launch Your Store",
      description: "Your branded app is ready to go live",
      icon: Rocket,
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-purple-900 via-black to-blue-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/50 font-mono mb-4">
            <Store className="h-3 w-3 mr-1" />
            AI STORE GENESIS
          </Badge>
          <h2 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            CREATE YOUR JEWELRY EMPIRE
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto font-mono leading-relaxed">
            {">"} Transform from jeweller to digital empire owner in 60 seconds
            <br />
            {">"} AI-powered white-label apps with global inventory access
            <br />
            {">"} Your brand, your customers, unlimited possibilities
          </p>
        </div>

        {/* Interactive Store Builder */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Store Creation Interface */}
          <div className="space-y-8">
            <div className="bg-gray-900/50 border border-purple-500/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white font-mono mb-6 flex items-center">
                <Sparkles className="mr-3 h-6 w-6 text-purple-400" />
                BUILD YOUR VIRTUAL SHOWROOM
              </h3>

              {/* Progress Steps */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  {steps.map((step) => (
                    <div
                      key={step.step}
                      className={`flex items-center space-x-2 ${
                        activeStep >= step.step ? "text-purple-400" : "text-gray-600"
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                          activeStep >= step.step ? "border-purple-400 bg-purple-400/20" : "border-gray-600"
                        }`}
                      >
                        {activeStep > step.step ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : (
                          <step.icon className="h-4 w-4" />
                        )}
                      </div>
                      <span className="text-xs font-mono hidden md:block">{step.title}</span>
                    </div>
                  ))}
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(activeStep / 4) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Store Name Input */}
              <div className="space-y-4">
                <label className="text-purple-400 font-mono text-sm">CREATE YOUR GRAND VIRTUAL SHOWROOM</label>
                <div className="flex space-x-3">
                  <Input
                    placeholder="e.g., Diamond Dreams Virtual Boutique"
                    value={storeName}
                    onChange={(e) => setStoreName(e.target.value)}
                    className="bg-black border-purple-500/50 text-white font-mono flex-1"
                  />
                  <Button
                    onClick={handleGenerateStore}
                    disabled={!storeName.trim() || isGenerating}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 font-mono"
                  >
                    {isGenerating ? (
                      <>
                        <Wand2 className="mr-2 h-4 w-4 animate-spin" />
                        CREATING...
                      </>
                    ) : (
                      <>
                        <Rocket className="mr-2 h-4 w-4" />
                        CREATE
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {/* Generation Progress */}
              {isGenerating && (
                <div className="mt-6 space-y-3">
                  <div className="text-purple-400 font-mono text-sm">AI GENERATION IN PROGRESS...</div>
                  {[
                    "Analyzing brand identity...",
                    "Generating custom design...",
                    "Connecting to inventory...",
                    "Optimizing user experience...",
                  ].map((step, i) => (
                    <div key={i} className="flex items-center space-x-3 text-xs font-mono text-gray-400">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Success State */}
              {activeStep === 4 && !isGenerating && (
                <div className="mt-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                  <div className="flex items-center space-x-3 text-green-400 font-mono">
                    <CheckCircle className="h-5 w-5" />
                    <span>🎉 {storeName} store created successfully!</span>
                  </div>
                  <div className="mt-3 flex space-x-3">
                    <Button size="sm" className="bg-green-600 hover:bg-green-500 font-mono">
                      <Eye className="mr-2 h-4 w-4" />
                      PREVIEW
                    </Button>
                    <Button size="sm" variant="outline" className="border-green-500/50 text-green-400 font-mono">
                      <Share2 className="mr-2 h-4 w-4" />
                      SHARE
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-purple-500/30 hover:border-purple-400 transition-all duration-300 group"
                >
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${feature.color} bg-opacity-20`}>
                        <feature.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-bold text-white font-mono mb-1">{feature.title}</h4>
                        <p className="text-gray-400 text-xs font-mono">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Mobile App Preview */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-[600px] bg-gray-900 rounded-[3rem] border-4 border-purple-500/30 shadow-2xl">
              {/* Phone Screen */}
              <div className="absolute inset-4 bg-black rounded-[2.5rem] overflow-hidden">
                {/* Status Bar */}
                <div className="h-8 bg-gray-900 flex items-center justify-between px-4 text-xs text-purple-400 font-mono">
                  <span>{storeName || "YOUR STORE"}</span>
                  <span>99%</span>
                </div>

                {/* App Content */}
                <div className="p-4 space-y-4">
                  {/* Header */}
                  <div className="text-center">
                    <h3 className="text-purple-400 font-mono text-lg font-bold">{storeName || "Diamond Dreams"}</h3>
                    <p className="text-gray-400 text-xs font-mono">Luxury Jewelry Collection</p>
                  </div>

                  {/* Featured Products */}
                  <div className="grid grid-cols-2 gap-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="bg-gray-800 rounded-lg p-3 border border-purple-500/30">
                        <div className="w-full h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded mb-2 flex items-center justify-center">
                          <Diamond className="h-6 w-6 text-purple-400" />
                        </div>
                        <div className="text-xs font-mono text-white">Diamond Ring</div>
                        <div className="text-xs font-mono text-purple-400">$2,450</div>
                      </div>
                    ))}
                  </div>

                  {/* Categories */}
                  <div className="space-y-2">
                    <h4 className="text-purple-400 font-mono text-sm">CATEGORIES</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Rings", "Necklaces", "Earrings", "Bracelets"].map((cat) => (
                        <Badge key={cat} className="bg-purple-500/20 text-purple-400 border-purple-500/50 text-xs">
                          {cat}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Indicators */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center animate-pulse">
                <Crown className="h-4 w-4 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center animate-pulse">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -right-8 top-20 bg-gray-900/90 border border-purple-500/50 rounded-lg p-3 backdrop-blur">
              <div className="text-xs font-mono text-purple-400 mb-1">LIVE STATS</div>
              <div className="space-y-1 text-xs font-mono text-white">
                <div>👥 247 visitors</div>
                <div>💎 1.2K products</div>
                <div>🛒 89 orders</div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-purple-400 font-mono mb-12">
            {">"} WHY JEWELLERS CHOOSE AI STORE GENESIS
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-purple-500/30 hover:border-purple-400 transition-all duration-300 group"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <benefit.icon className="h-8 w-8 text-purple-400 group-hover:animate-pulse" />
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

        {/* Success Stories */}
        <div className="bg-gray-900/50 border border-purple-500/30 rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center text-white font-mono mb-8">SUCCESS STORIES FROM JEWELLERS</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah's Gems",
                growth: "+340% sales",
                time: "in 3 months",
                quote: "From local shop to global brand overnight!",
              },
              {
                name: "Royal Diamonds",
                growth: "+15K customers",
                time: "in 6 months",
                quote: "AI Store Genesis transformed our business completely.",
              },
              {
                name: "Elite Jewelry",
                growth: "+500% reach",
                time: "in 4 months",
                quote: "Best investment we ever made for our jewelry business.",
              },
            ].map((story, i) => (
              <div key={i} className="text-center space-y-3">
                <div className="text-2xl font-bold text-purple-400 font-mono">{story.growth}</div>
                <div className="text-sm text-gray-400 font-mono">{story.time}</div>
                <div className="text-white font-mono font-bold">{story.name}</div>
                <div className="text-xs text-gray-400 font-mono italic">"{story.quote}"</div>
                <div className="flex justify-center">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="text-center space-y-8">
          <h3 className="text-4xl font-bold text-white font-mono">START YOUR JEWELRY EMPIRE TODAY</h3>
          <p className="text-gray-400 font-mono max-w-3xl mx-auto">
            {">"} Join 2,500+ successful jewellers who transformed their business with AI Store Genesis
            <br />
            {">"} No setup fees • No monthly limits • Complete white-label solution
          </p>

          <div className="bg-gray-900/50 border border-purple-500/30 rounded-xl p-8 max-w-md mx-auto">
            <div className="text-center space-y-4">
              <div className="text-3xl font-bold text-purple-400 font-mono">FREE</div>
              <div className="text-sm text-gray-400 font-mono">LAUNCH OFFER</div>
              <div className="space-y-2 text-xs font-mono text-gray-400">
                <div>✓ Unlimited products</div>
                <div>✓ Global inventory access</div>
                <div>✓ Custom branding</div>
                <div>✓ Payment processing</div>
                <div>✓ 24/7 AI support</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 font-mono"
              onClick={() => window.open("/virtual-showroom-demo", "_blank")}
            >
              <Eye className="mr-2 h-5 w-5" />
              EXPLORE VIRTUAL SHOWROOM
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 font-mono"
            >
              <Eye className="mr-2 h-5 w-5" />
              WATCH DEMO
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-8 text-xs font-mono text-gray-500">
            <span>• 60-SECOND SETUP</span>
            <span>• NO CODING REQUIRED</span>
            <span>• INSTANT GLOBAL REACH</span>
            <span>• WHITE-LABEL SOLUTION</span>
          </div>
        </div>
      </div>
    </section>
  )
}
