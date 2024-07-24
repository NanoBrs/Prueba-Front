import { useState } from "react";
import { useRouter } from "next/router";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { validarUsuario } from "@/Firebase/Promesas";


export default function Home() {
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const esValido = await validarUsuario(correo, password);
        if (esValido) {
            router.push("/Menu");
        } else {
            setError("Correo o contraseña incorrectos");
        }
    };

    return (

        <Container 
        style={{
            backgroundImage: "url('/fondo1.jpeg')", // Ruta a la imagen en la carpeta public
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minWidth: '100%',
            minHeight: '100vh'
        }}>
                    <Container className="justify-content-sm-center md-5" >
                        <Row className="w-100 justify-content-center">
                            <Col md="6" lg="4">
                                <Form onSubmit={handleLogin} className="border p-4 rounded shadow-sm" style={{marginTop:"50px",backgroundColor:"white"}}>
                                    <h1 className="mb-4 text-center">Login NBA</h1>
                                    <Form.Group className="mb-3" controlId="correo">
                                        <Form.Label>Correo Electrónico</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Ingresa tu correo"
                                            value={correo}
                                            onChange={(e) => setCorreo(e.target.value)}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="password">
                                        <Form.Label>Contraseña</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Ingresa tu contraseña"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </Form.Group>

                                    {error && <p className="text-danger">{error}</p>}

                                    <Button variant="primary" type="submit" className="w-100">
                                        Ingresar
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>

        </Container>
        
    );
}
