import React from "react"
import PropTypes from "prop-types"
import Title from "../title"

const Article = ({ first, second, introduction, children }) => {
  const oneColumn = introduction === undefined ? true : false;
  return (
    <div className="article grid">
      <div className="article-head">
        <Title
          first={first}
          second={second}
        />
      </div>
      <div className="article-container">
        {introduction && <h4 className="article-introduction">{introduction}</h4>}
        <div className="article-content" data-single-column={oneColumn}>{children}</div>
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
