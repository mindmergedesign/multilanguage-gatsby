import React from "react"
import {
  CallToAction,
  FullWidthImage,
  IconInfoSection,
  HighlightSection,
  EmailSignup,
} from "./slices"

/* Go through the slices of the post and render the appropriate one */
const SliceZone = ({ slices }) =>
  slices.map((slice, index) => {
    switch (slice.type) {
      case "call_to_action":
        return <CallToAction key={`slice-${index}`} slice={slice} />

      case "email_signup":
        return <EmailSignup key={`slice-${index}`} slice={slice} />

      case "full_width_image":
        return <FullWidthImage key={`slice-${index}`} slice={slice} />

      case "highlight_section":
        return <HighlightSection key={`slice-${index}`} slice={slice} />

      case "icon_info_section":
        return <IconInfoSection key={`slice-${index}`} slice={slice} />

      default:
        return null
    }
  })

export default SliceZone
