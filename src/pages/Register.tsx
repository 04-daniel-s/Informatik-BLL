import React from "react";

import { UserOutlined, RightOutlined, EditOutlined } from "@ant-design/icons";
import { LoginCard } from "./components/LoginCard";
import { Button, Form, Input } from "antd";

export const Register = () => {
  return (
    <LoginCard title={"Registrieren"}>
      <Form.Item>
        <Input prefix={<EditOutlined />} className="input" placeholder="Vor- und Nachname" />
      </Form.Item>
      <Form.Item>
        <Input prefix={<UserOutlined />} className="input" placeholder="Nutzername" />
      </Form.Item>
      <Form.Item>
        <Input.Password prefix={<RightOutlined />} className="input" placeholder="Passwort" />
      </Form.Item>
      <h4>
        Du hast bereits einen Account? <a href="login"> Melde dich hier an!</a>
      </h4>
      <Form.Item>
        <Button style={{ margin: "0px" }} type="primary" htmlType="submit" className="large-button">
          Registrieren
        </Button>
      </Form.Item>
    </LoginCard>
  );
};
function refetchStudent() {
  throw new Error("Function not implemented.");
}
