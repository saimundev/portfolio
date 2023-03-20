import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";

import "./About.css";

const About = () => {
  return (
    <Container id="about" style={{ marginBottom:"120px"}}>
      <Row className="g-5">
        <Col xs={12} sm={12} md={6} className="order-last">
          <motion.img
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0, x: "300px" }}
          whileInView={{ opacity: 1, x: "0px" }}
          viewport={{once:true}}
            className="about__image img-fluid"
            src="https://static.vecteezy.com/system/resources/previews/004/865/921/original/programmer-people-concept-use-laptop-and-programming-code-program-icon-spreading-with-modern-flat-style-free-vector.jpg"
            alt=""
          />
        </Col>
        <Col xs={12} sm={12} md={6} className="order-first">
          <motion.div
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0, x: "-300px" }}
            whileInView={{ opacity: 1, x: "0px" }}
            viewport={{once:true}}
            className=""
          >
            <h1 className="about__title">About Me 👦</h1>
            <p className="about__text">
              I am able to solve complex logic or other tasks related to web
              development. I have a perfect understanding of how JavaScript,
              TypeScript, HTML, and CSS work. I have a lot of experience working
              with up-to-date technologies especially React JS. I have powerful
              knowledge HTML, CSS, SCSS, Bootstrap, Tailwind CSS, JavaScript
              ES6, TypeScript, ReactJS, NextJS, React Native, Redux, NodeJS,
              NPM, ExpressJS, MongoDB, PostMan, Webpack, Firebase, Figma, XD.
            </p>
            <p className="about__text">
              My favorite in this programming sector is to fix any Errors.
              Because in every error there is hope to learn something new. I
              won't quit until I can fix the error. In this programming life, I
              have tried to solve all kinds of problems and have succeeded. My
              policy is to stick with it until the problem is solved.
            </p>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
