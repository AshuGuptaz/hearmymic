import type { PageTranslation } from '../../data/types';

/** Deutsch. Keys are the English slugs. Uses the informal "du". */
export const de: Record<string, PageTranslation> = {
  '': {
    slug: '',
    nav: 'Mikrofontest',
    blurb: 'Prüfe dein Mikrofon mit Live-Pegel, Wiedergabe und Gerätedetails.',
    title: 'Mikrofontest: Mikrofon online testen, kostenlos | HearMyMic',
    description:
      'Teste dein Mikrofon in Sekunden. Live-Pegelanzeige, 5 Sekunden aufnehmen und abspielen oder dich live hören. Kostenlos, privat und ohne Installation.',
    h1: 'Mikrofontest',
    lede: 'Prüfe, ob dein Mikrofon funktioniert, und hör dir an, wie du klingst. Kostenlos, in wenigen Sekunden erledigt und komplett in deinem Browser.',
    introTitle: 'Dein Mikrofon schnell und privat prüfen',
    intro: [
      'HearMyMic beantwortet vor deinem nächsten Anruf, Stream oder deiner Aufnahme zwei Fragen: Nimmt mein Mikrofon mich auf, und wie klinge ich? Drück auf den Button, erlaube den Zugriff, und die Pegelanzeige bewegt sich, sobald du sprichst. Bewegt sie sich, funktioniert dein Mikrofon.',
      'Danach kannst du einen 5-Sekunden-Clip aufnehmen und abspielen, die Live-Wiedergabe einschalten, um dich im Kopfhörer zu hören, oder ein anderes Mikrofon wählen, falls du mehrere hast. Alles wird auf deinem Gerät verarbeitet. Es wird kein Ton hochgeladen oder gespeichert.',
    ],
    stepsTitle: 'So testest du dein Mikrofon',
    steps: [
      {
        title: 'Klick auf „Mikrofon testen“',
        body: 'Dein Browser fragt, ob diese Seite dein Mikrofon verwenden darf. Wähle Zulassen. Siehst du keine Abfrage, such in der Adressleiste nach einem Mikrofon- oder Schloss-Symbol.',
      },
      {
        title: 'Sprich und beobachte die Pegelanzeige',
        body: 'Sprich in normaler Lautstärke. Wellenform und Pegelbalken sollten sofort reagieren. Ein gleichmäßiger grüner Pegel mit der Bewertung „Gut“ bedeutet, dass man dich gut hört.',
      },
      {
        title: '5 Sekunden aufnehmen und anhören',
        body: 'Drück auf Aufnehmen, sag ein oder zwei Sätze und drück dann auf Wiedergabe. So kommst du am nächsten daran, dich so zu hören wie andere.',
      },
      {
        title: 'Behebe, was nicht gut klingt',
        body: 'Zu leise, hallig oder stumm? Die Pegelbewertung und der Bereich „Dein Mikrofon“ zeigen die Ursache, und die Hilfeseiten führen dich durch die Lösung.',
      },
    ],
    guide: [
      {
        heading: 'Was du mit HearMyMic machen kannst',
        body: [
          'HearMyMic ist ein kostenloser Mikrofon- und Webcam-Test, der in deinem Browser läuft. Er bündelt die Prüfungen, die man meist braucht, damit du weder eine App installieren noch an einem Anruf teilnehmen musst, nur um zu wissen, ob man dich hört.',
          '- Live-Pegel und Wellenform: zeigen deine Stimme beim Sprechen, damit du auf einen Blick siehst, ob das Mikrofon dich aufnimmt.',
          '- Aufnehmen und abspielen: nimmt 5 Sekunden auf, die du dir anhören kannst. Das kommt dem am nächsten, was andere von dir hören.',
          '- Sich live hören: schickt dein Mikrofon in Echtzeit auf deinen Kopfhörer, praktisch zum Platzieren des Mikrofons oder um Störgeräusche zu finden.',
          '- Gerätedetails: zeigen Mikrofonname, Abtastrate und Kanäle sowie ob Echounterdrückung, Rauschunterdrückung und automatische Verstärkungsregelung aktiv sind.',
          '- Mikrofonauswahl: lässt dich zwischen angeschlossenen Mikrofonen wechseln, ohne die Seite zu verlassen.',
          '- Webcam-Check: Die Seite für den Webcam- und Mikrofontest ergänzt eine Live-Kameravorschau neben der Pegelanzeige.',
        ],
      },
      {
        heading: 'Wann sich ein Mikrofontest lohnt',
        body: [
          'Teste immer dann, wenn sich an deinem Setup etwas ändert: ein neues Headset, ein neuer Laptop, ein Browser-Update oder ein Systemupdate, das deine Datenschutzeinstellungen zurückgesetzt haben könnte. Auch vor etwas Wichtigem lohnt sich eine Minute, etwa vor einem Vorstellungsgespräch, einer Online-Prüfung, einer Podcast-Aufnahme oder einem Stream.',
          'Gamer prüfen damit ihr Headset, bevor sie in den Voice-Chat gehen, und Schüler, Studierende und Lehrkräfte vor dem Online-Unterricht. Wenn man dir gesagt hat, du klingst leise, weit weg oder blechern, hilft dir eine Aufnahme hier, das Problem selbst zu hören und zu entscheiden, ob es am Mikrofon, am Raum oder an der App liegt.',
        ],
      },
      {
        heading: 'Welcher Test passt zu dir',
        body: [
          'Der Test oben ist auf jeder Seite derselbe, aber jede Seite ist auf eine andere Aufgabe zugeschnitten. Willst du deinen Klang beurteilen, nutze den Mikrofontest mit Aufnahme. Willst du dich beim Sprechen hören, probier den Test zum Selbsthören. Vor einem Videoanruf prüft der Webcam- und Mikrofontest Bild und Ton zusammen.',
        ],
      },
      {
        heading: 'Was die Pegelbewertung bedeutet',
        body: [
          'Die Anzeige misst, wie stark das Signal deines Mikrofons im Vergleich zum lautesten Signal ist, das dein Browser aufnehmen kann. Die Bewertung übersetzt das in einfache Worte.',
          '- Leise: Deine Stimme erreicht das Mikrofon, aber nur knapp. Vielleicht wirst du gebeten, lauter zu sprechen. Geh näher ran oder erhöhe die Eingangslautstärke in den Systemeinstellungen.',
          '- Gut: ein gesunder Pegel für Anrufe und Aufnahmen, mit Reserve, wenn du lachst oder lauter wirst.',
          '- Laut: Das Signal liegt nah am Maximum. Laute Töne können verzerren. Geh etwas zurück oder senke die Eingangslautstärke.',
          'Die Bewertung ist ein Richtwert, keine Labormessung. Die automatische Verstärkungsregelung, die viele Browser standardmäßig einschalten, passt deinen Pegel ständig an, daher schwankt der Wert etwas.',
        ],
      },
      {
        heading: 'Was der Bereich „Dein Mikrofon“ zeigt',
        body: [
          'Läuft der Test, listet der Bereich unter dem Tool auf, was dein Browser über das geöffnete Mikrofon meldet: Gerätename, Abtastrate, Anzahl der Kanäle und ob Echounterdrückung, Rauschunterdrückung und automatische Verstärkungsregelung aktiv sind.',
          'Der Gerätename ist die nützlichste Zeile. Steht dort „Webcam“, obwohl du dein Headset erwartet hast, hast du das Problem gefunden. Wähle das richtige Mikrofon aus der Liste, die erscheint, sobald mehrere angeschlossen sind.',
          'Die geschätzte Latenz ist die Verzögerung, die dein Browser zwischen Aufnahme und Wiedergabe meldet. Manche Browser melden sie gar nicht, dann steht das im Bereich.',
        ],
      },
      {
        heading: 'Schnell zu besserem Klang',
        body: [
          'Ein paar kleine Änderungen bringen mehr als die meisten Neuanschaffungen. Teste nach jeder, damit du siehst, was hilft.',
          '- Abstand: Halte Headset-Bügel oder Tischmikrofon nah, etwa eine Handbreit vom Mund. Halbierst du den Abstand, bist du im Verhältnis zum Raum deutlich lauter.',
          '- Raum: Harte Wände und nackte Böden erzeugen Hall. Vorhänge, ein Teppich oder ein paar Kissen dämpfen ihn.',
          '- Geräusche: Schalte Ventilatoren aus und schließe nach Möglichkeit die Fenster, und halte das Mikrofon von den Lüftungsschlitzen des Computers fern.',
          '- Kopfhörer: Trag sie bei Anrufen, damit die Stimme des Gegenübers nicht aus deinen Lautsprechern zurück ins Mikrofon gelangt.',
          '- Pegel: Sprich normal und achte auf ein gleichmäßiges „Gut“. Wenn nicht, passe die Eingangslautstärke in den Sound-Einstellungen deines Systems an.',
        ],
      },
      {
        heading: 'Ist es sicher, den Mikrofonzugriff zu erlauben?',
        body: [
          'Ja. Der Test läuft als Code in deinem Browser-Tab. Dein Ton geht vom Mikrofon zur Anzeige auf deinem Bildschirm und nirgendwo sonst hin. Es gibt kein Konto, keinen Upload und keine Aufnahme auf einem Server. Der 5-Sekunden-Clip liegt im Arbeitsspeicher deines Browsers und ist weg, sobald du die Seite schließt oder neu lädst.',
          'Du kannst die Berechtigung jederzeit über das Schloss- oder Einstellungssymbol in der Adressleiste zurücknehmen.',
        ],
      },
      {
        heading: 'Was dieser Test nicht leisten kann',
        body: [
          'HearMyMic misst, was dein Browser sehen kann. Er kann keine Studioeigenschaften wie den Frequenzgang beurteilen und nicht in andere Apps hineinsehen, die ihre eigene Verarbeitung hinzufügen. Er prüft auch weder deine Lautsprecher noch deine Internetverbindung, ein Anruf kann also trotz perfektem Mikrofon abgehackt klingen.',
          'Besteht der Test, aber eine App hört dich trotzdem nicht, prüfe die Eingabegerät-Einstellung dieser App und ihre Mikrofonberechtigung in deinem Betriebssystem.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Woher weiß ich, ob mein Mikrofon funktioniert?',
        a: 'Klick auf „Mikrofon testen“, erlaube den Zugriff und sprich. Bewegen sich Pegelanzeige und Wellenform mit deiner Stimme, funktioniert dein Mikrofon. Für eine zweite Kontrolle nimm 5 Sekunden auf und spiel sie ab.',
      },
      {
        q: 'Warum bewegt sich die Anzeige nicht, wenn ich spreche?',
        a: 'Die häufigsten Ursachen sind ein stummgeschaltetes Mikrofon (prüfe den Schalter am Headset oder Kabel), ein falsch gewähltes Mikrofon oder eine auf null gestellte Eingangslautstärke in den Sound-Einstellungen. Startet der Test gar nicht, blockiert dein Browser vermutlich den Mikrofonzugriff.',
      },
      {
        q: 'Nimmt HearMyMic meine Stimme auf oder speichert sie?',
        a: 'Nein. Dein Ton wird in deinem Browser verarbeitet und nie an einen Server gesendet. Die optionale 5-Sekunden-Aufnahme bleibt zur Wiedergabe im Arbeitsspeicher deines Browsers und wird verworfen, wenn du die Seite verlässt oder neu lädst.',
      },
      {
        q: 'Muss ich etwas installieren?',
        a: 'Nein. Der Test läuft in aktuellen Versionen von Chrome, Edge, Firefox und Safari auf Computern, Smartphones und Tablets. Es gibt nichts herunterzuladen und keine Anmeldung.',
      },
      {
        q: 'Kann ich ein Headset, ein USB-Mikrofon oder AirPods testen?',
        a: 'Ja. Jedes Mikrofon, das dein Gerät erkennt, funktioniert, darunter eingebaute Mikrofone, kabelgebundene und Bluetooth-Headsets, USB-Mikrofone und Audio-Interfaces. Sind mehrere angeschlossen, erscheint ein Mikrofonmenü, mit dem du jedes testen kannst.',
      },
      {
        q: 'Wie genau sind die Ergebnisse?',
        a: 'Sie sind eine gute praktische Kontrolle, keine kalibrierte Messung. Pegel, Einstellungen und Latenz stammen aus dem, was dein Browser meldet, und Apps wie Zoom oder Discord wenden zusätzlich ihre eigene Verarbeitung an.',
      },
    ],
  },

  'online-mic-test': {
    slug: 'mikrofon-online-testen',
    nav: 'Mikrofon online testen',
    blurb: 'Teste jedes Mikrofon im Browser. Ohne Download, ohne Anmeldung.',
    title: 'Mikrofon online testen: Mikrofontest direkt im Browser',
    description:
      'Teste dein Mikrofon online, ohne etwas herunterzuladen. Sieh deinen Eingangspegel live, prüfe, welches Mikrofon dein Browser nutzt, und finde Probleme schnell.',
    h1: 'Mikrofon online testen',
    lede: 'Teste dein Mikrofon direkt hier im Browser. Keine App, kein Konto, kein Warten.',
    introTitle: 'Warum das Mikrofon online testen?',
    intro: [
      'Ein Online-Mikrofontest ist der schnellste Weg, ein Mikrofonproblem von einem App-Problem zu unterscheiden. Funktioniert dein Mikrofon auf dieser Seite, sind Hardware, Kabel und Systemeinstellungen in Ordnung, und der Fehler liegt in der App, die du genutzt hast. Funktioniert es auch hier nicht, solltest du das Mikrofon selbst, die Verbindung oder deine Berechtigungen prüfen.',
      'Da er im Browser läuft, funktioniert der Test auf einem Windows-PC, einem Mac, einem Chromebook oder einem Smartphone gleich. Er nutzt denselben Mikrofonzugriff wie webbasierte Meeting-Tools und ist damit eine realistische Prüfung vor jedem Anruf in einem Browser-Tab.',
    ],
    stepsTitle: 'So funktioniert der Online-Mikrofontest',
    steps: [
      {
        title: 'Test starten und Zugriff erlauben',
        body: 'Klick auf „Mikrofon testen“. Browser geben dein Mikrofon erst an eine Seite weiter, nachdem du zugestimmt hast, und nur für diese Website.',
      },
      {
        title: 'Prüfe, ob das richtige Mikrofon verwendet wird',
        body: 'Sieh dir den Gerätenamen im Bereich „Dein Mikrofon“ an. Laptops mit Webcam, Headset und eingebautem Mikrofon wählen oft ein anderes aus, als du erwartest.',
      },
      {
        title: 'Sprich und lies den Pegel ab',
        body: 'Zähl in deiner üblichen Sprechlautstärke bis zehn. Ziel ist ein Pegel im grünen Bereich und die Bewertung „Gut“.',
      },
      {
        title: 'Probier deine anderen Mikrofone aus',
        body: 'Sind mehrere Mikrofone angeschlossen, wechsle über das Mikrofonmenü zwischen ihnen und vergleiche die Pegel, ohne die Seite zu verlassen.',
      },
    ],
    guide: [
      {
        heading: 'Was ein Browser dir sagen kann und was nicht',
        body: [
          'Ein Browsertest ist bei den Grundlagen stark: ob ein Mikrofon angeschlossen ist, ob die Website es nutzen darf, wie stark das Signal ist und welche Verarbeitungsfunktionen aktiv sind. Damit lässt sich der Großteil der „Niemand hört mich“-Probleme klären.',
          'Studioeigenschaften wie Frequenzgang oder Eigenrauschen kann er nicht genau messen. Außerdem verarbeiten Browser das Signal, bevor eine Seite es überhaupt sieht. Echounterdrückung, Rauschunterdrückung und automatische Verstärkungsregelung sind meist standardmäßig an, was für Anrufe ideal ist, aber bedeutet, dass der angezeigte Pegel schon „aufgeräumt“ wurde.',
        ],
      },
      {
        heading: 'Abtastrate und Kanäle lesen',
        body: [
          'Die Abtastrate gibt an, wie oft pro Sekunde dein Ton gemessen wird. Die meisten Geräte melden 44,1 oder 48 kHz, und beides reicht für klare Sprache mehr als aus. Bluetooth-Headsets fallen bei aktivem Mikrofon oft auf 16 kHz oder weniger, weshalb Stimmen darüber dünner klingen.',
          'Kanäle zeigt, ob der Browser das Mikrofon in Mono oder Stereo geöffnet hat. Ein Kanal ist für Sprache normal und zu erwarten.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Ist dieser Online-Mikrofontest kostenlos?',
        a: 'Ja, vollständig. Es gibt keine Limits, keine Testphase und kein Konto.',
      },
      {
        q: 'In welchen Browsern funktioniert er?',
        a: 'Aktuelle Versionen von Chrome, Edge, Firefox, Safari, Brave und Samsung Internet funktionieren. In andere Apps eingebaute Browser, etwa solche, die Links innerhalb von Instagram oder Facebook öffnen, blockieren den Mikrofonzugriff häufig. Öffne die Seite daher in deinem normalen Browser.',
      },
      {
        q: 'Mein Mikrofon funktioniert hier, aber nicht in meiner Meeting-App. Warum?',
        a: 'Das deutet auf die Einstellungen der App hin. Öffne ihre Audio-Einstellungen und prüfe, ob dasselbe Mikrofon wie hier ausgewählt ist, ob du in der App nicht stummgeschaltet bist und ob dein Betriebssystem dieser App den Mikrofonzugriff erlaubt.',
      },
      {
        q: 'Warum zeigt der Test ein anderes Mikrofon als das angeschlossene?',
        a: 'Browser beginnen mit dem Standard-Eingabegerät des Systems. Wähle dein Mikrofon im Mikrofonmenü des Tools aus oder ändere die Standardeingabe in den Sound-Einstellungen deines Systems.',
      },
      {
        q: 'Funktioniert der Test auf dem Smartphone?',
        a: 'Ja. Er funktioniert in Safari auf iPhone und iPad sowie in Chrome auf Android. Die Schritte sind gleich: Button antippen, Mikrofonzugriff erlauben und sprechen.',
      },
    ],
  },

  'mic-test-with-playback': {
    slug: 'mikrofontest-mit-aufnahme',
    nav: 'Mikrofontest mit Aufnahme',
    blurb: 'Nimm 5 Sekunden auf und hör sie dir an, um zu wissen, wie du wirklich klingst.',
    title: 'Mikrofontest mit Aufnahme: aufnehmen und abspielen',
    description:
      'Nimm einen 5-Sekunden-Clip auf und spiel ihn ab, um genau zu hören, wie dein Mikrofon klingt. Kostenloser Mikrofontest mit Wiedergabe direkt im Browser.',
    h1: 'Mikrofontest mit Aufnahme',
    lede: 'Nimm einen kurzen Clip auf und spiel ihn ab. So findest du am ehrlichsten heraus, wie du für andere klingst.',
    introTitle: 'Hör, was alle anderen hören',
    intro: [
      'Eine sich bewegende Pegelanzeige beweist, dass dein Mikrofon funktioniert. Sie sagt aber nicht, ob du klar, dumpf, entfernt oder brummend klingst. Die Wiedergabe schon. Nimm fünf Sekunden normales Sprechen auf, hör sie dir mit Kopfhörern oder Lautsprechern an, und du weißt in einem Durchgang, ob dein Setup bereit ist.',
      'Die Aufnahme wird nur im Arbeitsspeicher deines Browsers erstellt und gespeichert. Sie wird nicht hochgeladen und verschwindet, wenn du die Seite schließt oder neu lädst.',
    ],
    stepsTitle: 'So nimmst du dein Mikrofon auf und spielst es ab',
    steps: [
      {
        title: 'Test starten',
        body: 'Klick auf „Mikrofon testen“ und erlaube den Mikrofonzugriff. Prüfe, ob sich die Anzeige bewegt, wenn du sprichst.',
      },
      {
        title: 'Klick auf „5 Sekunden aufnehmen“',
        body: 'Ein Ring zählt herunter, während du sprichst. Nutze deine normale Stimme und deinen normalen Abstand zum Mikrofon, so wie bei einem echten Anruf.',
      },
      {
        title: 'Sag etwas Brauchbares',
        body: 'Probier: „Test, eins, zwei, drei. Fischers Fritz fischt frische Fische. Zwischen zwei Zwetschgenzweigen zwitschern zwei Schwalben.“ An S-, Z- und F-Lauten hörst du Zischeln und Knacken schnell.',
      },
      {
        title: 'Auf Wiedergabe drücken und zuhören',
        body: 'Hör einmal auf die Lautstärke und einmal auf die Qualität. Mit Kopfhörern hörst du Probleme viel besser als über Laptop-Lautsprecher.',
      },
      {
        title: 'Anpassen und erneut aufnehmen',
        body: 'Ändere immer nur eine Sache, etwa Abstand, Eingangslautstärke oder ein anderes Mikrofon, nimm dann erneut auf und vergleiche.',
      },
    ],
    guide: [
      {
        heading: 'Worauf du in deiner Aufnahme achten solltest',
        body: [
          '- Lautstärke: Man sollte dich gut hören, ohne die Lautsprecher aufzudrehen. Bist du schwach, geh näher ran oder erhöhe die Eingangslautstärke.',
          '- Verzerrung: Knistern oder ein rauer, kratziger Rand bei lauten Wörtern bedeutet, dass das Signal zu stark ist. Senke die Eingangslautstärke oder geh zurück.',
          '- Raumhall: Ein hohler, badezimmerartiger Klang kommt von harten Wänden und Abstand. Näher ans Mikrofon zu gehen hilft am meisten.',
          '- Plopp-Geräusche: Dumpfe Schläge bei P und B sind Luftstöße, die das Mikrofon treffen. Dreh das Mikrofon leicht seitlich zum Mund.',
          '- Hintergrundgeräusche: ein gleichmäßiges Rauschen, Brummen oder Lüftergeräusch unter deiner Stimme. Entferne dich von der Quelle oder lass die Rauschunterdrückung eingeschaltet.',
          '- Aussetzer: Wörter, die ein- und ausblenden, deuten oft auf eine schwache Bluetooth-Verbindung oder zu aggressive Rauschunterdrückung hin.',
        ],
      },
      {
        heading: 'Warum du auf einer Aufnahme anders klingst',
        body: [
          'Fast jeder ist von der eigenen aufgenommenen Stimme überrascht. Beim Sprechen hörst du dich teilweise über die Schädelknochen, die tiefe Frequenzen hinzufügen, die ein Mikrofon nie aufnimmt. Die Aufnahme kommt dem näher, was andere hören. Beurteile sie also nach Klarheit und Lautstärke, nicht danach, ob sie zur Stimme in deinem Kopf passt.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Wie lange kann ich aufnehmen?',
        a: 'Jede Aufnahme dauert 5 Sekunden, das reicht, um Lautstärke und Klarheit zu beurteilen. Du kannst beliebig oft neu aufnehmen. Jede neue Aufnahme ersetzt die vorherige.',
      },
      {
        q: 'Wo wird meine Aufnahme gespeichert?',
        a: 'Nirgendwo dauerhaft. Der Clip liegt zur Wiedergabe im Arbeitsspeicher deines Browsers und wird nie hochgeladen. Schließen oder Neuladen des Tabs löscht ihn.',
      },
      {
        q: 'Warum höre ich nichts, wenn ich auf Wiedergabe drücke?',
        a: 'Prüfe, ob Lautsprecher oder Kopfhörer nicht stummgeschaltet sind und ob sich die Pegelanzeige während der Aufnahme bewegt hat. Blieb sie flach, hat das Mikrofon dich nicht aufgenommen. Erhöhe beim iPhone außerdem die Medienlautstärke mit den Seitentasten.',
      },
      {
        q: 'Warum klingt meine Aufnahme leise oder dumpf?',
        a: 'Meist ist das Mikrofon zu weit weg, die Eingangslautstärke niedrig oder ein anderes Mikrofon aktiv, etwa das eingebaute Laptop-Mikrofon statt deines Headsets. Prüfe zuerst den Gerätenamen im Bereich „Dein Mikrofon“.',
      },
      {
        q: 'Klingt meine Aufnahme bei Zoom oder Discord genauso?',
        a: 'Ähnlich, aber nicht identisch. Jede App wendet ihre eigene Rauschunterdrückung und Kompression an. Eine saubere Aufnahme hier ist ein starkes Zeichen, dass du auch dort gut klingst.',
      },
    ],
  },

  'hear-yourself-mic-test': {
    slug: 'mikrofontest-selbst-hoeren',
    nav: 'Mikrofontest: sich selbst hören',
    blurb: 'Hör dein eigenes Mikrofon live über deinen Kopfhörer.',
    title: 'Mikrofontest: sich selbst live über das Mikrofon hören',
    description:
      'Hör dein Mikrofon in Echtzeit. Schalte die Live-Wiedergabe ein, um Klang, Headset und Pegel beim Sprechen zu prüfen. Kostenlos und privat.',
    h1: 'Mikrofontest: sich selbst hören',
    lede: 'Schalte „Sich live hören“ ein, um dein Mikrofon in Echtzeit zu hören. Setz vorher Kopfhörer auf.',
    introTitle: 'Live-Wiedergabe direkt im Browser',
    intro: [
      'Manchmal willst du keine Aufnahme. Du willst dein Mikrofon beim Sprechen hören, um es zu verschieben, die Lautstärke anzupassen und Probleme in dem Moment zu bemerken, in dem sie auftreten. Der Schalter „Sich live hören“ schickt dein Mikrofon direkt auf deinen Kopfhörer, solange der Test läuft.',
      'Er ist aus gutem Grund standardmäßig aus. Hört dein Mikrofon deine Lautsprecher, läuft der Ton im Kreis und schaukelt sich zu einem lauten Pfeifen hoch. Mit Kopfhörern kann diese Schleife nicht entstehen.',
    ],
    stepsTitle: 'So hörst du dich über dein Mikrofon',
    steps: [
      {
        title: 'Kopfhörer aufsetzen',
        body: 'Kabelgebundene Kopfhörer oder Ohrstöpsel funktionieren am besten. Sie erzeugen die geringste Verzögerung und verhindern, dass deine Lautsprecher zurück ins Mikrofon gelangen.',
      },
      {
        title: 'Test starten',
        body: 'Klick auf „Mikrofon testen“ und erlaube den Mikrofonzugriff. Stell sicher, dass die Pegelanzeige auf deine Stimme reagiert.',
      },
      {
        title: '„Sich live hören“ einschalten',
        body: 'Leg den Schalter um. Du solltest sofort deine eigene Stimme im Kopfhörer hören. Starte mit niedriger Lautstärke und dreh langsam auf.',
      },
      {
        title: 'Beim Anpassen zuhören',
        body: 'Rück das Mikrofon näher und weiter weg, klopf auf den Tisch, raschle mit Papier. Du hörst genau, was das Mikrofon aufnimmt, während du Dinge veränderst.',
      },
      {
        title: 'Danach wieder ausschalten',
        body: 'Leg den Schalter zurück oder klick auf Stopp. Die Wiedergabe endet auch, sobald du die Seite verlässt.',
      },
    ],
    guide: [
      {
        heading: 'Warum es eine leichte Verzögerung gibt',
        body: [
          'Deine Stimme muss vom Mikrofon durch das Audiosystem deines Computers und den Browser und zurück zu deinem Kopfhörer. Das dauert, bei kabelgebundenem Setup typischerweise ein paar hundertstel Sekunden. Du bemerkst es als leichte Verdopplung deiner eigenen Stimme.',
          'Bluetooth-Kopfhörer fügen deutlich mehr hinzu, oft eine Fünftelsekunde oder länger, weil der Ton komprimiert und in beide Richtungen per Funk übertragen wird. Das ist normal und kein Fehler deines Mikrofons. Für die direkteste Wiedergabe nimm kabelgebundene Kopfhörer.',
          'Die Zeile „Geschätzte Latenz“ im Bereich zeigt die Verzögerung, die dein Browser meldet. Nimm sie als Richtwert. Nicht jeder Browser meldet jedes Glied der Kette.',
        ],
      },
      {
        heading: 'Live-Wiedergabe oder Aufnahme: was wann',
        body: [
          'Nutze die Live-Wiedergabe, um ein Mikrofon zu platzieren, deinen Pegel einzustellen oder Brummen und Hintergrundgeräusche zu finden, während du Dinge verschiebst. Nutze die 5-Sekunden-Aufnahme, wenn du beurteilen willst, wie du wirklich klingst, denn beim Sprechen lässt sich schwer kritisch zuhören.',
          'Möchtest du dein Mikrofon dauerhaft im Kopfhörer hören, auch in Spielen und Anrufen, ist das eine System- oder Headset-Einstellung, die meist „Sidetone“ oder Mikrofon-Monitoring heißt.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Warum sollte ich für diesen Test Kopfhörer benutzen?',
        a: 'Ohne sie nimmt dein Mikrofon den eigenen Ton aus den Lautsprechern auf, der verstärkt und erneut aufgenommen wird. Diese Schleife wird binnen ein, zwei Sekunden zu einem lauten Heulen. Kopfhörer halten den Ton vom Mikrofon fern.',
      },
      {
        q: 'Ich habe „Sich live hören“ eingeschaltet, höre aber nichts. Was ist los?',
        a: 'Prüfe, ob sich die Pegelanzeige bewegt, ob die Lautstärke deines Kopfhörers aufgedreht ist und ob der Ton an das Ausgabegerät geht, das du trägst. Beim iPhone kann der Stummschalter die Live-Wiedergabe stumm machen: Stell ihn auf Klingeln und erhöhe die Lautstärke.',
      },
      {
        q: 'Warum höre ich ein Echo meiner eigenen Stimme?',
        a: 'Das ist die Wiedergabeverzögerung. Deine Stimme erreicht deine Ohren zuerst direkt und einen Moment später über den Kopfhörer. Kabelgebundene Kopfhörer halten den Abstand klein. Bei Bluetooth ist er viel deutlicher.',
      },
      {
        q: 'Ist die Verzögerung, die ich höre, dieselbe wie bei Anrufen?',
        a: 'Nein. Die Verzögerung bei Anrufen hängt von der Internetverbindung zwischen dir und der anderen Person ab. Was du hier hörst, ist nur die lokale Schleife innerhalb deines Geräts.',
      },
      {
        q: 'Kann ich mich weiter hören, nachdem ich diese Seite geschlossen habe?',
        a: 'Nein. Die Wiedergabe endet, wenn du den Test stoppst oder die Seite verlässt. Um dein Mikrofon dauerhaft zu hören, nutze die Monitoring-Funktion deines Betriebssystems oder Headsets.',
      },
    ],
  },

  'webcam-and-mic-test': {
    slug: 'webcam-und-mikrofon-test',
    nav: 'Webcam- und Mikrofontest',
    blurb: 'Prüfe Kamera und Mikrofon zusammen vor einem Videoanruf.',
    title: 'Webcam- und Mikrofontest: Kamera und Ton online prüfen',
    description:
      'Teste Webcam und Mikrofon zusammen. Sieh eine Live-Kameravorschau neben deinem Mikrofonpegel, nimm einen Soundcheck auf und mach dich bereit für deinen Videoanruf.',
    h1: 'Webcam- und Mikrofontest',
    lede: 'Sieh deine Kamera und prüfe gleichzeitig dein Mikrofon, damit du vor Beginn des Anrufs bereit bist.',
    introTitle: 'Eine Prüfung für Kamera und Mikrofon',
    intro: [
      'In einen Videoanruf zu kommen und festzustellen, dass die Kamera schwarz oder das Mikrofon stumm ist, ist stressig und vermeidbar. Diese Seite öffnet Webcam und Mikrofon zusammen, zeigt eine Live-Vorschau neben deinem Audiopegel und lässt dich einen kurzen Soundcheck aufnehmen.',
      'Die Vorschau ist gespiegelt, so wie die meisten Meeting-Apps dich dir selbst zeigen. Andere im Anruf sehen dich seitenrichtig. Das Video wird nur auf deinem Bildschirm gezeigt. Es wird nicht aufgenommen, hochgeladen oder gespeichert.',
    ],
    stepsTitle: 'So testest du Webcam und Mikrofon zusammen',
    steps: [
      {
        title: 'Klick auf „Kamera und Mikrofon testen“',
        body: 'Dein Browser fragt nach Kamera und Mikrofon. Erlaube beides. Manche Browser zeigen eine Abfrage, andere fragen zweimal.',
      },
      {
        title: 'Prüfe dein Bild',
        body: 'Sieh dir in der Vorschau Bildausschnitt, Schärfe und Licht an. Deine Augen sollten etwa ein Drittel unter dem oberen Bildrand liegen, mit Licht auf dem Gesicht und nicht hinter dir.',
      },
      {
        title: 'Prüfe deinen Ton',
        body: 'Sprich normal und beobachte die Pegelanzeige neben dem Video. Nimm dann 5 Sekunden auf und spiel sie ab, um zu hören, wie du ankommst.',
      },
      {
        title: 'Wechsle bei Bedarf das Gerät',
        body: 'Hast du mehr als eine Kamera oder ein Mikrofon, erscheinen Menüs, in denen du die Geräte für den Anruf auswählst.',
      },
    ],
    guide: [
      {
        heading: 'In einer Minute besser vor der Kamera aussehen',
        body: [
          '- Dem Licht zugewandt sitzen. Ein Fenster oder eine Lampe vor dir schlägt jedes Kamera-Upgrade. Ein helles Fenster hinter dir macht dich zur Silhouette.',
          '- Kamera auf Augenhöhe bringen. Ein Laptop auf einem Bücherstapel reicht. Von oben in die Kamera zu schauen ist selten vorteilhaft.',
          '- Linse reinigen. Ein Fingerabdruck auf der Laptop- oder Handykamera macht das ganze Bild trüb.',
          '- Auf den Hintergrund achten. Die Vorschau zeigt genau, was alle anderen sehen werden.',
        ],
      },
      {
        heading: 'Wenn die Kameravorschau schwarz bleibt',
        body: [
          'Such zuerst nach einer physischen Abdeckung. Viele Laptops haben einen Schieber über der Linse oder eine Kamerataste auf der Tastatur, und eine externe Webcam hat vielleicht eine Schutzkappe.',
          'Schließe als Nächstes andere Apps, die die Kamera nutzen könnten, etwa Zoom, Teams, FaceTime oder eine Kamera-App. Besonders unter Windows kann immer nur eine App eine Webcam verwenden.',
          'Prüfe zuletzt die Berechtigungen. Dein Browser braucht Kamerazugriff für diese Website, und dein Betriebssystem muss deinem Browser die Kamera überhaupt erlauben. Funktioniert der Mikrofonteil des Tests und die Kamera nicht, sind meist die Berechtigungen schuld.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Wird mein Video aufgenommen oder hochgeladen?',
        a: 'Nein. Die Kameravorschau wird auf deinem eigenen Bildschirm gezeichnet und geht nirgendwo anders hin. Nichts wird aufgenommen, gespeichert oder an einen Server gesendet. Die Kamera schaltet sich aus, wenn du auf Stopp klickst oder die Seite verlässt.',
      },
      {
        q: 'Warum ist meine Kameravorschau gespiegelt?',
        a: 'Die Vorschau ist gespiegelt, damit eine Bewegung nach links auch nach links aussieht, was sich natürlich anfühlt. Meeting-Apps machen das genauso. Die Personen am anderen Ende sehen dich nicht gespiegelt.',
      },
      {
        q: 'Mein Mikrofon funktioniert, aber die Kamera nicht. Was soll ich prüfen?',
        a: 'Such nach einer Linsenabdeckung oder einer Taste zum Ausschalten der Kamera, schließe andere Apps, die sie belegen könnten, und stell sicher, dass sowohl dein Browser als auch dein Betriebssystem den Kamerazugriff erlauben. Der Mikrofontest läuft weiter, auch wenn die Kamera nicht starten kann.',
      },
      {
        q: 'Kann ich eine externe Webcam testen?',
        a: 'Ja. Schließ sie an, starte den Test und wähle sie im Kameramenü aus. Viele Webcams haben auch ein eigenes Mikrofon, das im Mikrofonmenü erscheint.',
      },
      {
        q: 'Welche Auflösung verwendet der Test?',
        a: 'Der Test fordert von deiner Kamera ein 720p-Bild an und zeigt im Bereich unter dem Tool die Auflösung, die dein Browser tatsächlich erhalten hat. Deine Meeting-App kann je nach Verbindung eine andere Auflösung nutzen.',
      },
      {
        q: 'Funktioniert das auch auf Smartphones und Tablets?',
        a: 'Ja. Auf einem Smartphone nutzt der Test die Frontkamera und das eingebaute Mikrofon oder das Mikrofon deines Headsets, falls eines angeschlossen ist.',
      },
    ],
  },
};
