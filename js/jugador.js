/* El objeto jugador*/
var Jugador = {
    sprite: 'imagenes/auto_rojo_abajo.png',
    x: 130,
    y: 160,
    ancho: 15,
    alto: 30,
    velocidad: 10,
    vidas: 5,
    //tiene mucho mas sentido ahora :)
    mover: function(movX, movY) {
        if (movX < 0) {
            this.x += movX;
            this.sprite = 'imagenes/auto_rojo_izquierda.png';
            this.ancho = 30;
            this.alto = 15;
        }

        if (movX > 0) {
            this.x += movX;
            this.sprite = 'imagenes/auto_rojo_derecha.png';
            this.ancho = 30;
            this.alto = 15;
        }

        if (movY < 0) {
            this.y += movY
            this.sprite = 'imagenes/auto_rojo_arriba.png';
            this.ancho = 15;
            this.alto = 30;
        }

        if (movY > 0) {
            this.y += movY
            this.sprite = 'imagenes/auto_rojo_abajo.png';
            this.ancho = 15;
            this.alto = 30;
        }
    },
    perderVidas: function(cantVidas) {
        this.vidas -= cantVidas;
    }
};