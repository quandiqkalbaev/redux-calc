export const LOAD_ANS = 'LOAD_ANS'
export const LOAD_BUTTONS = 'LOAD_BUTTONS'
export const LOAD_CLEAR = 'LOAD_CLEAR'
export const LOAD_BACKSPACE = 'LOAD_BACKSPACE'

export interface CalculatorState {
    number: string;
    ans: string;
}

export interface RootState {
    calculator: CalculatorState;
}
