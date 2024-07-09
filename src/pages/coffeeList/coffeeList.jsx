import React, { useState } from "react";
import { Flex, Layout, Col, Row, Card, Typography, Button } from "antd";
import Navbar from "../../components/Navbar/nav";
import "./coffeeList.css";

const { Header, Footer, Sider, Content } = Layout;

const layoutStyle = {
//   height: "100vh",
  width: "100vw",
};

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: "13vh",
  paddingInline: 48,
  lineHeight: "10vh",
  backgroundColor: "#d5573f",
};

const siderStyle = {
  backgroundColor: "black",
  width: 30,

};

const contentStyle = {
  textAlign: "center",
//   height: "80vh",
  lineHeight: "80vh",
  color: "#fff",
  backgroundColor: "white",
};


const cardStyle = {
  width: 320,
};

const imgStyle = {
  display: "block",
  width: 273,
};

const CoffeeList = () => {
  return (
    <div className="coffee-main">
    <Flex gap="middle" wrap>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>
          <Navbar />    
        </Header>
        <Layout>
          <Sider style={siderStyle} width={40} />
          <Content style={contentStyle}>
            <Row>
              <Col span={8}>
                {" "}
                <div style={{}}>
                  {" "}
                  <Card
                    hoverable
                    style={cardStyle}
                    styles={{
                      body: {
                        padding: 0,
                        overflow: "hidden",

                      },
                    }}
                  >
                    <Flex justify="space-between">
                      <img
                        alt="avatar"
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        style={imgStyle}
                      />
                      <Flex
                        vertical
                        align="flex-end"
                        justify="space-between"
                        style={{
                          padding: 32,
                        }}
                      >
                        <Typography.Title level={3}>
                          “antd is an enterprise-class UI design language and
                          React UI library.”
                        </Typography.Title>
                        <Button
                          type="primary"
                          href="https://ant.design"
                          target="_blank"
                        >
                          Get Started
                        </Button>
                      </Flex>
                    </Flex>
                  </Card>
                </div>
              </Col>
              <Col span={8}>
                {" "}
                <div style={{}}>
                  {" "}
                  <Card
                    hoverable
                    style={cardStyle}
                    styles={{
                      body: {
                        padding: 0,
                        overflow: "hidden",
                      },
                    }}
                  >
                    <Flex justify="space-between">
                      <img
                        alt="avatar"
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        style={imgStyle}
                      />
                      <Flex
                        vertical
                        align="flex-end"
                        justify="space-between"
                        style={{
                          padding: 32,
                        }}
                      >
                        <Typography.Title level={3}>
                          “antd is an enterprise-class UI design language and
                          React UI library.”
                        </Typography.Title>
                        <Button
                          type="primary"
                          href="https://ant.design"
                          target="_blank"
                        >
                          Get Started
                        </Button>
                      </Flex>
                    </Flex>
                  </Card>
                </div>
              </Col>
              <Col span={8}>
                {" "}
                <div style={{}}>
                  {" "}
                  <Card
                    hoverable
                    style={cardStyle}
                    styles={{
                      body: {
                        padding: 0,
                        overflow: "hidden",
                      },
                    }}
                  >
                    <Flex justify="space-between">
                      <img
                        alt="avatar"
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        style={imgStyle}
                      />
                      <Flex
                        vertical
                        align="flex-end"
                        justify="space-between"
                        style={{
                          padding: 32,
                        }}
                      >
                        <Typography.Title level={3}>
                          “antd is an enterprise-class UI design language and
                          React UI library.”
                        </Typography.Title>
                        <Button
                          type="primary"
                          href="https://ant.design"
                          target="_blank"
                        >
                          Get Started
                        </Button>
                      </Flex>
                    </Flex>
                  </Card>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                {" "}
                <div style={{}}>
                  {" "}
                  <Card
                    hoverable
                    style={cardStyle}
                    styles={{
                      body: {
                        padding: 0,
                        overflow: "hidden",
                      },
                    }}
                  >
                    <Flex justify="space-between">
                      <img
                        alt="avatar"
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        style={imgStyle}
                      />
                      <Flex
                        vertical
                        align="flex-end"
                        justify="space-between"
                        style={{
                          padding: 32,
                        }}
                      >
                        <Typography.Title level={3}>
                          “antd is an enterprise-class UI design language and
                          React UI library.”
                        </Typography.Title>
                        <Button
                          type="primary"
                          href="https://ant.design"
                          target="_blank"
                        >
                          Get Started
                        </Button>
                      </Flex>
                    </Flex>
                  </Card>
                </div>
              </Col>
              <Col span={8}>
                {" "}
                <div style={{}}>
                  {" "}
                  <Card
                    hoverable
                    style={cardStyle}
                    styles={{
                      body: {
                        padding: 0,
                        overflow: "hidden",
                      },
                    }}
                  >
                    <Flex justify="space-between">
                      <img
                        alt="avatar"
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        style={imgStyle}
                      />
                      <Flex
                        vertical
                        align="flex-end"
                        justify="space-between"
                        style={{
                          padding: 32,
                        }}
                      >
                        <Typography.Title level={3}>
                          “antd is an enterprise-class UI design language and
                          React UI library.”
                        </Typography.Title>
                        <Button
                          type="primary"
                          href="https://ant.design"
                          target="_blank"
                        >
                          Get Started
                        </Button>
                      </Flex>
                    </Flex>
                  </Card>
                </div>
              </Col>
              <Col span={8}>
                {" "}
                <div style={{}}>
                  {" "}
                  <Card
                    hoverable
                    style={cardStyle}
                    styles={{
                      body: {
                        padding: 0,
                        overflow: "hidden",
                      },
                    }}
                  >
                    <Flex justify="space-between">
                      <img
                        alt="avatar"
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        style={imgStyle}
                      />
                      <Flex
                        vertical
                        align="flex-end"
                        justify="space-between"
                        style={{
                          padding: 32,
                        }}
                      >
                        <Typography.Title level={3}>
                          “antd is an enterprise-class UI design language and
                          React UI library.”
                        </Typography.Title>
                        <Button
                          type="primary"
                          href="https://ant.design"
                          target="_blank"
                        >
                          Get Started
                        </Button>
                      </Flex>
                    </Flex>
                  </Card>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                {" "}
                <div style={{}}>
                  {" "}
                  <Card
                    hoverable
                    style={cardStyle}
                    styles={{
                      body: {
                        padding: 0,
                        overflow: "hidden",
                      },
                    }}
                  >
                    <Flex justify="space-between">
                      <img
                        alt="avatar"
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        style={imgStyle}
                      />
                      <Flex
                        vertical
                        align="flex-end"
                        justify="space-between"
                        style={{
                          padding: 32,
                        }}
                      >
                        <Typography.Title level={3}>
                          “antd is an enterprise-class UI design language and
                          React UI library.”
                        </Typography.Title>
                        <Button
                          type="primary"
                          href="https://ant.design"
                          target="_blank"
                        >
                          Get Started
                        </Button>
                      </Flex>
                    </Flex>
                  </Card>
                </div>
              </Col>
              <Col span={8}>
                {" "}
                <div style={{}}>
                  {" "}
                  <Card
                    hoverable
                    style={cardStyle}
                    styles={{
                      body: {
                        padding: 0,
                        overflow: "hidden",
                      },
                    }}
                  >
                    <Flex justify="space-between">
                      <img
                        alt="avatar"
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        style={imgStyle}
                      />
                      <Flex
                        vertical
                        align="flex-end"
                        justify="space-between"
                        style={{
                          padding: 32,
                        }}
                      >
                        <Typography.Title level={3}>
                          “antd is an enterprise-class UI design language and
                          React UI library.”
                        </Typography.Title>
                        <Button
                          type="primary"
                          href="https://ant.design"
                          target="_blank"
                        >
                          Get Started
                        </Button>
                      </Flex>
                    </Flex>
                  </Card>
                </div>
              </Col>
              <Col span={8}>
                {" "}
                <div style={{}}>
                  {" "}
                  <Card
                    hoverable
                    style={cardStyle}
                    styles={{
                      body: {
                        padding: 0,
                        overflow: "hidden",
                      },
                    }}
                  >
                    <Flex justify="space-between">
                      <img
                        alt="avatar"
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        style={imgStyle}
                      />
                      <Flex
                        vertical
                        align="flex-end"
                        justify="space-between"
                        style={{
                          padding: 32,
                        }}
                      >
                        <Typography.Title level={3}>
                          “antd is an enterprise-class UI design language and
                          React UI library.”
                        </Typography.Title>
                        <Button
                          type="primary"
                          href="https://ant.design"
                          target="_blank"
                        >
                          Get Started
                        </Button>
                      </Flex>
                    </Flex>
                  </Card>
                </div>
              </Col>
            </Row>
          </Content>
        </Layout>

      </Layout>
    </Flex>
    </div>
  );
};

export default CoffeeList;
