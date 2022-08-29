import React from 'react'

const Search = () => {
    return ( 
        
      <div className="container-fluid d-grid gap-3 justify-content-between grillarriba" >
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-3">
          <div className="dropdown ms-auto">
            <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser2"
              data-bs-toggle="dropdown" aria-expanded="false">
              <label class="mt-2" for="action">Recursos</label>
            </a>
            <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownNavLink">
              <li><a className="dropdown-item" href="#" aria-current="page">Videos</a></li>
              <li><a className="dropdown-item" href="#" aria-current="page">Sonidos</a></li>
              <li><a className="dropdown-item" href="#" aria-current="page">Imagenes</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="#">Todo</a></li>
            </ul>
          </div>
          <div className="d-flex align-items-center">
            <form className="w-50 me-3">
              <input type="search" className="form-control" placeholder="Buscar" aria-label="Buscar" />
            </form>
            <div className="col-md-3 text-start">
              <button type="button" className="btn btn-primary">Buscar</button>
            </div>
          </div>
        </main >
      </div>

     );
}
 
export default Search;