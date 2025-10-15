import { useState } from "react"
import { Button } from "@repo/ui/components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui/components/card"
import { Badge } from "@repo/ui/components/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@repo/ui/components/avatar"
import { Skeleton } from "@repo/ui/components/skeleton"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@repo/ui/components/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@repo/ui/components/dropdown-menu"
import { FileText, Users, Eye, TrendingUp, Plus, MoreHorizontal, Edit, ExternalLink, Clock } from "lucide-react"
import {Link} from "react-router-dom"

// Mock data
const teamStats = {
  totalPosts: 24,
  totalUsers: 8,
  recentViews: 1247,
  engagementRate: 68,
}

const recentPosts = [
  {
    id: 1,
    title: "Getting Started with React Server Components",
    author: {
      name: "Sarah Chen",
      avatar: "/sarah-chen-avatar.jpg",
    },
    status: "published" as const,
    lastEdited: "2024-01-15T10:30:00Z",
    views: 342,
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Building Scalable APIs with Node.js",
    author: {
      name: "Marcus Johnson",
      avatar: "/marcus-johnson-avatar.jpg",
    },
    status: "draft" as const,
    lastEdited: "2024-01-14T16:45:00Z",
    views: 0,
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "Design Systems: A Complete Guide",
    author: {
      name: "Emily Rodriguez",
      avatar: "/emily-rodriguez-avatar.jpg",
    },
    status: "published" as const,
    lastEdited: "2024-01-13T09:15:00Z",
    views: 189,
    readTime: "12 min read",
  },
  {
    id: 4,
    title: "The Future of Web Development",
    author: {
      name: "John Doe",
      avatar: "/diverse-user-avatars.png",
    },
    status: "published" as const,
    lastEdited: "2024-01-12T14:20:00Z",
    views: 567,
    readTime: "6 min read",
  },
]

const teamMembers = [
  { name: "Sarah Chen", role: "Admin", avatar: "/sarah-chen-avatar.jpg" },
  { name: "Marcus Johnson", role: "Author", avatar: "/marcus-johnson-avatar.jpg" },
  { name: "Emily Rodriguez", role: "Editor", avatar: "/emily-rodriguez-avatar.jpg" },
]


