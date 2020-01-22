import React from "react"

/* This page will be displayed whenever an error happens */

export default () => (
  <div className="not-found">
    <h1>404</h1>
    <h3>The page you are looking for was not found</h3>
    <p>
      <a href="/">
        <button>Return to homepage</button>
      </a>
    </p>
  </div>
)
