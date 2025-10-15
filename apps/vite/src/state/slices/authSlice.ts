import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
  emailVerified?: boolean;
  jobTitle?: string | null
  createdAt: string|Date;
  updatedAt: string|Date;
  role:string;
}
const initialState: {
  user: User | null;
  isLoading: boolean;
  isValidTeam: boolean;
  subDomain: string | null;
} = {
  user: null,
  isLoading: true,
  isValidTeam: false,
  subDomain: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser: (state, actions: PayloadAction<User | null>) => {
      state.user = actions.payload;
      state.isLoading = false;
    },
    removeUser: (state) => {
      state.user = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setSubDomain: (state, action: PayloadAction<string | null>) => {
      state.subDomain = action.payload;
    },
    setIsValidTeam: (state, action: PayloadAction<boolean>) => {
      state.isValidTeam = action.payload;
    },
  },
});

export default authSlice;

export const { addUser, removeUser, setIsValidTeam, setLoading, setSubDomain } =
  authSlice.actions;
