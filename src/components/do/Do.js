import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Data from "../../data/DoData";
import { motion } from "framer-motion";
import "./Do.css";

const Do = () => {
  return (
    <Container id="do" style={{marginBottom:"80px"}}>
      <motion.div
        transition={{ duration: .5 }}
        initial={{ opacity: 0, x: "-300px" }}
        whileInView={{ opacity: 1, x: "0px" }}
        viewport={{once:true}}
        className="text-center"
      >
        <h1 className="do__title">What I Do? 👨‍💻</h1>
        <div className="cart__group">
          {Data.map((item) => (
            <div key={item.id} className="cart">
              <h5 className="cart__icon">{item.icon}</h5>
              <p className="cart__title">{item.title}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </Container>
  );
};

export default Do;
