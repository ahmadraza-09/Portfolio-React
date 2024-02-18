import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Typewritercomp = () => {

  return (
    <>
    <span style={{fontWeight: 'Bolder', marginLeft: '10px'}}>
        <Typewriter
        words={['Freelancer', 'Youtuber', 'Developer']}
        loop={100}
        cursor
        cursorStyle='|'
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
        />
    </span>
    </>
  );
};

export default Typewritercomp;
