import React from 'react'
import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  CloudOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom'

function NavLateral(props) {
  const { SubMenu } = Menu;
  const { Content, Footer, Sider } = Layout;
    return (
      <Layout>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
      >
        <div className="logo">
        <h1 className="logoText pt-4 ml-2">
              <Link to='/'style={{color:'white'}}>
              Go-Bikefy <small style={{color:'white', fontSize:'12px'}}>Admin Panel</small>
              </Link>
              </h1>   

        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <SubMenu key="sub1" icon={<CloudOutlined />} title="Catalogue">
            <Menu.Item key="5">Electrical Bikes</Menu.Item>
            <Menu.Item key="6">Normal Bikes</Menu.Item>
            <Menu.Item key="7">Used Bikes</Menu.Item>
            <Menu.Item key="7">Show all</Menu.Item>
          </SubMenu>
      
          <SubMenu key="sub3"  icon={<AppstoreOutlined />} title="Customers">
          <Menu.Item key="7">Points bonus</Menu.Item>
          <Menu.Item key="8">Status</Menu.Item>
        </SubMenu>

        <SubMenu key="sub4" icon={<TeamOutlined />} title="Managment">
          <Menu.Item key="3">Add new Bike</Menu.Item>
          <Menu.Item key="4">Edit Bike</Menu.Item>
          <Menu.Item key="5">Home</Menu.Item>
          <Menu.Item key="6">Log Out</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
            ...
            <br />
            Really
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
          
            <br />
            content
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>

    )
}

export default NavLateral
