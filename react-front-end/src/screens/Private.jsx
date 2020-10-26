import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Personajes } from './Personajes';
import { signout } from '../helpers/auth';

const Private = ({ history }) => {

 const [ element, setElement ] = useState([])
  useEffect( () => {
    getDataRickMorty()
  }, [] )

  const getDataRickMorty = async () => {
    const url = `https://rickandmortyapi.com/api/character/`
    const resp = await fetch(url)
    const data = await resp.json() 
    const { info, results }  = data
    const resultados = results.map( resultado => {
      return {
         name: resultado.name,
         id: resultado.id,
         species: resultado.species,
         image: resultado.image,
         status: resultado.status,
         gender: resultado.gender
      }
    })
    setElement( resultados )
  }

  const handleExit = (e) => {
    e.preventDefault()
    signout(() => {
      history.push('/login');
    });
  }

  return (
    <>
      <button 
      onClick={handleExit}
      className="btnSalir"
      > Cerrar sesion 
    </button>
    <div className='contenedorPrincipal'>
    <h1 
      className='titulo'>
            Personajes Rick and Morty  
    </h1>
    
    {
      element.map( elem => (
        <Personajes 
          key={elem.id}
          { ...elem}/>
      )) 
    }
    </div>
  </>
  );
};

export default Private;
