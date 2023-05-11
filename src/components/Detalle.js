import { Link, Navigate } from "react-router-dom"

function Detalle(){
  
  const token = sessionStorage.getItem('token')
  
  return(
    <>
      {!token && <Navigate to='/login'/>}

      <Link to='/listado' className="btn btn-dark">Volver al listado</Link>
      Detalle
    </>
  )
}
 export default Detalle