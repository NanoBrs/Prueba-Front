import { initialstatePersonaNBA } from '@/EstadosIniciales/PersonaNBA';
import { modificarPersonaNBA, obtenerPersonaNBA } from '@/Firebase/Promesas';
import { PersonaNBA } from '@/Interfaces/Interfaces';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Button, Form ,Container} from 'react-bootstrap';
import Link from 'next/link'

export const ModificarPersonaNBA = () => {
    const [personaNBA, setPersonaNBA] = useState<PersonaNBA>(initialstatePersonaNBA);
    const router = useRouter();

    const handlePersonaNBA = (name: string, value: string) => {
        setPersonaNBA({ ...personaNBA, [name]: value });
    };

    useEffect(() => {
        const key = router.query.key;
        if (typeof key === "string") {
            obtenerPersonaNBA(key).then((p) => {
                if (p !== undefined) {
                    setPersonaNBA(p);
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
        modificarPersonaNBA(personaNBA).then(() => {
            alert("Persona NBA modificada con éxito");
            router.push('/Mostrar');
        }).catch((e) => {
            console.log(e);
            alert("Ocurrió un error");
        });
    };

    return (
        <>
            <Container className='justify-content-sm-center md-5'>

                <Form className='container-sm' style={{ maxWidth: '400px', margin: 'auto', marginTop: '15px' }}>
                    
                <h1>Modificar Registro</h1>
                    <Form.Group>
                        <Form.Label>Nombre:</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Ingrese nombre" 
                            value={personaNBA.nombre}
                            name='nombre'
                            onChange={(e) => handlePersonaNBA(e.currentTarget.name, e.currentTarget.value)}
                        />
                        <Form.Text></Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Apellido:</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Ingrese apellido" 
                            value={personaNBA.apellido}
                            name='apellido'
                            onChange={(e) => handlePersonaNBA(e.currentTarget.name, e.currentTarget.value)}
                        />
                        <Form.Text></Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Correo:</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Ingrese correo" 
                            value={personaNBA.correo}
                            name='correo'
                            onChange={(e) => handlePersonaNBA(e.currentTarget.name, e.currentTarget.value)}
                        />
                        <Form.Text></Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Edad:</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="Ingrese edad" 
                            value={personaNBA.edad}
                            name='edad'
                            onChange={(e) => handlePersonaNBA(e.currentTarget.name, e.currentTarget.value)}
                        />
                        <Form.Text></Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Dirección:</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Ingrese dirección" 
                            value={personaNBA.direccion}
                            name='direccion'
                            onChange={(e) => handlePersonaNBA(e.currentTarget.name, e.currentTarget.value)}
                        />
                        <Form.Text></Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Conferencia:</Form.Label>
                        <Form.Select 
                            value={personaNBA.conferencia}
                            name='conferencia'
                            onChange={(e) => handlePersonaNBA(e.currentTarget.name, e.currentTarget.value)}
                        >
                            <option value="Oeste">Oeste</option>
                            <option value="Este">Este</option>
                        </Form.Select>
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

export default ModificarPersonaNBA;

