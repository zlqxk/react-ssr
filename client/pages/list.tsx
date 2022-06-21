import React from 'react'
import { SsrFC } from '../interface'

const LIST = [
  { id: 1, title: '标题1', desc: '描述1' },
  { id: 2, title: '标题2', desc: '描述2' },
  { id: 3, title: '标题3', desc: '描述3' },
  { id: 4, title: '标题4', desc: '描述4' },
]

const List: SsrFC = () => {
  return (
    <div>
      <ul>
        {LIST.map((item) => (
          <li key={item.id}>
            {item.title}: {item.desc}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List
