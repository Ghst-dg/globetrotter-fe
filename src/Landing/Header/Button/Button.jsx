import { useContext } from 'react';
import './Button.scss'
import { ScrollContext }  from '../../../App';

const Button = () => {
    const { scrollToElement } = useContext(ScrollContext);

    return <button onClick={scrollToElement} className = 'main-button'>Lets Play!</button>
}

export default Button;