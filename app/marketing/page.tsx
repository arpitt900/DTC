"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, Target, Users, Building, Sparkles, TrendingUp, MapPin, Eye, BarChart3, Zap } from "lucide-react"

export default function MarketingPage() {
  const [userType, setUserType] = useState<"jeweler" | "trader">("jeweler")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-cyan-400 font-mono">AI MARKETING ENGINE</h1>
          <p className="text-gray-400 font-mono">Intelligent targeting and retargeting for diamond professionals</p>
        </div>
        <Badge variant="outline" className="flex items-center gap-1 border-cyan-500 text-cyan-400 font-mono">
          <Brain className="h-3 w-3 animate-pulse" />
          <span>NEURAL MARKETING v2.8</span>
        </Badge>
      </div>

      {/* User Type Selection */}
      <Card className="bg-gray-900/50 border-cyan-500/30">
        <CardHeader>
          <CardTitle className="text-cyan-400 font-mono text-lg">{">"} SELECT MARKETING PROFILE</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button
              variant={userType === "jeweler" ? "default" : "outline"}
              className={`h-32 flex flex-col items-center justify-center px-6 ${
                userType === "jeweler"
                  ? "bg-gradient-to-r from-cyan-600 to-blue-600"
                  : "border-cyan-500/30 hover:border-cyan-400 text-gray-400"
              }`}
              onClick={() => setUserType("jeweler")}
            >
              <Sparkles className={`h-12 w-12 mb-3 ${userType === "jeweler" ? "text-white" : "text-cyan-400"}`} />
              <div className="text-center">
                <div
                  className={`text-2xl font-bold font-mono ${userType === "jeweler" ? "text-white" : "text-cyan-400"}`}
                >
                  JEWELER
                </div>
                <div className="text-sm font-mono text-gray-300 mt-1">Target retail clients with custom markups</div>
              </div>
            </Button>

            <Button
              variant={userType === "trader" ? "default" : "outline"}
              className={`h-32 flex flex-col items-center justify-center px-6 ${
                userType === "trader"
                  ? "bg-gradient-to-r from-cyan-600 to-blue-600"
                  : "border-cyan-500/30 hover:border-cyan-400 text-gray-400"
              }`}
              onClick={() => setUserType("trader")}
            >
              <Building className={`h-12 w-12 mb-3 ${userType === "trader" ? "text-white" : "text-cyan-400"}`} />
              <div className="text-center">
                <div
                  className={`text-2xl font-bold font-mono ${userType === "trader" ? "text-white" : "text-cyan-400"}`}
                >
                  TRADER
                </div>
                <div className="text-sm font-mono text-gray-300 mt-1">Target jewelers by location and preferences</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Marketing Interface */}
      <Tabs defaultValue="campaigns" className="space-y-6">
        <TabsList className="bg-gray-900 border border-cyan-500/30 p-0">
          <TabsTrigger
            value="campaigns"
            className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 rounded-none border-r border-cyan-500/30 px-6 py-3 font-mono"
          >
            CAMPAIGNS
          </TabsTrigger>
          <TabsTrigger
            value="create"
            className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 rounded-none border-r border-cyan-500/30 px-6 py-3 font-mono"
          >
            CREATE
          </TabsTrigger>
          <TabsTrigger
            value="analytics"
            className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 rounded-none border-r border-cyan-500/30 px-6 py-3 font-mono"
          >
            ANALYTICS
          </TabsTrigger>
          <TabsTrigger
            value="audience"
            className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 rounded-none px-6 py-3 font-mono"
          >
            AUDIENCE
          </TabsTrigger>
        </TabsList>

        {/* Campaigns Tab */}
        <TabsContent value="campaigns">
          {userType === "jeweler" ? <JewelerCampaigns /> : <TraderCampaigns />}
        </TabsContent>

        {/* Create Tab */}
        <TabsContent value="create">
          {userType === "jeweler" ? <JewelerCampaignCreator /> : <TraderCampaignCreator />}
        </TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="analytics">
          {userType === "jeweler" ? <JewelerAnalytics /> : <TraderAnalytics />}
        </TabsContent>

        {/* Audience Tab */}
        <TabsContent value="audience">{userType === "jeweler" ? <JewelerAudience /> : <TraderAudience />}</TabsContent>
      </Tabs>
    </div>
  )
}

