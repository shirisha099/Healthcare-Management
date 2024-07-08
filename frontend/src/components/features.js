import React from 'react'

import PropTypes from 'prop-types'

import './features.css'

const Features = (props) => {
  return (
    <div className="features-section quick-links">
      <div className="features-heading">
        <h3 className="features-header">{props.title}</h3>
      </div>
      <p className="features-text">{props.description}</p>
      <div className="features-divider"></div>
    </div>
  )
}

Features.defaultProps = {
  title: 'Doctor Login',
}

Features.propTypes = {
  title: PropTypes.string,
}

export default Features
