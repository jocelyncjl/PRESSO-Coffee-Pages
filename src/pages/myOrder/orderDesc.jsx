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
  Spin,
} from "antd";
import { Link, useParams } from "react-router-dom";
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

const style = {
  padding: "8px 0",
};

export default function OrderDetail() {
  const [order, setOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:8080/api/get_order_detail.php?id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('order detail:', data);
        setOrder(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoading(false);
      });
  }, [id]);

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
    return <Spin size="large" />;
  }

  if (!order) {
    return <div>No order data available</div>;
  }

  return (
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
                  <h1>Order #{order.id}</h1>
                  <p>Order details</p>
                </div>
              </Col>
              <Col span={12}>
                <div className="title-right">
                  <Tag
                    color="green"
                    style={{
                      width: 60,
                      height: 40,
                      fontSize: 20,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Paid
                  </Tag>
                </div>
              </Col>
            </Row>
          </div>

          <Divider />

          <Space
            direction="vertical"
            size="middle"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Row gutter={16}>
              <Col className="gutter-row" span={13}>
                <div style={style}>
                  <div className="order-details">
                    <Space direction="vertical" size={100}>
                      <Card
                        title="Order Details"
                        style={{
                          width: 400,
                          height: 300,
                        }}
                      >
                        <div className="details-content">
                          <span>Order #</span>
                          <span>{order.id}</span>
                        </div>

                        <div className="details-content">
                          <span>Date</span>
                          <span>{new Date(order.order_date).toLocaleString()}</span>
                        </div>

                        <div className="details-content">
                          <span>Customer</span>
                          <span>{order.customer_name}</span>
                        </div>
                      </Card>
                    </Space>
                  </div>
                </div>
              </Col>

              <Col className="gutter-row" span={6}>
                <div style={style}>
                  <div className="order-summary">
                    <Space direction="vertical" size={16}>
                      <Card
                        title="Order Summary"
                        style={{
                          width: 400,
                          height: 300,
                        }}
                      >
                        <div className="details-content">
                          <span>Items</span>
                          <span>{order.items ? order.items.length : 0}</span>
                        </div>

                        <div className="details-content">
                          <span>Total</span>
                          <span>€{parseFloat(order.total_amount).toFixed(2)}</span>
                        </div>
                      </Card>
                    </Space>
                  </div>
                </div>
              </Col>
            </Row>

            <div className="order-items">
              <Space direction="vertical" size={16}>
                <Card
                  title="Order Items"
                  style={{
                    width: 600,
                    minHeight: 400,
                  }}
                >
                  <Table
                    columns={columns}
                    dataSource={order.items || []}
                    pagination={false}
                  />
                </Card>
              </Space>
            </div>
          </Space>
        </div>
      </Content>
    </Layout>
  );
}