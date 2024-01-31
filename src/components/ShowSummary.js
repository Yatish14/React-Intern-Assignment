import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useParams } from "react-router-dom";
import "./ShowSummary.css";

export const ShowSummary = (props) => {
  const { showId } = useParams();
  const api = `https://api.tvmaze.com/shows/${showId}`;
  console.log(api);
  const [data, setData] = useState();
  const [showModal, setShowModal] = useState(false);

  const [bookingDetails, setBookingDetails] = useState({
    movieName: "",
    name: "",
    email: "",
    phone: "",
  });


  const fetchData = async () => {
    const res = await fetch(`${api}`);
    const data = await res.json();
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const bookTicket = () => {
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
    const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    const newBooking = {
      movieName: data.name,
      name: bookingDetails.name,
      email: bookingDetails.email,
      phone: bookingDetails.phone,
    };
    const updatedBookings = [...existingBookings, newBooking];
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
  };

  return (
    <>
      {data && (
        <div className="showSummary">
          <img className= "summaryImage"src={data.image ? data.image.original : ""} alt={data.name} />
          <div className="summaryDetails">
          <h2>{data.name}</h2>
          <b>Imbd Rating</b> : {data.rating.average}
          <br></br>
          <b>Language</b> : {data.language}
          <br></br>
          <b>Premiered on</b> : {data.premiered}
          <br></br>
          <b>Summary</b> : <div dangerouslySetInnerHTML={{ __html: data.summary }} />
          <Button variant="primary" onClick={bookTicket}>
            Book Now!
          </Button>
          </div>
          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header >
              <Modal.Title>Book Movie</Modal.Title>
              <p  style={{cursor: "pointer",position: "absolute", right: 20, fontSize: 26, top: 10}}onClick={() => setShowModal(false)}>
                <b>&times;</b>
              </p>
            </Modal.Header>
            <Modal.Body>
              <div className="details">
                <label for="title">Movie Name :{" "}</label>
                <input
                  id="title"
                  name="movieName"
                  value={data.name}
                  readOnly
                ></input>
                <label for="userName">Name :{" "}</label>
                <input
                  id="userName"
                  name="name"
                  value={bookingDetails.name}
                  onChange={handleInputChange}
                  placeholder="Name..."
                ></input>
                <label for="emailId">Email :{" "}</label>
                <input
                  id="emailId"
                  name="email"
                  value={bookingDetails.email}
                  onChange={handleInputChange}
                  placeholder="Email..."
                ></input>
                <label for= "phoneNumber">Phone :{" "}</label>
                <input
                  id="phoneNumber"
                  name="phone"
                  value={bookingDetails.phone}
                  onChange={handleInputChange}
                  placeholder="Phone..."
                ></input>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Close
              </Button>
              <Button variant="primary" onClick={handleSubmit}>
                Book Now!
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </>
  );
};

export default ShowSummary;
