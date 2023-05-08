import { Link } from "react-router-dom"

function Header(){
  return (
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <Link class="navbar-brand" to={'/'}>Vamos al Cine</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li class="nav-item"><Link class="nav-link active" aria-current="page" to={'/'}>Home</Link></li> */}
            <li class="nav-item"><Link class="nav-link active" aria-current="page"  to={'/listado'}>Listado</Link></li>
            {/* <li><Link to={Contacto}>Contacto</Link></li> */}
            <li class="nav-item"><Link class="nav-link active" aria-current="page" to={'/login'}>Ingresar</Link></li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Buscar película</button>
          </form>
        </div>
      </div>
    </nav>
  </header>
  )
}

export default Header