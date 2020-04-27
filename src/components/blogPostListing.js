// import React, { useEffect, useState } from "react"
// import { Link as GatsbyLink } from "gatsby"
// import {
//   Button,
//   Card,
//   CardActions,
//   CardContent,
//   Typography,
// } from "@material-ui/core"
// import { makeStyles } from "@material-ui/core/styles"

// const useStyles = makeStyles(() => ({
//   container: {
//     transition: "opacity 0.25s ease-in",
//   },
//   transparent: {
//     opacity: 0,
//   },
// }))

// const useTrueAfterRender = () => {
//   const [val, setVal] = useState(false)

//   useEffect(() => setVal(true), [])

//   return val
// }

// export default ({ fadeIn, posts }) => {
//   const styles = useStyles()
//   const visible = fadeIn ? useTrueAfterRender() : true

//   return posts.map(({ excerpt, frontmatter: { path, title } }) => (
//     <div className={`${styles.container} ${visible ? "" : styles.transparent}`}>
//       <Card key={title}>
//         <CardContent>
//           <Typography variant="h6">{title}</Typography>
//           <Typography variant="body1">{excerpt}</Typography>
//         </CardContent>
//         <CardActions>
//           <Button component={GatsbyLink} to={path}>
//             Read More
//           </Button>
//         </CardActions>
//       </Card>
//     </div>
//   ))
// }

import React from "react"
export default <div />
