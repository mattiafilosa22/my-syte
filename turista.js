//Foglio js per sezione turista
//Funzione che rimuove tutti i figli di un nodo.
function rimuoviFigli (nodo) {
	while (nodo.childNodes.length > 0) {
		nodo.removeChild(nodo.firstChild);
	}
}
//Funzione che dato un nodo crea una lista a esso collegata.
function creaLista (nodoLista, elementi) {
	for (var i = 0; i < elementi.length; i++) {
		var elemento = elementi[i];
		var nodoElemento = document.createElement("li");
		nodoLista.appendChild(nodoElemento);
		var nodoTesto = document.createTextNode(elemento);
		nodoElemento.appendChild(nodoTesto);
	}
}

function creaSelect (nodoSelect, opzioni) {
	rimuoviFigli(nodoSelect);
	for (var i = 0; i < opzioni.length; i++) {
		var nodoOpzione = document.createElement("option");
		var nodoTesto = document.createTextNode(opzioni[i]);
		nodoOpzione.appendChild(nodoTesto);
		nodoSelect.appendChild(nodoOpzione);
	}
}
//Funzione che aggiunge in prima posizione un'opzione a un menù esistente
function aggiungiPrimaOpzione (nodoSelect, opzione) {
	var nodoOpzione = document.createElement("option");
	nodoOpzione.value = opzione;
	var nodoTesto = document.createTextNode(opzione);
	nodoOpzione.appendChild(nodoTesto);
	nodoSelect.insertBefore(nodoOpzione, nodoSelect.firstChild);
	nodoSelect.value = opzione;
}
//Funzione che scandisce l'array contenitore e crea un array associativo che contiene i nomi del tipo scelto dall'utente.
function ricercaNomi (tipo) {
	var nomi = [];
	for (var i = 0; i < contenitore.length; i++){
		var ogg = contenitore[i];
		if(ogg.tipo == tipo) {
			nomi.push(ogg.nome);
		}
	}
	return nomi;
}
function ricercaMultipla (tipo, nome){
	var percorsi = [];
	for (var i = 0; i < contenitore.length; i++) {
		var ogg = contenitore[i];
		if (ogg.tipo == tipo && ogg.nome == nome) {
			percorsi.push(ogg.percorso);
			}
	}
	return percorsi;
}

//Funzione che si occupa di far visualizzare al momento del caricamento l'opzione di scelta "--tipo--" e poi filtra tra tutti i percorsi quelli che hanno come tipo quello scelto.
function gestoreTipo () {
	try{
		var tipo = nodoTipi.value;
		var tipi = ["Centro", "Spiagge", "Museo"];
		var nomi = ricercaNomi(tipo);
		creaSelect(nodoNomi, nomi);
		aggiungiPrimaOpzione(nodoNomi, "--- Nome ---");
	} catch (e) {
		("gestoreTipo "+ e);
	}
}
//Funzione composta da una prima parte in cui si individuano le voci dei due menu relative alla scelta dell'utente, la seconda crea i percorsi che soddisfano la ricerca.
function gestoreNomi () {
	try{
		var tipo = nodoTipi.value;
		var nome = nodoNomi.value;
		var nomi = ricercaNomi (tipo);
		creaSelect(nodoNomi, nomi);
		nodoNomi.value = nome;
		var percorsi = ricercaMultipla(tipo, nome);
		rimuoviFigli(nodoItinerario);
		creaLista(nodoItinerario, percorsi);
	} catch (e){
		alert("gestoreNomi "+ e);
	}
}
//Variabili globali
var nodoNomi;
var nodoTipi;
var nodoItinerario;
//Gestore Load
function gestoreLoad (){
	try{
		nodoTipi = document.getElementById("tipo");
		nodoNomi = document.getElementById("nome");
		nodoItinerario = document.getElementById("itinerario");
		var tipi = ["Centro", "Spiagge", "Museo"];
		creaSelect(nodoTipi,tipi);
		aggiungiPrimaOpzione(nodoTipi, "--- Tipo ---");
		aggiungiPrimaOpzione(nodoNomi, "--- Nome ---");
		nodoTipi.onchange = gestoreTipo;
		nodoNomi.onchange = gestoreNomi;
	} catch (e){
		alert ("gestoreLoad "+e);
	}
}

window.onload = gestoreLoad;

