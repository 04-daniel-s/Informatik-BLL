import { Col, Divider, Row } from "antd";
import React from "react";
import { Container } from "./components/Container";
import Fach from "../util/Schulfächer.png";
import Rechner from "../util/Rechner.png";
import "./styles/Home.css";

export const Home = () => {
  return (
    <Container width={800}>
      <h2>Optionen</h2>
      <Divider />
      <Row gutter={16}>
        <Col span={12}>
          <a href="login">
            {/*Link ändern*/}
            <img className="hover" src={Fach} width={"350px"} />
          </a>
        </Col>
        <Col span={12}>
          <a href="login">
            {/*Link ändern*/}
            <img className="hover" src={Rechner} width={"350px"}></img>
          </a>
        </Col>
      </Row>
    </Container>
  );
};
