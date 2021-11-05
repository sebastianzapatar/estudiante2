import React,{useState} from 'react'
import Swal from 'sweetalert2';
import { useForm } from '../hooks/useForm';
import { url } from './utilities/global';
import { useLocation } from 'react-router';
import { Redirect } from 'react-router';
export const Editar = () => {
    const location=useLocation();
    const {pathname}=location;
    const [estado, setestado] = useState(false);
    const datos=pathname.split('/');
    console.log(datos);
    const id=datos[2];
    const nombres=datos[4];
    console.log(nombres);
    const apellidos=datos[6];
    const [form,handleInputChange]=useForm({
        nombre:nombres,
        apellido:apellidos
    })
    const guardar=(e)=>{
        e.preventDefault();
        console.log(nombre,apellido);
        const enviar=url+"editar/"+id;
        fetch(enviar,{method:"PUT",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({"nombre":nombre,"apellidos":apellido})
   }).then(resp=>{
       console.log(resp);
       Swal.fire(
           'Se edito el estudiante',
           nombre+" "+apellido,
           'success'
       )
       setestado(true);
   })
       // console.log(e);
    }
    const {nombre,apellido}=form
    if(estado){
        return <Redirect to="/listar"/>
    }
    return (
        <div>
            <form onSubmit={guardar}>
                <div className="mb-3">
                    <label htmlFor="nombre"
                    className="form-label">Nombre</label>
                    <input type="text"
                    id="nombre"
                    name="nombre"
                    onChange={handleInputChange}
                    placeholder="nombre estudiante"
                    value={nombre}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="apellido"
                    className="form-label">Apellido</label>
                    <input type="text"
                    id="apellido"
                    name="apellido"
                    onChange={handleInputChange}
                    placeholder="apellido estudiante"
                    value={apellido}/>
                </div>
                <div className="mb-3">
                    
                    <button
                    type="submit"
                    className="btn btn-primary"
                    >Editar</button>
                </div>
            </form>
        </div>
    )
}