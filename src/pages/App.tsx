import React from "react";
import { Button, Layout, Menu, MenuProps, Space } from "antd";
import { Login } from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Register } from "./Register";
import "../index.css";
import { Home } from "./Home";
import { CalendarOutlined } from "@ant-design/icons";
import { SubjectList } from "./SubjectList";
import { Grades } from "./Grades";

const { Header, Sider, Content } = Layout;

const router = createBrowserRouter([
  { path: "/year/subjects", element: <SubjectList title={"Schuljahr 2022"} /> },
  { path: "/login", element: <Login /> },
  { path: "/homepage", element: <Home /> },
  { path: "/register", element: <Register /> },
  { path: "/test", element: <Grades /> },
]);

const getSiderProps = [
  {
    key: "1",
    label: "Schuljahr 2021",
  },
  {
    key: "2",
    label: "Schuljahr 2022",
  },
  {
    key: "3",
    label: "Schuljahr 2023",
  },
];

const siderItems: MenuProps["items"] = getSiderProps.map((item) => {
  return {
    key: `${item.key}`,
    icon: <CalendarOutlined />,
    label: `${item.label}`,
    children: [
      { key: `${item.key}1`, label: "Noten" },
      { key: `${item.key}2`, label: "Schulfächer" },
    ],
  };
});

export const App = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Header style={{ backgroundColor: "white", borderBottom: "1px solid #f0f0f0" }}>
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
      </Header>
      <Layout>
        {
          /*PRÜFEN OB EINGELOGGT*/
          <Sider width={"14%"}>
            <Menu mode="inline" style={{ height: "100%" }} items={siderItems} />
          </Sider>
        }

        <Content style={{ overflowY: "scroll", width: "100vw", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <RouterProvider router={router} />
        </Content>
      </Layout>
    </Layout>
  );
};
