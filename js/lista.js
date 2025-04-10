function mostrarLista(razas) {
    const app = document.getElementById("app");
    app.innerHTML = "Cargando gatos...";
    console.log(razas);

    let catsHTML = "";
    for (let i = 0; i < razas.length; i++) {
        const gato = razas[i];

        // Verificamos si hay una imagen en el objeto raza
        let imagen = "https://via.placeholder.com/150?text=No+Image";
        if (gato.reference_image_id) {
            imagen = `https://cdn2.thecatapi.com/images/${gato.reference_image_id}.jpg`;
        }

        catsHTML += `
        <div class="c-lista-gato" onclick="mostrarDetalle('${gato.name}')">
            <img src="${imagen}" width="auto" height="100" loading="lazy" alt="${gato.name}">
            <p>${gato.name}</p>
        </div>`;
    }

    app.innerHTML = catsHTML;
}
