import React, {useState} from "react";
import Display, {DisplayPropsType} from "./Display";


export const Counter = () => {
    let [x, setX] = useState<number>(1)

    let incrFunction = () => {
        setX(x + 1)
    }

    let resetFunction = () => {
        setX(0)
    }
    return (
        <div className='vau'>
            <Display x={x}/>
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