import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Box, Button, Typography } from ".."

const BlogPostCard = ({
  title,
  description,
  date,
  path,
  variant,
  ...props
}) => (
  <Box
    width="100%"
    maxWidth={512}
    bg="gray.9"
    py={5}
    px={3}
    borderLeftWidth="10px"
    borderLeftStyle="solid"
    borderLeftColor={variant === "red" ? "red.4" : "yellow.3"}
    {...props}
  >
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
  </Box>
)

BlogPostCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  path: PropTypes.string,
  variant: PropTypes.string,
}

BlogPostCard.defaultProps = {
  variant: "yellow",
}

export default BlogPostCard
