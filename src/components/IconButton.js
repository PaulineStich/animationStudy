import React from "react"
import PropTypes from "prop-types"
import ArrowLeft from "../../static/svg/mdi_keyboard_arrow_left.svg"
import ArrowRight from "../../static/svg/mdi_keyboard_arrow_right.svg"
import Menu from "../../static/svg/mdi_view_headline.svg"
import Dots from "../../static/svg/dots.svg"

export const IconButton = props => {
  const { menu, arrowLeft, arrowRight, dots, click } = props

  return (
    <div className="iconButton" onClick={click} >
      {menu && <Menu />}
      {arrowLeft && <ArrowLeft />}
      {arrowRight && <ArrowRight />}
      {dots && <Dots />}
    </div>
  )
}

IconButton.propTypes = {
  menu: PropTypes.bool,
  arrowLeft: PropTypes.bool,
  arrowRight: PropTypes.bool,
  dots: PropTypes.bool,
}

IconButton.defaultProps = {
  menu: false,
  arrowLeft: false,
  arrowRight: false,
  dots: false,
}
