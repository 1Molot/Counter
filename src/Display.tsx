import React from 'react';

export type DisplayPropsType = {
    counter: number
}

const Display = ({counter}: DisplayPropsType) => {
    return (
        <div
            className='but'
            style={{color: counter === 5 ? "red" : "black", fontSize: counter === 5 ? "50px" : "30px"}}
        >{counter}</div>
    );
};

export default Display;