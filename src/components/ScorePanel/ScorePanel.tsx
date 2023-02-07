const ScoreCard = () => {
  return (
    <div className="flex flex-col bg-white w-1/4 rounded-md p-2 text-center text-black">
      <p className="text-xs">SCORE</p>
      <p className="text-4xl">12</p>
    </div>
  )
}

const Title = () => {
  return (
    <div className="">
      <p className="text-2xl leading-5">
        ROCK <br></br> PAPER <br></br> SCISSORS
      </p>
    </div>
  )
}

const ScorePanel = () => {
  return (
    <nav className="flex justify-between p-6 border-2 rounded-md border-white text-white">
      <Title />
      <ScoreCard />
    </nav>
  )
}

export default ScorePanel
