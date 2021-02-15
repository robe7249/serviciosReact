import React from 'react'
import NavBar from './NavBar.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import Banner from './Banner.js'
import Main from './Main.js'
import SignIn from './SignIn.js'
import SignUp from './SignUp.js'
import Employ from './Employ.js'
import Home from './Home.js'
import Footer from './Footer.js'

import { BrowserRouter, Route } from "react-router-dom";



export default function App() {


  return (
    <div className="App">

      <BrowserRouter>

        <NavBar />

        <div className="container">
          <Route exact path="/home" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/employ" component={Employ} />
        </div>
      </BrowserRouter>

    </div>
  );
}


