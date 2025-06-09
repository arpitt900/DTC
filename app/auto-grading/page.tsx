"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Brain,
  Diamond,
  Upload,
  Camera,
  Check,
  X,
  FileText,
  BarChart3,
  Microscope,
  Sparkles,
  AlertTriangle,
  CheckCircle,
} from "lucide-react"

export default function AutoGradingPage() {
  const [activeTab, setActiveTab] = useState("upload")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [progress, setProgress] = useState(0)
  const [analysisComplete, setAnalysisComplete] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setSelectedFile(file)
      setPreviewUrl(URL.createObjectURL(file))
    }
  }

  const startAnalysis = () => {
    setIsAnalyzing(true)
    setProgress(0)
    setAnalysisComplete(false)

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 10
        if (newProgress >= 100) {
          clearInterval(interval)
          setIsAnalyzing(false)
          setAnalysisComplete(true)
          setActiveTab("results")
          return 100
        }
        return newProgress
      })
    }, 300)
  }

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl)
      }
    }
  }, [previewUrl])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-cyan-400 font-mono">AUTOMATED GRADING SYSTEM</h1>
          <p className="text-gray-400 font-mono">AI-powered diamond grading and authenticity verification</p>
        </div>
        <Badge variant="outline" className="flex items-center gap-1 border-cyan-500 text-cyan-400 font-mono">
          <Microscope className="h-3 w-3 animate-pulse" />
          <span>SPECTRAL ANALYSIS v2.8</span>
        </Badge>
      </div>

      {/* Main Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="bg-gray-900 border border-cyan-500/30 p-0">
          <TabsTrigger
            value="upload"
            className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 rounded-none border-r border-cyan-500/30 px-6 py-3 font-mono"
          >
            UPLOAD
          </TabsTrigger>
          <TabsTrigger
            value="analysis"
            className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 rounded-none border-r border-cyan-500/30 px-6 py-3 font-mono"
            disabled={!selectedFile && !isAnalyzing && !analysisComplete}
          >
            ANALYSIS
          </TabsTrigger>
          <TabsTrigger
            value="results"
            className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 rounded-none border-r border-cyan-500/30 px-6 py-3 font-mono"
            disabled={!analysisComplete}
          >
            RESULTS
          </TabsTrigger>
          <TabsTrigger
            value="history"
            className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 rounded-none px-6 py-3 font-mono"
          >
            HISTORY
          </TabsTrigger>
        </TabsList>

        {/* Upload Tab */}
        <TabsContent value="upload">
          <Card className="bg-gray-900/50 border-cyan-500/30">
            <CardHeader>
              <CardTitle className="text-cyan-400 font-mono text-lg">{">"} DIAMOND IMAGE UPLOAD</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-gray-700 rounded-lg p-10 text-center hover:border-cyan-500/50 transition-colors">
                      <input
                        type="file"
                        id="diamond-image"
                        className="hidden"
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                      <label
                        htmlFor="diamond-image"
                        className="flex flex-col items-center justify-center space-y-4 cursor-pointer"
                      >
                        <div className="rounded-full bg-gray-800 p-4">
                          <Upload className="h-8 w-8 text-cyan-400" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-gray-300 font-mono">
                            Drag and drop your diamond image here, or click to browse
                          </p>
                          <p className="text-xs text-gray-500 font-mono">Supports JPG, PNG, TIFF up to 20MB</p>
                        </div>
                        <Button
                          size="sm"
                          type="button"
                          className="bg-gray-800 text-gray-300 hover:bg-gray-700 font-mono"
                        >
                          SELECT FILE
                        </Button>
                      </label>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label className="text-sm font-medium text-gray-300 font-mono">Image Type</Label>
                        <div className="grid grid-cols-3 gap-2">
                          <Button
                            variant="outline"
                            className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 font-mono"
                          >
                            <Camera className="h-4 w-4 mr-2" />
                            PHOTO
                          </Button>
                          <Button
                            variant="outline"
                            className="border-gray-700 text-gray-400 hover:border-cyan-500/30 hover:text-cyan-400 font-mono"
                          >
                            <Microscope className="h-4 w-4 mr-2" />
                            SCOPE
                          </Button>
                          <Button
                            variant="outline"
                            className="border-gray-700 text-gray-400 hover:border-cyan-500/30 hover:text-cyan-400 font-mono"
                          >
                            <Sparkles className="h-4 w-4 mr-2" />
                            SPECTRAL
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-sm font-medium text-gray-300 font-mono">Additional Information</Label>
                        <Input
                          placeholder="Diamond weight (carats)"
                          className="bg-gray-800 border-gray-700 text-gray-300 font-mono"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="text-sm font-medium text-gray-300 font-mono">Notes</Label>
                        <textarea
                          placeholder="Any additional notes about the diamond..."
                          className="w-full h-20 bg-gray-800 border border-gray-700 rounded-md p-2 text-gray-300 font-mono resize-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gray-800 rounded-lg overflow-hidden h-[300px] flex items-center justify-center">
                      {previewUrl ? (
                        <img
                          src={previewUrl || "/placeholder.svg"}
                          alt="Diamond preview"
                          className="max-w-full max-h-full object-contain"
                        />
                      ) : (
                        <div className="text-center p-6">
                          <Diamond className="h-16 w-16 text-gray-700 mx-auto mb-4" />
                          <p className="text-gray-500 font-mono">Diamond image preview will appear here</p>
                        </div>
                      )}
                    </div>

                    <div className="bg-gray-800 rounded-lg p-4">
                      <h3 className="text-cyan-400 font-mono text-sm mb-2">UPLOAD GUIDELINES</h3>
                      <ul className="space-y-2 text-xs text-gray-400 font-mono">
                        <li className="flex items-start">
                          <Check className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Use high-resolution images (minimum 1200x1200 pixels)</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Ensure proper lighting with neutral background</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Include multiple angles for more accurate grading</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>For best results, include microscope or loupe images</span>
                        </li>
                        <li className="flex items-start">
                          <X className="h-4 w-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Avoid images with reflections or shadows</span>
                        </li>
                      </ul>
                    </div>

                    <Button
                      className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 font-mono"
                      disabled={!selectedFile}
                      onClick={startAnalysis}
                    >
                      <Brain className="h-4 w-4 mr-2" />
                      START AI ANALYSIS
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Analysis Tab */}
        <TabsContent value="analysis">
          <Card className="bg-gray-900/50 border-cyan-500/30">
            <CardHeader>
              <CardTitle className="text-cyan-400 font-mono text-lg">{">"} DIAMOND ANALYSIS IN PROGRESS</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="bg-gray-800 rounded-lg overflow-hidden h-[300px] flex items-center justify-center">
                      {previewUrl && (
                        <img
                          src={previewUrl || "/placeholder.svg"}
                          alt="Diamond being analyzed"
                          className="max-w-full max-h-full object-contain"
                        />
                      )}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm font-mono">
                        <span className="text-cyan-400">NEURAL ANALYSIS PROGRESS</span>
                        <span className="text-cyan-400">{Math.round(progress)}%</span>
                      </div>
                      <Progress
                        value={progress}
                        className="h-2 bg-gray-800"
                        indicatorClassName="bg-gradient-to-r from-cyan-500 to-blue-500"
                      />
                      <div className="text-xs text-gray-400 font-mono animate-pulse">
                        {progress < 20
                          ? "Initializing image processing..."
                          : progress < 40
                            ? "Analyzing diamond characteristics..."
                            : progress < 60
                              ? "Running spectral analysis..."
                              : progress < 80
                                ? "Comparing to diamond database..."
                                : "Finalizing grading report..."}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-gray-800 rounded-lg p-4">
                        <h3 className="text-cyan-400 font-mono text-sm mb-2">ANALYSIS MODULES</h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                              <span className="text-sm text-gray-300 font-mono">Image Recognition</span>
                            </div>
                            <Badge
                              className={`${
                                progress > 20 ? "bg-green-500/20 text-green-400" : "bg-gray-700 text-gray-500"
                              } font-mono text-xs`}
                            >
                              {progress > 20 ? "COMPLETE" : "PENDING"}
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                              <span className="text-sm text-gray-300 font-mono">Cut Analysis</span>
                            </div>
                            <Badge
                              className={`${
                                progress > 40 ? "bg-green-500/20 text-green-400" : "bg-gray-700 text-gray-500"
                              } font-mono text-xs`}
                            >
                              {progress > 40 ? "COMPLETE" : "PENDING"}
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                              <span className="text-sm text-gray-300 font-mono">Color Grading</span>
                            </div>
                            <Badge
                              className={`${
                                progress > 60 ? "bg-green-500/20 text-green-400" : "bg-gray-700 text-gray-500"
                              } font-mono text-xs`}
                            >
                              {progress > 60 ? "COMPLETE" : "PENDING"}
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                              <span className="text-sm text-gray-300 font-mono">Clarity Assessment</span>
                            </div>
                            <Badge
                              className={`${
                                progress > 80 ? "bg-green-500/20 text-green-400" : "bg-gray-700 text-gray-500"
                              } font-mono text-xs`}
                            >
                              {progress > 80 ? "COMPLETE" : "PENDING"}
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                              <span className="text-sm text-gray-300 font-mono">Authenticity Verification</span>
                            </div>
                            <Badge
                              className={`${
                                progress > 90 ? "bg-green-500/20 text-green-400" : "bg-gray-700 text-gray-500"
                              } font-mono text-xs`}
                            >
                              {progress > 90 ? "COMPLETE" : "PENDING"}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Results Tab */}
        <TabsContent value="results">
          <Card className="bg-gray-900/50 border-cyan-500/30">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-cyan-400 font-mono text-lg">{">"} GRADING RESULTS</CardTitle>
              <Badge className="bg-green-500/20 text-green-400 border-green-500/50 font-mono">
                <CheckCircle className="h-3 w-3 mr-1" />
                ANALYSIS COMPLETE
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="bg-gray-800 rounded-lg overflow-hidden h-[300px] flex items-center justify-center">
                      {previewUrl && (
                        <img
                          src={previewUrl || "/placeholder.svg"}
                          alt="Analyzed diamond"
                          className="max-w-full max-h-full object-contain"
                        />
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Card className="bg-gray-800/50 border-gray-700">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="font-mono text-sm text-gray-400">AUTHENTICITY</div>
                            <CheckCircle className="h-5 w-5 text-green-400" />
                          </div>
                          <div className="text-xl font-bold text-white font-mono">NATURAL</div>
                          <div className="text-xs text-green-400 font-mono mt-1">99.8% confidence</div>
                        </CardContent>
                      </Card>

                      <Card className="bg-gray-800/50 border-gray-700">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="font-mono text-sm text-gray-400">ESTIMATED VALUE</div>
                            <Diamond className="h-5 w-5 text-cyan-400" />
                          </div>
                          <div className="text-xl font-bold text-white font-mono">$12,500</div>
                          <div className="text-xs text-cyan-400 font-mono mt-1">Market price range</div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Card className="bg-gray-800/50 border-gray-700">
                      <CardContent className="p-4">
                        <h3 className="text-cyan-400 font-mono text-lg mb-4">DIAMOND GRADE</h3>
                        <div className="grid grid-cols-2 gap-y-4">
                          <div>
                            <div className="text-sm text-gray-400 font-mono">Carat Weight</div>
                            <div className="text-xl font-bold text-white font-mono">1.52 ct</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-400 font-mono">Shape</div>
                            <div className="text-xl font-bold text-white font-mono">ROUND</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-400 font-mono">Color Grade</div>
                            <div className="text-xl font-bold text-white font-mono">F</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-400 font-mono">Clarity Grade</div>
                            <div className="text-xl font-bold text-white font-mono">VS1</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-400 font-mono">Cut Grade</div>
                            <div className="text-xl font-bold text-white font-mono">EXCELLENT</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-400 font-mono">Polish</div>
                            <div className="text-xl font-bold text-white font-mono">EXCELLENT</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-400 font-mono">Symmetry</div>
                            <div className="text-xl font-bold text-white font-mono">VERY GOOD</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-400 font-mono">Fluorescence</div>
                            <div className="text-xl font-bold text-white font-mono">NONE</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-800/50 border-gray-700">
                      <CardContent className="p-4">
                        <h3 className="text-cyan-400 font-mono text-sm mb-2">ADDITIONAL NOTES</h3>
                        <p className="text-sm text-gray-300 font-mono">
                          This diamond exhibits excellent optical properties with minimal inclusions. The VS1 clarity
                          grade indicates very small inclusions that are difficult to see under 10x magnification. The
                          excellent cut grade suggests optimal light performance.
                        </p>
                      </CardContent>
                    </Card>

                    <div className="flex items-center justify-between">
                      <Button
                        variant="outline"
                        className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 font-mono"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        EXPORT REPORT
                      </Button>
                      <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 font-mono">
                        <BarChart3 className="h-4 w-4 mr-2" />
                        MARKET COMPARISON
                      </Button>
                    </div>
                  </div>
                </div>

                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-4">
                    <h3 className="text-cyan-400 font-mono text-lg mb-4">AUTHENTICITY VERIFICATION</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-green-500/20 rounded-lg">
                          <CheckCircle className="h-6 w-6 text-green-400" />
                        </div>
                        <div>
                          <h4 className="text-white font-mono font-medium">Natural Diamond Confirmed</h4>
                          <p className="text-gray-400 font-mono text-sm mt-1">
                            Spectral analysis confirms this is a natural diamond with 99.8% confidence. The optical and
                            physical properties match those of natural diamonds.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-green-500/20 rounded-lg">
                          <CheckCircle className="h-6 w-6 text-green-400" />
                        </div>
                        <div>
                          <h4 className="text-white font-mono font-medium">No Treatments Detected</h4>
                          <p className="text-gray-400 font-mono text-sm mt-1">
                            No evidence of color or clarity enhancements was detected. The diamond appears to be
                            untreated.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-yellow-500/20 rounded-lg">
                          <AlertTriangle className="h-6 w-6 text-yellow-400" />
                        </div>
                        <div>
                          <h4 className="text-white font-mono font-medium">Recommendation</h4>
                          <p className="text-gray-400 font-mono text-sm mt-1">
                            While AI analysis indicates this is a natural diamond, we recommend obtaining a professional
                            laboratory certificate for diamonds of this value.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* History Tab */}
        <TabsContent value="history">
          <Card className="bg-gray-900/50 border-cyan-500/30">
            <CardHeader>
              <CardTitle className="text-cyan-400 font-mono text-lg">{">"} GRADING HISTORY</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <FileText className="h-16 w-16 text-gray-700 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-400 font-mono">NO GRADING HISTORY</h3>
                <p className="text-gray-500 font-mono mt-2">
                  Your grading history will appear here after you analyze diamonds
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
