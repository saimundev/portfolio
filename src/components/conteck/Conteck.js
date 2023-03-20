import React, { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { motion} from "framer-motion"
import "./Conteck.css";

const Conteck = () => {
  const [success, SetSuccess] = useState("");
  const from = useRef();
  const hanldeEmailSend = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xvqybb9",
        "template_ugmmker",
        from.current,
        "user_SSirWxIt7cqdFqRE1zsLY"
      )
      .then((response) => {
        if (response.status == 200) {
          SetSuccess("Message send successfull");
        } else {
          SetSuccess("Somethig went wrong. Try again later");
        }
      });
  };
  return (
    <motion.div
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0, y: "300px" }}
      whileInView={{ opacity: 1, y: "0px" }}
      viewport={{once:true}}
      style={{ marginBottom: "30px" }}
      id="conteck"
    >
      <Container>
        <div className="text-center">
          <h1 className="conteck__title ">Contact me 📱</h1>
        </div>

        <Row className="g-5">
          <Col xs={12} sm={12} md={6}>
            <form ref={from} onSubmit={hanldeEmailSend}>
              <div className="mb-3">
                <input
                  type="text"
                  required
                  name="name"
                  id=""
                  placeholder="Enter Your Name"
                  className="conteck__input"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  id=""
                  placeholder="Enter Your Name"
                  className="conteck__input"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="5"
                  placeholder="Enter Your Message"
                  className="conteck__input"
                  required
                ></textarea>
              </div>
              <button type="submit" className="conteck__btn">
                Submit
              </button>
              <p
                style={{
                  color: "green",
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginTop: "10px",
                }}
              >
                {success}
              </p>
            </form>
          </Col>
          <Col xs={12} sm={12} md={3} className="">
            <div className="conteck__box">
              <div className="conteck__phone">
                <FaPhoneAlt size={28} color="white" />
              </div>
              <h6 className="conteck__text">Phone</h6>
              <p className="conteck__number">+8801303442031</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={3}>
            <div className="conteck__box">
              <div className="conteck__phone">
                <HiLocationMarker size={32} color="white" />
              </div>
              <h6 className="conteck__text">Location</h6>
              <p className="conteck__number">Barishal, Bangladesh</p>
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Conteck;
