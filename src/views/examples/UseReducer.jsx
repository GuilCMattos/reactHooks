import React from 'react'
import { useReducer } from 'react';
import PageTitle from '../../components/layout/PageTitle'

const initialState = { 
    cart: [],
    products: [],
    user: null,
    number: 0
}

// add 7, dividir 25, parse, addN

function reducer(state, action) { 
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

const UseReducer = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">

            {state.user ?
                <span className="text">{state.user.name}</span> : <span className="text">Sem usuário</span> }

                <span className="text">
                    {state.number}
                </span>

                <div>
                   <button onClick={e => dispatch({type: 'login', payload: 'Maria'})} className="btn">
                    Login
                   </button>
                    <button onClick={e => dispatch({type: 'number_add2'})} className="btn">
                        +2
                    </button>

                    <button onClick={e => dispatch({type: 'number_add7'})} className="btn">
                        *7
                    </button>

                    <button onClick={e => dispatch({type: 'div25'})} className="btn">
                        /25
                    </button>

                    <button onClick={e => dispatch({type: 'parse'})} className="btn">
                        Parse
                    </button>

                    <button onClick={e => dispatch({type: 'addN', num: 15})} className="btn">
                        AddN
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
