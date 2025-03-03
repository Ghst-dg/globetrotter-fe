import './Question.scss'
import Ring from '../../../../../Components/Ring/Ring'

const Question = ({data, loading}) => {

    if(loading) return <Ring/>

    return (
        <div className="questCont">
            <div className="question">
                <div className="serial-num">1</div>
                <div className="question-text">
                    <span>{data?.clues[0]}</span>
                </div>
            </div>
            <div className="question">
                <div className="serial-num">2</div>
                <div className="question-text">
                    <span>{data?.clues[1]}</span>
                </div>
            </div>
        </div>
    )
}

export default Question;