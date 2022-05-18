import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert'

export default class CreatePost extends Component {

  //initializing using constructor to null values
  constructor(props){
    super(props);
    this.state={
      location:"",
      destination:"",
      vehicle:"",
      passengers:""
    }
  }

  handleInputChange = (e) =>{
    const {name,value} = e.target;

    this.setState({
      ...this.state,
      [name]:value
    })

  }

  onSubmit = (e) =>{

    e.preventDefault();

    const {location,destination,vehicle,passengers} = this.state;

    const data ={
      location:location,
      destination:destination,
      vehicle:vehicle,
      passengers:passengers
    }

    console.log(data)

    //validation for recipe name
    if(vehicle.length<2){
      swal("Enter valid  name", "error")
    }else{

      //save the entered data in db
    axios.post("http://localhost:8000/taxi/save",data).then((res) =>{
      if(res.data.success){
        this.setState(
          {
            location:"",
            destination:"",
            vehicle:"",
            passengers:""
          }
        )
        swal("Added successfully", "success");
      }
    })
  }

  }

  render() {
    return (

      

      //designing form to get user inputs
        <div className="col-md-8 mt-4 mx-auto">
          <h1 className="h3 mb-3 font-weight-normal">Add New </h1>
          <form className="needs-validation" noValidate>
            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}} >Current Location</label>
              <input type="text"
              className="form-control"
              name="location"
              placeholder="current location"
              value={this.state.location}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Destination</label>
              <input type="text"
              className="form-control"
              name="destination"
              placeholder="destination"
              value={this.state.destination}
              onChange={this.handleInputChange}/>
            </div>


            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Vehicle Type</label>
              <input type="text"
              className="form-control"
              name="vehicle"
              placeholder="type of vehicle"
              value={this.state.vehicle}
              onChange={this.handleInputChange}/>
            </div>

             <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Number Of Passsngers</label>
              <input type="text"
              className="form-control"
              name="passengers"
              placeholder="no of passengers"
              value={this.state.passengers}
              onChange={this.handleInputChange}/>
            </div>


          
            <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>
              &nbsp; Save
            </button>
          
          
          </form>
          <br>
          </br>
            <button className="ntn btn-success"><a href="/taxihome" style={{ textDecoration: 'none', color: 'white' }}>Taxi Ordered List</a></button>
          
        </div>
    )
  }
}