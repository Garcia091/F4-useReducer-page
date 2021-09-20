import React from 'react'
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Counter from '../components/Counter';
import Longin from '../components/Longin';
import Navbar from '../components/Navbar';

const AppRouter = () => {
    return (
        <Router>
            <Navbar />
           <Switch>
            <Route exact path="/" component={Counter}/>
            <Route path="/login" component={Longin}/>
           </Switch>
        </Router>
    )
}

export default AppRouter
