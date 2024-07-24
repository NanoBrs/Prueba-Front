import { Usuario, PersonaNBA } from "@/Interfaces/Interfaces";
import { addDoc, collection, doc, getDoc, getDocs, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "./Firebase";

// Usuario CRUD
export const registrarUsuario = async (usuario: Usuario) => {
    const docRef = await addDoc(collection(db, "usuario"), usuario);
    return docRef;
};

export const obtenerUsuarios = async () => {
    const querySnapshot = await getDocs(collection(db, "usuario"));
    let usuarios: Usuario[] = [];
    querySnapshot.forEach((doc) => {
        let usuario: Usuario = { ...doc.data(), id: doc.id } as Usuario;
        usuarios.push(usuario);
    });
    return usuarios;
};

export const obtenerUsuario = async (id: string) => {
    const docRef = doc(db, "usuario", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return { ...docSnap.data(), id: docSnap.id } as Usuario;
    } else {
        return undefined;
    }
};

export const modificarUsuario = async (usuario: Usuario) => {
    const ref = doc(collection(db, "usuario"), usuario.id);
    await updateDoc(ref, { ...usuario });
};

export const eliminarUsuario = async (id: string) => {
    const ref = doc(db, "usuario", id);
    await deleteDoc(ref);
};

export const validarUsuario = async (correo: string, password: string): Promise<boolean> => {
    const usuarios = await obtenerUsuarios();
    return usuarios.some(usuario => usuario.correo === correo && usuario.password === password);
};

// PersonaNBA CRUD
export const registrarPersonaNBA = async (personaNBA: PersonaNBA) => {
    const docRef = await addDoc(collection(db, "personaNBA"), personaNBA);
    return docRef;
};

export const obtenerPersonasNBA = async () => {
    const querySnapshot = await getDocs(collection(db, "personaNBA"));
    let personasNBA: PersonaNBA[] = [];
    querySnapshot.forEach((doc) => {
        let personaNBA: PersonaNBA = { ...doc.data(), id: doc.id } as PersonaNBA;
        personasNBA.push(personaNBA);
    });
    return personasNBA;
};

export const obtenerPersonaNBA = async (id: string) => {
    const docRef = doc(db, "personaNBA", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return { ...docSnap.data(), id: docSnap.id } as PersonaNBA;
    } else {
        return undefined;
    }
};

export const modificarPersonaNBA = async (personaNBA: PersonaNBA) => {
    const ref = doc(collection(db, "personaNBA"), personaNBA.id);
    await updateDoc(ref, { ...personaNBA });
};

export const eliminarPersonaNBA = async (id: string) => {
    const ref = doc(db, "personaNBA", id);
    await deleteDoc(ref);
};
