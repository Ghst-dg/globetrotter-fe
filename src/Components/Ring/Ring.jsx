import './Ring.scss'

const Ring = () => {
    return <div className='Ring' style={{top: `${Math.floor(Math.random() * 100)}%`, left:`${Math.floor(Math.random() * 100)}%`}}></div>
}

export default Ring;