function enviarDatos() {
    let name = document.getElementById('nombre').value;
    let lastName = document.getElementById('apellido').value;
    let date = document.getElementById('fecha').value;

    fetch('https://jsonplaceholder.typicode.com/users', {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'POST',
        body: JSON.stringify({
            nombre: name,
            apellido: lastName,
            fechaNac: date
        })
    })
    .then(response => response.json())
    .then(datos => {
        document.getElementById('nombre').value = "";
        document.getElementById('apellido').value = "";
        document.getElementById('fecha').value = "";
        alert("Enviado correctamente");
        console.log(datos)
    })
}

document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('enviar').addEventListener('click', ()=> {
        enviarDatos();
    })
})