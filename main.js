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
        if (!resultado.ok) {
            throw new Error("Erro na resposta da API: " + resultado.status);
        }
        return resultado.json();
    })
    .then(function(json) {
        name.innerText = json.name;
        username.innerText = json.login;
        avatar.src = json.avatar_url;
        repositories.innerText = json.public_repos;
        followers.innerText = json.followers;
        following.innerText = json.following;
        link.href = json.html_url;
    })
    .catch(function(erro) {
        console.error("Ocorreu um erro: ", erro);
        alert("Erro ao buscar usuário!");
        name.innerText = "Erro ao carregar dados do usuário!";
        username.innerText = "-"
        repositories.innerText = "-";
        followers.innerText = "-";
        following.innerText = "-";
        link.href = "-";
    })
})