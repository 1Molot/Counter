import React, {useState} from "react";
import Display, {DisplayPropsType} from "./Display";


export const Counter = () => {
    const [counter, setCounter] = useState<number>(1)
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [setting, setStetting] = useState<number>(0)

    const startFunction = (e: any) => {
        setStartValue(e.target.value)
    }
    const maxFunction = (e: any) => {
        setMaxValue(e.target.value)
    }

    const incrFunction = () => {
        setCounter(counter + 1)
        // localStorage.incrItem('counterValue',JSON.stringify(counter))
    }

    const resetFunction = () => {
        setCounter(0)
        // localStorage.resetItem('counterValue',JSON.stringify(counter))
    }

    const setFunction = () => {
        setStetting(maxValue)
        // localStorage.setItem('counterValue',JSON.stringify(counter))
        // setCounter()
        // max value
        // start value 2
    }
    console.log(setting)
    return (

        <>
            <div className='vau'>
                <Display counter={counter} maxValue={setting}/>
                <div className='btn'>
                    <button
                        className={counter === setting ? 'disabled' : 'incr'}
                        onClick={incrFunction}
                        disabled={counter === setting}>Incr
                    </button>
                    <button
                        className={counter !== setting ? 'disabled' : 'res'}
                        disabled={counter === 0}
                        onClick={resetFunction}>Reset
                    </button>
                    <button
                        className='set'
                        onClick={setFunction}>Set
                    </button>
                </div>

            </div>
            <div>
                start value <input type={'number'}
                                   value={startValue}
                                   // disabled={}
                                   onChange={startFunction}/>
                max value <input type={'number'}
                                 value={maxValue}
                                 onChange={maxFunction}/>
            </div>
        </>
    )
}