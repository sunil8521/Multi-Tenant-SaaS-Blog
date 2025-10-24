import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import authApi from "./api/userApi";
import postApi from "./api/postApi";
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
  },

  middleware: (m) => m().concat(authApi.middleware, postApi.middleware),
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
