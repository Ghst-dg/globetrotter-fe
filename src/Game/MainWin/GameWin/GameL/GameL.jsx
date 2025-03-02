import Fact from './Facts/Fact';
import './GameL.scss'
import Question from './Question/Question';

const GameL = ({data, setScore, setResult, score, result}) => {
    return(
        <div className = 'Game-L'>
            {result > 1 ? <Question data={data}/> : <Fact data={data} />}
        </div>
    )
}

export default GameL;