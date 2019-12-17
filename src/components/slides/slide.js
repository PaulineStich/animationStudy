import React from "react"

const SlideTemplate = ({ title, children }) => {
  return (
    <div className="slide">
      <div className="slide-container">
        <h6>{title}</h6>
        <p>{children}</p>
      </div>
    </div>
  )
}

export default SlideTemplate
