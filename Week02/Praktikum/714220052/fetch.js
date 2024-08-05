const myHeaders = new Headers();
myHeaders.append("Cookie", "parking_session=24c31b9e-7808-4b9d-b5e0-b907889d497b");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("https://api-football-standings.azharimm.site/leagues", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));