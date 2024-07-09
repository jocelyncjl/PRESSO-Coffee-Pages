import React from "react";
import Navbar from "../../components/Navbar/nav";
import HomeButton from "../../components/HomeButton/homeButton";
import '../home/index.css';
import { Flex,TabNav, Text, Button } from "@radix-ui/themes";
import PressoSlogan from "../../components/HomeSlogan/slogan";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <HomeButton/>
      <PressoSlogan/>




    </div>
  );
};

export default Home;
