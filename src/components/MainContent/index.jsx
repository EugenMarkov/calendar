import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import SideMenu from "../SideMenu/index.jsx";
import MainHeader from "../MainHeader/index.jsx";

const { Content } = Layout;

export function MainContent() {
  return (
    <Layout style={{ minHeight: "100vh", width: "100%" }}>
      <SideMenu />
      <Layout style={{ width: "calc(100% - 260px)" }}>
        <MainHeader />
        <Content style={{ overflow: "auto", background: "#F0F0F7", padding: "32px 53px" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
