import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";
import Card1 from './Cards/Card1.js'
import Card2 from './Cards/Card2.js'
import Card3 from './Cards/Card3.js'
function Projects() {
    return (
      <>
        <div
        >
          <Container >
            <Row className="justify-content-md-center">
              <Col className="text-center" lg="8" md="12">
                <h3 className="title">Projects</h3>
                <h5 className="description">My recent projects</h5>
                </Col>
                </Row>
                </Container>
                <div className="d-flex justify-content-center">
                <Card1 />
                <Card2 />
                <Card3 />
                </div>
                </div>
                </>
  );
}

export default Projects;
