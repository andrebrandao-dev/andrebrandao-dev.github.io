import Image from 'next/image'
import Link from 'next/link'
import { LuLinkedin, LuMail, LuGithub } from 'react-icons/lu'
import { usePersonalInfos } from '@/hooks/use-personal-infos'

export default function Home() {
  const { avatar, fullName, currentCity, age, github, linkedIn, email } = usePersonalInfos()
  
  return (
    <>
      <Image
        src={avatar}
        alt="André Brandão Ferreira"
        width={100}
        height={100}
        className="rounded-full grayscale-50 mx-auto"
        fetchPriority="high"
        priority
      />

      <ul className="flex flex-col gap-2 text-sm items-center">
        <li>{fullName}</li>
        <li>{age} Anos</li>
        <li>{currentCity}</li>
      </ul>

      <ul className="flex gap-4 justify-center">
        <li className="hover:text-cyan-600 transition-colors">
          <Link href={github} target="_blank"><LuGithub /></Link>
          <span className="sr-only">Github</span>
        </li>
        <li className="hover:text-cyan-600 transition-colors">
          <Link href={linkedIn} target="_blank"><LuLinkedin /></Link>
          <span className="sr-only">LinkedIn</span>
        </li>
        <li className="hover:text-cyan-600 transition-colors">
          <Link href={email} target="_blank"><LuMail /></Link>
          <span className="sr-only">Email</span>
        </li>
      </ul>
    </>
  )
}
