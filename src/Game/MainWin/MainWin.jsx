import GameWin from './GameWin/GameWin';
import './MainWin.scss'

const MainWin = ({data, setScore, setResult, score, result, setShowConfetti}) => {
    return (
        <div className="main-win">
            <GameWin data={data} setScore={setScore} setResult={setResult} score={score} result={result} setShowConfetti={setShowConfetti}/>
        </div>
    )
}

export default MainWin;