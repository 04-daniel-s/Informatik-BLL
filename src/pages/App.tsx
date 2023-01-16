import React from "react";
import { Button, Layout, Menu, MenuProps } from "antd";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import "../index.css";
import { CalendarOutlined } from "@ant-design/icons";
import { Certificates } from "./Certificate";
import { useGetAuth } from "../util/hooks/useGetAuth";
import { SubjectList } from "./SubjectList";
import { LogoutOutlined } from "@ant-design/icons";
import { Login } from "./Login";
import { Register } from "./Register";

const { Header, Sider, Content } = Layout;

export const router = createBrowserRouter([
  { path: "/", element: <></> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/subjects", element: <SubjectList /> },
  { path: "/certificate/:id", element: <Certificates /> },
  { path: "*", element: <Navigate to="/" /> },
]);

export const App = () => {
  const { student, logout } = useGetAuth();

  const siderItems: MenuProps["items"] = student?.certificates.map((item) => {
    return {
      key: `${item.id}sider`,
      icon: <CalendarOutlined />,
      label: `${item.name}`,
      children: [
        { key: `${item.id}children1`, label: "Noten" },
        { key: `${item.id}children2`, label: "Schulfächer" },
      ],
    };
  });

  return (
    <Layout style={{ height: "100vh" }}>
      <Header style={{ backgroundColor: "white", borderBottom: "1px solid #f0f0f0" }}>
        <img className="center" height={"30px"} width="150px" src="https://i.ibb.co/8KzQ5Dz/Informatik.png" />
        <Menu theme="light" mode="horizontal"></Menu>
        <div style={{ position: "absolute", right: 24 }}>
          <Button icon={<LogoutOutlined />} onClick={logout}>
            Abmelden
          </Button>
        </div>
      </Header>
      <Layout>
        <Sider width={"14%"}>
          <Menu mode="inline" style={{ height: "100%" }} items={siderItems} />
        </Sider>
        <Content style={{ overflowY: "scroll", width: "100vw", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <RouterProvider router={router} />
        </Content>
      </Layout>
    </Layout>
  );
};
