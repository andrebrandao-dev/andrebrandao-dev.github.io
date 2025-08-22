import { useMemo } from 'react'

const birthDay = 7
const birthMonth = 9
const birthYear = 1991
const fullName = 'André Brandão Ferreira'
const avatar = 'https://avatars.githubusercontent.com/u/1919433?v=4'
const linkedIn = 'https://www.linkedin.com/in/andrebrandaoo/'
const github = 'https://github.com/andrebrandao-dev'
const email = 'andrebrandao.dev@gmail.com'
const currentCity = 'Presidente Prudente - SP'


export const usePersonalInfos = () => {
  const age = useMemo(() => {
    const today = new Date()
    let age = today.getFullYear() - birthYear
    if (today.getMonth() + 1 < birthMonth || (today.getMonth() + 1 === birthMonth && today.getDate() < birthDay)) {
      age--
    }
    return age
  }, [])

  return {
    fullName,
    avatar,
    linkedIn,
    github,
    email,
    currentCity,
    age
  }
}