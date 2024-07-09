import React, { useState } from "react";
import { Menu, Image, Col, Row } from "antd";
import userIcon from "../Navbar/user-icon.png";
import cartIcon from "../Navbar/cart-icon.png";
import coffeeLogo from "../Navbar/coffee-logo.png";
import "./nav.css";

const items = [
  {
    label: "Coffee List",
    key: "mail",
  },
  {
    label: "Gifts",
    key: "mail",
  },
  {
    label: "About",
    key: "mail",
  },
];

const Navbar = () => {
  const [current, setCurrent] = useState("mail");
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
          <a>
            <div className="brand">
              <span className="logo">PRESSO</span>
              <span>
                <Image src={coffeeLogo} width={30} height={30} />
              </span>
            </div>
          </a>
        </Col>
        <Col span={8} offset={4}>
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
        <Col span={4} offset={2}>
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
