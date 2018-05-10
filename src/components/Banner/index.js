import React from 'react'
import PropTypes from 'prop-types'
import { Jumbotron, Container, Button, Row, Col } from 'reactstrap'

const Banner = ({ heading }) => (
  <Jumbotron fluid={true}>
    <Container>
      <h1 className="display-1" children={heading} />
      <Row>
        <Col xs="10" md="6">
          <p className="lead">
            This is a simple hero unit, a simple Jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs="10" md="5">
          <p>
            It uses utility classes for typgraphy and spacing to space content
            out within the larger container.
          </p>
          <Button color="primary">Learn More</Button>
        </Col>
      </Row>
    </Container>
  </Jumbotron>
)

Banner.displayName = 'Banner'

Banner.propTypes = {
  heading: PropTypes.string.isRequired,
}

export default Banner
