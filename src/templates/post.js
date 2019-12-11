import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import Layout from "../components/layout"
import { ReadTheNextArticle } from "../components/buttons"
import PreviewTemplate from "../components/slides/preview"

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
}

const PostTemplate = ({
  data: { mdx: post },
  pageContext: { next, previous },
}) => {
  const nextSlug = next !== null ? next.frontmatter.slug : null
  const previousSlug = previous !== null ? previous.frontmatter.slug : null

  return (
    <Layout next={nextSlug} previous={previousSlug}>
      <MDXProvider components={templates}>
        <MDXRenderer>{post.body}</MDXRenderer>
      </MDXProvider>
      {next === false ? null : (
        <>
          {next && (
            <ReadTheNextArticle
              title="squash & stretch"
              description="When applied, it gives your animated characters and objects the illusion ..."
              linkTo={next.frontmatter.slug}
            />
          )}
        </>
      )}
    </Layout>
  )
}

export default PostTemplate
