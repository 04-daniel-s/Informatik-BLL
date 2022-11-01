import React from "react";
import "../styles/Subject.css";
import { BookOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row } from "antd";

export const Subject = (props: { subject: string }) => {
  return (
    <Card style={{ width: "100%" }}>
      <Row style={{ alignItems: "center" }}>
        <Col span={2}>
          <BookOutlined />
        </Col>
        <Col style={{ fontSize: "17px" }} span={7}>
          {props.subject}
        </Col>
        <Col span={3} offset={10}>
          <Button icon={<EditOutlined />} />
        </Col>
        <Col span={2}>
          <Button icon={<DeleteOutlined />} />
        </Col>
      </Row>
    </Card>
  );
};
