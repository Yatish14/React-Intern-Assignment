import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import {Link} from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <div>
      <Navbar bg = "dark" variant = "dark" style={{height: 60,marginBottom: 10}}>
        <Container>
            <Navbar.Brand>
            <Link to = "/" style={{fontSize: 30}}>Book your Show</Link>
            </Navbar.Brand>
            <Navbar.Text className="searchbar">
                <Form.Control 
                    placeholder = "Search the Shows..."
                    style = {{width : 600}}
                    className = "m-auto"
                />
            </Navbar.Text>
        </Container>
      </Navbar>
    </div>
  )
}
export default Header
