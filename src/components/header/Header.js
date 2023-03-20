import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import image from "../../assets/image/image1.png";
import { motion } from "framer-motion";
import "./Header.css";

const Header = () => {
  return (
    <div className="header" id="home">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: "200px" }}
          whileInView={{ opacity: 1, y: "0px" }}
          viewport={true}
          transition={{ duration: 0.8,delay:.5 }}
          className=""
        >
          <Row className="gy-4">
            <Col xs={12} sm={12} md={6}>
              <h1 className="header__title">
                Hi, I'm Saimun <span className="wave">👋</span>
              </h1>
              <h3 className="header__sub-title">
                <span className="hed__span"> And I Am</span>
                <Typewriter
                  options={{
                    strings: [
                      "MERN Stack Developer",
                      "Ui/UX Designer",
                      "App Developer",
                      "Open Source Contributor",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h3>
              <p className="header__text">
                A passionate Full Stack Software Developer 🚀 having a special
                interest in MERN Stack technologies and experience of building
                Web applications with JavaScript / Reactjs / NextJs / Nodejs /
                React Native and some other cool libraries and frameworks.
              </p>
              <div className="header__btn-group">
                <motion.a whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} href="https://github.com/saimundev" className="header__btn">
                  <FaGithub /> View On Github
                </motion.a>
                <motion.a
                whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}
                  href="https://www.linkedin.com/in/saimundev/"
                  className="header__btn"
                >
                  <FaLinkedin /> View On Linkdin
                </motion.a>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6}>
              <div
                className="text-center"
                
              >
                <img src={image} alt="" className="header__img img-fluid" />
              </div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </div>
  );
};

export default Header;
