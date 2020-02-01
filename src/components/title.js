import React from "react"
import PropTypes from "prop-types"

const Title = props => {
  const { first, second } = props
  return (
    <div className="title grid">
      <h2>{first}</h2>
      <h2>{second}</h2>
    </div>
  )
}

Title.propTypes = {
  first: PropTypes.string.isRequired,
  second: PropTypes.string.isRequired,
}

export default Title
