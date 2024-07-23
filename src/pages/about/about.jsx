import React, { useState } from "react";
import { Flex, Layout, Button, Row, Col } from "antd";
import Navbar from "../../components/Navbar/nav";
import "./about.css";
import AboutBackground from "./AboutBackground.jpg";
import CoffeePlus from "./CoffeePlus.jpg";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const { Header, Footer, Sider, Content } = Layout;

const layoutStyle = {
  //   height: "100vh",
  //   width: "100vw",
  //   width: "100vw",
};

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: "13vh",
  paddingInline: 48,
  lineHeight: "10vh",
  backgroundColor: "#d5573f",
};

const contentStyle = {
  //   textAlign: "center",
  //     height: "80vh",
  //   lineHeight: "80vh",
  flex: 1,
  color: "#fff",
  backgroundColor: "white",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "black",
  height: "30vh",
  position: "absolute",
  bottom: 0,
  width: "100%",
  //   height: "50px", /* 设置 footer 的高度 */
};

const imgStyle = {
  display: "block",
  margin: "0 auto",

  width: "80%",
  height: "40%",
};

const imgPlusStyle = {
  display: "block",
  width: "100%",
  height: "100%",
};

const About = () => {
  return (
    <div className="aboutMain">
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>
          <Navbar />
        </Header>
        <Content style={contentStyle} className="clearfix">
          <div className="BackgroundMain clearfix">
            <img alt="avatar" src={AboutBackground} style={imgStyle} />
            <div className="IntroBlock">
              <h1>UNLOCK the TASTE of PRESSO</h1>
              <p>
                The story of PRESSO begins with a profound passion for coffee –
                a relentless pursuit to unlock the true essence of the perfect
                brew. It all started with a dream to elevate the coffee
                experience, to create a product that would captivate the senses
                and transport the drinker to a realm of pure indulgence. The
                founders of PRESSO, a team of seasoned coffee experts and
                enthusiasts, embarked on a meticulous journey of discovery. They
                traveled the world, exploring the finest coffee-growing regions,
                seeking out the most exceptional beans and perfecting the art of
                roasting. Each step of the process was meticulously refined,
                driven by an unwavering commitment to quality and a desire to
                redefine the boundaries of what a cup of coffee could be.
              </p>
            </div>
            <div className="coffee-section">
              <div className="CoffeeImage">
                <img
                  alt="CoffeeBackground"
                  src={CoffeePlus}
                  style={imgPlusStyle}
                />
              </div>

              <div className="CoffeeIntro">
                <h1>"PRESSO - Infusing Life with Unique Allure"</h1>
                <p>
                  Focused on developing and providing high-quality coffee.
                  Striving for perfection in every step, from source to cup.
                  Committed to delivering a distinct and unforgettable coffee
                  experience for consumers.
                </p>
              </div>
            </div>
          </div>
        </Content>
        <div className="coffeeMid"></div>
        <Footer style={footerStyle}>
          <Row>
            <Col span={4} offset={10}>
              <h2>Contact us</h2>
              <p>+353-089-26382637</p>
              <p>info@presso.com</p>
            </Col>
            <Col span={4} offset={1}>
              <h2>Social media</h2>
              <span>
                <FontAwesomeIcon icon={faFacebook} />
              </span>
              <span>
                <FontAwesomeIcon icon={faTwitter} />
              </span>
              <span>
                <FontAwesomeIcon icon={faInstagram} />
              </span>
            </Col>
            <Col span={4} offset={1}>
              <p>© 2024 PRESSO. All rights reserved.</p>
            </Col>
          </Row>
        </Footer>
      </Layout>
    </div>
  );
};

export default About;
