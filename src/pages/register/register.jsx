import React, { useState } from "react";
import { Layout, Button, Image, Form, Input, InputNumber, message } from "antd";
import coffeeLogo from "./coffee-logo.png";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./register.css";
import axios from "axios";

const { Header, Footer, Sider, Content } = Layout;

const layoutStyle = {
  //   height: "100vh",
  //   width: "100vw",
};

const headerStyle = {
  color: "#fff",
  height: "13vh",
  paddingInline: 48,
  lineHeight: "10vh",
  backgroundColor: "#d5573f",
};

const contentStyle = {
  color: "#fff",
  backgroundColor: "white",
};

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const RegisterForm = () => {
  const onFinish = (values) => {
    axios
      .post("http://localhost:8080/api/register.php", values)
      .then((response) => {
        console.log(response.data);
        message.success({
          content: "Create an account successful",
          duration: 3,
          style: {
            marginTop: "20vh",
          },
        });
      })
      .catch((error) => {
        console.error("There was an error!", error);
        message.error({
          content: "Failed to create account. Please try again.",
          duration: 3,
          style: {
            marginTop: "20vh",
          },
        });
      });
  };

  return (
    <div>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>
          <Link to="/">
            <div className="register-brand">
              <span className="logo">PRESSO</span>
              <span>
                <Image src={coffeeLogo} width={30} height={30} />
              </span>
            </div>
          </Link>
        </Header>
        <Content style={contentStyle}>
          <div className="registerMain">
            <div>
              <h1>Create an account</h1>
            </div>
            <div className="registerForm">
              <Form
                {...layout}
                name="nest-messages"
                onFinish={onFinish}
                style={{
                  maxWidth: 600,
                }}
                validateMessages={validateMessages}
              >
                <Form.Item
                  name={["user", "name"]}
                  label="Name"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item name={["user", "password"]} label="Password">
                  <Input />
                </Form.Item>

                <Form.Item
                  name={["user", "email"]}
                  label="Email"
                  rules={[
                    {
                      type: "email",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={["user", "age"]}
                  label="Age"
                  rules={[
                    {
                      type: "number",
                      min: 0,
                      max: 99,
                    },
                  ]}
                >
                  <InputNumber />
                </Form.Item>
                <Form.Item name={["user", "phone"]} label="Phone">
                  <Input />
                </Form.Item>
                <Form.Item name={["user", "address"]} label="Address">
                  <Input.TextArea />
                </Form.Item>
                <Form.Item
                  wrapperCol={{
                    ...layout.wrapperCol,
                    offset: 8,
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    Create account
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default RegisterForm;
