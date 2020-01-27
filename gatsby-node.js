const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ actions, graphql, reporter}) => {
  const result = await graphql(`
    query {
      allMdx(sort: {fields: frontmatter___order}) {
        nodes {
          body
          id
          frontmatter {
            title
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("failed to create posts", result.errors)
  }

  const posts = result.data.allMdx.nodes

  posts.forEach((post, index) => {
    const next = index === posts.length - 1 ? null : posts[index + 1]
    const previous = index === 0 ? null : posts[index - 1]
    
    actions.createPage({
      path: post.frontmatter.slug,
      component: require.resolve("./src/templates/post.js"),
      context: {
        slug: post.frontmatter.slug,
        title: post.frontmatter.title,
        previous,
        next
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};