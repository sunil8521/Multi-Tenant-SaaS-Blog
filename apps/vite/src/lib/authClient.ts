import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "http://api.blogapp.tech:3000", // your backend URL

});