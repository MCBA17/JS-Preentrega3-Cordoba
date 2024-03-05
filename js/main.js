
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
    constructor(titulo, genero, precio) {
        this.titulo = titulo;
        this.genero = genero;
        this.precio = precio;
    }
}

class Carrito {
    constructor() {
        this.items = [];
    }

    agregarAlCarrito(videojuego) {
        const index = this.items.findIndex(item => item.juego.titulo === videojuego.titulo);

        if (index === -1) {
            this.items.push({ juego: videojuego });
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
        } else {
            alert('Compra cancelada.');
        }
    }
}

const catalogo = [
    new Videojuego('The Witcher 3', 'RPG', 29.99),
    new Videojuego('Super Mario Odyssey', 'Plataformas', 39.99),
    new Videojuego('Red Dead Redemption 2', 'Aventura', 49.99),
    new Videojuego('Cyberpunk 2077', 'Acción/Aventura', 59.99),
    new Videojuego('Minecraft', 'Sandbox', 24.99),
    new Videojuego('The Legend of Zelda: Breath of the Wild', 'Aventura', 49.99),
    new Videojuego('Rocket League', 'Deportes', 14.99),
    new Videojuego('Among Us', 'Multijugador', 4.99),
    new Videojuego('Assassin\'s Creed Valhalla', 'Acción/Aventura', 44.99),
    new Videojuego('Call of Duty: Warzone', 'Battle Royale', 0),
    new Videojuego('Hollow Knight', 'Metroidvania', 14.99),
    new Videojuego('Stardew Valley', 'Simulación', 11.99),
    new Videojuego('Genshin Impact', 'RPG', 0),
    new Videojuego('Sea of Thieves', 'Aventura', 29.99),
    new Videojuego('Rainbow Six Siege', 'FPS', 19.99),
    new Videojuego('Apex Legends', 'Battle Royale', 0)
];

const carrito = new Carrito();

function Tienda() {
    let salir = false;

    while (!salir) {
        const opcion = prompt(
            'Seleccione una opción:\n' +
            '1. Ver Catálogo\n' +
            '2. Agregar al Carrito (por número o nombre)\n' +
            '3. Ver Carrito\n' +
            '4. Comprar\n' +
            '5. Salir'
        );

        switch (opcion) {
            case '1':
                let catalogoInfo = 'Catálogo:\n\n';
                catalogo.forEach((juego, index) => {
                    catalogoInfo += `${index + 1}. ${juego.titulo} - ${juego.genero} - $${juego.precio.toFixed(2)}\n`;
                });
                alert(catalogoInfo);
                break;

            case '2':
                const entradaJuego = prompt('Ingrese el número o nombre del juego que desea agregar al carrito:');

                const esNumero = !isNaN(entradaJuego);
                let juegoSeleccionado;

                if (esNumero) {
                    juegoSeleccionado = catalogo[entradaJuego - 1];
                } else {
                    juegoSeleccionado = catalogo.find(juego => juego.titulo.toLowerCase() === entradaJuego.toLowerCase());
                }

                if (juegoSeleccionado) {
                    carrito.agregarAlCarrito(juegoSeleccionado);
                } else {
                    alert('Número o nombre de juego inválido.');
                }
                break;

            case '3':
                carrito.mostrarCarrito();
                break;

            case '4':
                carrito.comprar();
                salir = true;
                break;
                break;

            case '5':
                salir = true;
                break;

            default:
                alert('Opción inválida.');
        }
    }
}
