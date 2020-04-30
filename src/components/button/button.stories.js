import React from "react"
import { action } from "@storybook/addon-actions"

import Button from "./button"

export default {
  component: Button,
  title: "Atoms/Button",
}

export const Primary = () => (
  <Button onClick={action("onClick")} ml={4} mt={4}>
    Read More
  </Button>
)
