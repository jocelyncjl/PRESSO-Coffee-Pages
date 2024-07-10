import React, { useState } from "react";
import { Flex, Layout } from "antd";
import Navbar from '../../components/Navbar/nav';
import './about.css';
import AboutBackground from './AboutBackground.jpg';


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

const contentStyle = {
    textAlign: "center",
  //   height: "80vh",
    lineHeight: "80vh",
    color: "#fff",
    backgroundColor: "white",
};

const imgStyle = {
    display: "block",
    margin: "0 auto",
    
    width:"80%",
    height:"40%",
    
  };


const About = () => {
    return(
        <div className="aboutMain">
            <Layout style={layoutStyle}>
                <Header style={headerStyle}>
                <Navbar />    
                </Header>
                <Content style={contentStyle}>
                    <div className="BackgroundMain">
                        <img
                            alt="avatar"
                            src={AboutBackground}
                            style={imgStyle}

                        />
                        <div className="IntroBlock">
                            <p>
                                UNLOCK the TASTE of PRESSO
                            </p>
                            <p>
                                Where Passion Meets Perfection in Every Sip
                            </p>
                        </div>
                    </div>
                    



                </Content>
            </Layout>
            



        </div>
      
        
        













    );

};

export default About;