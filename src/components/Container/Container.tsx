import { PropsWithChildren } from "react"
import Background from "./mobile-step-1.jpg"

const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-screen p-10 bg-gradient-radial from-blue-23 to-blue-15">
      {/*   <div
      className="h-screen p-8"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    > */}
      {children}
    </div>
  )
}

export default Container
