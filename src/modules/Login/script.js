void function (){
  const users = JSON.parse(localStorage.getItem("LOCALSTORAGE_USERS_DATA"))

  const handleLogin = () => {
    var user = document.getElementById("user").value;    
    var password = document.getElementById("password").value; 
  
    users.map((item) => {
      if (item.user == user && item.password == password) {
        localStorage.setItem("LOCALSTORAGE_CURRENT_USER", JSON.stringify(item))
        return window.location.href= "../MusicStyle/index.html";
      }
    })

    setTimeout(() => {
      return alert("Usuário ou senha incorretos!");
    }, 1000)
  }

  const button = document.getElementById("login")
  button.onclick = () => handleLogin()
}()
