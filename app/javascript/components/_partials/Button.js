import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className='btn btn-primary'
    >
      {text}
    </button>
  )
}


Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