export default function DashboardPage() {
  const [isLoading, setIsLoading] = useState(false)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))

    if (diffInHours < 24) {
      return `${diffInHours}h ago`
    } else {
      const diffInDays = Math.floor(diffInHours / 24)
      return `${diffInDays}d ago`
    }
  }

  const getStatusBadge = (status: "published" | "draft") => {
    return (
      <Badge variant={status === "published" ? "default" : "secondary"}>
        {status === "published" ? "Published" : "Draft"}
      </Badge>
    )
  }

  if (isLoading) {
    return (
      
        <div className="p-6 space-y-6">
          <div className="space-y-2">
            <Skeleton className="h-8 w-64" />
            <Skeleton className="h-4 w-96" />
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <Card key={i}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-4" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-8 w-16 mb-2" />
                  <Skeleton className="h-3 w-24" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      
    )
  }

  return (
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-balance">Welcome to Acme Corp Blog</h1>
          <p className="text-muted-foreground text-balance">
            Manage your team's content, track performance, and collaborate on amazing stories.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{teamStats.totalPosts}</div>
              <p className="text-xs text-muted-foreground">+3 from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Team Members</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{teamStats.totalUsers}</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Recent Views</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{teamStats.recentViews.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+12% from last week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Engagement</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{teamStats.engagementRate}%</div>
              <p className="text-xs text-muted-foreground">+5% from last week</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Recent Posts */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Recent Posts</CardTitle>
                  <CardDescription>Your team's latest content</CardDescription>
                </div>
                <Button asChild>
                  <Link to="/posts/new">
                    <Plus className="h-4 w-4 mr-2" />
                    New Post
                  </Link>
                </Button>
              </CardHeader>
              <CardContent>
                {recentPosts.length === 0 ? (
                  <div className="text-center py-12">
                    <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No posts yet</h3>
                    <p className="text-muted-foreground mb-4">Get started by creating your first blog post.</p>
                    <Button asChild>
                      <Link to="/posts/new">
                        <Plus className="h-4 w-4 mr-2" />
                        Create Your First Post
                      </Link>
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* Desktop Table */}
                    <div className="hidden md:block">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead>Author</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Last Edited</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {recentPosts.map((post) => (
                            <TableRow key={post.id}>
                              <TableCell>
                                <div className="space-y-1">
                                  <div className="font-medium text-balance">{post.title}</div>
                                  <div className="flex items-center text-xs text-muted-foreground">
                                    <Eye className="h-3 w-3 mr-1" />
                                    {post.views} views
                                    <span className="mx-2">•</span>
                                    <Clock className="h-3 w-3 mr-1" />
                                    {post.readTime}
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell>
                                <div className="flex items-center space-x-2">
                                  <Avatar className="h-6 w-6">
                                    <AvatarImage
                                      src={post.author.avatar || "/placeholder.svg"}
                                      alt={post.author.name}
                                    />
                                    <AvatarFallback>
                                      {post.author.name
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                    </AvatarFallback>
                                  </Avatar>
                                  <span className="text-sm">{post.author.name}</span>
                                </div>
                              </TableCell>
                              <TableCell>{getStatusBadge(post.status)}</TableCell>
                              <TableCell className="text-sm text-muted-foreground">
                                {formatDate(post.lastEdited)}
                              </TableCell>
                              <TableCell className="text-right">
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="sm">
                                      <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuItem asChild>
                                      <Link to={`/posts/${post.id}/edit`}>
                                        <Edit className="h-4 w-4 mr-2" />
                                        Edit
                                      </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                      <Link to={`/posts/${post.id}`}>
                                        <ExternalLink className="h-4 w-4 mr-2" />
                                        View
                                      </Link>
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>

                    {/* Mobile Cards */}
                    <div className="md:hidden space-y-4">
                      {recentPosts.map((post) => (
                        <Card key={post.id}>
                          <CardContent className="pt-4">
                            <div className="space-y-3">
                              <div className="flex items-start justify-between">
                                <h3 className="font-medium text-balance leading-tight">{post.title}</h3>
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="sm">
                                      <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuItem asChild>
                                      <Link to={`/posts/${post.id}/edit`}>
                                        <Edit className="h-4 w-4 mr-2" />
                                        Edit
                                      </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                      <Link to={`/posts/${post.id}`}>
                                        <ExternalLink className="h-4 w-4 mr-2" />
                                        View
                                      </Link>
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </div>

                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <Avatar className="h-6 w-6">
                                    <AvatarImage
                                      src={post.author.avatar || "/placeholder.svg"}
                                      alt={post.author.name}
                                    />
                                    <AvatarFallback>
                                      {post.author.name
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                    </AvatarFallback>
                                  </Avatar>
                                  <span className="text-sm text-muted-foreground">{post.author.name}</span>
                                </div>
                                {getStatusBadge(post.status)}
                              </div>

                              <div className="flex items-center justify-between text-xs text-muted-foreground">
                                <div className="flex items-center">
                                  <Eye className="h-3 w-3 mr-1" />
                                  {post.views} views
                                  <span className="mx-2">•</span>
                                  <Clock className="h-3 w-3 mr-1" />
                                  {post.readTime}
                                </div>
                                <span>{formatDate(post.lastEdited)}</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <div className="pt-4 border-t">
                      <Button variant="outline" asChild className="w-full bg-transparent">
                        <Link to="/posts">View All Posts</Link>
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            {/* <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button asChild className="w-full justify-start">
                  <Link to="/posts/new">
                    <Plus className="h-4 w-4 mr-2" />
                    Create New Post
                  </Link>
                </Button>
                <Button variant="outline" asChild className="w-full justify-start bg-transparent">
                  <Link to="/team">
                    <Users className="h-4 w-4 mr-2" />
                    Manage Team
                  </Link>
                </Button>
                <Button variant="outline" asChild className="w-full justify-start bg-transparent">
                  <Link to="/analytics">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    View Analytics
                  </Link>
                </Button>
              </CardContent>
            </Card> */}

            {/* Team Members */}
            {/* <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Team Members</CardTitle>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/team">
                    <Users className="h-4 w-4 mr-2" />
                    Manage
                  </Link>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                        <AvatarFallback>
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{member.name}</p>
                        <p className="text-xs text-muted-foreground">{member.role}</p>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" size="sm" className="w-full mt-3 bg-transparent">
                    <Plus className="h-4 w-4 mr-2" />
                    Invite Member
                  </Button>
                </div>
              </CardContent>
            </Card> */}

            {/* Recent Activity */}
            {/* <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-muted-foreground">Sarah published a new post</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-muted-foreground">Marcus joined the team</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-muted-foreground">Emily updated team settings</span>
                  </div>
                </div>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </div>
  )
}
