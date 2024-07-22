import React, { useState } from "react";
import { Flex, Layout, Col, Row, Card, Typography, Button,message } from "antd";
import Navbar from "../../components/Navbar/nav";
import "./coffeeList.css";
import velvetAmericano from "./VelvetAmericano.png";
import ClassicLatte from "./ClassicLatte.png";
import VannilaLatte from "./VanillaLatte.png";
import CaramelLatte from "./CaramelLatte.png";
import CherryLatte from "./CherryLatte.png";
import ClassicCappuccino from "./ClassicCappuccino.png";
import CoconutCappuccino from "./CoconutCappuccino.png";
import StrawberryFrappuccino from "./StrawberryFrappuccino.png";
import AvocadoFrappuccino from "./AvocadoFrappuccino.png";
import { useCart } from "../cart/cartContent";

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
  height: 260,
  margin: "0 auto",
};

const CoffeeList = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (coffee) => {
    console.log('coffee-x',coffee);
    
    addToCart(coffee);


    message.success("Add to cart successfully");
  };
    

  const CoffeeCard = ({ coffee }) => {
    

    return <Card
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
        <img alt={coffee.name} src={coffee.image} style={imgStyle} />
        <Flex
          vertical
          align="flex-end"
          justify="space-between"
          style={{
            padding: 32,
          }}
        >
          <Typography.Title level={3}>
            {coffee.name}
            <div className="CoffeeDescrip">{coffee.description}</div>
            <div>€{coffee.price.toFixed(2)}</div>
          </Typography.Title>
          <Button
            type="primary"
            onClick={() => handleAddToCart(coffee)}
          >
            Add to Cart
          </Button>
        </Flex>
      </Flex>
    </Card>
  };

  const coffees = [
    { name: "Iced Velvet Americano", description: "Smooth Espresso with Milk", price: 4.50, image: velvetAmericano },
    { name: "Classic Latte", description: "Espresso with Steamed Milk", price: 5.00, image: ClassicLatte },
    { name: "Vanilla Latte", description: "Espresso with Vanilla Syrup", price: 5.50, image: VannilaLatte },
    { name: "Caramel Latte", description: "Espresso with Caramel Syrup", price: 5.50, image: CaramelLatte },
    { name: "Cheery Latte", description: "Espresso with Cherry Syrup", price: 5.75, image: CherryLatte },
    { name: "Classic Cappuccino", description: "Espresso, Steamed Milk, Foam, Classic", price: 4.75, image: ClassicCappuccino },
    { name: "Coconut Cappuccino", description: "Espresso, Steamed Milk, Coconut Milk, Coconut Syrup", price: 5.25, image: CoconutCappuccino },
    { name: "Iced Strawberry Cream Frappuccino", description: "Strawberry Syrup, Ice, Milk, Whipped Cream", price: 5.50, image: StrawberryFrappuccino },
    { name: "Iced Avocado Cream Frappuccino", description: "Avocado, Ice, Milk, Cream, Smooth and Creamy", price: 5.50, image: AvocadoFrappuccino },
    
  ];

  return (
    <div className="coffee-main">
      <Flex gap="middle" wrap>
        <Layout style={layoutStyle}>
          <Header style={headerStyle}>
            <Navbar />
          </Header>
          <Layout>
            <Sider style={siderStyle} width={40} />
            {/* <Content style={contentStyle}>
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
                            <div>€4.50</div>
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
                        <img alt="avatar" src={ClassicLatte} style={imgStyle} />
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
                            <div>€5.00</div>
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
                        <img alt="avatar" src={VannilaLatte} style={imgStyle} />
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
                            <div>€5.50</div>
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
                        <img alt="avatar" src={CaramelLatte} style={imgStyle} />
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
                            <div>€5.50</div>
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
                        <img alt="avatar" src={CherryLatte} style={imgStyle} />
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
                            <div>€5.75</div>
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
                            <div>€4.75</div>
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
                              Espresso, Steamed Milk, Coconut Milk, Coconut
                              Syrup
                            </div>
                            <div>€5.25</div>
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
                            <div>€5.50</div>
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
                            <div>€5.50</div>
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
            </Content> */}
            <Content style={contentStyle}>
              <Row>
                {coffees.map((coffee, index) => (
                  <Col span={8} key={index}>
                    <CoffeeCard coffee={coffee} />
                  </Col>
                ))}
              </Row>
            </Content>
          </Layout>
        </Layout>
      </Flex>
    </div>
  );
};

export default CoffeeList;
