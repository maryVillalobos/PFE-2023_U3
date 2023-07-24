import React, { useState } from 'react'
import AgregarTareaFragment from './fragments/AgregarTareaFragment';
import MostarTareasFragment from './fragments/MostarTareasFragment';


const listaEjemplo = [
    {
        id: 1,
        nombre: 'Alimentar a los leones'
    },
    {
        id: 2,
        nombre: 'Jugar con las quimeras'
    },
    {
        id: 3,
        nombre: 'Mimir'
    }
];
const Tareas = () => {
    const [tareas, setTareas] = useState(listaEjemplo);
    const [nombreTarea, setNombreTarea] = useState('');

    const handleEliminarTarea= (id) =>{
        
        let tareasFiltradas=tareas.filter(tarea=>{
            return tarea.id !== id
        })
        setTareas(tareasFiltradas)
    }
    
    const handleModificarTarea = (evento) => {
        setNombreTarea(evento.target.value);
    }
    const handleAgregarTarea = (evento) => {
        if (nombreTarea === '') {
            alert('Debe escribir una Tarea');
        } else {
            let tareaNueva = {
                id: tareas.length + 1,
                nombre: nombreTarea  // Aquí se realizó la corrección
            };
            setTareas([...tareas, tareaNueva]);
            setNombreTarea('');
        }
    }

    return (
        <>
            <div className='row'>
                <div className='col-12'>
                    <h1>Tareas</h1>
                </div>
                <AgregarTareaFragment 
                nombreTarea={nombreTarea}
                handleModificarTarea={handleModificarTarea}
                handleAgregarTarea={handleAgregarTarea}
                />

                <MostarTareasFragment 
                tareas={tareas}
                handleEliminarTarea={handleEliminarTarea}
                
                />
                
            </div>
        </>
    );
}

export default Tareas;
