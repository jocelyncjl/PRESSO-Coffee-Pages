import React, { useState } from "react";
import { Flex, Layout, Button } from "antd";
import Navbar from "../../components/Navbar/nav";
import "./blog.css";

import { Divider, List, Typography } from "antd";

import { Input } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const layoutStyle = {
  //   height: "100vh",
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
  // textAlign: "center",
  //   height: "80vh",
  // lineHeight: "80vh",
  color: "#fff",
  backgroundColor: "white",
};

const data = [
  "The coffee flavor of PRESSO is incredibly rich and full-bodied. Every sip is an absolute delight.",
  "This is one of the best-tasting coffees I've ever tried.",
  "As a coffee enthusiast, I'm deeply impressed by the quality of PRESSO's coffee.",
  "I love the variety of flavors PRESSO offers, from their classic black coffee to their delightful flavored lattes.",
  "Each cup is bursting with the rich aroma of premium coffee.",
];

const { TextArea } = Input;

const Blog = () => {
  return (
    <div className="aboutMain">
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>
          <Navbar />
        </Header>
        <Content style={contentStyle}>
          <div className="CommentsBlock">
            <div className="CommentsIntro">
              <h1>Introducing the PRESSO Signature Blend</h1>
              <div className="CommentsDetails">
                <p>
                  At the heart of PRESSO lies our signature blend, a harmonious
                  union of the finest Arabica beans from around the world.
                  Carefully selected and expertly roasted, this blend offers a
                  rich, full-bodied flavor with notes of dark chocolate,
                  caramel, and a subtle hint of citrus. Whether you prefer your
                  coffee black, with a splash of milk, or in a creamy latte, our
                  signature blend is the perfect canvas for your coffee
                  creations. Discover the depth and complexity of this
                  exceptional blend and elevate your daily coffee ritual.
                </p>
              </div>

              <div className="CommentsList">
                <Divider orientation="left">Comments</Divider>
                <List
                  size="large"
                  header={<div>Her</div>}
                  footer={<div>Footer</div>}
                  bordered
                  dataSource={data}
                  renderItem={(item) => <List.Item>{item}</List.Item>}
                />
              </div>

              <h2>
                Leave a Comment Here
              </h2>

              <TextArea rows={4} />

              <Flex
                vertical
                gap="small"
                style={{
                    width: '100%',
                }}
              >
                <Button type="primary" block style={{marginTop:"10px"}}>
                    Submit
                </Button>

              </Flex>
                
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default Blog;
