import React, { useState } from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet-async"
import { ThemeProvider } from "styled-components"

import "normalize.css"
import theme from "../theme"

import Header from "./header"

import "./layout.css"

const Layout = ({ appBarTitle, children }) => {
  const [title, setTitle] = useState("")

  return (
    <ThemeProvider theme={theme}>
      <Helmet onChangeClientState={({ title }) => setTitle(title)} />
      {children}
    </ThemeProvider>
  )
}

Layout.propTypes = {
  appBarTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Layout
