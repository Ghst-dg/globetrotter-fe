import AddButton from './AddButton/AddButton';
import './Friends.scss'

const Friends = ({score}) => {
    return (
        <div className='friends-cont'>
            <button className='me-btn'>{score} <span>You</span></button>
            <AddButton />
        </div>
    )
}

export default Friends;