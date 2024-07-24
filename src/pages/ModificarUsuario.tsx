import { initialstateUsuario } from '@/EstadosIniciales/Usuario';
import { modificarUsuario, obtenerUsuario } from '@/Firebase/Promesas';
import { Usuario } from '@/Interfaces/Interfaces';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Button, Form,Container} from 'react-bootstrap';
import Link from 'next/link'

export const ModificarUsuario = () => {
    const [usuario, setUsuario] = useState<Usuario>(initialstateUsuario);
    const router = useRouter();

    const handleUsuario = (name: string, value: string) => {
        setUsuario({ ...usuario, [name]: value });
    };

    useEffect(() => {
        const key = router.query.key;
        if (typeof key === "string") {
            obtenerUsuario(key).then((u) => {
                if (u !== undefined) {
                    setUsuario(u);
                } else {
                    // Devolverse a la tabla
                    router.push('/Mostrar');
                }
            });
        } else {
            // Devolverse a la tabla
            router.push('/Mostrar');
        }
    }, [router.query]);

    const handleModificar = () => {
        modificarUsuario(usuario).then(() => {
            alert("Usuario modificado con éxito");
            router.push('/Mostrar');
        }).catch((e) => {
            console.log(e);
            alert("Ocurrió un error");
        });
    };

    return (
        <>  <Container className='justify-content-sm-center md-5'>
                <Form className='container-sm' style={{ maxWidth: '500px', margin: 'auto', marginTop: '15px' }}>
                    <Form.Group>
                        <Form.Label>Nombre:</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Ingrese nombre" 
                            value={usuario.nombre}
                            name='nombre'
                            onChange={(e) => handleUsuario(e.currentTarget.name, e.currentTarget.value)}
                        />
                        <Form.Text></Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Apellido:</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Ingrese apellido" 
                            value={usuario.apellido}
                            name='apellido'
                            onChange={(e) => handleUsuario(e.currentTarget.name, e.currentTarget.value)}
                        />
                        <Form.Text></Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Correo:</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Ingrese correo" 
                            value={usuario.correo}
                            name='correo'
                            onChange={(e) => handleUsuario(e.currentTarget.name, e.currentTarget.value)}
                        />
                        <Form.Text></Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Contraseña:</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Ingrese contraseña" 
                            value={usuario.password}
                            name='password'
                            onChange={(e) => handleUsuario(e.currentTarget.name, e.currentTarget.value)}
                        />
                        <Form.Text></Form.Text>
                    </Form.Group>
                    <Link href={"Mostrar"}>
                        <Button style={{ marginTop: "15px", marginRight:"15px"}} type="button" variant="secondary" >Cancelar</Button>
                    </Link>
                    <Button style={{ marginTop: "15px" }} type="button" variant="primary" onClick={handleModificar}>Modificar</Button>
                </Form>
            </Container>
        </>
    );
};

export default ModificarUsuario;
