import Loading from "@/components/custom/Loading";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Bookmark,
  Clock,
  Heart,
  MessageCircle,
  PenTool,
  Search
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { Post } from "../../state/api/postApi";
import {
  useGetAllPostQuery,
  useGetAllTagsQuery,
} from "../../state/api/postApi";
import { useAppSelector } from "../../state/hook";
import BookmarkButton from "@/components/custom/BookmarkButton";

function PublicBlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(searchQuery);

  const [selectedTag, setSelectedTag] = useState("all");
  const subDomain = useAppSelector((state) => state.auth.subDomain);

  const { data, isLoading, isFetching, error } = useGetAllPostQuery({
    page: 1,
    limit: 10,
    subDomain: subDomain!,
    search: debouncedSearch,
    tag: selectedTag === "all" ? "" : selectedTag,
  });
  const { pagination, posts } = data ?? {};

  const {
    data: tagsData,
    isLoading: isLoadingTags,
    error: errorTags,
  } = useGetAllTagsQuery({ subDomain: subDomain! });
  const { tags, trendingTags } = tagsData ?? {};

  // const [sortBy, setSortBy] = useState("latest");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 900);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleBookmark = (postId: string) => {

    console.log("Bookmark clicked for post:", postId);

  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
          Discover Amazing Stories
        </h1>
        <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
          Explore insights, tutorials, and stories from developers, designers,
          and teams around the world.
        </p>
        <Button size="lg" asChild>
          <Link to="/write">
            <PenTool className="mr-2 h-5 w-5" />
            Start Writing
          </Link>
        </Button>
      </div>

      {/* Featured Posts */}
      {/* {featuredPosts.length > 0 && (
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
        )} */}
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
                {tags?.map((tag) => (
                  <SelectItem key={tag.name} value={tag.name}>
                    {tag.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {/* <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-32">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">Latest</SelectItem>
                <SelectItem value="popular">Popular</SelectItem>
                <SelectItem value="trending">Trending</SelectItem>
              </SelectContent>
            </Select> */}
          </div>

          {/* Posts Grid */}

          {isLoading || isFetching ? (
            <Loading message="Fetching posts..." fullScreen />
          ) : (
            <>
              <div className="space-y-8">
                {posts?.map((post: Post, index: number) => (
                  <Card
                    key={index}
                    className="overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-0">
                      <div className="flex flex-col sm:flex-row">
                        {post.image && (
                          <div className="sm:w-48 aspect-video sm:aspect-square relative overflow-hidden">
                            <img
                              src={
                                post.image ?
                                `https://blogapp0x.s3.us-east-1.amazonaws.com/${post.image}` :
                                "https://placehold.co/600x400?text=Image\n+Not+Found"
                              }
                              alt={post.title}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}
                        <div className="flex-1 p-6">
                          <div className="flex flex-wrap gap-2 mb-3">
                            {post.tags.slice(0, 3).map((tag) => (
                              <Badge
                                key={tag}
                                variant="secondary"
                                className="text-xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <h3 className="text-xl font-bold mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                          </h3>
                          <p className="text-muted-foreground mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <Avatar className="h-8 w-8">
                                <AvatarImage
                                  src={post.author.image!}
                                  alt={post.author.fullName}
                                />
                                <AvatarFallback>
                                  {post.author.fullName
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="text-sm font-medium">
                                  {post.author.fullName}
                                </p>
                                <div className="flex items-center text-xs text-muted-foreground">
                                  <Clock className="mr-1 h-3 w-3" />
                                  {post.readTime} •{" "}
                                  {new Date(
                                    post.publishedAt
                                  ).toLocaleDateString()}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <Heart className="mr-1 h-4 w-4" />
                                {post.likeCount}
                              </div>
                              <div className="flex items-center">
                                <MessageCircle className="mr-1 h-4 w-4" />
                                {post.commentCount}
                              </div>
                              <BookmarkButton postId={post.id} isMarked={false} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {posts?.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">
                    No posts found matching your criteria.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedTag("all");
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Trending Tags */}
          {(trendingTags?.length ?? 0) > 0 && (
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold mb-4">Trending Tags</h3>
              <div className="flex flex-wrap gap-2">
                {trendingTags?.map((tag, i) => (
                  <Badge
                    key={i}
                    variant={selectedTag === tag.name ? "default" : "secondary"}
                    className="cursor-pointer hover:bg-blue-100 transition-colors"
                    onClick={() => setSelectedTag(tag.name)}
                  >
                    {tag.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>)}

          {/* Newsletter */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold mb-2">Stay Updated</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get the latest posts delivered to your inbox.
              </p>
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
  );
}
export default PublicBlogPage;
