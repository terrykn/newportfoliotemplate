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

import { Container, Row, Col, UncontrolledCarousel, Button } from "reactstrap";

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
      <IndexNavbar />
      <div className="wrapper">
        <PageHeader />
        <div className="main">
          
        </div>
      </div>

      <div className="section">
        <Container>
          <Row className="justify-content-between">
            <Col md="6">
              <Row className="justify-content-between align-items-center">
                <UncontrolledCarousel items={carouselItems} />
              </Row>
            </Col>
            <Col md="5">
              <h1 className="profile-title text-left">Projects</h1>
              <h5 className="text-on-back">02</h5>
              <p className="profile-description text-left">
                blablabla
              </p>
              <div className="btn-wrapper pt-3">
                <Button
                  className="btn-simple"
                  color="primary"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="tim-icons icon-book-bookmark" /> Bookmark
                </Button>
                <Button
                  className="btn-simple"
                  color="info"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="tim-icons icon-bulb-63" /> Check it!
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}
