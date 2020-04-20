import React, { StrictMode, useState } from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet-async"
import "typeface-roboto"
import { Container, CssBaseline } from "@material-ui/core"
import {
  unstable_createMuiStrictModeTheme,
  ThemeProvider,
} from "@material-ui/core/styles"

import Header from "./header"
import "./layout.css"

const theme = unstable_createMuiStrictModeTheme({
  palette: {
    type: "dark",
    primary: {
      light: "#ffac33",
      main: "#ff9800",
      dark: "#b26a00",
    },
    secondary: {
      light: "#ffee33",
      main: "#ffea00",
      dark: "#b2a300",
    },
  },
})

const Layout = ({ appBarTitle, children }) => {
  const [title, setTitle] = useState("")

  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <Helmet
          onChangeClientState={({ title }) => setTitle(title)}
          htmlAttributes={{ lang: "en" }}
        />
        <CssBaseline />
        <Header title={appBarTitle ?? title} />
        <Container fixed>{children}</Container>
      </ThemeProvider>
    </StrictMode>
  )
}

Layout.propTypes = {
  appBarTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Layout
