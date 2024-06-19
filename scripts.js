let chave = "cebcd482eda57fa9a6714c1c2ba91885"


function colocarNaTela(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp)+ "°C"
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"


}

/* InnerHtml -> serve para trocar o texto que esta dentro da classe cidade 

Math.Floor -> Ferramenta para arredondar valores 
*/



async function buscarCidade(cidade){
    let dados = await fetch ("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=cebcd482eda57fa9a6714c1c2ba91885&units=metric").then(resposta => resposta.json())
 

    //AWAIT = SIGNIFICA ESPERE
    //FETCH = FERRAMENTA DO JAVASCRIPT PARA ACESSAR SERVIDORES.
    //THEN = SIGNIFICA ENTÃO. 
    //JSON = JAVASCRIPT OBJECT NOTATION( O FORMATO QUE O JAVASCRIPT ENTENDE) 

    
    colocarNaTela(dados)

}

function cliqueiNoBotao(){
    let cidade = document.querySelector(".input-cidade").value

    
    buscarCidade(cidade)

}

/*
Clique no botão 
 -> chama a função cliqueiNoBotao()
 -> vai no input e pega o que está la dentro
 -> Passar a cidade para o servidor
*/

