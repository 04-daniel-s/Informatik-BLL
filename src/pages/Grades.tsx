import { Card, Cascader, Divider, Space, Statistic, Tabs, Tag } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import { Grade } from "./components/Grade";
import { ArrowUpOutlined, CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";

const grades = [
  { subject: "Mathematik", title: "", grade: 15, important: true },
  { subject: "Deutsch", title: "", grade: 15, important: true },
  { subject: "Mathematik", title: "", grade: 15, important: true },
  { subject: "Englisch", title: "", grade: 15, important: true },
  { subject: "Geschichte", title: "", grade: 15, important: true },
  { subject: "Ethik", title: "", grade: 15, important: true },
  { subject: "Sport", title: "", grade: 15, important: true },
];

const cascaderOptions = [
  { value: "0", label: "Schuljahr 2020" },
  { value: "1", label: "Schuljahr 2021" },
  { value: "2", label: "Schuljahr 2022" },
  { value: "3", label: "Schuljahr 2023" },
];

const items = [
  {
    label: "Übersicht",
    key: `0`,
    children: (
      <div style={{ paddingTop: "1%" }}>
        <Space style={{ width: "100%" }} direction="vertical">
          <Space style={{ width: "100%", display: "flex", justifyContent: "center" }} size={200} align="center" direction="horizontal">
            <Space size={50} align="center" style={{ width: "100%" }} direction="vertical">
              <Title level={1}>2,5 Ø</Title>
              <Cascader placeholder="Zeugnis vergleichen" options={cascaderOptions}></Cascader>
              <Card style={{ width: "250px" }}>
                <Statistic title="Verbesserung" value={11.28} precision={2} valueStyle={{ color: "#3f8600" }} prefix={<ArrowUpOutlined />} suffix="%" />
              </Card>
            </Space>
            <Space direction="vertical">
              <Card style={{ width: "350px" }} title="Höchster Durchschnitt">
                <h3>Fach: Geschichte</h3>
                <h3>Gesamtnote: 11,4 Punkte</h3>
              </Card>
              <Card style={{ width: "350px" }} title="Niedrigster Durchschnitt">
                <h3>Fach: Mathematik</h3>
                <h3>Gesamtnote: 9,7 Punkte</h3>
              </Card>
            </Space>
          </Space>
          <Divider />
          <Space wrap direction="horizontal" align="center">
            <Card style={{ minWidth: "240px" }} title="Geschichte">
              <h3>Gesamtnote: 9,3 Punkte</h3>
              <Tag style={{ marginTop: "4%" }} icon={<CheckCircleOutlined />} color="success">
                Bestanden!
              </Tag>
            </Card>
            <Card style={{ minWidth: "240px" }} title="Mathematik">
              <h3>Gesamtnote: 4 Punkte</h3>
              <Tag style={{ marginTop: "4%" }} icon={<CloseCircleOutlined />} color="error">
                Nicht bestanden!
              </Tag>
            </Card>
          </Space>
        </Space>
      </div>
    ),
  },
  {
    label: "Ethik",
    key: `1`,
    children: (
      <Space align="start" direction="vertical">
        <Title level={3}>Klausuren</Title>
        <Space wrap style={{ display: "flex" }} align="start" direction="horizontal" size={"large"}>
          <Grade important={true} title={"Klausur 1"} grade={0} date={"22.05.2023"} />
          <Grade important={true} title={"Klausur 1"} grade={0} date={"22.05.2023"} />
          <Grade important={true} title={"Klausur 2"} grade={0} date={"22.05.2023"} />
          <Grade important={true} title={"Klausur 1"} grade={0} date={"22.05.2023"} />
        </Space>
        <Divider />
        <Title level={3}>Nebenleistungen</Title>
        <Space wrap direction="horizontal" size={"large"}>
          <Grade important={false} title={"Hausaufgabenüberprüfung 1"} grade={0} date={"22.05.2023"} />
          <Grade important={false} title={"Hausaufgabenüberprüfung 2"} grade={0} date={"22.05.2023"} />
          <Grade important={false} title={"Hausaufgabenüberprüfung 1"} grade={0} date={"22.05.2023"} />
          <Grade important={false} title={"Hausaufgabenüberprüfung 1"} grade={0} date={"22.05.2023"} />
          <Grade important={false} title={"Hausaufgabenüberprüfung 1"} grade={0} date={"22.05.2023"} />
          <Grade important={false} title={"Hausaufgabenüberprüfung 1"} grade={0} date={"22.05.2023"} />
          <Grade important={false} title={"Hausaufgabenüberprüfung 1"} grade={0} date={"22.05.2023"} />
        </Space>
      </Space>
    ),
  },
  {
    label: "Geschichte",
    key: `2`,
    children: `Content of Tab Pane 1`,
  },
  {
    label: "Mathematik",
    key: `3`,
    children: `Content of Tab Pane 1`,
  },
  {
    label: "Englisch",
    key: `4`,
    children: `Content of Tab Pane 1`,
  },
  {
    label: "Sport",
    key: `5`,
    children: `Content of Tab Pane 1`,
  },
];

export const Grades = () => {
  return (
    <div style={{ padding: "3%", height: "100%", width: "100%", backgroundColor: "white" }}>
      <h2 style={{ display: "flex" }}>Schuljahr 2022</h2>
      <Tabs items={items} style={{ minHeight: "400px" }} defaultActiveKey="0" onChange={() => {}} />
    </div>
  );
};

/*
VARIANTE 1
export const Grades = () => {
  return (
    <Card style={{ width: "70%" }}>
      <h2 style={{ display: "flex" }}>Schuljahr 2022</h2>
      <Tabs items={items} style={{ minHeight: "400px" }} defaultActiveKey="0" onChange={() => {}} />
    </Card>
  );
};
*/
