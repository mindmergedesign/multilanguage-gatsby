import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layouts"
import SliceZone from "../components/SliceZone"

/* Query the corresponding documents to create your pages.
*In this case we are querying 'allHomepages', with the variable: lang.
and 'allMenus', with the variable: lang */

export const query = graphql`
  query myHome($lang: String) {
    prismic {
      allHomepages(lang: $lang) {
        edges {
          node {
            _meta {
              uid
              id
              type
              lang
              alternateLanguages {
                uid
                id
                type
                lang
              }
            }
            page_content {
              __typename
              ... on PRISMIC_HomepagePage_contentCall_to_action {
                type
                primary {
                  action_title
                  action_text
                  white_button
                  black_button
                }
              }
              ... on PRISMIC_HomepagePage_contentFull_width_image {
                type
                primary {
                  background_image_position
                  background_image
                  image_white
                  image_black
                }
              }
              ... on PRISMIC_HomepagePage_contentIcon_info_section {
                type
                primary {
                  icon_white
                  icon_black
                  info_title
                  info_text
                  info_desc
                }
              }
              ... on PRISMIC_HomepagePage_contentEmail_signup {
                type
                primary {
                  email_title
                  email_text
                  label
                  placeholder
                  button_text
                }
              }
            }
          }
        }
      }
      allMenus(lang: $lang) {
        edges {
          node {
            menu_links {
              label
              link {
                ... on PRISMIC_Page {
                  _meta {
                    uid
                    id
                    lang
                    type
                    alternateLanguages {
                      uid
                      id
                      lang
                      type
                    }
                  }
                }
                ... on PRISMIC_Homepage {
                  _meta {
                    uid
                    id
                    lang
                    type
                    alternateLanguages {
                      uid
                      id
                      lang
                      type
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

const Homepage = ({ data }) => {
  if (!data) return null

  /* Save the data of each Document in separated variables */
  const homepage =
    data.prismic.allHomepages.edges.length !== 0
      ? data.prismic.allHomepages.edges.slice(0, 1).pop().node
      : null
  const menu =
    data.prismic.allMenus.edges.length !== 0
      ? data.prismic.allMenus.edges.slice(0, 1).pop().node
      : null

  return (
    <Layout menuLinks={menu} activeDoc={homepage._meta}>
      <SliceZone slices={homepage.page_content} />
    </Layout>
  )
}

export default Homepage
