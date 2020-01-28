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
    /* This plugin will require graphql enabled in your Prismic instance. */
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
    /* This plugin intercepts all local links that have not been created in React using gatsby-link,
     * and replaces their behavior with that of the gatsby-link navigate. This avoids the browser having
     * to refresh the whole page when navigating between local pages, preserving the Single Page Application (SPA) feel.
     * */
    `gatsby-plugin-catch-links`,
    /*React Helmet is a package that provides a React component interface for you to manage your document head.
     * Gatsby’s react helmet plugin provides drop-in support for server rendering data added with React Helmet.
     * Using the plugin, attributes you add to React Helmet will be added to the static HTML pages that Gatsby builds.
     */
    `gatsby-plugin-react-helmet`,
    /* Creates ImageSharp nodes from image types that are supported by the Sharp image processing
     * library and provides fields in their GraphQL types for processing your images in a variety of ways
     * including resizing, cropping, and creating responsive images.
     */
    `gatsby-transformer-sharp`,
    /* Exposes several image processing functions built on the Sharp image processing library.
     * This is a low-level helper plugin generally used by other Gatsby plugins.
     * You generally shouldn’t be using this directly but might find it helpful if doing very custom image processing.
     */
    `gatsby-plugin-sharp`,
    /* Provides drop-in support for SASS/SCSS stylesheets */
    `gatsby-plugin-sass`,
    /* The plugin creates File nodes from files. The various “transformer” plugins can transform File nodes
     * into various other types of data e.g. gatsby-transformer-json transforms JSON files into JSON data nodes
     * and gatsby-transformer-remark transforms markdown files into MarkdownRemark nodes from which you can query an HTML representation of the markdown.
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    /*
     * This plugin provides several features beyond manifest configuration to make your life easier, they are:
     * Auto icon generation - generates multiple icon sizes from a single source
     * Favicon support
     * Legacy icon support (iOS)1
     * Cache busting
     * Localization - Provides unique manifests for path-based localization
     */
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
  ],
}
