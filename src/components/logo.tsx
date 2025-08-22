import { LuCode, LuGuitar } from 'react-icons/lu'

export const Logo = () => {
  return (
    <div className="flex items-center gap-2 justify-center">
      <LuCode size={18} />
      <h1 className="text-xl">André Brandão</h1>
      <LuGuitar size={16} />
    </div>
  )
}