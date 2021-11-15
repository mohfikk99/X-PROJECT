import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { NavLink, useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux';

export default function Header() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: 'LOGOUT' });

        history.push('/');

        setUser(null);
    }

    useEffect(() => {
        // const token = user?.token;

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location])

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="logo192.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        React Bootstrap
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">

                        {user ? (
                            <Nav>
                                <Nav.Item>
                                    <NavLink to="/Postingan" className="navbar navbar-brand"> Postingan </NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink to="/Profile" className="navbar navbar-brand" activeStyle={{ fontWeight: "bold", color: "gray" }}>{user.result.name} | </NavLink>
                                </Nav.Item>
                                <Navbar.Brand>
                                    <img
                                        alt=""
                                        src={user.result.imageProfile}
                                        width="30"
                                        height="30"
                                        className="d-inline-block align-top profile"
                                    />
                                </Navbar.Brand>
                                <Nav.Item>
                                    <Button variant="outline-light" size="sm" onClick={logout}>
                                        Logout
                                    </Button>
                                </Nav.Item>
                            </Nav>
                        ) : (
                            <Nav>
                                <Nav.Item>
                                    <NavLink to="/" className="navbar navbar-brand"> Home </NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink to="/Pariwisata" className="navbar navbar-brand"> Pariwisata</NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink to="/Partisipan" className="navbar navbar-brand">Partisipan </NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink to="/About" className="navbar navbar-brand"> About Us </NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink to="/Auth" className="navbar navbar-brand">
                                        <Button variant="outline-light" size="sm">
                                            Gabung Jadi Anggota?
                                        </Button>
                                    </NavLink>
                                </Nav.Item>
                            </Nav>
                        )}

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