//Conteunti
var contenitore = [
	{
		tipo : "Centro",
		nome : "Palazzo comunale",
		percorso : "Il Palazzo Comunale di Piombino si trova in corso Vittorio Emanuele II,"+ 
					  " angola via Ferruccio, ed è affiancato dalla Torre dell'Orologio. Raggiungibile"+
					  " a piedi poichè situato in zona pedonale."
	},
	{
		tipo : "Centro",
		nome : "Palazzo Appiani",
		percorso : "L'ex residenza dei signori di Piombino si trova nella piazza più affascinante della"+
					  " città, Piazza Bovio. Raggiungibile a piedi poichè situata in zona pedonale."
	},
	{
		tipo : "Centro",
		nome : "Rivellino",
		percorso : "Il complesso del Torrione e Rivellino è un'architettura militare di Piombino."+
					  " Situato nei pressi di Piazza Verdi può essere raggiunta sia a piedi venendo da"+
					  " Corso Italia, oppure parcheggiando l'auto in Via Ferrer."
	},
	{
		tipo : "Centro",
		nome : "Castello",
		percorso : "Il castello di Piombino è situato lungo Viale del Popolo, consentendo ai turisti una"+
		           " bellissima passeggiata lungo il mare. Può essere raggiunto sia a piedi venendo dal centro"+
					  " storico, oppure lasciando la macchina al parcheggio in cima a Viale del Popolo."
	},
	{
		tipo : "Spiagge",
		nome : "Baratti",
		percorso : "Raggiungibile in auto/moto direttamente dalla strada asfaltata diretta verso Populonia Alta (borgo arroccato a dominio del golfo)"+ 
					  " che proviene da 'La Principessa', strada provinciale da Piombino a San Vincenzo. Di fronte ai vari accessi alla spiaggia sono presenti dei parcheggi."+ 
					  " Inoltre, può essere raggiunta tramite bus di linea pubblica in partenza da Piombino."
	},
	{
		tipo : "Spiagge",
		nome : "Pontedoro",
		percorso : "Raggiungibile in auto/moto attraverso una strada sterrata che si dirama dalla strada della base geodetica. Facilmente accessibile anche ai disabili."
	},
	{
		tipo : "Spiagge",
		nome : "Fosso alle canne",
		percorso : "Raggiungibile soltanto a piedi o in mountain-bike partendo dal parcheggio della vicina spiaggia di Calamoresca proseguendo"+ 
						" per Via dei Cavalleggeri."
	},
	{
		tipo : "Spiagge",
		nome : "Buca delle fate",
		percorso : "Raggiungibile soltanto in barca o a piedi partendo dal parcheggio del “reciso” che si trova sulla strada prima di arrivare al"+
					  " borgo di Populonia alta."
	},
	{
		tipo : "Spiagge",
		nome : "Calamoresca",
		percorso : "Distanza dal centro cittadino: Km 3, raggiungibile in discesa dal parcheggio auto/moto attraverso un ampio stradello cementato"+ 
				     " percorribile soltanto a piedi (5 min) o in bicicletta. Inoltre vi è un servizio di autobus pubblici"+ 
					  " in partenza dal capolinea nel centro di Piombino. Facilmente accessibile ai disabili."
	},
	{
		tipo : "Spiagge",
		nome : "Canaletto",
		percorso : "Raggiungibile a piedi tramite una comoda scalinata in discesa dal piano stradale posto sulla costa alta e rocciosa su cui verte la città,"+ 
					  " Via Lungomare Marconi, oppure in autobus urbano in partenza dal capolinea della città."
	},
	{
		tipo : "Spiagge",
		nome : "Pozzino",
		percorso : " Raggiungibile via mare, e via terra dalle strade della Principessa o da un viottolino lungo costa."
	},
	{
		tipo : "Spiagge",
		nome : "Salivoli",
		percorso : "Raggiungibile a piedi passando per Via Lungomare Marconi e proseguendo verso il quartiere Salivoli; oppure in auto arrivando dal centro."+
				     " Di fronte alla spiaggia è possibile parcheggiare l'auto."
	},
	{
		tipo : "Museo",
		nome : "Museo archeologico di Populonia",
		percorso : "Indirizzo: Piazza Cittadella, 8, 57025 Piombino(LI).Il Museo Archeologico del Territorio di Populonia, inaugurato nel 2001,"+ 
		           " contiene reperti provenienti da quello che era l'antico territorio di Populonia per un periodo che va dalla preistoria alla"+ 
					  " tarda antichità."
	},
	{
		tipo : "Museo",
		nome : "Museo del castello",
		percorso : "Indirizzo: Via delle Mura, 57025 Piombino (LI). Situato all'interno del Castello di Piombino, nel cuore del Centro Storico della città."
	},
	{
		tipo : "Museo",
		nome : "Museo del mare",
		percorso : "Indirizzo: Piazza Giovanni Bovio, 5, 57025 Piombino(LI). Il Museo del Mare e acquario Città di Piombino si trova in piazza Bovio a Piombino,"+ 
		           " dentro palazzo Appiani, ex residenza dei Signori di Piombino "
	},
	{
		tipo : "Museo",
		nome : "Museo di entomologia",
		percorso : "Indirizzo: Via Amedeo Modigliani, 57025 Piombino(LI).Il Museo di entomologia si trova a Piombino, nel cuore del quartiere storico Salivoli."+ 
					  " La raccolta comprende la quasi totalità degli ordini tassonomici degli insecta, chiaramente esposti in una serie di vetrine didattiche."
	},
	{
		tipo : "Museo",
		nome : "Acropoli di Populonia",
		percorso : "Indirizzo: Populonia Alta, situata nell'omonima città, ma nella parte alta. Raggiungibile in auto da Piombino prendendo la strada provinciale 'La Principessa'"+
		           " e poi svoltando verso Baratti seguendo l'indicazione per Populonia Alta."
	},
	{
		tipo : "Museo",
		nome : "Museo etrusco di Populonia",
		percorso : "Indirizzo: Via di Sotto, 8, 57025 Populonia(LI). Raggiungibile in auto da Piombino prendendo la strada provinciale 'La Principessa'"+
		           " e poi svoltando verso Baratti finchè non si trova l'indicazione per Populonia Alta."
	}
];