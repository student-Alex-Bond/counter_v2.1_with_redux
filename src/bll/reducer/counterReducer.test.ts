import counterReducer, {resetValueAC, incrementValueAC} from "./counterReducer";

test('increment', ()=> {
    const startState = {
        value: 1,
        startValue: 0,
        maxValue: 0
    }

   const endState = counterReducer(startState, incrementValueAC())

    expect(endState.value).toBe(2)
})

test('reset', ()=> {
    const startState = {
        value: 1,
        startValue: 0,
        maxValue: 0
    }

    const endState = counterReducer(startState, resetValueAC())

    expect(endState.value).toBe(0)
})

