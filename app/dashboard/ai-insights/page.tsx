import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PersonalizedRecommendations } from "@/components/dashboard/ai-insights/personalized-recommendations"
import { MarketTrendAnalysis } from "@/components/dashboard/ai-insights/market-trend-analysis"
import { InventoryOptimization } from "@/components/dashboard/ai-insights/inventory-optimization"
import { PricingStrategy } from "@/components/dashboard/ai-insights/pricing-strategy"
import { BrainCog, Download, Zap } from "lucide-react"

export default function AiInsightsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">AI Insights</h1>
          <p className="text-muted-foreground">AI-powered analytics and recommendations for your diamond business</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Zap className="h-3 w-3" />
            <span>AI-Powered</span>
          </Badge>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Insights
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center">
                <BrainCog className="h-5 w-5 mr-2 text-emerald-600" />
                AI Insights Dashboard
              </CardTitle>
              <CardDescription>
                Personalized insights based on your inventory, market trends, and customer behavior
              </CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <Select defaultValue="global">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="global">Global</SelectItem>
                  <SelectItem value="north-america">North America</SelectItem>
                  <SelectItem value="europe">Europe</SelectItem>
                  <SelectItem value="asia">Asia</SelectItem>
                  <SelectItem value="middle-east">Middle East</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="bg-emerald-50">
              <CardContent className="p-4">
                <div className="flex flex-col space-y-2">
                  <span className="text-xs font-medium text-emerald-600">Recommendation Accuracy</span>
                  <span className="text-2xl font-bold">94%</span>
                  <span className="text-xs text-muted-foreground">Based on purchase conversion</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-blue-50">
              <CardContent className="p-4">
                <div className="flex flex-col space-y-2">
                  <span className="text-xs font-medium text-blue-600">Market Trend Accuracy</span>
                  <span className="text-2xl font-bold">87%</span>
                  <span className="text-xs text-muted-foreground">Based on price movement predictions</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-purple-50">
              <CardContent className="p-4">
                <div className="flex flex-col space-y-2">
                  <span className="text-xs font-medium text-purple-600">Inventory Optimization</span>
                  <span className="text-2xl font-bold">+18%</span>
                  <span className="text-xs text-muted-foreground">Improved turnover rate</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-amber-50">
              <CardContent className="p-4">
                <div className="flex flex-col space-y-2">
                  <span className="text-xs font-medium text-amber-600">Pricing Strategy</span>
                  <span className="text-2xl font-bold">+12%</span>
                  <span className="text-xs text-muted-foreground">Profit margin improvement</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="recommendations">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="recommendations">Personalized Recommendations</TabsTrigger>
          <TabsTrigger value="market-trends">Market Trend Analysis</TabsTrigger>
          <TabsTrigger value="inventory">Inventory Optimization</TabsTrigger>
          <TabsTrigger value="pricing">Pricing Strategy</TabsTrigger>
        </TabsList>
        <TabsContent value="recommendations" className="pt-4">
          <PersonalizedRecommendations />
        </TabsContent>
        <TabsContent value="market-trends" className="pt-4">
          <MarketTrendAnalysis />
        </TabsContent>
        <TabsContent value="inventory" className="pt-4">
          <InventoryOptimization />
        </TabsContent>
        <TabsContent value="pricing" className="pt-4">
          <PricingStrategy />
        </TabsContent>
      </Tabs>
    </div>
  )
}
