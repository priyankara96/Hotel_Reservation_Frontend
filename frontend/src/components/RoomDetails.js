import React, { Component } from 'react';
import axios from 'axios';
import "./styles1.css";

export default class RoomDetails extends Component {
  constructor(props){
    super(props);

    this.state={
      post:{}
    };
  }
  componentDidMount(){
    const id =this.props.match.params.id;

    axios.get(`http://localhost:8000/rooms/${id}`).then((res)=>{
      if(res.data.success){
        this.setState({
          post:res.data.post
        });
        console.log(this.state.post);
      }
    });
  }
  render() {
      const {RoomType,Sleep,TodayPrice,Facilities,Other, Availability} = this.state.post;
      return(
        <div className='text-center'>
             <button  className="btn btn-success btnback2">
          <i class="material-icons">navigate_before</i>
          <a href="/client"style={{ textDecoration: 'none', color: 'white' }}>
              Back
              </a></button>
          <h1 >{RoomType}</h1>
       
          
          <hr/>
         
          <dl className="row">
            <dt className="col-sm-3">Sleep</dt>
            <dd className="col-sm-9">{Sleep}</dd>
            <dt className="col-sm-3">Today's Price</dt>
            <dd className="col-sm-9">{TodayPrice}</dd>
            <dt className="col-sm-3">Facilities</dt>
            <dd className="col-sm-9">{Facilities}</dd>
            <dt className="col-sm-3">Other</dt>
            <dd className="col-sm-9">{Other}</dd>
            <dt className="col-sm-3">Availability</dt>
            <dd className="col-sm-9">{Availability}</dd>
            
          </dl>
          <img src='https://www.freeiconspng.com/thumbs/hotel-png/hotel-png-4.png'/>
        </div>
    )
  }
}
