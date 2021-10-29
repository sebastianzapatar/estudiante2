import React, { useState } from 'react'
import { Redirect } from 'react-router';
import Swal from 'sweetalert2';
import { url } from './utilities/global';
export const EstudianteCard = ({estudiante}) => {
    const [estado, setestado] = useState(false);
    const eliminar=()=>{
        Swal.fire({
            title:'Esta seguro?',
            text:'Tiene mas reversa una cagada',
            icon:'warning',
            showCancelButton:true,
            confirmButtonColor:'#3085d6',
            cancelButtonColor:'#d33',
            confirmButtonText:'Si!'
        }).then((result)=>{
            if(result.isConfirmed){
                const enviar=url+"borrar/"+estudiante._id;
                fetch(enviar,{method:'DELETE',
            headers:{'Content-Type':'application/json'},
        }).then(resp=>{
            Swal.fire(
                'Se borro',
                'Nada que hacer',
                'success'
            )
            setestado(true);
        })
            }
        })
    }
    if(estado){
        return <Redirect to="/listar"/>
    }
    return (
        <div className="card">
            <h1>{estudiante.nombre} {estudiante.apellidos}</h1>
            <img src={url+"imagen/"+estudiante.image}
            alt={estudiante._id} width="150px"></img>
            <button className="btn btn-danger" onClick={eliminar}>
                Eliminar
            </button>
        </div>
    )
}
