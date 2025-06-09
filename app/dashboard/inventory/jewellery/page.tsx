import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { JewelleryList } from "@/components/dashboard/jewellery-list"
import { Filter, Plus, Search, SlidersHorizontal } from "lucide-react"

export default function JewelleryPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Jewellery</h1>
          <p className="text-muted-foreground">Manage your jewellery inventory</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Jewellery
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Quick Filters</CardTitle>
          <CardDescription>Filter your jewellery inventory</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="search">Search</Label>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input id="search" type="search" placeholder="Search by ID, name..." className="pl-8" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select defaultValue="all">
                <SelectTrigger id="category">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="rings">Rings</SelectItem>
                  <SelectItem value="necklaces">Necklaces</SelectItem>
                  <SelectItem value="earrings">Earrings</SelectItem>
                  <SelectItem value="bracelets">Bracelets</SelectItem>
                  <SelectItem value="pendants">Pendants</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="metal">Metal</Label>
              <Select defaultValue="all">
                <SelectTrigger id="metal">
                  <SelectValue placeholder="All Metals" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Metals</SelectItem>
                  <SelectItem value="gold">Gold</SelectItem>
                  <SelectItem value="white-gold">White Gold</SelectItem>
                  <SelectItem value="rose-gold">Rose Gold</SelectItem>
                  <SelectItem value="platinum">Platinum</SelectItem>
                  <SelectItem value="silver">Silver</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="price">Price Range</Label>
              <Select defaultValue="all">
                <SelectTrigger id="price">
                  <SelectValue placeholder="All Prices" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="0-1000">$0 - $1,000</SelectItem>
                  <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                  <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                  <SelectItem value="10000+">$10,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <Button variant="outline" size="sm" className="flex items-center">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Advanced Filters
            </Button>
            <Button size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Apply Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="grid">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Badge variant="outline">{jewelleryItems.length} items</Badge>
            <Select defaultValue="newest">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <TabsList>
            <TabsTrigger value="grid">Grid</TabsTrigger>
            <TabsTrigger value="table">Table</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="grid">
          <JewelleryList view="grid" jewelleryItems={jewelleryItems} />
        </TabsContent>
        <TabsContent value="table">
          <JewelleryList view="table" jewelleryItems={jewelleryItems} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export const jewelleryItems = [
  {
    id: "JW-30001",
    name: "Diamond Solitaire Engagement Ring",
    image: "/jewellery-ring.png",
    category: "Rings",
    description: "Classic solitaire engagement ring with a 1.0ct round brilliant diamond in a 4-prong setting",
    metal: "Platinum",
    diamondDetails: "1.0ct Round, F, VS1, Excellent Cut",
    price: 8500,
    status: "In Stock",
    dateAdded: "2025-05-15",
  },
  {
    id: "JW-30002",
    name: "Diamond Tennis Bracelet",
    image: "/jewellery-bracelet.png",
    category: "Bracelets",
    description: "Elegant tennis bracelet featuring 25 round brilliant diamonds totaling 5.0ct",
    metal: "White Gold",
    diamondDetails: "5.0ct total, G-H, VS-SI, Excellent Cut",
    price: 12000,
    status: "In Stock",
    dateAdded: "2025-05-14",
  },
  {
    id: "JW-30003",
    name: "Diamond Stud Earrings",
    image: "/jewellery-earrings.png",
    category: "Earrings",
    description: "Classic diamond stud earrings with a total of 2.0ct round brilliant diamonds",
    metal: "White Gold",
    diamondDetails: "2.0ct total, F-G, VS2, Excellent Cut",
    price: 6500,
    status: "In Stock",
    dateAdded: "2025-05-13",
  },
  {
    id: "JW-30004",
    name: "Three-Stone Diamond Pendant",
    image: "/jewellery-pendant.png",
    category: "Pendants",
    description: "Elegant three-stone diamond pendant with a total of 1.5ct diamonds in a graduated design",
    metal: "White Gold",
    diamondDetails: "1.5ct total, G, VS2, Very Good Cut",
    price: 4800,
    status: "In Stock",
    dateAdded: "2025-05-12",
  },
  {
    id: "JW-30005",
    name: "Diamond Halo Engagement Ring",
    image: "/jewellery-ring.png",
    category: "Rings",
    description: "Stunning halo engagement ring featuring a 1.5ct oval diamond surrounded by smaller round diamonds",
    metal: "Rose Gold",
    diamondDetails: "2.0ct total, Center: 1.5ct Oval, E, VS2",
    price: 15000,
    status: "In Stock",
    dateAdded: "2025-05-11",
  },
  {
    id: "JW-30006",
    name: "Diamond Eternity Band",
    image: "/jewellery-ring.png",
    category: "Rings",
    description: "Full eternity band with 3.0ct of round brilliant diamonds set in a shared prong design",
    metal: "Platinum",
    diamondDetails: "3.0ct total, F-G, VS, Excellent Cut",
    price: 9200,
    status: "In Stock",
    dateAdded: "2025-05-10",
  },
  {
    id: "JW-30007",
    name: "Diamond Drop Earrings",
    image: "/jewellery-earrings.png",
    category: "Earrings",
    description: "Elegant drop earrings featuring pear-shaped diamonds with a halo of smaller round diamonds",
    metal: "White Gold",
    diamondDetails: "3.5ct total, Center: 1.0ct each Pear, F, VS1",
    price: 18500,
    status: "In Stock",
    dateAdded: "2025-05-09",
  },
  {
    id: "JW-30008",
    name: "Diamond Line Necklace",
    image: "/jewellery-necklace.png",
    category: "Necklaces",
    description: "Sophisticated graduated diamond necklace with a total of 10.0ct of round brilliant diamonds",
    metal: "White Gold",
    diamondDetails: "10.0ct total, G-H, VS-SI, Excellent Cut",
    price: 35000,
    status: "In Stock",
    dateAdded: "2025-05-08",
  },
]
