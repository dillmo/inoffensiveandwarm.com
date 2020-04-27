const path = require("path")

exports.createPages = async ({
  actions: { createPage },
  graphql,
  reporter,
}) => {
  const blogPostTemplate = path.resolve("src/templates/blogTemplate.js")

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              image
              path
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild("Error while running GraphQL query.")
    return
  }

  result.data.allMarkdownRemark.edges.forEach(
    ({
      node: {
        frontmatter: { image, path },
      },
    }) =>
      createPage({
        path,
        component: blogPostTemplate,
        context: { image },
      })
  )
}
