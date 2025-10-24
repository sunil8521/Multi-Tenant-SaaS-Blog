
import { Button } from "@repo/ui/components/button"
import { Badge } from "@repo/ui/components/badge"
import { Card, CardContent } from "@repo/ui/components/card"
import { Avatar, AvatarFallback, AvatarImage } from "@repo/ui/components/avatar"
import { Heart, MessageCircle, Bookmark, Share2, Twitter, Facebook, Link2, Clock, ArrowLeft } from "lucide-react"
import {Link} from "react-router-dom"
import { useState } from "react"
import { useParams } from "react-router-dom"


// Mock data for demonstration
const mockPost = {
  id: "1",
  title: "The Future of Remote Team Collaboration",
  content: `
    <p>The landscape of work has fundamentally changed. As teams become increasingly distributed across the globe, the way we collaborate, communicate, and build products together has evolved dramatically.</p>
    
    <h2>The New Reality of Distributed Teams</h2>
    <p>Remote work is no longer just a perk or a temporary solution—it's become the new normal for millions of professionals worldwide. This shift has brought both opportunities and challenges that require us to rethink traditional approaches to teamwork.</p>
    
    <h3>Key Benefits of Remote Collaboration</h3>
    <ul>
      <li><strong>Global Talent Access:</strong> Companies can now hire the best talent regardless of geographical location</li>
      <li><strong>Increased Flexibility:</strong> Team members can work during their most productive hours</li>
      <li><strong>Cost Efficiency:</strong> Reduced overhead costs for office space and utilities</li>
      <li><strong>Better Work-Life Balance:</strong> Employees can better integrate their personal and professional lives</li>
    </ul>
    
    <h2>Essential Tools for Modern Remote Teams</h2>
    <p>The success of remote collaboration heavily depends on having the right tools and processes in place. Here are some categories of tools that have become indispensable:</p>
    
    <h3>Communication Platforms</h3>
    <p>Real-time messaging, video conferencing, and asynchronous communication tools form the backbone of remote team interaction. The key is finding the right balance between synchronous and asynchronous communication.</p>
    
    <h3>Project Management Systems</h3>
    <p>Visual project tracking, task assignment, and progress monitoring become even more critical when team members aren't physically present to provide updates.</p>
    
    <h2>Building a Strong Remote Culture</h2>
    <p>Technology alone isn't enough. Creating a strong remote culture requires intentional effort and thoughtful practices:</p>
    
    <blockquote>
      "The future belongs to organizations that can effectively blend human connection with digital efficiency."
    </blockquote>
    
    <h3>Best Practices for Remote Team Leaders</h3>
    <ol>
      <li>Establish clear communication protocols and expectations</li>
      <li>Create opportunities for informal social interaction</li>
      <li>Focus on outcomes rather than hours worked</li>
      <li>Provide regular feedback and recognition</li>
      <li>Invest in team member development and growth</li>
    </ol>
    
    <h2>Looking Ahead</h2>
    <p>As we continue to navigate this new landscape, the organizations that thrive will be those that can successfully combine the flexibility of remote work with the innovation that comes from effective collaboration.</p>
    
    <p>The future of work isn't just remote—it's about creating hybrid experiences that bring out the best in both distributed and in-person collaboration.</p>
  `,
  author: {
    name: "Sarah Chen",
    avatar: "/sarah-chen-avatar.jpg",
    username: "sarahc",
    bio: "Product Manager at TechCorp with 8+ years of experience building remote-first teams. Passionate about the future of work and team collaboration.",
    followers: 1250,
  },
  publishedAt: "2024-01-15",
  readTime: "8 min read",
  tags: ["Remote Work", "Collaboration", "Technology"],
  likes: 234,
  comments: 45,
  image: "https://placehold.co/600x400?text=Hello+World",
}

const relatedPosts = [
  {
    id: "2",
    title: "Building Scalable Design Systems",
    author: "Marcus Johnson",
    readTime: "12 min read",
    image: "/placeholder-5tixe.png",
  },
  {
    id: "3",
    title: "Mastering TypeScript for React Development",
    author: "Emily Rodriguez",
    readTime: "15 min read",
    image: "/placeholder-grs1k.png",
  },
]

const mockComments = [
  {
    id: "1",
    author: {
      name: "Alex Thompson",
      avatar: "/diverse-user-avatars.png",
      username: "alexthompson",
    },
    content:
      "Great insights on remote collaboration! I especially appreciate the section on building remote culture. We've implemented similar practices at our company with excellent results.",
    publishedAt: "2024-01-16",
    likes: 12,
  },
  {
    id: "2",
    author: {
      name: "Maria Garcia",
      avatar: "/diverse-user-avatars.png",
      username: "mariagarcia",
    },
    content:
      "The point about balancing synchronous and asynchronous communication really resonates. Finding that sweet spot has been crucial for our team's productivity.",
    publishedAt: "2024-01-16",
    likes: 8,
  },
]

