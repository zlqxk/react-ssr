import React, { useState, useEffect } from 'react'
import config from './config'
import type { RouterProps, ListenerProps } from './interface'
import { SsrFC } from '../client/interface'

const listener: ListenerProps = { setPath: () => {} }

const Route: SsrFC<RouterProps> = (props) => {
  const { pathname } = props
  const [pathState, setPathState] = useState(pathname)

  useEffect(() => {
    window.addEventListener('popstate', handlePopState)
    listener.setPath = setPathState

    return () => {
      window.removeEventListener('popstate', handlePopState)
      listener.setPath = () => {}
    }
  }, [])

  const handlePopState = () => {
    setPathState(window.location.pathname)
  }

  const Component = config.find((item) => item.path === pathState)?.Component!

  return <Component />
}

export const routerPush = (path: string) => {
  history.pushState({}, '', path)
  listener.setPath(path)
}

export default Route
