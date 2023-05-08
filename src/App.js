//library
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom'

//Components
import Login from "./components/Login";
import Listado from './components/Listado';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

//Styles
import './css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <Header/>
      <Routes className='container mt-3'>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/listado' element={<Listado/>}/>
      </Routes>
      <Footer/> 
    </Router>
  );
}

export default App;
