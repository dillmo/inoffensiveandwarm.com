import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { BlogPostCard } from ".."

const BlogPostListing = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
          nodes {
            excerpt
            frontmatter {
              date
              path
              title
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark: { nodes } }) =>
      nodes.map(({ excerpt, frontmatter: { date, path, title } }, i) => (
        <BlogPostCard
          description={excerpt}
          date={date}
          path={path}
          title={title}
          variant={i % 2 === 0 ? "yellow" : "red"}
        />
      ))
    }
  />
)

export default BlogPostListing
