const LIST = [
  '临别殷勤重寄词，词中有誓两心知。',
  '七月七日长生殿，夜半无人私语时。',
  '在天愿作比翼鸟，在地愿为连理枝。',
  '天长地久有时尽，此恨绵绵无绝期。',
]

export const getList = () => {
  return new Promise<typeof LIST>((resolve) => {
    setTimeout(() => {
      resolve(LIST)
    }, 1000)
  })
}
