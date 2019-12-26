import React, { Fragment } from "react"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Header from "./header"
import Footer from "./footer"
import "../../stylesheets/main.scss"
import { ThemeProvider } from "../../context/ThemeContext"

export default props => (
  <StaticQuery
    query={graphql`
      query SiteQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
)

const Layout = props => {
  if (!props) return null

  // Define the meta title and description
  const title = props.data.site.siteMetadata.title
  const description = props.data.site.siteMetadata.description
  // Load the Prismic edit button
  if (typeof window !== "undefined" && window.prismic) {
    window.prismic.setupEditButton()
  }

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
        ></link>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
      </Helmet>
      <ThemeProvider>
        <Header docs={props.docs} activeDoc={props.activeDoc} />
        <main>{props.children}</main>
        <Footer activeDoc={props.activeDoc} />
      </ThemeProvider>
    </Fragment>
  )
}
