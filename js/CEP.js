function buscaCep(){
    let cep = document.getElementById("txtcep").value;

    if(cep !== ""){
        let url = "https://brasilapi.com.br/api/cep/v1/" + cep;

        let req = new XMLHttpRequest();
        req.open("GET", url);
        req.send();

        //tratar a resposta da requisição
        req.onload = function(){
            if(req.status === 200){
                let endereco = JSON.parse(req.response);

                document.getElementById("txtrua").value = endereco.street;
                document.getElementById("txtbai").value = endereco.neighborhood;
                document.getElementById("txtcity").value = endereco.city;
                document.getElementById("txtestado").value = endereco.state;
            }else if(req.status === 404){
                alert("CEP inválido!");
            }else{
                alert("Erro ao fazer a requisição!");
            }
        }
    }
}

window.onload = function(){
    let txtCep = document.getElementById("txtcep");
    txtCep.addEventListener("blur", buscaCep);
}