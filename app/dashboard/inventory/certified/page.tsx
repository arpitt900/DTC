"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CertifiedDiamondsList } from "@/components/dashboard/certified-diamonds-list"
import { Filter, Plus, Search, SlidersHorizontal } from "lucide-react"
import { useState } from "react"

export default function CertifiedDiamondsPage() {
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [colorSelectionStart, setColorSelectionStart] = useState<string | null>(null)
  const [selectedShapes, setSelectedShapes] = useState<string[]>([])
  const [selectedLabs, setSelectedLabs] = useState<string[]>([])

  const handleColorSelection = (color: string) => {
    if (colorSelectionStart === null) {
      setColorSelectionStart(color)
      setSelectedColors([color])
    } else {
      const startIndex = ["D", "E", "F", "G", "H", "I", "J", "K", "L", "M"].indexOf(colorSelectionStart)
      const endIndex = ["D", "E", "F", "G", "H", "I", "J", "K", "L", "M"].indexOf(color)

      if (startIndex <= endIndex) {
        const newColors = ["D", "E", "F", "G", "H", "I", "J", "K", "L", "M"].slice(startIndex, endIndex + 1)
        setSelectedColors(newColors)
      } else {
        const newColors = ["D", "E", "F", "G", "H", "I", "J", "K", "L", "M"].slice(endIndex, startIndex + 1)
        setSelectedColors(newColors)
      }

      setColorSelectionStart(null)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Certified Diamonds</h1>
          <p className="text-muted-foreground">Manage your certified diamond inventory</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" className="flex items-center">
            <Filter className="h-4 w-4 mr-2" />
            Images/Videos Only
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Diamond
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Search Filters</CardTitle>
          <CardDescription>Filter your certified diamond inventory</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Basic Search */}
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold mb-3">Basic Search</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="search">Search</Label>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input id="search" type="search" placeholder="Search by ID, cert number..." className="pl-8" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Size (Carat)</Label>
                  <div className="flex space-x-2">
                    <div className="flex-1">
                      <Label htmlFor="carat-min" className="text-xs text-muted-foreground">
                        From
                      </Label>
                      <Input
                        id="carat-min"
                        type="number"
                        step="0.01"
                        min="0.01"
                        max="10.00"
                        placeholder="1.00"
                        className="text-sm"
                      />
                    </div>
                    <div className="flex-1">
                      <Label htmlFor="carat-max" className="text-xs text-muted-foreground">
                        To
                      </Label>
                      <Input
                        id="carat-max"
                        type="number"
                        step="0.01"
                        min="0.01"
                        max="10.00"
                        placeholder="1.02"
                        className="text-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Select defaultValue="all">
                    <SelectTrigger id="location">
                      <SelectValue placeholder="All Locations" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      <SelectItem value="mumbai">Mumbai</SelectItem>
                      <SelectItem value="surat">Surat</SelectItem>
                      <SelectItem value="antwerp">Antwerp</SelectItem>
                      <SelectItem value="new-york">New York</SelectItem>
                      <SelectItem value="hong-kong">Hong Kong</SelectItem>
                      <SelectItem value="tel-aviv">Tel Aviv</SelectItem>
                      <SelectItem value="dubai">Dubai</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-3 mt-4">
                <Label className="text-sm font-medium">Shape</Label>
                <div className="border rounded-md p-3 bg-background">
                  <div className="flex gap-2 overflow-x-auto">
                    {[
                      { value: "round", label: "Round", sketch: "●" },
                      { value: "oval", label: "Oval", sketch: "⬭" },
                      { value: "princess", label: "Princess", sketch: "◆" },
                      { value: "cushion", label: "Cushion", sketch: "◈" },
                      { value: "emerald", label: "Emerald", sketch: "▭" },
                      { value: "pear", label: "Pear", sketch: "◐" },
                      { value: "marquise", label: "Marquise", sketch: "◊" },
                      { value: "asscher", label: "Asscher", sketch: "◇" },
                      { value: "radiant", label: "Radiant", sketch: "◆" },
                      { value: "heart", label: "Heart", sketch: "♡" },
                    ].map((shape) => (
                      <button
                        key={shape.value}
                        type="button"
                        className={`flex flex-col items-center p-2 border rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors min-w-[60px] flex-shrink-0 ${
                          selectedShapes.includes(shape.value)
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-background"
                        }`}
                        onClick={() => {
                          setSelectedShapes((prev) =>
                            prev.includes(shape.value) ? prev.filter((s) => s !== shape.value) : [...prev, shape.value],
                          )
                        }}
                      >
                        <span className="text-2xl mb-1">{shape.sketch}</span>
                        <span className="text-xs font-medium">{shape.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-3 mt-4">
                <Label className="text-sm font-medium">Color Range</Label>
                <div className="border rounded-md p-3 bg-background">
                  <div className="flex gap-1 overflow-x-auto">
                    {["D", "E", "F", "G", "H", "I", "J", "K", "L", "M"].map((color) => (
                      <button
                        key={color}
                        type="button"
                        className={`px-3 py-1 text-xs border rounded hover:bg-accent hover:text-accent-foreground transition-colors flex-shrink-0 ${
                          selectedColors.includes(color)
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-background"
                        } ${colorSelectionStart === color ? "ring-2 ring-primary ring-offset-1" : ""}`}
                        onClick={() => handleColorSelection(color)}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4 mt-4">
                {/* Clarity Range */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">Clarity Range</Label>
                  <div className="border rounded-md p-3 bg-background">
                    <div className="flex gap-1 overflow-x-auto">
                      {["FL", "IF", "VVS1", "VVS2", "VS1", "VS2", "SI1", "SI2", "I1", "I2"].map((clarity) => (
                        <button
                          key={clarity}
                          type="button"
                          className="px-3 py-1 text-xs border rounded hover:bg-accent hover:text-accent-foreground transition-colors flex-shrink-0 bg-background"
                        >
                          {clarity}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Cut Range */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">Cut Range</Label>
                  <div className="border rounded-md p-3 bg-background">
                    <div className="flex gap-1 overflow-x-auto">
                      {["Excellent", "Very Good", "Good", "Fair", "Poor"].map((cut) => (
                        <button
                          key={cut}
                          type="button"
                          className="px-3 py-1 text-xs border rounded hover:bg-accent hover:text-accent-foreground transition-colors flex-shrink-0 bg-background"
                        >
                          {cut}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Polish Range */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">Polish Range</Label>
                  <div className="border rounded-md p-3 bg-background">
                    <div className="flex gap-1 overflow-x-auto">
                      {["Excellent", "Very Good", "Good", "Fair", "Poor"].map((polish) => (
                        <button
                          key={polish}
                          type="button"
                          className="px-3 py-1 text-xs border rounded hover:bg-accent hover:text-accent-foreground transition-colors flex-shrink-0 bg-background"
                        >
                          {polish}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Symmetry Range */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">Symmetry Range</Label>
                  <div className="border rounded-md p-3 bg-background">
                    <div className="flex gap-1 overflow-x-auto">
                      {["Excellent", "Very Good", "Good", "Fair", "Poor"].map((symmetry) => (
                        <button
                          key={symmetry}
                          type="button"
                          className="px-3 py-1 text-xs border rounded hover:bg-accent hover:text-accent-foreground transition-colors flex-shrink-0 bg-background"
                        >
                          {symmetry}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
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
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Lab</Label>
                  <div className="border rounded-md p-3 bg-background">
                    <div className="flex gap-1 overflow-x-auto">
                      {["GIA", "IGI", "HRD", "GRS", "SSEF", "GCAL"].map((lab) => (
                        <button
                          key={lab}
                          type="button"
                          className={`px-3 py-1 text-xs border rounded hover:bg-accent hover:text-accent-foreground transition-colors flex-shrink-0 ${
                            selectedLabs.includes(lab)
                              ? "bg-primary text-primary-foreground border-primary"
                              : "bg-background"
                          }`}
                          onClick={() => {
                            setSelectedLabs((prev) =>
                              prev.includes(lab) ? prev.filter((l) => l !== lab) : [...prev, lab],
                            )
                          }}
                        >
                          {lab}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced Search */}
            <div className="border-t pt-6 bg-slate-100 dark:bg-slate-800/80 rounded-lg p-4 -m-2 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold">Advanced Search</h3>
                <Button variant="ghost" size="sm" className="text-xs">
                  <SlidersHorizontal className="h-3 w-3 mr-1" />
                  Reset All
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Measurements Range */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">Measurements Range (mm)</Label>
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <Label htmlFor="length" className="text-xs text-muted-foreground">
                        Length
                      </Label>
                      <div className="flex space-x-1">
                        <Input id="length-min" placeholder="Min" className="text-xs" />
                        <Input id="length-max" placeholder="Max" className="text-xs" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="width" className="text-xs text-muted-foreground">
                        Width
                      </Label>
                      <div className="flex space-x-1">
                        <Input id="width-min" placeholder="Min" className="text-xs" />
                        <Input id="width-max" placeholder="Max" className="text-xs" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="depth" className="text-xs text-muted-foreground">
                        Depth
                      </Label>
                      <div className="flex space-x-1">
                        <Input id="depth-min" placeholder="Min" className="text-xs" />
                        <Input id="depth-max" placeholder="Max" className="text-xs" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Price Range */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">Price Range ($)</Label>
                  <div className="space-y-2">
                    <Select defaultValue="piece">
                      <SelectTrigger>
                        <SelectValue placeholder="Select Price Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="piece">Total Price (Per Piece)</SelectItem>
                        <SelectItem value="per-carat">Price Per Carat</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="flex space-x-2">
                      <div className="flex-1">
                        <Label htmlFor="price-min" className="text-xs text-muted-foreground">
                          From
                        </Label>
                        <Input id="price-min" type="number" placeholder="Min Price" />
                      </div>
                      <div className="flex-1">
                        <Label htmlFor="price-max" className="text-xs text-muted-foreground">
                          To
                        </Label>
                        <Input id="price-max" type="number" placeholder="Max Price" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                {/* BGM Filter */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">BGM Filter (Brown/Green/Milky)</Label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="Select BGM Filter" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Diamonds</SelectItem>
                      <SelectItem value="no-bgm">No BGM</SelectItem>
                      <SelectItem value="no-brown">No Brown</SelectItem>
                      <SelectItem value="no-green">No Green</SelectItem>
                      <SelectItem value="no-milky">No Milky</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Milky Filter */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">Milky Filter</Label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="Select Milky Filter" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Diamonds</SelectItem>
                      <SelectItem value="non-milky">Non Milky</SelectItem>
                      <SelectItem value="milky">Milky</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end pt-4 border-t">
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                <Filter className="h-4 w-4 mr-2" />
                Apply Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="grid">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Badge variant="outline">{certifiedDiamonds.length} diamonds</Badge>
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
          <CertifiedDiamondsList view="grid" diamonds={certifiedDiamonds} />
        </TabsContent>
        <TabsContent value="table">
          <CertifiedDiamondsList view="table" diamonds={certifiedDiamonds} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export const certifiedDiamonds = [
  {
    id: "CD-10001",
    image: "/placeholder-ilja2.png",
    shape: "Round",
    carat: 1.01,
    color: "D",
    clarity: "VVS1",
    cut: "Excellent",
    polish: "Excellent",
    symmetry: "Excellent",
    fluorescence: "None",
    lab: "GIA",
    certNumber: "1234567890",
    price: 12500,
    status: "In Stock",
    dateAdded: "2025-05-15",
  },
  {
    id: "CD-10002",
    image: "/oval-diamond.png",
    shape: "Oval",
    carat: 1.52,
    color: "E",
    clarity: "VS1",
    cut: "Very Good",
    polish: "Excellent",
    symmetry: "Very Good",
    fluorescence: "Faint",
    lab: "GIA",
    certNumber: "2345678901",
    price: 14800,
    status: "In Stock",
    dateAdded: "2025-05-14",
  },
  {
    id: "CD-10003",
    image: "/princess-cut-diamond.png",
    shape: "Princess",
    carat: 1.25,
    color: "F",
    clarity: "VS2",
    cut: "Excellent",
    polish: "Excellent",
    symmetry: "Excellent",
    fluorescence: "None",
    lab: "IGI",
    certNumber: "3456789012",
    price: 9200,
    status: "In Stock",
    dateAdded: "2025-05-13",
  },
  {
    id: "CD-10004",
    image: "/cushion-cut-diamond.png",
    shape: "Cushion",
    carat: 2.01,
    color: "G",
    clarity: "SI1",
    cut: "Very Good",
    polish: "Very Good",
    symmetry: "Very Good",
    fluorescence: "Medium",
    lab: "GIA",
    certNumber: "4567890123",
    price: 18500,
    status: "In Stock",
    dateAdded: "2025-05-12",
  },
  {
    id: "CD-10005",
    image: "/emerald-diamond.png",
    shape: "Emerald",
    carat: 1.75,
    color: "D",
    clarity: "VVS2",
    cut: "Excellent",
    polish: "Excellent",
    symmetry: "Excellent",
    fluorescence: "None",
    lab: "GIA",
    certNumber: "5678901234",
    price: 21000,
    status: "In Stock",
    dateAdded: "2025-05-11",
  },
  {
    id: "CD-10006",
    image: "/pear-diamond.png",
    shape: "Pear",
    carat: 1.35,
    color: "E",
    clarity: "VS1",
    cut: "Very Good",
    polish: "Excellent",
    symmetry: "Very Good",
    fluorescence: "Faint",
    lab: "HRD",
    certNumber: "6789012345",
    price: 13200,
    status: "In Stock",
    dateAdded: "2025-05-10",
  },
  {
    id: "CD-10007",
    image: "/placeholder-ilja2.png",
    shape: "Round",
    carat: 2.15,
    color: "F",
    clarity: "VS2",
    cut: "Excellent",
    polish: "Excellent",
    symmetry: "Excellent",
    fluorescence: "None",
    lab: "GIA",
    certNumber: "7890123456",
    price: 32500,
    status: "In Stock",
    dateAdded: "2025-05-09",
  },
  {
    id: "CD-10008",
    image: "/marquise-diamond.png",
    shape: "Marquise",
    carat: 1.05,
    color: "G",
    clarity: "SI1",
    cut: "Very Good",
    polish: "Very Good",
    symmetry: "Good",
    fluorescence: "Medium",
    lab: "IGI",
    certNumber: "8901234567",
    price: 7800,
    status: "In Stock",
    dateAdded: "2025-05-08",
  },
]
