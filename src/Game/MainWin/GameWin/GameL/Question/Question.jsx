import { useEffect } from 'react';
import './Question.scss'

const Question = ({data}) => {

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