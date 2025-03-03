import './Cross.scss'

const Cross = () => {
    return (
        <div className="cross" style={{top: `${Math.floor(Math.random() * 100)}%`, left:`${Math.floor(Math.random() * 100)}%`}}>
            <div className="horizontal"></div>
            <div className="vertical"></div>
        </div>
    )
}

export default Cross;