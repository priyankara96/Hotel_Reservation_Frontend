import React, { Component } from 'react';
import axios from 'axios';

class PostDetails extends Component{
  constructor(props){
    super(props);

    this.state={
      post:{}
    };
  }

  //retriew data of specific form based on recipe name
  componentDidMount(){
    const id =this.props.match.params.id;

    axios.get(`http://localhost:8000/taxi/update/${id}`).then((res)=>{
      if(res.data.success){
        this.setState({
          post:res.data.post
        });
        console.log(this.state.post);
      }
    });
  }
    render(){
      const {location,destination,vehicle, passengers,} = this.state.post;
      return(
        <div style={{marginTop:'20px'}}>
          <h1>{location}</h1>
          <hr/>
          <div className='container'>
          <dl className="row" style={{width:"100%"}}>
            <div class='col-6'>
            <dt className="col-sm-3">Destination</dt>
            <dd className="col-sm-9">{destination}</dd>
           
            <dt className="col-sm-3">Vehicle</dt>
            <dd className="col-sm-9">{vehicle}</dd>

             <dt className="col-sm-3">Passengers</dt>
            <dd className="col-sm-9">{passengers}</dd>
            </div>
            <div class='col-6'>
            <img src="https://i.pinimg.com/originals/57/07/26/570726f9398849aa200fbcba9466f9f2.gif" style={{width:"90%"}}/>
          </div>
          </dl>
        
          </div>
          
         
          
        
        

        
         
       
         </div>
        
        
      )
    }
  }
  export default PostDetails;
