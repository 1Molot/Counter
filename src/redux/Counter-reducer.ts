import React, {useReducer} from 'react';
import {CountStateType} from "../Counter";

type ActionsType =
    SetMinValueACType |
    SetCounterACType |
    SetMaxValueACType |
    SetIsVisibleACType |
    IncrCounterACType |
    ResetCounterACType

type InitialStateType = {
    counter: number
    minValue: number
    maxValue: number
    isVisible: boolean
}
const initialState: InitialStateType = {
    counter: 0,
    minValue: 0,
    maxValue: 0,
    isVisible: false
}

export const counterReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET-COUNTER':
            return {
              ...state, counter: action.counter
            }
        case 'SET-MIN-VALUE':
            return {...state, minValue: action.minValue}
        case 'SET-MAX-VALUE':
            return {
                ...state,maxValue:action.maxValue
            }
        case 'SET-IS-VISIBLE':
            return {
            ...state, isVisible: action.isVisible
            }
            case 'INCR-COUNTER':
            return {
            ...state, counter:action.value + 1
            }
            case 'RESET-COUNTER':
            return {
                ...state, counter:action.minValue
            }
        default:
            return state
    }
}
export type SetCounterACType = ReturnType<typeof setCounterAC>
export const setCounterAC = (counter: number) => {
    return {type: 'SET-COUNTER', counter} as const
}

export type SetMinValueACType = ReturnType<typeof setMinValueAC>
export const setMinValueAC = (minValue: number) => {
    return {type: 'SET-MIN-VALUE', minValue} as const
}
export type SetMaxValueACType = ReturnType<typeof setMaxValueAC>
export const setMaxValueAC = (maxValue: number) => {
    return {type: 'SET-MAX-VALUE', maxValue} as const
}
export type SetIsVisibleACType = ReturnType<typeof setIsVisibleAC>
export const setIsVisibleAC = (isVisible: boolean) => {
    return {type: 'SET-IS-VISIBLE', isVisible} as const
}
export type IncrCounterACType = ReturnType<typeof incrCounterAC>
export const incrCounterAC = (value:number) => {
    return {type: 'INCR-COUNTER', value} as const
}
export type ResetCounterACType = ReturnType<typeof resetCounterAC>
export const resetCounterAC = (minValue:number) => {
    return {type: 'RESET-COUNTER', minValue} as const
}


