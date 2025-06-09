"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Brain, Eye, Send, Plus, X, Diamond } from "lucide-react"

export default function JewelerCampaignCreatePage() {
  const [campaignName, setCampaignName] = useState("")
  const [selectedDiamonds, setSelectedDiamonds] = useState<string[]>([])
  const [markup, setMarkup] = useState([25])
  const [targetAudience, setTargetAudience] = useState("")
  const [ageRange, setAgeRange] = useState([25, 45])
  const [budget, setBudget] = useState([5000, 25000])

  const availableDiamonds = [
    { id: "1", name: "1.5ct Round Brilliant, F, VS1", price: 8500, image: "/diamond-round.png" },
    { id: "2", name: "2.0ct Oval, G, VS2", price: 12000, image: "/diamond-oval.png" },
    { id: "3", name: "1.2ct Princess, E, VVS2", price: 7800, image: "/diamond-princess.png" },
    { id: "4", name: "1.8ct Cushion, H, SI1", price: 9200, image: "/diamond-cushion.png" },
  ]

  const toggleDiamond = (diamondId: string) => {
    setSelectedDiamonds((prev) =>
      prev.includes(diamondId) ? prev.filter((id) => id !== diamondId) : [...prev, diamondId],
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-cyan-400 font-mono">CREATE JEWELER CAMPAIGN</h1>
          <p className="text-gray-400 font-mono">Target your retail clients with personalized diamond offers</p>
        </div>
        <Badge variant="outline" className="flex items-center gap-1 border-cyan-500 text-cyan-400 font-mono">
          <Brain className="h-3 w-3 animate-pulse" />
          <span>RETAIL TARGETING v2.1</span>
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Campaign Details */}
          <Card className="bg-gray-900/50 border-cyan-500/30">
            <CardHeader>
              <CardTitle className="text-cyan-400 font-mono text-lg">{">"} CAMPAIGN DETAILS</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-300 font-mono">Campaign Name</Label>
                <Input
                  placeholder="e.g., Valentine's Day Engagement Rings"
                  value={campaignName}
                  onChange={(e) => setCampaignName(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-gray-300 font-mono"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-300 font-mono">Campaign Type</Label>
                  <Select defaultValue="promotional">
                    <SelectTrigger className="bg-gray-800 border-gray-700 text-gray-300 font-mono">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      <SelectItem value="promotional">Promotional</SelectItem>
                      <SelectItem value="seasonal">Seasonal</SelectItem>
                      <SelectItem value="new-arrival">New Arrival</SelectItem>
                      <SelectItem value="clearance">Clearance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-300 font-mono">Send Date</Label>
                  <Select defaultValue="immediate">
                    <SelectTrigger className="bg-gray-800 border-gray-700 text-gray-300 font-mono">
                      <SelectValue placeholder="Select send date" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      <SelectItem value="immediate">Send Immediately</SelectItem>
                      <SelectItem value="scheduled">Schedule for Later</SelectItem>
                      <SelectItem value="optimal">AI Optimal Time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-300 font-mono">Campaign Message</Label>
                <Textarea
                  placeholder="Craft your message to clients..."
                  className="bg-gray-800 border-gray-700 text-gray-300 font-mono min-h-[100px]"
                  defaultValue="Discover our exclusive collection of certified diamonds, handpicked for their exceptional quality and brilliance. Perfect for your special moments."
                />
              </div>
            </CardContent>
          </Card>

          {/* Diamond Selection */}
          <Card className="bg-gray-900/50 border-cyan-500/30">
            <CardHeader>
              <CardTitle className="text-cyan-400 font-mono text-lg">{">"} SELECT DIAMONDS</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {availableDiamonds.map((diamond) => (
                  <Card
                    key={diamond.id}
                    className={`cursor-pointer transition-all ${
                      selectedDiamonds.includes(diamond.id)
                        ? "bg-cyan-500/20 border-cyan-500"
                        : "bg-gray-800/50 border-gray-700 hover:border-cyan-500/50"
                    }`}
                    onClick={() => toggleDiamond(diamond.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <img
                            src={diamond.image || "/placeholder.svg"}
                            alt={diamond.name}
                            className="w-12 h-12 object-contain"
                          />
                          {selectedDiamonds.includes(diamond.id) && (
                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-cyan-500 rounded-full flex items-center justify-center">
                              <Plus className="h-3 w-3 text-white" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-white font-mono text-sm">{diamond.name}</h4>
                          <div className="text-green-400 font-mono text-sm">${diamond.price.toLocaleString()}</div>
                          <div className="text-gray-400 font-mono text-xs">
                            Retail: ${Math.round(diamond.price * (1 + markup[0] / 100)).toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {selectedDiamonds.length > 0 && (
                <div className="mt-4 p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="text-cyan-400 font-mono text-sm">
                      {selectedDiamonds.length} diamond{selectedDiamonds.length > 1 ? "s" : ""} selected
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedDiamonds([])}
                      className="text-gray-400 hover:text-white"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Pricing & Markup */}
          <Card className="bg-gray-900/50 border-cyan-500/30">
            <CardHeader>
              <CardTitle className="text-cyan-400 font-mono text-lg">{">"} PRICING & MARKUP</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="text-sm font-medium text-gray-300 font-mono">Markup Percentage</Label>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/50 font-mono">{markup[0]}%</Badge>
                </div>
                <Slider value={markup} onValueChange={setMarkup} max={100} min={10} step={5} className="w-full" />
                <div className="flex justify-between text-xs text-gray-400 font-mono">
                  <span>10%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-300 font-mono">Discount Offer</Label>
                  <Select defaultValue="none">
                    <SelectTrigger className="bg-gray-800 border-gray-700 text-gray-300 font-mono">
                      <SelectValue placeholder="Select discount" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      <SelectItem value="none">No Discount</SelectItem>
                      <SelectItem value="5">5% Off</SelectItem>
                      <SelectItem value="10">10% Off</SelectItem>
                      <SelectItem value="15">15% Off</SelectItem>
                      <SelectItem value="custom">Custom Discount</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-300 font-mono">Payment Terms</Label>
                  <Select defaultValue="immediate">
                    <SelectTrigger className="bg-gray-800 border-gray-700 text-gray-300 font-mono">
                      <SelectValue placeholder="Select terms" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      <SelectItem value="immediate">Immediate Payment</SelectItem>
                      <SelectItem value="30-days">30 Days</SelectItem>
                      <SelectItem value="60-days">60 Days</SelectItem>
                      <SelectItem value="installments">Installments</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-300 font-mono">Financing Options</Label>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="financing" />
                    <label htmlFor="financing" className="text-sm text-gray-300 font-mono">
                      Offer Financing
                    </label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          {/* Target Audience */}
          <Card className="bg-gray-900/50 border-cyan-500/30">
            <CardHeader>
              <CardTitle className="text-cyan-400 font-mono text-lg">{">"} TARGET AUDIENCE</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-300 font-mono">Audience Type</Label>
                <Select value={targetAudience} onValueChange={setTargetAudience}>
                  <SelectTrigger className="bg-gray-800 border-gray-700 text-gray-300 font-mono">
                    <SelectValue placeholder="Select audience" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="engaged-couples">Engaged Couples</SelectItem>
                    <SelectItem value="married-couples">Married Couples</SelectItem>
                    <SelectItem value="anniversary">Anniversary Shoppers</SelectItem>
                    <SelectItem value="luxury-buyers">Luxury Buyers</SelectItem>
                    <SelectItem value="gift-buyers">Gift Buyers</SelectItem>
                    <SelectItem value="all-clients">All Clients</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Label className="text-sm font-medium text-gray-300 font-mono">Age Range</Label>
                    <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/50 font-mono">
                      {ageRange[0]} - {ageRange[1]} years
                    </Badge>
                  </div>
                  <Slider value={ageRange} onValueChange={setAgeRange} max={70} min={18} step={1} className="w-full" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Label className="text-sm font-medium text-gray-300 font-mono">Budget Range</Label>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/50 font-mono">
                      ${budget[0].toLocaleString()} - ${budget[1].toLocaleString()}
                    </Badge>
                  </div>
                  <Slider
                    value={budget}
                    onValueChange={setBudget}
                    max={50000}
                    min={1000}
                    step={1000}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-300 font-mono">Location</Label>
                <Select defaultValue="all">
                  <SelectTrigger className="bg-gray-800 border-gray-700 text-gray-300 font-mono">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="local">Local Area (50 miles)</SelectItem>
                    <SelectItem value="state">State/Province</SelectItem>
                    <SelectItem value="country">Country</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-300 font-mono">Purchase History</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="previous-buyers" />
                    <label htmlFor="previous-buyers" className="text-sm text-gray-300 font-mono">
                      Previous Buyers
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="browsers" />
                    <label htmlFor="browsers" className="text-sm text-gray-300 font-mono">
                      Website Browsers
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="inquiries" />
                    <label htmlFor="inquiries" className="text-sm text-gray-300 font-mono">
                      Previous Inquiries
                    </label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Campaign Preview */}
          <Card className="bg-gray-900/50 border-cyan-500/30">
            <CardHeader>
              <CardTitle className="text-cyan-400 font-mono text-lg">{">"} CAMPAIGN PREVIEW</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <div className="text-sm text-gray-400 font-mono mb-2">EMAIL PREVIEW</div>
                  <div className="bg-white rounded-md p-4 text-black">
                    <div className="text-lg font-bold mb-2">{campaignName || "Your Campaign Name"}</div>
                    <div className="text-sm mb-3">
                      Discover our exclusive collection of certified diamonds, handpicked for their exceptional quality
                      and brilliance.
                    </div>
                    {selectedDiamonds.length > 0 && (
                      <div className="space-y-2">
                        {selectedDiamonds.slice(0, 2).map((diamondId) => {
                          const diamond = availableDiamonds.find((d) => d.id === diamondId)
                          if (!diamond) return null
                          return (
                            <div key={diamondId} className="flex items-center space-x-2 text-xs">
                              <Diamond className="h-3 w-3" />
                              <span>{diamond.name}</span>
                              <span className="font-bold">
                                ${Math.round(diamond.price * (1 + markup[0] / 100)).toLocaleString()}
                              </span>
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-mono">
                    <span className="text-gray-400">Estimated Reach:</span>
                    <span className="text-cyan-400">
                      {targetAudience === "engaged-couples"
                        ? "1,247"
                        : targetAudience === "married-couples"
                          ? "892"
                          : targetAudience === "all-clients"
                            ? "3,456"
                            : "1,500"}{" "}
                      clients
                    </span>
                  </div>
                  <div className="flex justify-between text-sm font-mono">
                    <span className="text-gray-400">Expected Open Rate:</span>
                    <span className="text-green-400">24.5%</span>
                  </div>
                  <div className="flex justify-between text-sm font-mono">
                    <span className="text-gray-400">Expected Revenue:</span>
                    <span className="text-green-400">$47,500</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="space-y-2">
            <Button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 font-mono">
              <Send className="h-4 w-4 mr-2" />
              LAUNCH CAMPAIGN
            </Button>
            <Button
              variant="outline"
              className="w-full border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 font-mono"
            >
              <Eye className="h-4 w-4 mr-2" />
              PREVIEW & TEST
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
