import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/all.sass'

const TemplateWrapper = ({ children }) => [
  <Helmet key="layout-helmet" title="Home | Gatsby + Netlify CMS" />,
  <Navbar key="layout-nav" />,
  <div key="layout-content">{children()}</div>,
  <Footer key="layout-footer" />,
]

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
