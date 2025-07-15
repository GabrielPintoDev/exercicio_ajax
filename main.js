document.addEventListener("DOMContentLoaded", function() {
    const name = document.querySelector("#name");
    const username = document.querySelector("#username");
    const avatar = document.querySelector("#avatar");
    const repositories = document.querySelector("#repositories");
    const followers = document.querySelector("#followers");
    const following = document.querySelector("#following");
    const link = document.querySelector("#link");

    fetch("https://api.github.com/users/GabrielPintoDev")
    .then(function(resultado) {
        return resultado.json();
    })
    .then(function(json) {
        name.innerText = json.name;
        username.innerText = json.username;
        avatar.src = json.avatar_url;
        repositories.innerText = json.public_repos;
        followers.innerText = json.followers;
        following.innerText = json.following;
        link.href = json.html_url;
    })
})