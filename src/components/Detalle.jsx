import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom"

function Detalle(){
  let token = sessionStorage.getItem('token')
  
  let query = new URLSearchParams(window.location.search);
  let movieID = query.get('movieID');

  const [movie,setMovie]=useState(null); 
  
  useEffect(()=>{
    const endPoint = `http://api.themoviedb.org/3/movie/${movieID}?api_key=c963b2c1865802b4fc57f70679b6a724&language=es-ES`;
    axios.get(endPoint).then( response=>{
      const movieData = response.data;
      setMovie(movieData);
    })
    .catch(error=>{
      console.log(' hay un error')
    })
  },[movieID])
  
  

  return(
    <>
      {!token && <Navigate to='/login'/>}
      {!movie && <p>Cargando...</p>}
      {movie && (
        <div className="row" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})` }}>
        <h2>{movie.title} </h2>
        <div className="col-4"><img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="w-75" alt="Poster"/></div>
        <div className="col-8">
          
          <h3>Sinopsis:</h3><p>{movie.overview}</p>
          <h3>Generos:</h3>
            <ul>
              <li>{movie.production_companies.name}</li>
              <li></li>
            </ul>
          <h3>Otros datos</h3>
          <ul>
            <li><h3>Compañia Productora: </h3><img src="#" alt='Logo compañia productora'/><p></p></li>
            <li><h3>Fecha de estreno:</h3><p>fecha</p></li>
          </ul>
        </div>
      </div>
      )
      }
      
      
        <Link to='/listado' className="btn btn-dark col-4">Volver al listado</Link>
    </>
  )
}
 export default Detalle