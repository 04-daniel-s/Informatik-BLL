import React from "react";
import { Input } from "antd";
import { LoginCard } from "./components/LoginCard";
import { UserOutlined, RightOutlined } from "@ant-design/icons";

const onFinish = () => {};

const onFinishFailed = () => {};

export const Login = () => {
  return (
    <LoginCard title={"Login"} buttonName={"anmelden"}>
      <Input prefix={<UserOutlined />} className="input" type={"text"} placeholder="Nutzername" />
      <Input.Password prefix={<RightOutlined />} className="input" type={"password"} placeholder="Passwort" />
      <h4>
        Du hast noch keinen Account? <a href="register">Hier registrieren!</a>
      </h4>
    </LoginCard>
  );
};
