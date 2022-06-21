import type { IncomingMessage, ServerResponse } from 'http'

export interface CtxProps {
  /**
   * req
   */
  req?: IncomingMessage

  /**
   * res
   */
  res?: ServerResponse
}

/**
 * 服务端数据请求
 */
export type GetServerSidePropsType<T = {}> = (ctx: CtxProps) => Promise<T>

/**
 * 根组件Props
 */
export interface AppProps {
  __DATA__: {
    pathname: string
    pageProps?: any
  }
}
