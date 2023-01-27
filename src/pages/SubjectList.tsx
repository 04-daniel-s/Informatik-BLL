import { Button, Divider, Space, Spin } from "antd";
import React from "react";
import { Navigate, useParams } from "react-router-dom";
import "../pages/styles/Subjects.css";
import { useGetCertificate } from "../util/hooks/useGetCertificate";
import { createSubject } from "../util/services/subjectService";
import { Container } from "./components/Container";
import { Subject } from "./components/Subject";

export const SubjectList = () => {
  const { id } = useParams();
  const { certificate, invalidateCertificate, isFetching } = useGetCertificate(parseInt(id as string));
  if (!id) return <Navigate to={"/"} />;
  if (!certificate || certificate === undefined) return <Spin size="large" />;

  return (
    <Container width={500}>
      <h2>{certificate.name}</h2>
      <Divider />
      <Space direction="vertical" size={"small"} style={{ width: "100%" }}>
        <div className="list">
          {certificate &&
            certificate.subjects.map((subject) => {
              return (
                <div style={{ marginBottom: "2%" }}>
                  <Subject id={subject.id} subject={subject.name} certificateId={parseInt(id)} />
                </div>
              );
            })}
        </div>
        <Divider />
        <Button
          onClick={() => {
            createSubject(parseInt(id)).then((r) => invalidateCertificate());
          }}
          loading={isFetching}
          type="primary"
          className="large-button"
        >
          Hinzufügen {/*TODO: Dummy erzeugen*/}
        </Button>
      </Space>
    </Container>
  );
};
