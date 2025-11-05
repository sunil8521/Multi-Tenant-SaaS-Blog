import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  ArrowLeft,
  Bookmark,
  ChevronDown,
  ChevronUp,
  Clock,
  Facebook,
  Heart,
  Link2,
  Share2,
  Twitter
} from "lucide-react";
import { useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link, useParams } from "react-router-dom";
import remarkBreaks from "remark-breaks";
import { toast } from "sonner";
import {
  useCreateCommentReplyMutation,
  useCreatePostCommentMutation,
  useGetPostCommentsQuery,
  useGetSinglePostQuery,
  useLazyGetCommentRepliesQuery
} from "../../state/api/postApi";
import { useAppSelector } from "../../state/hook";
import BookmarkButton from "@/components/custom/BookmarkButton";

// Mock data for demonstration

// const relatedPosts = [
//   {
//     id: "2",
//     title: "Building Scalable Design Systems",
//     author: "Marcus Johnson",
//     readTime: "12 min read",
//     image: "/placeholder-5tixe.png",
//   },
//   {
//     id: "3",
//     title: "Mastering TypeScript for React Development",
//     author: "Emily Rodriguez",
//     readTime: "15 min read",
//     image: "/placeholder-grs1k.png",
//   },
// ];

export default function PublicPostViewPage() {
  // const [allComments, setAllComments] = useState([]);
  // const [page, setPage] = useState(1);
  // const [hasMore, setHasMore] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const commentInputRef =  useRef<HTMLInputElement|null>(null);
  const replayInputRef =  useRef<HTMLTextAreaElement|null>(null);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);

  const subDomain = useAppSelector((state) => state.auth.subDomain);
  const user = useAppSelector((state) => state.auth.user);
  const { slug } = useParams<{ slug: string }>();
  const {
    data: postData,
    error,
    isLoading,
  } = useGetSinglePostQuery({
    subDomain: subDomain!,
    slug: slug!,
  });
  const { data: commentsData, isLoading: commentsLoading } =
    useGetPostCommentsQuery(
      {
        postId: postData?.id as string, // depends on postData
        page: 1,
        limit: 10,
      },
      {
        skip: !postData?.id, // 👈 prevents firing until postData exists
      }
    );

    const [createPostComment, { isLoading: isCreatingComment ,isError: isCreatingCommentError}] = useCreatePostCommentMutation();
    const [createCommentReply, { isLoading: isCreatingReply ,isError: isCreatingReplyError}] = useCreateCommentReplyMutation();
    const [fetchReplies, { data: repliesData,isLoading: isFetchingReplies }] = useLazyGetCommentRepliesQuery();

  const { comments, pagination } = commentsData ?? {};
  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = postData?.title;

    switch (platform) {
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(title!)}&url=${encodeURIComponent(url)}`
        );
        break;
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        );
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        toast.success("Link copied to clipboard");
        break;
    }
    
    setShowShareMenu(false);
  };

 const handleAddComment = () => {
  if(!commentInputRef.current) return;
  const input = commentInputRef.current?.value.trim();

  // input empty
  if (!input) return;

  // no user logged in
  if (!user) {
    toast.error("You must be logged in to comment.");
    return;
  }

  // post not loaded yet
  if (!postData?.id) {
    toast.error("Post not found. Try refreshing.");
    return;
  }

  // missing author id
  if (!user.id) {
    toast.error("User ID is missing. Please re-login.");
    return;
  }

  createPostComment({
    postId: postData.id,
    data: {
      content: input,
      authorId: user.id,
    },
  })
    .unwrap()
    .then(() => {
      toast.success("Comment added!");
      commentInputRef.current!.value = "";
    })
    .catch((err) => {
      toast.error(err?.message || "Failed to add comment");
      console.error(err);
    });
};


  const handleAddReply = (commentId: string) => {
    if (!replayInputRef.current) return;
    const input = replayInputRef.current?.value.trim();
    if (!input) return;

     if (!user) {
    toast.error("You must be logged in to comment.");
    return;
  }

  // post not loaded yet
  if (!postData?.id) {
    toast.error("Post not found. Try refreshing.");
    return;
  }

  // missing author id
  if (!user.id) {
    toast.error("User ID is missing. Please re-login.");
    return;
  }


  createCommentReply({
    postId: postData.id,
    commentId: commentId,
    data: {
      content: input,
      authorId: user.id,
    },
  })
    .unwrap()
    .then(() => {
      toast.success("Comment added!");
      replayInputRef.current!.value = "";
    })
    .catch((err) => {
      toast.error(err?.message || "Failed to add comment");
      console.error(err);
    });
    // setReplyingTo(null);
  };
const toggleReplies = async (commentId: string) => {
  if(!postData?.id) return;
  setExpanded(prev => {
    const isOpen = prev[commentId];
  


    // If opening replies -> fetch only first time
    if (!isOpen) {
      fetchReplies({ postId: postData.id, commentId }); 
    }

    return { ...prev, [commentId]: !isOpen };
  });
};// TODO: fix fetching replies multiple times optimize this

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
              {postData?.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              {postData?.title}
            </h1>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage
                    src={postData?.author.image || "/placeholder.svg"}
                    alt={postData?.author.fullName}
                  />
                  <AvatarFallback>
                    {postData?.author.fullName
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{postData?.author.fullName}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="mr-1 h-3 w-3" />
                    {postData?.readTime} •{" "}
                    {postData?.publishedAt
                      ? new Date(postData.publishedAt).toLocaleDateString()
                      : "Unpublished"}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  variant={postData?.isLiked ? "default" : "outline"}
                  size="sm"
                  onClick={() => setIsLiked(!isLiked)}
                >
                  <Heart
                    className={`mr-2 h-4 w-4 ${isLiked ? "fill-current" : ""}`}
                  />
                  {Number(postData?.likeCount) + (isLiked ? 1 : 0)}
                </Button>``

                <BookmarkButton postId={postData?.id} isMarked={false} />

                <div className="relative">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowShareMenu(!showShareMenu)}
                  >
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
          {postData?.image && (
            <div className="aspect-video relative overflow-hidden rounded-lg mb-8">
              <img
                // src={`https://d1egxlljzt31im.cloudfront.net/${postData.image}`}
                src={`https://blogapp0x.s3.us-east-1.amazonaws.com/${postData.image}`}
                alt={postData.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Article Content */}
          <div className="prose prose-lg max-w-none wrap-break-words dark:prose-invert  min-h-[400px] mb-8">
            <ReactMarkdown remarkPlugins={[remarkBreaks]}>
              {postData?.content}
            </ReactMarkdown>
          </div>
        </article>

       

        {/* Comments Section */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">
                Comments ({comments?.length})
              </h3>
            </div>

            {/* Add Comment */}
            <div className="flex gap-2 mb-8">
              <Input
                placeholder="Add a comment..."
                ref={commentInputRef}
              />
              <Button disabled={isCreatingComment} onClick={handleAddComment}>Post</Button>
            </div>

            {/* Comment List */}
            <div className="space-y-6">
              {comments?.map((comment,index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0"
                >
                  {/* Avatar */}
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={comment.author.image!}
                      alt={comment.author.fullName}
                    />
                    <AvatarFallback>
                      {comment.author.fullName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  {/* Comment Body */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1 flex-wrap">
                      <p className="font-medium">{comment.author.fullName}</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(comment.createdAt).toLocaleDateString()}
                      </p>
                    </div>

                    <p className="text-muted-foreground mb-2">
                      {comment.content}
                    </p>

                 <div className="flex flex-wrap items-center space-x-4 mb-2">
                      {/* <Button variant="ghost" size="sm">
                        <Heart className="mr-1 h-3 w-3" />
                        {comment.likes}
                      </Button> */}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          setReplyingTo(
                            replyingTo === comment.id ? null : comment.id
                          )
                        }
                      >
                        Reply
                      </Button>
                      {comment._count.replies !== 0 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleReplies(comment.id)}
                        >
                          {expanded[comment.id] ? (
                            <>
                              Hide Replies{" "}
                              <ChevronUp className="ml-1 h-4 w-4" />
                            </>
                          ) : (
                            <>
                              Show Replies ({comment._count.replies})
                              <ChevronDown className="ml-1 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      )}
                    </div>

                    {/* Reply Box */}
                    {replyingTo === comment.id && (
                      <div className="mt-2 ml-0 sm:ml-4 flex flex-col sm:flex-row gap-2">
                        <Textarea
                          placeholder="Write a reply..."
                          ref={replayInputRef}
                          rows={2}
                        />
                        <Button 
                        disabled={isCreatingReply}
                        onClick={() => handleAddReply(comment.id)}
                        >
                          Send
                        </Button>
                      </div>
                    )}

                    {/* Replies */}
                    {expanded[comment.id] && (
                      <div className="ml-0 sm:ml-8 mt-4 space-y-4 border-l sm:pl-4 border-muted-foreground/20">
                        {repliesData?.replies.map((reply) => (
                          <div
                            key={reply.id}
                            className="flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0 ml-3  sm:ml-0"
                          >
                            <Avatar className="h-8 w-8">
                              <AvatarImage
                                src={reply.author.image!}
                                alt={reply.author.fullName}
                              />
                              <AvatarFallback>
                                {reply.author.fullName  
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 flex-wrap">
                                <p className="font-medium text-sm">
                                  {reply.author.fullName}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  {new Date(
                                    reply.createdAt
                                  ).toLocaleDateString()}
                                </p>
                              </div>
                              <p className="text-sm text-muted-foreground ">
                                {reply.content}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                  </div>
                </div>
              ))}
            </div>
            {/* {hasMore && (
              <div className="flex justify-center mt-6">
                <Button
                  variant="outline"
                  disabled={loading}
                  onClick={() =>
                    fetchComments(page + 1).then(() => setPage((p) => p + 1))
                  }
                >
                  {loading ? "Loading..." : "Show More Comments"}
                </Button>
              </div>
            )} */} 
            {/* TODO: implement pagination for comments */}
          </CardContent>
        </Card>

        {/* Related Posts */}
        {/* <Card>
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
        </Card> */}
      </div>
    </div>
  );
}



   