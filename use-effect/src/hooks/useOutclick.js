import { useRef, useEffect } from "react";
//Essa possibilidade existe
export const useOutclick = (callback) => {
    const ref = useRef(null); //seletor de elementos
    
    useEffect(() => {      
      function handleOutclick(event){
         // ref current - o elemento que recebeu o meu evento
         // event target - o elemento que estou clicando         
         if(!ref.current?.contains(event.target)){
            callback(); 
            console.log("1234");
         }         
      }
      // Adicionando um evento de mousedown a minha minha janela
      window.addEventListener('mousedown', handleOutclick);
      
      return () => {
         window.removeEventListener('mousedown', handleOutclick);
      }
   }, [])  

   /* useEffect funciona como um conjunto de eventos vínculado ao componente */
   // onMount: montagem
   // ouUpdate: atualizão
   // onDismount: desmontagem

   return ref;
}