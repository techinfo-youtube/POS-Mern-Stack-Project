import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  LogoutOutlined,
  HomeOutlined,
  CopyOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import "../styles/DefaultLayout.css";
const { Header, Sider, Content } = Layout;

export default class DefaultLayout extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo">
            <h1 className="text-center text-light font-wight-bold mt-4">POS</h1>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={window.location.pathname}
          >
            <Menu.Item key="/" icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="/bills" icon={<CopyOutlined />}>
              <Link to="/bills">Bills</Link>
            </Menu.Item>
            <Menu.Item key="/items" icon={<UnorderedListOutlined />}>
              <Link to="/items">Items</Link>
            </Menu.Item>
            <Menu.Item key="/customers" icon={<UserOutlined />}>
              <Link to="/customers">Cutomers</Link>
            </Menu.Item>
            <Menu.Item key="/logout" icon={<LogoutOutlined />}>
              Logout
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.toggle,
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
