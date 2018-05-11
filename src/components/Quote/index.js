import React from 'react'
import PropTypes from 'prop-types'

const Quote = ({ text, person, organisation }) => (
  <blockquote className="blockquote text-center">
    <p className="mb-0" children={text} />
    <footer className="blockquote-footer">
      {person}, <cite title="Source Title" children={organisation} />
    </footer>
  </blockquote>
)

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  organisation: PropTypes.string.isRequired,
  person: PropTypes.string.isRequired,
}

export default Quote
