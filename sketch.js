function setup() {
    let canvas = createCanvas(900, 600);
    canvas.parent("canvas-container");
}

function draw() {

    // Fondo
    background(25, 45, 55);

    // Dibujamos el cielo
    dibujarCielo();
}


function dibujarCielo() {

    // Recorremos el cielo de arriba hacia abajo
    for (let y = 10; y < 320; y += 20) {

        // Alternamos colores
        if (y % 40 === 10) {
            stroke(210, 65, 35);
        } else {
            stroke(240, 135, 40);
        }

        strokeWeight(18);
        noFill();

        beginShape();

        // Creamos cada línea ondulada
        for (let x = -20; x <= width + 20; x += 10) {

            let onda = sin(
                x * 0.015 +
                frameCount * 0.025 +
                y * 0.025
            ) * 18;

            vertex(x, y + onda);
        }

        endShape();
    }
}