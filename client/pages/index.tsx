import React, { FC } from 'react'
import { useRouter } from '../../router/Route'

const Home: FC = () => {
  const router = useRouter()
  return (
    <div>
      <button onClick={() => router.push?.('/list')}>跳转list</button>
    </div>
  )
}

export default Home
