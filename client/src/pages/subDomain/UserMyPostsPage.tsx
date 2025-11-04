import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Edit, Eye, Trash2, Calendar, MessageSquare,Heart } from "lucide-react"
import { toast } from "sonner"
import {useGetMyPostQuery} from "@/state/api/postApi"
import {Link} from 'react-router-dom';
export default function UserMyPostsPage() {
  const { data: myPosts, isLoading, error } = useGetMyPostQuery()
  

 
const Format=(dateString:string):string=>{
  return new Date(dateString).toLocaleDateString("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});
}
  const handleDeletePost = (id: number) => {
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
            <Link to="/write">Write New Post</Link>
          </Button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search your posts..."
            // value={searchQuery}
            // onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Posts Table */}
        {(myPosts?.posts.length ?? 0) > 0 ? (
          <div className="space-y-4">
            {myPosts?.posts.map((post) => (
              <Card key={post.id} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-2">
                      <h3 className="font-semibold text-lg">{post.title}</h3>
                      <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                      <div className="flex items-center gap-4 pt-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {Format(post.createdAt)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          {post._count.likes} likes
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageSquare className="h-4 w-4" />
                          {post._count.comments} comments
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
                        // onClick={() => handleDeletePost(post.id)}
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
                <Link to="/write">Write Your First Post</Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
