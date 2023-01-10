import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./pages/App";
import deDE from "antd/es/locale/de_DE";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ConfigProvider
    locale={deDE}
    theme={{
      token: {
        fontFamily: "Quicksand",
        colorPrimary: "#837bd5",
      },
    }}
  >
    <App />
  </ConfigProvider>
);
