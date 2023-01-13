import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./pages/App";
import deDE from "antd/es/locale/de_DE";
import { ConfigProvider } from "antd";
import { QueryClient, QueryClientProvider } from "react-query";
import { CookiesProvider } from "react-cookie";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 1000 * 60 * 15 } },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <ConfigProvider
      locale={deDE}
      theme={{
        token: {
          fontFamily: "Quicksand",
          colorPrimary: "#837bd5",
        },
      }}
    >
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </ConfigProvider>
  </QueryClientProvider>
);
