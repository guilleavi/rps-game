import { PropsWithChildren } from "react"

const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-screen bg-gradient-radial from-blue-23 to-blue-15">
      {children}
    </div>
  )
}

export default Container
