import React,{useEffect,useState} from 'react';
import { EstudianteCard } from './EstudianteCard';
import { url } from './utilities/global';
export const Listar = () => {
    const [estudiantes1, setestudiantes] = useState([]);
    const getEstudiantes=async()=>{
        const enviar=url+'list';
        const resp=await fetch(enviar);
        const {estudiantes}= await resp.json();
        setestudiantes(estudiantes);
        console.log(estudiantes);
    }
   // getEstudiantes();
    useEffect(() => {
        getEstudiantes();
    }, []);
    return (
        <div>
            {estudiantes1.map(estudiante=>(
                <EstudianteCard key={estudiante.id} 
                estudiante={estudiante}/>
            ))}
        </div>
    )
}
