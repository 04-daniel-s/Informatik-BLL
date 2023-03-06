import { Button, Checkbox, Space, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useState } from "react";
import { useGetAuth } from "../../util/hooks/useGetAuth";
import { Certificate } from "../../util/interfaces/StudentResponse";
import { deleteCertificateList } from "../../util/services/certificateService";

export const DeleteTab = (props: { setOpen: (b: boolean) => void }) => {
  const { student, refetchStudent } = useGetAuth();
  const [list, setList] = useState<Certificate[]>([]);

  const handleOnChange = (checked: boolean, c: Certificate) => {
    let temp = [...list];
    if (checked) {
      temp.push(c);
    } else {
      temp = temp.filter((v) => v.id === c.id);
    }
    setList(temp);
  };

  interface DataType {
    name: string;
    checkbox: JSX.Element;
  }

  const data = student?.certificates.map((c) => ({ name: c.name, checkbox: <Checkbox onChange={(v) => handleOnChange(v.target.checked, c)} /> }));

  const columns: ColumnsType<DataType> = [
    {
      title: "Zeugnis",
      dataIndex: "name",
      width: "90%",
    },
    {
      title: "Löschen",
      dataIndex: "checkbox",
      align: "center",
    },
  ];

  const handleDelete = () => {
    deleteCertificateList(list.map((c) => c.id)).then(() => refetchStudent());
    props.setOpen(false);
  };

  const handleCancel = () => {
    props.setOpen(false);
    setList([]);
  };

  return (
    <Space style={{ width: "100%" }} direction="vertical">
      <Table columns={columns} dataSource={data} />{" "}
      <div style={{ float: "right" }}>
        <Button onClick={handleCancel} style={{ marginRight: "0.7em" }}>
          Abbrechen
        </Button>
        <Button onClick={handleDelete} type="primary">
          Löschen
        </Button>
      </div>
    </Space>
  );
};
