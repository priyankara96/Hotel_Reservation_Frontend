import React, { Component } from 'react';
import room from '../images/room.jpg';
import './styless.css'
import img1 from '../images/img1.jpg';
import img4 from '../images/img4.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img6 from '../images/img6.jpg'
import img7 from '../images/img7.jpg'
import img8 from '../images/img8.jpg'
import img9 from '../images/img9.jpg';
import Card from './Card';


export default class Homes extends Component {
  render() {
    return (
       <div>
 
  <img src='https://i.gifer.com/4Edl.gif' style={{width:'100%',height:"600px"}}/>
  <div class="content">
    <h1>"Our Guests enjoy the best of everything"</h1>
    <p>The finest star class hotel in Sri Lanka with the best of dinning, accommodation and entertainment facilities. This 450 roomed beauty is located facing the foaming ripples of the Indian Ocean and remains to be one of the best hotels in Sri Lanka. Step-in to be lost in unearthly cuisines, cosy hideouts, heavenly surrounding and the best of services, which other hotels in Sri Lanka could not offer. Galadari Hotel Sri Lanka; one of the finest hotels in Sri Lanka is not only the best place to relax, eat and indulge, but is also the finest place to celebrate. Come! Delight & breathe the air of luxury at the heart of Colombo.</p>
  

      </div>
      <div className='App'>
         <Card
         title='Card Title'
         imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyimVbEex6oC94o7xwRyNAuV_V_BCz-6vsMVOLIUcD6gb6IdBJFR2LaC-au_XOOWeuH3U&usqp=CAU'
         body='Relax and enjoy your stay in luxury and modernity'

         />
          <div style={{paddingTop:'100px',width:'100%'}}></div>
 

</div>




 

               
</div>

    )
    }
}