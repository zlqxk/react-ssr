import React from 'react'
import { SsrFC } from '../interface'
import { routerPush } from '../../router/Route'

const Home: SsrFC = () => {
  return (
    <div>
      <button onClick={() => routerPush('/list')}>跳转list</button>
    </div>
  )
}

export default Home
