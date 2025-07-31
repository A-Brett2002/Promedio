function calcularPromedio() {
            let suma = 0;
            let cantidad = 4;
            for (let i = 1; i <= cantidad; i++) {
                let calificacion;
                do {
                    calificacion = parseFloat(prompt(`Ingrese la calificación #${i}:`));
                } while (isNaN(calificacion) || calificacion < 0 || calificacion > 100);
                suma += calificacion;
            }
            let promedio = suma / cantidad;
            let estado = promedio >= 61 ? "Aprobado" : "Reprobado";
            document.getElementById("resultado").innerHTML =
                `Promedio: ${promedio.toFixed(2)}<br>Estado: <strong>${estado}</strong>`;
        }