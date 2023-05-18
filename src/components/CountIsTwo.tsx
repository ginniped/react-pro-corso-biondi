/* questo component prende una prop. Essendo typescrit, la prop va tipizzata, so dalla dichiarazione che era un numero*/

interface CountProp{
    value:number;
  }
  
export function CountIsTwo(props: CountProp){
    return (
      <div> Hello React! Count is {props.value}</div>
    )
  }