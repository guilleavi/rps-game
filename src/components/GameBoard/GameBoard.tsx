import Circle from "../Circle/Circle"
import PaperSVG from "../Svgs/PaperSVG"
import RockSVG from "../Svgs/RockSVG"
import ScissorsSVG from "../Svgs/ScissorsSVG"

const GameBoard = () => {
  return (
    <div className="m-1 bg-[url('/img/bg-triangle.svg')] bg-[center_top_3.5rem] bg-[length:75%] bg-no-repeat">
      <div className="flex justify-between mt-28">
        <Circle color="blue-65">
          <PaperSVG />
        </Circle>
        <Circle color="orange-53">
          <ScissorsSVG />
        </Circle>
      </div>
      <div className="flex justify-center mt-6">
        <Circle color="red-52">
          <RockSVG />
        </Circle>
      </div>
    </div>
  )
}

export default GameBoard
