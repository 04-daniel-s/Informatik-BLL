import { Spin, Layout, Menu } from "antd";
import { Header, Content } from "antd/es/layout/layout";
import axios from "axios";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { RouterProvider } from "react-router";
import { useGetAuth } from "../util/hooks/useGetAuth";
import { App, router } from "./App";

export const StandardPage = () => {
  const [cookies] = useCookies(["user"]);
  const { student, refetchStudent, isUserLoading } = useGetAuth();

  useEffect(() => {
    if (!cookies.user) {
      delete axios.defaults.headers.common["Authorization"];
      return;
    }
    axios.defaults.headers.common["Authorization"] = `Bearer ${cookies.user}`;
    refetchStudent();
  }, []);

  if (isUserLoading) {
    return (
      <div style={{ display: "flex", height: "100vh", justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
        <Spin size="large" />
      </div>
    );
  }

  return !student ? (
    <>
      <Layout style={{ height: "100vh" }}>
        <Header style={{ backgroundColor: "white", borderBottom: "1px solid #f0f0f0" }}>
          <img className="center" height={"30px"} width="150px" src="https://i.ibb.co/8KzQ5Dz/Informatik.png" />
          <Menu theme="light" mode="horizontal"></Menu>
        </Header>
        <Layout>
          <Content style={{ overflowY: "scroll", width: "100vw", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <RouterProvider router={router} />
          </Content>
        </Layout>
      </Layout>
    </>
  ) : (
    <App />
  );
};
