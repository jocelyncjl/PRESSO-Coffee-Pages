import React from "react";
import { Button, Flex } from "antd";
import "../HomeButton/homeButton";
import './homeButton.css'

const HomeButton = () => (
  <div>
      <div className="orderButtonContainer">
        <Button
          className="orderButton"
          type="primary"
          style={{ background: "white", color: "black", fontSize: 20}}
          size="large"
        >
          Order Now
        </Button>
      </div>
  </div>
);
export default HomeButton;
