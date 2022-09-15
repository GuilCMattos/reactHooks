import React from 'react'
import { useReducer } from 'react';
import PageTitle from '../../components/layout/PageTitle'

import {initialState, reducer} from '../../store'
import {login, numberAdd2, numberAddN, numberDiv25, numberMulti7, parse} from '../../store/actions'

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
                   <button onClick={e => login(dispatch, 'Guilherme')} className="btn">
                    Login
                   </button>
                    <button onClick={e => numberAdd2(dispatch)} className="btn">
                        +2
                    </button>

                    <button onClick={e => numberMulti7(dispatch)} className="btn">
                        *7
                    </button>

                    <button onClick={e => numberDiv25(dispatch)} className="btn">
                        /25
                    </button>

                    <button onClick={e => parse(dispatch)} className="btn">
                        Parse
                    </button>

                    <button onClick={e => numberAddN(dispatch, 20)} className="btn">
                        +20
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
