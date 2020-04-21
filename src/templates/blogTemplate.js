import React from "react"
import { graphql } from "gatsby"
import { Grid, Link, Typography } from "@material-ui/core"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogPostListing from "../components/blogPostListing"

const chopUriPrefix = str => str?.match(/\w+:\/\/(.*)/)?.[1]

export default ({
  data: {
    excerpt,
    file: {
      childImageSharp: { fluid },
    },
    markdownRemark: {
      frontmatter: { date, title, imageCredit, imageCreditLink },
      html,
    },
    allMarkdownRemark: { nodes },
  },
}) => (
  <Layout appBarTitle="Blog">
    <Grid container spacing={4}>
      <Grid item xs={12} lg={8} md={8}>
        <SEO title={title} description={excerpt} />
        <Typography variant="h4">{title}</Typography>
        <Typography variant="subtitle1" paragraph>
          {date}
        </Typography>
        <Img fluid={fluid} />
        <Typography variant="caption" paragraph>
          Image credit: {imageCredit}{" "}
          <Link href={imageCreditLink}>({chopUriPrefix(imageCreditLink)})</Link>
        </Typography>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Grid>
      <Grid item xs={12} lg={4} md={4}>
        <Typography variant="h5" paragraph>
          More Posts
        </Typography>
        <BlogPostListing posts={nodes} />
      </Grid>
    </Grid>
  </Layout>
)

export const pageQuery = graphql`
  query($image: String!, $path: String!) {
    file(relativePath: { eq: $image }) {
      childImageSharp {
        fluid(srcSetBreakpoints: [400, 600, 960, 1280]) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        imageCredit
        imageCreditLink
        path
        title
      }
      html
    }
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
