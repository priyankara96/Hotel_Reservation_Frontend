import React, { Component } from 'react';
import axios from 'axios';
import "./styles1.css";
import { padding } from '@mui/system';

export default class ClientRoom extends Component {
    constructor(props){
        super(props);
      
        this.state={
          posts:[]
        };
      }
      componentDidMount(){
        this.retrievePosts();
      }
      retrievePosts(){
        axios.get("http://localhost:8000/rooms").then(res =>{
          if(res.data.success){
            this.setState({
              posts:res.data.existingPosts
            });
            console.log(this.state.posts)
          }
        });
      }
      onDelete=(id)=>{
        axios.delete(`http://localhost:8000/rooms/delete/${id}`).then((res)=>{
          alert("delete successfully");
          this.retrievePosts();
        })
      }
      filterData(posts,searchKey){
        const result =posts.filter((post)=>
        post.RoomType.toLowerCase().includes(searchKey)||
        post.Facilities.toLowerCase().includes(searchKey)
       
        
        )
        this.setState({posts:result})
      }
      
      handleSearchArea =(e) =>{
        const searchKey=e.currentTarget.value;
      
        axios.get("http://localhost:8000/rooms").then(res =>{
          if(res.data.success){
      
            this.filterData(res.data.existingPosts,searchKey)
          }
        });
      }
    
      render() {
        return (
          <div style={{width: "100%", height: "100%"}}>
            <div className='text-center header'>
            <h2> Hotel Rooms Details </h2>
            
            </div>
            <div className='row'>
              <div className='col-7'>
                <br/>
                <div className='container'>
                <img className='img1' src='https://assets.vogue.com/photos/61c0a52bd7570f67d6d9c0ba/master/w_2560%2Cc_limit/00-story.gif'/>
                </div>
              </div>
              <div className='col-5'>
                <div className='box'>
                  <h3>Most Popular facilities</h3>
                  <i class="material-icons">ac_unit</i> &nbsp; Air condition  &nbsp;
                  <i class="material-icons">beach_access</i>  &nbsp; Sea View <br/>
                  <i class="material-icons">edit_location</i>  &nbsp; Ideal Location &nbsp;
                  <i class="material-icons">network_wifi</i>  &nbsp; Free Wifi
                  <br/>
                  <i class="material-icons">free_breakfast</i>  &nbsp; Fabulous Breakfast  &nbsp;
                  <i class="material-icons">group</i> &nbsp; Luxury Rooms <br/>
                  <i class="material-icons">hotel</i>  &nbsp; 5 Star Hotel  &nbsp;
                  <i class="material-icons">local_dining</i>  &nbsp; Tasty Foods <br/>

                  <br/>
                 
                  <h3>Extra Health and Safety</h3>
                  <p>This property has taken extra health and hygine measures to ensure your safelty</p>
                  <h3>Why the Star hotel</h3>
                  Manage your bookings online <br/>
                  Prices you can't beat!<br/>
                  Great location and facilities for couples <br/>
                  Booking is safe
                </div>
              
              </div>
            </div>
            <br/>
        
            <div className="col-lg-3 mt-2 mb-2">
             
    
            </div>
            <div className='container'>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Type Number</th>
                <th scope="col">Room Type</th>
                <th scope="col">Sleep</th>
                <th scope="col">Today's Price</th>
                <th scope="col">Facilities</th>
                <th scope="col">Other</th>
                <th scope="col">Availability</th>
             
                
              </tr>
            </thead>
            <tbody>
              {
                this.state.posts.map((posts,index)=>(
                  <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>
                      <a href={`/rooms/post/${posts._id}`} style={{textDecoration:'none'}}>
                      {posts.RoomType}
                      </a>
                      </td>
                    <td>{posts.Sleep}</td>
                    <td>{posts.TodayPrice}</td>
                    <td>{posts.Facilities}</td>
                    <td>{posts.Other}</td>
                    <td>{posts.Availability}</td>
    
                    
                  </tr>
                )) }
            </tbody>
            <br/>


 <button className="btn btn-success"><a href="/Availability" style={{textDecoration:'none',color:'white'}}>Reserve Now</a></button>


         
          </table>
          <div className='center'>
          <button className="btn btn-success "><a href='' style={{color:'white'}}>Check Availability</a></button>
          </div>
          </div>
          
          </div>
          
        )
      }
}
