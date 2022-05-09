import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { RequestContextProvider } from "./services/RequestContext";
import { UserContextProvider } from "./services/UserContext";

// Chanduni
import createrooms from "./components/createRooms";
import HomeRooms from "./components/HomeRooms";
import EditRooms from "./components/EditRooms";
import RoomDetails from "./components/RoomDetails";
import ClientRoom from "./components/ClientRoom";
import emailer from './components/mailer'

//Nipuna
import Homes from "./components/Homes";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import Footer from "./components/Footer";

//login
import SignupAdmin from "./pages/AuthenticationManagement/SignupAdmin";
import SignupTraveller from "./pages/AuthenticationManagement/SignupTraveller";
import Signin from "./pages/AuthenticationManagement/Signin";
import HomeNew from "./pages/AuthenticationManagement/HomeNew";

//Erandi-Reservation
import AddReservation from "./pages/Reservation/AddReservation";
import ViewReservation from "./pages/Reservation/ViewReservation";
import UpdateReservation from "./pages/Reservation/UpdateReservation";

export default class App extends Component {
  render() {
    return (
      <RequestContextProvider baseURL={"http://localhost:8000/"}>
        <UserContextProvider>
          <BrowserRouter>
            <NavBar />
            <div style={{ backgroundColor: "#D0D3D4", margin: "0" }}>
              {/* Login Routes*/}
              <Route path="/SignupAdmin" exact component={SignupAdmin} />
              <Route
                path="/SignupTraveller"
                exact
                component={SignupTraveller}
              />
              <Route path="/signin" exact component={Signin} />
              <Route path="/HomeNew" exact component={HomeNew} />
              {/* End Login Routes */}

              {/* Erandi- Reservation */}
              <Route path="/AddReservation" exact component={AddReservation} />
              <Route
                path="/ViewReservation"
                exact
                component={ViewReservation}
              />
              <Route
                path="/UpdateReservation/:id"
                exact
                component={UpdateReservation}
              />

              <Route path="/rooms/add" exact component={createrooms}></Route>
              <Route path="/rooms" exact component={HomeRooms}></Route>
              <Route path="/rooms/edit/:id" exact component={EditRooms}></Route>
              <Route
                path="/rooms/post/:id"
                exact
                component={RoomDetails}
              ></Route>
              <Route path="/client" exact component={ClientRoom}></Route>
              <Route path="/mail" exact component={emailer}></Route>

              {/* Nipuna */}
              <Route path="/Homes" exact component={Homes}></Route>
              <div className="App">
                <Card
                  title="Card Title"
                  imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyimVbEex6oC94o7xwRyNAuV_V_BCz-6vsMVOLIUcD6gb6IdBJFR2LaC-au_XOOWeuH3U&usqp=CAU"
                  body="dededwded"
                />
              </div>
              <div style={{ paddingTop: "100px", width: "100%" }}>
                <Footer></Footer>
              </div>
            </div>
          </BrowserRouter>
        </UserContextProvider>
      </RequestContextProvider>
    );
  }
}
