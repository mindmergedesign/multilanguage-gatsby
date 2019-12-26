// The Link Resolver
// This function will be used to generate links to Prismic documents
// As your project grows, you should update this function according to your routes

exports.linkResolver = function linkResolver(doc) {
  if (doc.type === "homepage") {
    return doc.lang === "en-gb" ? `/` : `/${doc.lang}`
  }

  if (doc.type === "page") {
    return doc.lang === "en-gb"
      ? `/blog/${doc.uid}`
      : `/blog/${doc.lang}/${doc.uid}`
  }
  return "/"
}
