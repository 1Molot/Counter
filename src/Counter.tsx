import React, {ChangeEvent, useEffect, useState} from "react";
import Display, {DisplayPropsType} from "./Display";
import {MinMax} from "./MinMax";
import {json} from "stream/consumers";
import {AppRootStateType} from "./store";
import {useDispatch, useSelector} from "react-redux";
import {
    incrCounterAC,
    resetCounterAC,
    setCounterAC,
    setIsVisibleAC,
    setMaxValueAC,
    setMinValueAC
} from "./redux/Counter-reducer";
//? esli ///: inache

export type CountStateType = {
    [key: string]: Array<CountStateType>
}

export const Counter = () => {

    const counter = useSelector<AppRootStateType,number>(state => state.counter.counter)
    const minValue = useSelector<AppRootStateType,number>(state => state.counter.minValue)
    const maxValue = useSelector<AppRootStateType,number>(state => state.counter.maxValue)
    const isVisible = useSelector<AppRootStateType,boolean>(state => state.counter.isVisible)

    const dispatch = useDispatch()

    // const [counter, setCounter] = useState<number>(0)
    //
    // const [minValue, setMinValue] = useState<number>(0)
    //
    // const [maxValue, setMaxValue] = useState<number>(0)
    //
    // const [isVisible, setIsVisible] = useState<boolean>(false)

    // useEffect(() => {      //загрузиться после отрисовки
    //     const counterItem = localStorage.getItem('counterItem')  //получаем значение по ключу 'counterItem'
    //     // const b = counterItem ? JSON.parse(counterItem) : {}
    //     if (counterItem) {
    //         const currentItem = JSON.parse(counterItem);
    //         setMinValue(currentItem.min)       //текущие значения в input
    //         setMaxValue(currentItem.max)
    //         setCounter(currentItem.min);
    //     }
    // }, [])

                    //(e: ChangeEvent<HTMLInputElement>)
    const minFunction = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMinValueAC(+e.currentTarget.value))
        // setMinValue(+e.currentTarget.value) //текущие значения в input
    }
             //(e: ChangeEvent<HTMLInputElement>)
    const maxFunction = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxValueAC(+e.currentTarget.value))
        // setMaxValue(+e.currentTarget.value)
    }

    const incrFunction = () => {
        dispatch(incrCounterAC(counter))
        // seCounter(value => value + 1)
    }

    const resetFunction = () => {
        dispatch(resetCounterAC(minValue))
        // setCounter(minValue)
    }

    const setFunction = () => {
        const counterItem = {
            /* ...setting,*/ min: minValue, max: maxValue
        }
        localStorage.setItem('counterItem', JSON.stringify(counterItem))

        //изменям текущие значения*/
        dispatch(setCounterAC(minValue))
        // setCounter(minValue)
        dispatch(setIsVisibleAC(!isVisible))
        // setIsVisible(prevState => !prevState) //предыдущее значение меняем на противоположное //on-off
    }

    return (
        <>
            <div className='vau'>
                <Display counter={counter} maxValue={maxValue}/>
                <div className='btn'>
                    {isVisible
                        ? (<MinMax maxValue={maxValue} minValue={minValue}
                                   maxFunction={maxFunction}
                                   minFunction={minFunction}
                                   setFunction={setFunction}/>)
                        : (
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
                        )
                    }
                    <div>
                        {
                            !isVisible ? (
                                    <button
                                        className={maxValue < minValue ? 'disabled' : 'set'}
                                        // className='set'
                                        onClick={() => {
                                            // setIsVisible(prevState => !prevState)
                                            dispatch(setIsVisibleAC(!isVisible))
                                        }}>
                                        Setting
                                    </button>
                                )
                                : (
                                    <button
                                        className={maxValue < minValue ? 'disabled' : 'set'}
                                        // className='set'
                                        disabled={maxValue <= minValue}
                                        onClick={setFunction}>
                                        Set
                                    </button>
                                )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}


