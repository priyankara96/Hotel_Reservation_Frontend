import React, { useState, useEffect } from "react";
import useRequest from "../../services/RequestContext";
import useUser from "../../services/UserContext";
import "./reservation.css";

export default function ViewReservation() {
  const [reservation, setReservation] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();
  const { request } = useRequest();

  //fetching reservations for the logged user
  const fetchReservations = async () => {
    setLoading(true);
    try {
      const result = await request.get(`reservations/${user._id}`);
      if (result.status === 200) {
        setReservation(result.data);
      }
      console.log(" My Reservations", result);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user && user._id) {
      fetchReservations();
    }
  }, [user]);

  //delete method
  const onDelete = async (value) => {
    try {
      const result = await request.delete(`reservations/${value}`);
      if (result.status === 200) {
        await fetchReservations();
        alert("Reservation Cancelled Successfully !");
      }
      console.log("api call reservation deleted", result);
    } catch (e) {
      console.log("delete reservation error", e);
    }
  };

  return (
    <div className="reservation-container">
      <center>
        <h1>Reservations</h1>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Room Type</th>
              <th scope="col">CheckIn</th>
              <th scope="col">CheckOut</th>
              <th scope="col">Number Of Rooms</th>
              <th scope="col">Number Of Kids</th>
              <th scope="col">Number Of Adults</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {reservation.map((reserve) => (
              <tr key={reserve._id}>
                <td>{reserve.roomType}</td>
                <td>{reserve.checkIn}</td>
                <td>{reserve.checkOut}</td>
                <td>{reserve.noOfRooms}</td>
                <td>{reserve.noOfKids}</td>
                <td>{reserve.noOfAdults}</td>

                <td>
                  <a
                    className="btn btn-warning"
                    href={`UpdateReservation/${reserve._id}`}
                  >
                    <i class="material-icons">edit</i>Update
                  </a>
                  &nbsp;
                  <a
                    className="btn btn-danger"
                    href="#"
                    onClick={() => onDelete(reserve._id)}
                  >
                    <i className="material-icons">delete_forever</i> Cancel
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-success">
          {" "}
          <a
            href="/AddReservation"
            style={{ textDecoration: "none", color: "white" }}
          >
            Add New Reservation
          </a>
        </button>
      </center>
    </div>
  );
}
