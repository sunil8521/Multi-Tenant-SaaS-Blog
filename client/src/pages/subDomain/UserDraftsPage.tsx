import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Edit, Trash2, Calendar, FileText } from "lucide-react"
import { toast } from "sonner"

export default function UserDraftsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [drafts, setDrafts] = useState([
    {
      id: 1,
      title: "Advanced CSS Grid Techniques",
      excerpt: "Master CSS Grid with practical examples and use cases...",
      lastSaved: "Today at 2:30 PM",
      status: "draft",
    },
    {
      id: 2,
      title: "Building Real-time Applications",
      excerpt: "Learn how to build real-time applications with WebSockets...",
      lastSaved: "Yesterday at 5:15 PM",
      status: "draft",
    },
    {
      id: 3,
      title: "Testing Best Practices",
      excerpt: "Comprehensive guide to testing strategies and tools...",
      lastSaved: "2 days ago",
      status: "draft",
    },
  ])

  const filteredDrafts = drafts.filter(
    (draft) =>
      draft.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      draft.excerpt.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleDeleteDraft = (id: number) => {
    setDrafts(drafts.filter((d) => d.id !== id))
    toast.success("Draft deleted successfully")
  }

  return (
<div className="min-h-screen flex justify-center p-6">
  <div className="w-full max-w-3xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">My Drafts</h1>
            <p className="text-muted-foreground">Continue editing your draft posts</p>
          </div>
          <Button asChild>
            <a href="/blog/write">Create New Draft</a>
          </Button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search drafts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Drafts List */}
        {filteredDrafts.length > 0 ? (
          <div className="space-y-4">
            {filteredDrafts.map((draft) => (
              <Card key={draft.id} className="hover:shadow-md transition-shadow border-amber-200 dark:border-amber-800">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                        <h3 className="font-semibold text-lg">{draft.title}</h3>
                        <span className="text-xs bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 px-2 py-1 rounded">
                          Draft
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{draft.excerpt}</p>
                      <div className="flex items-center gap-1 pt-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        Last saved: {draft.lastSaved}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4 mr-2" />
                        Continue Editing
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteDraft(draft.id)}
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
              <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h3 className="font-semibold mb-2">No drafts yet</h3>
              <p className="text-muted-foreground mb-4">Start writing a new post and save it as a draft</p>
              <Button asChild>
                <a href="/blog/write">Create New Draft</a>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
      </div>
  )
}
