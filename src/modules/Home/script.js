void (async function () {
  var count = 0;
  var current;
  var isPlaying = false;
  let second = 1;
  let cron;

  function timer() {
    second++;
    var progress = document.getElementById("myBar");
    progress.style.width = (second * 100) / 30 + "%";
  }

  function start() {
    pause();
    cron = setInterval(() => {
      timer();
      if (second > 30) pause();
    }, 1000);
  }

  function pause() {
    clearInterval(cron);
  }

  function reset() {
    second = 0;
  }

  document.getElementById("playAndPauseImg").src =
    "../../assets/icons/next 1.png";

  const token = JSON.parse(localStorage.getItem("TOKEN"));
  const user = JSON.parse(localStorage.getItem("LOCALSTORAGE_CURRENT_USER"));

  const currentMusic = (tracks) => {
    current = tracks[count].track;

    document.getElementById("name").innerText = `${
      current.name
    } - ${current.artists.map((item) => item.name)}`;
    document.getElementById("image").src = current.album.images[0].url;
    document.getElementById("audio").src = current.preview_url;
    document.getElementById("spotifyLink").href =
      current.external_urls["spotify"];
    isPlaying = !isPlaying;
    pause();
    reset();
    second = 0;
    var progress = document.getElementById("myBar");
    progress.style.width = second + "%";
    document.getElementById("playAndPauseImg").src =
      "../../assets/icons/next 1.png";
  };

  document.getElementById("next").addEventListener("click", () => {
    if (count < tracks.length) {
      count += 1;
    }
    pause();
    reset();
    currentMusic(tracks);
  });

  document.getElementById("prev").addEventListener("click", () => {
    if (count > 0) {
      count -= 1;
    }
    pause();
    reset();
    currentMusic(tracks);
  });

  document.getElementById("playAndPause").addEventListener("click", () => {
    isPlaying = !isPlaying;
    var song = document.getElementById("audio");

    if (isPlaying == false) {
      pause();

      song.pause();
      document.getElementById("playAndPauseImg").src =
        "../../assets/icons/next 1.png";
    } else {
      start();

      song.play();
      console.log(current);
      document.getElementById("playAndPauseImg").src =
        "../../assets/icons/pause 1.png";
    }
  });

  const getTrack = async (token, trackEndPoint) => {
    const result = await fetch(`${trackEndPoint}`, {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    });

    const data = await result.json();
    currentMusic(tracks);
    return data;
  };

  const getTracks = async (token, tracksEndPoint) => {
    const limit = 20;

    const result = await fetch(`${tracksEndPoint}?limit=${limit}`, {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    });

    const data = await result.json();
    tracks = data.items;
    getTrack(token, data.items[count].track.href);
    return data.items;
  };

  const getPlaylistByGenre = async (token, genreId) => {
    count = 0;
    const result = await fetch(
      `https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=1`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }
    );

    const data = await result.json();

    getTracks(token, data.playlists.items[0].tracks.href);
    return data.playlists.items[0];
  };

  getPlaylistByGenre(token, user.genre);

  function handleLogout() {
    window.location.href = "../Login/index.html";
  }
})();
