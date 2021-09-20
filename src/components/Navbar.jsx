import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">useReducer</Link>
               
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        <Link class="nav-link" to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar