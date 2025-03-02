import Markey from '../Components/Marquee/Markey';
import Header from './Header/Header';
import './Landing.scss'
import Main from './Main/Main';

const Landing = () => {
    return (
        <div className='landing'>
            <Header />
            <Main />
            <Markey
            text='Globetrotter'
            mHeight='10%'
            mBG='#000000'
            mColor='#ffffff'
            tSize='48px'
            tMargin='48px'
            count={10}
            dir="left">
                <div className='landing-markey-dv'></div>
            </Markey>
        </div>
    );
}

export default Landing;