export function numberAdd2(dispatch) { 
    dispatch({type:'number_add2'})
}

export function numberMulti7(dispatch) { 
    dispatch({type: 'number_add7'})
}

export function numberDiv25(dispatch) { 
    dispatch({type: 'div25'})
}

export function parse(dispatch) { 
    dispatch({type: 'parse'})
}

export function numberAddN(dispatch, number) { 
    dispatch({type: 'addN', num: number})
}

