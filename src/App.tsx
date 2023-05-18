import { useState } from "react";
import { CountIsTwo } from "./components/CountIsTwo";

function App() {
  const [count, setCount] = useState<number>(2)

  /* SPLIT IN FUNCTION: piccole funzioni che ritornano pezzi di jsx */
  const countIsNotTwo = () => {
    return (
      <div>Hello Next</div>
    )
  }

  /* questa funzione chiamata all'onClick del bottone, printa la posizione del mouse, 
  ma è importante notare che l'evento va tipizzato, non con i types nativi di ma quelli di react */
  function increment(e:React.MouseEvent) {
    setCount(count => count+1)
    /* 
      PERCHè USARE IL PREV STATE
      setC(c => c+1) invece di setC(c+1)
      
      La ragione per cui non puoi usare direttamente setCount(count + 1) nella funzione increment è che ciò comporterebbe un comportamento non corretto.
      In React, gli aggiornamenti dello stato sono asincroni. 
      Quando chiami la funzione setCount, pianifica l'aggiornamento dello stato ma non aggiorna immediatamente il valore di count. 
      Se usassi setCount(count + 1), ti affideresti al valore corrente di count, 
      che potrebbe non essere il valore più aggiornato al momento dell'applicazione dell'aggiornamento dello stato.
      Utilizzando la sintassi del callback setCount(count => count + 1), 
      ti assicuri che l'aggiornamento dello stato sia basato sul valore più recente di count anziché affidarsi al valore obsoleto. 
      Questo è importante, specialmente in scenari in cui potrebbero verificarsi più aggiornamenti dello stato in rapida successione.
      Utilizzare la sintassi del callback consente a React di gestire correttamente gli aggiornamenti dello stato 
      e garantisce che tu stia sempre lavorando con il valore dello stato più recente.
    */
    console.log('ciao', e.clientX)
  }
  function decrement(e:React.MouseEvent) {
    setCount(count-1)
    console.log('ciao', e.clientX)
  }
  return (
    <>
      {
        count===2?
        /* questo componente in tsx è esterno, e vuole una prop di tiponumber, infatti ho scritto l'interface nel component */
        <CountIsTwo value={count}/> : 
        countIsNotTwo()
      }
      <p>count is {count}</p>
      <button onClick={increment}>incrementa</button>
      <button onClick={decrement}>decrementa</button>
    </>
  )
}

export default App


/* il fragment <> ti permette di wrappare elemento jsx adiacenti senza usare un ulteriore div */
/* uso il ternary operator per fare conditional rendering sui componenti */


