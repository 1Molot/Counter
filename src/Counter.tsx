import React, {useState} from "react";
import Display, {DisplayPropsType} from "./Display";


export const Counter = () => {
    const [counter, setCounter] = useState<number>(1)

    const incrFunction = () => {
        setCounter(counter + 1)
    }

    const resetFunction = () => {
        setCounter(0)
    }
    return (
        <div className='vau'>
            <Display counter={counter}/>
            <div className='btn'>
                <button
                    className={counter === 5 ? 'disabled' : 'incr'}
                    onClick={incrFunction}
                    disabled={counter === 5}>Incr
                </button>
                <button
                    className={counter !== 5 ? 'disabled' : 'res'}
                    disabled={counter === 0}
                    onClick={resetFunction}>Reset
                </button>
            </div>
        </div>
    )
}