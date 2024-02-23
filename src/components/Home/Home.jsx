import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./Home.module.css";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Home = () => {
  const [text, setText] = useState([]);
  const animatedText =
    "Bringing Designs to Life, One Pixel at a Time: Your Vision, Elevated.";
  const delay = 50;

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < animatedText.length) {
        setText((prevText) => [...prevText, animatedText[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, delay);
    return () => clearInterval(intervalId);
  }, [animatedText]);

  return (
    <section className={styles.body}>
      <div className={`hero-section container ${styles.container}`}>
        <div className="row align-items-center justify-content-center">
          <div className="col-md-8">
            <div>
              <h1 className={`display-2 ${styles.title}`}>
                <span className={styles.titleName}>Kha Nguyen</span>
              </h1>
              <p className={`lead ${styles.description}`}>{text.join("")}</p>
              <Row>
                <Col md={12}>
                  <div className="text-center">
                    <button
                      onClick={() => {
                        window.open("https://github.com/your-github-profile");
                      }}
                      className={`socialMediaBtn ${styles.socialMediaBtn}`}
                      style={{
                        fontSize: "18px",
                        padding: "12px 24px",
                        borderRadius: "10px",
                        marginRight: "10px",
                      }}
                    >
                      <AiFillGithub
                        className="icon"
                        style={{ marginRight: "8px" }}
                      />{" "}
                      GitHub
                    </button>
                    <button
                      onClick={() => {
                        window.open(
                          "https://www.linkedin.com/in/your-linkedin-profile/"
                        );
                      }}
                      className={`socialMediaBtn ${styles.socialMediaBtn}`}
                      style={{
                        fontSize: "18px",
                        padding: "12px 24px",
                        borderRadius: "10px",
                        marginRight: "10px",
                      }}
                    >
                      <FaLinkedinIn
                        className="icon"
                        style={{ marginRight: "8px" }}
                      />{" "}
                      LinkedIn
                    </button>
                    <button
                      onClick={() => {
                        window.open("test@example.com");
                      }}
                      className={`socialMediaBtn ${styles.socialMediaBtn}`}
                      style={{
                        fontSize: "18px",
                        padding: "12px 24px",
                        borderRadius: "10px",
                      }}
                    >
                      <HiOutlineMail
                        className="icon"
                        style={{ marginRight: "8px" }}
                      />{" "}
                      Email
                    </button>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
