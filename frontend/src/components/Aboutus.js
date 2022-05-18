import React, { Component } from 'react';
import "./aboutus.css";
import "./styles1.css";

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
    <img src="https://thetoptenchefs.com/wp/wp-content/uploads/2016/03/Vikas-Khanna-225x300.jpg" alt="John" style={{width:"100%"}}/>
      <div class="container">
        <h2>Jane Doe</h2>
        <p class="title">CEO  Founder</p>
        <p>.</p>
        <p>jane@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="col-4">
    <div class="card">
   
      <div class="container">
        <h2>Mike Ross</h2>
        <p class="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
  
  <div class="col-4">
    <div class="card">
     
      <div class="container">
        <h2>John Doe</h2>
        <p class="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
    </div>
    )
  }
}
