import { createContext, useRef } from "react";
import Markey from "./Components/Marquee/Markey";
import Game from "./Game/Game";
import Landing from "./Landing/Landing";

export const ScrollContext = createContext();

const App = () => {
  const targetRef = useRef(null);

  const scrollToElement = () => {
    targetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <ScrollContext.Provider value={{ scrollToElement, targetRef }}>
      <Landing />
      <Game />
      {/* <Markey
        text="Globetrotter"
        mHeight="20%"
        mBG="#ffffff"
        mColor="#000000"
        tSize="48px"
        tMargin="48px"
        count={10}
        dir="left"
      >
        <div className="markey-bullet"></div>
      </Markey> */}
    </ScrollContext.Provider>
  );
};

export default App;
