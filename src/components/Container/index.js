import React from "react"
import PropTypes from "prop-types"

function Container({ children, className }) {
  return <div className={`container ${className}`}> {children}</div>
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  className: PropTypes.string
}

Container.defaultProps = {
  className: ""
}
export default Container
