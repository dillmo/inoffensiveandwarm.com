import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogPostListing from "../components/blogPostListing"

export default ({
  data: {
    allMarkdownRemark: { nodes },
  },
}) => (
  <Layout>
    <SEO title="Blog" description="Posts on Dillon Morse's blog" />
    <BlogPostListing posts={nodes} />
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        excerpt
        frontmatter {
          path
          title
        }
      }
    }
  }
`
