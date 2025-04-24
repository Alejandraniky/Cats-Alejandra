

async function mostrarAleatorios() {
    const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=5");
    const data = await res.json();
    const app = document.getElementById("app");
    app.innerHTML = "<h2>Gatitos Aleatorios</h2>";

    data.forEach(cat => {
        const div = document.createElement("div");
        div.classList.add("c-lista-gato");

        const img = document.createElement("img");
        img.src = cat.url;
        img.style.maxWidth = "200px";
        img.style.margin = "10px";

        const btn = document.createElement("button");
        btn.textContent = "Agregar a Memes";
        btn.onclick = () => agregarImagenAMemes(cat);

        div.appendChild(img);
        div.appendChild(btn);
        app.appendChild(div);
    });
}

function agregarImagenAMemes(gato) {
    let memes = JSON.parse(localStorage.getItem("memes")) || [];
    if (!memes.find(g => g.id === gato.id)) {
        memes.push(gato);
        localStorage.setItem("memes", JSON.stringify(memes));
        alert("Agregado a Memes");
    }
}
