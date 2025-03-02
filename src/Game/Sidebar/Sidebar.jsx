import Friends from './Friends/Friends';
import './Sidebar.scss'

const Sidebar = ({score}) => {
    return(
        <div className='sidebar'>
            <Friends score={score}/>
        </div>
    )
}

export default Sidebar;