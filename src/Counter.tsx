import React, {ChangeEvent, useEffect, useState} from "react";
import Display, {DisplayPropsType} from "./Display";
import {MinMax} from "./MinMax";
import {json} from "stream/consumers";
//? esli ///: inache

export const Counter = () => {
    const [counter, setCounter] = useState<number>(0)
/*    const [setting, setSetting] = useState<{ min: number, max: number }>({min: 0, max: 0})*/


    const [minValue, setMinValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)


    const [isVisible, setIsVisible] = useState<boolean>(false)
    useEffect(()=>{      //загрузиться после отрисовки
      const a = localStorage.getItem('counterItem')  //получаем значение по ключу 'counterItem'
        const b = a ? JSON.parse(a) : {}    //true / false
        setMinValue(b.min || 0)       //текущие значения в input
        setMaxValue(b.max || 0)
    },[])

    const minFunction = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValue(+e.currentTarget.value) //текущие значения в input
    }
    const maxFunction = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
    }

    const incrFunction = () => {
        setCounter(counter + 1)

    }

    const resetFunction = () => {
        setCounter(minValue)
        // localStorage.resetItem('counterValue',JSON.stringify(counter))
    }

    const setFunction = () => {
        const counterItem = {
           /* ...setting,*/ min: minValue, max: maxValue
        }
        localStorage.setItem('counterItem', JSON.stringify(counterItem))

    /*    setSetting({...setting, min: minValue, max: maxValue})//изменям текущие значения*/
        setCounter(minValue)
        setIsVisible(prevState => !prevState) //предыдущее значение меняем на противоположное //on-off
    }
    // console.log(setting)
    // console.log(counter)   //isVisible-vidno ili net
    // const test = minValue < 0 || maxValue < 0 || minValue > maxValue || minValue === maxValue
    return (
        <>
            <div className='vau'>
                <Display counter={counter} maxValue={maxValue}/>
                <div className='btn'>
                    {isVisible ? <MinMax maxValue={maxValue} minValue={minValue} maxFunction={maxFunction}
                                         minFunction={minFunction}
                                         setFunction={setFunction}/> :
                        <>
                            <button
                                className={counter === maxValue ? 'disabled' : 'incr'}
                                onClick={incrFunction}
                                disabled={counter === maxValue}>Incr
                            </button>
                            <button
                                className={counter !== maxValue ? 'disabled' : 'res'}
                                disabled={counter === minValue}
                                onClick={resetFunction}>Reset
                            </button>
                        </>
                    }

                    <button
                        className='set'
                        // disabled={test}
                        onClick={setFunction}>Set
                    </button>
                </div>
            </div>
        </>
    )
}


