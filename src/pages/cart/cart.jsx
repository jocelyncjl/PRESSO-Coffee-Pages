import React, { useState } from "react";
import {Layout, Button,Image } from "antd";
import coffeeLogo from "./coffee-logo.png";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./cart.css";

import { Space, Table, Tag } from "antd";


const { Header, Footer, Sider, Content } = Layout;

const layoutStyle = {
  //   height: "100vh",
  //   width: "100vw",
};

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: "13vh",
  paddingInline: 48,
  lineHeight: "10vh",
  backgroundColor: "#d5573f",
};

const contentStyle = {
  // textAlign: "center",
  //   height: "80vh",
  // lineHeight: "80vh",
  color: "#fff",
  backgroundColor: "white",
};

const columns = [
  {
    title: "Item",
    dataIndex: "item",
    key: "item",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    item: "Classic Latte",
    price: 5,
    quantity: 3,
    total: 15,
  },
  {
    key: "2",
    item: "Cheery Latte",
    price: 5,
    quantity: 1,
    total: 5,
  },
  {
    key: "3",
    item: "Coconut Cappuccino",
    price: 5.7,
    quantity: 1,
    total: 5.7,
  },
];


const CartList = () => {
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
          <div className="cartBlock">
            <h1>YOUR CART</h1>
            <Table columns={columns} dataSource={data} />;
            <div className="grandTotal">
                <span>Grand Total:</span>
                <span>  </span>
            </div>
            <div className="checkButton">
                <Button className="checkButton" type="primary" style={{fontSize:"20px"}} size="large">Check Out</Button>
            </div>
            
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default CartList;
