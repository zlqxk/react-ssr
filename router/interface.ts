import { FC } from 'react'
import { CtxProps, GetServerSidePropsType } from '../client/interface'

export interface RouterProps {
  /**
   * 请求路径
   */
  pathname: string

  /**
   * 页面props
   */
  pageProps?: any
}

export interface ConfigProps {
  /**
   * 页面路径
   */
  path: string

  /**
   * 当前路径对应的组件
   */
  Component: FC

  /**
   * 数据请求的方法
   */
  getServerSideProps?: GetServerSidePropsType
}

export interface RouterContextProps {
  push?: (path: string) => Promise<void>
}
