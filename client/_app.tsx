import React, { FC } from 'react'
import Router from '../router/Route'
import type { AppProps } from './interface'

const App: FC<AppProps> = (props) => {
  const { __DATA__ } = props
  return <Router {...__DATA__} />
}

export default App
