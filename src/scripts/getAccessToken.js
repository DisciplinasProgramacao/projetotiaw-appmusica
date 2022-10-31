const axios = require("axios");
const { btoa } = require("buffer");

const CLIENT_ID='4e5dad4f5abb4ca8847137a76f568807'
const CLIENT_SECRET='9172b66e066a4847b611ec8273a8d905'

const baseUrl = "https://accounts.spotify.com/api";
const Authorization = `Basic NGU1ZGFkNGY1YWJiNGNhODg0NzEzN2E3NmY1Njg4MDc6OTE3MmI2NmUwNjZhNDg0N2I2MTFlYzgyNzNhOGQ5MDU=`;

const getAccessToken = async () => {
  const data = await axios(`${baseUrl}/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: Authorization,
    },
    data: "grant_type=client_credentials",
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  return data;
};

getAccessToken();