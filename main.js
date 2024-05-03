// Esegui una funzione anonima, tra 2 secondi
// setTimeout(function() {
// 	console.log("Sono trascorsi 5 secondi, la pasta è pronta!");
// },  2 * 1000);

//Esegui la funzione "avvisaPasta", tra 2 secondi
//Metodo corretto solo se la funzione non necessita di parametri
// setTimeout(avvisaPasta,  2 * 1000);

// function avvisaPasta() {
// 	console.log("Sono trascorsi 5 secondi, la pasta è pronta!");
// }

//Esegui la funzione "stampaMsg", tra 2 secondi
//Metodo corretto solo se la funzione non necessita di parametri
//Secondi salvati in una variabile
// let seconds = 2;
// let messaggio = "Sono trascorsi 5 secondi, la pasta è pronta!";

// setTimeout(function() {
// 	stampaMsg(messaggio);
// },  seconds * 1000);

// function stampaMsg(msg) {
// 	console.log(msg);
// }

//Salvo un numero che identifica il timer in una variabile "ilMioTimer"
//Uso la variabile per annullare il conto alla rovescia
// let ilMioTimer = setTimeout(function() {
// 	console.log("Benvenuto");
// }, 3000);

// console.log("Il mio timer è: ", ilMioTimer);
// clearTimeout(ilMioTimer);


// Imposto un timer che ogni secondo, aggiorna il contatore (3.. 2.. 1...)
// let seconds = 3;
// let ilMioTimer = setInterval(function() {
// 	if(seconds!=0) {
// 		document.querySelector("h2").innerText = `Mancano: ${seconds}s`;
// 		seconds--;
// 	} else {
// 		document.querySelector("h2").innerText = "Lancio avvenuto";
// 		clearInterval(ilMioTimer);
// 	}
// }, 1000);


//Creo un cronometro brutto
let centesimi = 0;
let cronometro;

document.getElementById("start").addEventListener("click", function() {
	console.log("avvio il timer");

	cronometro = setInterval(function() {
		centesimi++;
		document.querySelector("h2").innerText = `Sono trascorsi: ${centesimi / 100}s`;
	}, 10) //ogni 10ms = ogni 0.010 secondi = ogni centesimo di secondo
});

document.getElementById("stop").addEventListener("click", function() {
	console.log("fermo il timer");
	clearInterval(cronometro);
});




console.log("Benvenuto in console");

