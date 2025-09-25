import { useState } from "react"  

function Botao(){
    const [num, setnum] = useState(0)
    const aumentar = () =>{
        setnum(num+1)
    }
    return(
        <button onClick={aumentar}>Valor Total: {num}</button>
    )
}
export default Botao
