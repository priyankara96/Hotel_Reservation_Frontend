import React, { Component } from 'react';
import { Button } from "antd";
import Sidebar from '../../components/Sidebar/Sidebar';
import "./AdminDashboard.css"



export default class MainDashboard extends Component {

  render() {
    return (
    <div>
    <Sidebar />

    <div className="col-md-8 mt-4 mx-auto">
        <h1 className="text-center" >  User Management </h1> 
        <br/>

        <form onSubmit = { this.onSubmit } className="needs-validation" noValidate style={{backgroundColor: "#c0cdce"}}>
        <br/><br/>

     
        <div class="container">
        <div class="row hidden-md-up">
        {/* 01 */}
                <div class="col-md-4" >
                <div class="card text-center" style = {{backgroundColor:'#dddddd'}}>
                    <div class="card-block" ><br/>
                    <img  style={{height: 130, width: 180}} class="rounded-circle" src="https://www.traveller.com.au/content/dam/images/3/f/6/x/2/image.related.articleLeadwide.620x349.3f6pj.png/1410312779080.jpg" alt="Card image cap"/>
                    <h4 class="card-title"></h4>                
                    <Button class="btn btn btn-outline-light, hidden-md-up" ><a href="/Add_Traveller" style={{ textDecoration: 'none', color: 'Info' }}>
                        Add Travelle </a>
                    </Button>
                    </div>
                </div>
                </div>
        {/* 02 */}
                <div class="col-md-4" >
                <div class="card text-center" style = {{backgroundColor:'#e5e3e3'}}>
                    <div class="card-block" ><br/>
                    <img  style={{height: 130, width: 180}} class="rounded-circle" src="http://static.financialexpress.com/m-images/M_Id_448221_Meeting.jpg" alt="Card image cap"/>
                    <h4 class="card-title"></h4>                
                    <Button class="btn btn btn-outline-light, hidden-md-up" ><a href="/Add_User" style={{ textDecoration: 'none', color: 'Info' }}>
                        Add User </a>
                    </Button>
                    </div>
                </div>
                </div>
        {/* 03 */}
                <div class="col-md-4" >
                <div class="card text-center" style = {{backgroundColor:'#e5e3e3'}}>
                    <div class="card-block" ><br/>
                    <img  style={{height: 130, width: 180}} class="rounded-circle" src="https://milgrasp.com/img/sections/features/user_management2.jpg" alt="Card image cap"/>
                    <h4 class="card-title"></h4>                
                    <Button class="btn btn btn-outline-light, hidden-md-up" ><a href="/All_Data" style={{ textDecoration: 'none', color: 'Info' }}>
                        Details of all Users </a>
                    </Button>
                    </div>
                </div>
                </div>


        
        </div>
        </div>
        <br/> <br/>
        </form>

    </div>
    </div>
    )
  }
}