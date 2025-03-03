import Markey from '../../Components/Marquee/Markey';
import GameWin from './GameWin/GameWin';
import './MainWin.scss';

const MainWin = ({ data, setScore, setResult, score, result, setShowConfetti, loading, color }) => {
    return (
        <div className="main-win" style={{ backgroundColor: color[0] }}>
            <div className="main-win-bg">
                {Array.from({ length: 10 }, (_, i) => (
                    <Markey
                        key={i}
                        text={result === 1 ? "Correct!! 🎉🥳🎊" :  result === 0 ? 'Sorry 😔😕🫤☹️🙁😖😞😟 Wrong' : "error_loading"}
                        mHeight="20%"
                        mBG={i % 2 === 0 ? "hsla(0, 0%, 0%, 0.0)" : "#ffffff"}
                        mColor="#000000"
                        tSize="96px"
                        tMargin="96px"
                        count={10}
                        dir= {i % 2 === 0 ? "left" : "right"}
                        width='200%'
                    />
                ))}
            </div>
            <GameWin
                data={data}
                setScore={setScore}
                setResult={setResult}
                score={score}
                result={result}
                setShowConfetti={setShowConfetti}
                loading={loading}
                color={color}
            />
        </div>
    );
};

export default MainWin;