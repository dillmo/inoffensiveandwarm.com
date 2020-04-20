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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
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
  ],
}
