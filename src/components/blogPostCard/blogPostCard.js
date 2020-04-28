import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Box, Button, Card, Typography } from ".."

const BlogPostCard = ({ title, description, date, path, ...props }) => (
  <Card width="100%" maxWidth={384} variant="emphasized" {...props}>
    <Typography fontSize={3} as="h3" fontWeight="bold" my={0}>
      {title}
    </Typography>
    <Typography color="gray.3" fontSize={3} my={4}>
      {description}
    </Typography>
    <Box display="flex" alignItems="baseline" justifyContent="space-between">
      <Typography color="gray.3" fontSize={2} my={0}>
        {date}
      </Typography>
      <Button as={Link} to={path}>
        Read More
      </Button>
    </Box>
  </Card>
)

BlogPostCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  path: PropTypes.string,
}

export default BlogPostCard
