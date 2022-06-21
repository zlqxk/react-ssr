import React, { FC, useState, useEffect, useContext, createContext } from 'react'
import config from './config'
import type { RouterContextProps, RouterProps } from './interface'

const RouterContext = createContext<RouterContextProps>({})

const Route: FC<RouterProps> = (props) => {
  const { pathname, pageProps } = props
  const [pathnameState, setPathnameState] = useState(pathname)
  const [pagePropsState, setPagePropsState] = useState(pageProps)
  const Component = config.find((item) => item.path === pathnameState)?.Component!

  useEffect(() => {
    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  const handlePopState = async () => {
    await changePath(window.location.pathname)
  }

  /**
   * 路由跳转
   * @param path 跳转路径
   */
  const push = async (path: string) => {
    await changePath(path)
    history.pushState({}, '', path)
  }

  /**
   * 切换路由前先判断切换后的路由有没有 getServerSideProps 方法
   * 有的话先请求数据然后再切换路由
   * 没有的话直接切换路由
   * @param path 跳转路径
   */
  const changePath = async (path: string) => {
    const { getServerSideProps } = config.find((item) => item.path === path) ?? {}
    if (getServerSideProps) {
      const pageProps = await (await fetch(`/_ssr${path}.json`)).json()
      setPagePropsState(pageProps)
    }
    setPathnameState(path)
  }

  return (
    <RouterContext.Provider value={{ push }}>
      <Component {...pagePropsState} />
    </RouterContext.Provider>
  )
}

export const useRouter = () => {
  const ctx = useContext(RouterContext)
  return ctx
}

export default Route
