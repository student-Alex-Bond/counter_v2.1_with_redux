export const incrementValueAC = () => {
    return {
        type: 'INCREMENT',

    } as const
}

export const resetValueAC = () => {
    return {type: 'RESET'} as const
}

export const setValueAC = () => {
    return {
        type: 'SET_VALUE'
    } as const
}

export const setStartValueAC = (value: number)=> {
    return {
        type: 'SET_START_VALUE',
        value
    } as const
}

export const setMaxValueAC = (value: number)=> {
    return {
        type: 'SET_MAX_VALUE',
        value
    } as const
}

type incrementValueACType = ReturnType<typeof incrementValueAC>
type resetValueACType = ReturnType<typeof resetValueAC>
type setValueACType = ReturnType<typeof setValueAC>
type setStartValueACType = ReturnType<typeof setStartValueAC>
type setMaxValueACType = ReturnType<typeof setMaxValueAC>

type commonType = incrementValueACType | resetValueACType | setValueACType |setStartValueACType | setMaxValueACType

const initialState = {
    startValue: 0,
    maxValue: 0,
    value: 0
}

export type initialStateType = typeof initialState

const counterReducer = (state: initialStateType = initialState, action: commonType): initialStateType => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                value: state.value + 1
            }
        case 'RESET':
            return {
                ...state,
                value: state.startValue
            }
        case 'SET_VALUE':
            return {
                ...state,
                value: state.startValue
            }
        case "SET_START_VALUE":
            return {
                ...state,
                startValue: action.value
            }
        case "SET_MAX_VALUE":
            return {
                ...state,
                maxValue: action.value
            }
        default:
            return state
    }
}


export default counterReducer