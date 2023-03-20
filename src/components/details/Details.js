import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Navber from "../navber/Navber";
import { motion } from "framer-motion"
import "./Details.css";

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const feachData = async () => {
      const res = await fetch("/data.json");
      const detailsData = await res.json();
      setData(detailsData);
    };
    feachData();
  }, [id]);

  const findProject = data.find((project) => project.id === parseInt(id));
  console.log(findProject);

  return (
    <Container>
      <Navber />
      <motion.div
        transition={{ duration: 0.7 }}
        initial={{ opacity: 0, y: "100px" }}
        whileInView={{ opacity: 1, y: "0px" }}
        viewport={true}
        className="mt-2"
      >
        <img src={findProject?.image} alt="" className="img-fluid mt-5" />
        <h2 className="details__heading text-center">{findProject?.name}</h2>
        <div className="details__btn-group">
          <button className="details__btn">Live Site</button>
          <button className="details__btn">Clind Site Code Link</button>
          <button className="details__btn">Server Site Code Link</button>
        </div>
        <div className="">
          <h4 className="details__tech-header">Technology Used</h4>
          <p className="detail__tech">{findProject?.teconlogy}</p>
        </div>
        <div className="">
          <h4 className="details__feacher">feacher:</h4>
          <p
            dangerouslySetInnerHTML={{ __html: findProject?.decription }}
            className="details__text"
          />
        </div>
      </motion.div>
    </Container>
  );
};

export default Details;
