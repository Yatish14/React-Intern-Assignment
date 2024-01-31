import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ShowSummary from "./ShowSummary";
// import './SingleShow.css'
// import { Link} from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SingleShow = ({ val }, i) => {
  const [showDetailsVisible, setShowDetailsVisible] = useState(false);

  // const history = useHistory();
  const navigate = useNavigate();

  function handleGetDetailsClick(movie) {
    setShowDetailsVisible(true);
    console.log(movie);
    navigate("/React-Intern-Assignment/summary/" + movie.id);
  }

  return (
    <div className="singleshow">
      <Card style={{ width: "300px", margin: 20 }}>
        <Card.Img
          className="img"
          variant="top"
          src={val.image}
          alt={val.name}
          style={{ height: 300, width: 300, objectfit: "contain", cursor: "pointer" }}
          onClick={() => handleGetDetailsClick(val)}
        />
        <Card.Body style={{ width: 300 }}>
          <Card.Title>{val.name}</Card.Title>
          <Card.Text>
            Imbd Rating : {val.rating}
            <br></br>
            Language : {val.language}
          </Card.Text>
          <Button variant="primary" onClick={() => handleGetDetailsClick(val)}>
            Get Details
          </Button>
          {showDetailsVisible && (
            <ShowSummary
              data={val}
              onClose={() => setShowDetailsVisible(false)}
            />
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleShow;
