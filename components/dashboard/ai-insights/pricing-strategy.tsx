import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { DollarSign, Percent, TrendingUp } from "lucide-react"

export function PricingStrategy() {
  return (
    <div className="space-y-6 font-mono text-cyan-500">
      <div className="bg-gray-900 border border-gray-700 rounded-md shadow-lg">
        <div className="bg-gray-800 p-4 rounded-t-md flex items-center justify-between">
          <span className="text-sm">&gt; Pricing Optimization Algorithm v3.2</span>
          <span className="text-xs animate-pulse">[RUNNING]</span>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">&gt; Current Pricing Performance</h3>
              <div className="h-[200px] bg-gray-700 rounded-md flex items-center justify-center mb-4 text-sm">
                <pre className="text-green-500">
                  {`
                  Data Visualization:
                  ----------------------
                  Loading... ██████████ 100%
                  `}
                </pre>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span>&gt; Average Profit Margin:</span>
                  <Badge variant="outline" className="text-cyan-500">
                    24.8%
                  </Badge>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>&gt; Price Competitiveness:</span>
                  <Badge variant="outline" className="text-amber-500">
                    Medium
                  </Badge>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>&gt; Price Elasticity:</span>
                  <Badge variant="outline" className="text-cyan-500">
                    High
                  </Badge>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">&gt; Pricing Optimization Potential</h3>
              <div className="bg-gray-700 rounded-md p-6 text-center mb-4">
                <div className="text-4xl font-bold text-emerald-500 mb-2">+12.4%</div>
                <div className="text-sm text-gray-400">&gt; potential profit increase</div>
                <Progress value={62} className="h-2 mt-4 bg-gray-600" />
                <div className="text-xs text-gray-400 mt-2">&gt; 62% of maximum potential</div>
                <div className="mt-4">
                  <span className="text-xs text-green-500 animate-pulse">[OPTIMIZED]</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span>&gt; Revenue Impact:</span>
                  <Badge variant="outline" className="text-emerald-500">
                    +8.2%
                  </Badge>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>&gt; Turnover Impact:</span>
                  <Badge variant="outline" className="text-emerald-500">
                    +15.5%
                  </Badge>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>&gt; Implementation Difficulty:</span>
                  <Badge variant="outline" className="text-cyan-500">
                    Medium
                  </Badge>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 border-t border-gray-700 pt-4">
            <p className="text-xs text-gray-400">
              &gt; Confidence Level: <span className="text-green-500">95%</span> | Last Updated: 2024-08-15 14:30:00
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 border border-gray-700 rounded-md shadow-lg">
        <div className="bg-gray-800 p-4 rounded-t-md flex items-center justify-between">
          <span className="text-sm">&gt; Category-Specific Recommendations</span>
          <span className="text-xs animate-pulse">[ANALYZING]</span>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {pricingRecommendations.map((rec, index) => (
                <div key={index} className="bg-gray-800 rounded-md p-4 border border-gray-700">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium">&gt; {rec.category}</h4>
                    <Badge variant="outline" className={rec.adjustment > 0 ? "text-emerald-500" : "text-red-500"}>
                      {rec.adjustment > 0 ? "+" : ""}
                      {rec.adjustment}%
                    </Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">&gt; Current:</span>
                      <span className="font-medium">${rec.currentPrice.toLocaleString()}/ct</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">&gt; Recommended:</span>
                      <span className="font-medium">${rec.recommendedPrice.toLocaleString()}/ct</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">&gt; Market Avg:</span>
                      <span className="font-medium">${rec.marketAverage.toLocaleString()}/ct</span>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-700 text-xs text-gray-400">&gt; {rec.reasoning}</div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">&gt; Dynamic Pricing Strategies</h3>
              <div className="space-y-4">
                {dynamicStrategies.map((strategy, index) => (
                  <div key={index} className="border rounded-md p-4 border-gray-700 bg-gray-800">
                    <div className="flex items-start">
                      <div className="mt-0.5 mr-3">
                        {strategy.icon === "percent" && <Percent className="h-5 w-5 text-emerald-500" />}
                        {strategy.icon === "trending" && <TrendingUp className="h-5 w-5 text-emerald-500" />}
                        {strategy.icon === "dollar" && <DollarSign className="h-5 w-5 text-emerald-500" />}
                      </div>
                      <div>
                        <h4 className="font-medium">&gt; {strategy.name}</h4>
                        <p className="text-sm text-gray-400 mt-1">&gt; {strategy.description}</p>
                        <div className="mt-3 flex items-center">
                          <Badge variant="outline" className="text-emerald-500 mr-2">
                            +{strategy.potentialImpact}% profit
                          </Badge>
                          <span className="text-xs text-gray-400">{strategy.implementationEffort} implementation</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const pricingRecommendations = [
  {
    category: "Round, 1.0-1.5ct, VS",
    adjustment: 5.2,
    currentPrice: 7500,
    recommendedPrice: 7890,
    marketAverage: 8100,
    reasoning:
      "Current pricing is below market average with strong demand. Elasticity analysis shows minimal impact on sales volume with this increase.",
  },
  {
    category: "Oval, 1.5-2.0ct, VS-SI",
    adjustment: 8.5,
    currentPrice: 6800,
    recommendedPrice: 7378,
    marketAverage: 7500,
    reasoning:
      "Trending shape with limited supply. Current pricing significantly below market with high demand growth.",
  },
  {
    category: "Princess, 1.0-2.0ct, SI",
    adjustment: -3.8,
    currentPrice: 5200,
    recommendedPrice: 5002,
    marketAverage: 4900,
    reasoning:
      "Declining demand with above-market pricing. Reduction will improve turnover rate and maintain competitive position.",
  },
  {
    category: "Cushion, 2.0-3.0ct, VS-SI",
    adjustment: 4.2,
    currentPrice: 7200,
    recommendedPrice: 7502,
    marketAverage: 7600,
    reasoning:
      "Growing popularity with good margins. Current pricing slightly below market with room for moderate increase.",
  },
  {
    category: "Emerald, 1.5-2.5ct, VVS-VS",
    adjustment: 6.8,
    currentPrice: 8500,
    recommendedPrice: 9078,
    marketAverage: 9200,
    reasoning:
      "Premium category with strong demand in luxury segment. Current pricing below market with minimal price sensitivity.",
  },
  {
    category: "Lab-Grown, Round, 1.0-2.0ct",
    adjustment: -5.5,
    currentPrice: 2200,
    recommendedPrice: 2079,
    marketAverage: 2000,
    reasoning:
      "Highly competitive market with price sensitivity. Reduction will improve volume and market share in growing segment.",
  },
]

const dynamicStrategies = [
  {
    name: "Seasonal Pricing Adjustments",
    description:
      "Implement automated seasonal pricing adjustments based on historical demand patterns, with premium pricing during peak seasons (Nov-Feb, May-Jun) and competitive pricing during slower periods.",
    potentialImpact: 8.5,
    implementationEffort: "Medium",
    icon: "percent",
  },
  {
    name: "Inventory Age-Based Pricing",
    description:
      "Implement automated price adjustments based on inventory age, with gradual reductions for items in stock over 90, 120, and 180 days to optimize turnover while maintaining margins on fresh inventory.",
    potentialImpact: 6.2,
    implementationEffort: "Low",
    icon: "trending",
  },
  {
    name: "Bundle Pricing Strategy",
    description:
      "Create strategic bundle pricing for complementary items (e.g., matching earrings and pendant, engagement ring and wedding band) with optimized discounts to increase average order value.",
    potentialImpact: 12.8,
    implementationEffort: "Medium",
    icon: "dollar",
  },
]
