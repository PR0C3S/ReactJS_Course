/**
 * Ejemplo de uso del hook useState
 *
 * Crear un componente de tipo funcion y acceder a su estado privado
 * a traves de un hook y, ademas, poder modificarlo
 */

import React, { useState } from "react";

const Ejemplo1 = () => {
  //valor inicial para un contador
  const valorInicial = 0;

  //valor inicial para una persona
  const personaInicial = {
    nombre: "John",
    email: "example@gmail.com",
  };

  /**
   * Queremos que el valor inicial y persona incial sean parte del estado
   * del componente para asi poder gestionar su cambio y que este se vea
   * reflejado en la vista del componente
   *  const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
   */
  const [contador, setContador] = useState(valorInicial);
  const [persona, setPersona] = useState(personaInicial);

  /**
   * Funcion para actualizar el estado privado que contiene el contador
   */
  function incrementarContador() {
    // ? funcionParaCambiar(nuevoValor)
    setContador(contador + 1);
  }

  /**
   * Funciona para actualizar el estado de persona en el componente
   */
  function actualizarPersona() {
    setPersona({
      nombre: "Harold",
      email: "example2@gmail.com",
    });
  }

  return (
    <div>
      <h1>***Ejemplo de useState() ***</h1>
      <h2>Contador: {contador}</h2>
      <h2>Datos de la persona:</h2>
      <h3>Nombre: {persona.nombre}</h3>
      <h3>Email: {persona.email}</h3>
      <button onClick={incrementarContador}>InFcrementar Contador</button>
      <button onClick={actualizarPersona}>Actualizar Persona</button>
    </div>
  );
};

export default Ejemplo1;
