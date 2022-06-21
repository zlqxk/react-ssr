import { FC, PropsWithChildren } from 'react'
import type { IncomingMessage, ServerResponse } from 'http'

export type SsrFC<T = {}> = FC<PropsWithChildren<T>> & {
  getInitialProps?: (ctx: CtxProps) => Promise<T>
}

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
