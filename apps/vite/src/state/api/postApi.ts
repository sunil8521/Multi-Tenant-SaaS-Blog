import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface PostImageResponse {
  success: boolean;
  url: string | null;
  filename: string;
}
interface PostImageRequest {
  filetype: string;
}
const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL as string,
    credentials: "include",
  }),
  //   tagTypes: ["User"],

  endpoints: (builder) => ({
    postImage: builder.mutation<PostImageResponse, PostImageRequest>({
      query: (data) => ({
        url: "/post/presign",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { usePostImageMutation } = postApi;
export default postApi;
