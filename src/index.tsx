import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import deDE from "antd/es/locale/de_DE";
import { ConfigProvider } from "antd";
import { QueryClient, QueryClientProvider } from "react-query";
import { CookiesProvider } from "react-cookie";
import { ReactQueryDevtools } from "react-query/devtools";
import { StandardPage } from "./pages/StandardPage";

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
        <StandardPage />
      </CookiesProvider>
      {process.env.NODE_ENV !== "production" && <ReactQueryDevtools initialIsOpen={false} />}
    </ConfigProvider>
  </QueryClientProvider>
);
