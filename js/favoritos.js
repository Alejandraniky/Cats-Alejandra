function mostrarFavoritos() {
    const app = document.getElementById("app");
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    app.innerHTML = "<h2>Favoritos</h2>";

    favoritos.forEach(gato => {
        const div = document.createElement("div");
        div.classList.add("c-lista-gato");
        div.innerHTML = `
            <img src="https://cdn2.thecatapi.com/images/${gato.reference_image_id}.jpg" alt="${gato.name}">
            <p>${gato.name}</p>
        `;
        div.addEventListener("click", () => mostrarDetalle(gato));
        app.appendChild(div);
    });
}

function agregarAFavoritos(id) {
    const gato = JSON.parse(localStorage.getItem("gatoActual"));
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    if (!favoritos.find(g => g.id === gato.id)) {
        favoritos.push(gato);
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
        alert("Agregado a favoritos");
    }
}
