// import PropTypes from "prop-types"
// import React, { useState } from "react"
// import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core"
// import { makeStyles } from "@material-ui/core/styles"
// import MenuIcon from "@material-ui/icons/Menu"

// import { handleButtonEvent } from "../util"
// import NavDrawer from "./navDrawer"

// const useStyles = makeStyles(theme => ({
//   offset: theme.mixins.toolbar,
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   drawerList: {
//     width: "80vw",
//     maxWidth: "16rem",
//   },
// }))

// const Header = ({ title }) => {
//   const classes = useStyles()

//   const [isDrawerOpen, setIsDrawerOpen] = useState(false)
//   const toggleDrawer = handleButtonEvent(setIsDrawerOpen)

//   return (
//     <>
//       <AppBar>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="menu"
//             className={classes.menuButton}
//             onClick={toggleDrawer(true)}
//             onKeyDown={toggleDrawer(true)}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6">{title}</Typography>
//         </Toolbar>
//       </AppBar>
//       <NavDrawer open={isDrawerOpen} onClose={toggleDrawer(false)} />
//       <div className={classes.offset} />
//     </>
//   )
// }

// Header.propTypes = {
//   title: PropTypes.string,
// }

// Header.defaultProps = {
//   title: "",
// }

// export default Header

import React from "react"

export default () => <div />
// import { Link } from "gatsby"
// import { Flex, NavLink } from "theme-ui"

// export default () => (
//   <Flex as="nav">
//     <NavLink as={Link} to="/">
//       Home
//     </NavLink>
//   </Flex>
// )
