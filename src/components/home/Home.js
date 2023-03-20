import React from "react";
import About from "../about/About";
import Conteck from "../conteck/Conteck";
import Do from "../do/Do";
import Header from "../header/Header";
import Navber from "../navber/Navber";
import Project from "../project/Project";
import Skill from "../skill/Skill";



const Home = () => {
  return (
    <div>
      <Navber />
      <Header />
      <About />
      <Do />
      <Skill />
      <Project />
      <Conteck/>
    </div>
  );
};

export default Home;
