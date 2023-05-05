import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">Makangikang</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/addService">Add Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#experts">Chef</Nav.Link>
                        <Nav.Link as={HashLink} to="/manageServices">Manage Services</Nav.Link>
                        {user?.email ?
                            <ul className="navbar-nav ">

                                <li className="nav-item">
                                    <HashLink className="nav-link active" to="/myOrders">my Order</HashLink>
                                </li>
                                <li>
                                    <Button onClick={logOut} variant="light">Logout</Button>
                                </li>
                            </ul>


                            :

                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;