import { PropsWithChildren } from "react"

const ScoreCard = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col w-24 bg-white rounded-md p-2 text-center text-black">
      {children}
    </div>
  )
}

export default ScoreCard
