import { Button, Divider, PageHeader, Space } from "antd";
import React from "react";
import { useNavigate } from "react-router";
import { Container } from "./components/Container";
import { Subject } from "./components/Subject";

export const Subjects = () => {
  const nav = useNavigate();

  return (
    <Container width={500}>
      <PageHeader
        style={{ left: "-20px", top: "-20px", marginBottom: "-20px" }}
        ghost={false}
        title="Back"
        onBack={() => {
          nav("home");
        }}
      />
      <h2>Schulfächer</h2>
      <Divider />
      <Space direction="vertical" size={"small"} style={{ width: "100%" }}>
        <div className="list">
          <Subject subject="Mathematik" />
          <Subject subject="Mathematik" />
          <Subject subject="Mathematik" />
          <Subject subject="Mathematik" />
          <Subject subject="Mathematik" />
          <Subject subject="Mathematik" />
          <Subject subject="Mathematik" />
        </div>
        <Button type="primary" className="large-button">
          Hinzufügen {/*Show modal*/}
        </Button>
      </Space>
    </Container>
  );
};
