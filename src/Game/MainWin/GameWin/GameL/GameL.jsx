import { imageUrls } from '../../../../DataStore/DataStore';
import Fact from './Facts/Fact';
import './GameL.scss';
import Question from './Question/Question';

const GameL = ({ data, setScore, setResult, score, result, loading, color, }) => {
    return (
        <div className='Game-L' style={{ backgroundColor: color[1] }}>
            {result > 1 && imageUrls.map((img, index) => {
                const top = `${Math.floor(Math.random() * 100)}%`;
                const left = `${Math.floor(Math.random() * 100)}%`;
                const borderRadius = `${Math.floor(Math.random() * 91) + 10}% ${Math.floor(Math.random() * 91) + 10}% ${Math.floor(Math.random() * 91) + 10}% ${Math.floor(Math.random() * 91) + 10}%`;
                return (
                    <div
                        className='ImageFiller'
                        style={{
                            backgroundImage: `url(${img})`,
                            top: top,
                            left: left,
                            borderRadius: borderRadius
                        }}
                        key={index}
                    ></div>
                );
            })}
            {result > 1 ? <Question data={data} loading={loading} /> : <Fact data={data} loading={loading} />}
        </div>
    );
};

export default GameL;