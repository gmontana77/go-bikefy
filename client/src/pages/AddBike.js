import React from "react";
import { Layout, Menu, Col, Row, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import { addBike } from "../redux/actions/bikeActions";
import { AppstoreOutlined, CloudOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function AddBike() {
  const { SubMenu } = Menu;
  const { Content, Sider } = Layout;

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.alertsReducer);

  function onFinish(values) {
    values.bookSlots = [];

    dispatch(addBike(values));
    console.log(values);
  }

  return (
    <Layout>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
      >
        <div className="logo">
          <h1 className="logoText pt-4 ml-2">
            <Link to="/" style={{ color: "white" }}>
              Go-Bikefy
            </Link>
          </h1>
        </div>

        <Link to="/admin">
          <small style={{ color: "white", fontSize: "12px" }}>
            Admin Panel
          </small>
        </Link>

        <Menu theme="dark" mode="inline">
          <SubMenu key="sub1" icon={<CloudOutlined />} title="Catalogue">
            <Menu.Item key="2">
              <Link to="/admin">Show all</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/admin/addbike">Add new Bike</Link>
            </Menu.Item>
          </SubMenu>

          <SubMenu key="sub3" icon={<AppstoreOutlined />} title="Customers">
            <Menu.Item key="7">Points bonus</Menu.Item>
            <Menu.Item key="5">
              <Link to="/">Shop</Link>
            </Menu.Item>

            <Menu.Item
              key="6"
              onClick={() => {
                window.location.href = "/login";
              }}
            >
              Logout
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 100 }}>
        <Content style={{ margin: "1px 10px 0", overflow: "initial" }}>
          <div
            className="site-layout-background"
            style={{ padding: 4, textAlign: "center" }}
          >
            {loading && <Spinner />}
            <Row justify="center mt-5">
              <Col lg={16} sm={16} xs={14} className="p-2">
                <Form className="bs1 p-2" layout="vertical" onFinish={onFinish}>
                  <h3>Add New Bike</h3>
                  <hr />
                  <Form.Item
                    name="name"
                    label="Bike brand"
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="image"
                    label="Image url"
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="rentPerDay"
                    label="Rent per day"
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="type"
                    label="Type"
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="category"
                    label="Category"
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>

                  <div className="text-right">
                    <button className="btn1">ADD BIKE</button>
                  </div>
                </Form>
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default AddBike;
