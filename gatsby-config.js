const { apiEndpoint } = require("./prismic-config")
const repo = /([^\/]+)\.prismic\.io\/graphql/.exec(apiEndpoint)
const { defaultLanguage, langs } = require("./prismic-config")

module.exports = {
  siteMetadata: {
    title: `Multi-language site`,
    description: `Sample Multi-language Website with API-based CMS (Prismic) & Gatsby.js`,
    author: `@PaulinaVPG`,
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
        repositoryName:
          repo[1] /* Loads the repo name from prismic-config.js */,
        defaultLang: defaultLanguage /*  Loads the default language from prismic-config.js */,
        path: "/preview/preview",
        previews: true,
        langs: langs /* Loads the all languages from prismic-config.js */,
        pages: [
          {
            type: "Homepage",
            match: "/:lang?",
            path: "/:lang?",
            component: require.resolve("./src/templates/homepage.js"),
          },
          {
            type: "Page" /* Custom type of the document */,
            match:
              "/page/:lang?/:uid" /* Pages will be generated in this pattern */,
            path: "/page/:lang?" /* Placeholder route for previews */,
            component: require.resolve(
              "./src/templates/page.js"
            ) /* Template file */,
          },
        ],
      },
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
    },
  ],
}