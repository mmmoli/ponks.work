import React from 'react'
import PropTypes from 'prop-types'
import { Jumbotron, Container, Button } from 'reactstrap'

const Banner = ({ heading }) => (
  <Jumbotron fluid={true}>
    <Container>
      <h1 className="display-3" children={heading} />
      <p className="lead">
        This is a simple hero unit, a simple Jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <hr className="my-2" />
      <p>
        It uses utility classes for typgraphy and spacing to space content out
        within the larger container.
      </p>
      <p className="lead">
        <Button color="primary">Learn More</Button>
      </p>
    </Container>
  </Jumbotron>
)

Banner.displayName = 'Banner'

Banner.propTypes = {
  heading: PropTypes.string.isRequired,
}

export default Banner
