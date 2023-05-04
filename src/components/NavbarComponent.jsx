import React from 'react'

export default function NavbarComponent() {
  return (
    <div className='fixed-top'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">Navbar</a>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-white" href="#">Product</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-white" href="#">ProductList</a>
                        </li>
                    </ul>
                </div>
             </div>
        </nav>
    </div>
  )
}
