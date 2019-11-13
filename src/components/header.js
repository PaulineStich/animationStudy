import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ArrowLeft from "../../static/svg/mdi_keyboard_arrow_left.svg"
import ArrowRight from "../../static/svg/mdi_keyboard_arrow_right.svg"
import Menu from "../../static/svg/mdi_view_headline.svg"
import Dots from "../../static/svg/dots.svg"

const IconButton = ({ children }) => {
  return <div className="iconButton">{children}</div>
}

const Header = ({ siteTitle }) => (
  <header>
    <IconButton>
      <Menu />
    </IconButton>
    <IconButton>
      <ArrowLeft />
    </IconButton>
    <IconButton>
      <ArrowRight />
    </IconButton>
    <h3>
      <Link to="/">{siteTitle}</Link>
    </h3>
    <IconButton>
      <Dots />
    </IconButton>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
