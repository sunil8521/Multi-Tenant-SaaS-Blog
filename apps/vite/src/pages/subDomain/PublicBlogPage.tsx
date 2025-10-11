"use client"

import { Button } from "@repo/ui/components/button"
import { Badge } from "@repo/ui/components/badge"
import { Card, CardContent } from "@repo/ui/components/card"
import { Avatar, AvatarFallback, AvatarImage } from "@repo/ui/components/avatar"
import { Input } from "@repo/ui/components/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@repo/ui/components/select"
import { Heart, MessageCircle, Bookmark, TrendingUp, Clock, Search, PenTool } from "lucide-react"
import {Link} from "react-router-dom"
import { useState } from "react"

// Mock data for demonstration
const featuredPosts = [
  {
    id: "1",
    title: "The Future of Remote Team Collaboration",
    excerpt:
      "Exploring how distributed teams are reshaping the way we work together, communicate, and build products in the digital age.",
    author: {
      name: "Sarah Chen",
      avatar: "/sarah-chen-avatar.jpg",
      username: "sarahc",
    },
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    tags: ["Remote Work", "Collaboration", "Technology"],
    likes: 234,
    comments: 45,
    image: "/placeholder-imkik.png",
    featured: true,
  },
  {
    id: "2",
    title: "Building Scalable Design Systems",
    excerpt: "A comprehensive guide to creating design systems that grow with your product and team.",
    author: {
      name: "Marcus Johnson",
      avatar: "/marcus-johnson-avatar.jpg",
      username: "marcusj",
    },
    publishedAt: "2024-01-12",
    readTime: "12 min read",
    tags: ["Design", "Systems", "UI/UX"],
    likes: 189,
    comments: 32,
    image: "/placeholder-5tixe.png",
  },
]

const allPosts = [
  ...featuredPosts,
  {
    id: "3",
    title: "Mastering TypeScript for React Development",
    excerpt: "Advanced TypeScript patterns and techniques for building robust React applications.",
    author: {
      name: "Emily Rodriguez",
      avatar: "/emily-rodriguez-avatar.jpg",
      username: "emilyr",
    },
    publishedAt: "2024-01-10",
    readTime: "15 min read",
    tags: ["TypeScript", "React", "Development"],
    likes: 156,
    comments: 28,
    image: "/placeholder-grs1k.png",
  },
  {
    id: "4",
    title: "The Art of Technical Writing",
    excerpt: "How to communicate complex technical concepts clearly and effectively.",
    author: {
      name: "David Kim",
      avatar: "/diverse-user-avatars.png",
      username: "davidk",
    },
    publishedAt: "2024-01-08",
    readTime: "6 min read",
    tags: ["Writing", "Communication", "Documentation"],
    likes: 98,
    comments: 15,
  },
  {
    id: "5",
    title: "Sustainable Software Development Practices",
    excerpt: "Building software that lasts: principles for maintainable and scalable codebases.",
    author: {
      name: "Lisa Wang",
      avatar: "/diverse-user-avatars.png",
      username: "lisaw",
    },
    publishedAt: "2024-01-05",
    readTime: "10 min read",
    tags: ["Software", "Best Practices", "Sustainability"],
    likes: 142,
    comments: 22,
  },
]

const trendingTags = [
  "React",
  "TypeScript",
  "Design Systems",
  "Remote Work",
  "AI/ML",
  "Web Development",
  "UI/UX",
  "DevOps",
  "Startups",
  "Leadership",
  "Productivity",
  "Open Source",
]

 function PublicBlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTag, setSelectedTag] = useState("all")
  const [sortBy, setSortBy] = useState("latest")

  const filteredPosts = allPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTag = selectedTag === "all" || post.tags.some((tag) => tag.toLowerCase() === selectedTag.toLowerCase())
    return matchesSearch && matchesTag
  })

  return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Discover Amazing Stories</h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Explore insights, tutorials, and stories from developers, designers, and teams around the world.
          </p>
          <Button size="lg" asChild>
            <Link to="/blog/write">
              <PenTool className="mr-2 h-5 w-5" />
              Start Writing
            </Link>
          </Button>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <TrendingUp className="mr-2 h-5 w-5 text-blue-600" />
              <h2 className="text-2xl font-bold">Featured Posts</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                          <AvatarFallback>
                            {post.author.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{post.author.name}</p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Clock className="mr-1 h-3 w-3" />
                            {post.readTime}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Heart className="mr-1 h-4 w-4" />
                          {post.likes}
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="mr-1 h-4 w-4" />
                          {post.comments}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedTag} onValueChange={setSelectedTag}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Filter by tag" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Tags</SelectItem>
                  {trendingTags.map((tag) => (
                    <SelectItem key={tag} value={tag}>
                      {tag}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-32">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="latest">Latest</SelectItem>
                  <SelectItem value="popular">Popular</SelectItem>
                  <SelectItem value="trending">Trending</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Posts Grid */}
            <div className="space-y-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex flex-col sm:flex-row">
                      {post.image && (
                        <div className="sm:w-48 aspect-video sm:aspect-square relative overflow-hidden">
                          <img
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <div className="flex-1 p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <h3 className="text-xl font-bold mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                          <Link to={`/blog/${post.id}`}>{post.title}</Link>
                        </h3>
                        <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                              <AvatarFallback>
                                {post.author.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm font-medium">{post.author.name}</p>
                              <div className="flex items-center text-xs text-muted-foreground">
                                <Clock className="mr-1 h-3 w-3" />
                                {post.readTime} • {new Date(post.publishedAt).toLocaleDateString()}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Heart className="mr-1 h-4 w-4" />
                              {post.likes}
                            </div>
                            <div className="flex items-center">
                              <MessageCircle className="mr-1 h-4 w-4" />
                              {post.comments}
                            </div>
                            <Button variant="ghost" size="sm">
                              <Bookmark className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">No posts found matching your criteria.</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedTag("all")
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Trending Tags */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-4">Trending Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {trendingTags.map((tag) => (
                    <Badge
                      key={tag}
                      variant={selectedTag === tag ? "default" : "secondary"}
                      className="cursor-pointer hover:bg-blue-100 transition-colors"
                      onClick={() => setSelectedTag(tag)}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold mb-2">Start Your Blog</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Share your knowledge and connect with readers worldwide.
                </p>
                <Button asChild className="w-full">
                  <Link to="/blog/write">
                    <PenTool className="mr-2 h-4 w-4" />
                    Write Your First Post
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Stay Updated</h3>
                <p className="text-sm text-muted-foreground mb-4">Get the latest posts delivered to your inbox.</p>
                <div className="space-y-2">
                  <Input placeholder="Enter your email" />
                  <Button className="w-full" size="sm">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
  )
}
export default PublicBlogPage