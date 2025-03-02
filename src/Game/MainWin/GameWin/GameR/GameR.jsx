import Input from "./Input/Input"
import './GameR.scss'
import Button from "../../../../Components/ButtonCLS1/Button"

const GameR = ({data, setScore, setResult, score, result, setShowConfetti}) => {
    const resetGame = () => {
        setResult(result + 2);
    }

    return(
        <div className = 'Game-R'>
            {result > 1 ? <Input data={data} setScore={setScore} setResult={setResult} score={score} setShowConfetti={setShowConfetti}/> : <></>}
            {result < 2 ? <span className="Result">{result === 1 ? "Yes, You are Correct!" : `😞 Oops! thats incorrect, the answer is ${data?.name?.split(",")[0]}`}</span> : <></>}
            {result > 1 ? <Button text="Give Up!" bgC="#FF0000" func={resetGame}/> : <Button text="Next" bgC="#0000FF" func={resetGame}/>}
        </div>
    )
}

export default GameR