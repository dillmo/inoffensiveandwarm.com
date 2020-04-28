import React from "react"
import BlogPostCard from "./blogPostCard"

export default {
  component: BlogPostCard,
  title: "Molecules/BlogPostCard",
}

const description =
  "Debitis et quia vel illo id molestiae quo. Facere mollitia qui cumque sunt quasi omnis quos quibusdam. Adipisci eum ratione molestias…"

export const Small = () => (
  <BlogPostCard
    title={"My First Post"}
    description={description}
    date="2020-04-22"
    path="/my-first-post"
    m={5}
  />
)
