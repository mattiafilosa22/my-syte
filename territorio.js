//Foglio js territorio
//Funzione che sostituisce i nodi presenti nel riquadro: titolo, paragrafo e immagine eventuale.//
function sostituisciNodi(titolo, paragrafo, immagine) {
   var nodoTesto = document.createTextNode(titolo);
   var nodoTesto2 = document.createTextNode(paragrafo);
	var nodoImmagine = document.createElement("img");
   nodoTitolo.replaceChild(nodoTesto, nodoTitolo.firstChild);
	nodoP.replaceChild(nodoTesto2, nodoP.firstChild);
	nodoRisultato.replaceChild(nodoImmagine, nodoRisultato.lastChild);
   nodoImmagine.setAttribute("src", immagine);
}
//Gestore che genera un riquadro diverso a seconda dell'id selezionato dall'utente.//
function gestoreGenera() {
   try {
		var i = 0;
		while (i < libreria.length) {
			if (libreria[i].id == this.getAttribute("id")) {
				var img = libreria[i].src;
				var title = libreria[i].nome;
				var par = libreria[i].descrizione;
				sostituisciNodi(title, par, img);
				}
			i++;	
		}
    } catch (e) {
        alert("gestoreGenera " + e);
    }
}
//Variabili globali
var libreria = [];
var territorio;
var nodoTitolo;
var nodoDescrizione; 
var nodoRisultato;
var nodoP;
var testo;
//Gestore Load
function gestoreLoad(){
	try{
		nodoTitolo = document.getElementById("title");
		territorio = document.getElementsByClassName("territorio");
		nodoDescrizione = document.getElementById("descrizione");
		nodoRisultato = document.getElementById("risultato");
		nodoP = document.createElement("p");
		testo = document.createTextNode("");
		nodoP.appendChild(testo);
		nodoDescrizione.appendChild(nodoP);
		var i = 0; 
		while(i < territorio.length) {
            territorio[i].onclick = gestoreGenera;
				i++;
				}
	}	catch (e){
		alert("gestoreLoad " + e);
	}
}
window.onload = gestoreLoad;
//Contenuti
var libreria = [
	{
		id : "promontorio",
		nome: "Promontorio",
		src : "img/promontorio.png",
		descrizione : "Il promontorio di Piombino si eleva a nord dell'omonima città, nella parte meridionale della provincia di Livorno."+
						  " In origine era un'isola dell'arcipelago toscano, che a causa di processi geologici per azione del fiume Cornia,"+ 
			           " si è collegata alla terraferma, formando la zona dove oggi sorge la città di Piombino. Il promontorio, che si sviluppa"+ 
				        " per circa 7 km, è costituito da coste alte e rocciose e le vette che lo caratterizzano sono quelle del Poggio Guardiola,"+ 
				        " Monte Massoncello, Monte Gigante, Monte Santa Maria e Monte Vento. In corrispondenza, da nord a sud, esso si articola alle"+ 
				        " pendici nel golfo di Baratti, Cala Buia, Buca delle Fate, Cala San Quirico e Cala del Termine, Spiaggia Lunga, penisola"+ 
				        " di Punta Falcone, per finire con la rinomata Cala Moresca che sfocia nella punta di Piazza Bovio. Una curiosità: il promontorio"+ 
				        " delimita il confine tra Mar Tirreno e Mar Ligure."
	},
	{ 
		id : "clima",
		nome: "Clima",
		src : "img/clima.png",
		descrizione : "Il clima di Piombino è mite con una temperatura media annua attorno ai 16 °C. Essendo una città di mare, d'estate vanta un clima molto"+ 
				        " caldo, con la prevalenza dei venti che soffiano da sud (in particolar modo l'Ostro); mentre d'inverno la temperatura difficilmente scende"+ 
			           " sotto lo 0 °C. A causa delle scarse precipitazioni, in primavera ed estate si possono verificare periodi di siccità."+
			           " Una curiosità: dal 1946 al 1955 è stata attiva la stazione meteorologica di Piombino. I dati sopra riportati fanno appunto riferimento a quel decennio."
	},
	{
		id : "centro",
		nome : "Centro storico",
		src : "img/centro01.png",
		descrizione : "Con l'espressione 'Centro storico di Piombino' intendiamo la zona della città che un tempo era delimitata dalle mura leonardesche."+ 
				        " Alcune architetture sono tuttoggi in piedi come il Palazzo Comunale, la Casa delle Bifore, Palazzo Appiani, Torrione, Rivellino,"+ 
			           " il Castello, il Semaforo. Con esse vi erano una serie di chiese caratteristiche, la più importante delle quali era ed è tuttora la"+ 
			           " Concattedrale di Sant'Antimo."
	}
];