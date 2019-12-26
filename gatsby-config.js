const { apiEndpoint } = require('./prismic-config');
const repo = /([^\/]+)\.prismic\.io\/graphql/.exec(apiEndpoint);

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-prismic-graphql`,
      options: {
        repositoryName: repo[1], // Loads the repo name from prismic configuration
        defaultLang: 'en-gb',
        path: '/preview',
        previews: true,
        langs: ['en-gb', 'fr-fr'],
        pages: [
          {
            type: 'Homepage',
            match: '/:lang?',
            path: '/:lang?',
            component: require.resolve('./src/templates/home.js'),
          },
          {
          type: 'Page',          // Custom type of the document
          match: '/blog/:lang?/:uid',   // Pages will be generated in this pattern
          path: '/blog/:lang?', // Placeholder route for previews
          component: require.resolve('./src/templates/post.js') // Template file
        }]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-use-dark-mode",
      options: {
         classNameDark: "dark-mode",
         classNameLight: "light-mode",
         storageKey: "darkMode",
         minify: true,
      },
    }
  ],
}
