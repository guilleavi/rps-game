import { PropsWithChildren } from "react"

interface CircleProps extends PropsWithChildren {
  color: "blue-65" | "orange-53" | "red-52"
}

const Circle = ({ color = "blue-65", children }: CircleProps) => {
  return (
    <div
      className={`w-[138px] h-[138px] border-[15px] border-solid border-${color} rounded-full p-[30px] bg-white`}
    >
      {children}
    </div>
  )
}

export default Circle
