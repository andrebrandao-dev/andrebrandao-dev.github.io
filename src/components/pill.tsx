interface PillProps {
  children: string 
}
export const Pill = ({children}: PillProps) => {
  return <div className="inline-flex border border-cyan-900 text-xs py-1 px-2.5 rounded-md">{children}</div>
}