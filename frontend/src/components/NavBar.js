import React, { Component } from 'react';
import starr from '../images/starr.png'

class NavBar extends Component{
    render(){
      return(
      <nav className="navbar navbar-light" style = {{backgroundColor:'#707B7C', margin:"0"}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><h3>The Star Hotel </h3>&nbsp;
        <img src={starr} class="rounded-circle" alt="Cinque Terre" style={{width:'120px'}}></img></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/">About Us</a>
              <a className="nav-link" aria-current="page" href="/">Help</a>
                <a className="nav-link" aria-current="page" href="/">Contact Us</a>

            </li>
            
          
          </ul>
        </div>
      </div>
    </nav>
      )   
      
    }
  }
  export default NavBar;