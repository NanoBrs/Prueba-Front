import React, { useState } from 'react';
import { Button, Form, Container, Col } from 'react-bootstrap';
import { PersonaNBA } from "@/Interfaces/Interfaces";
import { initialstatePersonaNBA } from "@/EstadosIniciales/PersonaNBA";
import { registrarPersonaNBA } from "@/Firebase/Promesas";
import { useRouter } from 'next/router';
import Link from 'next/link'

export const RegistroNBA = () => {
    const [personaNBA, setPersonaNBA] = useState<PersonaNBA>(initialstatePersonaNBA);
    const router = useRouter();

    const handlePersonaNBA = (name: string, value: string) => {
        setPersonaNBA({ ...personaNBA, [name]: value });
    };

    const handleRegistrar = () => {
        registrarPersonaNBA(personaNBA)
            .then(() => {
                alert("Se registró con éxito");
                router.push('Menu');
            })
            .catch((e) => {
                alert("Algo ocurrió");
                console.log(e);
            });
    };

    return (
        <>
            <Container className='justify-content-sm-center md-5'>
                <Form className='container-sm' style={{ maxWidth: '400px', margin: 'auto', marginTop: '15px' }}>
                    <h2>Formulario de registro</h2>
                    <Form.Group>
                        <Form.Label>Nombre:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese nombre"
                            name="nombre"
                            onChange={(e) => handlePersonaNBA(e.currentTarget.name, e.currentTarget.value)}
                        />
                        <Form.Text></Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Apellido:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese apellido"
                            name="apellido"
                            onChange={(e) => handlePersonaNBA(e.currentTarget.name, e.currentTarget.value)}
                        />
                        <Form.Text></Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Correo:</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Ingrese correo"
                            name="correo"
                            onChange={(e) => handlePersonaNBA(e.currentTarget.name, e.currentTarget.value)}
                        />
                        <Form.Text></Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Edad:</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Ingrese edad"
                            name="edad"
                            onChange={(e) => handlePersonaNBA(e.currentTarget.name, e.currentTarget.value)}
                        />
                        <Form.Text></Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Dirección:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese dirección"
                            name="direccion"
                            onChange={(e) => handlePersonaNBA(e.currentTarget.name, e.currentTarget.value)}
                        />
                        <Form.Text></Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Conferencia:</Form.Label>
                        <Form.Select
                            name="conferencia"
                            onChange={(e) => handlePersonaNBA(e.currentTarget.name, e.currentTarget.value)}
                        >
                            <option value="Oeste">Oeste</option>
                            <option value="Este">Este</option>
                        </Form.Select>
                        <Form.Text></Form.Text>
                    </Form.Group>
                    <Link href={"Menu"}>
                        <Button style={{ marginTop: "15px", marginRight:"15px"}} type="button" variant="secondary" >Volver al Menu</Button>
                    </Link>
                    <Button style={{ marginTop: "15px" }} type="button" variant="primary" onClick={handleRegistrar}>
                        Registrar
                    </Button>
                    
                    <Col xs={12}>
                    
                    </Col>
                </Form>
            </Container>
        </>
    );
};

export default RegistroNBA;
