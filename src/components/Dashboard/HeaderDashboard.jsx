import React from 'react'

const HeaderDashboard = () => {
    return (
        <header className="navbar navbar-dark sticky-top bg-success flex-md-nowrap py-2 shadow">
            <div className="text-center ms-4">
                <img className="img-fluid" src="../" width="115" height="115" alt="Logoredi" />
            </div>
            <div className="flex-shrink-0 dropdown ms-auto me-5 px-5">
                <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser2"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle" />
                </a>
                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                    <li><a className="dropdown-item" href="#">Usuario</a></li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li><a className="dropdown-item" href="User-Perfil.html">Perfil</a></li>
                    <li><a class="dropdown-item" href="descargarImg.html">Descargas</a></li>
                    <li><a class="dropdown-item" href="User-compartir.html">Recursos compartidos</a></li>
                    <li><a className="dropdown-item" href="User-Recursos.html">Mis recursos</a></li>
                    <li>
                        <hr className="dropdown-divider"/>
                    </li>
                    <li><a className="dropdown-item" href="../inicio.html">Cerrar </a></li>
                </ul>
            </div>
        </header>
    );
}

export default HeaderDashboard;