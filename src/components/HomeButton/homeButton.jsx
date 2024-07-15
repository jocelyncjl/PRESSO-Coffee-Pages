import React from "react";
import { Button, Flex } from "antd";
import "../HomeButton/homeButton";
import './homeButton.css'
import { Link } from "react-router-dom";

const HomeButton = () => (
  <div>
      <div className="orderButtonContainer">
        <Link to='/coffee-list'>
            <Button
            className="orderButton"
            type="primary"
            style={{ background: "white", color: "black", fontSize: 25}}
            size="large"
            >
            Order Now
            </Button>
        </Link>
        
      </div>
  </div>
);
export default HomeButton;
