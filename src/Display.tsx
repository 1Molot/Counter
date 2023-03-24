import React from 'react';

export type DisplayPropsType = {
    x: number
}

const Display = ({x}: DisplayPropsType) => {
    return (
        <div
            className='but'
            style={{color: x === 5 ? "red" : "black", fontSize: x === 5 ? "50px" : "30px"}}
        >{x}</div>
    );
};

export default Display;