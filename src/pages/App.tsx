import React from "react";
import { Button, Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Login } from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <>Das ist die Startseite</> },
  { path: "/login", element: <Login /> },
  { path: "/home", element: <>Das wird deine Homeseite</> },
  { path: "/register", element: <>Hier wirst du dich registrieren</> },
]);

export const App = () => {
  return (
    <Layout className="layout">
      <Layout.Header style={{ backgroundColor: "white", borderBottom: "1px solid #f0f0f0" }}>
        <Menu theme="light" mode="horizontal">
          <Menu.Item key="1">Home</Menu.Item>
        </Menu>
        <div style={{ position: "absolute", right: 30, top: 0 }}>
          <Button size="large" icon={<UserOutlined />}>
            Login
          </Button>
        </div>
        <Layout.Content>
          <RouterProvider router={router} />
        </Layout.Content>
      </Layout.Header>
    </Layout>
  );
};
