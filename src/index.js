import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  </React.StrictMode>
);
