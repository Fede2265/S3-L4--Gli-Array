var saluto = "Sto imparando JavaScript";
var maiuscola = saluto.toUpperCase();
document.getElementById("maiuscola").innerHTML += (maiuscola);


var minuscola = saluto.toLocaleLowerCase();
document.getElementById("minuscola").innerHTML += (minuscola);


var strArray = saluto.split("");
document.getElementById("strArray").innerHTML += (strArray);



var estrazione = saluto.slice(2, 3);
var estrazione1 = saluto.slice(1, 2);
var estrazione2 = saluto.slice(14, 15);
var estrazione3 = saluto.slice(18, 19);
document.getElementById("estraiCaratteri").innerHTML += (estrazione) + (estrazione1) + (estrazione2) + (estrazione3);




var concatena = saluto.concat(" JS");
document.getElementById("concatena").innerHTML += (concatena);



var estraiStringa = saluto.substring(5, 9);
document.getElementById("estraiStringa").innerHTML += (estraiStringa);



const lista = ["Giovanni", "Carla", "Piero", "Mirtilla"];
document.getElementById("array").innerHTML += (lista);


document.getElementById("lunghezza").innerHTML += (lista.length); // Lunghezza lista


document.getElementById("elemento").innerHTML += lista[2]; // estrarre un elemento
document.getElementById("ultimo").innerHTML += lista.pop(); // ultimo elemento



lista.splice(2, 1, "Massimo", "Mirtilla")
document.getElementById("modificato").innerHTML = lista;


const calcolaAnni = function(compleanno) {
    return 2022 - compleanno;
}
const anni = [1990, 2001, 2010, 1987, 2018];
const eta1 = calcolaAnni(anni[1]);
const eta2 = calcolaAnni(anni[0]);
const eta3 = calcolaAnni(anni[3]);
const eta4 = calcolaAnni(anni[4]);
const eta5 = calcolaAnni(anni[2]);
document.getElementById('eta1').innerHTML += eta1 + ' anni';
document.getElementById('eta2').innerHTML += eta2 + ' anni';
document.getElementById('eta3').innerHTML += eta3 + ' anni';
document.getElementById('eta4').innerHTML += eta4 + ' anni';
document.getElementById('eta5').innerHTML += eta5 + ' anni';



const eta = [calcolaAnni(anni[1]), calcolaAnni(anni[0]), calcolaAnni(anni[3]), calcolaAnni(anni[4]), calcolaAnni(anni[2])];
document.getElementById("arrayEta").innerHTML += eta;






const animali = ["coniglio", "cane", "gatto", "criceto"];
document.getElementById("intero").innerHTML += (animali);


animali.push("leone");
document.getElementById("aggiunto").innerHTML = animali  // aggiungo elemento alla fine

animali.pop() 
document.getElementById("estratto").innerHTML = animali;  // tolgo ultimo elemento 


document.getElementById("verifica1").innerHTML = animali.includes("cane"); // true
document.getElementById("verifica2").innerHTML = animali.includes("leone"); // false