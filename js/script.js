// chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


const btnPalindromo = document.getElementById("btn-palindromo");
let output = document.getElementById("risultato");


btnPalindromo.addEventListener('click', initVerifica);

function initVerifica() {
    
    const parolaUtente = document.getElementById("input-palindromo").value;
    
    const parolaReverse = reverse(parolaUtente);
    
    if(isNaN(parolaUtente)){
        if(parolaUtente.toLowerCase() === parolaReverse.toLowerCase()){
            output.innerHTML = `La parola ${parolaUtente} è un palindromo`;
        }else{
            output.innerHTML = `La parola ${parolaUtente} non è un palindromo`;
        }
    }else{
         alert("Inserire una parola !");
    }             
}
//funzione per scrivere al contrario 
function reverse(word) {
    
    
    let reverseString ='';
    for( let i = word.length - 1; i >= 0; i--){
        reverseString += word[i];
    }
    return reverseString;
 }

//----------------------------------\\
//  Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

//costanti 
const btnPariDispari = document.getElementById("btn-pari-dispari");
let outputPariDispari = document.getElementById("risultato-pari-dispari");
const numeroMin = 1;
const numeroMax = 5;
let verifica = false;
let scelta = "pari";
let error = false;
//funzioni
function getRandomNumber(min, max){

    return  Math.floor(Math.random() * (max - min +1) + min );
  
  }

function pariDispari(num1,num2) {
    
    let sum = num1 + num2;

    console.log(sum);

    if(sum % 2){
        verifica = false;
        scelta = "dispari";
    }else{
        verifica = true; 
        scelta = "pari";
       }

    return sum;

  }

//start funzioni 
btnPariDispari.addEventListener('click', function(){
    
    const numeroUtente = document.getElementById("pari-dispari").value;
    const numeroPc = getRandomNumber(numeroMin, numeroMax);
    const sceltaPariDispari = document.getElementById("scelta").value;

    pariDispari(numeroPc, parseInt(numeroUtente));

    if(numeroUtente > numeroMax || numeroUtente < 1){
        alert("Inserire un numero da 1 a 5 !")

    }else{
        if(verifica && sceltaPariDispari === "pari"){
                outputPariDispari.innerHTML = `La somma del numero scelto da te ${numeroUtente} <br> e il numero random scelto dal computer "${numeroPc}" <br> la loro somma  è uguale ${pariDispari(numeroPc, parseInt(numeroUtente))} <br>  HAI VINTO!!!!`;
                console.log(verifica, scelta);
            }else if(verifica && sceltaPariDispari === "dispari"){
                outputPariDispari.innerHTML = `La somma del numero scelto da te ${numeroUtente} <br> e il numero random scelto dal computer "${numeroPc}" <br> la loro somma è uguale ${pariDispari(numeroPc, parseInt(numeroUtente))} <br>  HAI PERSO!!!!`;
                console.log(verifica, scelta);
            }else if(!(verifica) && sceltaPariDispari === "dispari"){
                outputPariDispari.innerHTML = `La somma del numero scelto da te ${numeroUtente} <br> e il numero random scelto dal computer "${numeroPc}" <br> la loro somma è uguale ${pariDispari(numeroPc, parseInt(numeroUtente))} <br>  HAI VINTO!!!!`;
                console.log(verifica, scelta);
            }else if(!(verifica) && sceltaPariDispari === "pari"){
                outputPariDispari.innerHTML = `La somma del numero scelto da te ${numeroUtente} <br> e il numero random scelto dal computer "${numeroPc}" <br> la loro somma è uguale ${pariDispari(numeroPc, parseInt(numeroUtente))} <br> HAI PERSO!!!!`;
                console.log(verifica, scelta);
            }else{
                outputPariDispari.innerHTML = "Inserisci i dati corretti !"
            }

    }
});

//funzioni 
//funzione crea numero random
function getRandomNumber(min, max){

    return  Math.floor(Math.random() * (max - min +1) + min );
  
  }
// funzionse per verificare se e dispari o pari 
function pariDispari(num1,num2) {
    
    let sum = num1 + num2;

    console.log(sum);

    if(sum % 2){
        verifica = false;
        scelta = "dispari";
    }else{
        verifica = true; 
        scelta = "pari";
       }

    return sum;

  }

