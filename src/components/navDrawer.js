import React from "react"
import { navigate } from "gatsby"
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import HomeIcon from "@material-ui/icons/Home"
import BookIcon from "@material-ui/icons/Book"

import { handleButtonEvent } from "../util"

const useStyles = makeStyles(() => ({
  list: {
    width: "80vw",
    maxWidth: "16rem",
  },
}))

const handleNavigate = handleButtonEvent(navigate)

export default ({ onClose, open }) => {
  const classes = useStyles()

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List className={classes.list}>
        <ListItem
          button
          onClick={handleNavigate("/")}
          onKeyDown={handleNavigate("/")}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem
          button
          onClick={handleNavigate("/blog")}
          onKeyDown={handleNavigate("/blog")}
        >
          <ListItemIcon>
            <BookIcon />
          </ListItemIcon>
          <ListItemText primary="Blog" />
        </ListItem>
      </List>
    </Drawer>
  )
}
