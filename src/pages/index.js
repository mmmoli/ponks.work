import React from 'react'
import PropTypes from 'prop-types'
import Banner from '../components/Banner'
import { Container } from 'reactstrap'

const IndexPage = () => [
  <Banner heading={`Ponk`} key="index-hero" />,
  <Container key="index-stats">
    <h2>Testimonials</h2>
  </Container>,
]

IndexPage.propTypes = {}

export default IndexPage
