'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LuCode, LuGuitar, LuUser } from 'react-icons/lu'
import { twMerge } from 'tailwind-merge'

const ITEMS = [
  {
    path: '/',
    label: 'Sobre mim',
    icon: <LuUser />,
  },
  {
    path: '/jobs',
    label: 'Experiência',
    icon: <LuCode />,
  },
  {
    path: '/music',
    label: 'Músicas',
    icon: <LuGuitar />,
  }
]

export const Navigation = () => {
  const pathname = usePathname()

  return (
    <nav>
      <ul className="flex gap-4 items-center justify-center">
        {ITEMS.map(({ path, label, icon }) => (
          <li key={path}>
            <Link
              href={path}
              className={
                twMerge(
                  "flex items-center gap-1 hover:underline transition-colors",
                  pathname === path && "text-cyan-600"
                )
              }
            >
              {icon} {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}