import React, { useState } from "react";
import { Flex, Layout } from "antd";
import Navbar from '../../components/Navbar/nav';
import './about.css';
import AboutBackground from './AboutBackground.jpg';
import CoffeePlus from './CoffeePlus.jpg'


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

const imgStyle = {
    display: "block",
    margin: "0 auto",
    
    width:"80%",
    height:"40%",
    
  };

const imgPlusStyle = {
    display: "block",
    width:"100%",
    height:"100%",
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
                            <h1>
                                UNLOCK the TASTE of PRESSO
                            </h1>
                            <p>
                            The story of PRESSO begins with a profound passion for coffee – a relentless pursuit to unlock the true essence of the perfect brew. 
                            It all started with a dream to elevate the coffee experience, to create a product that would captivate the senses and transport the drinker to a realm of pure indulgence. 
                            The founders of PRESSO, a team of seasoned coffee experts and enthusiasts, embarked on a meticulous journey of discovery.
                            They traveled the world, exploring the finest coffee-growing regions, seeking out the most exceptional beans and perfecting the art of roasting. 
                            Each step of the process was meticulously refined, driven by an unwavering commitment to quality and a desire to redefine the boundaries of what a cup of coffee could be.
                            </p>
                        </div>

                        <div className="CoffeeImage">
                            <img
                                alt="CoffeeBackground"
                                src={CoffeePlus}
                                style={imgPlusStyle}
                            />

                        </div>

                        <div className="CoffeeIntro">
                            <h1>
                                "PRESSO - Infusing Life with Unique Allure"
                            </h1>
                            <p>
                                Focused on developing and providing high-quality coffee.
                                Striving for perfection in every step, from source to cup.
                                Committed to delivering a distinct and unforgettable coffee experience for consumers.
                            </p>
                        </div>
                    
                    </div>
                    
                </Content>
            </Layout>
            



        </div>
      
        
        













    );

};

export default About;