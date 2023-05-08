import { useEffect } from "react"
import { Link } from "react-router-dom"


function Listado(){
  
  const  token = localStorage.getItem('token')
  
  useEffect(()=>{
    if (token===null){
      <Link to={`/login`}/>
    }
  },[token])

  
  return(
  <div className="rom">
    <div className="col-4">Pelicula 1</div>
    <div className="col-4">Pelicula 2</div>
    <div className="col-4">Pelicula 3</div>
    <div className="col-4">Pelicula 4</div>

    <div class="card" style={{width: '18rem'}}>
      <img src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href='/' class="btn btn-primary">Ver trailer</a>
    </div>
</div>

  </div>
 )
}

export default Listado