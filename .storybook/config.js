import React from "react"
import { configure } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { addDecorator } from "@storybook/react"
import { ThemeProvider } from "styled-components"

import "normalize.css"

import theme from "../src/theme"

import "../src/components/layout.css"

// automatically import all files ending in *.stories.js
configure(require.context("../src", true, /\.stories\.js$/), module)

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from
// creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = ""
// this is utilized to override the window.___navigate method Gatsby defines
// and uses to report what path a Link would be taking us to if it wasn't
// inside a storybook
window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}

// provide theme context
addDecorator(storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
))
