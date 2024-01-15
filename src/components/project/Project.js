import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Project.css";

const Project = () => {
  const [project, setProject] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const feachData = async () => {
      const res = await fetch("./data.json");
      const data = await res.json();
      setProject(data);
    };
    feachData();
  }, []);

  const redirect = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div id="project">
      <Container>
        <motion.div
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0, y: "300px" }}
          whileInView={{ opacity: 1, y: "0px" }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h1 className="skill__title">Projects 💻</h1>
          </div>
          <Row className="g-4">
            {project?.map((item) => (
              <Col md={4} className="">
                <div className="project__cart">
                  <img
                    src={item.image}
                    alt=""
                    className="img-fluid rounded"
                    style={{ height: "200px", objectFit: "contain" }}
                  />
                  <div className="project__text">
                    <span className="project__name">
                      <span className="bold">Name</span> :{item.name}
                    </span>
                    <span className="project__catgory">
                      <span className="bold">Category</span>:{item.category}
                    </span>
                    <span className="project__tech">
                      <span className="bold">Technology</span> :{item.teconlogy}
                    </span>
                  </div>
                  <button
                    className="project__btn"
                    onClick={() => redirect(item.id)}
                  >
                    View Info
                  </button>
                </div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </div>
  );
};

export default Project;
