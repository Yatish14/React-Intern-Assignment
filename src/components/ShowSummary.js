import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const ShowSummary = (props) => {

    console.log(props.data);
  return (
    <div>
        <Card style={{ width: '300px', margin: 20}}>
            <Card.Img className='img' variant="top" src ={props.data.image} alt = {props.data.name}/>
            <Card.Body >
                <Card.Title>{props.data.name}</Card.Title>
                <Card.Text>
                  <b>Imbd Rating</b> : {props.data.rating}
                  <br></br>
                  <b>Language</b> : {props.data.language}
                  <br></br>
                  <b>Premiered on</b> : {props.data.premiered}
                  <br></br>
                  <b>Summary</b> : {props.data.summary}
                </Card.Text>
                <Link to = "/summary"><Button variant="primary">Book Now!</Button></Link>
            </Card.Body>
        </Card>
    </div>
  )
}

export default ShowSummary