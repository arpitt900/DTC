import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { NonCertifiedDiamondsList } from "@/components/dashboard/non-certified-diamonds-list"
import { Filter, Plus, Search, SlidersHorizontal } from "lucide-react"

export default function NonCertifiedDiamondsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Non-Certified Diamonds</h1>
          <p className="text-muted-foreground">Manage your non-certified diamond inventory</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Diamond
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Quick Filters</CardTitle>
          <CardDescription>Filter your non-certified diamond inventory</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="search">Search</Label>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input id="search" type="search" placeholder="Search by ID, description..." className="pl-8" />
              </div>
            </div>
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
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="carat">Carat Range</Label>
              <Select defaultValue="all">
                <SelectTrigger id="carat">
                  <SelectValue placeholder="All Carats" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Carats</SelectItem>
                  <SelectItem value="0-1">0 - 1 ct</SelectItem>
                  <SelectItem value="1-2">1 - 2 ct</SelectItem>
                  <SelectItem value="2-3">2 - 3 ct</SelectItem>
                  <SelectItem value="3+">3+ ct</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="quality">Quality</Label>
              <Select defaultValue="all">
                <SelectTrigger id="quality">
                  <SelectValue placeholder="All Quality" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Quality</SelectItem>
                  <SelectItem value="premium">Premium</SelectItem>
                  <SelectItem value="standard">Standard</SelectItem>
                  <SelectItem value="economy">Economy</SelectItem>
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
            <Badge variant="outline">{nonCertifiedDiamonds.length} diamonds</Badge>
            <Select defaultValue="newest">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="carat-desc">Carat: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <TabsList>
            <TabsTrigger value="grid">Grid</TabsTrigger>
            <TabsTrigger value="table">Table</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="grid">
          <NonCertifiedDiamondsList view="grid" diamonds={nonCertifiedDiamonds} />
        </TabsContent>
        <TabsContent value="table">
          <NonCertifiedDiamondsList view="table" diamonds={nonCertifiedDiamonds} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export const nonCertifiedDiamonds = [
  {
    id: "NCD-20001",
    image: "/diamond-round.png",
    shape: "Round",
    carat: 0.85,
    color: "G-H",
    clarity: "VS-SI",
    cut: "Very Good",
    polish: "Good",
    symmetry: "Good",
    fluorescence: "Medium",
    price: 2800,
    status: "In Stock",
    dateAdded: "2025-05-15",
    parcel: "Single",
    quality: "Premium",
  },
  {
    id: "NCD-20002",
    image: "/diamond-oval.png",
    shape: "Oval",
    carat: 1.25,
    color: "H-I",
    clarity: "SI",
    cut: "Good",
    polish: "Good",
    symmetry: "Good",
    fluorescence: "Strong",
    price: 3500,
    status: "In Stock",
    dateAdded: "2025-05-14",
    parcel: "Single",
    quality: "Standard",
  },
  {
    id: "NCD-20003",
    image: "/diamond-princess.png",
    shape: "Princess",
    carat: 1.05,
    color: "F-G",
    clarity: "VS",
    cut: "Very Good",
    polish: "Very Good",
    symmetry: "Very Good",
    fluorescence: "None",
    price: 4200,
    status: "In Stock",
    dateAdded: "2025-05-13",
    parcel: "Single",
    quality: "Premium",
  },
  {
    id: "NCD-20004",
    image: "/diamond-cushion.png",
    shape: "Cushion",
    carat: 1.75,
    color: "I-J",
    clarity: "SI-I1",
    cut: "Good",
    polish: "Good",
    symmetry: "Good",
    fluorescence: "Medium",
    price: 5100,
    status: "In Stock",
    dateAdded: "2025-05-12",
    parcel: "Single",
    quality: "Standard",
  },
  {
    id: "NCD-20005",
    image: "/diamond-emerald.png",
    shape: "Emerald",
    carat: 1.5,
    color: "G-H",
    clarity: "VS",
    cut: "Very Good",
    polish: "Very Good",
    symmetry: "Very Good",
    fluorescence: "Faint",
    price: 6800,
    status: "In Stock",
    dateAdded: "2025-05-11",
    parcel: "Single",
    quality: "Premium",
  },
  {
    id: "NCD-20006",
    image: "/diamond-pear.png",
    shape: "Pear",
    carat: 1.15,
    color: "H-I",
    clarity: "SI",
    cut: "Good",
    polish: "Good",
    symmetry: "Good",
    fluorescence: "Medium",
    price: 3200,
    status: "In Stock",
    dateAdded: "2025-05-10",
    parcel: "Single",
    quality: "Standard",
  },
  {
    id: "NCD-20007",
    image: "/diamond-round.png",
    shape: "Round",
    carat: 0.5,
    color: "D-E",
    clarity: "VVS-VS",
    cut: "Excellent",
    polish: "Excellent",
    symmetry: "Excellent",
    fluorescence: "None",
    price: 1800,
    status: "In Stock",
    dateAdded: "2025-05-09",
    parcel: "Parcel (10 pcs)",
    quality: "Premium",
  },
  {
    id: "NCD-20008",
    image: "/diamond-marquise.png",
    shape: "Marquise",
    carat: 0.9,
    color: "G-H",
    clarity: "SI",
    cut: "Very Good",
    polish: "Good",
    symmetry: "Good",
    fluorescence: "Medium",
    price: 2500,
    status: "In Stock",
    dateAdded: "2025-05-08",
    parcel: "Single",
    quality: "Standard",
  },
]
