import React from "react";

import { UserOutlined, RightOutlined, EditOutlined } from "@ant-design/icons";
import { Card } from "./components/Card";
import { Input } from "antd";

const onFinish = () => {};
const onFinishFailed = () => {};

export const Register = () => {
  return (
    <Card title={"Registrieren"} buttonName={"Registrieren!"}>
      <Input prefix={<EditOutlined />} className="input" placeholder="Vor- und Nachname" type={"text"} />
      <Input prefix={<UserOutlined />} className="input" placeholder="Nutzername" type={"text"} />
      <Input prefix={<RightOutlined />} className="input" placeholder="Passwort" type={"password"} />
      <h4>
        Du hast bereits einen Account? <a href="login"> Melde dich hier an!</a>
      </h4>
    </Card>
  );
};
