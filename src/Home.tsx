import React from "react";
import { Layout, Menu } from "antd";

const a = new Array(15).fill(null);

export const Home = () => {
  return (
    <Layout className="layout">
      <Layout.Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={a.map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })}
        />
      </Layout.Header>
    </Layout>
  );
};
