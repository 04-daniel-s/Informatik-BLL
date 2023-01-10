import { Button, Card, Input, InputNumber, Space } from "antd";
import { EditOutlined, CheckOutlined } from "@ant-design/icons";
import { useState } from "react";

export const Grade = (props: { important: boolean; title: string; grade: number; date: string }) => {
  const [edit, setEdit] = useState(false);

  return (
    <Card style={{ minWidth: "270px" }} title={!edit ? props.title : <Input placeholder={props.title} />}>
      <Space direction="vertical" size={5}>
        <h4 style={{ textAlign: "start" }}>
          Note: {!edit ? props.grade : <InputNumber size="small" style={{ marginLeft: "5px", marginRight: "5px", width: 50 }} defaultValue={props.grade} />}{" "}
          Punkte
        </h4>
        <h4 style={{ textAlign: "start" }}>Datum: {!edit ? props.date : <Input size="small" style={{ width: 90 }} defaultValue={props.date} />}</h4>
      </Space>
      {!edit && <Button onClick={() => setEdit(true)} style={{ position: "absolute", right: "3%", top: "73%" }} shape="circle" icon={<EditOutlined />} />}
      {edit && <Button onClick={() => setEdit(false)} style={{ position: "absolute", right: "5%", top: "73%" }} shape="circle" icon={<CheckOutlined />} />}
    </Card>
  );
};
