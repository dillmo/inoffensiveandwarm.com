import React from "react"

import Typography from "./typography"

export default {
  component: Typography,
  title: "Atoms/Typography",
}

export const Body = () => (
  <Typography ml={4} mt={4}>
    The quick brown fox jumps over the lazy dog.
  </Typography>
)

export const Heading = () => (
  <Typography ml={4} mt={4} fontSize={6} fontFamily="heading">
    A Study in Scarlet
  </Typography>
)

export const UI = () => (
  <Typography ml={4} mt={4} fontFamily="ui">
    Next Page
  </Typography>
)

export const EmphasizedText = () => (
  <Typography
    ml={4}
    mt={4}
    fontFamily="heading"
    fontSize={6}
    color="gray.4"
    emColor="gray.0"
  >
    <em>Emphasize</em> text with <em>{"<em>"}</em> tags
  </Typography>
)
