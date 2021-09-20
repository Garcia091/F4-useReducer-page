import React, { useReducer } from 'react'
import { authReducer, initialState } from '../reducers/authReducer'
import {login,logout} from '../actions/authAction'

const Longin = () => {

    const [state, dispatch] = useReducer(authReducer, initialState)

    console.log(state)
    return (
        <div>
            <h1>Login</h1>
            <hr />
            <p>
            {state.name}
            {state.uid}
            </p>
            <button 
                className="btn btn-primary" 
                onClick={()=>dispatch(login('12345','Silvia Garcia'))}
            >
                Login
            </button>
            <button 
                className="btn btn-danger" 
                onClick={()=>dispatch(logout())}
            >
                Logout
            </button>
        </div>
    )
}

export default Longin
