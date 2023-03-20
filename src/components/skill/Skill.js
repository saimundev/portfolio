import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SkillData from "../../data/SkillData";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import {motion} from "framer-motion"
import "./Skill.css";

const Skill = () => {
  return (
    <Container id="skill" style={{marginBottom:"80px"}}>
      <motion.div
        transition={{ duration: 0.5}}
        initial={{ opacity: 0, y: "300px" }}
        whileInView={{ opacity: 1, y: "0px" }}
        viewport={{once:true}}
        className="text-center"
      >
        <h1 className="skill__title ">Skills 🔥</h1>
        <Row className="gy-5">
          {SkillData.map((item) => (
            <Col xs={6} sm={6} md={2}>
              <a data-tooltip-id={item.title}>
                <Tooltip id={item.title}>
                  <div className="">{item.title}</div>
                </Tooltip>
                <div
                  className=""
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-title="Tooltip on top"
                >
                  <div className="skill__border">
                    <img src={item.image} alt="" className="skill__Img" />
                  </div>
                </div>
              </a>
            </Col>
          ))}
        </Row>
      </motion.div>
    </Container>
  );
};

export default Skill;
