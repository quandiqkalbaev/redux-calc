import {LOAD_ANS, LOAD_CLEAR, LOAD_BACKSPACE, LOAD_BUTTONS} from "./calculator.actionTypes";

export const loadButtons = (number: number | string) => {
    return {
        type: LOAD_BUTTONS,
        payload: number
    }
}
export const loadAns = (number?: number) => {
    return {
        type: LOAD_ANS,
        payload: number
    }
}
export const loadClear = () => {
    return {
        type: LOAD_CLEAR,
    }
}
export const loadBackspace = () => {
    return {
        type: LOAD_BACKSPACE,
    }
}