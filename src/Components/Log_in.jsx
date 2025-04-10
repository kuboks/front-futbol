import React, { useState } from 'react'
import ImageLogin from '../assets/Mabel.gif'
import ImagenPerfil from '../assets/Perfil.jpg'
import axios from 'axios';

const Log_in = () =>{
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    // Manejar cambios en los inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Datos enviados:', formData);
        // Aquí podrías agregar lógica para autenticar al usuario
        const res= await axios.post('http://localhost:8880/api/login', {
            Nombre: formData.email,
            Password: formData.password
        });
        console.log(res.data)
    };


    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.field}>
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.field}>
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </div>
                <button type="submit" style={styles.button}>Iniciar Sesión</button>
            </form>
        </div>

    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '50px',
    },
    title: {
        marginBottom: '20px',
    },
    form: {
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
    },
    field: {
        marginBottom: '15px',
    },
    input: {
        width: '100%',
        padding: '8px',
        marginTop: '5px',
    },
    button: {
        padding: '10px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
    },
};


export default Log_in