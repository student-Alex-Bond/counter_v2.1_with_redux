export const incrementValueAC = () => {
    return {
        type: 'INCREMENT',

    } as const
}

export const decrementValueAC = () => {
    return {type: 'RESET'} as const
}

type incrementValueACType = ReturnType<typeof incrementValueAC>
type decrementValueACType = ReturnType<typeof decrementValueAC>

type commonType = incrementValueACType | decrementValueACType

const initialState = {
    value: 0,
    startValue: 0,
    maxValue: 0
}

type initialStateType = typeof initialState

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
                value: 0
            }
        default:
            return state
    }
}


export default counterReducer