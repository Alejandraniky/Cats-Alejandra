
function mostrarMemes() {
    const app = document.getElementById("app");
    const memes = JSON.parse(localStorage.getItem("memes")) || [];
    app.innerHTML = "<h2>Gatos para Memes</h2>";

    memes.forEach(gato => {
        const div = document.createElement("div");
        div.classList.add("c-lista-gato");
        div.innerHTML = `
            <img src="${gato.url}" alt="Meme Cat">
        `;
        app.appendChild(div);
    });
}
