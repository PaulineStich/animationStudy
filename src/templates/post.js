import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import BackgroundImage from "gatsby-background-image"

import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        subtitle
        image {
          sharp: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
      body
    }
  }
`

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <div className="post">
      <BackgroundImage
        Tag="section"
        fluid={post.frontmatter.image.sharp.fluid}
        backgroundColor={`#353434`}
        fadeIn="soft"
      >
        <div className="grid">
          <div className="post-head">
            <h2 className="post-title">{post.frontmatter.title}</h2>
            <div className="line" />
            <h4 className="post-subtitle">{post.frontmatter.subtitle}</h4>
          </div>
          <div className="post-block">
            <MDXRenderer>{post.body}</MDXRenderer>
          </div>
        </div>
      </BackgroundImage>
    </div>
  </Layout>
)

export default PostTemplate
