async function conexionLista() {
    const res = await fetch('https://api.thecatapi.com/v1/breeds');
    const data = await res.json();
    return data;
}

async function general() {
    const infoCats = await conexionLista();
    mostrarLista(infoCats);
}