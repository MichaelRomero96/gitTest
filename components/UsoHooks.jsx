import React, {useState, useEffect} from 'react';

export default function UsoHooks () {

    const [Nombres, setNombres] = useState({
        Nombre:""
    })

    const [Apellidos, setApellidos] = useState({
        Apellido:""
    })

    const [Email, setEmail] = useState({
        Email:""
    })

    const [Telefono, setTelefono] = useState({
        Telefono:""
    })

    const [Direccion, setDireccion] = useState({
        Direccion:""
    })

    const[Mensaje, setMensaje] = useState ({
        Mensaje:""
    })

    const handlechange = (usuarionombre) => {
        const {name, value} = usuarionombre.target
        setNombres({ ...Nombres, [name]: value})
    }

    const valchange = (usuarioapellido) => {
        const {name, value} = usuarioapellido.target
        setApellidos({ ...Apellidos, [name]: value})
    }

    const emachange = (usuarioemail) => {
        const {name, value} = usuarioemail.target
        setEmail({ ...Email, [name]: value})
    }

    const telchange = (usuariotelefono) => {
        const {name, value} = usuariotelefono.target
        setTelefono({ ...Telefono, [name]: value})
    }

    const dirchange = (usuariodireccion) => {
        const {name, value} = usuariodireccion.target
        setDireccion({ ...Direccion, [name]: value})
    }

    const menchange = (usuariomensaje) => {
        const {name, value} = usuariomensaje.target
        setMensaje({ ...Mensaje, [name]: value})
    }

    useEffect (()=> {
        console.log(Nombres)
    },[Nombres])

    useEffect (()=>{
        console.log(Apellidos)
    },[Apellidos])

    useEffect (()=>{
        console.log(Email)
    },[Email])

    useEffect (()=>{
        console.log(Telefono)
    },[Telefono])

    useEffect (()=>{
        console.log(Direccion)
    },[Direccion])

    useEffect (()=>{
        console.log(Mensaje)
    },[Mensaje])

    return (
        <main>
             <h1>Ponte en contacto</h1>
             <h1></h1>
             <input class="control" onChange={handlechange} name="Nombre" placeholder = "Nombre"/>
             <input class="control" onChange={valchange} name="Apellido" placeholder = "Apellido"/>
             <input class="control" onChange={emachange} name="Email" placeholder = "Email"/>
             <input class="control" onChange={telchange} name="Telefono" placeholder = "Teléfono"/>
             <input class="contro" onChange={dirchange} name="Direccion" placeholder = "Dirección"/>
             <h1></h1>
             <input class="controles" onChange={menchange} name="Mensaje" placeholder = "Escribe tu mensaje aquí"/>
             <h1></h1>
             <center><button class="boton" onClick={() => alert(`Bienvenido ${Nombres.Nombre} ${Apellidos.Apellido} 
Los siguientes son sus datos suministrados:
Email: ${Email.Email}
Teléfono: ${Telefono.Telefono}
Dirección: ${Direccion.Direccion}
Si tus datos son correctos por favor dar en aceptar`)}> Enviar </button></center>

        </main>

    )





}
