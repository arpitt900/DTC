import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { DiamondSearchResults } from "@/components/dashboard/diamond-search-results"
import { DiamondSearchConsole } from "@/components/dashboard/diamond-search-console"
import { Badge } from "@/components/ui/badge"
import { Filter, Search, Sliders, Zap } from "lucide-react"

export default function DiamondSearchPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Diamond Search</h1>
          <p className="text-muted-foreground">Find the perfect diamonds for your inventory</p>
        </div>
        <Badge variant="outline" className="flex items-center gap-1">
          <Zap className="h-3 w-3" />
          <span>AI-Enhanced Search</span>
        </Badge>
      </div>

      <Tabs defaultValue="certified">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="certified">Certified Diamonds</TabsTrigger>
          <TabsTrigger value="non-certified">Non-Certified Diamonds</TabsTrigger>
          <TabsTrigger value="jewellery">Jewellery</TabsTrigger>
        </TabsList>

        <TabsContent value="certified" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Search Filters
              </CardTitle>
              <CardDescription>Refine your search with detailed specifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
                <div className="space-y-2">
                  <Label htmlFor="shape">Shape</Label>
                  <Select defaultValue="all">
                    <SelectTrigger id="shape">
                      <SelectValue placeholder="All Shapes" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Shapes</SelectItem>
                      <SelectItem value="round">Round</SelectItem>
                      <SelectItem value="princess">Princess</SelectItem>
                      <SelectItem value="cushion">Cushion</SelectItem>
                      <SelectItem value="oval">Oval</SelectItem>
                      <SelectItem value="emerald">Emerald</SelectItem>
                      <SelectItem value="pear">Pear</SelectItem>
                      <SelectItem value="marquise">Marquise</SelectItem>
                      <SelectItem value="radiant">Radiant</SelectItem>
                      <SelectItem value="asscher">Asscher</SelectItem>
                      <SelectItem value="heart">Heart</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="carat-range">Carat Range</Label>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="flex-1">
                        <input
                          type="number"
                          placeholder="Min"
                          defaultValue="0.5"
                          min="0.1"
                          max="10.0"
                          step="0.1"
                          className="w-full px-3 py-2 border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                      </div>
                      <span className="text-muted-foreground">to</span>
                      <div className="flex-1">
                        <input
                          type="number"
                          placeholder="Max"
                          defaultValue="5.0"
                          min="0.1"
                          max="10.0"
                          step="0.1"
                          className="w-full px-3 py-2 border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                      </div>
                    </div>
                    <Slider defaultValue={[0.5, 5.0]} min={0.1} max={10.0} step={0.1} />
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>0.1 ct</span>
                      <span>10.0 ct</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="color">Color</Label>
                  <Select defaultValue="all">
                    <SelectTrigger id="color">
                      <SelectValue placeholder="All Colors" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Colors</SelectItem>
                      <SelectItem value="d">D</SelectItem>
                      <SelectItem value="e">E</SelectItem>
                      <SelectItem value="f">F</SelectItem>
                      <SelectItem value="g">G</SelectItem>
                      <SelectItem value="h">H</SelectItem>
                      <SelectItem value="i">I</SelectItem>
                      <SelectItem value="j">J</SelectItem>
                      <SelectItem value="k">K</SelectItem>
                      <SelectItem value="l">L</SelectItem>
                      <SelectItem value="m">M</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="clarity">Clarity</Label>
                  <Select defaultValue="all">
                    <SelectTrigger id="clarity">
                      <SelectValue placeholder="All Clarity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Clarity</SelectItem>
                      <SelectItem value="fl">FL</SelectItem>
                      <SelectItem value="if">IF</SelectItem>
                      <SelectItem value="vvs1">VVS1</SelectItem>
                      <SelectItem value="vvs2">VVS2</SelectItem>
                      <SelectItem value="vs1">VS1</SelectItem>
                      <SelectItem value="vs2">VS2</SelectItem>
                      <SelectItem value="si1">SI1</SelectItem>
                      <SelectItem value="si2">SI2</SelectItem>
                      <SelectItem value="i1">I1</SelectItem>
                      <SelectItem value="i2">I2</SelectItem>
                      <SelectItem value="i3">I3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cut">Cut</Label>
                  <Select defaultValue="all">
                    <SelectTrigger id="cut">
                      <SelectValue placeholder="All Cuts" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Cuts</SelectItem>
                      <SelectItem value="excellent">Excellent</SelectItem>
                      <SelectItem value="very-good">Very Good</SelectItem>
                      <SelectItem value="good">Good</SelectItem>
                      <SelectItem value="fair">Fair</SelectItem>
                      <SelectItem value="poor">Poor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="polish">Polish</Label>
                  <Select defaultValue="all">
                    <SelectTrigger id="polish">
                      <SelectValue placeholder="All Polish" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Polish</SelectItem>
                      <SelectItem value="excellent">Excellent</SelectItem>
                      <SelectItem value="very-good">Very Good</SelectItem>
                      <SelectItem value="good">Good</SelectItem>
                      <SelectItem value="fair">Fair</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="symmetry">Symmetry</Label>
                  <Select defaultValue="all">
                    <SelectTrigger id="symmetry">
                      <SelectValue placeholder="All Symmetry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Symmetry</SelectItem>
                      <SelectItem value="excellent">Excellent</SelectItem>
                      <SelectItem value="very-good">Very Good</SelectItem>
                      <SelectItem value="good">Good</SelectItem>
                      <SelectItem value="fair">Fair</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lab">Lab</Label>
                  <Select defaultValue="all">
                    <SelectTrigger id="lab">
                      <SelectValue placeholder="All Labs" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Labs</SelectItem>
                      <SelectItem value="gia">GIA</SelectItem>
                      <SelectItem value="igi">IGI</SelectItem>
                      <SelectItem value="hrd">HRD</SelectItem>
                      <SelectItem value="agsl">AGSL</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fluorescence">Fluorescence</Label>
                  <Select defaultValue="all">
                    <SelectTrigger id="fluorescence">
                      <SelectValue placeholder="All Fluorescence" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Fluorescence</SelectItem>
                      <SelectItem value="none">None</SelectItem>
                      <SelectItem value="faint">Faint</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="strong">Strong</SelectItem>
                      <SelectItem value="very-strong">Very Strong</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Sliders className="h-4 w-4 mr-2" />
                    Advanced Filters
                  </Button>
                  <Button variant="outline" size="sm">
                    Clear All
                  </Button>
                </div>
                <Button>
                  <Search className="h-4 w-4 mr-2" />
                  Search Diamonds
                </Button>
              </div>
            </CardContent>
          </Card>

          <DiamondSearchConsole />
          <DiamondSearchResults />
        </TabsContent>

        <TabsContent value="non-certified" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Non-Certified Diamond Search</CardTitle>
              <CardDescription>Search for non-certified diamonds with flexible specifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center">
                <p className="text-muted-foreground">
                  Non-certified diamond search filters and results will appear here
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="jewellery" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Jewellery Search</CardTitle>
              <CardDescription>Find finished jewellery pieces from global suppliers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center">
                <p className="text-muted-foreground">Jewellery search filters and results will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
