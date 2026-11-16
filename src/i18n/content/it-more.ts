import type { PageTranslation } from '../../data/types';

/** Italiano: Zoom, Discord e la guida «il microfono non funziona». */
export const itMore: Record<string, PageTranslation> = {
  'zoom-mic-test': {
    slug: 'test-microfono-zoom',
    nav: 'Test microfono Zoom',
    blurb: 'Controlla il microfono prima di una riunione Zoom, poi allinea le impostazioni di Zoom.',
    title: 'Test microfono Zoom: controlla il microfono prima della riunione',
    description:
      'Testa il microfono prima di entrare in Zoom. Conferma qui che funziona, poi usa il test del microfono e le impostazioni audio di Zoom per farti sentire chiaramente.',
    h1: 'Test microfono Zoom',
    lede: 'Assicurati che il microfono funzioni prima dell’inizio della riunione Zoom, senza aprire Zoom né entrare in una chiamata.',
    introTitle: 'Prima il test, poi la configurazione di Zoom',
    intro: [
      'Il controllo più rapido del microfono per Zoom ha due parti. Prima conferma qui che il microfono funzioni e annota il suo nome nel pannello «Il tuo microfono». Poi assicurati che Zoom usi lo stesso microfono. La maggior parte dei problemi del tipo «non mi sentono su Zoom» dipende da Zoom che ascolta un dispositivo diverso da quello in cui stai parlando.',
      'Anche Zoom ha un suo test. Nell’app per desktop apri Impostazioni, scegli Audio e premi Testa microfono. Registra qualche secondo e lo riproduce sull’altoparlante selezionato.',
    ],
    stepsTitle: 'Come testare il microfono per Zoom',
    steps: [
      {
        title: 'Esegui il test su questa pagina',
        body: 'Premi «Testa il mio microfono», parla e controlla che il misuratore si muova. Annota o ricorda il nome del microfono mostrato nel pannello.',
      },
      {
        title: 'Apri le impostazioni audio di Zoom',
        body: 'Nell’app Zoom per desktop clicca sulla tua immagine del profilo, poi su Impostazioni e su Audio. In una riunione clicca sulla freccia accanto al pulsante Silenzia e scegli Impostazioni audio.',
      },
      {
        title: 'Seleziona lo stesso microfono',
        body: 'In Microfono scegli il dispositivo che ha funzionato qui. «Uguale al sistema» segue il predefinito del computer, che può cambiare quando colleghi delle cuffie.',
      },
      {
        title: 'Usa il test del microfono di Zoom',
        body: 'Premi Testa microfono, parla e ascolta la riproduzione. Lascia attivo «Regola automaticamente il volume del microfono», a meno che tu non abbia un motivo per impostare il livello a mano.',
      },
      {
        title: 'Entra in una riunione di prova se vuoi essere sicuro',
        body: 'Vai su zoom.us/test per partecipare a una riunione di prova privata. Zoom ti guida in un controllo degli altoparlanti e del microfono prima che qualcun altro possa sentirti.',
      },
    ],
    faqs: [
      {
        q: 'Il microfono funziona qui ma non in Zoom. Perché?',
        a: 'Quasi certamente Zoom usa un altro microfono oppure non ha il permesso. Scegli il dispositivo giusto in Impostazioni, Audio. Su Mac apri anche Impostazioni di Sistema, Privacy e sicurezza, Microfono, e verifica che Zoom sia attivo. Su Windows controlla Impostazioni, Privacy e sicurezza, Microfono.',
      },
      {
        q: 'Perché in Zoom vedo «Partecipa all’audio» invece del pulsante Silenzia?',
        a: 'Sei entrato nella riunione senza collegare l’audio, quindi nessuno ti sente e tu non senti nessuno. Clicca su Partecipa all’audio e scegli Partecipa con l’audio del computer.',
      },
      {
        q: 'Mi dicono che su Zoom suono a scatti o robotico. È colpa del microfono?',
        a: 'Registra qui una clip di 5 secondi. Se la riproduzione è pulita, il microfono va bene e il problema è la connessione a internet o la riduzione del rumore di Zoom. Nelle impostazioni audio di Zoom prova a impostare la soppressione del rumore di fondo su Bassa.',
      },
      {
        q: 'Posso usare questo test per Zoom nel browser?',
        a: 'Sì, ed è una corrispondenza particolarmente fedele. Il client web di Zoom usa lo stesso accesso al microfono del browser di questa pagina. Ricorda che il permesso viene concesso sito per sito, quindi dovrai consentire il microfono anche per il sito di Zoom.',
      },
      {
        q: 'Cos’è il «Suono originale» in Zoom?',
        a: 'È un’opzione che disattiva la maggior parte dell’elaborazione audio di Zoom. È pensata per la musica o per microfoni professionali in stanze silenziose. Per le chiamate di tutti i giorni lasciala disattivata, così Zoom può eliminare eco e rumore di fondo.',
      },
    ],
  },

  'discord-mic-test': {
    slug: 'test-microfono-discord',
    nav: 'Test microfono Discord',
    blurb: 'Scopri se il problema del microfono è l’hardware o le impostazioni di Discord.',
    title: 'Test microfono Discord: controlla mic e impostazioni vocali',
    description:
      'Testa il microfono per Discord. Conferma qui che funziona, poi correggi dispositivo di ingresso, sensibilità di ingresso e push to talk di Discord.',
    h1: 'Test microfono Discord',
    lede: 'Gli amici non ti sentono in chat vocale? Controlla prima qui il microfono, poi sistema l’impostazione di Discord che dà fastidio.',
    introTitle: 'È il microfono o è Discord?',
    intro: [
      'Discord inserisce diversi livelli tra il tuo microfono e i tuoi amici: un’impostazione del dispositivo di ingresso, una soglia di sensibilità di ingresso, il push to talk facoltativo e la riduzione del rumore. Ognuno di questi può silenziare un microfono perfettamente sano. Testare qui toglie Discord dalla scena. Se il misuratore si muove su questa pagina, l’hardware è a posto e la soluzione sta nelle impostazioni Voce e video di Discord.',
      'Discord ha anche un controllo integrato. Apri Impostazioni utente, vai su Voce e video e premi Controlliamo sotto Test del microfono. Discord ti riproduce la voce finché non lo fermi.',
    ],
    stepsTitle: 'Come testare il microfono per Discord',
    steps: [
      {
        title: 'Testa il microfono su questa pagina',
        body: 'Premi «Testa il mio microfono» e parla. Annota il nome del microfono nel pannello. Se qui non si muove nulla, il problema non è Discord.',
      },
      {
        title: 'Imposta il dispositivo di ingresso di Discord',
        body: 'In Discord clicca sull’ingranaggio accanto al tuo nome utente, poi su Voce e video. Imposta Dispositivo di ingresso sul microfono che ha funzionato qui. «Predefinito» può puntare a quello sbagliato.',
      },
      {
        title: 'Controlla la sensibilità di ingresso',
        body: 'Con Attività vocale selezionata, attiva la sensibilità di ingresso automatica oppure trascina il cursore in modo che la tua voce normale cada nella parte verde della barra.',
      },
      {
        title: 'Esegui il test del microfono di Discord',
        body: 'Premi Controlliamo e parla. Se ti senti, ti sentiranno anche i tuoi amici.',
      },
    ],
    faqs: [
      {
        q: 'Il microfono funziona qui ma su Discord nessuno mi sente. Cosa controllo?',
        a: 'Controlla quattro cose in ordine: il Dispositivo di ingresso in Voce e video, se sei silenziato o silenziato dal server (una barra rossa sull’icona del microfono), se il Push to talk è attivo senza un tasto assegnato e se la sensibilità di ingresso è così alta che la tua voce non supera mai la soglia.',
      },
      {
        q: 'Perché Discord taglia l’inizio o la fine delle mie parole?',
        a: 'La soglia di sensibilità di ingresso è troppo alta, quindi le sillabe deboli non contano come parlato. Abbassa il cursore o attiva la sensibilità automatica. Se usi la riduzione del rumore Krisp, prova a disattivarla per confrontare.',
      },
      {
        q: 'Questo test funziona per Discord nel browser?',
        a: 'Sì. Discord nel browser usa lo stesso accesso al microfono di questa pagina. Dovrai consentire il microfono separatamente per il sito di Discord, perché i browser concedono il permesso un sito alla volta.',
      },
      {
        q: 'Perché il microfono è così basso su Discord?',
        a: 'Alza il Volume di ingresso in Voce e video e controlla il livello del microfono nelle impostazioni audio di sistema. Verifica anche che il Controllo automatico del guadagno sia attivo nelle opzioni di elaborazione vocale di Discord. Registra una clip qui per capire se è il microfono stesso a essere basso.',
      },
      {
        q: 'Perché i miei amici sentono il mio gioco o i miei altoparlanti attraverso il microfono?',
        a: 'Il microfono sta captando gli altoparlanti. Usa le cuffie, tieni attiva la Cancellazione dell’eco in Discord e assicurati che il Dispositivo di ingresso non sia un «Missaggio stereo» o un dispositivo di loopback, che invia tutto l’audio del computer.',
      },
    ],
  },

  'fix/mic-not-working': {
    slug: 'microfono-non-funziona',
    nav: 'Microfono che non funziona',
    blurb: 'Una checklist passo dopo passo per un microfono che resta muto.',
    title: 'Il microfono non funziona? Come risolvere',
    description:
      'Il microfono non funziona? Segui questa checklist: tasti di muto, dispositivo di ingresso giusto, permessi del browser e del sistema, app che lo occupano.',
    h1: 'Il microfono non funziona? Ecco come risolvere',
    lede: 'Esegui il test qui sotto, poi scorri la checklist. La maggior parte dei microfoni muti si risolve nei primi tre passaggi.',
    introTitle: 'Comincia scoprendo dove sta il problema',
    intro: [
      'Un microfono che «non funziona» di solito funziona benissimo ed è fermato da qualche parte lungo il percorso: da un interruttore di silenziamento, da un dispositivo sbagliato selezionato, da un permesso o da un’altra app. Il test qui sopra ti aiuta a restringere rapidamente il campo.',
      'Se il test non parte, il messaggio mostrato ti dice se il microfono è bloccato, assente o occupato. Se il test parte ma il misuratore resta piatto, il computer vede un microfono e ne riceve silenzio, il che indica un interruttore di silenziamento, un’impostazione del volume o il dispositivo sbagliato.',
    ],
    stepsTitle: 'Risolvere un microfono che non funziona',
    steps: [
      {
        title: 'Controlla il silenziamento fisico e il collegamento',
        body: 'Cerca un pulsante di silenziamento su cuffie, cavo o sul microfono stesso, e un tasto di silenziamento del microfono sulla tastiera del portatile. Scollega il microfono e ricollegalo saldamente. Prova un’altra porta USB. Uno spinotto da 3,5 mm va nella presa per microfono o cuffie con microfono, non in quella solo per cuffie.',
      },
      {
        title: 'Seleziona il microfono giusto',
        body: 'Avvia il test e leggi il nome del dispositivo nel pannello «Il tuo microfono». Se non è il microfono in cui parli, scegli quello corretto dal menu Microfono oppure cambia l’ingresso predefinito nelle impostazioni audio di sistema.',
      },
      {
        title: 'Alza il volume di ingresso',
        body: 'In Windows 11 apri Impostazioni, Sistema, Audio e clicca sul tuo microfono sotto Input. Su Mac apri Impostazioni di Sistema, Audio, Ingresso. Verifica che il volume di ingresso non sia a zero.',
      },
      {
        title: 'Controlla i permessi nel browser e nel sistema',
        body: 'Clicca sull’icona a sinistra della barra degli indirizzi e imposta Microfono su Consenti. Poi verifica che il sistema operativo permetta al browser di usare il microfono, nella sezione Microfono delle impostazioni sulla privacy.',
      },
      {
        title: 'Chiudi le altre app, poi riavvia',
        body: 'Esci da Zoom, Teams, Discord, dai software di registrazione e dalle altre schede del browser che potrebbero occupare il microfono. Se non cambia nulla, riavvia il browser e poi il computer. Sblocca dispositivi audio bloccati più spesso di quanto si pensi.',
      },
    ],
    faqs: [
      {
        q: 'Il test dice «Il microfono è occupato». Cosa significa?',
        a: 'Il browser ha trovato il microfono ma non è riuscito ad aprirlo, di solito perché un altro programma lo sta usando in esclusiva. Chiudi le app di riunione, la chat vocale e i software di registrazione, poi premi Riprova. In Windows, riavviare il computer libera un microfono bloccato.',
      },
      {
        q: 'Il test dice «Nessun microfono trovato». Cosa devo fare?',
        a: 'Il browser non vede nessun dispositivo di ingresso. Ricollega il microfono, prova un’altra porta o un altro cavo e controlla nelle impostazioni audio di sistema se compare. Se nemmeno il sistema lo elenca, il problema è il microfono, il cavo o la porta.',
      },
      {
        q: 'Come capisco se il microfono è rotto?',
        a: 'Provalo su un secondo dispositivo, come un altro computer o un telefono. Se non funziona da nessuna parte, il microfono è guasto. Se funziona altrove, il problema è nelle impostazioni, nella porta o nei driver del primo dispositivo.',
      },
      {
        q: 'Il microfono funziona in un’app ma non in un’altra. Perché?',
        a: 'Ogni app sceglie il proprio microfono e ha bisogno di un proprio permesso. Apri le impostazioni audio dell’app che non funziona, seleziona il microfono per nome e verifica che il sistema operativo permetta a quell’app di usarlo.',
      },
      {
        q: 'Il microfono delle mie cuffie Bluetooth non funziona. Qualche consiglio?',
        a: 'Assicurati che siano collegate come cuffie con microfono e non solo come cuffie. Molti dispositivi mostrano due voci per un solo auricolare, e solo la voce «vivavoce» o «cuffia con microfono» include il microfono. Spegnere e riaccendere il Bluetooth, o riaccoppiare, di solito lo ripristina.',
      },
    ],
  },

  'webcam-test': {
    slug: 'test-webcam',
    nav: 'Test webcam',
    blurb: 'Guarda la tua fotocamera dal vivo e controlla inquadratura, luce e nitidezza.',
    title: 'Test webcam: controlla la tua fotocamera online (gratis, privato)',
    description:
      'Prova la tua webcam online con un clic. Anteprima dal vivo, risoluzione, inquadratura e illuminazione, e cambio di fotocamera. Nulla viene registrato o caricato.',
    h1: 'Test webcam',
    lede: 'Premi il pulsante per vedere cosa vede la tua fotocamera. L’anteprima resta sul tuo schermo e nulla viene registrato o caricato.',
    introTitle: 'Controlla la fotocamera prima che la veda qualcun altro',
    intro: [
      'Questo test webcam apre la tua fotocamera nel browser e mostra un’anteprima dal vivo, così puoi controllare l’immagine prima di una riunione, di uno streaming o di un colloquio. Funziona con le fotocamere integrate dei portatili, le webcam USB, le fotocamere dei telefoni e le fotocamere virtuali.',
      'Il test mostra anche un livello del microfono accanto al video, perché molti problemi video sono in realtà problemi di fotocamera e microfono insieme. Se ti interessa solo l’immagine, puoi ignorare l’indicatore.',
    ],
    stepsTitle: 'Come testare la webcam online',
    steps: [
      {
        title: 'Premi «Testa la mia fotocamera e il microfono»',
        body: 'Il browser chiede il permesso di usare la fotocamera. Scegli Consenti. Se compare anche la richiesta per il microfono, consentila oppure ignorala se ti interessa solo l’immagine.',
      },
      {
        title: 'Guarda l’anteprima',
        body: 'Dovresti vederti entro uno o due secondi. L’anteprima è speculare, come nella maggior parte delle app per riunioni. Gli altri ti vedono nel verso giusto.',
      },
      {
        title: 'Controlla la risoluzione',
        body: 'Il pannello sotto lo strumento mostra la risoluzione ricevuta dal browser. Una webcam moderna dà di solito 720p o 1080p. Un valore molto più basso può indicare una fotocamera di qualità scarsa o una porta USB troppo lenta.',
      },
      {
        title: 'Scegli la fotocamera giusta',
        body: 'Se hai più fotocamere, un menu permette di cambiare. Così scopri quale è la webcam esterna e quale quella del portatile.',
      },
      {
        title: 'Ferma il test',
        body: 'Premi Stop oppure lascia la pagina. La spia della fotocamera del dispositivo dovrebbe spegnersi subito.',
      },
    ],
    guide: [
      {
        heading: 'Come appare una buona immagine della webcam',
        body: [
          '- Luce: metti una finestra o una lampada davanti a te. La luce alle spalle ti trasforma in una sagoma, qualunque sia la fotocamera.',
          '- Altezza: l’obiettivo dovrebbe essere più o meno all’altezza degli occhi. Alza il portatile con qualche libro.',
          '- Distanza: siediti a circa un braccio di distanza, con testa e spalle nell’inquadratura.',
          '- Nitidezza: pulisci l’obiettivo con un panno morbido. Un’impronta è la causa più comune di un’immagine sfocata.',
          '- Sfondo: l’anteprima mostra esattamente ciò che gli altri vedranno dietro di te.',
        ],
      },
      {
        heading: 'Se l’immagine resta nera',
        body: [
          'Cerca prima una copertura fisica. Molti portatili hanno una linguetta scorrevole o un tasto per disattivare la fotocamera, e una webcam esterna può avere un tappo sull’obiettivo.',
          'Poi chiudi tutto ciò che potrebbe usare la fotocamera: Zoom, Teams, FaceTime, OBS o un’app fotocamera. In Windows solo un’app alla volta può usare una webcam.',
          'Infine controlla i permessi. Il browser deve avere accesso alla fotocamera per questo sito e il sistema operativo deve consentire al browser di usarla.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Il mio test webcam è privato?',
        a: 'Sì. Il video viene mostrato solo sul tuo schermo e non va da nessun’altra parte. Nulla viene registrato, salvato o inviato a un server. La fotocamera si spegne quando premi Stop o lasci la pagina.',
      },
      {
        q: 'Perché la mia webcam non funziona nel test?',
        a: 'Le cause più comuni sono una copertura o un tasto che disattiva la fotocamera, un’altra app che la sta già usando o permessi bloccati. Chiudi le altre app che usano la fotocamera, controlla i permessi del sito nel browser e le impostazioni di privacy della fotocamera del sistema.',
      },
      {
        q: 'Perché l’immagine è speculare?',
        a: 'L’anteprima è invertita come uno specchio, così muoversi a sinistra sembra naturale. In una videochiamata gli altri ti vedono nel verso giusto.',
      },
      {
        q: 'Come si prova una webcam esterna?',
        a: 'Collegala, avvia il test e sceglila dal menu Fotocamera. Se non compare, prova un’altra porta USB e controlla che nessun’altra app la stia usando.',
      },
      {
        q: 'Posso provare la fotocamera del telefono?',
        a: 'Sì. Apri questa pagina nel browser del telefono. Usa la fotocamera anteriore e di solito puoi passare a quella posteriore dal menu Fotocamera.',
      },
      {
        q: 'Che risoluzione ha la mia webcam?',
        a: 'Il pannello sotto lo strumento mostra la risoluzione ricevuta dal browser. Il test richiede 720p, quindi una fotocamera capace di più può comunque mostrare 720p qui. Le app per riunioni scelgono la propria risoluzione.',
      },
    ],
  },

  'is-my-mic-working': {
    slug: 'il-mio-microfono-funziona',
    nav: 'Il mio microfono funziona?',
    blurb: 'Un controllo con un clic per sapere se il microfono è acceso e ti sente.',
    title: 'Il mio microfono funziona? Controlla se è acceso',
    description:
      'Scopri in pochi secondi se il tuo microfono è acceso e funziona. Parla e guarda l’indicatore di livello, poi segui le soluzioni rapide. Gratis.',
    h1: 'Il mio microfono funziona?',
    lede: 'Premi il pulsante e di’ qualche parola. Se l’indicatore si muove, il microfono è acceso e funziona.',
    introTitle: 'Una risposta rapida: sì o no',
    intro: [
      'Premi «Testa il mio microfono», consenti l’accesso al microfono e parla. L’indicatore di livello segue la tua voce. Se si muove, il microfono è acceso e il computer o il telefono lo sente. Se resta piatto, la pagina ti indica dove cercare.',
      'Vedere muoversi l’indicatore dimostra solo che il tuo dispositivo sente il microfono. Non dimostra che un’app come Zoom o Discord stia ascoltando lo stesso. I controlli rapidi qui sotto coprono anche questo.',
    ],
    stepsTitle: 'Come controllare se il microfono è acceso',
    steps: [
      {
        title: 'Avvia il test e parla',
        body: 'Premi «Testa il mio microfono», scegli Consenti quando il browser lo chiede e di’ una frase a volume normale.',
      },
      {
        title: 'Guarda l’indicatore di livello',
        body: 'L’indicatore dovrebbe salire e scendere con la tua voce e arrivare circa a metà o oltre quando parli. Un indicatore piatto significa che non arriva alcun suono.',
      },
      {
        title: 'Registra e riascolta',
        body: 'Registra 5 secondi e riascolta. Se ti senti chiaramente, il microfono funziona e capta ciò che ti aspetti.',
      },
      {
        title: 'Se è piatto, controlla i comandi di silenziamento',
        body: 'Cerca un interruttore o un pulsante di muto sulle cuffie, un tasto per spegnere il microfono sul portatile e un microfono silenziato nelle impostazioni audio del sistema.',
      },
      {
        title: 'Controlla di usare il microfono giusto',
        body: 'Se ne hai più di uno, compare un menu Microfono. Scegli quello in cui stai davvero parlando, per esempio le cuffie, e riprova.',
      },
    ],
    faqs: [
      {
        q: 'Come capisco se il microfono è acceso?',
        a: 'Avvia il test e parla. Se l’indicatore di livello si muove, il microfono è acceso e il dispositivo riceve il suono. Alcune cuffie hanno anche una spia o un interruttore, ma l’indicatore è il controllo più affidabile.',
      },
      {
        q: 'L’indicatore non si muove. E ora?',
        a: 'Controlla l’interruttore di muto delle cuffie e un eventuale tasto del microfono sul portatile. Poi assicurati che nel menu sia scelto il microfono giusto e che browser e sistema operativo consentano l’accesso al microfono.',
      },
      {
        q: 'Il microfono funziona qui, ma nell’app di chiamata non mi sentono.',
        a: 'L’app probabilmente usa un altro microfono o non ha il permesso. Apri le impostazioni audio dell’app, scegli il microfono che ha funzionato qui e controlla le impostazioni di privacy del microfono del sistema per quell’app.',
      },
      {
        q: 'Perché il browser chiede di continuo il permesso?',
        a: 'I browser chiedono una volta per sito e possono ricordare la scelta se consenti. Se chiede ogni volta, le tue impostazioni di privacy potrebbero cancellare i permessi dei siti alla chiusura del browser.',
      },
      {
        q: 'Questo test può registrarmi?',
        a: 'Solo per la riproduzione di 5 secondi e solo sul tuo dispositivo. Nulla viene caricato o salvato altrove, e la registrazione sparisce quando lasci la pagina.',
      },
    ],
  },
};
