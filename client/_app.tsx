import React from 'react'
import { SsrFC } from './interface'
import Router from '../router/Route'

interface AppProps {
  __DATA__: {
    pathname: string
    pageProps?: any
  }
}

const App: SsrFC<AppProps> = (props) => {
  const { __DATA__ } = props
  return <Router pathname={__DATA__.pathname} />
}

export default App
