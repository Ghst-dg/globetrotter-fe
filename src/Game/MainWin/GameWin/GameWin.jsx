import GameL from './GameL/GameL';
import GameR from './GameR/GameR';
import './GameWin.scss';

const GameWin = ({ data, setScore, setResult, score, result, setShowConfetti, loading, color}) => {
    return (
        <div className="game-win" style={{ height: result > 1 ? "100%" : "75%", width: result > 1 ? "100%" : "75%", border : result > 1 ? "none" : "5px solid #000000", borderRadius : result > 1 ? "0" : "48px"}}>
            <GameL data={data} setScore={setScore} setResult={setResult} score={score} result={result} setShowConfetti={setShowConfetti} loading={loading} color={color} />
            <GameR data={data} setScore={setScore} setResult={setResult} score={score} result={result} setShowConfetti={setShowConfetti} loading={loading} color={color}/>
        </div>
    );
};

export default GameWin;