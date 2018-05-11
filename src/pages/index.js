import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Project from '../components/ProjectCard'
import Quote from '../components/Quote'
import Stat from '../components/Stat'

const IndexPage = () => [
  <div key="index-hero" className="PW-Banner PW-Banner__jumbo">
    <Container className="d-flex align-content-center flex-wrap">
      <Row>
        <Col>
      <h1 className="display-1">Ponk Memoli</h1>
      <p className="lead">Freelance Architect</p>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs="12" md="auto" className="mx-lg-5">
          <Stat label="Experience" value="9yrs" />
        </Col>
        <Col xs="12" md="auto" className="mx-lg-5">
          <Stat label="Projects" value="49" />
        </Col>
        <Col xs="12" md="auto" className="mx-lg-5">
          <Stat
            label="Designed"
            value={
              <span>
                256m<sup>2</sup>
              </span>
            }
          />
        </Col>
      </Row>
    </Container>
  </div>,
  <section key="index-projects" className="PW-Overlap">
    <Container className="content">
      <Row noGutters>
        <Col xs="12" sm="6" md="4">
          <Project
            name="Project Title"
            description="Luxury Resort, Bangkok, Thailand"
          />
        </Col>
        <Col xs="12" sm="6" md="4">
          <Project
            name="Project Title"
            description="Luxury Resort, Bangkok, Thailand"
          />
        </Col>
        <Col xs="12" sm="6" md="4">
          <Project
            name="Project Title"
            description="Luxury Resort, Bangkok, Thailand"
          />
        </Col>
        <Col xs="12" sm="6" md="4">
          <Project
            name="Project Title"
            description="Luxury Resort, Bangkok, Thailand"
          />
        </Col>
        <Col xs="12" sm="6" md="4">
          <Project
            name="Project Title"
            description="Luxury Resort, Bangkok, Thailand"
          />
        </Col>
        <Col xs="12" sm="6" md="4">
          <Project
            name="Project Title"
            description="Luxury Resort, Bangkok, Thailand"
          />
        </Col>
      </Row>
    </Container>
  </section>,
  <section key="index-testimonials">
    <Quote
      person="Paolo Memoli"
      organisation="100 Shapes"
      text="I think it's great!"
    />
    <Quote
      person="Paolo Memoli"
      organisation="100 Shapes"
      text="I think it's great!"
    />
    <Quote
      person="Paolo Memoli"
      organisation="100 Shapes"
      text="I think it's great!"
    />
  </section>,
]

IndexPage.propTypes = {}

export default IndexPage
