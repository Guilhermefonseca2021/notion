//naoo vou desistir desse projeto apenas vou anotar os insights
//duvida de como receber o valor do input ao enviar com submite e com isso /
//duvida em como deixar mais de um paragrafo de valoreds recebidos separados /
//pelo mesmo input mas cada um em um paragrafo /
let send = document.getElementById("send")


send.addEventListener("click", function()  {
    let dados = document.getElementById("tarefa")  //1 duvida
    let p = document.getElementById("tarefas")     //2 duvida

    send = dados.value;                            //1
    p.innerHTML += "<p><input type='checkbox'>" + send + "</p>";          //3 duvida

})