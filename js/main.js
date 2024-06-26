
let user, pass;

function register() {

    user = prompt("Ingresa tu nombre de usuario:");

    pass = prompt("Ingresa tu contraseña:");

    alert("¡Registro exitoso! Usuario: " + user + ", Contraseña: " + pass);
}

function login() {
    let userlogin, passlogin;

    for (let i = 1; i <= 3; i++) {
        userlogin = prompt("Ingresa tu nombre de usuario: ");
        passlogin = prompt("Ingresa tu contraseña: ");

        if (userlogin === user && passlogin === pass) {
            alert("Sesión iniciada");
            return;
        } else {
            alert(`Los datos ingresados son incorrectos. Intento ${i} de 3`);
        }
    }

    alert("Has agotado tus intentos. La sesión no pudo iniciarse.");
}

function data() {
    alert("Tus datos son: " + "Usuario: " + user + " - Contraseña: " + pass)
}



class Videojuego {
    constructor(titulo, genero, precio, imagen) {
        this.titulo = titulo;
        this.genero = genero;
        this.precio = precio;
        this.imagen = imagen;
    }
}

class Carrito {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('carrito')) || [];
    }

    agregarAlCarrito(videojuego) {
        const index = this.items.findIndex(item => item.juego.titulo === videojuego.titulo);

        if (index === -1) {
            this.items.push({ juego: videojuego });
            this.guardarCarrito();
            alert(`${videojuego.titulo} agregado al carrito.`);
        } else {
            alert(`${videojuego.titulo} ya está en el carrito.`);
        }
    }

    mostrarCarrito() {
        let mensaje = 'Carrito de Compras:\n\n';
        let total = 0;

        for (const item of this.items) {
            mensaje += `${item.juego.titulo}: $${item.juego.precio.toFixed(2)}\n`;
            total += item.juego.precio;
        }

        mensaje += `\nTotal: $${total.toFixed(2)}`;
        alert(mensaje);
    }

    comprar() {
        const confirmacion = confirm('¿Desea realizar la compra?');

        if (confirmacion) {
            alert('¡Compra realizada con éxito!');
            this.items = [];
            this.guardarCarrito();
        } else {
            alert('Compra cancelada.');
        }
    }

    guardarCarrito() {
        localStorage.setItem('carrito', JSON.stringify(this.items));
    }

    borrarCarrito() {
        const confirmacion = confirm('¿Está seguro que desea borrar el carrito?');

        if (confirmacion) {
            localStorage.removeItem('carrito');
            alert('Carrito borrado con éxito.');
        }
    }

    realizarCompra() {
        const confirmacion = confirm('¿Desea realizar la compra?');

        if (confirmacion) {
            localStorage.removeItem('carrito');
            alert('¡Compra realizada con éxito!');
        } else {
            alert('Compra cancelada.');
        }
    }
}


function borrarCarrito() {
    carrito.borrarCarrito();
    location.reload();
}

function realizarCompra() {
    carrito.realizarCompra();
    location.reload();
}


const catalogo = [
    new Videojuego('The Witcher 3', 'RPG', 29.99, "../assets/media/tw3.jpg"),
    new Videojuego('The Elder Scrolls 5: Skyrim', 'RPG', 35.99, "../assets/media/skyrim.jpg"),
    new Videojuego('Red Dead Redemption 2', 'Aventura', 49.99, "../assets/media/rdr2.jpeg"),
    new Videojuego('Cyberpunk 2077', 'Acción/Aventura', 59.99, "../assets/media/cyberpunk.jpg"),
    new Videojuego('Minecraft', 'Sandbox', 24.99, "../assets/media/mc.jpg"),
    new Videojuego('Elden Ring', 'JRPG', 47.99, "../assets/media/er.jpg"),
    new Videojuego('Rocket League', 'Deportes', 0, "../assets/media/rocketleague.jpg"),
    new Videojuego('Among Us', 'Multijugador', 4.99, "../assets/media/amongus.jpeg"),
    new Videojuego('Assassin\'s Creed Valhalla', 'Acción/Aventura', 44.99, "../assets/media/acv.jpg"),
    new Videojuego('Fear & Hunger 2: Termina', 'Survival/Horror', 11.99, "../assets/media/fah2.jpg"),
    new Videojuego('Hollow Knight', 'Metroidvania', 14.99, "../assets/media/hk.jpg"),
    new Videojuego('Stardew Valley', 'Simulación', 11.99, "../assets/media/sv.jpg"),
    new Videojuego('Genshin Impact', 'RPG', 0, "../assets/media/gi.jpeg"),
    new Videojuego('Sea of Thieves', 'Aventura', 29.99, "../assets/media/sot.jpg"),
    new Videojuego('Rainbow Six Siege', 'FPS', 19.99, "../assets/media/r6.jpeg"),
    new Videojuego('Dark Souls: Remastered', 'RPG', 39.99, "../assets/media/ds.jpg"),
    new Videojuego('Terraria', 'Sandbox', 5.99, "../assets/media/terraria.jpg"),
    new Videojuego('Hades', 'Roguelite', 4.99, "../assets/media/hades.jpg"),
    new Videojuego('Katana ZERO', 'Acción', 7.99, "../assets/media/kz.jpg"),
];

const carrito = new Carrito();

document.addEventListener("DOMContentLoaded", function() {
    const catalogoContainer = document.querySelector(".catalogo");

    catalogo.forEach(juego => {
        const link = document.createElement("a");
        link.href = `../templates/${formatoNombre(juego.titulo)}`;

        const card = document.createElement("div");
        card.classList.add("card");

        const imagen = document.createElement("img");
        imagen.src = juego.imagen;
        imagen.alt = juego.titulo;
        link.appendChild(imagen);

        const titulo = document.createElement("h2");
        titulo.textContent = juego.titulo;
        link.appendChild(titulo);

        const genero = document.createElement("p");
        genero.textContent = `Género: ${juego.genero}`;
        link.appendChild(genero);

        const precio = document.createElement("p");
        precio.textContent = `Precio: $${juego.precio.toFixed(2)}`;
        link.appendChild(precio);

        const agregarBtn = document.createElement("button");
        agregarBtn.textContent = "Agregar al Carrito";
        agregarBtn.classList.add("agregar-btn");
        agregarBtn.addEventListener("click", function() {
            carrito.agregarAlCarrito(juego);
        });
        card.appendChild(agregarBtn);

        card.appendChild(link);
        catalogoContainer.appendChild(card);
    });
});

function formatoNombre(nombre) {

    return nombre.toLowerCase().replace(/\s+/g, '');
}

function mostrarCarrito() {
    carrito.mostrarCarrito();
}