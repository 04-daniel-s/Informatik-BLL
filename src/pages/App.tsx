import React from "react";
import { Button, Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Login } from "./Login";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import { Register } from "./Register";

const router = createBrowserRouter([
  { path: "/", element: <>Das ist die Startseite</> },
  { path: "/login", element: <Login /> },
  { path: "/home", element: <>Das wird deine Homeseite</> },
  { path: "/register", element: <Register /> },
]);

export const App = () => {
  return (
    <Layout className="layout">
      <Layout.Header style={{ backgroundColor: "white", borderBottom: "1px solid #f0f0f0" }}>
        <Menu theme="light" mode="horizontal">
          <Menu.Item key="1">
            <a href="home">Home</a> {/*Prüfen ob eingeloggt ansonsten zu localhost:3000 weiterleiten*/}
          </Menu.Item>
        </Menu>
        <div style={{ position: "absolute", right: 30, top: 0 }}>
          <Button href="/login" size="large" icon={<UserOutlined />}>
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
