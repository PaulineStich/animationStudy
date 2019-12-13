import React from "react"

const SlideTemplate = ({ title, subtitle, children, i }) => {
  return (
    <div className="slide">
      <div class="slide-container">
        <h6>{title}</h6>
        <img alt="image"></img>
        <p>{children}</p>
      </div>
    </div>
  )
}

export default SlideTemplate
