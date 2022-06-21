import Home from '../client/pages'
import List, { getServerSideProps } from '../client/pages/list'
import { ConfigProps } from './interface'

export default [
  { path: '/', Component: Home },
  { path: '/list', Component: List, getServerSideProps },
] as ConfigProps[]
