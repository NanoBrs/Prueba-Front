import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';

const Barra = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">Mi Aplicación</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Item>
                            <Link href="/Menu" passHref>
                                <Nav.Link>Home</Nav.Link>
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link href="/Registro" passHref>
                                <Nav.Link>Registrar Usuario</Nav.Link>
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link href="/RegistroNBA" passHref>
                                <Nav.Link>Registrar NBA</Nav.Link>
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link href="/Mostrar" passHref>
                                <Nav.Link>Ver Registros</Nav.Link>
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link href="/" passHref>
                                <Nav.Link>Cerrar Sesión</Nav.Link>
                            </Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Barra;
