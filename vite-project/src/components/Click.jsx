function Click(){
var numero = 0
var bonus1= 0
var bonus2= 0
function Clicar(){
    numero += 1 + bonus1 + bonus2;

    document.querySelector("#contador").innerText= numero;
}
function Clicar2(){
    if (numero >= 20){
        bonus1 = 1;
    } else {
        alert("criterios não atingidos você precisa de 20 pontos para continuar, atualmente você tem: " + numero);
    }  
}
function Clicar3(){
    if (numero >= 100){
        bonus2 = 2;
    } else {
        alert("criterios não atingidos você precisa de 100 pontos para continuar, atualmente você tem: " + numero);
    }  
}
function Clicar4(){
    if (numero >= 400){
        window.location.href = "https://bom-dia-eliti.vercel.app/"; 

    } else {
        alert("criterios não atingidos você precisa de 400 pontos para continuar, atualmente você tem: " + numero);
    }  
}
return (
        <>
            <h1 className="#" >Click</h1>
            <br />
            <h2 className="#">O jogo de Clicar</h2>
            <div className="#">
                <div className="#">
                    <p className="#" id="contador">0</p>
                    <p>
                        <button onClick={() => Clicar()}>Clique no botão para ganhar pontos</button>
                    </p>
                    <p>
                        <button className="#" onClick={() => Clicar2()}>
                            Clique no botão para ganhar mais 1 por clique <br />
                            (você precisa de 20 pontos para ativar essa opção)
                        </button>
                    </p>
                    <p>
                        <button className="#" onClick={() => Clicar3()}>
                            Clique no botão para ganhar ainda mais 1 por clique <br />
                            (você precisa de 100 pontos para ativar essa opção)
                        </button>
                    </p>
                    <p>
                        <button className="#" onClick={() => Clicar4()}>
                            Clique no botão para ganhar uma surpresa <br />
                            (você precisa de 400 pontos para ativar essa opção)
                        </button>
                    </p>
                </div>
            </div>
        </>
    );}


export default Click