import './App.css';
import React from 'react'
import {Routes , Route, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home';
import ExcerciseDetail from './pages/ExcerciseDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element ={<Home/>} />
        <Route path='/excercise/:id' element={<ExcerciseDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>    
    </>

      
      
  );
}

export default App;
