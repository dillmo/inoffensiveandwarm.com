module.exports = {
  siteMetadata: {
    title: `Inoffensive and Warm`,
    description: `Under construction`,
    author: `Dillon Morse`,
  },
  plugins: [
    "@rhysforyou/gatsby-plugin-react-helmet-async",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Inoffensive and Warm`,
        short_name: `I & W`,
        start_url: `/`,
        background_color: `#ff9800`,
        theme_color: `#ff9800`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown-blog-posts",
        path: `${__dirname}/src/markdown-blog-posts`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "img",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-offline",
  ],
}
