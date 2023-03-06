import React, { useState } from "react";
import "../styles/Subjects.css";
import { BookOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Col, Input, Modal, Row, Space } from "antd";
import { deleteSubject, editSubject } from "../../util/services/subjectService";
import { useGetCertificate } from "../../util/hooks/useGetCertificate";
import { useGetOrderedSubjects } from "../../util/hooks/useGetOrderedSubjects";
import { useGetWorstSubject } from "../../util/hooks/useGetWorstSubject";
import { useGetBestSubject } from "../../util/hooks/useGetBestSubject";

export const Subject = (props: { id: number; subject: string; major: boolean; certificateId: number }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(props.subject);
  const [major, setMajor] = useState(props.major);

  const { invalidateCertificate } = useGetCertificate();
  const { invalidateOrderedSubjects } = useGetOrderedSubjects(props.certificateId);
  const { invalidateWorstSubject } = useGetWorstSubject(props.certificateId);
  const { invalidateBestSubject } = useGetBestSubject(props.certificateId);

  const invalidate = () => {
    invalidateCertificate();
    invalidateOrderedSubjects();
    invalidateWorstSubject();
    invalidateBestSubject();
  };

  return (
    <>
      <Modal
        width={"30em"}
        title={`Bezeichnung ändern (${props.subject})`}
        destroyOnClose
        open={open}
        onCancel={() => setOpen(false)}
        onOk={() => {
          setOpen(false);
          editSubject(props.id, major, name).then(invalidate);
        }}
      >
        <Space direction="vertical" style={{ width: "100%" }} size={"large"}>
          <Input
            onChange={(r) => setName(r.target.value)}
            prefix={<BookOutlined />}
            className="input"
            type={"text"}
            placeholder="Die neue Bezeichnung hier eingeben"
          />
          <Checkbox onChange={(r) => setMajor(r.target.checked)} checked={major}>
            Leistungskurs
          </Checkbox>
        </Space>
      </Modal>
      <Card style={{ width: "95%" }}>
        <Row style={{ alignItems: "center" }}>
          <Col span={2}>
            <BookOutlined />
          </Col>
          <Col style={{ fontSize: "17px", overflowX: "hidden", textAlign: "left", paddingLeft: "1em" }} span={15}>
            <Space direction="vertical" size={1}>
              <h3>{props.subject}</h3>
              <div style={{ fontSize: "11px" }}>{props.major ? "Leistungskurs" : "Grundkurs"}</div>
            </Space>
          </Col>
          <Col span={3} offset={2}>
            <Button onClick={() => setOpen(!open)} icon={<EditOutlined />} />
          </Col>
          <Col span={2}>
            <Button
              onClick={() => {
                deleteSubject(props.id).then(invalidate);
              }}
              icon={<DeleteOutlined />}
            />
          </Col>
        </Row>
      </Card>
    </>
  );
};
