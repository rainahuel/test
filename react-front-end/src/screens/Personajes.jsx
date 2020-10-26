import React from 'react'

export const Personajes = ( { image, id, name, species, status, gender} ) => {

    return (
        <div  className="contenedorPersonajes">
            <img src={image} />
            <p className="pPrimero"> Nombre: {name } </p>
            <p> Especie: {species} </p>
            <p> Estado: {status} </p>
            <p> Genero: {gender} </p>
        </div>
    )
}
