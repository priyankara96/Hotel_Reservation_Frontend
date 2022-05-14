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
import emailer from "./components/mailer";

//Nipuna
import Homes from "./components/Homes";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import Footer from "./components/Footer";

//Priyankara
import SignupAdmin from "./pages/AuthenticationManagement/AdminSignup";
import SignupTraveller from "./pages/AuthenticationManagement/TravellerSignup";
import Signin from "./pages/AuthenticationManagement/TravellerSignin";
import HomeNew from "./pages/AuthenticationManagement/HomeNew";
import AdminDashboard from "./pages/AuthenticationManagement/AdminDashboard";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./pages/AuthenticationManagement/TravellerProfile";
import AdminProfile from "./pages/AuthenticationManagement/AdminProfile";
import AdminSignin from "./pages/AuthenticationManagement/AdminSignin";

//Erandi
import AddReservation from "./pages/Reservation/AddReservation";
import ViewReservation from "./pages/Reservation/ViewReservation";
import UpdateReservation from "./pages/Reservation/UpdateReservation";
import MapLocation from "./pages/Map/MapLocation";
import PaymentGateway from "./pages/Payments/PaymentGateway";

export default class App extends Component {
  render() {
    return (
      <RequestContextProvider baseURL={"http://localhost:8000/"}>
        <UserContextProvider>
          <BrowserRouter>
            <NavBar />
            <div style={{ backgroundColor: "#D0D3D4", margin: "0" }}>
              {/* User management - Priyankara*/}
              <Route path="/SignupAdmin" exact component={SignupAdmin} />
              <Route
                path="/SignupTraveller"
                exact
                component={SignupTraveller}
              />
              <Route path="/signin" exact component={Signin} />
              <Route path="/HomeNew" exact component={HomeNew} />
              <Route path="/AdminDashboard" exact component={AdminDashboard} />
              <Route path="/Sidebar" exact component={Sidebar} />
              <Route path="/Profile" exact component={Profile} />
              <Route path="/AdminProfile" exact component={AdminProfile} />
              <Route path="/admin" exact component={AdminSignin} />
              {/* End User management */}

              {/* Erandi */}
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
              <Route path="/MapLocation" exact component={MapLocation} />
              <Route path="/PaymentGateway" exact component={PaymentGateway} />
              {/* Erandi */}

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
              <Route path="/" exact component={Homes}></Route>
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
