import React from 'react'

import PropTypes from 'prop-types'

import './practice.css'

const Practice = (props) => {
  return (
    <div className={`practice-practice ${props.rootClassName} `}>
      <img
        alt="image"
        src="/chart-success.svg"
        loading="lazy"
        className="practice-image"
      />
      <span className="practice-text">{props.text}</span>
      <div className="practice-container">
        <img
          alt={props.imageAlt1}
          src={props.imageSrc1}
          className="practice-image1"
        />
        <img
          alt={props.imageAlt11}
          src="/heart%20circle-200h.png"
          className="practice-image2"
        />
      </div>
    </div>
  )
}

Practice.defaultProps = {
  imageSrc: '6af778de-2251-4c1e-9370-c6748983c340',
  text: 'Make an Appointment',
  imageAlt1: 'image',
  rootClassName: '',
  imageAlt11: 'image',
  imageSrc1: '/plus%20circle-200h.png',
  imageAlt: 'image',
  imageSrc11: 'a85df5fd-8b2d-41bd-90c3-0ae11d77baf1',
  title: 'Cardiology',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
}

Practice.propTypes = {
  imageSrc: PropTypes.string,
  text: PropTypes.string,
  imageAlt1: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt11: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc11: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default Practice
