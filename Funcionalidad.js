document.addEventListener('DOMContentLoaded', function () {
    const enviarBtn = document.getElementById('enviarMensajeBtn');

    enviarBtn.addEventListener('click', function (event) {
        // Prevenir el envío por defecto del formulario
        event.preventDefault();

        // Obtener los valores de los campos del formulario
        const nombre = document.getElementById('nombre').value;
        const telefono = document.getElementById('telefono').value;
        const correo = document.getElementById('correo').value;
        const tema = document.getElementById('tema').value;
        const mensaje = document.getElementById('mensaje').value;

        // Validar los campos
        if (!nombre || !telefono || !correo || !tema || !mensaje) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        // Datos a enviar al servidor
        const data = {
            nombre: nombre,
            telefono: telefono,
            correo: correo,
            tema: tema,
            mensaje: mensaje
        };

        // Realizar la petición POST al servidor Flask
        fetch('http://127.0.0.1:5000/enviar-mensaje', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            // Verificar si la respuesta fue exitosa
            if (data.status === 'success') {
                // alert('Mensaje enviado correctamente!');
                
                // Limpiar el formulario
                document.getElementById('nombre').value = '';
                document.getElementById('telefono').value = '';
                document.getElementById('correo').value = '';
                document.getElementById('tema').value = '';
                document.getElementById('mensaje').value = '';
            } else {
                alert('Error al enviar el mensaje: ' + data.message);
            }
        })
        .catch((error) => {
            console.error('Error al enviar la solicitud:', error);
            alert('Hubo un error al enviar el mensaje. Inténtalo de nuevo más tarde.');
        });
    });
});

// Porcentajes______________

let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupa");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("equipo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 
