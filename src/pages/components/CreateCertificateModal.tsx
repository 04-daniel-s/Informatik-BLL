import { FloatButton, Form, Input, Modal } from "antd";
import { useState } from "react";
import { PlusOutlined, UserOutlined } from "@ant-design/icons";
import { createCertificate } from "../../util/services/certificateService";
import { useGetAuth } from "../../util/hooks/useGetAuth";

export const CreateCertificateModal = () => {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const { refetchStudent } = useGetAuth();

  const handleAddCertificate = async () => {
    const { certificateName }: { certificateName: string } = await form.validateFields();
    createCertificate(certificateName).then((r) => refetchStudent());
    handleCancel();
  };

  const handleCancel = () => {
    form.resetFields();
    setOpen(false);
  };

  return (
    <>
      <FloatButton style={{ position: "absolute", bottom: "5%", left: "70%" }} onClick={() => setOpen(true)} icon={<PlusOutlined />} />
      <Modal open={open} title="Zeugnis hinzufügen" destroyOnClose onCancel={handleCancel} onOk={handleAddCertificate}>
        <Form form={form} name="addCertificate" onFinish={handleAddCertificate} autoComplete="off">
          <Form.Item
            label=""
            name="certificateName"
            rules={[
              { required: true, message: "Der Name muss mindestens 4 Zeichen lang sein!", min: 4 },
              { message: "Der Name darf maximal 20 Zeichen lang sein!", max: 20 },
            ]}
          >
            <Input placeholder="Tippe hier einen Namen ein" prefix={<UserOutlined />} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
