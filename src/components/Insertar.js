import React from 'react'
import Swal from 'sweetalert2';
import { useForm } from '../hooks/useForm';
import { url } from './utilities/global';
export const Insertar = () => {
    const [form,handleInputChange]=useForm({
        nombre:"",
        apellido:""
    })
    const guardar=(e)=>{
        e.preventDefault();
        console.log(nombre,apellido);
        const enviar=url+"save";
        fetch(enviar,{method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({"nombre":nombre,"apellido":apellido})
   }).then(resp=>{
       console.log(resp);
       Swal.fire(
           'Se inserto el estudiante',
           nombre+" "+apellido,
           'success'
       )
   })
       // console.log(e);
    }
    const {nombre,apellido}=form
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
                    >Guardar</button>
                </div>
            </form>
        </div>
    )
}
