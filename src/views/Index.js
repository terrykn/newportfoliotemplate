/*!

=========================================================
* BLK Design System React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";

import { Container, Row, Col, UncontrolledCarousel, Button, UncontrolledTooltip, Toast, ToastHeader, ToastBody } from "reactstrap";

export default function Index() {
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);

  const carouselItems = [
    {
      src: require("assets/img/denys.jpg"),
      altText: "Slide 1",
      caption: "Big City Life, United States",
    },
    {
      src: require("assets/img/fabien-bazanegue.jpg"),
      altText: "Slide 2",
      caption: "Somewhere Beyond, United States",
    },
    {
      src: require("assets/img/mark-finn.jpg"),
      altText: "Slide 3",
      caption: "Stocks, United States",
    },
  ];

  return (
    <>
      {/* NAVBAR */} 
      <IndexNavbar />
      <div className="wrapper">
        <PageHeader />
        <div className="main">
          
        </div>
      </div>

      {/* ABOUT ME */}
      <div className="section">
          <img
            alt="..."
            className="dots"
            src={require("assets/img/dots.png")}
          />
          <img
            alt="..."
            className="path"
            src={require("assets/img/path4.png")}
          />
          <Container className="align-items-center">
            <Row>
              <Col lg="6" md="6">
                <h1 className="profile-title text-left">Terry Nguyen</h1>
                <p className="profile-description">
                  Hello, I'm a Computer Science and Mathematics double-major student at Rutgers University, New Brunswick. I'm passionate about technology and aspire to contribute my skills to projects that create a tangible impact.
                </p>
                <p className="profile-description">
                  <br/>At Rutgers, I'm a part of the Honors College, IDEA, USACS, the Sailing Team, and Habitat for Humanity. I enjoy meeting new people and exploring courses in interesting topics like cosmology, psychology, and philosophy. 
                </p>
                <p className="profile-description">
                  <br/>Outside of the classroom, I'm an avid traveler, seafood lover, and amateur photographer. I like taking road trips with my family and going swimming at beaches. 🏖️
                </p>
                <br/>
                <p className="profile-description">
                ✈️ Dual citizen of US and Vietnam <br/>
                🎻 Violin and piano player
                </p>
                <div className="btn-wrapper profile pt-3">
                  <Button
                    className="btn-icon btn-round"
                    color="linkedin"
                    href="https://linkedin.com/in/terrykn"
                    id="tooltip639225725"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip639225725">
                    LinkedIn
                  </UncontrolledTooltip>
                  <Button
                    className="btn-icon btn-round"
                    color="github"
                    href="https://github.com/terrykn"
                    id="tooltip982846143"
                    target="_blank"
                  >
                    <i className="fab fa-github-square" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip982846143">
                    Github
                  </UncontrolledTooltip>
                </div>
              </Col>
              <Col className="ml-auto mr-auto" lg="4" md="6">
                
              </Col>

              
            </Row>
          </Container>
        </div>

      {/* EXPERIENCE */}
      <div className="section">
        <Container style={{ marginBottom: '50px' }}>
          <Row className="justify-content-between">
            <Col md="6">
              <Row className="justify-content-between align-items-center">
                <h1 className="profile-title text-left">Experience</h1>
              </Row>

              <Row className="justify-content-between align-items-center">
                <h4>
                  Library Assistant
                </h4>
              </Row>
              <Row className="justify-content-between align-items-center">
                <h5>
                  Alexander Library | Rutgers University
                </h5>
                <p className="profile-description">
                  - Handle phone inquiries and circulation desk services, including book requests, check-outs, and returns.<br/>
                  - Assist patrons at the information desk with accessing library technologies and resources.
                </p>
              </Row>

              <Row className="justify-content-between align-items-center">
                <h4>
                  Library Assistant
                </h4>
              </Row>
              <Row className="justify-content-between align-items-center">
                <h5>
                  Alexander Library | Rutgers University
                </h5>
                <p className="profile-description">
                  - Handle phone inquiries and circulation desk services, including book requests, check-outs, and returns.<br/>
                  - Assist patrons at the information desk with accessing library technologies and resources.
                </p>
              </Row>

              <Row className="justify-content-between align-items-center">
                <h4>
                  Library Assistant
                </h4>
              </Row>
              <Row className="justify-content-between align-items-center">
                <h5>
                  Alexander Library | Rutgers University
                </h5>
                <p className="profile-description">
                  - Handle phone inquiries and circulation desk services, including book requests, check-outs, and returns.<br/>
                  - Assist patrons at the information desk with accessing library technologies and resources.
                </p>
              </Row>

              <Row className="justify-content-between align-items-center">
                <h4>
                  Library Assistant
                </h4>
              </Row>
              <Row className="justify-content-between align-items-center">
                <h5>
                  Alexander Library | Rutgers University
                </h5>
                <p className="profile-description">
                  - Handle phone inquiries and circulation desk services, including book requests, check-outs, and returns.<br/>
                  - Assist patrons at the information desk with accessing library technologies and resources.
                </p>
              </Row>

            </Col>
            <Col md="6">
              <h1 className="profile-title text-left">Education</h1>
              <p className="profile-description text-left">
                aaaaaaaaaaa
              </p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="justify-content-between">
            <Col md="3">
              <Row className="justify-content-between align-items-center">
                <UncontrolledCarousel items={carouselItems} />
              </Row>
            </Col>
            <Col md="3">
              <Row className="justify-content-between align-items-center">
                <UncontrolledCarousel items={carouselItems} />
              </Row>
            </Col>
            <Col md="5">
              <h1 className="profile-title text-left">Hackathons</h1>
              <p className="profile-description text-left">
                Hackathon projects I'm proud of 😀
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* PROJECTS */}
      <div className="section">
        <Container style={{ marginBottom: '50px' }}>
          <Row className="justify-content-between">
            <Col md="3">
              <Row className="justify-content-between align-items-center">
                <UncontrolledCarousel items={carouselItems} />
              </Row>
            </Col>
            <Col md="3">
              <Row className="justify-content-between align-items-center">
                <UncontrolledCarousel items={carouselItems} />
              </Row>
            </Col>
            <Col md="5">
              <h1 className="profile-title text-left">Projects</h1>
              <p className="profile-description text-left">
                Check out a few of my recent projects!
              </p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="justify-content-between">
            <Col md="3">
              <Row className="justify-content-between align-items-center">
                <UncontrolledCarousel items={carouselItems} />
              </Row>
            </Col>
            <Col md="3">
              <Row className="justify-content-between align-items-center">
                <UncontrolledCarousel items={carouselItems} />
              </Row>
            </Col>
            <Col md="5">
              <h1 className="profile-title text-left">Hackathons</h1>
              <p className="profile-description text-left">
                Hackathon projects I'm proud of 😀
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}
