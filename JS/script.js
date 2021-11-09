/*Scrivere un programma che crea le classi persona. Ogni persona ha un nome, cognome, telefono e mail e i seguenti metodi:
- stampa telefono;
- modifica telefono; 
- stampa mail; 
- modifica mail; 
- stampa nome completo.
Aggiungere due entità: dipendente e cliente. Ogni dipendente ha anche un salario mensile e il numero di ferie. 
Ogni cliente ha un totale conto che mostra i soldi spesi mensilmente.

Aggiungere tre dipendente e due clienti con i dati relativi agli ultimi sei mesi.

Stampare a video la lista dei dipendenti con il salario mensile e la lista dei clienti con i soldi spesi mensilmente. 

Aggiungere un bottone che al click mostra il guadagno dell'azienda (somma i conti dei clienti e sottrae i soldi dei dipendenti)*/

class Persona {
    constructor(nome,cognome,telefono,email){
        this.nome = nome;
        this.cognome = cognome;
        this.telefono = telefono;
        this.email = email;
    }
    stampaTelefono(){
        console.log("Il numero di telefono è: " + this.telefono);
        return this.telefono;
    }
    modificaTelefono(nuovoTelefono){
        console.log("Il vecchio numero di telefono è: " + this.telefono);
        this.telefono = nuovoTelefono;
        console.log("Il nuovo numero di telefono è: " + this.telefono);       
        return nuovoTelefono;
    }
    stampaEmail(){
        console.log("L'indirizzo email è: " + this.email);
        return this.email;
    }
    modificaEmail(nuovaEmail){
        console.log("Il tuo vecchio indirizzo email è: " + this.email);
        this.email = nuovaEmail;
        console.log("Il tuo nuovo indirizzo email è: " + this.email);       
        return nuovaEmail;
    }
    stampaNomeCompleto(){
        console.log("Il nome completo è: " + this.nome + " " + this.cognome);
    }    
}
class Dipendente extends Persona {
    constructor(nome, cognome, telefono, email, salario, ferie){
        super(nome, cognome, telefono, email);
        this.salario = salario;
        this.ferie = ferie;
    }
    stampaSalarioMese(mese) {
        console.log("Il salario del mese " + mese + " è " + this.salario[mese-1] + " €");
        return this.salario[mese-1];
    }
    mostraTotaleRetribuzione(){
        let totale=0;
        for (let i=0;i<this.salario.length;i++){
            totale += this.salario[i];
        }
        return parseInt(totale);
    }
    speseTotaliDipendenti(){
        let totale = 0;
        for (let i=0;i<this.salario.length;i++){
            totale += this.salario[i];
        }
        return totale;

    }
}
class Cliente extends Persona {
    constructor(nome, cognome, telefono, email, totaleconto){
        super(nome,cognome,telefono,email);        
        this.totaleconto = totaleconto;
    }
    MostraTotaleConto(mese){
        console.log("Il totale speso nel mese " + mese + " è " + this.totaleconto[mese-1] + " €");
        return this.totaleconto[mese-1];
    }
    mostraTotaleAnno(){
        var totale=0;
        for (let i=0;i<this.totaleconto.length;i++){
            totale += this.totaleconto[i];
        }
        return totale;
    }
}
//creo i dipendenti ed i clienti
let dipendente1 = new Dipendente("Mario","Rossi","338852962","mariorossi@tin.it", [1000,1120,1200,1300,1222,1300,1222,1100,2000,1300,1100,1120], [200,10000,2200,1400,1200,1300,1222,1300,1222,1100,50,150]);
let dipendente2 = new Dipendente("Gianni","Bianchi","338852962","giannibianchi@test.it", [1300,1124,1500,1700,1222,1300,1222,1600,2500,1300,1100,1120], [200,10000,2200,1400,1200,1300,1222,1300,1222,1100,50,150]);
let dipendente3 = new Dipendente("Nick","Caruso","338852962","nickcaruso@test.it", [1000,1120,1200,1300,1422,1300,1222,1100,2000,1300,1100,1120], [200,10000,2200,5000,1200,1300,1222,1300,1222,1100,50,150]);
let cliente1 = new Cliente("Claudio","Campisi","6765757","claudiocampisi@test.it", [1000,1120,1200,1300,1522,1300,1222,1100,4000,1300,1100,1120], [200,10000,2200,1400,1200,1300,1222,1300,2000,1100,50,150]);
let cliente2 = new Cliente("Claudio","cannarella","6765757","claudiocannarella@test.it", [1000,5120,1200,1300,1222,1300,1222,1100,2000,5800,1100,1120], [200,1000,2200,1400,1200,1300,1222,1300,1222,1100,50,150]);
let cliente3 = new Cliente("Francesco","Blandini","6765757","francescoblandini@test.it", [10000,1120,1200,1300,1222,1300,5556,1100,2000,1300,1100,1120], [200,10000,2200,1400,1200,1300,1222,1300,1222,1100,50,150]);
//trasformo in array
var arrayDipendenti = [dipendente1, dipendente2, dipendente3];
var arrayClienti = [cliente1, cliente2, cliente3];
//inietto nella tablella dipendenti
var injectTabellaDipendenti = document.getElementById("tabella-dipendenti");
var stringaCompleta ="";
for (let i=0;i<arrayDipendenti.length; i++){
    var stringaMesi="";    
    for (let j=0;j<arrayDipendenti[i].salario.length;j++){
        stringaMesi += "<td>"+ arrayDipendenti[i].salario[j] + " €</td>";                
    }    
    stringaCompleta += "<tr><td>" + arrayDipendenti[i].nome + "</td><td>"+ arrayDipendenti[i].cognome + "</td>" + stringaMesi + "<td> " + arrayDipendenti[i].mostraTotaleRetribuzione() + "€ </td></tr>";    
    injectTabellaDipendenti.innerHTML = stringaCompleta;    
}
//inietto nella tablella clienti
var injectTabellaClienti = document.getElementById("tabella-clienti");
var stringaCompleta ="";
for (let i=0;i<arrayClienti.length; i++){
    var stringaMesi="";    
    for (let j=0;j<arrayClienti[i].totaleconto.length;j++){
        stringaMesi += "<td>"+ arrayClienti[i].totaleconto[j] + " €</td>";                
    }    
    stringaCompleta += "<tr><td>" + arrayClienti[i].nome + "</td><td>"+ arrayClienti[i].cognome + "</td>" + stringaMesi + "<td>" + arrayClienti[i].mostraTotaleAnno() + "€ </td></tr>";    
    injectTabellaClienti.innerHTML = stringaCompleta;
}

