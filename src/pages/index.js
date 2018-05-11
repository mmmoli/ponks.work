import React from 'react'
import PropTypes from 'prop-types'
import Banner from '../components/Banner'
import { Container, Jumbotron, Row, Col } from 'reactstrap'
import Project from '../components/ProjectCard'

const IndexPage = () => [
  <Jumbotron key="index-hero">
    <Container>
      <h1 className="display-1">Ponk Memoli</h1>
      <p className="lead">Freelance Architect</p>
      <Row>
        <Col xs="10" md="5">
          <p>Stats</p>
        </Col>
      </Row>
    </Container>
  </Jumbotron>,
  <section key="index-projects">
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
]

IndexPage.propTypes = {}

export default IndexPage
