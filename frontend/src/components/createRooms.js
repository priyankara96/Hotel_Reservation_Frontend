import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert";
import "./styles1.css";
import { margin } from "@mui/system";

export default class createrooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      RoomType: "",
      Sleep: "",
      TodayPrice: "",
      Facilities: "",
      Other: "",
      Availability: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { RoomType, Sleep, TodayPrice, Facilities, Other, Availability } =
      this.state;

    const data = {
      RoomType: RoomType,
      Sleep: Sleep,
      TodayPrice: TodayPrice,
      Facilities: Facilities,
      Other: Other,
      Availability: Availability,
    };
    console.log(data);

    if (RoomType == "" || Sleep == "" || TodayPrice == "" || Facilities == "" || Other == "" || Availability == "") {
      swal("Please fill the form correctly", "Form values cannot be empty", "error");
    }else{

    axios.post("http://localhost:8000/rooms/save", data).then((res) => {
      if (res.data.success) {
        this.setState({
          RoomType: "",
          Sleep: "",
          TodayPrice: "",
          Facilities: "",
          Other: "",
          Availability: "",
        });
        swal(
          "Added Successfully",
            "Room Details added successfully",
            "success",
        );
      }
    });
  }
  };
  demo =() => { 

    //setState
    this.setState ({
      RoomType :"Delux Kings Room"
    })
    this.setState ({
      Sleep:"4"
    })
  
    this.setState ({
      TodayPrice:"LKS:1200000"
    }) 
  
    this.setState ({
      Facilities:"Wi-fi, Pool view"
    })
    this.setState({
      Other:"No prepayment needed"
    }) 
    this.setState({
      Availability:"Available"
    }) 
  
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="text-center">
            <h2>Room Detail Form </h2>
          </div>
          <button  className="btn btn-success btnback">
          <i class="material-icons">navigate_before</i>
          <a href="/rooms"style={{ textDecoration: 'none', color: 'white' }}>
              Back
              </a></button>
              <div className="row">
                <div className="col-3">
              <img src= 'https://www.pngall.com/wp-content/uploads/5/Hotel-Transparent.png' style={{width:'600px'}}/>
              </div>
              <div className="col-9">
          <div className="align">

          <div className="card1 card" style={{ width: "600px" }} >
            <form className="row g-3 needs-validation form1" noValidate>
              <div class="card-body">
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>Room Type: </label>
                  <input
                    type="text"
                    className="form-control"
                    name="RoomType"
                    placeholder="RoomType"
                    value={this.state.RoomType}
                    onChange={this.handleInputChange}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>Sleep: </label>
                  <input
                    type="number"
                    className="form-control"
                    name="Sleep"
                    placeholder="Enter Sleep "
                    value={this.state.Sleep}
                    onChange={this.handleInputChange}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>Today's Price: </label>
                  <input
                    type="text"
                    className="form-control"
                    name="TodayPrice"
                    placeholder="Enter Today's Price"
                    value={this.state.TodayPrice}
                    onChange={this.handleInputChange}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>Facilities: </label>
                  <input
                    type="text"
                    className="form-control"
                    name="Facilities"
                    placeholder="Facilities"
                    value={this.state.Facilities}
                    onChange={this.handleInputChange}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>Other:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="Other"
                    placeholder="Other"
                    value={this.state.Other}
                    onChange={this.handleInputChange}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>Availability:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="Availability"
                    placeholder="Status"
                    value={this.state.Availability}
                    onChange={this.handleInputChange}
                  />
                </div>

                <br />

                <br />
              </div>
            </form>
          </div>
          </div>

          <div className="btnAlign">
            <button
              className="btn btn-success "
              type="submit"
              style={{ marginTop: "15px" }}
              onClick={this.onSubmit}
            >
              <i class="material-icons">check</i>
              &nbsp; Submit
            </button>
          
         
        </div>
        <div className="btnAlign">
          <br/>
        <button type="button" className="btn btn-outline-dark btn-sm btnAlign" onClick={this.demo} > Demo </button></div></div>
        <br/>
        <br/>
        </div>
        </div>
      </>
    );
  }
}
