import React, {useState} from "react";
import Display, {DisplayPropsType} from "./Display";
import {MinMax} from "./MinMax";


export const Counter = () => {
    const [counter, setCounter] = useState<number>(0)
    const [setting, setSetting] = useState<{ min: number, max: number }>({min: 0, max: 0})
    const [minValue, setMinValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [isVisible, setIsVisible] = useState<boolean>(false)


    const startFunction = (e: any) => {
        setMinValue(+e.currentTarget.value)
    }
    const maxFunction = (e: any) => {
        setMaxValue(+e.currentTarget.value)
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
        setSetting({...setting, min: minValue, max: maxValue})
        setCounter(minValue)
        setIsVisible(prevState => !prevState)
        // setSetting(minValue)
        // localStorage.setItem('counterValue',JSON.stringify(counter))
        // setCounter()
        // max value
        // start value 2
    }

    console.log(setting)
    console.log(counter)
    return (

        <>
            <div className='vau'>

                <Display counter={counter} maxValue={setting.max}/>
                <div className='btn'>
                    { isVisible ?   <MinMax maxValue={maxValue} minValue={minValue} maxFunction={maxFunction}
                                            startFunction={startFunction}
                                            setFunction={setFunction}/> :
                        <>
                    <button
                        className={counter === setting.max ? 'disabled' : 'incr'}
                        onClick={incrFunction}
                        disabled={counter === setting.max}>Incr
                    </button>
                    <button
                        className={counter !== setting.max ? 'disabled' : 'res'}
                        disabled={counter === setting.min}
                        onClick={resetFunction}>Reset
                    </button>
                    </>
                    }

                    <button
                        className='set'
                        onClick={setFunction}>Set
                    </button>
                </div>

            </div>

        </>
    )
}


