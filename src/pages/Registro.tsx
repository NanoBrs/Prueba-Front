import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Usuario } from "@/Interfaces/Interfaces";
import { initialstateUsuario } from "@/EstadosIniciales/Usuario";
import { registrarUsuario } from "@/Firebase/Promesas";
import Link from 'next/link'

const Registro = () => {
    const [usuario, setUsuario] = useState<Usuario>(initialstateUsuario);
    const handleUsuario = (name: string, value: string) => {
        setUsuario({ ...usuario, [name]: value });
    };

    const handleRegistrar = () => {
        registrarUsuario(usuario)
            .then(() => {
                alert("Se registró con éxito");
            })
            .catch((e) => {
                alert("Algo ocurrió");
                console.log(e);
            });
    };

    return (
        <>
            <Container className="d-flex vh-100" 
                style={{
                        backgroundImage: "url('/fondo1.jpeg')", // Ruta a la imagen en la carpeta public
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        minWidth: '100%',
                        minHeight: '100vh'
                    
                }}>


                <Container className='justify-content-sm-center md-5'>
                <Form className='container-sm' style={{ maxWidth: '400px', 
                    margin: 'auto', 
                    marginTop: '15px',
                    backgroundColor:"rgba(255, 255, 255, 0.8)",
                    padding:"20px " }}>
                    <h2>Formulario de registro</h2>
                    <Form.Group>
                        <Form.Label>Nombre:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese nombre"
                            name="nombre"
                            onChange={(e) => handleUsuario(e.currentTarget.name, e.currentTarget.value)}
                        />
                        <Form.Text></Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Apellido:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese apellido"
                            name="apellido"
                            onChange={(e) => handleUsuario(e.currentTarget.name, e.currentTarget.value)}
                        />
                        <Form.Text></Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Correo:</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Ingrese correo"
                            name="correo"
                            onChange={(e) => handleUsuario(e.currentTarget.name, e.currentTarget.value)}
                        />
                        <Form.Text></Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Contraseña:</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Ingrese su contraseña"
                            name="password"
                            onChange={(e) => handleUsuario(e.currentTarget.name, e.currentTarget.value)}
                        />
                        <Form.Text></Form.Text>
                    </Form.Group>

                    <Link href={"Menu"}>
                        <Button style={{ marginTop: "15px", marginRight:"15px"}} type="button" variant="secondary" >Volver al Menu</Button>
                    </Link>
                    <Button style={{ marginTop: "15px" }} type="button" variant="primary" onClick={handleRegistrar}>Registrar</Button>
                    
                    
                </Form>
            </Container>

            </Container>
            
        </>
    );
};

export default Registro;