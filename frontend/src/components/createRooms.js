import React, { Component } from 'react';
import axios from 'axios';
import swal from "sweetalert";
import './styles.css';

export default class createrooms extends Component {
    constructor(props) {
        super(props);
        this.state = {
          RoomType: "",
          Sleep: "",
          TodayPrice: "",
          Facilities:"",
          Other:""
        }
      }

      handleInputChange = (e) => {
        const { name, value } = e.target;
    
        this.setState({
          ...this.state,
          [name]: value,
        })
      }

      onSubmit = (e) => {
        e.preventDefault();
    
        const { RoomType, Sleep, TodayPrice, Facilities, Other } = this.state;
    
        const data = {
          RoomType: RoomType,
          Sleep: Sleep,
          TodayPrice: TodayPrice,
          Facilities: Facilities,
          Other: Other
        
    }
console.log(data);

axios.post("http://localhost:8000/rooms/save", data).then((res) => {
    if (res.data.success) {
      this.setState(
        {
          RoomType: "",
          Sleep: "",
          TodayPrice: "",
          Facilities: "",
          Other: "",
        }
      )
    }
  })


}

render() {
    return (
      <>

        <div className="container">

        <h1 className="text-centre">Room Detail Form </h1>

<div className='card1 card' style={{width:"600px"}}>

        <form className="row g-3 needs-validation" noValidate>
        <div class="card-body">


        <div className="form-group" style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>Room Type: </label>
            <input type="text"
              className="form-control"
              name="RoomType"
              placeholder="RoomType"
              value={this.state.RoomType}
              onChange={this.handleInputChange} />
          </div>

          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }} >Sleep: </label>
            <input type="number"
              className="form-control"
              name="Sleep"
              placeholder="Enter Sleep "
              value={this.state.Sleep}
              onChange={this.handleInputChange} />
          </div>

          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }} >Today's Price: </label>
            <input type="text"
              className="form-control"
              name="TodayPrice"
              placeholder="Enter Today's Price"
              value={this.state.TodayPrice}
              onChange={this.handleInputChange} />
          </div>


          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>Facilities: </label>
            <input type="text"
              className="form-control"
              name="Facilities"
              placeholder="Facilities"
              value={this.state.Facilities}
              onChange={this.handleInputChange} />
          </div>

          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>Other:</label>
            <input type="text"
              className="form-control"
              name="Other"
              placeholder="Other"
              value={this.state.Other}
              onChange={this.handleInputChange} />
          </div>


          <br />


          <br />
</div>

        </form>
       
        </div>
        
<div className='btnAlign'>
        <button className="btn btn-success " type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
        <i class="material-icons">check</i>
          &nbsp; Submit
        </button>
        </div>
      </div>
      </>
    )
  }
         
    
      }