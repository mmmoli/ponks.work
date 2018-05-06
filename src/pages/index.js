import React from 'react'
import PropTypes from 'prop-types'

const IndexPage = () => [
  <section className="hero is-medium is-warning" key="index-hero">
    <div className="hero-body">
      <div className="container">
        <div className="columns is-centered has-text-centered">
          <div className="column is-5">
            <h1 className="title is-1">Ponk</h1>
            <h2 className="subtitle">Freelance Architectural Designer</h2>
          </div>
        </div>
      </div>
    </div>
  </section>,
  <section className="hero" key="index-stats">
    <div className="hero-body">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-6 is-5-fullhd is-offset-1-fullhd">
            <h2 className="title is-5 minimal-title">Stats here</h2>
          </div>
          <div className="column is-6 is-5-fullhd is-offset-1-fullhd">
            Stats here
          </div>
        </div>
      </div>
    </div>
  </section>,
  <section className="hero" key="index-stats">
    <div className="hero-body">
      <div className="container">
        <div className="level is-size-3 is-size-4-mobile">
          <h2 className="title is-5 minimal-title">Testimonials</h2>
        </div>
      </div>
    </div>
  </section>,
]

IndexPage.propTypes = {}

export default IndexPage
