import { useState } from "react"
import Circle from "./components/Circle/Circle"
import Container from "./components/Container/Container"
import GameBoard from "./components/GameBoard/GameBoard"
import ScoreCard from "./components/ScoreCard/ScoreCard"
import ScorePanel from "./components/ScorePanel/ScorePanel"

const App = () => {
  const [score, setScore] = useState(12)

  return (
    <Container>
      <ScorePanel>
        <h1 className="pl-2 text-2xl leading-5">
          ROCK <br></br>PAPER <br></br> SCISSORS
        </h1>
        <ScoreCard>
          <p className="text-xs font-bold">SCORE</p>
          <p className="text-5xl font-bold">{score}</p>
        </ScoreCard>
      </ScorePanel>
      <GameBoard />
    </Container>
  )
}

export default App
