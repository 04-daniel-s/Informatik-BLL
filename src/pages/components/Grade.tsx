import { Button, Card, Input, InputNumber, Space } from "antd";
import { EditOutlined, CheckOutlined } from "@ant-design/icons";
import { useState } from "react";
import { editGrade } from "../../util/services/gradeService";

export const Grade = (props: { invalidate: () => void; id: number; title: string; grade: number; date: string }) => {
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(props.title);
  const [grade, setGrade] = useState(props.grade);
  const [date, setDate] = useState(props.date);

  const save = () => {
    setEdit(!edit);
    edit && editGrade(props.id, title, date, grade).then(props.invalidate);
  };

  return (
    <Card style={{ minWidth: "270px" }} title={!edit ? props.title : <Input onChange={(v) => setTitle(v.target.value)} placeholder={props.title} />}>
      <Space direction="vertical" size={5}>
        <h4 style={{ textAlign: "start" }}>
          Note:{" "}
          {!edit ? (
            props.grade
          ) : (
            <InputNumber
              onChange={(v) => {
                setGrade(v ?? props.grade);
              }}
              size="small"
              style={{ marginLeft: "5px", marginRight: "5px", width: 50 }}
              defaultValue={props.grade}
            />
          )}{" "}
          Punkte
        </h4>
        <h4 style={{ textAlign: "start" }}>
          Datum: {!edit ? props.date : <Input onChange={(v) => setDate(v.target.value)} size="small" style={{ width: 90 }} defaultValue={props.date} />}
        </h4>
      </Space>
      <Button onClick={save} style={{ position: "absolute", right: "5%", top: "73%" }} shape="circle" icon={!edit ? <EditOutlined /> : <CheckOutlined />} />
    </Card>
  );
};
