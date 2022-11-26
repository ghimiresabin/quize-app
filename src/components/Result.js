import React from 'react'

const Result = ({score, playAgain}) => {
  return (
    <div className='score-bord'>
        <div className='score'>You Score {score}/ 5 correct answer !</div>
        <button className='playBtn' onClick={playAgain}>Play Again!</button>
    </div>
  )
}

export default Result