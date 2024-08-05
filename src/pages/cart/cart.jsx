import React, { useState,useEffect} from "react";
import { Layout, Button, Image, message } from "antd";
import coffeeLogo from "./coffee-logo.png";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate} from "react-router-dom";
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

// const handleCheckout = () => {
//   message.success("Paid successfully");
// };

const CartList = () => {
  const { cartItems, removeFromCart,clearCart,currentUser} = useCart();

  const navigate = useNavigate();

  useEffect(() => {
    console.log("Current user in cart:", currentUser);
  }, [currentUser]);

  console.log("cartItems", cartItems);

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

  const handleCheckout = () => {
    if (!currentUser) {
      console.log("No current user found at checkout");
      message.error("Please log in to complete your order");
      return;
    }

    const orderData = {
      user_id: currentUser.id,
      total_amount: grandTotal,
      items: cartItems.map(item => ({
        coffee_id: item.id,
        quantity: item.quantity,
        price: item.price
      }))
    };

    console.log('Sending order data:', orderData); 

  
    fetch('http://localhost:8080/api/create_order.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    })
    .then(response => {
      console.log('Response status:', response.status); 
      return response.json();
    })
    .then(data => {
      console.log('Received data:', data); 
      if (data.order_id) {
        message.success('Payment successful! Order submitted.');
        // clearCart();
        // navigate(`/order/${data.order_id}`);
      } else {
        message.error('Failed to submit order: ' + (data.message || 'Unknown error'));
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      message.error('An error occurred while submitting the order');
    });
  };

  return (
    <div>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>
          <Link to="/">
            <div className="cart-brand">
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
            <Table columns={columns} 
            dataSource={cartItems.map((item, index) => ({ 
              ...item, 
              key: item.id || item.name || index 
            }))}/>
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
                onClick={handleCheckout}
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
