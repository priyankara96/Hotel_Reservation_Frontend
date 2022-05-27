import React, { Component } from 'react';
import axios from 'axios';


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    //retriving all entered information 
    axios.get("http://192.168.8.195:8280/taxi/getTaxi").then(res => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts
        });
        console.log(this.state.posts)
      }
    });
  }

  onDelete = (id) => {
    //implementation of method deletion by specific id
    axios.delete(`http://localhost:8000/taxi/delete/${id}`).then((res) => {
      alert("delete successfully");
      this.retrievePosts();
    })
  }

  //implementation of searching function, searching done by including uppercases and lowercases
  filterData(posts, searchKey) {
    const result = posts.filter((post) =>
      post.location.toLowerCase().includes(searchKey) ||
      post.destination.toLowerCase().includes(searchKey) ||
      post.vehicle.toLowerCase().includes(searchKey) ||
      post.passengers.toLowerCase().includes(searchKey)

    )
    this.setState({ posts: result })
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8000/taxi").then(res => {
      if (res.data.success) {

        this.filterData(res.data.existingPosts, searchKey)
      }
    });
  }
  render() {
    return (

      <div className="container">
        {/* <h> Order Form </h>
        <div className="col-lg-3 mt-2 mb-2">
          <input
            className="form-control"
            type="search"
            placeholder="search"
            namr="searchQuery"
            onChange={this.handleSearchArea}>

          </input>

        </div> */}
        <table class="table">
          <thead>
            <tr>
              {/* defining tabel headings */}
              <th scope="col">#ID</th>
              <th scope="col">Current Location </th>
              <th scope="col">Destination</th>
              <th scope="col">Type Of Vehicle</th>
              <th scope="col">No Of PAssengers</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              //auto incrementing id
              this.state.posts.map((posts, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <a href={`/post/${posts._id}`} style={{ textDecoration: 'none' }}>
                      {posts.location}
                    </a>
                  </td>
                  <td>{posts.destination}</td>
                  <td>{posts.vehicle}</td>
                  <td>{posts.passengers}</td>
                  <td>

                    {/* button for update */}
                    {/* <a className="btn btn-warning" href={`/edit/${posts._id}`}>
                      <i className="fas fa-edit"></i>&nbsp;Edit
                    </a> */}
                    &nbsp;
                    {/* button for deletion */}
                    <a className="btn btn-danger" href="#" onClick={() => this.onDelete(posts._id)}>
                      <i className="fas fa-edit"></i>&nbsp;Delete
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
          <br/>
          <br/>
          
          <button className="ntn btn-success"><a href="/taxi" style={{ textDecoration: 'none', color: 'white' }}>Request To Taxi</a></button>
        </table>

      </div>
    )
  }
}
export default Home;
