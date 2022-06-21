import React from 'react'
import App from '../client/_app'
import Document from '../client/_document'
import { ServerResponse, IncomingMessage } from 'http'
import { renderToPipeableStream } from 'react-dom/server'

export async function renderToPipe(
  req: IncomingMessage,
  res: ServerResponse,
  pathname: string
) {
  let didError = false
  const __DATA__ = { pathname }
  const stream = renderToPipeableStream(
    <Document>
      <App __DATA__={__DATA__} />
    </Document>,
    {
      bootstrapScripts: ['/index.js'],
      bootstrapScriptContent: `window.__DATA__=${JSON.stringify(__DATA__)}`,
      onShellReady() {
        res.statusCode = didError ? 500 : 200
        res.setHeader('Content-type', 'text/html')
        stream.pipe(res)
      },
      onError(error) {
        didError = true
        console.error(error)
      },
    }
  )

  setTimeout(() => {
    stream.abort()
  }, 3000)
}
