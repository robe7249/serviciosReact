import React, { useEffect } from "react";
import { Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import { useHistory } from "react-router-dom";


export default function NavBar() {

    const history = useHistory();

    useEffect(function () {
        history.push("/home")
    }, []);


    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

                <LinkContainer to="/home">
                    <Navbar.Brand >Pagina Principal</Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>

                        <LinkContainer to="/signup">
                            <Nav.Link>Registrarse</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/signin">
                            <Nav.Link>Iniciar Sesion</Nav.Link>
                        </LinkContainer>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div >
    )
}
