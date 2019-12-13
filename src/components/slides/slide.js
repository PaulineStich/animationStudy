import React from "react"

const SlideTemplate = ({ title, children, src }) => {
  return (
    <div className="slide">
      <div className="slide-container">
        <h6>{title}</h6>
        <img alt={title} src={src}></img>
        <p>{children}</p>
      </div>
    </div>
  )
}

export default SlideTemplate
