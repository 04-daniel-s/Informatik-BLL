import React, { useEffect } from "react";
import { Button, Layout, Menu, MenuProps, Space } from "antd";
import { Login } from "./Login";
import { createBrowserRouter, Navigate, RouterProvider, useActionData } from "react-router-dom";
import { Register } from "./Register";
import "../index.css";
import { CalendarOutlined } from "@ant-design/icons";
import { SubjectList } from "./SubjectList";
import { Grades } from "./Grades";
import { useGetAuth } from "../util/hooks/useGetAuth";
import { useCookies } from "react-cookie";
import axios from "axios";

const { Header, Sider, Content } = Layout;

const router = createBrowserRouter([
  { path: "/year/subjects", element: <SubjectList title={"Schuljahr 2022"} /> },
  { path: "/login", element: <Login /> },
  { path: "/", element: <></> },
  { path: "/register", element: <Register /> },
  { path: "/test", element: <Grades /> },
  { path: "/*", element: <Navigate to="/" /> },
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

export const App = () => {
  const [cookies] = useCookies(["user"]);
  const { student, refetchStudent } = useGetAuth();

  useEffect(() => {
    cookies.user && (axios.defaults.headers.common["Authorization"] = `Bearer ${cookies.user}`);
    refetchStudent();
    console.log(student?.certificates);

    student?.certificates.forEach((c) => {
      console.log(c.name);
      console.log(c.subjects[0].name);
    });
  }, []);

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
        <Menu theme="light" mode="horizontal">
          <Menu.Item key="1">
            <a href="home">Home</a> {/*Prüfen ob eingeloggt ansonsten zu localhost:3000 weiterleiten*/}
          </Menu.Item>
        </Menu>
      </Header>
      <Layout>
        {student && (
          <Sider width={"14%"}>
            <Menu mode="inline" style={{ height: "100%" }} items={siderItems} />
          </Sider>
        )}

        <Content style={{ overflowY: "scroll", width: "100vw", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <RouterProvider router={router} />
        </Content>
      </Layout>
    </Layout>
  );
};
