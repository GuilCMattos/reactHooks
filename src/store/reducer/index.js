export default function reducer(state, action) { 
    switch(action.type){ 
        case 'number_add2': 
        return {...state, number: state.number +2}
        case 'login':
            return {...state, user: { name: action.payload }}
        case 'number_add7':
            return {...state, number: state.number * 7}
        case 'div25':
            return {...state, number: state.number / 25}
        case 'parse':
            return {...state, number: parseInt(state.number)}
        case 'addN':
            return {...state, number: state.number + action.num}
        default:
            return state
    }
}
