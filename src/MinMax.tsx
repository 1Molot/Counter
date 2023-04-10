import React, {ChangeEvent, useState} from 'react';

export type MinMaxType = {
    minValue: number
    maxValue: number
    minFunction: (e: ChangeEvent<HTMLInputElement>) => void
    maxFunction: (e: ChangeEvent<HTMLInputElement>) => void
    setFunction: () => void
}

export const MinMax = (props: MinMaxType) => {

    return (
        <>
            <div>
                <label htmlFor="minInput">Min</label>
                <input id="minInput"
                       className='input'
                       type={'number'}
                       value={props.minValue}        //контролируем
                       onChange={props.minFunction}/>
                {/*/////меняем значение (+1,-1)*/}
            </div>
            <div>
                <label htmlFor="maxInput">Max</label>
                <input id="maxInput"
                       className='input'
                       type={'number'}
                       value={props.maxValue}
                       onChange={props.maxFunction}/>
            </div>
        </>
    )
}