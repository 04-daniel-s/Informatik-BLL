import { Button, Divider, Space } from "antd";
import React from "react";
import "../pages/styles/Subjects.css";
import { Container } from "./components/Container";
import { Subject } from "./components/Subject";

const subjects = [{ id: 0, title: "Mathematik" }];

export const SubjectList = () => {
  const title = "Schuljahr 2022";
  return (
    <Container width={500}>
      <h2>{title}</h2>
      <Divider />
      <Space direction="vertical" size={"small"} style={{ width: "100%" }}>
        <div className="list">
          {subjects.map((subject) => {
            return (
              <div style={{ marginBottom: "2%" }}>
                <Subject id={subject.id} subject={subject.title} />
              </div>
            );
          })}
        </div>
        <Divider />
        <Button type="primary" className="large-button">
          Hinzufügen {/*TODO: Dummy erzeugen*/}
        </Button>
      </Space>
    </Container>
  );
};
