import React from 'react';
import './Components/style.css';
import Meal from './Components/Meal';

import Navbar from './Components/Navbar';
 import AboutUs from './Components/AboutUs';
 import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import {Route,Routes} from 'react-router';
function App() {
  return(
    <>
    <div className="App">
      <Navbar/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      

      <header className="App-header">
        <Routes>
          <Route path="/" Component={Meal}></Route>
          <Route path="/About" Component={AboutUs}></Route>
          <Route path="/Contact" Component={ContactUs}></Route>
        </Routes>
      </header>
      
    {/* </div>
    <div className="App2">
      <Meal/> */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* <br></br>
      <br></br>
      <br></br>
      <br></br> */}
      

    <div>
      <Footer/>
      </div>
    
    </div>
    </>
  )
  
}

export default App;