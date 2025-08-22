import { type ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  title?: string
}

export const Card = ({ children, title }: CardProps) => {
  return (
    <div className="border border-white/10 rounded flex flex-col gap-2">
      {title && <p className="font-bold border-b border-white/10 p-4">{title}</p>}

      <div className="p-4 flex flex-col gap-4">
        {children}
      </div>
    </div>
  )
}