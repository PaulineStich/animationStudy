import React from "react"
import BackgroundImage from "gatsby-background-image"
import usePosts from "../../hooks/use-posts"
// import WebGL from "../webgl/index"

const PreviewTemplate = ({ title, subtitle, children, i }) => {
  const posts = usePosts()
  return (
    <div className="post">
      <BackgroundImage
        Tag="section"
        fluid={posts[i].image.sharp.fluid}
        backgroundColor={`#353434`}
        fadeIn="soft"
      >
        <div className="grid">
          <div className="post-head">
            <h2 className="post-title">{title}</h2>
            <div className="line" />
            <h4 className="post-subtitle">{subtitle}</h4>
          </div>
          <div className="post-block" >
            <h5>{children}</h5>
          </div>
        </div>
      </BackgroundImage>
      {/* <WebGL /> */}
    </div>
  )
}

export default PreviewTemplate
