import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

// Chanduni
import createrooms from './components/createRooms';
import HomeRooms from './components/HomeRooms';
import EditRooms from './components/EditRooms';
import RoomDetails from './components/RoomDetails';
import ClientRoom from './components/ClientRoom';

//Nipuna
import Homes from './components/Homes';
import NavBar from './components/NavBar';
import Card from './components/Card';
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <NavBar/>
       <div style = {{backgroundColor:'#D0D3D4', margin:"0"}}>


     

      <Route path='/rooms/add' exact component={createrooms}></Route>
      <Route path='/rooms' exact component={HomeRooms}></Route>
      <Route path='/rooms/edit/:id' exact component={EditRooms}></Route>
      <Route path="/rooms/post/:id" exact component={RoomDetails}></Route>
      <Route path="/" exact component={ClientRoom}></Route>
      
       {/* Nipuna */}
       <Route path="/Homes" exact component={Homes}></Route>
       <div className='App'>
         <Card
         title='Card Title'
         imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyimVbEex6oC94o7xwRyNAuV_V_BCz-6vsMVOLIUcD6gb6IdBJFR2LaC-au_XOOWeuH3U&usqp=CAU'
         body='dededwded'

         />
      </div>
      <div style={{paddingTop:'100px',width:'100%'}}>
       <Footer></Footer>
      </div>
      </div>
      </BrowserRouter>
  
    )
  }
}




