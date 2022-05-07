import React, { Component } from 'react';
import axios from 'axios';



export default class HomeRooms extends Component {
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
      <div className="container">
        <h> Hotel Rooms Details </h>
        <div className="col-lg-3 mt-2 mb-2">
          <input
          className="form-control"
          type="search"
          placeholder="search"
          name="searchQuery"
          onChange={this.handleSearchArea}>
 
          </input>

        </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Type Number</th>
            <th scope="col">Room Type</th>
            <th scope="col">Sleep</th>
            <th scope="col">Today's Price</th>
            <th scope="col">Facilities</th>
            <th scope="col">Other</th>
            <th scope="col">Action</th>
            
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

                <td>
                  <a className="btn btn-warning" href={`rooms/edit/${posts._id}`}>
                     <i class="material-icons">edit</i>Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(posts._id)}>
                    <i className="material-icons">delete_forever</i>Delete
                  </a>
                </td>
              </tr>
            )) }
        </tbody>
        <br/>

        <button className="btn btn-success"><a href="/rooms/add" style={{textDecoration:'none',color:'white'}}>Add new Room</a></button>
      </table>

     
      </div>
      
    )
  }
}
