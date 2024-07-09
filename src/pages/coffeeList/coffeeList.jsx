import React from 'react';
import { Flex, Layout } from 'antd';


const { Header, Footer, Sider, Content } = Layout;

const layoutStyle = {
    height: '100vh',  
    width: '100vw',   
};

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: '10vh',
  paddingInline: 48,
  lineHeight: '10vh',
  backgroundColor: 'black',
};

const siderStyle = {
    backgroundColor: 'black', 
    width: 30, 
};

const contentStyle = {
    textAlign: 'center',
    height: '80vh',
    lineHeight: '80vh',
    color: '#fff',
    backgroundColor: 'white',
    

};

const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'black',
    height: '10vh',
    lineHeight: '10vh',
};


const CoffeeList = () => (
    <Flex gap="middle" wrap>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>Header</Header>
        <Layout>
            <Sider style={siderStyle} width={40}/>
            <Content style={contentStyle}>Content</Content>
        </Layout>
        
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Flex>
);

export default CoffeeList;
