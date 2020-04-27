import React, { useState } from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet-async"
import Header from "./header"
import "./layout.css"

const Layout = ({ appBarTitle, children }) => {
  const [title, setTitle] = useState("")

  return (
    <>
      <Helmet onChangeClientState={({ title }) => setTitle(title)} />
      {children}
    </>
  )
}

Layout.propTypes = {
  appBarTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Layout
