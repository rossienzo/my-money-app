const INITIAL_STATE = {summary: {credit: 0, debt: 0}, user: {name: '', last: '', age: 0}, list: []}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'BILLING_CYCLES_FETCHED':
            return { ...state, list: action.payload.data }
        default:
            return state
    }
}