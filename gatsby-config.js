module.exports = {
  siteMetadata: {
    title: `My First Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`,
    menuLinks: [
      {
        name: `Home`,
        link: `/`
      },
      {
        name: `About`,
        link: `/about`
      },
      {
        name: `Blog`,
        link: `/blog`
      }
    ]
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    `gatsby-plugin-mdx`
  ],
}
