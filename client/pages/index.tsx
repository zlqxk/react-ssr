import React, { FC } from 'react'
import { useRouter } from '../../router/Route'
import './index.css'

const Home: FC = () => {
  const router = useRouter()

  return (
    <div className="box">
      <div className="card">
        <p>前端路由跳转</p>
        <button onClick={() => router.push?.('/list')}>跳转</button>
      </div>
      <div className="card">
        <p>a标签路由跳转</p>
        <a href="/list">跳转</a>
      </div>
    </div>
  )
}

export default Home
