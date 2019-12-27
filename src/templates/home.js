import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layouts"
import Slices from "../components/slices"

// Query the corresponding documents to create your pages.
// In this case we are querying 'allHomepages', with the variable: lang.
// and 'allMenus', with the variable: lang

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

export default ({ data }) => {
  if (!data) return null

  // Save the data of each Document in separated variables
  const home = data.prismic.allHomepages.edges.length !== 0 ? data.prismic.allHomepages.edges.slice(0, 1).pop().node : null
  const header = data.prismic.allMenus.edges.length !== 0 ? data.prismic.allMenus.edges.slice(0, 1).pop().node : null

  return (
    <Layout docs={header} activeDoc={home._meta}>
      {/* Render the edit button */}
      <div data-wio-id={home.id}>
        {/* Go through the slices of the post and render the appropiate one */}
        <Slices slices={home.page_content} />
      </div>
    </Layout>
  )
}
