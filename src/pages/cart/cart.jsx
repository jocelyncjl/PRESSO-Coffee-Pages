import React, { useState } from "react";
import { Layout, Button, Image} from "antd";
import coffeeLogo from "./coffee-logo.png";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./cart.css";

import { Space, Table, Tag } from "antd";

import { useCart } from "./cartContent";

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
  // textAlign: "center",
  //   height: "80vh",
  // lineHeight: "80vh",
  color: "#fff",
  backgroundColor: "white",
};

const CartList = () => {
  const { cartItems,removeFromCart} = useCart();
  console.log('cartItems',cartItems);
  const columns = [
    {
      title: "Item",
      dataIndex: "name",
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
          <a onClick={() => removeFromCart(record.name)}>Delete</a>
        </Space>
      ),
    },
  ];

  const grandTotal = cartItems.reduce((sum, item) => sum + item.total, 0);

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
            <Table columns={columns} dataSource={cartItems} />;
            <div className="grandTotal">
              <span>Grand Total:</span>
              <span> €{grandTotal.toFixed(2)}</span>
            </div>
            <div className="checkButton">
              <Button
                className="checkButton"
                type="primary"
                style={{ fontSize: "20px" }}
                size="large"
              >
                Check Out
              </Button>
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default CartList;
