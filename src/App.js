import React, { useEffect } from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
// import {
//   HomeOutlined,
//   UnorderedListOutlined,
//   FormOutlined,
//   FieldTimeOutlined,
// } from "@ant-design/icons";
import Routes from "./routes/routes.js";

const { Header, Content } = Layout;

function App() {
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    document.title = "Todo App";
  }, []);

  return (
    <>
      <Layout>
        <Header
          className="site-layout-header"
          style={{
            padding: 0,
          }}
        >
          <Menu
            className="menu"
            mode="horizontal"
            defaultSelectedKeys={["/todos"]}
            selectedKeys={[pathname]}
          >
            <Menu.Item key="/todos">
              <Link to="/todos">Tất cả công việc cần làm</Link>
            </Menu.Item>
            <Menu.Item key="/todos/input">
              <Link to="/todos/input">Thêm mới</Link>
            </Menu.Item>
            <Menu.Item key="/todos/timeline">
              <Link to="/todos/timeline">Mốc thời gian</Link>
            </Menu.Item>
            <Menu.Item key="/">
              <Link to="/">Thông tin</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content
          className="site-layout-content"
          style={{
            // margin: "24px 16px",
            // padding: 24,
            height: "100vh",
          }}
        >
          <Routes />
        </Content>
      </Layout>
    </>
  );
}

export default App;
