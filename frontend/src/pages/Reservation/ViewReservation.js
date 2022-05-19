import React, { useState, useEffect } from "react";
import useRequest from "../../services/RequestContext";
import useUser from "../../services/UserContext";
import "./reservation.css";
import Swal from 'sweetalert2'

export default function ViewReservation() {
  const [reservation, setReservation] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();
  const { request } = useRequest();

  
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  


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

  const deletePopUp = (value) =>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Cancel!'
    }).then((result) => {
      if (result.isConfirmed) {
        onDelete(value);
        Swal.fire(
          'Cancelled!',
          'Your Reservation has been cancelled.',
          'success'
        )
      }
    })
  }


  //delete method
  const onDelete = async (value) => {
    try {
      const result = await request.delete(`reservations/${value}`);
      if (result.status === 200) {
        await fetchReservations();
      }
      console.log("api call reservation deleted", result);
    } catch (e) {
      console.log("delete reservation error", e);
    }
  };

  return (
    <div className="view-reservation-container">
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
                    <i class="material-icons">edit</i>
                  </a>
                  &nbsp;
                  <a
                    className="btn btn-danger"
                    href="#"
                    onClick={() => deletePopUp(reserve._id)}
                  >
                    <i className="material-icons">delete_forever</i>
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
