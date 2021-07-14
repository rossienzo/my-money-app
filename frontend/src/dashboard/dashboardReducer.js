const INITIAL_STATE = {summary: {credit: 0, debt: 0}, user: {name: '', last: '', age: 0}}

export default function(state = INITIAL_STATE, action) {
    
    switch (action.type) {
        case 'BILLING_SUMMARY_FETCHED':
            return { ...state, summary: action.payload.data }
        case 'USER_CONNECTION':
            return {...state, user: action.payload}
        default:
            return state
    }
}