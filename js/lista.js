function mostrarLista(razas) {
    const app = document.getElementById("app");
    app.innerHTML = "";

    razas.forEach(gato => {
        if (!gato.reference_image_id) return;

        const tarjeta = document.createElement("div");
        tarjeta.classList.add("c-lista-gato");

        tarjeta.innerHTML = `
            <img src="https://cdn2.thecatapi.com/images/${gato.reference_image_id}.jpg" alt="${gato.name}">
            <p>${gato.name}</p>
        `;

        tarjeta.addEventListener("click", () => mostrarDetalle(gato));
        app.appendChild(tarjeta);
    });
}