var element = document.getElementById("output-guadagni");
var htmlInjectSpeseDipendenti = document.getElementById("spese-dipendenti");
var htmlInjectRicaviCommittenti = document.getElementById("ricavi-committenti");
var htmlInjectSaldo2020 = document.getElementById("saldo-2020");
//al click mostro il div aggiungendo la classe show
document.getElementById("calcola-guadagno").addEventListener("click", function() {
    element.classList.add("show");    
})
//inietto i totali
htmlInjectRicaviCommittenti.innerHTML = totaleGlobaleRicavi();
htmlInjectSpeseDipendenti.innerHTML = totaleGlobaleRetribuzioni();
htmlInjectSaldo2020.innerHTML = totaleGlobaleRicavi() - totaleGlobaleRetribuzioni();
//funzioni calcolo totali
function totaleGlobaleRetribuzioni(){
    var somma = 0;
    for (let i=0; i<arrayDipendenti.length;i++){
        somma += arrayDipendenti[i].mostraTotaleRetribuzione();        
    }
    return somma;
}
function totaleGlobaleRicavi(){
    var sommaRetr = 0;
    for (let i=0; i<arrayClienti.length;i++){
        sommaRetr += arrayClienti[i].mostraTotaleAnno();        
    }
    return sommaRetr;
}