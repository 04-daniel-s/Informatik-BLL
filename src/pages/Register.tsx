import React from "react";

import { Button, Card, DatePicker, Form, Input, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";

const onFinish = () => {};
const onFinishFailed = () => {};

export const Register = () => {
  return (
    <div style={{ marginTop: "200px", display: "flex", justifyContent: "center" }}>
      <Card title="Registrieren" size="default" bordered={true} style={{ width: 700, height: 330, boxShadow: "0 0 10px 10px #f0f0f0" }}>
        <Form initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
          <Form.Item
            label=" "
            colon={false}
            name="name"
            labelCol={{ span: 5 }}
            labelAlign="left"
            rules={[{ required: true, message: "Bitte geben Sie Ihren Vornamen an!" }]}
          >
            <Space size={"middle"}>
              <Input prefix={<UserOutlined />} size="large" placeholder="Vorname" />
              <Input prefix={<UserOutlined />} size="large" placeholder="Nachname" />
              <DatePicker size="large" placeholder="Geburtstag" />
            </Space>
          </Form.Item>

          <Form.Item
            label="Nutzername"
            name="username"
            rules={[{ required: true, message: "Bitte geben Sie Ihren Namen an!" }]}
            labelCol={{ span: 5 }}
            labelAlign="left"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Passwort"
            name="password"
            rules={[{ required: true, message: "Bitte geben Sie Ihr Passwort an!" }]}
            labelCol={{ span: 5 }}
            labelAlign="left"
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button size="large" type="primary">
              Registrieren!
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
