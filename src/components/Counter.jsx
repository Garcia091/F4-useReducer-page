import React, { useReducer } from 'react'
import { CounterReducer, initialState, init} from '../reducers/CounterReducer'
import {types} from '../types/types'

const Counter = () => {
    
   const [counter, dispatch] = useReducer(CounterReducer, initialState, init)

    return (
        <div>
            <div className="container mt-3">
            <h1>Counter: {counter} </h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={()=>{
                    dispatch({type: types.increment})
                }}
            >
                +1
            </button>
        </div>
        </div>
    )
}

export default Counter
