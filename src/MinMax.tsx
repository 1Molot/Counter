import React, {ChangeEvent, useState} from 'react';

export type MinMaxType = {
    minValue: number
    maxValue: number
    minFunction: (e: ChangeEvent<HTMLInputElement>) => void
    maxFunction: (e: ChangeEvent<HTMLInputElement>) => void
    setFunction: () => void
    // disabled:() => void
}

export const MinMax = (props: MinMaxType) => {

const inputClass =  props.minValue < props.maxValue ? 'input' : 'input warn'

    return (
        <>
            <div>
                <label htmlFor="minInput">Min</label>
                <input id="minInput"
                       className={inputClass}
                       type={'number'}
                       value={props.minValue}        //контролируем
                       onChange={props.minFunction}
                       min={0}
                       // max={props.maxValue}
                />

                {/*/////меняем значение (+1,-1)*/}
            </div>
            <div>
                <label htmlFor="maxInput">Max</label>
                <input id="maxInput"
                       className={inputClass}
                       type={'number'}
                       value={props.maxValue}
                       onChange={props.maxFunction}
                       min={0}
                />
            </div>
        </>
    )
}