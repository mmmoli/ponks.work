import React from 'react'
import PropTypes from 'prop-types'
import { Stat } from '../components/tags'
import { Button } from 'reactstrap';

const IndexPage = () => [
  <section className="hero is-medium is-warning" key="index-hero">
    <div className="hero-body">
      <div className="container">
        <div className="columns is-centered has-text-centered">
          <div className="column is-5 m-b-lg">
            <h1 className="title is-1">Ponk</h1>
            <h2 className="subtitle">Freelance Architectural Designer</h2>
            <Button color="danger">Danger!</Button>
          </div>
        </div>
        <div className="columns is-centered has-text-centered">
          <div className="column is-5">
            <nav className="level">
              <div className="level-item has-text-centered">
                <Stat value="46" label="Projects" />
              </div>
              <div className="level-item has-text-centered">
                <Stat value={`534`} label="Av. Project Size sqm" />
              </div>
              <div className="level-item has-text-centered">
                <Stat value="9 Yrs" label="experience" />
              </div>
            </nav>
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