// Jeweler Components
function JewelerCampaigns() {
  const campaigns = [
    {
      id: 1,
      name: "Valentine's Day Engagement Rings",
      status: "Active",
      audience: "Engaged Couples (25-35)",
      sent: 1247,
      opened: 623,
      clicked: 89,
      converted: 12,
      revenue: "$47,500",
    },
    {
      id: 2,
      name: "Anniversary Diamond Earrings",
      status: "Active",
      audience: "Married Couples (35-50)",
      sent: 892,
      opened: 445,
      clicked: 67,
      converted: 8,
      revenue: "$28,900",
    },
    {
      id: 3,
      name: "Mother's Day Pendants",
      status: "Scheduled",
      audience: "Families with Children",
      sent: 0,
      opened: 0,
      clicked: 0,
      converted: 0,
      revenue: "$0",
    },
  ]

  return (
    <Card className="bg-gray-900/50 border-cyan-500/30">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-cyan-400 font-mono text-lg">{">"} JEWELER CAMPAIGNS</CardTitle>
        <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 font-mono">
          <Target className="h-4 w-4 mr-2" />
          NEW CAMPAIGN
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {campaigns.map((campaign) => (
            <Card key={campaign.id} className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white font-mono">{campaign.name}</h3>
                    <div className="flex items-center mt-1">
                      <Badge
                        className={`font-mono text-xs mr-2 ${
                          campaign.status === "Active"
                            ? "bg-green-500/20 text-green-400 border-green-500/50"
                            : campaign.status === "Scheduled"
                              ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/50"
                              : "bg-gray-500/20 text-gray-400 border-gray-500/50"
                        }`}
                      >
                        {campaign.status}
                      </Badge>
                      <div className="flex items-center text-gray-400 text-sm font-mono">
                        <Users className="h-3 w-3 mr-1" />
                        {campaign.audience}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-400 font-mono">{campaign.revenue}</div>
                    <div className="text-xs text-gray-400 font-mono">Total Revenue</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-white font-mono">{campaign.sent.toLocaleString()}</div>
                    <div className="text-xs text-gray-400 font-mono">SENT</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-blue-400 font-mono">{campaign.opened.toLocaleString()}</div>
                    <div className="text-xs text-gray-400 font-mono">OPENED</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-purple-400 font-mono">{campaign.clicked}</div>
                    <div className="text-xs text-gray-400 font-mono">CLICKED</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-green-400 font-mono">{campaign.converted}</div>
                    <div className="text-xs text-gray-400 font-mono">CONVERTED</div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700">
                  <div className="text-sm text-gray-400 font-mono">
                    Open Rate: {((campaign.opened / campaign.sent) * 100).toFixed(1)}% | Click Rate:{" "}
                    {((campaign.clicked / campaign.opened) * 100).toFixed(1)}%
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 font-mono"
                    >
                      <Eye className="h-3 w-3 mr-1" />
                      VIEW
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 font-mono"
                    >
                      <BarChart3 className="h-3 w-3 mr-1" />
                      ANALYZE
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function JewelerCampaignCreator() {
  return (
    <Card className="bg-gray-900/50 border-cyan-500/30">
      <CardHeader>
        <CardTitle className="text-cyan-400 font-mono text-lg">{">"} CREATE JEWELER CAMPAIGN</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center py-12">
          <Target className="h-16 w-16 text-gray-700 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-400 font-mono">JEWELER CAMPAIGN CREATOR</h3>
          <p className="text-gray-500 font-mono mt-2">Create targeted campaigns for your retail clients</p>
        </div>
      </CardContent>
    </Card>
  )
}

function JewelerAnalytics() {
  return (
    <Card className="bg-gray-900/50 border-cyan-500/30">
      <CardHeader>
        <CardTitle className="text-cyan-400 font-mono text-lg">{">"} JEWELER ANALYTICS</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center py-12">
          <BarChart3 className="h-16 w-16 text-gray-700 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-400 font-mono">CAMPAIGN ANALYTICS</h3>
          <p className="text-gray-500 font-mono mt-2">Detailed performance metrics for your campaigns</p>
        </div>
      </CardContent>
    </Card>
  )
}

function JewelerAudience() {
  return (
    <Card className="bg-gray-900/50 border-cyan-500/30">
      <CardHeader>
        <CardTitle className="text-cyan-400 font-mono text-lg">{">"} RETAIL CLIENT AUDIENCE</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center py-12">
          <Users className="h-16 w-16 text-gray-700 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-400 font-mono">AUDIENCE MANAGEMENT</h3>
          <p className="text-gray-500 font-mono mt-2">Manage and segment your retail client database</p>
        </div>
      </CardContent>
    </Card>
  )
}

// Trader Components
function TraderCampaigns() {
  const campaigns = [
    {
      id: 1,
      name: "Premium Round Brilliants - North America",
      status: "Active",
      targetRegion: "North America",
      jewelersSent: 247,
      viewed: 156,
      interested: 23,
      deals: 8,
      excitement: 87,
    },
    {
      id: 2,
      name: "Oval Diamond Collection - Europe",
      status: "Active",
      targetRegion: "Europe",
      jewelersSent: 189,
      viewed: 134,
      interested: 31,
      deals: 12,
      excitement: 92,
    },
    {
      id: 3,
      name: "Lab-Grown Specials - Asia",
      status: "Scheduled",
      targetRegion: "Asia",
      jewelersSent: 0,
      viewed: 0,
      interested: 0,
      deals: 0,
      excitement: 0,
    },
  ]

  return (
    <Card className="bg-gray-900/50 border-cyan-500/30">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-cyan-400 font-mono text-lg">{">"} TRADER CAMPAIGNS</CardTitle>
        <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 font-mono">
          <Target className="h-4 w-4 mr-2" />
          NEW CAMPAIGN
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {campaigns.map((campaign) => (
            <Card key={campaign.id} className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white font-mono">{campaign.name}</h3>
                    <div className="flex items-center mt-1">
                      <Badge
                        className={`font-mono text-xs mr-2 ${
                          campaign.status === "Active"
                            ? "bg-green-500/20 text-green-400 border-green-500/50"
                            : campaign.status === "Scheduled"
                              ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/50"
                              : "bg-gray-500/20 text-gray-400 border-gray-500/50"
                        }`}
                      >
                        {campaign.status}
                      </Badge>
                      <div className="flex items-center text-gray-400 text-sm font-mono">
                        <MapPin className="h-3 w-3 mr-1" />
                        {campaign.targetRegion}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center">
                      <Zap className="h-5 w-5 text-yellow-400 mr-1" />
                      <div className="text-2xl font-bold text-yellow-400 font-mono">{campaign.excitement}%</div>
                    </div>
                    <div className="text-xs text-gray-400 font-mono">Excitement Level</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-white font-mono">{campaign.jewelersSent}</div>
                    <div className="text-xs text-gray-400 font-mono">JEWELERS REACHED</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-blue-400 font-mono">{campaign.viewed}</div>
                    <div className="text-xs text-gray-400 font-mono">VIEWED</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-purple-400 font-mono">{campaign.interested}</div>
                    <div className="text-xs text-gray-400 font-mono">INTERESTED</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-green-400 font-mono">{campaign.deals}</div>
                    <div className="text-xs text-gray-400 font-mono">DEALS INITIATED</div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700">
                  <div className="text-sm text-gray-400 font-mono">
                    View Rate: {((campaign.viewed / campaign.jewelersSent) * 100).toFixed(1)}% | Interest Rate:{" "}
                    {((campaign.interested / campaign.viewed) * 100).toFixed(1)}%
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 font-mono"
                    >
                      <Eye className="h-3 w-3 mr-1" />
                      VIEW
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 font-mono"
                    >
                      <MapPin className="h-3 w-3 mr-1" />
                      REGIONS
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function TraderCampaignCreator() {
  return (
    <Card className="bg-gray-900/50 border-cyan-500/30">
      <CardHeader>
        <CardTitle className="text-cyan-400 font-mono text-lg">{">"} CREATE TRADER CAMPAIGN</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center py-12">
          <Building className="h-16 w-16 text-gray-700 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-400 font-mono">TRADER CAMPAIGN CREATOR</h3>
          <p className="text-gray-500 font-mono mt-2">Target jewelers by location and preferences</p>
        </div>
      </CardContent>
    </Card>
  )
}

function TraderAnalytics() {
  const regionData = [
    { region: "North America", jewelers: 247, excitement: 87, deals: 23 },
    { region: "Europe", jewelers: 189, excitement: 92, deals: 31 },
    { region: "Asia", jewelers: 156, excitement: 78, deals: 18 },
    { region: "Middle East", jewelers: 89, excitement: 95, deals: 12 },
  ]

  return (
    <Card className="bg-gray-900/50 border-cyan-500/30">
      <CardHeader>
        <CardTitle className="text-cyan-400 font-mono text-lg">{">"} TRADER ANALYTICS</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-mono text-sm text-gray-400">TOTAL JEWELERS</div>
                  <Building className="h-5 w-5 text-cyan-400" />
                </div>
                <div className="text-2xl font-bold text-white font-mono">681</div>
                <div className="text-xs text-cyan-400 font-mono mt-1">Across all regions</div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-mono text-sm text-gray-400">AVG EXCITEMENT</div>
                  <Zap className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="text-2xl font-bold text-white font-mono">88%</div>
                <div className="text-xs text-yellow-400 font-mono mt-1">+12% from last month</div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-mono text-sm text-gray-400">ACTIVE DEALS</div>
                  <TrendingUp className="h-5 w-5 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-white font-mono">84</div>
                <div className="text-xs text-green-400 font-mono mt-1">+28% this week</div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-mono text-sm text-gray-400">TOP REGION</div>
                  <MapPin className="h-5 w-5 text-purple-400" />
                </div>
                <div className="text-xl font-bold text-white font-mono">MIDDLE EAST</div>
                <div className="text-xs text-purple-400 font-mono mt-1">95% excitement</div>
              </CardContent>
            </Card>
          </div>

          {/* Regional Breakdown */}
          <div>
            <h3 className="text-lg font-bold text-cyan-400 font-mono mb-4">{">"} REGIONAL PERFORMANCE</h3>
            <div className="space-y-4">
              {regionData.map((region, index) => (
                <Card key={index} className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 text-cyan-400 mr-2" />
                        <h4 className="text-lg font-bold text-white font-mono">{region.region}</h4>
                      </div>
                      <div className="flex items-center">
                        <Zap className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-yellow-400 font-mono font-bold">{region.excitement}%</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-xl font-bold text-white font-mono">{region.jewelers}</div>
                        <div className="text-xs text-gray-400 font-mono">JEWELERS REACHED</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-green-400 font-mono">{region.deals}</div>
                        <div className="text-xs text-gray-400 font-mono">DEALS INITIATED</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-purple-400 font-mono">
                          {((region.deals / region.jewelers) * 100).toFixed(1)}%
                        </div>
                        <div className="text-xs text-gray-400 font-mono">CONVERSION RATE</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Excitement Heatmap */}
          <div>
            <h3 className="text-lg font-bold text-cyan-400 font-mono mb-4">{">"} EXCITEMENT HEATMAP</h3>
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="h-[300px] bg-gray-900 rounded-lg flex items-center justify-center">
                  <div className="text-gray-500 font-mono">Regional excitement visualization</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function TraderAudience() {
  return (
    <Card className="bg-gray-900/50 border-cyan-500/30">
      <CardHeader>
        <CardTitle className="text-cyan-400 font-mono text-lg">{">"} JEWELER NETWORK</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center py-12">
          <Building className="h-16 w-16 text-gray-700 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-400 font-mono">JEWELER TARGETING</h3>
          <p className="text-gray-500 font-mono mt-2">Manage your jeweler network and targeting preferences</p>
        </div>
      </CardContent>
    </Card>
  )
}
