import { Select, Form, Input, Space, Button } from "antd";
import { useState } from "react";
import { useGetAuth } from "../../util/hooks/useGetAuth";
import { editCertificateName } from "../../util/services/certificateService";

export const EditTab = (props: { setOpen: (b: boolean) => void }) => {
  const [form] = Form.useForm();
  const { student, refetchStudent } = useGetAuth();
  const [certificateId, setCertificateId] = useState(undefined);

  const handleEditCertificate = async () => {
    const { certificateName }: { certificateName: string } = await form.validateFields();
    if (certificateId) editCertificateName(certificateId, certificateName).then(() => refetchStudent());
    handleCancel();
  };

  const handleCancel = () => {
    form.resetFields();
    props.setOpen(false);
  };

  return (
    <Space style={{ width: "100%" }} direction="vertical">
      <Space direction="vertical" size={"middle"}>
        <Select
          style={{ width: "15em" }}
          options={student?.certificates.map((c) => ({ value: c.id + "edit", label: c.name }))}
          placeholder="Wähle ein Zeugnis aus"
          onChange={(v) => setCertificateId(v.replace("edit", ""))}
        />
        <Form form={form} style={{ width: "15em" }} name="editCertificate" onFinish={handleEditCertificate} autoComplete="off">
          <Form.Item
            label=""
            name="certificateName"
            rules={[
              { required: true, message: "Der Name muss mindestens 4 Zeichen lang sein!", min: 4 },
              { message: "Der Name darf maximal 20 Zeichen lang sein!", max: 20 },
            ]}
          >
            <Input placeholder="Gebe einen Namen an" />
          </Form.Item>
        </Form>
      </Space>
      <div style={{ float: "right" }}>
        <Button onClick={handleCancel} style={{ marginRight: "0.7em" }}>
          Abbrechen
        </Button>
        <Button onClick={handleEditCertificate} type="primary">
          Bearbeiten
        </Button>
      </div>
    </Space>
  );
};
