import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layouts"
import SliceZone from "../components/SliceZone"

/* Query the required documents from Prismic to generate the page.
 * In this case we are querying 'allPages', with the variables: uid and lang.
  and 'allMenus', with the variable: lang */

export const query = graphql`
  query myPost($uid: String, $lang: String) {
    prismic {
      allPages(uid: $uid, lang: $lang) {
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
              ... on PRISMIC_PagePage_contentCall_to_action {
                type
                primary {
                  action_title
                  action_text
                  white_button
                  black_button
                }
              }
              ... on PRISMIC_PagePage_contentFull_width_image {
                type
                primary {
                  background_image_position
                  background_image
                  image_white
                  image_black
                }
              }
              ... on PRISMIC_PagePage_contentHighlight_section {
                type
                primary {
                  highlight_image
                  icon_black
                  icon_white
                  highlight_title
                  highlight_text
                }
              }
              ... on PRISMIC_PagePage_contentEmail_signup {
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

const Page = ({ data }) => {
  

  /* Save the data of each Document in separated variables */
  const page =
    data.prismic.allPages.edges.length !== 0
      ? data.prismic.allPages.edges.slice(0, 1).pop().node
      : null
  const menu =
    data.prismic.allMenus.edges.length !== 0
      ? data.prismic.allMenus.edges.slice(0, 1).pop().node
      : null

  if (!page) return null
  console.log("pageData", page)
  return (
    <Layout menuLinks={menu} activeDoc={page._meta}>
      <SliceZone slices={page.page_content} />
    </Layout>
  )
}

export default Page
