import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./Home.module.css";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Home = () => {
  return (
    <section className={styles.body}>
      <div className={`hero-section container ${styles.container}`}>
        <div className="row align-items-center justify-content-center">
          <div className="col-md-8">
            <div>
              <h1 className={`display-2 ${styles.title}`}>
                <span className={styles.titleName}>Kha Nguyen</span>
              </h1>
              <p className={`lead ${styles.description}`}>
                Creative Designer, Frontend Developer and all around a great
                guy!
              </p>
              <Row>
                <Col md={12}>
                  <div className="text-center">
                    <button
                      onClick={() => {
                        window.open("https://github.com/your-github-profile");
                      }}
                      className="socialMediaBtn"
                    >
                      <AiFillGithub className="icon" /> GitHub
                    </button>
                    <button
                      onClick={() => {
                        window.open(
                          "https://www.linkedin.com/in/your-linkedin-profile/"
                        );
                      }}
                      className="socialMediaBtn"
                    >
                      <FaLinkedinIn className="icon" /> LinkedIn
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
