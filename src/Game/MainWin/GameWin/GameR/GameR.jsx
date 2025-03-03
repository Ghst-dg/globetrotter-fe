import Input from "./Input/Input";
import './GameR.scss';
import Button from "../../../../Components/ButtonCLS1/Button";
import Ring from "../../../../Components/Ring/Ring";
import Cross from "../../../../Components/Cross/Cross";

const GameR = ({ data, setScore, setResult, score, result, setShowConfetti, loading, color }) => {
    const resetGame = () => {
        setResult(result + 2);
    };

    return (
        <div className='Game-R' style={{ backgroundColor: color[2] }}>
            {result > 1 ? (<>
                <Ring />
                <Ring />
                <Cross />
                <Cross />
                <Input data={data} setScore={setScore} setResult={setResult} score={score} setShowConfetti={setShowConfetti} /></>) : null}
            {result < 2 ? (
                <span className="Result">
                    {result === 1 ? "Yes, You are Correct!" : loading ? 'Just Wait!!! let it load' : `😞 Oops! that's incorrect, the answer is ${data?.name?.split(",")[0]}`}
                </span>
            ) : null}
            {result > 1 ? (
                <Button text="Give Up!" bgC="#FF6B6B" func={resetGame} />
            ) : (
                <Button text="Next" bgC="#9723C9" func={resetGame} />
            )}
        </div>
    );
};

export default GameR;