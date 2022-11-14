function logar(){
var name = document.getElementById("name");    
var password = document.getElementById("password");    
if(name.value == "admin" && password.value == "admin"){
    localStorage.setItem("acessar", true);
    alert("Acesso concedido");
     window.location.href= "../Profile/index.html";
  }else{
    alert("Usuário ou senha incorreto!!");
}
localStorage.setItem(USER_DATA, JSON.stringify(data))

}
