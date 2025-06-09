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
import { Brain, MapPin, Zap, Send, Eye, Plus, X, Diamond, BarChart3 } from "lucide-react"

export default function TraderCampaignCreatePage() {
  const [campaignName, setCampaignName] = useState("")
  const [selectedDiamonds, setSelectedDiamonds] = useState<string[]>([])
  const [selectedRegions, setSelectedRegions] = useState<string[]>([])
  const [priceFlexibility, setPriceFlexibility] = useState([10])
  const [volumeDiscount, setVolumeDiscount] = useState([5])

  const availableDiamonds = [
    { id: "1", name: "1.5ct Round Brilliant, F, VS1", price: 8500, quantity: 12, image: "/diamond-round.png" },
    { id: "2", name: "2.0ct Oval, G, VS2", price: 12000, quantity: 8, image: "/diamond-oval.png" },
    { id: "3", name: "1.2ct Princess, E, VVS2", price: 7800, quantity: 15, image: "/diamond-princess.png" },
    { id: "4", name: "1.8ct Cushion, H, SI1", price: 9200, quantity: 10, image: "/diamond-cushion.png" },
  ]

  const regions = [
    { id: "north-america", name: "North America", jewelers: 247, excitement: 87 },
    { id: "europe", name: "Europe", jewelers: 189, excitement: 92 },
    { id: "asia", name: "Asia", jewelers: 156, excitement: 78 },
    { id: "middle-east", name: "Middle East", jewelers: 89, excitement: 95 },
    { id: "south-america", name: "South America", jewelers: 67, excitement: 82 },
    { id: "africa", name: "Africa", jewelers: 34, excitement: 88 },
  ]

  const toggleDiamond = (diamondId: string) => {
    setSelectedDiamonds((prev) =>
      prev.includes(diamondId) ? prev.filter((id) => id !== diamondId) : [...prev, diamondId],
    )
  }

  const toggleRegion = (regionId: string) => {
    setSelectedRegions((prev) => (prev.includes(regionId) ? prev.filter((id) => id !== regionId) : [...prev, regionId]))
  }

  const getTotalJewelers = () => {
    return regions
      .filter((region) => selectedRegions.includes(region.id))
      .reduce((total, region) => total + region.jewelers, 0)
  }

  const getAverageExcitement = () => {
    const selectedRegionData = regions.filter((region) => selectedRegions.includes(region.id))
    if (selectedRegionData.length === 0) return 0
    return Math.round(
      selectedRegionData.reduce((total, region) => total + region.excitement, 0) / selectedRegionData.length,
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-cyan-400 font-mono">CREATE TRADER CAMPAIGN</h1>
          <p className="text-gray-400 font-mono">Target jewelers globally with your best diamond deals</p>
        </div>
        <Badge variant="outline" className="flex items-center gap-1 border-cyan-500 text-cyan-400 font-mono">
          <Brain className="h-3 w-3 animate-pulse" />
          <span>GLOBAL TARGETING v3.0</span>
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
                  placeholder="e.g., Premium Round Brilliants - Special Offer"
                  value={campaignName}
                  onChange={(e) => setCampaignName(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-gray-300 font-mono"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-300 font-mono">Campaign Type</Label>
                  <Select defaultValue="special-offer">
                    <SelectTrigger className="bg-gray-800 border-gray-700 text-gray-300 font-mono">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      <SelectItem value="special-offer">Special Offer</SelectItem>
                      <SelectItem value="new-inventory">New Inventory</SelectItem>
                      <SelectItem value="clearance">Clearance Sale</SelectItem>
                      <SelectItem value="exclusive">Exclusive Access</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-300 font-mono">Urgency Level</Label>
                  <Select defaultValue="medium">
                    <SelectTrigger className="bg-gray-800 border-gray-700 text-gray-300 font-mono">
                      <SelectValue placeholder="Select urgency" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      <SelectItem value="high">High (Limited Time)</SelectItem>
                      <SelectItem value="medium">Medium (This Week)</SelectItem>
                      <SelectItem value="low">Low (No Rush)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-300 font-mono">Deal Description</Label>
                <Textarea
                  placeholder="Describe your special offer to jewelers..."
                  className="bg-gray-800 border-gray-700 text-gray-300 font-mono min-h-[100px]"
                  defaultValue="Exclusive access to our premium certified diamond collection. Limited quantities available with special pricing for qualified jewelers."
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
                          <div className="text-green-400 font-mono text-sm">${diamond.price.toLocaleString()}/ct</div>
                          <div className="text-gray-400 font-mono text-xs">{diamond.quantity} available</div>
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
                      {selectedDiamonds.length} diamond type{selectedDiamonds.length > 1 ? "s" : ""} selected
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

          {/* Pricing Strategy */}
          <Card className="bg-gray-900/50 border-cyan-500/30">
            <CardHeader>
              <CardTitle className="text-cyan-400 font-mono text-lg">{">"} PRICING STRATEGY</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Label className="text-sm font-medium text-gray-300 font-mono">Price Flexibility</Label>
                    <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/50 font-mono">
                      ±{priceFlexibility[0]}%
                    </Badge>
                  </div>
                  <Slider
                    value={priceFlexibility}
                    onValueChange={setPriceFlexibility}
                    max={25}
                    min={0}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-400 font-mono mt-1">
                    <span>Fixed Price</span>
                    <span>Moderate</span>
                    <span>Very Flexible</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Label className="text-sm font-medium text-gray-300 font-mono">Volume Discount</Label>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/50 font-mono">
                      {volumeDiscount[0]}%
                    </Badge>
                  </div>
                  <Slider
                    value={volumeDiscount}
                    onValueChange={setVolumeDiscount}
                    max={20}
                    min={0}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-400 font-mono mt-1">
                    <span>No Discount</span>
                    <span>10%</span>
                    <span>20%</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-300 font-mono">Payment Terms</Label>
                  <Select defaultValue="30-days">
                    <SelectTrigger className="bg-gray-800 border-gray-700 text-gray-300 font-mono">
                      <SelectValue placeholder="Select terms" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      <SelectItem value="immediate">Immediate Payment</SelectItem>
                      <SelectItem value="30-days">30 Days Net</SelectItem>
                      <SelectItem value="60-days">60 Days Net</SelectItem>
                      <SelectItem value="consignment">Consignment</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-300 font-mono">Minimum Order</Label>
                  <Select defaultValue="1">
                    <SelectTrigger className="bg-gray-800 border-gray-700 text-gray-300 font-mono">
                      <SelectValue placeholder="Select minimum" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      <SelectItem value="1">1 Diamond</SelectItem>
                      <SelectItem value="5">5 Diamonds</SelectItem>
                      <SelectItem value="10">10 Diamonds</SelectItem>
                      <SelectItem value="custom">Custom Amount</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-300 font-mono">Special Incentives</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="exclusive-access" />
                    <label htmlFor="exclusive-access" className="text-sm text-gray-300 font-mono">
                      Exclusive 48-hour access
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="free-shipping" />
                    <label htmlFor="free-shipping" className="text-sm text-gray-300 font-mono">
                      Free shipping & insurance
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="certification" />
                    <label htmlFor="certification" className="text-sm text-gray-300 font-mono">
                      Free certification upgrade
                    </label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Regional Targeting */}
          <Card className="bg-gray-900/50 border-cyan-500/30">
            <CardHeader>
              <CardTitle className="text-cyan-400 font-mono text-lg">{">"} REGIONAL TARGETING</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {regions.map((region) => (
                  <Card
                    key={region.id}
                    className={`cursor-pointer transition-all ${
                      selectedRegions.includes(region.id)
                        ? "bg-cyan-500/20 border-cyan-500"
                        : "bg-gray-800/50 border-gray-700 hover:border-cyan-500/50"
                    }`}
                    onClick={() => toggleRegion(region.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-cyan-400" />
                          <h4 className="font-medium text-white font-mono text-sm">{region.name}</h4>
                        </div>
                        {selectedRegions.includes(region.id) && (
                          <div className="w-5 h-5 bg-cyan-500 rounded-full flex items-center justify-center">
                            <Plus className="h-3 w-3 text-white" />
                          </div>
                        )}
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs font-mono">
                          <span className="text-gray-400">Jewelers:</span>
                          <span className="text-white">{region.jewelers}</span>
                        </div>
                        <div className="flex justify-between text-xs font-mono">
                          <span className="text-gray-400">Excitement:</span>
                          <div className="flex items-center">
                            <Zap className="h-3 w-3 text-yellow-400 mr-1" />
                            <span className="text-yellow-400">{region.excitement}%</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {selectedRegions.length > 0 && (
                <div className="mt-4 p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="text-cyan-400 font-mono text-sm">
                      {selectedRegions.length} region{selectedRegions.length > 1 ? "s" : ""} selected
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedRegions([])}
                      className="text-gray-400 hover:text-white"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          {/* Campaign Impact */}
          <Card className="bg-gray-900/50 border-cyan-500/30">
            <CardHeader>
              <CardTitle className="text-cyan-400 font-mono text-lg">{">"} CAMPAIGN IMPACT</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white font-mono">{getTotalJewelers()}</div>
                    <div className="text-xs text-gray-400 font-mono">JEWELERS REACHED</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center">
                      <Zap className="h-5 w-5 text-yellow-400 mr-1" />
                      <div className="text-2xl font-bold text-yellow-400 font-mono">{getAverageExcitement()}%</div>
                    </div>
                    <div className="text-xs text-gray-400 font-mono">AVG EXCITEMENT</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-mono">
                    <span className="text-gray-400">Expected Views:</span>
                    <span className="text-blue-400">{Math.round(getTotalJewelers() * 0.75)}</span>
                  </div>
                  <div className="flex justify-between text-sm font-mono">
                    <span className="text-gray-400">Expected Interest:</span>
                    <span className="text-purple-400">{Math.round(getTotalJewelers() * 0.15)}</span>
                  </div>
                  <div className="flex justify-between text-sm font-mono">
                    <span className="text-gray-400">Potential Deals:</span>
                    <span className="text-green-400">{Math.round(getTotalJewelers() * 0.05)}</span>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-lg p-3">
                  <div className="text-xs text-gray-400 font-mono mb-2">EXCITEMENT FORECAST</div>
                  <div className="h-16 bg-gray-900 rounded flex items-center justify-center">
                    <div className="text-gray-500 font-mono text-xs">Excitement visualization</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Privacy & Analytics */}
          <Card className="bg-gray-900/50 border-cyan-500/30">
            <CardHeader>
              <CardTitle className="text-cyan-400 font-mono text-lg">{">"} PRIVACY & ANALYTICS</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                  <div className="flex items-center mb-2">
                    <Eye className="h-4 w-4 text-blue-400 mr-2" />
                    <div className="text-sm font-medium text-blue-400 font-mono">PRIVACY PROTECTED</div>
                  </div>
                  <div className="text-xs text-gray-400 font-mono">
                    Jeweler contact details remain private. You'll see engagement metrics and regional data only.
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-medium text-gray-300 font-mono">You will see:</div>
                  <div className="space-y-1 text-xs text-gray-400 font-mono">
                    <div>• Number of jewelers reached per region</div>
                    <div>• View and interest rates</div>
                    <div>• Deal initiation requests</div>
                    <div>• Excitement level metrics</div>
                    <div>• Regional performance breakdown</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-medium text-gray-300 font-mono">You will NOT see:</div>
                  <div className="space-y-1 text-xs text-gray-400 font-mono">
                    <div>• Individual jeweler names</div>
                    <div>• Contact information</div>
                    <div>• Specific business details</div>
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
                  <div className="text-sm text-gray-400 font-mono mb-2">JEWELER NOTIFICATION PREVIEW</div>
                  <div className="bg-white rounded-md p-4 text-black">
                    <div className="text-lg font-bold mb-2">{campaignName || "Your Campaign Name"}</div>
                    <div className="text-sm mb-3">
                      Exclusive access to premium certified diamond collection. Limited quantities available with
                      special pricing.
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
                              <span className="font-bold">${diamond.price.toLocaleString()}/ct</span>
                            </div>
                          )
                        })}
                      </div>
                    )}
                    <div className="mt-3 text-xs text-gray-600">
                      Price flexibility: ±{priceFlexibility[0]}% | Volume discount: {volumeDiscount[0]}%
                    </div>
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
            <Button
              variant="outline"
              className="w-full border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 font-mono"
            >
              <BarChart3 className="h-4 w-4 mr-2" />
              SAVE AS DRAFT
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
