import React, { useState } from 'react';
import Butoon from './Butoon';
import quotes from "./quotes.json"
const QuoteBox = () => {

    const pink = Math.floor(Math.random() * quotes.length)

    const [blue, setBlue] = useState(pink);



    const left = () => {

        const change = Math.floor(Math.random() * quotes.length)

        setBlue(change)

    }

 
    const colors = ["teal", "purple", "aqua", "green", "lime", "red", "silver"]
    const randomColors = Math.floor(Math.random() * colors.length)
    document.body.style = `background:${colors[randomColors]}` 
    
 
    return (
        <div className="container"  style={{color: colors[randomColors]}} >

    
        <div className='cup'>
          

        
            <h1> <i className="fa-solid fa-quote-left"></i>{quotes[blue].author} </h1>
            <h2>{quotes[blue].quote}</h2>

            <Butoon left={left} colors={colors} randomColors={randomColors} />

        </div>
        </div>
    );
};

export default QuoteBox;