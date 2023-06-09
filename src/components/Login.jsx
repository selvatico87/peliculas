/* eslint-disable no-useless-escape */
import axios from 'axios';
import swalert from '@sweetalert/with-react'
import { Link, Navigate } from 'react-router-dom'
import Listado from './Listado';
import { useState } from 'react';

function Login(){

  const submitHandler= e =>{
    e.preventDefault();
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const email= e.target.email.value;
    const password= e.target.password.value;

    if(email===""||password===""){
      swalert({title:"Faltan Datos",text:"por favor complete los campos",
      icon:"error"})
      return;
    }
    if(email !== "" && !regexEmail.test(email)){
      swalert({title:"Formato de email inválido",text:"ejemplo@email.com",
      icon:"error"})
      return;
    }
    if(email!=="challenge@alkemy.org"||password!=="react"){
      swalert({title:"Credenciales inválidas",text:"email o contraseña incorrectos",
      icon:"error"})
      return
    }
    if(email==="challenge@alkemy.org"&&password==="react"){
    sessionStorage.setItem('user', email);
    
    }
    axios
       .post('http://challenge-react.alkemy.org',{email,password})
       .then(res=>{
        swalert({title:"Bien",text:"Allá vamos",icon:"success"})
        const token = res.data.token;
        sessionStorage.setItem('token', token);   
        <Navigate to={'/listado'}/>
       })
       .catch(<Navigate to={'/404'}/>)
  }

        const token= sessionStorage.getItem('token')
        
       

 return(
  <>
    {!token ? <Navigate to='/login'/>:<Navigate to='/listado'/>}
    
    <h2>Formulario de Ingreso</h2>
    <form onSubmit={submitHandler} >
      <label>
        <span>Correo electrónico</span><br/>
        <input type="text" name="email"/>
      </label>
      <br></br>
      <label>
        <span>Contraseña</span><br/>
        <input type="password" name="password"/>
      </label>
      <br></br>
      <button type="submit" className="btn btn-dark">Ingresar</button>
    </form>
    
  </>
 )
}

export default Login