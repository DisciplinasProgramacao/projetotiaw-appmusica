void async function(){
  const CLIENT_ID = "4e5dad4f5abb4ca8847137a76f568807";
  const CLIENT_SECRET = "7f78e59def38444f87204a3e3c9add6a";
  var token = '';
  var genres = '';

  let user = JSON.parse(localStorage.getItem("LOCALSTORAGE_CURRENT_USER"))

  document.getElementById("title").innerText = `Ola, ${user.name}.\nEscolha o genero de musica que voce deseja ouvir`

  const getToken = async () => {
    const result = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
          'Content-Type' : 'application/x-www-form-urlencoded', 
          'Authorization' : 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET)
      },
      body: 'grant_type=client_credentials'
    });

    const data = await result.json();
    token = data.access_token;
    localStorage.setItem("TOKEN", JSON.stringify(token));
    return data.access_token;
  }

  const getGenres = async () => {
    await getToken();
    count = 0;
    const Authorization = `Bearer ${token}`

    const result = await fetch(`https://api.spotify.com/v1/browse/categories?locale=sv_BR`, {
        method: 'GET',
        headers: { Authorization }
    });

    const data = await result.json();
    genres = data.categories.items;
    return data.categories.items;
  }
  await getGenres(token);

  const genresDiv = document.getElementById("genres");

  const handleSetGenre = (genreId) => {
    const newUser = {
      ...user,
      genre: genreId
    }

    localStorage.setItem("LOCALSTORAGE_CURRENT_USER", JSON.stringify(newUser))

    window.location.href = "../Home/index.html"
  }

  genres.map((item) => {
    const card = document.createElement("a");
    card.setAttribute("id", "card")
    const img = document.createElement("img")
    const title = document.createElement("h3")
    img.src = item.icons[0].url
    card.append(img)
    title.innerText = item.name
    card.append(title)
    card.onclick = () => handleSetGenre(item.id)

    genresDiv.appendChild(card)
  })
}()