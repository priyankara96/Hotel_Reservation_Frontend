import React, { Component } from 'react';
import "./aboutus.css";
import "./styles1.css";
import chef from '../images/chef.png';
import hr from '../images/hr.png';
import md from '../images/md.png'

export default class Aboutus extends Component {
  render() {
    return (
      <div>
       <div class="about-section">
  <h1 className='header'>About Us</h1>
  <h2>Star Hotel- Since 2000</h2>
  <p>A Fascinating Hotel located in the heart of Colombo - Sri Lanka.

Whether it is for business or pleasure, make your visit truly exceptional and memorable by staying at Hotel Marino Beach that offers an experience with a blend of luxury and modernity that you wish would last forever. It boasts of 300 spacious and luxurious rooms, designed with true urban elegance.</p>
  <i class='fas fa-map-marker-alt map' style={{color:'red'}}></i> &nbsp;<h4><a href='/MapLocation' style={{ textDecoration: 'none', color: 'black' }}>Location</a></h4> 

</div>
<div className='text-center'>
<h2>Our Team</h2>
</div>
<div class="row">
  <div class="col-4">
    <div class="card">
    <img src={md} alt="John" style={{width:'50%'}}/>
      <div class="container">
        <h2>Jane Doe</h2>
        <p class="title">CEO  Founder</p>
        <p></p>
        <p>jane@starhotel.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="col-4">
    <div class="card">
    <img src={hr} alt="John" style={{width:'50%'}}/>
      <div class="container">
        <h2>Mike Ross</h2>
        <p class="title">HR Management</p>
        <p></p>
        <p>mike@starhotel.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
  
  <div class="col-4">
    <div class="card">
    <img src={chef} alt="John" style={{width:'50%'}}/>
      <div class="container">
        <h2>John Doe</h2>
        <p class="title">Kitchen Management</p>
        <p></p>
        <p>john@starhotel.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
    </div>
    )
  }
}
