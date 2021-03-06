import React, { Component } from 'react'
import axios from 'axios';
import swal from "sweetalert";
import "./styles1.css";

export default class EditRooms extends Component {

  constructor(props) {
    super(props);
    this.state = {
      RoomType: "",
      Sleep: "",
      TodayPrice: "",
      Facilities:"",
      Other:"",
      Availability:""
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
    const id = this.props.match.params.id;

    const { RoomType, Sleep, TodayPrice, Facilities, Other, Availability } = this.state;

    const data = {
      RoomType: RoomType,
      Sleep: Sleep,
      TodayPrice: TodayPrice,
      Facilities: Facilities,
      Other: Other,
      Availability: Availability
    
};
console.log(data);

axios.put(`http://localhost:8000/rooms/update/${id}`,data).then((res) =>{
  if(res.data.success){
    // alert("Post updated Successfully")
    swal("Update Successful", "Update is recorded! ", "success");

    this.setState(
      {
        RoomType: "",
          Sleep: "",
          TodayPrice: "",
          Facilities:"",
          Other:"",
          Availability:""

      }
    );
  }
});
};
componentDidMount(){

  const id = this.props.match.params.id;

  axios.get(`http://localhost:8000/rooms/${id}`).then((res) =>{

    if(res.data.success){
      this.setState({
       
        RoomType:res.data.post.RoomType,
        Sleep:res.data.post.Sleep,
        TodayPrice:res.data.post.TodayPrice,
        Facilities:res.data.post.Facilities,
        Other:res.data.post.Other,
        Availability:res.data.post.Availability
       
      });

      console.log(this.state.post);
    }
  })

}

  render() {
    return (
    
      <div className="container">
        <div className='text-center'>
      <h1>Room Detail Edit Form </h1>
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
      <div className='card card1' style={{width:"600px"}}>

      <form className="row g-3 needs-validation " style={{paddingLeft:"15px", paddingRight:"15px", paddingTop:"15px"}}noValidate>

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
        <div className="form-group" style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>Availability:</label>
            <input type="text"
              className="form-control"
              name="Availability"
              placeholder="Availability"
              value={this.state.Availability}
              onChange={this.handleInputChange} />
          </div>

        <br />


        <br />


      </form>
      </div>
      </div>
      <div className='btnAlign'>
      <button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
         <i class="material-icons">check</i>
        &nbsp; Update
      </button>
      </div>

</div></div>
    </div>
    )
  }
}
