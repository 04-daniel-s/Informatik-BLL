import { FloatButton, Modal, Tabs } from "antd";
import { useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import { EditTab } from "./EditTab";
import { DeleteTab } from "./DeleteTab";

export const EditCertificateModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <FloatButton style={{ position: "absolute", bottom: "11%", left: "70%" }} onClick={() => setOpen(true)} icon={<EditOutlined />} />
      <Modal footer={null} open={open} title="Zeugnis bearbeiten" destroyOnClose>
        <Tabs
          defaultActiveKey="1"
          items={[
            {
              key: "1",
              label: `Bearbeiten`,
              children: <EditTab setOpen={setOpen} />,
            },
            {
              key: "2",
              label: `Löschen`,
              children: <DeleteTab setOpen={setOpen} />,
            },
          ]}
        ></Tabs>
      </Modal>
    </>
  );
};
