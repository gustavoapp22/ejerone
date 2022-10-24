import React from 'react';

const Butoon = ({ left,randomColors, colors }) => {
    return (
        <div  >

            <button onClick={left} style={{color: colors[randomColors]}}>&#62;</button>
             
        </div>
    );
};

export default Butoon;