// Las 3 funciones de área puras (no tocan el DOM, según las pistas)[cite: 22]
const areaCirculo = (radio) => Math.PI * Math.pow(radio, 2); // Usa Math.PI[cite: 22]
const areaRectangulo = (base, altura) => base * altura;
const areaTriangulo = (base, altura) => (base * altura) / 2;

// Escuchamos el evento "change" del select para actualizar la interfaz (ocultar/mostrar el segundo input)[cite: 22]
document.getElementById("figura").addEventListener("change", function() {
    const figuraSeleccionada = this.value;
    const inputDato2 = document.getElementById("dato2");

    if (figuraSeleccionada === "circulo") {
        inputDato2.style.display = "none"; // Se oculta para el círculo[cite: 22]
    } else {
        inputDato2.style.display = "inline"; // Se muestra para rectángulo y triángulo[cite: 22]
    }
});

// Función principal que lee la figura y los datos, llama a la función correcta y muestra el resultado[cite: 22]
function calcularArea() {
    const figura = document.getElementById("figura").value;
    const dato1 = parseFloat(document.getElementById("dato1").value);
    const dato2 = parseFloat(document.getElementById("dato2").value);
    const pArea = document.getElementById("area");

    if (isNaN(dato1)) {
        pArea.textContent = "Por favor, introduce un valor válido.";
        return;
    }

    let resultado = 0;

    // Llamamos a la función correspondiente según la figura seleccionada
    if (figura === "circulo") {
        resultado = areaCirculo(dato1);
    } else if (figura === "rectangulo") {
        if (isNaN(dato2)) {
            pArea.textContent = "Por favor, introduce también la altura.";
            return;
        }
        resultado = areaRectangulo(dato1, dato2);
    } else if (figura === "triangulo") {
        if (isNaN(dato2)) {
            pArea.textContent = "Por favor, introduce también la altura.";
            return;
        }
        resultado = areaTriangulo(dato1, dato2);
    }

    // Mostramos el área redondeada a 2 decimales[cite: 22]
    pArea.textContent = `El área es: ${resultado.toFixed(2)}`;
}