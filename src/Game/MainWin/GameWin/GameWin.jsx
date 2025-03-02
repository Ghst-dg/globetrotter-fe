import GameL from './GameL/GameL';
import GameR from './GameR/GameR';
import './GameWin.scss'

const GameWin = ({data, setScore, setResult, score, result, setShowConfetti}) => {
    return (
        <div className="game-win">
            <GameL data={data} setScore={setScore} setResult={setResult} score={score} result={result} setShowConfetti={setShowConfetti}/>
            <GameR data={data} setScore={setScore} setResult={setResult} score={score} result={result} setShowConfetti={setShowConfetti}/>
        </div>
    )
}

export default GameWin;