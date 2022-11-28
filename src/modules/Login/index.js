let inputEmail = document.getElementById("name");
let inputSenha = document.getElementById("password");


function cliqueLogin(){

    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    if(name == '' || password == ''){
        alert('preencha os campos')
    }else{
        loginUsuario(name,password)
    }

}
function loginUsuario(name, password){
    var userNotExist = true;

    if(localStorage.getItem('usuarios') == null){
        alert('Nao existem usuarios  registrado ')
    }else{
        var usuarios = JSON.parse(localStorage.getItem("LOCALSTORAGE_USERS_DATA"))|| [];
        const usuariosAtualizados = usuarios.map(user => {
            if(user.name == name && user.password == password){
                user.logado = true 
                window.location.href= "../Profile/index.html";               
                 userNotExist = false;
            }else{
                //Solucao temporaria, imagino que quando eu fizer o logout na tela do usuario eu defina
                //o logado como falso, pois a unica forma de ir para login cadastro depois de logado
                // e saindo da conta
                user.logado = false;
            }
            return user
        });
        if(userNotExist){
            alert('Usuario nao cadastrado')
        }

        localStorage.setItem(CURRENT_USER, JSON.stringify(data))
        localStorage.setItem(USERS_DATA, JSON.stringify(users))   
       }
}