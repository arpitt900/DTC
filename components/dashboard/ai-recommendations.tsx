import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Diamond, TrendingUp, Zap } from "lucide-react"

export function AiRecommendations() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">AI Recommendations</h2>
          <p className="text-muted-foreground">Personalized insights based on your trading history and market trends</p>
        </div>
        <Badge variant="outline" className="flex items-center gap-1">
          <Zap className="h-3 w-3" />
          <span>AI-Powered</span>
        </Badge>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Recommended Purchases</CardTitle>
            <CardDescription>Diamonds that match your buying patterns</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recommendedPurchases.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="mt-0.5">
                    <Diamond className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                    <div className="flex items-center pt-1">
                      <Badge variant="secondary" className="text-xs">
                        {item.matchScore}% match
                      </Badge>
                      <span className="text-xs text-muted-foreground ml-2">{item.availability}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View All Recommendations
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Market Opportunities</CardTitle>
            <CardDescription>Trending categories in your region</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {marketOpportunities.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">{item.category}</p>
                    <div className="flex items-center text-emerald-600">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      <span className="text-xs font-medium">{item.trend}</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">{item.insight}</p>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-600 rounded-full" style={{ width: `${item.confidence}%` }} />
                  </div>
                  <p className="text-xs text-muted-foreground text-right">{item.confidence}% confidence</p>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              Explore Market Trends
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Inventory Optimization</CardTitle>
            <CardDescription>Suggestions to improve your inventory</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {inventoryOptimization.map((item, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">{item.title}</p>
                    <Badge
                      variant={
                        item.impact === "High" ? "destructive" : item.impact === "Medium" ? "default" : "outline"
                      }
                      className="text-xs"
                    >
                      {item.impact} impact
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View Detailed Analysis
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

const recommendedPurchases = [
  {
    name: "Round Brilliant, 1.2ct, VS1, F",
    description: "GIA certified, excellent cut, no fluorescence",
    matchScore: 95,
    availability: "12 available",
  },
  {
    name: "Oval, 1.5ct, VS2, G",
    description: "GIA certified, very good cut, faint fluorescence",
    matchScore: 87,
    availability: "5 available",
  },
  {
    name: "Cushion, 2.1ct, SI1, H",
    description: "Non-certified, good cut, medium fluorescence",
    matchScore: 82,
    availability: "3 available",
  },
]

const marketOpportunities = [
  {
    category: "Lab-grown diamonds, 1-2ct",
    trend: "+28% demand",
    insight: "Growing popularity in urban markets for engagement rings",
    confidence: 92,
  },
  {
    category: "Natural fancy colored diamonds",
    trend: "+15% price",
    insight: "Limited supply driving premium prices in luxury segment",
    confidence: 85,
  },
  {
    category: "Emerald cut, VS clarity, 2-3ct",
    trend: "+18% searches",
    insight: "Trending in your region for high-end jewelry pieces",
    confidence: 78,
  },
]

const inventoryOptimization = [
  {
    title: "Reduce Princess Cut inventory",
    description: "Current stock exceeds 6-month demand projection by 35%",
    impact: "High",
  },
  {
    title: "Increase Oval 1-1.5ct, VS clarity",
    description: "Current stock meets only 40% of projected demand",
    impact: "Medium",
  },
  {
    title: "Diversify color range for Round Brilliants",
    description: "Current inventory concentrated in G-H, market trending toward D-F",
    impact: "Medium",
  },
  {
    title: "Consider lab-grown diamond offerings",
    description: "Growing segment with 28% YoY growth in your region",
    impact: "Low",
  },
]
