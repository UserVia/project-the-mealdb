import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <><nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" href="#">Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" to="">Home</Link>
                        <Link className="nav-link" href="#">Features</Link>
                    </div>
                </div>
            </div>
        </nav>

        </>
    )
}
