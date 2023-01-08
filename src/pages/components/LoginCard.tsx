import { Button, Form } from "antd";
import React from "react";
import "../styles/Card.css";
import { Container } from "./Container";

const onFinish = () => {};

const onFinishFailed = () => {};

export const LoginCard = (props: React.PropsWithChildren<{ title: string; buttonName: string }>) => {
  return (
    <Container width={400}>
      <h2>{props.title}</h2>
      <h3>Geben Sie Ihre Zugangsdaten ein</h3>
      <Form className="form" initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
        {props.children}
        <Button type="primary" className="large-button">
          {props.buttonName.toUpperCase()}
        </Button>
      </Form>
    </Container>
  );
};
