import React from "react"
import { withNamespaces } from "react-i18next"
import PropTypes from "prop-types"
import "./index.css"
import logo from "../../svg/green-roofs-logo.svg"

// eslint-disable-next-line no-unused-vars
function SectionTop({ t }) {
  return (
    <div className="header">
      <div className="text-vertical-center">
        <img src={logo} className="logo" alt="Green roofs" />
        <h2>Prague</h2>
        <p>(Proof of concept)</p>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" className="arrows">
          <span /> <span />
        </a>
      </div>
    </div>
  )
}

SectionTop.propTypes = {
  // eslint-disable-next-line react/require-default-props
  t: PropTypes.func
}

export default withNamespaces()(SectionTop)
