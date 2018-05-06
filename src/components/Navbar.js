import React from 'react'
import Link from 'gatsby-link'

const Navbar = () => (
  <nav className="navbar is-fixed-top">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          Ponk
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/projects">
          Projects
        </Link>
        <Link className="navbar-item" to="/blog">
          Blog
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
