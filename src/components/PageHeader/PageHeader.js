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

// reactstrap components
import { Container, Button } from "reactstrap";

export default function PageHeader() {
  return (
    <>
      <div className="page-header header-filter">
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="squares square7" />
        <Container>
          <div className="content-center brand">
            <h1 className="h1-seo" style={{ fontSize: '400%' }}>Hi, I'm Terry👋🏼</h1>
            <h3 style={{ fontSize: '170%', textTransform: 'none' }}>
              CS & Math Student at Rutgers University
            </h3>
            <Button
              color="secondary"
              href=""
            >
              More About Me
            </Button>
          </div>
        </Container>
      </div>

      
    </>
  );
}
