import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


function Listado(){
 
  const [movieList,setMovieList]=useState([])
  useEffect(()=>{
    const endPoint = 'http://api.themoviedb.org/3/discover/movie?api_key=c963b2c1865802b4fc57f70679b6a724&language=es-ES&trailer'
    axios
      .get(endPoint)
      .then(response=>{
        const apiData = response.data
        setMovieList(apiData.results)
      })
  },[setMovieList])
  
  console.log(movieList)
  
  
  return(
    <>
      <div className="row">
        {movieList.map((oneMovie, id)=>{
          return(
            <div className="col-4" key={id}>
              <div className="card">
                <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{oneMovie.title.substring(0,30)}...</h5>
                  <p className="card-text">{oneMovie.overview.substring(0,100)}...</p>
                  {/* <p className="card-text">Año: </p> */}
                  <Link to='/' className="btn btn-dark">Ver trailer</Link>
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