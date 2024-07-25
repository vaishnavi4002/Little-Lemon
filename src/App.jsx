// import { useState } from 'react'

import Navbar from "./components/Navbar";
import { Element } from "react-scroll"
import About from "./components/About";
import Footer from "./components/Footer";
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import HomePage from "./components/HomePage";
import BookingConfirmed from "./components/BookingConfirmed";
import Main from "./components/Main";
function App() {
 

  return (
    <>
       <div >
       <BrowserRouter>

        <Navbar />
        <Routes>        
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<Main />} />
          <Route path="/booking/confirmed" element={<BookingConfirmed />} />
        </Routes>
      
    </BrowserRouter>
      
    <Element name="about"><About/></Element>
      <Footer/>

      </div>

    </>
  )
}

export default App
