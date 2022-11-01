import React from "react";
import { Button, Layout, Menu, Space } from "antd";
import { Login } from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Register } from "./Register";
import "../index.css";
import { Home } from "./Home";
import { Subjects } from "./Subjects";

const router = createBrowserRouter([
  { path: "/", element: <Subjects /> },
  { path: "/login", element: <Login /> },
  { path: "/home", element: <Home /> },
  { path: "/register", element: <Register /> },
]);

export const App = () => {
  return (
    <Layout className="layout">
      <Layout.Header style={{ backgroundColor: "white", borderBottom: "1px solid #f0f0f0" }}>
        <img className="center" height={"30px"} width="150px" src="https://i.ibb.co/8KzQ5Dz/Informatik.png" />
        <Menu theme="light" mode="horizontal">
          <Menu.Item key="1">
            <a href="home">Home</a> {/*Prüfen ob eingeloggt ansonsten zu localhost:3000 weiterleiten*/}
          </Menu.Item>
        </Menu>
        <div style={{ position: "absolute", right: 50, top: 0 }}>
          <Button style={{ width: "120px", textAlign: "center" }} href="/login" size="large">
            Login
          </Button>
        </div>
        <Layout.Content style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <RouterProvider router={router} />
        </Layout.Content>
      </Layout.Header>
    </Layout>
  );
};
