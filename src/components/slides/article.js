import React from "react"
import PropTypes from "prop-types"
import Title from "../title"

const Article = ({ first, second, introduction, children }) => {
  return (
    <div className="article grid">
      <div className="article-head">
        <Title
          first={first}
          second={second}
        />
      </div>
      <div className="article-container">
        <h4 className="article-introduction">{introduction}</h4>
        <div className="article-content">{children}</div>
      </div>
    </div>
  )
}

Title.propTypes = {
  first: PropTypes.string,
  second: PropTypes.string,
  introduction: PropTypes.string
}

export default Article
