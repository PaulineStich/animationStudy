import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import ArrowRight from "../../static/svg/mdi_arrow_right_alt.svg"
import ArrowLeft from "../../static/svg/mdi_arrow_left_alt.svg"

export const ReadTheFirstArticle = () => {
  return (
    <Link to="/introduction" className="first-article">
      <h6>Get started</h6>
      <p>Read the first article</p>
      <ArrowRight />
    </Link>
  )
}

export const ReadTheNextArticle = props => {
  const { title, description, linkTo } = props
  return (
    <Link to={linkTo} className="next-article">
      <div>
        <h6>{title}</h6>
        <p>{description}</p>
      </div>
      <div>
        <p>read next</p>
        <ArrowRight />
      </div>
    </Link>
  )
}

ReadTheNextArticle.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
}

export const Button = props => {
  const { title, linkTo, next, previous } = props
  return (
    <Link to={linkTo} className={next ? "next" : "previous"}>
      <div className="button">
        {previous && <ArrowLeft />}
        <h6>{title}</h6>
        {next && <ArrowRight />}
      </div>
    </Link>
  )
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  next: PropTypes.bool,
  previous: PropTypes.bool,
}
