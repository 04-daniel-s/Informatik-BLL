import React from "react";
import { Button, Form, Input } from "antd";
import { LoginCard } from "./components/LoginCard";
import { UserOutlined, RightOutlined } from "@ant-design/icons";

export const Login = () => {
  return (
    <LoginCard title={"Anmelden"}>
      <Form.Item name="username" rules={[{ required: true, message: "Gebe bitte deinen Nutzernamen ein!" }]}>
        <Input prefix={<UserOutlined />} className="input" placeholder="Nutzername" />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: "Gebe bitte dein Password ein!" }]}>
        <Input.Password prefix={<RightOutlined />} className="input" placeholder="Passwort" />
      </Form.Item>
      <h4>
        Du hast noch keinen Account? <a href="register">Hier registrieren!</a>
      </h4>
      <Form.Item style={{ margin: "0px" }}>
        <Button type="primary" htmlType="submit" className="large-button">
          Anmelden
        </Button>
      </Form.Item>
    </LoginCard>
  );
};
