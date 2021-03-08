import  React ,{useState} from  'react'
import './varios.css'


export default function Tarea() {

     const ponteEnContacto = "Ponte en contacto";
     const [datos, setDatos] = useState ([
          {Nombre:''},
          {Apellido:''},
          {Email:''},
          {Telefono:''},
          {Direccion:''},
          {Mensaje:''}
     ]);
     const handleChange = (guardarDatos) => {
          const {name, value} = guardarDatos.target
          setDatos({...datos, [name]: value})
     }

          return (
               <>
               <h2>{ponteEnContacto}</h2>
               <form className="contact_form">
               <input onChange={handleChange} name="Nombre" className="contact_form--nombre"  placeholder="Nombre"/>
               <input onChange={handleChange} name="Apellido" className="contact_form--apellido"  placeholder="Apellido"/>
               <input onChange={handleChange} name="Email" className="contact_form--email"  placeholder="Email"/>
               <input onChange={handleChange} name="Telefono" className="contact_form--telefono"  placeholder="Telefono"/>
               <input onChange={handleChange} name="Direccion" className="contact_form--direccion"  placeholder="Dirección"/>
               <textarea onChange={handleChange} name="Mensaje" className="contact_form--mensaje"  placeholder="Escribe tu mensaje aquí"/>
               </form>
               <button onClick={() => alert(`
               Nombre: ${datos.Nombre} 
               Apellido:  ${datos.Apellido} 
               Email: ${datos.Email} 
               Telefono: ${datos.Telefono} 
               Dirección: ${datos.Direccion} 
               Mensaje: ${datos.Mensaje} `) } className="boton">Enviar</button>
               </>
          )
}
