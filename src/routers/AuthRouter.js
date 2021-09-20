import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import Longin from '../components/Longin'


const AuthRouter = () => {
    return (
        <div className="container">
            <div>
            <Switch>
                <Route exact path="/auth/login"  component={Longin}/>
 
                <Redirect to="/auth/login" />
            </Switch>
            </div>  
        </div>
    )
}

export default AuthRouter
