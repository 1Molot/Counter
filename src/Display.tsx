import React from 'react';

export type DisplayPropsType = {
    counter: number
    maxValue: number
    // minValue:number
}

const Display = ({maxValue,counter}: DisplayPropsType) => {
    console.log(maxValue)
    return (
        <div
            className='but'
            style={{color: counter === +maxValue ? "red" : "black", fontSize: counter === +maxValue ? "50px" : "30px"}}
        >{counter}</div>
    );
};

export default Display;