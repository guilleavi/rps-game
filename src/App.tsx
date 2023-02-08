import { useState } from "react"
import Container from "./components/Container/Container"
import ScoreCard from "./components/ScoreCard/ScoreCard"
import ScorePanel from "./components/ScorePanel/ScorePanel"

const App = () => {
  const [score, setScore] = useState(12)

  return (
    <Container>
      <ScorePanel>
        <h1 className="text-2xl leading-5">
          ROCK <br></br>PAPER <br></br> SCISSORS
        </h1>
        <ScoreCard>
          <p className="text-xs">SCORE</p>
          <p className="text-4xl">{score}</p>
        </ScoreCard>
      </ScorePanel>
    </Container>
  )
}

export default App
