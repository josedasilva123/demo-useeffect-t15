import React, { useState, useEffect } from 'react'

const Modal = () => {
  const [counter, setCounter] = useState(0);

  /* monitorar o ciclo de vida do componente
   desencadear execução de funções e uma ou mais fases do ciclo de vida
   -> Montagem
   -> Atualização
   -> Desmontagem
  */

  /* Em que momento do ciclo de vida eu quero executar essa função que eu estou escrevendo? */
  //Montagem  
  useEffect(() => {
    /* qualquer função */
    console.log('Aconteceu a montagem...')
  }, [])
  //Atualização
  useEffect(() => {
    /* qualquer função */
    console.log('Ocorreu uma mudança...')
  }, [counter])
  //Desmontagem
  useEffect(() => {
    return () => {
        /* qualquer função */
        console.log('Ocorreu uma desmontagem');
    }
  }, [])

  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter > 5 && <p>O número é maior que 5</p>}
    </div>
  )
}

export default Modal