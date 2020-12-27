const path = require('path');

// add post type
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  // Ensures we are processing only markdown files
  if (['MarkdownRemark', 'Mdx'].includes(node.internal.type)) {
    // Creates new query'able field with name of 'slug'
    if (node.fileAbsolutePath.includes('posts')) {
      createNodeField({
        node,
        name: 'type',
        value: 'blog',
      })
    }

    if (node.fileAbsolutePath.includes('portfolio')) {
      createNodeField({
        node,
        name: 'type',
        value: 'portfolio',
      })
    }
  }
}

exports.createPages = async({ graphql, actions}) => {
  const { createPage } = actions;
  // get all posts
  const result = await graphql(`
    query {
      blog: allMdx(
        filter: { fields: { type: { eq: "blog" } } }
        sort: {fields: frontmatter___date, order: DESC}
      ) {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
      portfolio: allMdx(
        filter: { fields: { type: { eq: "portfolio" } } }
        sort: {fields: frontmatter___date, order: DESC}
      ) {
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

  console.log(result.data)

  // create page for each blogpost
  result.data.blog.edges.forEach((edge) => {
    createPage({
      path: `blog/${edge.node.frontmatter.slug}`,
      component: path.resolve('./src/templates/blog-post.tsx'),
      context: {id: edge.node.id}
    })
  })

  // create page for each portfolio's project
  result.data.portfolio.edges.forEach((edge) => {
    createPage({
      path: `portfolio/${edge.node.frontmatter.slug}`,
      component: path.resolve('./src/templates/blog-post.tsx'),
      context: {id: edge.node.id}
    })
  })
}
