import React, { useState } from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import Layout from "../components/layout"
import { ReadTheNextArticle } from "../components/buttons"
import PreviewTemplate from "../components/slides/preview"
import SlideTemplate from "../components/slides/slide"
import Hint from "../components/hint"

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

const templates = {
  PreviewTemplate,
  SlideTemplate,
  ReadTheNextArticle,
  Hint
}

const PostTemplate = ({
  data: { mdx: post },
  pageContext: { next, previous },
}) => {
  const [isSlide] = useState(post.frontmatter.subtitle === null ? true : false)
  const nextSlug = next !== null ? next.frontmatter.slug : null
  const previousSlug = previous !== null ? previous.frontmatter.slug : null

  return (
    <Layout next={nextSlug} previous={previousSlug} n={next} p={previous} slide={isSlide}>
      <MDXProvider components={templates}>
        <MDXRenderer>{post.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  )
}

export default PostTemplate
