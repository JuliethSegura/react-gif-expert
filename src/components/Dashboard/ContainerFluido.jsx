import React from 'react'

const ContainerFluido = () => {
    return ( 
        <div class="container-fluid mt-3">
            <div class="row">
                <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                    <div class="position-sticky pt-3">
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">
                                    <span data-feather="home"></span>
                                    Inicio
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="descargarImg.html">
                                    <span data-feather="file"></span>
                                    Descargar recurso
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="Compartir-recur.html">
                                    <span data-feather="users"></span>
                                    Compartir recurso
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
     );
}
 
export default ContainerFluido;