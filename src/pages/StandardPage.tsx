import { Spin, Layout } from "antd";
import { Header, Content } from "antd/es/layout/layout";
import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
import { useGetAuth } from "../util/hooks/useGetAuth";
import { App } from "./App";
import { Login } from "./Login";
import { Register } from "./Register";

export const StandardPage = () => {
  const [cookies] = useCookies(["user"]);
  const { student, refetchStudent, isUserLoading } = useGetAuth();
  const navigate = useNavigate();

  const [login, setLogin] = useState(true);

  useEffect(() => {
    if (!cookies.user) {
      delete axios.defaults.headers.common["Authorization"];
      navigate("/");
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
          <img alt="" className="center" height={"30px"} width="150px" src="https://i.ibb.co/8KzQ5Dz/Informatik.png" />
        </Header>
        <Layout>
          <Content style={{ overflowY: "scroll", width: "100vw", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {login ? <Login setLogin={setLogin} /> : <Register setLogin={setLogin} />}
          </Content>
        </Layout>
      </Layout>
    </>
  ) : (
    <App />
  );
};
