import Hero from  "../pages/hero/Hero"
import React from 'react';
import Zoom from 'react-reveal/Zoom';

const Main = () => {
  return (
    <div>
        <Zoom delay={-400}>
          <Hero/>
        </Zoom>
    </div>
  );
};
export default Main;



