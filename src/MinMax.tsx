import React, {useState} from 'react';

export type MinMaxType = {
    minValue: number
    maxValue: number
    startFunction: (e: any) => void
    maxFunction: (e: any) => void
    setFunction: () => void
}

export const MinMax = (props: MinMaxType) => {

    return (
        <>
            <input type={'number'}
                   value={props.minValue}
                   onChange={props.startFunction}/>
            <input type={'number'}
                   value={props.maxValue}
                   onChange={props.maxFunction}/>
        </>
    )
}