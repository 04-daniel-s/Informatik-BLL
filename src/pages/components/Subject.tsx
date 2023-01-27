import React, { useState } from "react";
import "../styles/Subjects.css";
import { BookOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Col, Input, Modal, Row, Space } from "antd";
import { deleteSubject } from "../../util/services/subjectService";
import { useGetCertificate } from "../../util/hooks/useGetCertificate";

export const Subject = (props: { id: number; subject: string; major: boolean; certificateId: number }) => {
  const [open, setOpen] = useState(false);
  const { invalidateCertificate } = useGetCertificate();

  return (
    <>
      <Modal
        width={"30em"}
        title={`Bezeichnung ändern (${props.subject})`}
        destroyOnClose
        open={open}
        onCancel={() => setOpen(false)}
        onOk={() => setOpen(false)}
      >
        <Space direction="vertical" style={{ width: "100%" }} size={"large"}>
          <Input prefix={<BookOutlined />} className="input" type={"text"} placeholder="Die neue Bezeichnung hier eingeben" />
          <Checkbox checked={props.major}>Leistungskurs</Checkbox>
        </Space>
      </Modal>
      <Card style={{ width: "100%" }}>
        <Row style={{ alignItems: "center" }}>
          <Col span={2}>
            <BookOutlined />
          </Col>
          <Col style={{ fontSize: "17px" }} span={7}>
            {props.subject}
          </Col>
          <Col span={3} offset={10}>
            <Button onClick={() => setOpen(!open)} icon={<EditOutlined />} />
          </Col>
          <Col span={2}>
            <Button
              onClick={() => {
                deleteSubject(props.id).then((r) => invalidateCertificate());
              }}
              icon={<DeleteOutlined />}
            />
          </Col>
        </Row>
      </Card>
    </>
  );
};
