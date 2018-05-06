import React from 'react'
import PropTypes from 'prop-types'

export const Stat = ({ label, value }) => (
  <div className="level-item has-text-centered">
    <div>
      <p className="heading" children={label} />
      <p className="title" children={value} />
    </div>
  </div>
)

Stat.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}
