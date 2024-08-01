import React, { useState } from "react";
import { Menu, Image, Col, Row, message } from "antd";
import userIcon from "../Navbar/user-icon.png";
import cartIcon from "../Navbar/cart-icon.png";
import coffeeLogo from "../Navbar/coffee-logo.png";
import "./nav.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const handleSignOut = () => {
  message.success("Sign out successfully");
};

const items = [
  {
    label: <Link to="/">Home</Link>,
    key: "/",
  },

  {
    label: <Link to="/coffee-list">Coffee</Link>,
    key: "/coffee-list",
  },
  {
    label: <Link to="/about">About</Link>,
    key: "/about",
  },
];

const userItems = [
  {
    label: <Link to="/register">Join Now</Link>,
    key: "1",
  },
  {
    label: <Link to="/signIn">Sign In</Link>,
    key: "1",
  },
  {
    label: <a onClick={handleSignOut}>Sign Out</a>,
    key: "1",
  },
];

const cartItems = [
  {
    label: <Link to="/cartList">View Cart</Link>,
    key: "1",
  },
  {
    label: <Link to="/myOrder">My Order</Link>,
    key: "1",
  },
];

const Navbar = () => {
  const [current, setCurrent] = useState("/");
  const onClick = (e) => {
    console.log("click ", e);
    if (e.key === "cart") {
      console.log("Clicked cart button");
    } else if (e.key === "user") {
      console.log("Clicked user button");
    } else {
      setCurrent(e.key);
    }
  };

  return (
    <div>
      <Row>
        <Col span={4}>
          <Link to="/">
            <div className="brand">
              <span className="logo">PRESSO</span>
              <span>
                <Image src={coffeeLogo} width={30} height={30} />
              </span>
            </div>
          </Link>
        </Col>
        <Col span={10} offset={4}>
          <Menu
            className="navbar"
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
            style={{
              float: "center",
              marginRight: "auto",
            }}
          />
        </Col>
        <Col span={3} offset={2}>
          <div className="icon-main">
            <Dropdown
              menu={{
                items: cartItems,
              }}
              trigger={["click"]}
              arrow
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <div className="cart-icon">
                    <img src={cartIcon} width={24} height={24} />
                  </div>
                </Space>
              </a>
            </Dropdown>

            <Dropdown
              menu={{
                items: userItems,
              }}
              trigger={["click"]}
              arrow
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <div className="user-icon">
                    <img src={userIcon} width={24} height={24} />
                  </div>
                </Space>
              </a>
            </Dropdown>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Navbar;
