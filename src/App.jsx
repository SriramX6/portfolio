import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import {About , Contact , Experience , Feedbacks , Hero , Navbar, 
  Tech , Works , StarsCanvas} from './components';

function App() {


  return (
    <>
      <BrowserRouter>
      
        <div className='relative z-0 '>
          {/* <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center ' > */}
            <Navbar/>
            <div className='relative z-0' >
            <Contact />
            <StarsCanvas/>
          </div>

          <div className='relative z--1' >
            <Experience/>
            <StarsCanvas/>
            <Tech/>
          </div>

          <Works/>

          {/* <div className='relative z--1' >
            
            <StarsCanvas/>
          </div> */}

          
          
          {/* <About/>
         
         
          <Works/>
          <Feedbacks/> */}
         

        </div>

      </BrowserRouter>
     
    </>
  )
}

export default App
