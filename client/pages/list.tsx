import React, { FC } from 'react'
import { getList } from '../../mock/getList'
import { GetServerSidePropsType } from '../interface'

interface ListProps {
  list: string[]
}

const List: FC<ListProps> = (props) => {
  const { list } = props
  return (
    <div>
      {list.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
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
