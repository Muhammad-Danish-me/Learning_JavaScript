let bio = document.getElementById("bio");
let userName = document.getElementById("name");
let image = document.getElementById("img");
let followers = document.getElementById("followers");
let userLocation = document.getElementById("location");
let url = document.getElementById("url");
let repos = document.getElementById("repos");

const requestUrl = "https://api.github.com/users/muhammad-danish-me";
const xhr = new XMLHttpRequest();
xhr.open("GET", requestUrl);
xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
  if (xhr.readyState === 4) {
    const data = JSON.parse(this.responseText);
    console.log(data);
    // console.log(data.avatar_url)
    image.src = `${data.avatar_url}`;
    userName.innerHTML = `${data.name}`;
    bio.innerHTML = `${data.bio}`;
    followers.innerHTML = `<h5> Followers:  ${data.followers} </h5>`;
    userLocation.innerHTML = `<h5> Location:  ${data.location} </h5>`;
    repos.innerHTML = `<h5> Repositories:  ${data.public_repos} </h5>`;
    url.href = `${data.html_url}`;
  }
};
xhr.send();
