module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `resumes`,
        path: `${__dirname}/content/resumes`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/icon.png`,
        name: `anpham.dev`,
        short_name: `anpham.dev`,
        start_url: `/`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/content/resumes`
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Dev Note`,
    author: `An Pham`,
    description: `Trying out blogging as a hobby...`,
    social: [
      {
        name: `GitHub`,
        url: `https://gitlab.com/Anphamthanh`,
      },
    ],
  },
}
