import React, { useState } from "react";
import { Flex, Layout, Col, Row, Card, Typography, Button } from "antd";
import Navbar from "../../components/Navbar/nav";
import "./coffeeList.css";
import velvetAmericano from './VelvetAmericano.png';
import ClassicLatte from './ClassicLatte.png';
import VannilaLatte from './VanillaLatte.png';
import CaramelLatte from './CaramelLatte.png';
import CherryLatte from './CherryLatte.png';
import ClassicCappuccino from './ClassicCappuccino.png';
import CoconutCappuccino from './CoconutCappuccino.png';
import StrawberryFrappuccino from './StrawberryFrappuccino.png';
import AvocadoFrappuccino from './AvocadoFrappuccino.png';

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
  width: 260,
  height:260,
  margin: "0 auto",
  
  
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
                        src={velvetAmericano}
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
                            Iced Velvet Americano
                            <div className="CoffeeDescrip">
                                Smooth Espresso with Milk
                            </div>
                        </Typography.Title>
                        <Button
                          type="primary"
                          href="https://ant.design"
                          target="_blank"
                        >
                          Add to Cart
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
                        src={ClassicLatte}
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
                            Classic Latte
                            <div className="CoffeeDescrip">
                                Espresso with Steamed Milk
                            </div>
                        </Typography.Title>
                        <Button
                          type="primary"
                          href="https://ant.design"
                          target="_blank"
                        >
                          Add to Cart
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
                        src={VannilaLatte}
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
                            Vanilla Latte
                            <div className="CoffeeDescrip">
                                Espresso with Vanilla Syrup
                            </div>
                        </Typography.Title>
                        <Button
                          type="primary"
                          href="https://ant.design"
                          target="_blank"
                        >
                          Add to Cart
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
                        src={CaramelLatte}
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
                            Caramel Latte
                            <div className="CoffeeDescrip">
                                Espresso with Caramel Syrup
                            </div>
                        
                        </Typography.Title>
                        <Button
                          type="primary"
                          href="https://ant.design"
                          target="_blank"
                        >
                          Add to Cart
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
                        src={CherryLatte}
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
                            Cheery Latte
                            <div className="CoffeeDescrip">
                                Espresso with Cherry Syrup
                            </div>
                        </Typography.Title>
                        <Button
                          type="primary"
                          href="https://ant.design"
                          target="_blank"
                        >
                          Add to Cart
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
                        src={ClassicCappuccino}
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
                            Classic Cappuccino
                            <div className="CoffeeDescrip">
                                Espresso, Steamed Milk, Foam, Classic
                            </div>
                        </Typography.Title>
                        <Button
                          type="primary"
                          href="https://ant.design"
                          target="_blank"
                        >
                          Add to Cart
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
                        src={CoconutCappuccino}
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
                            Coconut Cappuccino
                            <div className="CoffeeDescrip">
                                Espresso, Steamed Milk, Coconut Milk, Coconut Syrup
                            </div>
                        </Typography.Title>
                        <Button
                          type="primary"
                          href="https://ant.design"
                          target="_blank"
                        >
                          Add to Cart
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
                        src={StrawberryFrappuccino}
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
                            Iced Strawberry Cream Frappuccino
                            <div className="CoffeeDescrip">
                                Strawberry Syrup, Ice, Milk, Whipped Cream
                            </div>
                        </Typography.Title>
                        <Button
                          type="primary"
                          href="https://ant.design"
                          target="_blank"
                        >
                          Add to Cart
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
                        src={AvocadoFrappuccino}
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
                            Iced Avocado Cream Frappuccino
                            <div className="CoffeeDescrip">
                                Avocado, Ice, Milk, Cream, Smooth and Creamy
                            </div>
                        </Typography.Title>
                        <Button
                          type="primary"
                          href="https://ant.design"
                          target="_blank"
                        >
                          Add to Cart
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
