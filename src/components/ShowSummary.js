import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useParams } from "react-router-dom";
import "./ShowSummary.css"

export const ShowSummary = (props) => {
  const { showId } = useParams();
  const api = `https://api.tvmaze.com/shows/${showId}`;
  console.log(api);
  const [data, setData] = useState();
  const [visibility,setVisibility] = useState(false);
  const bookTicket = (e) => {
    setVisibility(true);
  }
  const username = sessionStorage.getItem("username");
  const email = sessionStorage.getItem("email");
  const phone = sessionStorage.getItem("phone");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${api}`);
      const data = await res.json();
      console.log(data);
      setData(data);
    };
    fetchData();
  }, []);

  return (<>
      {data && (    <div className="showSummary">
        <Card style={{ width: "300px", margin: 20 }}>
          <Card.Img
            className="img"
            variant="top"
            src={data.image.original}
            alt={data.name}
          />
          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>
              <b>Imbd Rating</b> : {data.rating.average}
              <br></br>
              <b>Language</b> : {data.language}
              <br></br>
              <b>Premiered on</b> : {data.premiered}
              <br></br>
              <b>Summary</b> : {data.summary}
            </Card.Text>
              <Button variant="primary" onClick={bookTicket}>Book Now!</Button>
          </Card.Body>
        </Card>
        {visibility && (<div className="details">
        Movie Name  : <input value={data.name}></input>
        <br></br>
        Name : <input placeholder="Name..." value = {username}></input>
        <br></br>
        Email : <input placeholder="Email..." value = {email}></input>
        <br></br>
        Phone : <input placeholder="Phone..." value = {phone}></input>
        </div>
)}
        </div>
        )}
        </>
  );
};

export default ShowSummary;
