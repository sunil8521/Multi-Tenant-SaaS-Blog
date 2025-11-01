import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//------------------------------
interface PostImageResponse {
  success: boolean;
  url: string | null;
  filename: string;
}
interface PostImageRequest {
  filetype: string;
}
//------------------------------
interface CreatePostRequest {
  title: string;
  excerpt: string;
  content: string;
  tags: string[];
  coverImage: string | null;
}
interface CreatePostResponse {
  success: boolean;
  message: string;
}

//------------------------------
interface QueryParams {
  page?: number;
  limit?: number;
  search?: string;
  tag?: string;
}
export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  image: string | null;
  readTime: string;
  publishedAt: string;
  featured: boolean;
  author: {
    id: string;
    fullName: string;
    image: string | null;
    email: string;
  };
  commentCount: number;
  likeCount: number;
  tags: string[];
}

interface GetAllPostResponse {
  posts: Post[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}
interface GetAllPostRequest extends QueryParams {
  subDomain: string;
}
//------------------------------

interface GetAllTagsRequest {
  subDomain: string;
}
interface GetAllTagsResponse {
  success: boolean;
  tags: { name: string; usageCount: number }[];
  trendingTags: { name: string; usageCount: number }[];
}
//-----------
interface GetSinglePostResponse extends Post {
  isLiked: boolean;
  isBookmarked: boolean;
}
interface GetSinglePostRequest {
  subDomain: string;
  slug: string;
}
//------------------------------
interface GetPostCommentsRequest {
  postId: string;
  page?: number;
  limit?: number;
}
interface CommentType {
  id: string;
  content: string;
  createdAt: string;
  author: {
    fullName: string;
    image: string | null;
  };
  _count: {
    replies: number;
  };
}
interface GetPostCommentsResponse {
  success: boolean;
  comments: CommentType[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    hasMore: boolean;
  };
}
//------------------------------
interface CreatePostCommentRequest {
  postId: string;
  data: {
    content: string;
    authorId: string;
  };
}
interface CreatePostCommentResponse {
  success: boolean;
  message: string;
}
//------------------------------
interface CreateCommentReplyRequest {
  postId: string;
  commentId: string;
  data: {
    content: string;
    authorId: string;
  };
}
interface CreateCommentReplyResponse {
  success: boolean;
  message: string;
}
//------------------------------

interface GetReplyCommentsRequest {
  postId: string;
  commentId: string;

}
interface GetReplyCommentsResponse {
  success: boolean;
  replies: CommentType[];
}
//------------------------------

interface myPosts{
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  image: string | null;
  createdAt: string;
  updatedAt: string;
  _count: {
    likes: number;
    comments: number;
  };
}
interface GetMyPostResponse {
  success: boolean;
  message: string;
  posts: myPosts[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL as string,
    credentials: "include",
  }),
 tagTypes: [
    "Posts",
    "SinglePost",
    "Tags",
    "Comments",
    "Replies",
    "MyPosts"
  ],
  endpoints: (builder) => ({
    postImage: builder.mutation<PostImageResponse, PostImageRequest>({
      query: (data) => ({
        url: "/post/presign",
        method: "POST",
        body: data,
      }),
    }),
    createPost: builder.mutation<CreatePostResponse, CreatePostRequest>({
      query: (data) => ({
        url: "/post/create",
        method: "POST",
        body: data,
      }),
       invalidatesTags: [
        { type: "Posts", id: "LIST" },
        { type: "MyPosts", id: "LIST" }
      ]
    }),
    getAllPost: builder.query<GetAllPostResponse, GetAllPostRequest>({
      query: ({ page, limit, subDomain, search, tag }) => {
        const data: QueryParams = {};
        if (page) data["page"] = page;
        if (limit) data["limit"] = limit;
        if (search) data["search"] = search;
        if (tag) data["tag"] = tag;

        const queryString = new URLSearchParams(
          data as Record<string, string>
        ).toString();
        return {
          url: `/post/getall/${subDomain}?${queryString}`,
          method: "GET",
        };
      },
            providesTags: [{ type: "Posts", id: "LIST" }]

    }),
    getSinglePost: builder.query<GetSinglePostResponse, GetSinglePostRequest>({
      query: ({ subDomain, slug }) => ({
        url: `/post/get/${subDomain}/${slug}`,
        method: "GET",
      }),
            providesTags: (_r, _e, { slug }) => [{ type: "SinglePost", id: slug }]

    }),

    getAllTags: builder.query<GetAllTagsResponse, GetAllTagsRequest>({
      query: ({ subDomain }) => ({
        url: `/post/get-tags/${subDomain}`,
        method: "GET",
      }),
            providesTags: [{ type: "Tags", id: "LIST" }]

    }),
    getPostComments: builder.query<GetPostCommentsResponse,GetPostCommentsRequest>({
      query: ({ postId, page, limit }) => {
           const data: QueryParams = {};
        if (page) data["page"] = page;
        if (limit) data["limit"] = limit;
      
        const queryString = new URLSearchParams(
          data as Record<string, string>
        ).toString();
        return {
          url: `/post/get-comments/${postId}?${queryString}`,
          method: "GET",
        };
      },
       providesTags: (_r, _e, { postId }) => [
        { type: "Comments", id: postId }
      ]
    }),
    getCommentReplies: builder.query<GetReplyCommentsResponse,GetReplyCommentsRequest>({
      query: ({ postId, commentId }) => ({
        url: `/post/get-replies/${postId}/${commentId}`,
        method: "GET",
      }),
       providesTags: (_r, _e, { commentId }) => [
        { type: "Replies", id: commentId }
      ]
    }),

    createPostComment: builder.mutation<CreatePostCommentResponse, CreatePostCommentRequest>({
          query: ({ postId, data }) => ({
        url: `/post/add-comments/${postId}`,
        method: "POST",
        body: data,
      }),
       invalidatesTags: (_r, _e, { postId }) => [
        { type: "Comments", id: postId }
      ]
    }),
    createCommentReply: builder.mutation<CreateCommentReplyResponse, CreateCommentReplyRequest>({
      query: ({ postId, commentId, data }) => ({
        url: `/post/add-replies/${postId}/${commentId}`,
        method: "POST",
        body: data
      }),
       invalidatesTags: (_r, _e, { commentId }) => [
        { type: "Replies", id: commentId }
      ]
     }),
     GetMyPost: builder.query<GetMyPostResponse, void>({
      query: () => ({
        url: `/post/get-my`,
        method: "GET",
      }),
            providesTags: [{ type: "MyPosts", id: "LIST" }]

     }),
     



  }),
});

export const {
  usePostImageMutation,
  useCreatePostMutation,
  useGetAllPostQuery,
  useGetAllTagsQuery,
  useGetSinglePostQuery,
  useGetPostCommentsQuery,
  useCreatePostCommentMutation,
  useCreateCommentReplyMutation,
  useLazyGetCommentRepliesQuery,
  useGetMyPostQuery
} = postApi;
export default postApi;
