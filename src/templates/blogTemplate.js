import React from "react"
import { graphql } from "gatsby"
import { Link, Typography } from "@material-ui/core"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

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
  },
}) => (
  <Layout appBarTitle="Blog">
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
  }
`
