import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Diamond, ShoppingCart, Sparkles, TrendingUp } from "lucide-react"

export function PersonalizedRecommendations() {
  return (
    <div className="space-y-6">
      <Card className="bg-gray-900 text-gray-100 border-cyan-500 border">
        <CardHeader>
          <CardTitle className="text-cyan-500 font-mono text-lg">
            &gt; Analyzing Diamond Market... <span className="animate-pulse">_</span>
          </CardTitle>
          <CardDescription className="text-gray-400 font-mono text-sm">
            &gt; Identifying optimal diamonds based on customer data...
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recommendedDiamonds.map((diamond, index) => (
              <Card key={index} className="overflow-hidden bg-gray-800 border border-gray-700">
                <div className="flex">
                  <div className="w-1/3 bg-gray-700 flex items-center justify-center p-4">
                    <Diamond className="h-12 w-12 text-cyan-500 animate-flicker" />
                  </div>
                  <div className="w-2/3 p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold font-mono text-cyan-400">
                          {diamond.shape} {diamond.carat}ct
                        </h3>
                        <p className="text-xs text-gray-500 font-mono">
                          {diamond.color}, {diamond.clarity}
                        </p>
                      </div>
                      <Badge variant="outline" className="border-cyan-500 text-cyan-500 font-mono">
                        {diamond.matchScore}% match
                      </Badge>
                    </div>
                    <div className="mt-2">
                      <div className="flex justify-between text-xs mb-1 text-gray-500 font-mono">
                        <span>&gt; Match confidence</span>
                        <span>{diamond.matchScore}%</span>
                      </div>
                      <div className="w-full bg-gray-600 rounded-full h-1.5 mb-4">
                        <div
                          className="bg-cyan-500 h-1.5 rounded-full"
                          style={{ width: `${diamond.matchScore}%` }}
                        ></div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2 font-mono">&gt; {diamond.reason}</p>
                    <div className="mt-3 flex justify-between items-center">
                      <span className="text-sm font-bold text-green-500 font-mono">
                        $&nbsp;
                        {diamond.price.toLocaleString()}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-cyan-500 text-cyan-500 hover:bg-gray-700 font-mono"
                      >
                        <ShoppingCart className="h-3 w-3 mr-1" />
                        &gt; Source
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gray-900 text-gray-100 border-cyan-500 border">
        <CardHeader>
          <CardTitle className="text-cyan-500 font-mono text-lg">
            &gt; Analyzing Customer Preferences... <span className="animate-pulse">_</span>
          </CardTitle>
          <CardDescription className="text-gray-400 font-mono text-sm">
            &gt; Identifying key trends in customer behavior...
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-cyan-400 font-mono">&gt; Diamond Preferences</h3>
              <div className="space-y-4">
                {diamondPreferences.map((pref, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Sparkles className="h-4 w-4 text-cyan-500 mr-2 animate-flicker" />
                        <span className="font-medium font-mono text-gray-300">&gt; {pref.attribute}</span>
                      </div>
                      <Badge variant="outline" className="border-cyan-500 text-cyan-500 font-mono">
                        {pref.strength}% strength
                      </Badge>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-1.5 mb-4">
                      <div className="bg-cyan-500 h-1.5 rounded-full" style={{ width: `${pref.strength}%` }}></div>
                    </div>
                    <p className="text-sm text-gray-500 font-mono">&gt; {pref.insight}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-cyan-400 font-mono">&gt; Regional Trends</h3>
              <div className="space-y-4">
                {regionalTrends.map((trend, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <TrendingUp className="h-4 w-4 text-cyan-500 mr-2 animate-pulse" />
                        <span className="font-medium font-mono text-gray-300">&gt; {trend.region}</span>
                      </div>
                      <Badge
                        variant={trend.trend > 0 ? "outline" : "secondary"}
                        className={`font-mono ${trend.trend > 0 ? "border-cyan-500 text-cyan-500" : "text-red-500"}`}
                      >
                        {trend.trend > 0 ? `+${trend.trend}%` : `${trend.trend}%`}
                      </Badge>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-1.5 mb-4">
                      <div
                        className="bg-cyan-500 h-1.5 rounded-full"
                        style={{ width: `${trend.trend > 0 ? trend.trend : 100 + trend.trend}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-500 font-mono">&gt; {trend.insight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

const recommendedDiamonds = [
  {
    shape: "Round",
    carat: 1.2,
    color: "F",
    clarity: "VS1",
    cut: "Excellent",
    matchScore: 95,
    price: 12500,
    reason: "High demand in your region with 85% of similar diamonds selling within 14 days",
  },
  {
    shape: "Oval",
    carat: 1.5,
    color: "G",
    clarity: "VS2",
    cut: "Very Good",
    matchScore: 92,
    price: 14800,
    reason: "Trending shape with your customer base, particularly in the 1.25-1.75ct range",
  },
  {
    shape: "Cushion",
    carat: 2.0,
    color: "H",
    clarity: "SI1",
    cut: "Excellent",
    matchScore: 88,
    price: 18500,
    reason: "Growing demand for larger cushion cuts with good value clarity grades",
  },
  {
    shape: "Emerald",
    carat: 1.75,
    color: "D",
    clarity: "VVS2",
    cut: "Excellent",
    matchScore: 86,
    price: 21000,
    reason: "Premium emerald cuts are showing increased interest in your high-end customer segment",
  },
  {
    shape: "Pear",
    carat: 1.3,
    color: "E",
    clarity: "VS1",
    cut: "Very Good",
    matchScore: 84,
    price: 13200,
    reason: "Pear shapes in this size range have shown 32% growth in your market",
  },
  {
    shape: "Princess",
    carat: 1.0,
    color: "F",
    clarity: "VS2",
    cut: "Excellent",
    matchScore: 82,
    price: 8500,
    reason: "Consistent seller in your inventory with good margins and quick turnover",
  },
]

const diamondPreferences = [
  {
    attribute: "Round Brilliant, 1.0-1.5ct",
    strength: 92,
    insight: "Your customers strongly prefer round brilliants in the 1.0-1.5ct range with F-G color and VS clarity",
  },
  {
    attribute: "Oval & Cushion Shapes",
    strength: 78,
    insight: "Growing preference for oval and cushion shapes, especially in larger carat weights (1.5ct+)",
  },
  {
    attribute: "Excellent Cut Grade",
    strength: 85,
    insight: "Your customers prioritize excellent cut grade over color, especially in round and princess cuts",
  },
  {
    attribute: "VS Clarity Over Color",
    strength: 72,
    insight: "Trend toward prioritizing VS clarity over higher color grades for better value",
  },
]

const regionalTrends = [
  {
    region: "North America",
    trend: 28,
    insight: "Strong preference for oval and cushion shapes with excellent cut grades",
  },
  {
    region: "Europe",
    trend: 15,
    insight: "Growing demand for emerald cuts and step-cut diamonds with higher color grades",
  },
  {
    region: "Asia",
    trend: -8,
    insight: "Declining interest in princess cuts, with shift toward round brilliants and pear shapes",
  },
  {
    region: "Middle East",
    trend: 32,
    insight: "Significant growth in demand for larger (2ct+) diamonds with premium specifications",
  },
]
