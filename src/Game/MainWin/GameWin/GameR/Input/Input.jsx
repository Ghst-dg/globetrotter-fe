import { useState } from "react";
import "./Input.scss";

const Input = ({ data, setScore, setResult, score, setShowConfetti }) => {
    const [inputValue, setInputValue] = useState("");

    const chckAns = () => {
        if (inputValue.trim().toLowerCase() === data?.name?.split(",")[0]?.toLowerCase()) {
            setScore(score + 1);
            setResult(1);
            setShowConfetti(true);
            setTimeout(() => setShowConfetti(false), 10000);
        } else {
            setResult(0);
        }
    };

    return (
        <div className="input-cont">
            <input 
                type="text" 
                className="input" 
                placeholder="Enter your answer here" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="chck-btn" onClick={chckAns}></button>
        </div>
    );
};

export default Input;
