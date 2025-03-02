import Markey from '../../../Components/Marquee/Markey';
import Canvas from './Canvas/Canvas';
import './MainL.scss'

const MainL = () => {
    return(
        <div className='Main-L'>
            <Canvas />
            <Markey
                text='Guess'
                mHeight='15%'
                mBG='#ffffff'
                mColor='#000000'
                tSize='48px'
                tMargin='48px'
                count={5}
                dir="right">
                    <div className='Main-L-markey-dv'></div>
            </Markey>
        </div>  
    )
}

export default MainL;