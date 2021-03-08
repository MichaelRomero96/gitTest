import React, { Fragment , useState} from 'react';


export default function Header(){

    const [datos, setDatos] = useState({
        nombre:'',
        apellido:'',
        email:'',
        celular:'',
        direccion:'',
        mensaje:''
    });

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }
    const enviaDatos=()=>{
        alert("Nombre: " + datos.nombre + "\n Apellidos: " + datos.apellido + " \n Email: " + datos.email + "\n Celular: " + datos.celular + " \n Direccion: " + datos.direccion + "\n Mensaje: " + datos.mensaje);
    }
    return(
        <Fragment>
            <h2>Ponte en contacto</h2>
            
            <form class="form">
            
            <input type="text" placeholder="Nombre" id="inputForm_active" className="name" name="nombre" onChange={handleInputChange}/>
            <input type="text" placeholder="Apellido" className="lastName" id="inputForm_active" name="apellido" onChange={handleInputChange}/>
            <input type="text" placeholder="Email" className="email" id="inputForm_active" name="email" onChange={handleInputChange}/>
            <input type="text" placeholder="Celular" className="telephone" id="inputForm_active" name="celular" onChange={handleInputChange}/>
            <input type="text" placeholder="Dirección" className="address" id="inputForm" name="direccion" onChange={handleInputChange}/>
            <input type="text" placeholder="Escribe tu mensaje aquí" className="message" id="inputForm" name="mensaje" onChange={handleInputChange}/>
            
            </form>
        <button id="button" onClick={enviaDatos}>Enviar</button>
        </Fragment>
    )

}