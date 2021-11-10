module.exports = {
  siteMetadata: {
    title: `Gatsby Boilerplate`,
    author: {
      name: `Lutaaya Brian Ivan`,
      summary: `Full Stack software developer`,
    },
    description: `A boilerplate for Gatsby`,
    social: {
      twitter: `briantical`,
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-eslint`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Boilerplate`,
        short_name: `Boilerplate`,
        description: `A Gatsby boilerplate`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `src/assets/images/pwa-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
};
