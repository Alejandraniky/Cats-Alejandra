let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

async function mostrarDetalle(id){
   

    const res = await fetch('https://api.thecatapi.com/v1/breeds'+id);
    const data = await res.json(); 
    const app =document.getElementById("app");


    const detalle = `
    <section class="c-detalle">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png" alt="${data.name}" height="120" width="auto">
        <p>${data.name}</p>
        <p>${data.id}</p>
     
        <p>Altura: ${data.height / 10} m / Peso: ${data.weight / 10} kg</p>
        <p>hp: ${data.stats[0].base_stat}</p>
        <p>Velocidad: ${data.stats[5].base_stat}</p>
        <p>Ataque: ${data.stats[1].base_stat} Defensa: ${data.stats[2].base_stat}</p>
        <p>Ataque Especial: ${data.stats[3].base_stat} Defensa Especial: ${data.stats[4].base_stat}</p>

    </section> `
    app.innerHTML = "id"


}

function mostrarDetalleGato(gato) {
    const app = document.getElementById("app");
    app.innerHTML = `
        <h2>${gato.name}</h2>
        <p><strong>Origen:</strong> ${gato.origin}</p>
        <p><strong>Descripción:</strong> ${gato.description}</p>
        <p><strong>Temperamento:</strong> ${gato.temperament}</p>
        <img src="https://cdn2.thecatapi.com/images/${gato.reference_image_id}.jpg" alt="${gato.name}" style="max-width: 300px; margin-top: 10px;">
        <br><br>
        <button onclick="general()">Volver a la lista</button>
    `;
}

