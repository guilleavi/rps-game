import { PropsWithChildren } from "react"

const ScorePanel = ({ children }: PropsWithChildren) => {
  return (
    <nav className="flex justify-between items-center p-6 border-2 rounded-md border-white text-white">
      {children}
    </nav>
  )
}

export default ScorePanel
