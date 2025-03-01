import React from "react";
import Skip from "../components/Skip";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Skill from "../components/Skill";
import Site from "../components/Site";
//import Port from "../components/Port";
import Contact from "../components/Contact";
// import Footer from "../components/Footer";
import Main from "../components/Main";

function HomeView() {
  return (
    <div>
      <Skip />
      <Header />
      <Main>
        <Intro />
        <Skill />
        <Site />
        <Contact />
      </Main>
    </div>
  );
}

export default HomeView;
