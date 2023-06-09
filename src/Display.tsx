import React from 'react';

export type DisplayPropsType = {
    counter: number
    maxValue: number
    // minValue:number
}
                  //props
const Display = ({maxValue, counter}: DisplayPropsType) => {

    return (
        <div
            className='but'
            style={{color: counter === +maxValue ? "red" : "black", fontSize: counter === +maxValue ? "50px" : "30px"}}
        >{counter}</div>  //текущее  значение counter
    );
};

export default Display;