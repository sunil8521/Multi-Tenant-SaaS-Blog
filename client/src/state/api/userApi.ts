import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { User } from "../slices/authSlice";

interface UserResponse {
  success: boolean;
  data: User | null;
}
interface InviteRequest {
  email: string;
  role: string;
  message?: string;
}
interface InviteResponse {
  success: boolean;
  message?: string;
}
interface VerifyInviteResponse {
  success: boolean;
  message?: string;
  signup: boolean;
  data: {
    email: string;
    teamId: string;
    role: string;
  };
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

    sendInvite: builder.mutation<InviteResponse, InviteRequest>({
      query: (data: InviteRequest) => ({
        url: "/user/invite",
        method: "POST",
        body: data,
      }),
    }),

    verifyInvite: builder.mutation<VerifyInviteResponse, { token: string }>({
      query: (data: { token: string }) => ({
        url: "/user/verify",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useFetchProfileQuery,
  useSendInviteMutation,
  useVerifyInviteMutation,
} = authApi;
export default authApi;
