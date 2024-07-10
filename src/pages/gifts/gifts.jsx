import React, { useState } from "react";
import { Flex, Layout, Col, Row, Card, Typography, Button } from "antd";
import Navbar from "../../components/Navbar/nav";
import "./gifts.css";
import BlackCoffeeBeans from './BlackCoffeeBeans.png';
import PorcelainCup from './PorcelainCup.png';
import GlassCup from './GlassCup.png';
import StainlessCup from './StainlessCup.png';
import TShirt from './T-shirt.png';
import BearDoll from './BearDoll.png';

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

const GiftsList = () => {
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
                        src={BlackCoffeeBeans}
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
                            Black Coffee Beans
                            <div className="CoffeeDescrip">
                                PRESSO's selected single-origin black coffee beans
                            </div>
                        </Typography.Title>
                        <Button
                          type="primary"
                          href="https://ant.design"
                          target="_blank"
                        >
                          Redeem
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
                        src={PorcelainCup}
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
                            Presso Porcelain Cup
                            <div className="CoffeeDescrip">
                                PRESSO brand high-quality porcelain coffee cup
                            </div>
                        </Typography.Title>
                        <Button
                          type="primary"
                          href="https://ant.design"
                          target="_blank"
                        >
                          Redeem
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
                        src={GlassCup}
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
                            Presso Glass Cup
                            <div className="CoffeeDescrip">
                                PRESSO elegant transparent glass coffee cup
                            </div>
                        </Typography.Title>
                        <Button
                          type="primary"
                          href="https://ant.design"
                          target="_blank"
                        >
                          Redeem
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
                        src={StainlessCup}
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
                            Presso Stainless Cup
                            <div className="CoffeeDescrip">
                                PRESSO premium stainless steel coffee cup
                            </div>
                        
                        </Typography.Title>
                        <Button
                          type="primary"
                          href="https://ant.design"
                          target="_blank"
                        >
                          Redeem
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
                        src={TShirt}
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
                            Presso T shirt
                            <div className="CoffeeDescrip">
                                PRESSO exclusive coffee-themed T-shirt
                            </div>
                        </Typography.Title>
                        <Button
                          type="primary"
                          href="https://ant.design"
                          target="_blank"
                        >
                          Redeem
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
                        src={BearDoll}
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
                            Presso Bear Doll
                            <div className="CoffeeDescrip">
                                PRESSO adorable coffee bean bear plush toy
                            </div>
                        </Typography.Title>
                        <Button
                          type="primary"
                          href="https://ant.design"
                          target="_blank"
                        >
                          Redeem
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

export default GiftsList;
