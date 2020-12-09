const path = require('path');

exports.createPages = async({ graphql, actions}) => {
  const { createPage } = actions;
  // get all posts
  const result = await graphql(`
    query {
      allMdx(sort: {fields: frontmatter___date, order: DESC}) {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  // create page for each blogpost
  result.data.allMdx.edges.forEach((edge) => {
    createPage({
      path: `/${edge.node.frontmatter.slug}`,
      component: path.resolve('./src/templates/blog-post.tsx'),
      context: {id: edge.node.id}
    })
  })
}
