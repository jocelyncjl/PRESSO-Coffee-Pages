import React, { useState, useEffect } from "react";
import {
  Card,
  Layout,
  Space,
  Image,
  Divider,
  Table,
  Col,
  Row,
  Tag,
  List,
} from "antd";
import { Link } from "react-router-dom";
import coffeeLogo from "./coffee-logo.png";
import "./order.css";

const { Header, Content } = Layout;

const layoutStyle = {
  minHeight: "100vh",
};

const headerStyle = {
  color: "#fff",
  height: "13vh",
  paddingInline: 48,
  lineHeight: "10vh",
  backgroundColor: "#d5573f",
};

const contentStyle = {
  padding: "24px",
  color: "#000",
  backgroundColor: "white",
};

export default function MyOrder() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    setIsLoading(true);
    fetch(`http://localhost:8080/api/get_order.php`,{method: 'GET',
    credentials: 'include' })
      .then((response) => response.json())
      .then((data) => {
        console.log('orders----------', data);
        setOrders(data.orders);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoading(false);
      });
  };

  const columns = [
    {
      title: "Item",
      dataIndex: "coffee_name",
      key: "item",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `€${parseFloat(price).toFixed(2)}`,
    },
    {
      title: "Total",
      key: "total",
      render: (_, record) => `€${(record.quantity * record.price).toFixed(2)}`,
    },
  ];


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!orders || orders.length === 0) {
    return <div>No orders available</div>;
  }

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
          <div className="order-main">
            <div className="order-title">
              <Row>
                <Col span={12}>
                  <div className="title-left">
                    <h1>My Orders</h1>
                    <p>Order history</p>
                  </div>
                </Col>
              </Row>
            </div>

            <Divider />

            <List
              itemLayout="vertical"
              size="large"
              pagination={{
                onChange: (page) => {
                  console.log(page);
                },
                pageSize: 3,
              }}
              dataSource={orders}
              renderItem={(order) => (
                <List.Item key={order.id}>
                    <a href={`/order/${order.id}`}>
                  <Card title={`Order #${order.id}`} >
                    <Row gutter={16}>
                      <Col span={12}>
                        <p>Date: {new Date(order.order_date).toLocaleString()}</p>
                        <p>Total Amount: €{parseFloat(order.total_amount).toFixed(2)}</p>
                      </Col>
                      <Col span={12}>
                        <Tag color="green">Paid</Tag>
                      </Col>
                    </Row>
                    <Divider />
                    <Table
                      columns={columns}
                      dataSource={order.items}
                      pagination={false}
                      size="small"
                    />
                  </Card>
                  </a>
                </List.Item>
              )}
            />
          </div>
        </Content>
      </Layout>
    </div>
  );
}