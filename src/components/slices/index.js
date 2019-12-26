import React from "react"
import CallToAction from "./call-to-action"
import FullWidthImage from "./full-width-image"
import IconInfoSection from "./icon-info-section"
import HighlightSection from "./highlight-section"
import EmailSignup from "./email-signup"
export {
  CallToAction,
  FullWidthImage,
  IconInfoSection,
  HighlightSection,
  EmailSignup,
}

// Sort and display the different slice options
export default ({ slices }) => {
  if (!slices) return null
  return slices.map((slice, index) => {
    const res = (() => {
      switch (slice.type) {
        case "call_to_action":
          return <CallToAction key={index} slice={slice} />

        case "full_width_image":
          return <FullWidthImage key={index} slice={slice} />

        case "icon_info_section":
          return <IconInfoSection key={index} slice={slice} />

        case "highlight_section":
          return <HighlightSection key={index} slice={slice} />

        case "email_signup":
          return <EmailSignup key={index} slice={slice} />

        default:
          return
      }
    })()
    return res
  })
}
