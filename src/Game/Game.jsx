import { useContext, useEffect, useState } from 'react';
import './Game.scss'
import Sidebar from './Sidebar/Sidebar';
import { ScrollContext } from '../App';
import MainWin from './MainWin/MainWin';
import Confetti from 'react-confetti';
import { colorGen1 } from '../DataStore/DataStore';

const Game = () => {
    const { targetRef } = useContext(ScrollContext);
    const [result, setResult] = useState(2);
    const [score, setScore] = useState(0);
    const [color, setColor] = useState(colorGen1());
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        if(result > 1) {
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
            setColor(colorGen1());
        }
    }, [result]);

    return (
        <div className="main-game" ref={targetRef}>
            {result === 1 && showConfetti && <Confetti  width={window.innerWidth} height={1500} gravity={0.2} number={1000}/>}
            <Sidebar score={score} result={result} />
            <MainWin setScore={setScore} result={result} setResult={setResult} data={data} score={score} setShowConfetti={setShowConfetti} loading={loading} color={color}/>
        </div>
    )
}

export default Game;