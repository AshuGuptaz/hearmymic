import type { PageTranslation } from '../../data/types';

/** Deutsch (du): Zoom, Discord und die Anleitung „Mikrofon funktioniert nicht“. */
export const deMore: Record<string, PageTranslation> = {
  'zoom-mic-test': {
    slug: 'mikrofon-test-zoom',
    nav: 'Zoom-Mikrofontest',
    blurb: 'Prüfe dein Mikrofon vor einem Zoom-Meeting und gleiche dann die Zoom-Einstellungen ab.',
    title: 'Zoom-Mikrofontest: Mikrofon vor dem Meeting prüfen',
    description:
      'Teste dein Mikrofon, bevor du Zoom beitrittst. Prüfe hier, ob es funktioniert, und nutze dann Mikrofontest und Audioeinstellungen von Zoom.',
    h1: 'Zoom-Mikrofontest',
    lede: 'Stell sicher, dass dein Mikrofon funktioniert, bevor dein Zoom-Meeting beginnt, ohne Zoom zu öffnen oder einem Anruf beizutreten.',
    introTitle: 'Erst testen, dann Zoom einrichten',
    intro: [
      'Die schnellste Mikrofonprüfung für Zoom hat zwei Teile. Bestätige zuerst hier, dass dein Mikrofon überhaupt funktioniert, und notier dir seinen Namen im Bereich „Dein Mikrofon“. Stell dann sicher, dass Zoom dasselbe Mikrofon verwendet. Die meisten „Man hört mich in Zoom nicht“-Probleme entstehen, weil Zoom ein anderes Gerät abhört als das, in das du sprichst.',
      'Zoom hat auch einen eigenen Test. Öffne in der Desktop-App die Einstellungen, wähl Audio und klick auf Mikrofon testen. Zoom nimmt ein paar Sekunden auf und spielt sie über den ausgewählten Lautsprecher ab.',
    ],
    stepsTitle: 'So testest du dein Mikrofon für Zoom',
    steps: [
      {
        title: 'Starte den Test auf dieser Seite',
        body: 'Klick auf „Mikrofon testen“, sprich und prüfe, ob sich die Anzeige bewegt. Merk dir den im Bereich angezeigten Mikrofonnamen.',
      },
      {
        title: 'Öffne die Audioeinstellungen von Zoom',
        body: 'Klick in der Zoom-Desktop-App auf dein Profilbild, dann auf Einstellungen und Audio. In einem Meeting klickst du auf den Pfeil neben der Schaltfläche Stummschalten und wählst Audioeinstellungen.',
      },
      {
        title: 'Wähl dasselbe Mikrofon aus',
        body: 'Wähl unter Mikrofon das Gerät, das hier funktioniert hat. „Wie System“ folgt dem Standard deines Computers, der sich ändern kann, wenn du ein Headset ansteckst.',
      },
      {
        title: 'Nutze den Mikrofontest von Zoom',
        body: 'Klick auf Mikrofon testen, sprich und hör dir die Wiedergabe an. Lass „Mikrofonlautstärke automatisch anpassen“ eingeschaltet, außer du hast einen Grund, den Pegel von Hand einzustellen.',
      },
      {
        title: 'Tritt einem Testmeeting bei, wenn du sichergehen willst',
        body: 'Geh auf zoom.us/test, um einem privaten Übungsmeeting beizutreten. Zoom führt dich durch einen Lautsprecher- und einen Mikrofontest, bevor dich jemand anderes hören kann.',
      },
    ],
    faqs: [
      {
        q: 'Mein Mikrofon funktioniert hier, aber nicht in Zoom. Warum?',
        a: 'Sehr wahrscheinlich verwendet Zoom ein anderes Mikrofon oder hat keine Berechtigung. Wähl in den Einstellungen unter Audio das richtige Gerät. Öffne auf einem Mac außerdem Systemeinstellungen, Datenschutz & Sicherheit, Mikrofon und prüfe, ob Zoom eingeschaltet ist. Prüfe unter Windows Einstellungen, Datenschutz & Sicherheit, Mikrofon.',
      },
      {
        q: 'Warum sehe ich in Zoom „Audio beitreten“ statt einer Stummschalten-Taste?',
        a: 'Du bist dem Meeting ohne Audioverbindung beigetreten, daher hört dich niemand und du hörst niemanden. Klick auf Audio beitreten und wähl dann Mit Computer-Audio beitreten.',
      },
      {
        q: 'Man sagt mir, ich klinge in Zoom abgehackt oder roboterhaft. Liegt das an meinem Mikrofon?',
        a: 'Nimm hier einen 5-Sekunden-Clip auf. Klingt die Wiedergabe sauber, ist dein Mikrofon in Ordnung und das Problem liegt an deiner Internetverbindung oder der Rauschunterdrückung von Zoom. Stell in den Audioeinstellungen von Zoom die Unterdrückung von Hintergrundgeräuschen auf Niedrig.',
      },
      {
        q: 'Kann ich diesen Test für Zoom im Browser verwenden?',
        a: 'Ja, und er passt dort besonders gut. Der Web-Client von Zoom nutzt denselben Browser-Mikrofonzugriff wie diese Seite. Denk daran, dass die Berechtigung pro Website erteilt wird, du musst das Mikrofon also auch für die Zoom-Seite zulassen.',
      },
      {
        q: 'Was ist der „Originalton“ in Zoom?',
        a: 'Das ist eine Option, die den Großteil der Audioverarbeitung von Zoom abschaltet. Sie ist für Musik oder professionelle Mikrofone in ruhigen Räumen gedacht. Lass sie bei alltäglichen Anrufen aus, damit Zoom Echo und Hintergrundgeräusche entfernen kann.',
      },
    ],
  },

  'discord-mic-test': {
    slug: 'mikrofon-test-discord',
    nav: 'Discord-Mikrofontest',
    blurb: 'Finde heraus, ob das Mikrofonproblem an deiner Hardware oder an den Discord-Einstellungen liegt.',
    title: 'Discord-Mikrofontest: Mikrofon und Spracheinstellungen prüfen',
    description:
      'Teste dein Mikrofon für Discord. Bestätige hier, dass es funktioniert, und korrigiere dann Eingabegerät, Eingabeempfindlichkeit und Push-to-Talk in Discord.',
    h1: 'Discord-Mikrofontest',
    lede: 'Deine Freunde hören dich im Voice-Chat nicht? Prüfe zuerst hier dein Mikrofon und behebe dann die Discord-Einstellung, die im Weg steht.',
    introTitle: 'Liegt es am Mikrofon oder an Discord?',
    intro: [
      'Discord legt mehrere Schichten zwischen dein Mikrofon und deine Freunde: eine Einstellung für das Eingabegerät, ein Empfindlichkeits-Gate, optionales Push-to-Talk und die Rauschunterdrückung. Jede davon kann ein einwandfreies Mikrofon stummschalten. Ein Test hier nimmt Discord aus dem Spiel. Bewegt sich die Anzeige auf dieser Seite, ist deine Hardware in Ordnung, und die Lösung liegt in den Einstellungen unter Sprache & Video in Discord.',
      'Discord hat außerdem eine eingebaute Prüfung. Öffne die Benutzereinstellungen, geh zu Sprache & Video und klick unter Mikrofontest auf Los geht’s. Discord spielt dir deine Stimme ab, bis du es stoppst.',
    ],
    stepsTitle: 'So testest du dein Mikrofon für Discord',
    steps: [
      {
        title: 'Teste dein Mikrofon auf dieser Seite',
        body: 'Klick auf „Mikrofon testen“ und sprich. Merk dir den Mikrofonnamen im Bereich. Bewegt sich hier nichts, liegt das Problem nicht an Discord.',
      },
      {
        title: 'Stell das Eingabegerät in Discord ein',
        body: 'Klick in Discord auf das Zahnrad neben deinem Benutzernamen, dann auf Sprache & Video. Stell Eingabegerät auf das Mikrofon, das hier funktioniert hat. „Standard“ kann auf das falsche verweisen.',
      },
      {
        title: 'Prüfe die Eingabeempfindlichkeit',
        body: 'Schalte bei ausgewählter Sprachaktivierung die automatische Eingabeempfindlichkeit ein oder zieh den Regler so, dass deine normale Sprechstimme im grünen Teil der Leiste landet.',
      },
      {
        title: 'Starte den Mikrofontest von Discord',
        body: 'Klick auf Los geht’s und sprich. Wenn du dich hörst, hören dich auch deine Freunde.',
      },
    ],
    faqs: [
      {
        q: 'Mein Mikrofon funktioniert hier, aber niemand hört mich in Discord. Was soll ich prüfen?',
        a: 'Prüf der Reihe nach vier Dinge: das Eingabegerät unter Sprache & Video, ob du stummgeschaltet oder vom Server stummgeschaltet bist (roter Strich am Mikrofonsymbol), ob Push-to-Talk ohne zugewiesene Taste aktiv ist und ob die Eingabeempfindlichkeit so hoch steht, dass deine Stimme das Gate nie öffnet.',
      },
      {
        q: 'Warum schneidet Discord den Anfang oder das Ende meiner Wörter ab?',
        a: 'Die Schwelle der Eingabeempfindlichkeit ist zu hoch, deshalb zählen leise Silben nicht als Sprache. Zieh den Regler herunter oder schalte die automatische Empfindlichkeit ein. Wenn du die Krisp-Rauschunterdrückung nutzt, probier zum Vergleich, sie auszuschalten.',
      },
      {
        q: 'Funktioniert dieser Test auch für Discord im Browser?',
        a: 'Ja. Discord im Browser nutzt denselben Mikrofonzugriff wie diese Seite. Du musst das Mikrofon für die Discord-Seite separat zulassen, weil Browser die Berechtigung pro Website erteilen.',
      },
      {
        q: 'Warum ist mein Mikrofon in Discord so leise?',
        a: 'Erhöhe die Eingabelautstärke unter Sprache & Video und prüf den Mikrofonpegel in den Sound-Einstellungen deines Systems. Prüf außerdem, ob die automatische Verstärkungsregelung in den Sprachverarbeitungsoptionen von Discord eingeschaltet ist. Nimm hier einen Clip auf, um festzustellen, ob das Mikrofon selbst leise ist.',
      },
      {
        q: 'Warum hören meine Freunde mein Spiel oder meine Lautsprecher über mein Mikrofon?',
        a: 'Dein Mikrofon nimmt deine Lautsprecher auf. Nutze Kopfhörer, lass die Echounterdrückung in Discord eingeschaltet und stell sicher, dass das Eingabegerät kein „Stereomix“ oder Loopback-Gerät ist, das den gesamten Ton deines Computers sendet.',
      },
    ],
  },

  'fix/mic-not-working': {
    slug: 'mikrofon-funktioniert-nicht',
    nav: 'Mikrofon funktioniert nicht',
    blurb: 'Eine Schritt-für-Schritt-Checkliste für ein Mikrofon, das stumm bleibt.',
    title: 'Mikrofon funktioniert nicht? So behebst du das Problem',
    description:
      'Mikrofon funktioniert nicht? Geh diese Checkliste durch: Stummschalter, das richtige Eingabegerät, Browser- und Systemberechtigungen und Apps, die das Mikrofon belegen.',
    h1: 'Mikrofon funktioniert nicht? So behebst du es',
    lede: 'Starte den Test unten und arbeite dann die Checkliste ab. Die meisten stummen Mikrofone sind nach den ersten drei Schritten repariert.',
    introTitle: 'Finde zuerst heraus, wo das Problem liegt',
    intro: [
      'Ein Mikrofon, das „nicht funktioniert“, arbeitet meist einwandfrei und wird irgendwo unterwegs gestoppt: von einem Stummschalter, einem falsch gewählten Gerät, einer Berechtigung oder einer anderen App. Der Test oben hilft dir, das schnell einzugrenzen.',
      'Startet der Test nicht, sagt dir die angezeigte Meldung, ob das Mikrofon blockiert, nicht vorhanden oder belegt ist. Startet der Test, aber die Anzeige bleibt flach, sieht dein Computer ein Mikrofon und bekommt nur Stille von ihm. Das deutet auf einen Stummschalter, eine Lautstärkeeinstellung oder das falsche Gerät hin.',
    ],
    stepsTitle: 'Ein Mikrofon reparieren, das nicht funktioniert',
    steps: [
      {
        title: 'Prüfe die physische Stummschaltung und die Verbindung',
        body: 'Such nach einer Stummtaste am Headset, am Kabel oder am Mikrofon selbst und nach einer Mikrofon-Stummtaste auf der Tastatur deines Laptops. Zieh das Mikrofon ab und steck es fest wieder an. Probier einen anderen USB-Anschluss. Ein 3,5-mm-Stecker gehört in die Mikrofon- oder Headset-Buchse, nicht in die reine Kopfhörerbuchse.',
      },
      {
        title: 'Wähl das richtige Mikrofon aus',
        body: 'Starte den Test und lies den Gerätenamen im Bereich „Dein Mikrofon“. Ist es nicht das Mikrofon, in das du sprichst, wähl das richtige im Mikrofonmenü oder ändere die Standardeingabe in den Sound-Einstellungen deines Systems.',
      },
      {
        title: 'Dreh die Eingangslautstärke hoch',
        body: 'Öffne unter Windows 11 Einstellungen, System, Sound und klick unter Eingabe auf dein Mikrofon. Öffne auf einem Mac Systemeinstellungen, Ton, Eingabe. Stell sicher, dass die Eingangslautstärke nicht auf null steht.',
      },
      {
        title: 'Prüfe die Berechtigungen im Browser und im System',
        body: 'Klick auf das Symbol links neben der Adressleiste und stell Mikrofon auf Zulassen. Prüf dann im Bereich Mikrofon der Datenschutzeinstellungen, ob dein Betriebssystem deinem Browser die Nutzung des Mikrofons erlaubt.',
      },
      {
        title: 'Schließ andere Apps und starte neu',
        body: 'Beende Zoom, Teams, Discord, Aufnahmesoftware und andere Browser-Tabs, die das Mikrofon belegen könnten. Ändert sich nichts, starte den Browser neu, danach den Computer. Das löst hängende Audiogeräte öfter, als man denkt.',
      },
    ],
    faqs: [
      {
        q: 'Der Test sagt „Dein Mikrofon wird gerade verwendet“. Was bedeutet das?',
        a: 'Dein Browser hat das Mikrofon gefunden, konnte es aber nicht öffnen, meist weil ein anderes Programm es exklusiv belegt. Schließe Meeting-Apps, Voice-Chat und Aufnahmesoftware und klick dann auf Erneut versuchen. Unter Windows gibt ein Neustart des Computers ein hängendes Mikrofon frei.',
      },
      {
        q: 'Der Test sagt „Kein Mikrofon gefunden“. Was soll ich tun?',
        a: 'Dein Browser sieht kein Eingabegerät. Schließ das Mikrofon neu an, probier einen anderen Anschluss oder ein anderes Kabel und schau in den Sound-Einstellungen deines Systems nach, ob es dort erscheint. Listet es das System auch nicht, liegt das Problem am Mikrofon, am Kabel oder am Anschluss.',
      },
      {
        q: 'Woran erkenne ich, ob mein Mikrofon kaputt ist?',
        a: 'Probier es an einem zweiten Gerät, etwa an einem anderen Computer oder einem Smartphone. Versagt es überall, ist das Mikrofon defekt. Funktioniert es woanders, liegt das Problem in den Einstellungen, am Anschluss oder an den Treibern des ersten Geräts.',
      },
      {
        q: 'Mein Mikrofon funktioniert in einer App, aber in einer anderen nicht. Warum?',
        a: 'Jede App wählt ihr eigenes Mikrofon und braucht ihre eigene Berechtigung. Öffne die Audioeinstellungen der betroffenen App, wähl das Mikrofon mit Namen aus und prüf, ob dein Betriebssystem dieser App die Nutzung erlaubt.',
      },
      {
        q: 'Das Mikrofon meines Bluetooth-Headsets funktioniert nicht. Tipps?',
        a: 'Stell sicher, dass es als Headset verbunden ist und nicht nur als Kopfhörer. Viele Geräte zeigen zwei Einträge für ein Headset, und nur der Eintrag „Freisprechen“ oder „Headset“ enthält das Mikrofon. Bluetooth aus- und wieder einzuschalten oder neu zu koppeln stellt es meist wieder her.',
      },
    ],
  },

  'webcam-test': {
    slug: 'webcam-test',
    nav: 'Webcam-Test',
    blurb: 'Sehen Sie Ihre Kamera live und prüfen Sie Bildausschnitt, Licht und Schärfe.',
    title: 'Webcam-Test: Kamera online prüfen (kostenlos, privat)',
    description:
      'Testen Sie Ihre Webcam online mit einem Klick: Live-Vorschau, Auflösung, Bildausschnitt und Licht prüfen. Nichts wird aufgezeichnet oder hochgeladen.',
    h1: 'Webcam-Test',
    lede: 'Klicken Sie auf die Schaltfläche, um zu sehen, was Ihre Kamera sieht. Die Vorschau bleibt auf Ihrem Bildschirm, nichts wird aufgezeichnet oder hochgeladen.',
    introTitle: 'Prüfen Sie Ihre Kamera, bevor andere sie sehen',
    intro: [
      'Dieser Webcam-Test öffnet Ihre Kamera im Browser und zeigt eine Live-Vorschau, damit Sie das Bild vor einem Meeting, einem Stream oder einem Vorstellungsgespräch prüfen können. Er funktioniert mit eingebauten Laptop-Kameras, USB-Webcams, Handykameras und virtuellen Kameras.',
      'Neben dem Video zeigt der Test auch einen Mikrofonpegel an, weil viele Videoprobleme in Wahrheit Kamera- und Mikrofonprobleme zugleich sind. Wenn Sie sich nur für das Bild interessieren, können Sie die Anzeige ignorieren.',
    ],
    stepsTitle: 'So testen Sie Ihre Webcam online',
    steps: [
      {
        title: 'Auf „Kamera und Mikrofon testen“ klicken',
        body: 'Ihr Browser fragt nach der Erlaubnis, die Kamera zu verwenden. Wählen Sie Zulassen. Erscheint auch eine Mikrofonabfrage, lassen Sie sie zu oder ignorieren Sie sie, wenn Sie nur das Bild prüfen möchten.',
      },
      {
        title: 'Die Vorschau ansehen',
        body: 'Sie sollten sich nach ein bis zwei Sekunden sehen. Die Vorschau ist gespiegelt, wie in den meisten Meeting-Apps. Andere sehen Sie seitenrichtig.',
      },
      {
        title: 'Die Auflösung prüfen',
        body: 'Das Feld unter dem Tool zeigt die Auflösung, die Ihr Browser erhalten hat. Eine moderne Webcam liefert normalerweise 720p oder 1080p. Ein deutlich kleinerer Wert kann auf eine einfache Kamera oder einen zu langsamen USB-Anschluss hinweisen.',
      },
      {
        title: 'Die richtige Kamera wählen',
        body: 'Haben Sie mehrere Kameras, können Sie über ein Menü wechseln. So finden Sie heraus, welche die externe Webcam und welche die eingebaute Laptop-Kamera ist.',
      },
      {
        title: 'Den Test beenden',
        body: 'Klicken Sie auf Stopp oder verlassen Sie die Seite. Die Kamera-LED Ihres Geräts sollte sofort ausgehen.',
      },
    ],
    guide: [
      {
        heading: 'So sieht ein gutes Webcam-Bild aus',
        body: [
          '- Licht: Stellen Sie ein Fenster oder eine Lampe vor sich. Licht von hinten macht Sie zur Silhouette, egal wie gut die Kamera ist.',
          '- Höhe: Das Objektiv sollte ungefähr auf Augenhöhe sein. Legen Sie einen Laptop auf ein paar Bücher.',
          '- Abstand: Sitzen Sie etwa eine Armlänge entfernt, Kopf und Schultern im Bild.',
          '- Schärfe: Wischen Sie das Objektiv mit einem weichen Tuch ab. Ein Fingerabdruck ist die häufigste Ursache für ein unscharfes Bild.',
          '- Hintergrund: Die Vorschau zeigt genau, was andere hinter Ihnen sehen.',
        ],
      },
      {
        heading: 'Wenn das Bild schwarz bleibt',
        body: [
          'Suchen Sie zuerst nach einer physischen Abdeckung. Viele Laptops haben einen Schieber oder eine Taste zum Ausschalten der Kamera, und eine externe Webcam hat manchmal eine Objektivkappe.',
          'Schließen Sie dann alles, was die Kamera nutzen könnte: Zoom, Teams, FaceTime, OBS oder eine Kamera-App. Unter Windows kann eine Webcam immer nur von einer App verwendet werden.',
          'Prüfen Sie schließlich die Berechtigungen. Ihr Browser braucht Kamerazugriff für diese Website, und Ihr Betriebssystem muss dem Browser die Kameranutzung erlauben.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Ist mein Webcam-Test privat?',
        a: 'Ja. Das Video wird nur auf Ihrem eigenen Bildschirm angezeigt und geht nirgendwohin. Nichts wird aufgezeichnet, gespeichert oder an einen Server gesendet. Die Kamera schaltet sich aus, wenn Sie auf Stopp klicken oder die Seite verlassen.',
      },
      {
        q: 'Warum funktioniert meine Webcam im Test nicht?',
        a: 'Übliche Ursachen sind eine Abdeckung oder Kamera-aus-Taste, eine andere App, die die Kamera schon nutzt, oder blockierte Berechtigungen. Schließen Sie andere Kamera-Apps, prüfen Sie die Website-Berechtigungen im Browser und die Kamera-Datenschutzeinstellungen Ihres Betriebssystems.',
      },
      {
        q: 'Warum ist das Bild gespiegelt?',
        a: 'Die Vorschau ist wie ein Spiegel umgedreht, damit sich eine Bewegung nach links natürlich anfühlt. Bei einem Videoanruf sehen andere Sie seitenrichtig.',
      },
      {
        q: 'Wie teste ich eine externe Webcam?',
        a: 'Schließen Sie sie an, starten Sie den Test und wählen Sie sie im Kamera-Menü aus. Erscheint sie nicht, versuchen Sie einen anderen USB-Anschluss und prüfen Sie, ob eine andere App sie verwendet.',
      },
      {
        q: 'Kann ich die Kamera meines Handys testen?',
        a: 'Ja. Öffnen Sie diese Seite im Browser Ihres Handys. Sie nutzt die Frontkamera, und über das Kamera-Menü können Sie meist zur Rückkamera wechseln.',
      },
      {
        q: 'Welche Auflösung hat meine Webcam?',
        a: 'Das Feld unter dem Tool zeigt die Auflösung, die Ihr Browser von der Kamera erhalten hat. Der Test fordert 720p an, daher kann eine leistungsfähigere Kamera hier trotzdem 720p anzeigen. Meeting-Apps wählen ihre eigene Auflösung.',
      },
    ],
  },

  'is-my-mic-working': {
    slug: 'funktioniert-mein-mikrofon',
    nav: 'Funktioniert mein Mikrofon?',
    blurb: 'Ein Klick zeigt, ob Ihr Mikrofon an ist und Sie aufnimmt.',
    title: 'Funktioniert mein Mikrofon? Prüfen, ob es an ist',
    description:
      'Finden Sie in Sekunden heraus, ob Ihr Mikrofon an ist und funktioniert. Sprechen Sie und beobachten Sie die Pegelanzeige. Kostenlos, im Browser.',
    h1: 'Funktioniert mein Mikrofon?',
    lede: 'Klicken Sie auf die Schaltfläche und sagen Sie ein paar Worte. Bewegt sich die Anzeige, ist Ihr Mikrofon an und funktioniert.',
    introTitle: 'Eine schnelle Ja-Nein-Antwort',
    intro: [
      'Klicken Sie auf „Mikrofon testen“, erlauben Sie den Mikrofonzugriff und sprechen Sie. Die Pegelanzeige folgt Ihrer Stimme. Bewegt sie sich, ist Ihr Mikrofon an und Ihr Computer oder Handy hört es. Bleibt sie flach, zeigt Ihnen die Seite, wo Sie weitersuchen können.',
      'Eine bewegte Anzeige beweist nur, dass Ihr Gerät das Mikrofon hört. Sie beweist nicht, dass eine App wie Zoom oder Discord dasselbe nutzt. Die schnellen Prüfungen unten decken auch das ab.',
    ],
    stepsTitle: 'So prüfen Sie, ob Ihr Mikrofon an ist',
    steps: [
      {
        title: 'Test starten und sprechen',
        body: 'Klicken Sie auf „Mikrofon testen“, wählen Sie Zulassen, wenn der Browser fragt, und sagen Sie einen Satz in normaler Lautstärke.',
      },
      {
        title: 'Die Pegelanzeige beobachten',
        body: 'Die Anzeige sollte mit Ihrer Stimme steigen und fallen und beim Sprechen etwa die mittlere bis obere Hälfte erreichen. Eine flache Anzeige bedeutet, dass kein Ton ankommt.',
      },
      {
        title: 'Aufnehmen und abspielen',
        body: 'Nehmen Sie 5 Sekunden auf und spielen Sie sie ab. Hören Sie sich deutlich, funktioniert Ihr Mikrofon und nimmt auf, was Sie erwarten.',
      },
      {
        title: 'Bei flacher Anzeige die Stummschaltung prüfen',
        body: 'Suchen Sie einen Stummschalter an Ihrem Headset, eine Mikrofon-aus-Taste am Laptop und ein stummgeschaltetes Mikrofon in den Soundeinstellungen des Systems.',
      },
      {
        title: 'Prüfen, ob Sie das richtige Mikrofon verwenden',
        body: 'Haben Sie mehrere, erscheint ein Mikrofon-Menü. Wählen Sie das, in das Sie tatsächlich sprechen, etwa Ihr Headset, und versuchen Sie es erneut.',
      },
    ],
    faqs: [
      {
        q: 'Woran erkenne ich, ob mein Mikrofon an ist?',
        a: 'Starten Sie den Test und sprechen Sie. Bewegt sich die Pegelanzeige, ist das Mikrofon an und Ihr Gerät empfängt Ton. Manche Headsets haben auch eine LED oder einen Schalter, aber die Anzeige ist die zuverlässigste Prüfung.',
      },
      {
        q: 'Die Anzeige bewegt sich nicht. Was nun?',
        a: 'Prüfen Sie den Stummschalter am Headset und eine Mikrofon-aus-Taste am Laptop. Stellen Sie dann sicher, dass im Menü das richtige Mikrofon gewählt ist und dass Browser und Betriebssystem den Mikrofonzugriff erlauben.',
      },
      {
        q: 'Mein Mikrofon funktioniert hier, aber in meiner Anruf-App hört man mich nicht.',
        a: 'Die App nutzt wahrscheinlich ein anderes Mikrofon oder hat keine Berechtigung. Öffnen Sie die Audioeinstellungen der App, wählen Sie das Mikrofon, das hier funktioniert hat, und prüfen Sie die Mikrofon-Datenschutzeinstellungen Ihres Systems für diese App.',
      },
      {
        q: 'Warum fragt der Browser immer wieder nach der Berechtigung?',
        a: 'Browser fragen einmal pro Website und können sich Ihre Wahl merken, wenn Sie zulassen. Fragt er jedes Mal, löschen Ihre Datenschutzeinstellungen möglicherweise beim Schließen die Website-Berechtigungen.',
      },
      {
        q: 'Kann dieser Test mich aufnehmen?',
        a: 'Nur für die 5-Sekunden-Wiedergabe und nur auf Ihrem eigenen Gerät. Nichts wird hochgeladen oder anderswo gespeichert, und die Aufnahme ist weg, wenn Sie die Seite verlassen.',
      },
    ],
  },
};
