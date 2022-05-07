import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

// Chanduni
import createrooms from './components/createRooms';
import HomeRooms from './components/HomeRooms';
import EditRooms from './components/EditRooms';
import RoomDetails from './components/RoomDetails';
import ClientRoom from './components/ClientRoom';
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Route path='/rooms/add' exact component={createrooms}></Route>
      <Route path='/rooms' exact component={HomeRooms}></Route>
      <Route path='/rooms/edit/:id' exact component={EditRooms}></Route>
      <Route path="/rooms/post/:id" exact component={RoomDetails}></Route>
      <Route path="/" exact component={ClientRoom}></Route>
      </BrowserRouter>
  
    )
  }
}




