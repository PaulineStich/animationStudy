import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const PreviewTemplate = ({ title, subtitle, children }) => {
  const data = useStaticQuery(graphql`
    query PreviewImage {
      mdx {
        frontmatter {
          image {
            sharp: childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div className="post">
      <BackgroundImage
        Tag="section"
        fluid={data.mdx.frontmatter.image.sharp.fluid}
        backgroundColor={`#353434`}
        fadeIn="soft"
      >
        <div className="grid">
          <div className="post-head">
            <h2 className="post-title">{title}</h2>
            <div className="line" />
            <h4 className="post-subtitle">{subtitle}</h4>
          </div>
          <div className="post-block">
            <h5>{children}</h5>
          </div>
        </div>
      </BackgroundImage>
    </div>
  )
}

export default PreviewTemplate
