import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@repo/ui/styles/globals.css";
import { Toaster } from "@repo/ui/components/sonner";
import { Provider } from "react-redux";
import store from "./state/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <Toaster richColors position="top-right" />
    </Provider>
  </StrictMode>
);
