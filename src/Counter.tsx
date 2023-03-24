import React, {useState} from "react";


export const Counter = () => {
    let [x, setX] = useState<number>(1)

    let incrFunction = () => {
        setX(x + 1)
    }

    let resetFunction = () => {
        setX(x = 0)
    }
    return (
        <div className='vau'>
            <div
                className='but'
                style={{color: x === 5 ? "red" : "black", fontSize: x === 5 ? "50px" : "30px"}}
            >{x}</div
            >
            <div className='btn'>
                <button
                    className={x === 5 ? 'disabled' : 'incr'}
                    onClick={incrFunction}
                    disabled={x === 5}>Incr
                </button>
                <button
                    className={x !== 5 ? 'disabled' : 'res'}
                    disabled={x === 0}
                    onClick={resetFunction}>Reset
                </button>
            </div>
        </div>
    )
}