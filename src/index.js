import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./Router";
import { GlobalStyled } from "./components/GlobalStyled";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyled />
      <Router />
    </QueryClientProvider>
  </React.StrictMode>
);
