
import type React from "react"

import { Button } from "@repo/ui/components/button"
import { Input } from "@repo/ui/components/input"
import { Textarea } from "@repo/ui/components/textarea"
import { Badge } from "@repo/ui/components/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/components/card"
import { Label } from "@repo/ui/components/label"
import { Switch } from "@repo/ui/components/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@repo/ui/components/select"
import {
  Bold,
  Italic,
  Underline,
  Link2,
  ImageIcon,
  List,
  ListOrdered,
  Quote,
  Code,
  Eye,
  Save,
  Send,
  X,
  Plus,
  ArrowLeft,
} from "lucide-react"
import {Link} from "react-router-dom"
import { useState } from "react"

export default function PublicPostEditorPage() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [tags, setTags] = useState<string[]>([])
  const [newTag, setNewTag] = useState("")
  const [featuredImage, setFeaturedImage] = useState("")
  const [isPublished, setIsPublished] = useState(false)
  const [category, setCategory] = useState("")
  const [isPreview, setIsPreview] = useState(false)

  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()])
      setNewTag("")
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleAddTag()
    }
  }

  const insertFormatting = (format: string) => {
    // This would integrate with a rich text editor in a real implementation
    console.log(`[v0] Inserting formatting: ${format}`)
  }

  const handleSave = () => {
    console.log("[v0] Saving post as draft")
    // Save logic here
  }

  const handlePublish = () => {
    console.log("[v0] Publishing post")
    // Publish logic here
  }

  return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
              <h1 className="text-2xl font-bold">Write a New Post</h1>
            </div>

            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm" onClick={() => setIsPreview(!isPreview)}>
                <Eye className="mr-2 h-4 w-4" />
                {isPreview ? "Edit" : "Preview"}
              </Button>
              <Button variant="outline" size="sm" onClick={handleSave}>
                <Save className="mr-2 h-4 w-4" />
                Save Draft
              </Button>
              <Button size="sm" onClick={handlePublish}>
                <Send className="mr-2 h-4 w-4" />
                Publish
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Editor */}
            <div className="lg:col-span-2 space-y-6">
              {!isPreview ? (
                <>
                  {/* Title */}
                  <div>
                    <Input
                      placeholder="Enter your post title..."
                      value={title}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                      className="text-2xl font-bold border-none px-0 focus-visible:ring-0 placeholder:text-muted-foreground"
                    />
                  </div>

                  {/* Excerpt */}
                  <div>
                    <Label htmlFor="excerpt" className="text-sm font-medium">
                      Excerpt (Optional)
                    </Label>
                    <Textarea
                      id="excerpt"
                      placeholder="Write a brief description of your post..."
                      value={excerpt}
                      onChange={(e) => setExcerpt(e.target.value)}
                      className="mt-2 resize-none"
                      rows={3}
                    />
                  </div>

                  {/* Toolbar */}
                  <div className="flex flex-wrap items-center gap-2 p-3 border rounded-lg bg-muted/50">
                    <Button variant="ghost" size="sm" onClick={() => insertFormatting("bold")}>
                      <Bold className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => insertFormatting("italic")}>
                      <Italic className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => insertFormatting("underline")}>
                      <Underline className="h-4 w-4" />
                    </Button>
                    <div className="w-px h-6 bg-border mx-1" />
                    <Button variant="ghost" size="sm" onClick={() => insertFormatting("link")}>
                      <Link2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => insertFormatting("image")}>
                      <ImageIcon className="h-4 w-4" />
                    </Button>
                    <div className="w-px h-6 bg-border mx-1" />
                    <Button variant="ghost" size="sm" onClick={() => insertFormatting("ul")}>
                      <List className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => insertFormatting("ol")}>
                      <ListOrdered className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => insertFormatting("quote")}>
                      <Quote className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => insertFormatting("code")}>
                      <Code className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Content Editor */}
                  <div>
                    <Textarea
                      placeholder="Start writing your post..."
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      className="min-h-[400px] resize-none border-none px-0 focus-visible:ring-0 text-base leading-relaxed"
                    />
                  </div>
                </>
              ) : (
                /* Preview Mode */
                <Card>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h1 className="text-3xl font-bold mb-4">{title || "Untitled Post"}</h1>
                        {excerpt && <p className="text-lg text-muted-foreground mb-6">{excerpt}</p>}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {featuredImage && (
                        <div className="aspect-video relative overflow-hidden rounded-lg">
                          <img
                            src={featuredImage || "/placeholder.svg"}
                            alt="Featured"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}

                      <div className="prose prose-lg max-w-none">
                        {content.split("\n").map((paragraph, index) => (
                          <p key={index} className="mb-4">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Publish Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Publish Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="published" className="text-sm font-medium">
                      Publish immediately
                    </Label>
                    <Switch id="published" checked={isPublished} onCheckedChange={setIsPublished} />
                  </div>

                  <div>
                    <Label htmlFor="category" className="text-sm font-medium">
                      Category
                    </Label>
                    <Select value={category} onValueChange={setCategory}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="design">Design</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="productivity">Productivity</SelectItem>
                        <SelectItem value="tutorial">Tutorial</SelectItem>
                        <SelectItem value="opinion">Opinion</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Featured Image */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Featured Image</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Input
                      placeholder="Image URL"
                      value={featuredImage}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFeaturedImage(e.target.value)}
                    />
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      <ImageIcon className="mr-2 h-4 w-4" />
                      Upload Image
                    </Button>
                    {featuredImage && (
                      <div className="aspect-video relative overflow-hidden rounded-lg">
                        <img
                          src={featuredImage || "/placeholder.svg"}
                          alt="Featured"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Tags */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Tags</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex space-x-2">
                      <Input
                        placeholder="Add a tag"
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        onKeyPress={handleKeyPress}
                      />
                      <Button size="sm" onClick={handleAddTag}>
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    {tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                            {tag}
                            <button onClick={() => handleRemoveTag(tag)} className="ml-1 hover:text-destructive">
                              <X className="h-3 w-3" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Writing Tips */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Writing Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Use clear, descriptive titles</li>
                    <li>• Break up text with headings</li>
                    <li>• Add relevant tags for discoverability</li>
                    <li>• Include a compelling excerpt</li>
                    <li>• Use images to enhance your content</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
  )
}
