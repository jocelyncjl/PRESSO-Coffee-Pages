import React, { useState } from "react";
import { Button, Checkbox, Form, Input,message } from "antd";
import { Layout, Image, InputNumber } from "antd";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import coffeeLogo from "./coffee-logo.png";
import "./signIn.css";
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

const onFinish = (values) => {
  axios
    .post("http://localhost:8080/api/login.php", values)
    .then((response) => {
      console.log("Success:", response.data);
      message.success({
        content: "Sign in successfully",
        duration: 3,
        style: {
          marginTop: "20vh",
        },
      });
    })
    .catch((error) => {
      console.log("Failed:", error);
      message.error({
        content: "Sign in failed. Please check your username and password.",
        duration: 3,
        style: {
          marginTop: "20vh",
        },
      });
    });
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
  message.error({
    content: "Please fill in all required fields correctly.",
    duration: 3,
    style: {
      marginTop: "20vh",
    },
  });
};

const SignInForm = () => {
  return (
    <div>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>
          <Link to="/">
            <div className="brand">
              <span className="logo">PRESSO</span>
              <span>
                <Image src={coffeeLogo} width={30} height={30} />
              </span>
            </div>
          </Link>
        </Header>
        <Content style={contentStyle}>
          <div className="signInMain">
            <div>
              <h1>Sign in</h1>
            </div>
            <div className="signInForm">
              <Form
                name="basic"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                style={{
                  maxWidth: 600,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  name="remember"
                  valuePropName="checked"
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    Sign in
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

export default SignInForm;
