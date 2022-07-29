import React from 'react'
import PropTypes from 'prop-types'


const Navbar = ({ img_src}) => {

  return (
<nav className="navbar navbar-expand-lg" >
      <a className="navbar-brand" href="/">
        <img src={img_src} />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarToggle">
        <div className="navbar-nav" id = 'nav_right_side'>
            <a className="nav-item nav-link" href="#">Profile</a>
        </div>
      </div>
  </nav>
  )
}

Navbar.defaultProps = {
  title: 'Anomaly Report',
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default Navbar
