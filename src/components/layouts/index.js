import React, { Fragment } from "react"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Header from "./header"
import Footer from "./footer"
import "../../stylesheets/main.scss"
import { ThemeProvider } from "../../context/theme-context"

const staticQuery = graphql`
  query SiteQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={staticQuery.toString()}
    render={data => <Layout data={data} {...props} />}
  />
)

const Layout = props => {
  /* Define the meta title and description */
  const title = props.data.site.siteMetadata.title
  const description = props.data.site.siteMetadata.description

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Helmet>
      <ThemeProvider>
        <Header menuLinks={props.menuLinks} activeDoc={props.activeDoc} />
        <main>{props.children}</main>
        <Footer />
      </ThemeProvider>
    </Fragment>
  )
}
