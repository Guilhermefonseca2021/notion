let send = document.getElementById("send")
let button = document.querySelector('#action-button')

console.log(button)
send.addEventListener("click", function()  {
    let dados = document.getElementById("tarefa")  
    let p = document.getElementById("tarefas")     

    

    send = dados.value;                            
    p.innerHTML += "<div class='taskToDo'><p><input type='checkbox'>" + send + "</p></div>";          

})

button.addEventListener('click', () => {
    let menu = document.querySelector('.menu')

    if(menu.style.display === "none") {
        menu.style.display = "block";
       
    } else {
        menu.style.display = "none";
    }
});