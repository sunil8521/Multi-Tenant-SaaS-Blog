import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Edit, Eye, Trash2, Calendar, MessageSquare } from "lucide-react"
import { toast } from "sonner"

export default function UserMyPostsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Introduction to Next.js 14",
      excerpt: "A comprehensive guide to the latest features in Next.js 14...",
      publishedAt: "Mar 15, 2024",
      views: 1250,
      comments: 24,
      status: "published",
    },
    {
      id: 2,
      title: "React Hooks Deep Dive",
      excerpt: "Understanding React hooks and how to use them effectively...",
      publishedAt: "Mar 10, 2024",
      views: 892,
      comments: 15,
      status: "published",
    },
    {
      id: 3,
      title: "Web Performance Optimization",
      excerpt: "Tips and tricks for optimizing your web application performance...",
      publishedAt: "Mar 5, 2024",
      views: 2100,
      comments: 42,
      status: "published",
    },
  ])

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleDeletePost = (id: number) => {
    setPosts(posts.filter((p) => p.id !== id))
    toast.success("Post deleted successfully")
  }

  return (
    <div className="min-h-screen flex justify-center px-6 py-10">
      <div className="w-full max-w-4xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">My Published Posts</h1>
            <p className="text-muted-foreground">Manage and view your published blog posts</p>
          </div>
          <Button asChild>
            <a href="/write">Write New Post</a>
          </Button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search your posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Posts Table */}
        {filteredPosts.length > 0 ? (
          <div className="space-y-4">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-2">
                      <h3 className="font-semibold text-lg">{post.title}</h3>
                      <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                      <div className="flex items-center gap-4 pt-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {post.publishedAt}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {post.views} views
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageSquare className="h-4 w-4" />
                          {post.comments} comments
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeletePost(post.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="pt-12 pb-12 text-center">
              <h3 className="font-semibold mb-2">No posts yet</h3>
              <p className="text-muted-foreground mb-4">Start writing your first blog post</p>
              <Button asChild>
                <a href="/blog/write">Write Your First Post</a>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
