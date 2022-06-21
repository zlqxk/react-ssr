import React from 'react'
import { SsrFC } from './interface'

const Document: SsrFC = (props) => {
  const { children } = props

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>react ssr</title>
      </head>
      <body>
        <div id="__root">{children}</div>
      </body>
    </html>
  )
}

export default Document
