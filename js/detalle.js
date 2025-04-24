function mostrarDetalle(gato) {
    const app = document.getElementById("app");
    app.innerHTML = `
        <section class="c-detalle">
            <h2>${gato.name}</h2>
            <img src="https://cdn2.thecatapi.com/images/${gato.reference_image_id}.jpg" alt="${gato.name}" style="max-width: 300px; border-radius: 15px;">
            <p><strong>Origen:</strong> ${gato.origin}</p>
            <p><strong>Descripción:</strong> ${gato.description}</p>
            <p><strong>Temperamento:</strong> ${gato.temperament}</p>
            <br>
            <button onclick="agregarAFavoritos('${gato.id}')">Agregar a Favoritos</button>
            <button onclick="agregarAMemes('${gato.id}')">Enviar a Memes</button>
            <button onclick="general()">Volver</button>
        </section>
    `;
    localStorage.setItem("gatoActual", JSON.stringify(gato));
}
