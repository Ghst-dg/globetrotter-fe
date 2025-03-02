import './Button.scss'

const Button = ({bgC, text, func}) => {
    return <button className="btn-cls1" style={{backgroundColor: bgC}} onClick={func}>{text}</button>
}

export default Button;