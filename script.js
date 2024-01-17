let fibo;


while (isNaN(fibo)) {
    fibo = parseInt(prompt("Ingresa un número para calcular su fibonacci:"));

    if (isNaN(fibo)) {
        alert("Por favor, ingresa un número válido.");
    }
}

let a = 0;
let b = 1;

document.write(a + " ");

for (let i = 1; i < fibo; i++) {
    let temp = a;
    a = b;
    b = temp + b;
    document.write(a + " ");
}


