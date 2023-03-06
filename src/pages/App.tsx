import React from "react";
import { Button, Layout, Menu, MenuProps, Typography } from "antd";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "../index.css";
import { Certificates } from "./Certificate";
import { useGetAuth } from "../util/hooks/useGetAuth";
import { SubjectList } from "./SubjectList";
import { LogoutOutlined, CalendarOutlined } from "@ant-design/icons";
import { CreateCertificateModal } from "./components/CreateCertificateModal";
import { EditCertificateModal } from "./components/EditCertificateModal";

const { Header, Sider, Content } = Layout;

export const App = () => {
  const { student, logout } = useGetAuth();
  const navigate = useNavigate();

  const siderItems: MenuProps["items"] = student?.certificates.map((item) => {
    return {
      key: `${item.id}sider`,
      icon: <CalendarOutlined />,
      label: `${item.name}`,
      onClick: (r) => {
        r.key.substring(0, 1) === "1" ? navigate(`/certificate/${item.id}`) : navigate(`/subjects/${item.id}`);
      },
      children: [
        {
          key: `1children${item.id}`,
          label: "Noten",
        },
        { key: `2children${item.id}`, label: "Schulfächer" },
      ],
    };
  });

  return (
    <Layout style={{ height: "100vh" }}>
      <Header style={{ backgroundColor: "white", borderBottom: "1px solid #f0f0f0" }}>
        <img alt="" className="center" height={"30px"} width="150px" src="https://i.ibb.co/8KzQ5Dz/Informatik.png" />
        <Menu theme="light" mode="horizontal">
          <div style={{ fontSize: "1.5em", fontWeight: "500" }}>Willkommen {student?.name}</div>
          <div style={{ position: "absolute", right: 24 }}>
            <Button icon={<LogoutOutlined />} onClick={logout}>
              Abmelden
            </Button>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider width={"14%"}>
          <Menu mode="inline" style={{ height: "100%" }} items={siderItems} />
          <CreateCertificateModal />
          <EditCertificateModal />
        </Sider>
        <Content
          style={{
            overflowY: "scroll",
            width: "100vw",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
          }}
        >
          <Routes>
            <Route path="/" element={<></>} />
            <Route path="/certificate/:id" element={<Certificates />} />
            <Route path="/subjects/:id" element={<SubjectList />} />
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};
