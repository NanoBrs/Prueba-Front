import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, Container } from 'react-bootstrap';
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import Link from "next/link";
import { obtenerUsuarios, obtenerPersonasNBA, eliminarUsuario, eliminarPersonaNBA } from '@/Firebase/Promesas';
import { Usuario, PersonaNBA } from '@/Interfaces/Interfaces';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Pagina4 = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [personasNBA, setPersonasNBA] = useState<PersonaNBA[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [deleteType, setDeleteType] = useState<'usuario' | 'personaNBA' | null>(null);
    const [deleteId, setDeleteId] = useState<string | null>(null);

    useEffect(() => {
        // Fetching Usuarios
        obtenerUsuarios().then((usuarios) => {
            setUsuarios(usuarios);
        }).catch((e) => {
            alert("No se logra cargar los datos de usuarios");
            console.log(e);
        });

        // Fetching PersonasNBA
        obtenerPersonasNBA().then((personasNBA) => {
            setPersonasNBA(personasNBA);
        }).catch((e) => {
            alert("No se logra cargar los datos de personasNBA");
            console.log(e);
        });
    }, []);

    const handleShowModal = (type: 'usuario' | 'personaNBA', id: string) => {
        setDeleteType(type);
        setDeleteId(id);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setDeleteType(null);
        setDeleteId(null);
    };

    const handleConfirmDelete = async () => {
        if (!deleteId || !deleteType) return;

        if (deleteType === 'usuario') {
            await eliminarUsuario(deleteId);
            setUsuarios(usuarios.filter(usuario => usuario.id !== deleteId));
        } else if (deleteType === 'personaNBA') {
            await eliminarPersonaNBA(deleteId);
            setPersonasNBA(personasNBA.filter(personaNBA => personaNBA.id !== deleteId));
        }

        handleCloseModal();
    };

    return (
        <>  

            <Container className="vh-100" 
                style={{
                        backgroundImage: "url('/fondo1.jpeg')", // Ruta a la imagen en la carpeta public
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        minWidth: '100%',
                        minHeight: '100vh'
                    
                }}>
            
            <Container className='container-sm' style={{ maxWidth: '1200px', margin: 'auto',paddingTop:"20px" }}>
                <Link href={"Menu"}>
                        <Button style={{ marginTop: "15px", marginRight:"15px"}} type="button" variant="secondary" >Volver al Menu</Button>
                </Link>
                <h2 style={{color:"white",marginTop:"40px"}}>Usuarios</h2>
                <Table striped bordered hover style={{marginTop:"20px"}}>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Correo</th>
                            <th>Contraseña</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            usuarios.map((u) => (
                                <tr key={u.id}>
                                    <td>{u.nombre}</td>
                                    <td>{u.apellido}</td>
                                    <td>{u.correo}</td>
                                    <td>{u.password}</td>
                                    <td>
                                        <Link href={{ pathname: "ModificarUsuario", query: { key: u.id } }}>
                                            <Button variant="warning"><FiEdit /></Button>
                                        </Link>
                                        <Button variant="danger" onClick={() => handleShowModal('usuario', u.id)}><MdDeleteForever /></Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
            </Table>

            </Container>
            
            

            <Container  className='container-sm' style={{ maxWidth: '1200px', margin: 'auto', marginTop: '15px' }} > 

                    
                    <h2 style={{color:"white"}}>Personas NBA</h2>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Correo</th>
                                <th>Edad</th>
                                <th>Dirección</th>
                                <th>Conferencia</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                personasNBA.map((p) => (
                                    <tr key={p.id}>
                                        <td>{p.nombre}</td>
                                        <td>{p.apellido}</td>
                                        <td>{p.correo}</td>
                                        <td>{p.edad}</td>
                                        <td>{p.direccion}</td>
                                        <td>{p.conferencia}</td>
                                        <td>
                                            <Link href={{ pathname: "ModificarPersonaNBA", query: { key: p.id } }}>
                                                <Button variant="warning"><FiEdit /></Button>
                                            </Link>
                                            <Button variant="danger" onClick={() => handleShowModal('personaNBA', p.id)}><MdDeleteForever /></Button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>

                    
            </Container>



            </Container>
               

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmar eliminación</Modal.Title>
                </Modal.Header>
                <Modal.Body>¿Estás seguro de que deseas eliminar este registro?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cancelar
                    </Button>
                    <Button variant="danger" onClick={handleConfirmDelete}>
                        Eliminar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Pagina4;
