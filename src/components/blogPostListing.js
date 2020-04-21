import React from "react"
import { Link as GatsbyLink } from "gatsby"
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core"

export default ({ posts }) =>
  posts.map(({ excerpt, frontmatter: { path, title } }) => (
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
  ))
