import { graphql, useStaticQuery } from "gatsby";

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx (
        sort: { fields: [frontmatter___date], order: ASC }
      ) {
        nodes {
          frontmatter {
            title
            slug
            subtitle
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
    }
  `);
  
  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    subtitle: post.frontmatter.subtitle,
    image: post.frontmatter.image,
    slug: post.frontmatter.slug
  }));
};

export default usePosts;
