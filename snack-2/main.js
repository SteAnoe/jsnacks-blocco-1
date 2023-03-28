let parola1 = prompt("Inserisci la prima parola");
let parola2 = prompt("Inserisci la seconda parola");

if (parola1.length > parola2.length) {
    console.log(`${parola2}  ${parola1}`);
} else if (parola1.length < parola2.length) { 
    console.log(`${parola1}  ${parola2}`);
} else {
    console.log(`sono lunghe uguali`);
}
