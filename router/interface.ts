import { SsrFC } from '../client/interface'

export interface RouterProps {
  /**
   * 请求路径
   */
  pathname: string
}

export interface ListenerProps {
  setPath: React.Dispatch<React.SetStateAction<string>>
}
