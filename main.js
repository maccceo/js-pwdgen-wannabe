// Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito
// Scrivi sulla pagina nomecognomecolorepreferito19

var nome    = prompt("Ciao! Inserisci per favore il tuo nome:");
var cognome = prompt("Inserisci ora il tuo cognome:");
var colore  = prompt("Qual è il tuo colore preferito?");
var numero  = 19;

document.getElementById('pwd').innerHTML = nome + cognome + colore + numero;