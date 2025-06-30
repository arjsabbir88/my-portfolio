import Links from "@/Component/Links/Links";
import { Title } from "@/Component/Welcome/Title";
import React from "react";
import About from "../About/About";
import { Technical } from "../TechnicalSkills/Technical/Technical";
import Tools from "../TechnicalSkills/Tools/Tools";
import { TimelineDemo } from "../Project/Project";
import { Contact } from "../Contact/Contact";

const Home = () => {
  return (
    <div className="text-white">
      <div id="home">
        <Title></Title>
      </div>
      <div>
        <Links></Links>
      </div>
      <div id="about">
        <About></About>
      </div>
      <div id="skills">
        <Technical></Technical>
        <Tools></Tools>
      </div>
      <div id="projects">
        <TimelineDemo></TimelineDemo>
      </div>
      <div id="contact" className="bg-black">
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
