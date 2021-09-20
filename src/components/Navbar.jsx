import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './UseContext'
const Navbar = () => {
    const { setIsAuth } = useContext(UserContext)
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">useReducer</Link>

                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        <Link class="nav-link" to="/auth/login">Login</Link>
                    </div>
                </div>
                <div class="d-flex">
                    <button 
                        class="btn btn-outline-success"
                        type="submit"
                        onClick={()=>setIsAuth(false)}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
