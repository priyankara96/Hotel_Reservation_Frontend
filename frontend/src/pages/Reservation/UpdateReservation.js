import React, { useEffect, useState } from "react";
import useRequest from "../../services/RequestContext";
import { useParams, useHistory } from "react-router-dom";
import reserveImage from "../../images/updatereserve.jpg";
import Swal from 'sweetalert2'

export default function UpdateReservation() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    roomType: "",
    checkIn: "",
    checkOut: "",
    noOfRooms: "",
    noOfKids: "",
    noOfAdults: "",
  });

  const { request } = useRequest();
  const { id } = useParams();
  const history = useHistory();

  const HandleOnChange = (e) => {
    e.persist();
    setData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  //fetch the specific reservation
  const fetchReservation = async (val) => {
    setLoading(true);
    try {
      const result = await request.get(`reservation/${val}`);
      if (result.status === 200) {
        setData(result.data);
        console.log("Reservation ", result.data);
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchReservation(id);
    }
  }, [id]);

  const onFinish = async (values) => {
    try {
      const result = request.put(`reservations/${data._id}`, data);
      
      if(result){
        Swal.fire('Reservation Updated Successfully !')
        history.push('/ViewReservation');
       
      }
    } catch (e) {
      console.log("update error ", e);
    }
  };

  return (
    <div className="reservation-container">
      <img src={reserveImage} className="reserveimg" />
      <div className="container-sm">
        <form>
          <center>
            <h1>Update Reservation</h1>
            <br />
            <label>Room Type</label>
            <select
              class="form-control"
              id="roomType"
              name="roomType"
              value={data.roomType}
              onChange={(e) => HandleOnChange(e)}
            >
              <option value="Deluxe King Room">Deluxe King Room</option>
              <option value="Deluxe Twin Room">Deluxe Twin Room</option>
              <option value="Premier King Room">Premier King Room</option>
              <option value="Premier Twin Room">Premier Twin Room</option>
              <option value="Signature King Room">Signature King Room</option>
            </select>
         
            <label>CheckIn Date</label>
            <input
              type="date"
              class="form-control"
              id="checkIn"
              name="checkIn"
              value={data.checkIn}
              onChange={(e) => HandleOnChange(e)}
            />
           
            <label>CheckOut Date</label>
            <input
              type="date"
              class="form-control"
              id="checkOut"
              name="checkOut"
              value={data.checkOut}
              onChange={(e) => HandleOnChange(e)}
            />
           
            <label>Number Of Rooms</label>
            <input
              type="number"
              class="form-control"
              id="noOfRooms"
              name="noOfRooms"
              value={data.noOfRooms}
              onChange={(e) => HandleOnChange(e)}
            />
           
            <label>Number Of Kids</label>
            <input
              type="number"
              class="form-control"
              id="noOfKids"
              name="noOfKids"
              value={data.noOfKids}
              onChange={(e) => HandleOnChange(e)}
            />
          
            <label>Number Of Kids</label>
            <input
              type="number"
              class="form-control"
              id="noOfAdults"
              name="noOfAdults"
              value={data.noOfAdults}
              onChange={(e) => HandleOnChange(e)}
            />
          
          <br/><br/>
            <button
              type="submit"
              class="btn btn-primary"
              onClick={(e) => onFinish(e)}
            >
              Update
            </button>
            
            <br/><br/><br/>
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
