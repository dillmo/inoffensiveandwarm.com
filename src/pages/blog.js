import React from "react"
import { graphql, navigate } from "gatsby"
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core"

import { handleButtonEvent } from "../util"
import Layout from "../components/layout"
import SEO from "../components/seo"

const handleNavigate = handleButtonEvent(navigate)

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
          <Button
            onClick={handleNavigate(path)}
            onKeyDown={handleNavigate(path)}
          >
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
