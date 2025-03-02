import React from 'react';
import './Markey.scss'
import Marquee from 'react-fast-marquee';

const Markey = ({ children, text, mHeight, mBG, mColor, tSize, tMargin, count, dir }) => {
    return (
        <div className="markey" style={{ height: mHeight, backgroundColor: mBG, color: mColor }}>
            <Marquee style={{overflow: 'hidden'}} direction={dir}>
                {Array.from({ length: count }).map((_, i) => (
                    <React.Fragment key={i}>
                        <span style={{fontSize: tSize, marginLeft: tMargin}}>{text}</span>
                        {children}
                    </React.Fragment>
                ))}
            </Marquee>
        </div>
    )
}

export default Markey;