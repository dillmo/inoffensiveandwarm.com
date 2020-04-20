import React from "react"
import { graphql } from "gatsby"
import { Link, Typography } from "@material-ui/core"
import Img from "gatsby-image"
import { Helmet } from "react-helmet-async"

import Layout from "../components/layout"

const chopUriPrefix = str => str?.match(/\w+:\/\/(.*)/)?.[1]

export default ({
  data: {
    markdownRemark: {
      frontmatter: { date, title, imageCredit, imageCreditLink },
      html,
    },
    file: {
      childImageSharp: { fluid },
    },
  },
}) => (
  <Layout appBarTitle="Blog">
    <Helmet title={title} />
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
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        imageCredit
        imageCreditLink
        path
        title
      }
    }
    file(relativePath: { eq: $image }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
