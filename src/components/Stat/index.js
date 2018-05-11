import React from 'react'
import PropTypes from 'prop-types'

const Stat = ({ label, value }) => (
  <div>
    <p className="text-center display-3" children={value} />
    <p className="text-center lead" children={label} />
  </div>
)

Stat.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default Stat
