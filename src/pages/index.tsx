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
        <>
            <Container className='justify-content-md-center'>
                <Row className='justify-content-md-center' mt="5">
                    <Col md="6">
                        <Form className='text-center mt-5' onSubmit={handleLogin}>
                            <h1>Login NBA</h1>
                            <Form.Group className="mb-3" controlId="correo">
                                <Form.Label>Correo Electronico</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Ingresa tu correo"
                                    value={correo}
                                    onChange={(e) => setCorreo(e.target.value)}
                                />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Ingresa tu Contraseña"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>

                            {error && <p style={{ color: "red" }}>{error}</p>}

                            <Button variant="primary" type="submit">
                                Ingresar
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}