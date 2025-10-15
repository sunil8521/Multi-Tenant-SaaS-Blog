import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { User } from "../slices/authSlice";

interface UserResponse {
  success: boolean;
  data: User|null;
}

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL as string, // ✅ Next.js env var
    credentials: "include",
  }),
  tagTypes: ["User"],


  endpoints: (builder) => ({
    
    fetchProfile: builder.query<UserResponse, void>({
      query: () => ({
        url: "/user/profile",
        method: "GET",
      }),
    }),
  }),
});

export const { useFetchProfileQuery } = authApi;
export default authApi;
