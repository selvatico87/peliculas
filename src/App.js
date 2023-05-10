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
import Detalle from './components/Detalle';

function App() {
  return (
    <Router>
      <Header/>
      <div className='container mt-3'>
        <Routes >
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/listado' element={<Listado/>}/>
          <Route path='/detalle' element={<Detalle/>}/>
        </Routes>
      </div>
      <Footer/> 
    </Router>
  );
}

export default App;
