import React, { useState } from "react";
import { Menu, Image, Col, Row } from "antd";
import userIcon from "../Navbar/user-icon.png";
import cartIcon from "../Navbar/cart-icon.png";
import coffeeLogo from "../Navbar/coffee-logo.png";
import "./nav.css";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const items = [
  {
    label: <Link to="/">Home</Link>,
    key: "/",
  },

  {
    label: <Link to="/coffee-list">Coffee List</Link>,
    key: "/coffee-list",
  },
  {
    label: <Link to="/gifts">Gifts</Link>,
    key: "/gifts",
  },
  {
    label: <Link to="/about">About</Link>,
    key: "/about",
  },
  {
    label: <Link to="/blog">Blog</Link>,
    key: "/blog",
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
            <a>
              <span className="cart">
                <Image src={cartIcon} width={24} height={24} />
              </span>
            </a>
            <a>
              <span className="user">
                <Image src={userIcon} width={24} height={24} />
              </span>
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Navbar;
