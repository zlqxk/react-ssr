const LIST = [
  { id: 1, title: '标题1', desc: '描述1' },
  { id: 2, title: '标题2', desc: '描述2' },
  { id: 3, title: '标题3', desc: '描述3' },
  { id: 4, title: '标题4', desc: '描述4' },
]

export const getList = () => {
  return new Promise<typeof LIST>((resolve) => {
    setTimeout(() => {
      resolve(LIST)
    }, 1000)
  })
}
