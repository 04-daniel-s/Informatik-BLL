import React, { useState } from "react";
import "../styles/Subjects.css";
import { BookOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Card, Col, Input, Modal, Row } from "antd";

export const Subject = (props: { id: number; subject: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal title={`Bezeichnung ändern (${props.subject})`} destroyOnClose open={open} onCancel={() => setOpen(false)} onOk={() => setOpen(false)}>
        <Input prefix={<BookOutlined />} className="input" type={"text"} placeholder="Die neue Bezeichnung hier eingeben" />
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
            <Button icon={<DeleteOutlined />} />
          </Col>
        </Row>
      </Card>
    </>
  );
};
