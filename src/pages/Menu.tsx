import Link from 'next/link'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

export const Menu = () => {
  return (
    <>
    
    <Container fluid className="d-flex vh-100">
        <Row className="m-auto align-self-center ">
        <Col xs={12}>
            <h2 className="text-center mb-4">Menú Principal</h2>
        </Col>
        <Col xs={12} className="mb-3">
            <Link href={"Registro"}>
                <Button
                variant="success"
                size="lg"
                className="w-100"
                onClick={() => ('/Registro')}
                >
                Registrar nuevo usuario
                </Button>
            
            </Link>
            
        </Col>
        <Col xs={12} className="mb-3">
            <Link href={"RegistroNBA"}>
                <Button
                variant="secondary"
                size="lg"
                className="w-100"
                onClick={() => ('/RegistroNBA')}
                >
                Registro según temática
                </Button>
            </Link>
            
        </Col>
        <Col xs={12} className="mb-3">
            <Link href={"Mostrar"}>
                <Button
                variant="secondary"
                size="lg"
                className="w-100"
                onClick={() => ('/view-records')}
                >
                Visualizar lo registrado
                </Button>
            </Link>
            
        </Col>
        <Col xs={12}>
            <Link href={"/"}>
                <Button
                variant="danger"
                size="lg"
                className="w-100"
                onClick={() => ('')}
                >
                Salir
                </Button>
            
            </Link>
            
        </Col>
        </Row>
    </Container>
  </>
  )
}

export default Menu