import { useContext } from 'react';
import Button from '../../../Components/ButtonCLS1/Button';
import './MainR.scss'
import Text from './Text/Text';
import { ScrollContext }  from '../../../App';

const MainR = () => {
    const { scrollToElement } = useContext(ScrollContext);
    return (
        <div className="Main-R">
            <Text />
            <div className="Main-R-btn-cont">
                <Button bgC="#ff00f5" text="Lets Play!" func={scrollToElement}/>
            </div>
        </div>
    )
}

export default MainR;