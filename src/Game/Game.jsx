import { useContext, useEffect, useState } from 'react';
import './Game.scss'
import Sidebar from './Sidebar/Sidebar';
import { ScrollContext } from '../App';
import MainWin from './MainWin/MainWin';
import Confetti from 'react-confetti';

const Game = () => {
    const { targetRef } = useContext(ScrollContext);
    const [result, setResult] = useState(2);
    const [score, setScore] = useState(0);

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        if(result == 2) {
            fetch("https://globetrotter-be.onrender.com/random")
            .then((response) => {
                if (!response.ok) throw new Error("Network response was not ok");
                return response.json();
            })
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });   
        }
    }, [result]);

    return (
        <div className="main-game" ref={targetRef}>
            {showConfetti && <Confetti  width={window.innerWidth} height={3000} />}
            <Sidebar score={score} result={result} />
            <MainWin setScore={setScore} result={result} setResult={setResult} data={data} score={score} setShowConfetti={setShowConfetti}/>
        </div>
    )
}

export default Game;