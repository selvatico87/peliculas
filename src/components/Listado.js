import axios from "axios"
import { useEffect, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import swalert from '@sweetalert/with-react'


function Listado(){
  const token= sessionStorage.getItem('token')
  
  const [movieList,setMovieList]=useState([])

  useEffect(()=>{
    const endPoint = 'http://api.themoviedb.org/3/discover/movie?api_key=c963b2c1865802b4fc57f70679b6a724&language=es-ES'
    axios
      .get(endPoint)
      .then(response=>{
        const apiData = response.data
        setMovieList(apiData.results)

      })
      .catch(error => {
        swalert({
          title:"Ups!",
          text:"hubo un error en la base de datos. vuelve a intentar mas tarde", 
          icon:"info"})
        }
      )
  },[setMovieList])
  
  // console.log(movieList)
  
  
  return(
    <>
      {!token && <Navigate to='/login'/>}
      <div className="row">
        {movieList.map((oneMovie, id)=>{
          return(
            <div className="col-4" key={id}>
              <div className="card">
                <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{oneMovie.title.substring(0,30)}...</h5>
                  <p className="card-text">{oneMovie.overview.substring(0,80)}...</p>
                  {/* <p className="card-text">Año: </p> */}
                  <Link to={`/detalle?movieID=${oneMovie.id}`} className="btn btn-dark">Ver detalles</Link>
                </div>
              </div>
            </div>
          )
        })}
        
      </div>
    </>
 )
}

export default Listado