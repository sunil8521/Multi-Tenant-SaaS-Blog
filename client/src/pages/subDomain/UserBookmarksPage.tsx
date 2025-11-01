import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bookmark, Search, Trash2, ExternalLink } from "lucide-react"
import { toast } from "sonner"

export default function UserBookmarksPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [bookmarks, setBookmarks] = useState([
    {
      id: 1,
      title: "Getting Started with React 19",
      author: "Sarah Chen",
      authorAvatar: "/sarah-chen-avatar.jpg",
      excerpt: "Learn the fundamentals of React 19 and its new features...",
      savedAt: "2 days ago",
      category: "React",
    },
    {
      id: 2,
      title: "Advanced TypeScript Patterns",
      author: "Marcus Johnson",
      authorAvatar: "/marcus-johnson-avatar.jpg",
      excerpt: "Master advanced TypeScript patterns for scalable applications...",
      savedAt: "1 week ago",
      category: "TypeScript",
    },
    {
      id: 3,
      title: "Building Scalable APIs",
      author: "Emily Rodriguez",
      authorAvatar: "/emily-rodriguez-avatar.jpg",
      excerpt: "Best practices for designing and building scalable REST APIs...",
      savedAt: "2 weeks ago",
      category: "Backend",
    },
  ])

  const filteredBookmarks = bookmarks.filter(
    (bookmark) =>
      bookmark.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bookmark.author.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleRemoveBookmark = (id: number) => {
    setBookmarks(bookmarks.filter((b) => b.id !== id))
    toast.success("Bookmark removed")
  }

  return (
<div className="min-h-screen flex justify-center p-6">
  <div className="w-full max-w-3xl space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">My Bookmarks</h1>
          <p className="text-muted-foreground">Save and organize your favorite blog posts</p>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search bookmarks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Bookmarks List */}
        {filteredBookmarks.length > 0 ? (
          <div className="space-y-4">
            {filteredBookmarks.map((bookmark) => (
              <Card key={bookmark.id} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-lg hover:text-primary cursor-pointer">{bookmark.title}</h3>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                          {bookmark.category}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{bookmark.excerpt}</p>
                      <div className="flex items-center gap-2 pt-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={bookmark.authorAvatar || "/placeholder.svg"} alt={bookmark.author} />
                          <AvatarFallback>{bookmark.author.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-muted-foreground">
                          {bookmark.author} • Saved {bookmark.savedAt}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemoveBookmark(bookmark.id)}
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
              <Bookmark className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h3 className="font-semibold mb-2">No bookmarks yet</h3>
              <p className="text-muted-foreground">Start bookmarking posts to save them for later</p>
            </CardContent>
          </Card>
        )}
  </div>
</div>
  )
}
