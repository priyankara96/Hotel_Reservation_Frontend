import React, { useState } from "react";
import useRequest from "../../services/RequestContext";
import "./reservation.css";
import { useHistory } from "react-router-dom";
import reserveImage from "../../images/reserve.jpg";

export default function AddReservation() {
  const [data, setData] = useState({
    roomType: "",
    checkIn: "",
    checkOut: "",
    noOfRooms: "",
    noOfKids: "",
    noOfAdults: "",
  });

  const history = useHistory();

  const HandleOnChange = (e) => {
    e.persist();
    setData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  const onReset = () => {
    setData({
      roomType: "",
      checkIn: "",
      checkOut: "",
      noOfRooms: "",
      noOfKids: "",
      noOfAdults: "",
    });
  };

  //add reservation
  const { request } = useRequest();

  const onFinish = async (values) => {
    try {
      const result = await request.post("reservations", data);
      alert("Successfully Reserved !");
      if (
        data.roomType === "Signature King Room" ||
        data.roomType === "Deluxe King Room" ||
        data.roomType === "Premier King Room"
      ) {
        history.push(`/PaymentGateway/${data.roomType}`);
       //redirect();
        window.location.reload(true);
      } else {
        history.push("/");
        window.location.reload(true);
      }
    } catch (e) {
      alert("Error in Reservation !");
    }
  };

  const redirect = () => {
    history.push(`/PaymentGateway/${data.roomType}`);
  };

  return (
    <div className="reservation-container">
      <img src={reserveImage} className="reserveimg" />
      <div className="container-sm">
        <form>
          <center>
            <h3>Add Reservation</h3>
            <br />
            <label>Room Type</label>
            <select
              class="form-control"
              id="roomType"
              name="roomType"
              value={data.roomType}
              onChange={(e) => HandleOnChange(e)}
            >
              <option selected>Select Room Type</option>
              <option value="Deluxe King Room">Deluxe King Room</option>
              <option value="Deluxe Twin Room">Deluxe Twin Room</option>
              <option value="Premier King Room">Premier King Room</option>
              <option value="Premier Twin Room">Premier Twin Room</option>
              <option value="Signature King Room">Signature King Room</option>
            </select>
            <br />

            <label>CheckIn Date</label>
            <input
              type="date"
              class="form-control"
              id="checkIn"
              name="checkIn"
              value={data.checkIn}
              onChange={(e) => HandleOnChange(e)}
            />
            <br />

            <label>CheckOut Date</label>
            <input
              type="date"
              class="form-control"
              id="checkOut"
              name="checkOut"
              value={data.checkOut}
              onChange={(e) => HandleOnChange(e)}
            />
            <br />

            <label>Number Of Rooms</label>
            <input
              type="number"
              class="form-control"
              id="noOfRooms"
              name="noOfRooms"
              value={data.noOfRooms}
              onChange={(e) => HandleOnChange(e)}
            />
            <br />

            <label>Number Of Kids</label>
            <input
              type="number"
              class="form-control"
              id="noOfKids"
              name="noOfKids"
              value={data.noOfKids}
              onChange={(e) => HandleOnChange(e)}
            />
            <br />

            <label>Number Of Kids</label>
            <input
              type="number"
              class="form-control"
              id="noOfAdults"
              name="noOfAdults"
              value={data.noOfAdults}
              onChange={(e) => HandleOnChange(e)}
            />
            <br />

            <button
              type="submit"
              class="btn btn-primary"
              onClick={(e) => onFinish(e)}
            >
              Submit
            </button>
            <button
              type="reset"
              class="btn btn-primary"
              onClick={(e) => onReset(e)}
            >
              Reset
            </button>
          </center>
        </form>
      </div>
      <br />
      <br />
      <br /> <br />
      <br />
      <br /> <br />
      <br />
      <br /> <br />
      <br />
      <br /> <br />
      <br />
      <br /> <br />
      <br />
      <br /> <br />
      <br />
      <br /> <br />
      <br />
      <br /> <br />
      <br />
      <br /> <br />
      <br />
      <br /> <br />
      <br />
      <br />
    </div>
  );
}
