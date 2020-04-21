import React from "react"
import { Link as GatsbyLink } from "gatsby"
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

const useStyles = makeStyles(() => ({
  list: {
    width: "80vw",
    maxWidth: "16rem",
  },
}))

export default ({ onClose, open }) => {
  const classes = useStyles()

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List className={classes.list}>
        <ListItem button component={GatsbyLink} to={"/"}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={GatsbyLink} to={"/blog"}>
          <ListItemIcon>
            <BookIcon />
          </ListItemIcon>
          <ListItemText primary="Blog" />
        </ListItem>
      </List>
    </Drawer>
  )
}
