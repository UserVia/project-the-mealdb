import React from 'react'
import '../styles/Portada.css'
import { Link } from 'react-router-dom'
export const PortadaPage = () => {
    return (
        <>
            <div className="container-portada d-flex">
                <div className="container d-flex flex-column align-items-center justify-content-center">
                    <h1>Bienvenidos a la central</h1>
                    <Link to="home" class="btn-acceder">ACCEDER</Link>
                </div>
            </div>
        </>
    )
}
