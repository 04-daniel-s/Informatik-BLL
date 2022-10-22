import React from "react";
import { Button, Card, Form, Input } from "antd";

const onFinish = () => {};

const onFinishFailed = () => {};

export const Login = () => {
  return (
    <div style={{ marginTop: "200px", display: "flex", justifyContent: "center" }}>
      <Card title="Login" size="default" bordered={true} style={{ width: 600, height: 300, boxShadow: "0 0 10px 10px #f0f0f0" }}>
        <Form initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
          <Form.Item
            label="Nutzername"
            name="username"
            rules={[{ required: true, message: "Bitte geben Sie Ihr Passwort ein!" }]}
            labelCol={{ span: 5 }}
            labelAlign="left"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Passwort"
            name="password"
            rules={[{ required: true, message: "Bitte geben Sie Ihr Passwort ein!" }]}
            labelCol={{ span: 5 }}
            labelAlign="left"
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <div>
              Du hast noch keinen Account? <a href="register">Hier registrieren!</a>
            </div>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Bestätigen
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
