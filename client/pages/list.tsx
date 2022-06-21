import React, { FC } from 'react'
import { getList } from '../../mock/getList'
import { GetServerSidePropsType } from '../interface'

interface ListProps {
  list: {
    id: number
    title: string
    desc: string
  }[]
}

const List: FC<ListProps> = (props) => {
  const { list } = props
  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.title}: {item.desc}
          </li>
        ))}
      </ul>
    </div>
  )
}

export const getServerSideProps: GetServerSidePropsType<ListProps> = async () => {
  const list = await getList()
  return {
    list,
  }
}

export default List
