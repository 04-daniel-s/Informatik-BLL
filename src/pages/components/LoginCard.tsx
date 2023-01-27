import React from "react";
import "../styles/Card.css";
import axios from "axios";
import { useForm } from "antd/es/form/Form";
import { useGetAuth } from "../../util/hooks/useGetAuth";
import { login, register } from "../../util/services/studentService";
import { Form, message } from "antd";
import { useCookies } from "react-cookie";

export const LoginCard = (props: React.PropsWithChildren<{ title: string }>) => {
  const [form] = useForm();
  const { refetchStudent } = useGetAuth();
  const [_, setCookie] = useCookies(["user"]);

  const handleLogin = async () => {
    const { username, password }: { username: string; password: string } = await form.validateFields();
    login(username, password)
      .then((r) => {
        setCookie("user", r);
        axios.defaults.headers.common["Authorization"] = `Bearer ${r}`;
        refetchStudent();
      })
      .catch((e) => message.open({ key: "test", type: "success", content: "Fehler!", duration: 2 }));
  };

  const handleRegister = async () => {
    const { name, username, password }: { name: string; username: string; password: string } = await form.validateFields();
    register(name, username, password)
      .then((r) => {
        refetchStudent();
      })
      .catch((e) => {});
  };

  return (
    <Form
      form={form}
      initialValues={{ remember: true }}
      onFinish={props.title === "Anmelden" ? handleLogin : handleRegister}
      onFinishFailed={() => {}}
      autoComplete="off"
      className="container"
      style={{ width: "400px" }}
    >
      <h2>{props.title}</h2>
      <h3>Geben Sie Ihre Zugangsdaten ein</h3>
      {props.children}
    </Form>
  );
};
