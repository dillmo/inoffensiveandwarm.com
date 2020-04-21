import React from "react"
import { graphql, Link as GatsbyLink } from "gatsby"
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({
  data: {
    allMarkdownRemark: { nodes },
  },
}) => (
  <Layout>
    <SEO title="Blog" description="Posts on Dillon Morse's blog" />
    {nodes.map(({ excerpt, frontmatter: { path, title } }) => (
      <Card key={title}>
        <CardContent>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body1">{excerpt}</Typography>
        </CardContent>
        <CardActions>
          <Button component={GatsbyLink} to={path}>
            Read More
          </Button>
        </CardActions>
      </Card>
    ))}
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
