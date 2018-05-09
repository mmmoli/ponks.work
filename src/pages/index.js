import React from 'react'
import PropTypes from 'prop-types'
import { Stat } from '../components/tags'
import Banner from '../components/Banner'

const IndexPage = () => [
  <section key="index-hero">
    <Banner heading={`Ponk`} />
  </section>,
  <section key="index-stats">
    <h2>Testimonials</h2>
  </section>,
]

IndexPage.propTypes = {}

export default IndexPage
