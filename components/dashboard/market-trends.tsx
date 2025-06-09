import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, TrendingDown, TrendingUp } from "lucide-react"

export function MarketTrends() {
  return (
    <div className="space-y-6 font-mono text-cyan-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Market Trends</h2>
          <p className="text-muted-foreground">Real-time insights into diamond market trends and forecasts</p>
        </div>
      </div>

      <Tabs defaultValue="price-trends">
        <TabsList className="grid w-full grid-cols-4 bg-gray-900 border border-gray-700 rounded-md">
          <TabsTrigger
            value="price-trends"
            className="data-[state=active]:bg-gray-800 data-[state=active]:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors duration-200"
          >
            Price Trends
          </TabsTrigger>
          <TabsTrigger
            value="demand-forecast"
            className="data-[state=active]:bg-gray-800 data-[state=active]:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors duration-200"
          >
            Demand Forecast
          </TabsTrigger>
          <TabsTrigger
            value="regional-insights"
            className="data-[state=active]:bg-gray-800 data-[state=active]:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors duration-200"
          >
            Regional Insights
          </TabsTrigger>
          <TabsTrigger
            value="lab-grown"
            className="data-[state=active]:bg-gray-800 data-[state=active]:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors duration-200"
          >
            Lab-Grown Market
          </TabsTrigger>
        </TabsList>

        <TabsContent value="price-trends" className="space-y-4 pt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {priceTrends.map((trend, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-700 rounded-md shadow-md hover:border-cyan-500 transition-colors duration-200"
              >
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-base font-bold">{trend.category}</div>
                    <div className={`flex items-center ${trend.change > 0 ? "text-emerald-600" : "text-red-600"}`}>
                      {trend.change > 0 ? (
                        <TrendingUp className="h-4 w-4 mr-1" />
                      ) : (
                        <TrendingDown className="h-4 w-4 mr-1" />
                      )}
                      <span className="text-sm font-medium">
                        {trend.change > 0 ? "+" : ""}
                        {trend.change}%
                      </span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">{trend.period}</div>
                </div>
                <div className="p-4">
                  <div className="h-[120px] w-full bg-gray-800 rounded-md flex items-center justify-center">
                    <span className="text-xs text-gray-500">Price trend chart</span>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Current Price:</span>
                      <span className="font-medium">{trend.currentPrice}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Forecast (30d):</span>
                      <span className="font-medium">{trend.forecast}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full border border-cyan-500 hover:bg-cyan-900">
            View Detailed Price Analysis
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </TabsContent>

        <TabsContent value="demand-forecast" className="pt-4">
          <div className="bg-gray-900 border border-gray-700 rounded-md shadow-md">
            <div className="p-4">
              <div className="text-lg font-bold mb-2">Global Demand Forecast</div>
              <div className="text-sm text-gray-500">
                Projected demand for the next 6 months based on market data and AI analysis
              </div>
            </div>
            <div className="p-4">
              <div className="h-[400px] w-full bg-gray-800 rounded-md flex items-center justify-center">
                <span className="text-muted-foreground">Demand forecast chart</span>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="regional-insights" className="pt-4">
          <div className="bg-gray-900 border border-gray-700 rounded-md shadow-md">
            <div className="p-4">
              <div className="text-lg font-bold mb-2">Regional Market Insights</div>
              <div className="text-sm text-gray-500">Diamond preferences and trends by geographic region</div>
            </div>
            <div className="p-4">
              <div className="h-[400px] w-full bg-gray-800 rounded-md flex items-center justify-center">
                <span className="text-muted-foreground">Regional insights map</span>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="lab-grown" className="pt-4">
          <div className="bg-gray-900 border border-gray-700 rounded-md shadow-md">
            <div className="p-4">
              <div className="text-lg font-bold mb-2">Lab-Grown Diamond Market</div>
              <div className="text-sm text-gray-500">Trends and forecasts for the lab-grown diamond segment</div>
            </div>
            <div className="p-4">
              <div className="h-[400px] w-full bg-gray-800 rounded-md flex items-center justify-center">
                <span className="text-muted-foreground">Lab-grown market analysis</span>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

const priceTrends = [
  {
    category: "Round Brilliant, 1.0-1.5ct, VS",
    change: 3.2,
    period: "Last 30 days",
    currentPrice: "$5,200 - $7,800 per carat",
    forecast: "$5,400 - $8,100 per carat",
  },
  {
    category: "Oval, 1.5-2.0ct, VS-SI",
    change: 1.8,
    period: "Last 30 days",
    currentPrice: "$4,800 - $6,500 per carat",
    forecast: "$4,900 - $6,700 per carat",
  },
  {
    category: "Princess Cut, 1.0-2.0ct, SI",
    change: -0.7,
    period: "Last 30 days",
    currentPrice: "$3,900 - $5,200 per carat",
    forecast: "$3,800 - $5,100 per carat",
  },
  {
    category: "Cushion, 2.0-3.0ct, VS-SI",
    change: 2.5,
    period: "Last 30 days",
    currentPrice: "$4,200 - $6,800 per carat",
    forecast: "$4,300 - $7,000 per carat",
  },
  {
    category: "Emerald Cut, 1.5-2.5ct, VVS-VS",
    change: 4.1,
    period: "Last 30 days",
    currentPrice: "$5,500 - $8,200 per carat",
    forecast: "$5,800 - $8,600 per carat",
  },
  {
    category: "Lab-Grown, Round, 1.0-2.0ct, VS",
    change: -2.3,
    period: "Last 30 days",
    currentPrice: "$1,800 - $2,500 per carat",
    forecast: "$1,700 - $2,400 per carat",
  },
]
