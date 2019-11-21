import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Arrow from "../../static/svg/mdi_arrow_right_alt.svg"

export const ReadTheFirstArticle = () => {
  return (
    <Link to="/introduction" className="first-article">
      <h6>Get started</h6>
      <p>Read the first article</p>
      <Arrow/>
    </Link>
  )
}

export const ReadTheNextArticle = props => {
  const {title, description, linkTo} = props;
  return (
    <Link to={linkTo} className="next-article">
      <div>
        <h6>{title}</h6>
        <p>
          {description}
        </p>
      </div>
      <div>
        <p>read next</p>
        <Arrow />
      </div>
    </Link>
  )
}

ReadTheNextArticle.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired
}