export  default function PublicPostViewPage() {
    const { slug } = useParams<{ slug: string }>()
    console.log("Post slug:", slug) // You can use this slug to fetch the post data
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [showShareMenu, setShowShareMenu] = useState(false)

  const handleShare = (platform: string) => {
    const url = window.location.href
    const title = mockPost.title

    switch (platform) {
      case "twitter":
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`)
        break
      case "facebook":
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`)
        break
      case "copy":
        navigator.clipboard.writeText(url)
        // You could add a toast notification here
        break
    }
    setShowShareMenu(false)
  }

  return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          {/* Article Header */}
          <article className="mb-8">
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {mockPost.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{mockPost.title}</h1>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={mockPost.author.avatar || "/placeholder.svg"} alt={mockPost.author.name} />
                    <AvatarFallback>
                      {mockPost.author.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{mockPost.author.name}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-3 w-3" />
                      {mockPost.readTime} • {new Date(mockPost.publishedAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Button variant={isLiked ? "default" : "outline"} size="sm" onClick={() => setIsLiked(!isLiked)}>
                    <Heart className={`mr-2 h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
                    {mockPost.likes + (isLiked ? 1 : 0)}
                  </Button>

                  <Button
                    variant={isBookmarked ? "default" : "outline"}
                    size="sm"
                    onClick={() => setIsBookmarked(!isBookmarked)}
                  >
                    <Bookmark className={`h-4 w-4 ${isBookmarked ? "fill-current" : ""}`} />
                  </Button>

                  <div className="relative">
                    <Button variant="outline" size="sm" onClick={() => setShowShareMenu(!showShareMenu)}>
                      <Share2 className="h-4 w-4" />
                    </Button>

                    {showShareMenu && (
                      <div className="absolute right-0 top-full mt-2 w-48 bg-background border rounded-md shadow-lg z-10">
                        <div className="py-1">
                          <button
                            onClick={() => handleShare("twitter")}
                            className="flex items-center w-full px-4 py-2 text-sm hover:bg-muted"
                          >
                            <Twitter className="mr-2 h-4 w-4" />
                            Share on Twitter
                          </button>
                          <button
                            onClick={() => handleShare("facebook")}
                            className="flex items-center w-full px-4 py-2 text-sm hover:bg-muted"
                          >
                            <Facebook className="mr-2 h-4 w-4" />
                            Share on Facebook
                          </button>
                          <button
                            onClick={() => handleShare("copy")}
                            className="flex items-center w-full px-4 py-2 text-sm hover:bg-muted"
                          >
                            <Link2 className="mr-2 h-4 w-4" />
                            Copy Link
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            {mockPost.image && (
              <div className="aspect-video relative overflow-hidden rounded-lg mb-8">
                <img
                  src={mockPost.image || "/placeholder.svg"}
                  alt={mockPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Article Content */}
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: mockPost.content }} />
          </article>

          {/* Author Bio */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={mockPost.author.avatar || "/placeholder.svg"} alt={mockPost.author.name} />
                  <AvatarFallback>
                    {mockPost.author.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1">{mockPost.author.name}</h3>
                  <p className="text-muted-foreground mb-3">{mockPost.author.bio}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      {mockPost.author.followers.toLocaleString()} followers
                    </p>
                    <Button size="sm">Follow</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Comments Section */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Comments ({mockComments.length})</h3>
                <Button size="sm">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Add Comment
                </Button>
              </div>

              <div className="space-y-6">
                {mockComments.map((comment) => (
                  <div key={comment.id} className="flex space-x-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={comment.author.avatar || "/placeholder.svg"} alt={comment.author.name} />
                      <AvatarFallback>
                        {comment.author.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <p className="font-medium">{comment.author.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(comment.publishedAt).toLocaleDateString()}
                        </p>
                      </div>
                      <p className="text-muted-foreground mb-2">{comment.content}</p>
                      <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="sm">
                          <Heart className="mr-1 h-3 w-3" />
                          {comment.likes}
                        </Button>
                        <Button variant="ghost" size="sm">
                          Reply
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Related Posts */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6">Related Posts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((post) => (
                  <Link key={post.id} to={`/blog/${post.id}`} className="group">
                    <div className="flex space-x-4">
                      <div className="w-20 h-20 relative overflow-hidden rounded-lg flex-shrink-0">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium line-clamp-2 group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {post.author} • {post.readTime}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
  )
}
