import type { PageTranslation } from '../../data/types';

/** Italiano. Keys are the English slugs. */
export const it: Record<string, PageTranslation> = {
  '': {
    slug: '',
    nav: 'Test microfono',
    blurb: 'Controlla il microfono con un misuratore in tempo reale, la riproduzione e i dettagli del dispositivo.',
    title: 'Test microfono: prova il tuo microfono online gratis | HearMyMic',
    description:
      'Testa il tuo microfono in pochi secondi. Guarda il livello in tempo reale, registra 5 secondi e riascoltali. Gratuito, privato, senza installare nulla.',
    h1: 'Test microfono',
    lede: 'Controlla che il microfono funzioni e ascolta come suoni. È gratis, richiede pochi secondi e funziona interamente nel tuo browser.',
    introTitle: 'Un modo rapido e privato per controllare il microfono',
    intro: [
      'HearMyMic risponde a due domande prima della tua prossima chiamata, diretta o registrazione: il microfono mi sta captando e come suono? Premi il pulsante, consenti l’accesso e il misuratore si muove mentre parli. Se si muove, il microfono funziona.',
      'Da lì puoi registrare una clip di 5 secondi e riascoltarla, attivare il monitoraggio dal vivo per sentirti in cuffia, oppure scegliere un altro microfono se ne hai più di uno. Tutto viene elaborato sul tuo dispositivo. Nessun audio viene caricato o salvato.',
    ],
    stepsTitle: 'Come testare il microfono',
    steps: [
      {
        title: 'Premi «Testa il mio microfono»',
        body: 'Il browser chiede se questa pagina può usare il microfono. Scegli Consenti. Se non vedi nessuna richiesta, cerca un’icona del microfono o del lucchetto nella barra degli indirizzi.',
      },
      {
        title: 'Parla e osserva il misuratore',
        body: 'Parla con il tuo volume normale. La forma d’onda e la barra del livello dovrebbero reagire subito. Un livello verde stabile con la valutazione «Buono» significa che ti si sente bene.',
      },
      {
        title: 'Registra 5 secondi e ascolta',
        body: 'Premi Registra, di’ una o due frasi, poi premi play. È la cosa più vicina a sentirti come ti sentono gli altri.',
      },
      {
        title: 'Correggi ciò che non va',
        body: 'Troppo basso, con eco o muto? La valutazione del livello e il pannello «Il tuo microfono» indicano la causa, e le guide alla risoluzione dei problemi ti accompagnano nella soluzione.',
      },
    ],
    guide: [
      {
        heading: 'Cosa puoi fare con HearMyMic',
        body: [
          'HearMyMic è un test gratuito per microfono e webcam che funziona nel browser. Riunisce i controlli di cui di solito si ha bisogno, così non devi installare un’app né entrare in una chiamata solo per scoprire se ti sentono.',
          '- Misuratore e forma d’onda in tempo reale: mostrano la tua voce mentre parli, così vedi a colpo d’occhio se il microfono ti capta.',
          '- Registra e riascolta: cattura 5 secondi da ascoltare, il modo più vicino per sentire ciò che sentono gli altri.',
          '- Ascoltati dal vivo: manda il microfono alle cuffie in tempo reale, utile per posizionarlo o controllare i rumori.',
          '- Dettagli del dispositivo: mostrano nome del microfono, frequenza di campionamento e canali, e se cancellazione dell’eco, riduzione del rumore e controllo automatico del guadagno sono attivi.',
          '- Selettore del microfono: ti permette di passare da un microfono collegato all’altro senza lasciare la pagina.',
          '- Controllo della webcam: la pagina del test webcam e microfono aggiunge un’anteprima della fotocamera accanto al misuratore di livello.',
        ],
      },
      {
        heading: 'Quando vale la pena fare un test del microfono',
        body: [
          'Fai un test ogni volta che cambia qualcosa nella tua configurazione: delle cuffie nuove, un portatile nuovo, un aggiornamento del browser o del sistema che potrebbe aver reimpostato le tue impostazioni di privacy. Vale la pena anche un minuto prima di qualcosa di importante, come un colloquio di lavoro, un esame online, la registrazione di un podcast o una diretta.',
          'I giocatori lo usano per verificare che le cuffie funzionino prima di entrare nella chat vocale, e studenti e insegnanti prima delle lezioni online. Se ti hanno detto che suoni basso, lontano o robotico, una registrazione qui ti aiuta a sentire il problema e a capire se dipende dal microfono, dalla stanza o dall’app.',
        ],
      },
      {
        heading: 'Quale test fa per te',
        body: [
          'Il test qui sopra è lo stesso in ogni pagina, ma ogni pagina è scritta per un compito diverso. Se vuoi giudicare il tuo suono, usa il test del microfono con registrazione. Se vuoi ascoltarti mentre parli, prova il test per sentirti. Prima di una videochiamata, il test di webcam e microfono controlla immagine e audio insieme.',
        ],
      },
      {
        heading: 'Cosa significa la valutazione del livello',
        body: [
          'Il misuratore indica quanto è forte il segnale del microfono rispetto al segnale più forte che il browser può acquisire. La valutazione lo traduce in parole semplici.',
          '- Basso: la tua voce arriva al microfono, ma a malapena. Potrebbero chiederti di parlare più forte. Avvicinati o alza il volume di ingresso nelle impostazioni di sistema.',
          '- Buono: un livello sano per chiamate e registrazioni, con margine quando ridi o alzi la voce.',
          '- Alto: il segnale è vicino al massimo. I suoni forti possono distorcere. Allontanati un po’ o abbassa il volume di ingresso.',
          'La valutazione è una guida, non una misura di laboratorio. Il controllo automatico del guadagno, che molti browser attivano di default, regola di continuo il tuo livello, quindi il valore oscilla un po’.',
        ],
      },
      {
        heading: 'Cosa mostra il pannello «Il tuo microfono»',
        body: [
          'Quando il test è in corso, il pannello sotto lo strumento elenca ciò che il browser segnala sul microfono aperto: il nome del dispositivo, la frequenza di campionamento, il numero di canali e se cancellazione dell’eco, riduzione del rumore e controllo automatico del guadagno sono attivi.',
          'Il nome del dispositivo è la riga più utile. Se c’è scritto «Webcam» quando ti aspettavi le cuffie, hai trovato il problema. Scegli il microfono giusto dall’elenco che compare quando ne sono collegati più di uno.',
          'La latenza stimata è il ritardo che il browser segnala tra l’acquisizione del suono e la sua riproduzione. Alcuni browser non la segnalano affatto, e in tal caso il pannello lo indica.',
        ],
      },
      {
        heading: 'Modi rapidi per migliorare il suono',
        body: [
          'Poche piccole modifiche fanno più differenza della maggior parte degli upgrade. Testa dopo ciascuna per vedere quale aiuta.',
          '- Distanza: tieni vicino l’asta delle cuffie o il microfono da scrivania, a circa una spanna dalla bocca. Dimezzare la distanza ti rende molto più forte rispetto alla stanza.',
          '- Stanza: pareti dure e pavimenti nudi aggiungono eco. Tende, un tappeto o qualche cuscino lo attenuano.',
          '- Rumore: spegni ventilatori e chiudi le finestre se puoi, e tieni il microfono lontano dalle prese d’aria del computer.',
          '- Cuffie: indossale durante le chiamate, così la voce dell’altra persona non torna dagli altoparlanti al microfono.',
          '- Livello: parla normalmente e punta a un «Buono» stabile. Se non lo è, regola il volume di ingresso nelle impostazioni audio di sistema.',
        ],
      },
      {
        heading: 'È sicuro consentire l’accesso al microfono?',
        body: [
          'Sì. Il test gira come codice dentro la scheda del tuo browser. Il tuo audio va dal microfono al misuratore sul tuo schermo e da nessun’altra parte. Non c’è nessun account, nessun caricamento e nessuna registrazione lato server. La clip di 5 secondi vive nella memoria del browser e sparisce quando chiudi o ricarichi la pagina.',
          'Puoi revocare il permesso in qualsiasi momento dall’icona del lucchetto o delle impostazioni nella barra degli indirizzi.',
        ],
      },
      {
        heading: 'Cosa questo test non può dirti',
        body: [
          'HearMyMic misura ciò che il browser può vedere. Non può valutare qualità da studio come la risposta in frequenza e non può guardare dentro altre app, che aggiungono una loro elaborazione. Non testa nemmeno gli altoparlanti o la connessione a internet, quindi una chiamata può comunque andare a scatti con un microfono perfetto.',
          'Se il test va bene ma un’app continua a non sentirti, controlla l’impostazione del dispositivo di ingresso di quell’app e il suo permesso per il microfono nel sistema operativo.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Come faccio a sapere se il mio microfono funziona?',
        a: 'Premi «Testa il mio microfono», consenti l’accesso e parla. Se il misuratore di livello e la forma d’onda si muovono con la tua voce, il microfono funziona. Per un secondo controllo, registra 5 secondi e riascoltali.',
      },
      {
        q: 'Perché il misuratore non si muove quando parlo?',
        a: 'Le cause più comuni sono un microfono silenziato (controlla l’interruttore sulle cuffie o sul cavo), il microfono sbagliato selezionato o il volume di ingresso impostato a zero nelle impostazioni audio di sistema. Se il test non parte proprio, il browser sta probabilmente bloccando l’accesso al microfono.',
      },
      {
        q: 'HearMyMic registra o salva la mia voce?',
        a: 'No. Il tuo audio viene elaborato nel browser e non viene mai inviato a un server. La registrazione facoltativa di 5 secondi resta nella memoria del browser per la riproduzione e viene eliminata quando esci o ricarichi la pagina.',
      },
      {
        q: 'Devo installare qualcosa?',
        a: 'No. Il test funziona nelle versioni recenti di Chrome, Edge, Firefox e Safari su computer, telefoni e tablet. Non c’è nulla da scaricare e nessuna registrazione.',
      },
      {
        q: 'Posso testare delle cuffie, un microfono USB o gli AirPods?',
        a: 'Sì. Funziona qualsiasi microfono riconosciuto dal tuo dispositivo, compresi quelli integrati, le cuffie con filo e Bluetooth, i microfoni USB e le interfacce audio. Se ne hai più di uno collegato, compare un menu del microfono per testarli uno per uno.',
      },
      {
        q: 'Quanto sono accurati i risultati?',
        a: 'Sono un buon controllo pratico, non una misura calibrata. Livello, impostazioni e latenza provengono da ciò che segnala il browser, e app come Zoom o Discord applicano sopra la loro elaborazione.',
      },
    ],
  },

  'online-mic-test': {
    slug: 'test-microfono-online',
    nav: 'Test microfono online',
    blurb: 'Prova qualsiasi microfono nel browser. Senza download e senza registrazione.',
    title: 'Test microfono online: controlla il microfono nel browser',
    description:
      'Fai un test del microfono online senza scaricare nulla. Guarda il livello in tempo reale, verifica quale microfono usa il browser e trova i problemi.',
    h1: 'Test microfono online',
    lede: 'Prova il microfono qui, nel browser. Nessuna app, nessun account, nessuna attesa.',
    introTitle: 'Perché testare il microfono online?',
    intro: [
      'Un test del microfono online è il modo più veloce per distinguere un problema del microfono da un problema dell’app. Se il microfono funziona su questa pagina, hardware, cavo e impostazioni di sistema vanno bene, e ciò che è andato storto è dentro l’app che usavi. Se non funziona nemmeno qui, sai che devi guardare il microfono stesso, la connessione o i permessi.',
      'Poiché gira nel browser, il test funziona allo stesso modo su un PC Windows, un Mac, un Chromebook o un telefono. Usa lo stesso accesso al microfono su cui si basano gli strumenti di riunione web, quindi è un controllo realistico prima di qualsiasi chiamata fatta in una scheda del browser.',
    ],
    stepsTitle: 'Come funziona il test del microfono online',
    steps: [
      {
        title: 'Avvia il test e consenti l’accesso',
        body: 'Premi «Testa il mio microfono». I browser condividono il microfono con una pagina solo dopo che hai detto di sì, e solo per questo sito.',
      },
      {
        title: 'Conferma che sia in uso il microfono giusto',
        body: 'Guarda il nome del dispositivo nel pannello «Il tuo microfono». I portatili con webcam, cuffie e microfono integrato spesso ne scelgono uno diverso da quello che ti aspetti.',
      },
      {
        title: 'Parla e leggi il livello',
        body: 'Conta fino a dieci con il tuo volume abituale. Punta a un livello nella zona verde e a una valutazione «Buono».',
      },
      {
        title: 'Prova gli altri microfoni',
        body: 'Se hai più di un microfono collegato, usa il menu Microfono per passare dall’uno all’altro e confrontare i livelli senza lasciare la pagina.',
      },
    ],
    guide: [
      {
        heading: 'Cosa può e non può dirti un browser',
        body: [
          'Un test nel browser è bravo con le basi: se un microfono è collegato, se il sito può usarlo, quanto è forte il segnale e quali funzioni di elaborazione sono attive. Questo copre la grande maggioranza dei problemi del tipo «nessuno mi sente».',
          'Non può misurare con precisione qualità da studio come la risposta in frequenza o il rumore proprio. Inoltre i browser elaborano il segnale prima che una pagina lo veda. Cancellazione dell’eco, riduzione del rumore e controllo automatico del guadagno sono di solito attivi di default, il che è ideale per le chiamate ma significa che il livello che vedi è già stato «sistemato».',
        ],
      },
      {
        heading: 'Leggere frequenza di campionamento e canali',
        body: [
          'La frequenza di campionamento indica quante volte al secondo viene misurato il tuo audio. La maggior parte dei dispositivi segnala 44,1 o 48 kHz, e uno qualsiasi dei due è più che sufficiente per una voce chiara. Le cuffie Bluetooth spesso scendono a 16 kHz o meno mentre il microfono è in uso, ed ecco perché le voci suonano più sottili.',
          'Canali indica se il browser ha aperto il microfono in mono o in stereo. Un solo canale è normale e previsto per la voce.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Questo test del microfono online è gratuito?',
        a: 'Sì, completamente. Non ci sono limiti, né prove, né account.',
      },
      {
        q: 'In quali browser funziona?',
        a: 'Funzionano le versioni attuali di Chrome, Edge, Firefox, Safari, Brave e Samsung Internet. I browser integrati in altre app, come quelli che aprono i link dentro Instagram o Facebook, spesso bloccano il microfono, quindi apri la pagina nel tuo browser abituale.',
      },
      {
        q: 'Il microfono funziona qui ma non nella mia app di riunioni. Perché?',
        a: 'Questo indica le impostazioni dell’app stessa. Apri le sue impostazioni audio e assicurati che sia selezionato lo stesso microfono visto qui, che nell’app tu non sia silenziato e che il sistema operativo consenta a quell’app di usare il microfono.',
      },
      {
        q: 'Perché il test mostra un microfono diverso da quello che ho collegato?',
        a: 'I browser partono dal dispositivo di ingresso predefinito del sistema. Scegli il tuo microfono dal menu Microfono dello strumento, oppure cambia l’ingresso predefinito nelle impostazioni audio di sistema.',
      },
      {
        q: 'Il test funziona su un telefono?',
        a: 'Sì. Funziona in Safari su iPhone e iPad e in Chrome su Android. I passaggi sono gli stessi: tocca il pulsante, consenti l’accesso al microfono e parla.',
      },
    ],
  },

  'mic-test-with-playback': {
    slug: 'test-microfono-con-registrazione',
    nav: 'Test microfono con registrazione',
    blurb: 'Registra 5 secondi e riascoltali per sentire come suoni davvero.',
    title: 'Test microfono con registrazione: registrati e riascoltati',
    description:
      'Registra una clip di 5 secondi e riproducila per sentire esattamente come suona il microfono. Test del microfono con riproduzione, gratuito, direttamente nel browser.',
    h1: 'Test microfono con registrazione',
    lede: 'Registra una clip breve e riproducila. È il modo più onesto per scoprire come suoni agli altri.',
    introTitle: 'Ascolta ciò che sentono tutti gli altri',
    intro: [
      'Un misuratore di livello che si muove dimostra che il microfono funziona. Non dice se suoni chiaro, ovattato, lontano o con un ronzio. La riproduzione sì. Registra cinque secondi di voce normale, ascoltali con cuffie o altoparlanti e saprai in un colpo solo se la tua configurazione è pronta.',
      'La registrazione viene creata e conservata solo nella memoria del browser. Non viene caricata e sparisce quando chiudi o ricarichi la pagina.',
    ],
    stepsTitle: 'Come registrare e riascoltare il microfono',
    steps: [
      {
        title: 'Avvia il test',
        body: 'Premi «Testa il mio microfono» e consenti l’accesso al microfono. Controlla che il misuratore si muova quando parli.',
      },
      {
        title: 'Premi «Registra 5 secondi»',
        body: 'Un anello conta alla rovescia mentre parli. Usa la tua voce normale e la tua solita distanza dal microfono, come in una chiamata vera.',
      },
      {
        title: 'Di’ qualcosa di utile',
        body: 'Prova: «Prova, uno, due, tre. Trentatré trentini entrarono a Trento tutti e trentatré trotterellando. Sopra la panca la capra campa.» I suoni T, S e P rivelano subito scoppi e asprezze.',
      },
      {
        title: 'Premi play e ascolta',
        body: 'Ascolta una volta per il volume e una per la qualità. Con le cuffie i problemi si sentono molto meglio che con gli altoparlanti del portatile.',
      },
      {
        title: 'Regola e registra di nuovo',
        body: 'Cambia una cosa alla volta, come la distanza, il volume di ingresso o un altro microfono, poi registra di nuovo e confronta.',
      },
    ],
    guide: [
      {
        heading: 'Cosa ascoltare nella registrazione',
        body: [
          '- Volume: dovresti sentirti bene senza alzare gli altoparlanti. Se sei debole, avvicinati o alza il volume di ingresso.',
          '- Distorsione: crepitii o un bordo aspro e sporco sulle parole forti indicano un segnale troppo alto. Abbassa il volume di ingresso o allontanati.',
          '- Eco della stanza: un suono vuoto, da bagno, arriva da pareti dure e distanza. Avvicinarti al microfono aiuta più di ogni altra cosa.',
          '- Scoppi: i colpi su P e B sono soffi d’aria che investono il microfono. Inclina leggermente il microfono di lato rispetto alla bocca.',
          '- Rumore di fondo: un fruscio, un ronzio o un rumore di ventola sotto la voce. Allontanati dalla fonte o lascia attiva la riduzione del rumore.',
          '- Interruzioni: parole che vanno e vengono indicano spesso una connessione Bluetooth debole o una riduzione del rumore troppo aggressiva.',
        ],
      },
      {
        heading: 'Perché in registrazione suoni diverso',
        body: [
          'Quasi tutti restano sorpresi dalla propria voce registrata. Quando parli, ti senti in parte attraverso le ossa del cranio, che aggiungono frequenze basse che un microfono non coglie mai. La registrazione è più vicina a ciò che sentono gli altri, quindi giudicala per chiarezza e volume, non per quanto somigli alla voce che hai in testa.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Per quanto tempo posso registrare?',
        a: 'Ogni registrazione dura 5 secondi, abbastanza per valutare volume e chiarezza. Puoi registrare di nuovo quante volte vuoi. Ogni nuova registrazione sostituisce la precedente.',
      },
      {
        q: 'Dove viene salvata la mia registrazione?',
        a: 'In nessun posto in modo permanente. La clip resta nella memoria del browser per la riproduzione e non viene mai caricata. Chiudere o ricaricare la scheda la elimina.',
      },
      {
        q: 'Perché non sento nulla quando premo play?',
        a: 'Controlla che altoparlanti o cuffie non siano silenziati e che il misuratore si sia mosso durante la registrazione. Se è rimasto fermo, il microfono non ti captava. Su iPhone, alza anche il volume dei contenuti multimediali con i tasti laterali.',
      },
      {
        q: 'Perché la registrazione suona bassa o ovattata?',
        a: 'Di solito il microfono è troppo lontano, il volume di ingresso è basso o è attivo un altro microfono, ad esempio quello integrato nel portatile al posto delle cuffie. Controlla prima il nome del dispositivo nel pannello «Il tuo microfono».',
      },
      {
        q: 'La registrazione suonerà uguale su Zoom o Discord?',
        a: 'Simile, ma non identica. Ogni app applica la propria riduzione del rumore e compressione. Una registrazione pulita qui è un buon segno che suonerai bene anche lì.',
      },
    ],
  },

  'hear-yourself-mic-test': {
    slug: 'test-microfono-ascoltarsi',
    nav: 'Test microfono: ascoltarsi',
    blurb: 'Ascolta il tuo microfono dal vivo nelle cuffie.',
    title: 'Test microfono per ascoltarsi: senti il tuo mic dal vivo',
    description:
      'Ascolta il tuo microfono in tempo reale. Attiva il monitoraggio dal vivo per controllare suono, cuffie e livelli mentre parli. Gratuito e privato.',
    h1: 'Test microfono: ascoltarsi',
    lede: 'Attiva «Ascoltati dal vivo» per sentire il microfono in tempo reale. Indossa prima le cuffie.',
    introTitle: 'Monitoraggio dal vivo, direttamente nel browser',
    intro: [
      'A volte non vuoi una registrazione. Vuoi sentire il microfono mentre parli, per spostarlo, regolare il volume e accorgerti dei problemi nel momento in cui accadono. L’interruttore «Ascoltati dal vivo» manda il microfono direttamente alle cuffie mentre il test è in corso.',
      'È disattivato di default per un buon motivo. Se il microfono sente gli altoparlanti, il suono gira in tondo e cresce fino a diventare un fischio forte. Con le cuffie quel circuito non può formarsi.',
    ],
    stepsTitle: 'Come ascoltarti attraverso il microfono',
    steps: [
      {
        title: 'Indossa le cuffie',
        body: 'Cuffie o auricolari con filo funzionano meglio. Aggiungono meno ritardo e impediscono agli altoparlanti di rientrare nel microfono.',
      },
      {
        title: 'Avvia il test',
        body: 'Premi «Testa il mio microfono» e consenti l’accesso al microfono. Assicurati che il misuratore di livello risponda alla tua voce.',
      },
      {
        title: 'Attiva «Ascoltati dal vivo»',
        body: 'Sposta l’interruttore. Dovresti sentire subito la tua voce nelle cuffie. Parti con il volume basso e alzalo gradualmente.',
      },
      {
        title: 'Ascolta mentre regoli',
        body: 'Avvicina e allontana il microfono, batti sulla scrivania, accartoccia un foglio. Sentirai esattamente ciò che il microfono capta mentre cambi le cose.',
      },
      {
        title: 'Spegnilo quando hai finito',
        body: 'Riporta l’interruttore indietro o premi Stop. Il monitoraggio termina anche appena lasci la pagina.',
      },
    ],
    guide: [
      {
        heading: 'Perché c’è un leggero ritardo',
        body: [
          'La tua voce deve viaggiare dal microfono attraverso il sistema audio del computer e il browser, e tornare alle cuffie. Il viaggio richiede tempo, di solito pochi centesimi di secondo con una configurazione cablata. Lo noterai come un lieve raddoppio della tua voce.',
          'Le cuffie Bluetooth ne aggiungono molto di più, spesso un quinto di secondo o oltre, perché l’audio viene compresso e inviato via etere in entrambe le direzioni. È normale e non è un difetto del microfono. Per il monitoraggio più immediato, usa cuffie con filo.',
          'La riga «Latenza stimata» nel pannello mostra il ritardo segnalato dal browser. Consideralo un valore indicativo. Non tutti i browser segnalano ogni tratto della catena.',
        ],
      },
      {
        heading: 'Monitoraggio dal vivo o riproduzione: quale usare',
        body: [
          'Usa il monitoraggio dal vivo per posizionare un microfono, impostare il livello o cercare ronzii e rumore di fondo mentre sposti le cose. Usa la registrazione di 5 secondi quando vuoi giudicare come suoni davvero, perché è difficile ascoltare in modo critico mentre si parla.',
          'Se vuoi sentire sempre il microfono nelle cuffie, anche durante giochi e chiamate, è un’impostazione del sistema o delle cuffie, di solito chiamata «sidetone» o monitoraggio del microfono.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Perché dovrei usare le cuffie per questo test?',
        a: 'Senza cuffie, il microfono capta il proprio suono dagli altoparlanti, che viene amplificato e captato di nuovo. Quel circuito diventa un ululato forte in un secondo o due. Le cuffie tengono il suono fuori dal microfono.',
      },
      {
        q: 'Ho attivato «Ascoltati dal vivo» ma non sento nulla. Cosa c’è che non va?',
        a: 'Controlla che il misuratore di livello si muova, che il volume delle cuffie sia alto e che il suono vada all’uscita che stai indossando. Su iPhone, l’interruttore del silenzioso può silenziare il monitoraggio: mettilo su suoneria e alza il volume.',
      },
      {
        q: 'Perché sento un’eco della mia voce?',
        a: 'È il ritardo del monitoraggio. La tua voce raggiunge le orecchie prima direttamente e un attimo dopo attraverso le cuffie. Le cuffie con filo tengono piccolo lo scarto. Con il Bluetooth si nota molto di più.',
      },
      {
        q: 'Il ritardo che sento è lo stesso che sentono gli altri nelle chiamate?',
        a: 'No. Il ritardo di una chiamata dipende dalla connessione internet tra te e l’altra persona. Quello che senti qui è solo il circuito locale dentro il tuo dispositivo.',
      },
      {
        q: 'Posso continuare ad ascoltarmi dopo aver chiuso questa pagina?',
        a: 'No. Il monitoraggio si ferma quando interrompi il test o lasci la pagina. Per sentire il microfono sempre, usa la funzione di monitoraggio del sistema operativo o delle cuffie.',
      },
    ],
  },

  'webcam-and-mic-test': {
    slug: 'test-webcam-e-microfono',
    nav: 'Test webcam e microfono',
    blurb: 'Controlla fotocamera e microfono insieme prima di una videochiamata.',
    title: 'Test webcam e microfono: controlla fotocamera e audio online',
    description:
      'Testa webcam e microfono insieme. Guarda l’anteprima della fotocamera accanto al livello del microfono, registra un controllo audio e preparati per la videochiamata.',
    h1: 'Test webcam e microfono',
    lede: 'Guarda la fotocamera e controlla il microfono allo stesso tempo, così sei pronto prima dell’inizio della chiamata.',
    introTitle: 'Un solo controllo per fotocamera e microfono',
    intro: [
      'Entrare in una videochiamata e scoprire che la fotocamera è nera o il microfono è muto è stressante, ed è evitabile. Questa pagina apre insieme webcam e microfono, mostra un’anteprima dal vivo accanto al livello audio e ti lascia registrare un rapido controllo del suono.',
      'L’anteprima è speculare, come la maggior parte delle app di riunione ti mostra a te stesso. Le altre persone in chiamata ti vedono nel verso giusto. Il video è mostrato solo sul tuo schermo. Non viene registrato, caricato né salvato.',
    ],
    stepsTitle: 'Come testare webcam e microfono insieme',
    steps: [
      {
        title: 'Premi «Testa la mia fotocamera e il microfono»',
        body: 'Il browser chiede sia la fotocamera sia il microfono. Consenti entrambi. Alcuni browser mostrano una sola richiesta, altri ne fanno due.',
      },
      {
        title: 'Controlla l’immagine',
        body: 'Guarda l’anteprima per inquadratura, messa a fuoco e luce. I tuoi occhi dovrebbero stare circa a un terzo dall’alto dell’inquadratura, con la luce sul viso e non alle tue spalle.',
      },
      {
        title: 'Controlla l’audio',
        body: 'Parla normalmente e osserva il misuratore di livello accanto al video. Poi registra 5 secondi e riascoltali per sentire come arrivi.',
      },
      {
        title: 'Cambia dispositivo se serve',
        body: 'Se hai più di una fotocamera o un microfono, compaiono dei menu per scegliere quelli che userai nella chiamata.',
      },
    ],
    guide: [
      {
        heading: 'Vieni meglio in video in un minuto',
        body: [
          '- Rivolgiti alla luce. Una finestra o una lampada davanti a te vale più di qualsiasi upgrade della fotocamera. Una finestra luminosa dietro di te ti trasforma in una silhouette.',
          '- Porta la fotocamera all’altezza degli occhi. Un portatile su una pila di libri basta. Guardare la fotocamera dall’alto raramente valorizza.',
          '- Pulisci la lente. Un’impronta sulla fotocamera del portatile o del telefono rende appannata l’intera immagine.',
          '- Controlla cosa c’è dietro di te. L’anteprima mostra esattamente ciò che vedranno gli altri.',
        ],
      },
      {
        heading: 'Se l’anteprima della fotocamera resta nera',
        body: [
          'Per prima cosa cerca una copertura fisica. Molti portatili hanno una linguetta scorrevole sulla lente o un tasto fotocamera sulla tastiera, e una webcam esterna può avere un tappo sulla lente.',
          'Poi chiudi le altre app che potrebbero usare la fotocamera, come Zoom, Teams, FaceTime o un’app fotocamera. In particolare su Windows, una sola app alla volta può usare una webcam.',
          'Infine controlla i permessi. Il browser ha bisogno dell’accesso alla fotocamera per questo sito, e il sistema operativo deve consentire al browser di usarla. Se la parte del microfono funziona e la fotocamera no, di solito la causa sono i permessi.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Il mio video viene registrato o caricato?',
        a: 'No. L’anteprima della fotocamera è disegnata sul tuo schermo e non va da nessun’altra parte. Nulla viene registrato, salvato o inviato a un server. La fotocamera si spegne quando premi Stop o lasci la pagina.',
      },
      {
        q: 'Perché l’anteprima della fotocamera è capovolta?',
        a: 'L’anteprima è speculare, così muoversi a sinistra appare come un movimento a sinistra, il che risulta naturale. Le app di riunione fanno lo stesso. Le persone dall’altra parte della chiamata ti vedono non speculare.',
      },
      {
        q: 'Il microfono funziona ma la fotocamera no. Cosa devo controllare?',
        a: 'Cerca una copertura della lente o un tasto per spegnere la fotocamera, chiudi le altre app che potrebbero occuparla e assicurati che sia il browser sia il sistema operativo consentano l’accesso alla fotocamera. Il test del microfono continua a funzionare anche quando la fotocamera non riesce a partire.',
      },
      {
        q: 'Posso testare una webcam esterna?',
        a: 'Sì. Collegala, avvia il test e sceglila dal menu Fotocamera. Molte webcam hanno anche un proprio microfono, che comparirà nel menu Microfono.',
      },
      {
        q: 'Che risoluzione usa il test?',
        a: 'Il test chiede alla fotocamera un’immagine a 720p e mostra nel pannello sotto lo strumento la risoluzione che il browser ha effettivamente ricevuto. La tua app di riunione può usare una risoluzione diversa in base alla connessione.',
      },
      {
        q: 'Funziona su telefoni e tablet?',
        a: 'Sì. Su un telefono il test usa la fotocamera frontale e il microfono integrato, o quello delle tue cuffie se ne è collegato uno.',
      },
    ],
  },
};
