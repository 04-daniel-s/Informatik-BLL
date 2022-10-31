import { Button, Form, Input } from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import { Content } from "antd/lib/layout/layout";
import { title } from "process";
import React from "react";
import "./Card.css";

const onFinish = () => {};

const onFinishFailed = () => {};

export const Card = (props: React.PropsWithChildren<{ title: string; buttonName: string }>) => {
  return (
    <>
      <div className="card">
        <h2>{props.title}</h2>
        <h3>Geben Sie Ihre Zugangsdaten ein</h3>
        <Form className="form" initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
          {props.children}
          <Button type="primary" className="button">
            {props.buttonName.toUpperCase()}
          </Button>
        </Form>
      </div>
    </>
  );
};
