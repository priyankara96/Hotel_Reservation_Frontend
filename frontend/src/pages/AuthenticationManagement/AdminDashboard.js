import React, { Component } from 'react';
import { Button } from "antd";
import Sidebar from '../../components/Sidebar/Sidebar';
import "./AdminDashboard.css"



export default class MainDashboard extends Component {

  render() {
    return (
      <div style={{ backgroundImage: 'url("https://i5.walmartimages.com/asr/bad42561-78b0-4554-9aeb-f7bb5ce08905_1.6f69634b642562a7fc785d666eeacb70.jpeg")', backgroundSize: 'cover'}}>
      <Sidebar />

    <div className='page'>
    <div><br/>
    <h1 className="text-center">You are Welcome</h1>

<div class="py-3">
    <div class="container">
      <div class="row hidden-md-up">
{/* 01 */}
<div class="col-md-3" >
           <div class="card text-center" style = {{backgroundColor:'#dddddd'}}>
             <div class="card-block" ><br/>
             <img  style={{height: 130, width: 180}} class="rounded-circle" src="http://st2.depositphotos.com/3591429/7168/i/450/depositphotos_71683555-Register-Membership-Application-Registration-Join-Office-Browsin.jpg" alt="Card image cap"/>
               <h4 class="card-title"></h4>                
               <Button class="btn btn btn-outline-light, hidden-md-up" ><a href="/UserManagement" style={{ textDecoration: 'none', color: 'Info' }}>
                   User Management </a>
               </Button>
             </div>
           </div>
         </div>
{/* 02 */}
          <div class="col-md-3" >
           <div class="card text-center" style = {{backgroundColor:'#e5e3e3'}}>
             <div class="card-block" ><br/>
             <img  style={{height: 130, width: 180}} class="rounded-circle" src="https://t4.ftcdn.net/jpg/01/27/43/89/360_F_127438985_7Ch9IEDTCfiWmnGtWYJXSKFPjtajVgNT.jpg" alt="Card image cap"/>
               <h4 class="card-title"></h4>                
               <Button class="btn btn btn-outline-light, hidden-md-up" ><a href="/rooms" style={{ textDecoration: 'none', color: 'Info' }}>
                   Room Management </a>
               </Button>
             </div>
           </div>
         </div>
{/* 03 */}
<div class="col-md-3" >
           <div class="card text-center" style = {{backgroundColor:'#e5e3e3'}}>
             <div class="card-block" ><br/>
             <img  style={{height: 130, width: 180}} class="rounded-circle" src="https://milgrasp.com/img/sections/features/user_management2.jpg" alt="Card image cap"/>
               <h4 class="card-title"></h4>                
               <Button class="btn btn btn-outline-light, hidden-md-up" ><a href="/mail" style={{ textDecoration: 'none', color: 'Info' }}>
                   Customer Care </a>
               </Button>
             </div>
           </div>
         </div>
{/* 04 */}
          <div class="col-md-3" >
           <div class="card text-center" style = {{backgroundColor:'#e5e3e3'}}>
             <div class="card-block" ><br/>
             <img  style={{height: 130, width: 180}} class="rounded-circle" src="https://milgrasp.com/img/sections/features/user_management2.jpg" alt="Card image cap"/>
               <h4 class="card-title"></h4>                
               <Button class="btn btn btn-outline-light, hidden-md-up" ><a href="/Management" style={{ textDecoration: 'none', color: 'Info' }}>
                   Name 4 </a>
               </Button>
             </div>
           </div>
         </div>

      </div><br/>
{/* 05 */}
        <div class="row">
        <div class="col-md-3" >
           <div class="card text-center" style = {{backgroundColor:'#e5e3e3'}}>
             <div class="card-block" ><br/>
             <img  style={{height: 130, width: 180}} class="rounded-circle" src="https://milgrasp.com/img/sections/features/user_management2.jpg" alt="Card image cap"/>
               <h4 class="card-title"></h4>                
               <Button class="btn btn btn-outline-light, hidden-md-up" ><a href="/Litigation" style={{ textDecoration: 'none', color: 'Info' }}>
                   Name 5 </a>
               </Button>
             </div>
           </div>
        </div>
{/* 06 */}
        <div class="col-md-3" >
           <div class="card text-center" style = {{backgroundColor:'#e5e3e3'}}>
             <div class="card-block" ><br/>
             <img  style={{height: 130, width: 180}} class="rounded-circle" src="https://milgrasp.com/img/sections/features/user_management2.jpg" alt="Card image cap"/>
               <h4 class="card-title"></h4>                
               <Button class="btn btn btn-outline-light, hidden-md-up" ><a href="/Litigation" style={{ textDecoration: 'none', color: 'Info' }}>
                   Name 6 </a>
               </Button>
             </div>
           </div>
         </div>


        </div><br></br>

    </div>
  </div>







    </div>
      
    

    </div>
    </div>
    )


    
  }
}