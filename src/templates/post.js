import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../components/layout";

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => (
    <Layout grid>
      <div className="post">
  
        <div className="post-head">
          <h1 className="post-title">{post.frontmatter.title}</h1>
        </div>
  
        <div className="post-block">
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
      </div>
    </Layout>
  );
  
  export default PostTemplate;