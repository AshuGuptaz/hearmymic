import type { PageTranslation } from '../../data/types';

/** Français. Keys are the English slugs. */
export const fr: Record<string, PageTranslation> = {
  '': {
    slug: '',
    nav: 'Test micro',
    blurb: 'Vérifiez votre micro avec un indicateur en direct, une écoute et les détails de l’appareil.',
    title: 'Test micro : testez votre micro en ligne | HearMyMic',
    description:
      'Testez votre micro en quelques secondes. Niveau en direct, enregistrement de 5 secondes à réécouter, ou écoute en temps réel. Gratuit, privé, sans rien installer.',
    h1: 'Test micro',
    lede: 'Vérifiez que votre microphone fonctionne et écoutez comment vous sonnez. C’est gratuit, ça prend quelques secondes et tout se passe dans votre navigateur.',
    introTitle: 'Un moyen rapide et privé de tester votre microphone',
    intro: [
      'HearMyMic répond à deux questions avant votre prochain appel, live ou enregistrement : mon micro me capte-t-il, et comment est-ce que je sonne ? Appuyez sur le bouton, autorisez l’accès, et l’indicateur bouge quand vous parlez. S’il bouge, votre micro fonctionne.',
      'Vous pouvez ensuite enregistrer un extrait de 5 secondes et le réécouter, activer l’écoute en direct pour vous entendre dans votre casque, ou choisir un autre micro si vous en avez plusieurs. Tout est traité sur votre appareil. Aucun son n’est envoyé ni conservé.',
    ],
    stepsTitle: 'Comment tester votre micro',
    steps: [
      {
        title: 'Appuyez sur « Tester mon micro »',
        body: 'Votre navigateur demande si cette page peut utiliser votre microphone. Choisissez Autoriser. Si aucune demande n’apparaît, cherchez une icône de micro ou de cadenas dans la barre d’adresse.',
      },
      {
        title: 'Parlez et regardez l’indicateur',
        body: 'Parlez à votre volume habituel. La forme d’onde et la barre de niveau doivent réagir tout de suite. Un niveau vert stable avec la mention « Bon » signifie qu’on vous entend bien.',
      },
      {
        title: 'Enregistrez 5 secondes et écoutez',
        body: 'Appuyez sur Enregistrer, dites une phrase ou deux, puis appuyez sur lecture. C’est ce qui se rapproche le plus de ce que les autres entendent de vous.',
      },
      {
        title: 'Corrigez ce qui sonne mal',
        body: 'Trop faible, avec de l’écho ou muet ? La mention de niveau et le panneau « Votre microphone » indiquent la cause, et les guides de dépannage vous expliquent la solution.',
      },
    ],
    guide: [
      {
        heading: 'Ce que vous pouvez faire avec HearMyMic',
        body: [
          'HearMyMic est un test de microphone et de webcam gratuit qui fonctionne dans votre navigateur. Il réunit les vérifications dont on a généralement besoin, sans installer d’application ni rejoindre un appel juste pour savoir si on vous entend.',
          '- Indicateur et forme d’onde en direct : montrent votre voix pendant que vous parlez, pour voir d’un coup d’œil si le micro vous capte.',
          '- Enregistrer et réécouter : capture 5 secondes à écouter, ce qui se rapproche le plus de ce qu’entendent les autres.',
          '- S’entendre en direct : envoie votre micro dans votre casque en temps réel, pratique pour placer un micro ou repérer du bruit.',
          '- Détails de l’appareil : affichent le nom du micro, la fréquence d’échantillonnage, les canaux et si l’annulation d’écho, la suppression du bruit et le contrôle automatique du gain sont activés.',
          '- Sélecteur de micro : permet de passer d’un micro connecté à un autre sans quitter la page.',
          '- Test webcam : la page de test webcam et micro ajoute un aperçu en direct de la caméra à côté de l’indicateur de niveau.',
        ],
      },
      {
        heading: 'Quand faire un test micro',
        body: [
          'Faites un test dès que quelque chose change dans votre installation : un nouveau casque, un nouvel ordinateur, une mise à jour du navigateur ou du système qui a pu réinitialiser vos réglages de confidentialité. Cela vaut aussi la peine avant un moment important, comme un entretien d’embauche, un examen en ligne, l’enregistrement d’un podcast ou un live.',
          'Les joueurs l’utilisent pour vérifier que leur casque marche avant de rejoindre le chat vocal, et les élèves et enseignants avant un cours en ligne. Si on vous dit que vous sonnez faible, lointain ou robotique, un enregistrement ici vous aide à entendre le problème et à savoir s’il vient du micro, de la pièce ou de l’application.',
        ],
      },
      {
        heading: 'Quel test choisir',
        body: [
          'Le test ci-dessus est le même sur chaque page, mais chaque page est pensée pour un usage différent. Pour juger votre son, utilisez le test micro avec enregistrement. Pour vous écouter pendant que vous parlez, essayez le test pour s’entendre. Avant un appel vidéo, le test webcam et micro vérifie votre image et votre son en même temps.',
        ],
      },
      {
        heading: 'Ce que signifie la mention de niveau',
        body: [
          'L’indicateur mesure la force du signal de votre micro par rapport au signal le plus fort que votre navigateur peut capter. La mention le traduit en mots simples.',
          '- Faible : votre voix arrive au micro, mais à peine. On risque de vous demander de parler plus fort. Rapprochez-vous ou augmentez le volume d’entrée dans les réglages du système.',
          '- Bon : un niveau sain pour les appels et les enregistrements, avec de la marge quand vous riez ou élevez la voix.',
          '- Fort : le signal est proche du maximum. Les sons forts peuvent saturer. Reculez un peu ou baissez le volume d’entrée.',
          'La mention est un repère, pas une mesure de laboratoire. Le contrôle automatique du gain, activé par défaut dans beaucoup de navigateurs, ajuste sans cesse votre niveau, ce qui fait varier un peu la valeur.',
        ],
      },
      {
        heading: 'Ce qu’affiche le panneau « Votre microphone »',
        body: [
          'Une fois le test lancé, le panneau sous l’outil liste ce que votre navigateur indique sur le micro ouvert : le nom de l’appareil, la fréquence d’échantillonnage, le nombre de canaux et si l’annulation d’écho, la suppression du bruit et le contrôle automatique du gain sont activés.',
          'Le nom de l’appareil est la ligne la plus utile. S’il indique « Webcam » alors que vous attendiez votre casque, vous avez trouvé le problème. Choisissez le bon micro dans la liste qui apparaît quand plusieurs sont connectés.',
          'La latence estimée est le délai que signale votre navigateur entre la capture du son et sa lecture. Certains navigateurs ne la signalent pas, et le panneau l’indique alors.',
        ],
      },
      {
        heading: 'Des moyens rapides d’avoir un meilleur son',
        body: [
          'Quelques petits changements font plus de différence que la plupart des achats. Testez après chacun pour voir lequel aide.',
          '- Distance : gardez la perche du casque ou le micro de bureau proche, à environ une largeur de main de la bouche. Diviser la distance par deux vous rend bien plus audible par rapport à la pièce.',
          '- Pièce : les murs durs et les sols nus ajoutent de l’écho. Rideaux, tapis ou coussins l’atténuent.',
          '- Bruit : éteignez les ventilateurs et fermez les fenêtres si possible, et éloignez le micro des grilles du ventilateur de l’ordinateur.',
          '- Casque : portez-le pendant les appels pour que la voix de l’autre personne ne revienne pas de vos haut-parleurs dans le micro.',
          '- Niveau : parlez normalement et visez un « Bon » stable. Sinon, ajustez le volume d’entrée dans les réglages son du système.',
        ],
      },
      {
        heading: 'Est-ce sûr d’autoriser l’accès au micro ?',
        body: [
          'Oui. Le test s’exécute comme du code dans l’onglet de votre navigateur. Votre son va du micro à l’indicateur à l’écran, et nulle part ailleurs. Pas de compte, pas d’envoi, pas d’enregistrement côté serveur. L’extrait de 5 secondes reste dans la mémoire de votre navigateur et disparaît quand vous fermez ou rechargez la page.',
          'Vous pouvez retirer l’autorisation à tout moment depuis l’icône de cadenas ou de réglages dans la barre d’adresse.',
        ],
      },
      {
        heading: 'Ce que ce test ne peut pas vous dire',
        body: [
          'HearMyMic mesure ce que votre navigateur peut voir. Il ne peut pas juger des qualités de studio comme la réponse en fréquence, ni regarder à l’intérieur d’autres applications, qui ajoutent leur propre traitement. Il ne teste pas non plus vos haut-parleurs ni votre connexion internet : un appel peut donc hacher même avec un très bon micro.',
          'Si le test réussit mais qu’une application ne vous entend toujours pas, vérifiez le périphérique d’entrée de cette application et son autorisation d’accès au micro dans votre système d’exploitation.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Comment savoir si mon micro fonctionne ?',
        a: 'Appuyez sur « Tester mon micro », autorisez l’accès et parlez. Si l’indicateur de niveau et la forme d’onde bougent avec votre voix, votre microphone fonctionne. Pour une seconde vérification, enregistrez 5 secondes et réécoutez-les.',
      },
      {
        q: 'Pourquoi l’indicateur ne bouge-t-il pas quand je parle ?',
        a: 'Les causes les plus fréquentes sont un micro coupé (vérifiez l’interrupteur du casque ou du câble), un mauvais micro sélectionné ou un volume d’entrée à zéro dans les réglages son du système. Si le test ne démarre pas du tout, votre navigateur bloque probablement l’accès au micro.',
      },
      {
        q: 'HearMyMic enregistre-t-il ou conserve-t-il ma voix ?',
        a: 'Non. Votre son est traité dans votre navigateur et jamais envoyé à un serveur. L’enregistrement facultatif de 5 secondes reste dans la mémoire du navigateur pour la lecture, et il est supprimé quand vous quittez ou rechargez la page.',
      },
      {
        q: 'Dois-je installer quelque chose ?',
        a: 'Non. Le test fonctionne dans les versions récentes de Chrome, Edge, Firefox et Safari sur ordinateur, téléphone et tablette. Rien à télécharger, aucune inscription.',
      },
      {
        q: 'Puis-je tester un casque, un micro USB ou des AirPods ?',
        a: 'Oui. Tout microphone reconnu par votre appareil fonctionne : micros intégrés, casques filaires et Bluetooth, micros USB et interfaces audio. Si vous en avez plusieurs de branchés, un menu Microphone apparaît pour tester chacun.',
      },
      {
        q: 'Quelle est la précision des résultats ?',
        a: 'C’est une bonne vérification pratique, pas une mesure calibrée. Le niveau, les réglages et la latence proviennent de ce que signale votre navigateur, et des applications comme Zoom ou Discord appliquent leur propre traitement par-dessus.',
      },
    ],
  },

  'online-mic-test': {
    slug: 'test-micro-en-ligne',
    nav: 'Test micro en ligne',
    blurb: 'Testez n’importe quel micro dans votre navigateur. Sans téléchargement ni inscription.',
    title: 'Test micro en ligne : vérifiez votre micro dans le navigateur',
    description:
      'Faites un test micro en ligne sans rien télécharger. Voyez votre niveau d’entrée en direct, vérifiez quel micro utilise votre navigateur et repérez vite les problèmes.',
    h1: 'Test micro en ligne',
    lede: 'Testez votre microphone ici même, dans le navigateur. Pas d’application, pas de compte, pas d’attente.',
    introTitle: 'Pourquoi tester son micro en ligne ?',
    intro: [
      'Un test micro en ligne est le moyen le plus rapide de distinguer un problème de microphone d’un problème d’application. Si votre micro fonctionne sur cette page, le matériel, le câble et les réglages du système sont bons, et le souci vient de l’application utilisée. S’il ne fonctionne pas ici non plus, il faut regarder le micro lui-même, la connexion ou les autorisations.',
      'Comme il s’exécute dans le navigateur, le test fonctionne de la même façon sur un PC Windows, un Mac, un Chromebook ou un téléphone. Il utilise le même accès au micro que les outils de réunion web, c’est donc une vérification réaliste avant tout appel passé dans un onglet de navigateur.',
    ],
    stepsTitle: 'Comment fonctionne le test micro en ligne',
    steps: [
      {
        title: 'Lancez le test et autorisez l’accès',
        body: 'Appuyez sur « Tester mon micro ». Les navigateurs ne partagent votre micro avec une page qu’après votre accord, et uniquement pour ce site.',
      },
      {
        title: 'Vérifiez que le bon micro est utilisé',
        body: 'Regardez le nom de l’appareil dans le panneau « Votre microphone ». Les ordinateurs portables avec webcam, casque et micro intégré choisissent souvent un autre micro que celui attendu.',
      },
      {
        title: 'Parlez et lisez le niveau',
        body: 'Comptez jusqu’à dix à votre volume habituel. Visez un niveau dans le vert et la mention « Bon ».',
      },
      {
        title: 'Essayez vos autres micros',
        body: 'Si plusieurs micros sont branchés, utilisez le menu Microphone pour passer de l’un à l’autre et comparer les niveaux sans quitter la page.',
      },
    ],
    guide: [
      {
        heading: 'Ce qu’un navigateur peut et ne peut pas vous dire',
        body: [
          'Un test dans le navigateur est efficace sur l’essentiel : un micro est-il branché, le site a-t-il le droit de l’utiliser, quelle est la force du signal et quelles fonctions de traitement sont activées. Cela couvre la grande majorité des problèmes du type « personne ne m’entend ».',
          'Il ne peut pas mesurer précisément des qualités de studio comme la réponse en fréquence ou le bruit propre. Les navigateurs traitent aussi le signal avant que la page ne le voie. L’annulation d’écho, la suppression du bruit et le contrôle automatique du gain sont en général activés par défaut, ce qui est idéal pour les appels mais signifie que le niveau affiché a déjà été « nettoyé ».',
        ],
      },
      {
        heading: 'Lire la fréquence d’échantillonnage et les canaux',
        body: [
          'La fréquence d’échantillonnage indique combien de fois par seconde votre son est mesuré. La plupart des appareils annoncent 44,1 ou 48 kHz, et l’une comme l’autre suffit largement pour une voix claire. Les casques Bluetooth descendent souvent à 16 kHz ou moins quand leur micro est utilisé, ce qui explique des voix plus fines.',
          'Canaux indique si le navigateur a ouvert le micro en mono ou en stéréo. Un seul canal est normal et attendu pour la voix.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Ce test micro en ligne est-il gratuit ?',
        a: 'Oui, entièrement. Pas de limite, pas d’essai, pas de compte.',
      },
      {
        q: 'Dans quels navigateurs fonctionne-t-il ?',
        a: 'Les versions récentes de Chrome, Edge, Firefox, Safari, Brave et Samsung Internet fonctionnent. Les navigateurs intégrés à d’autres applications, comme ceux qui ouvrent les liens dans Instagram ou Facebook, bloquent souvent le micro : ouvrez plutôt la page dans votre navigateur habituel.',
      },
      {
        q: 'Mon micro marche ici mais pas dans mon application de réunion. Pourquoi ?',
        a: 'Cela pointe vers les réglages de l’application. Ouvrez ses réglages audio et vérifiez que le micro vu ici est bien sélectionné, que vous n’êtes pas en sourdine dans l’application et que votre système d’exploitation l’autorise à utiliser le micro.',
      },
      {
        q: 'Pourquoi le test affiche-t-il un autre micro que celui que j’ai branché ?',
        a: 'Les navigateurs commencent par le périphérique d’entrée par défaut du système. Choisissez votre micro dans le menu Microphone de l’outil, ou changez l’entrée par défaut dans les réglages son du système.',
      },
      {
        q: 'Le test fonctionne-t-il sur téléphone ?',
        a: 'Oui. Il fonctionne dans Safari sur iPhone et iPad et dans Chrome sur Android. Les étapes sont les mêmes : touchez le bouton, autorisez l’accès au micro et parlez.',
      },
    ],
  },

  'mic-test-with-playback': {
    slug: 'test-micro-avec-enregistrement',
    nav: 'Test micro avec enregistrement',
    blurb: 'Enregistrez 5 secondes et réécoutez-vous pour savoir comment vous sonnez vraiment.',
    title: 'Test micro avec enregistrement : enregistrez-vous et réécoutez',
    description:
      'Enregistrez un extrait de 5 secondes et réécoutez-le pour entendre exactement le son de votre micro. Test micro avec lecture, gratuit, dans votre navigateur.',
    h1: 'Test micro avec enregistrement',
    lede: 'Enregistrez un court extrait, puis réécoutez-le. C’est le moyen le plus honnête de savoir comment vous sonnez pour les autres.',
    introTitle: 'Entendez ce que les autres entendent',
    intro: [
      'Un indicateur de niveau qui bouge prouve que votre micro fonctionne. Il ne dit pas si vous sonnez clair, étouffé, lointain ou avec un souffle. La réécoute, si. Enregistrez cinq secondes de voix normale, écoutez au casque ou aux haut-parleurs, et vous saurez d’un coup si votre installation est prête.',
      'L’enregistrement est réalisé et conservé uniquement dans la mémoire de votre navigateur. Il n’est pas envoyé et disparaît quand vous fermez ou rechargez la page.',
    ],
    stepsTitle: 'Comment enregistrer et réécouter votre micro',
    steps: [
      {
        title: 'Lancez le test',
        body: 'Appuyez sur « Tester mon micro » et autorisez l’accès au micro. Vérifiez que l’indicateur bouge quand vous parlez.',
      },
      {
        title: 'Appuyez sur « Enregistrer 5 secondes »',
        body: 'Un anneau décompte pendant que vous parlez. Utilisez votre voix normale et votre distance habituelle au micro, comme lors d’un vrai appel.',
      },
      {
        title: 'Dites quelque chose d’utile',
        body: 'Essayez : « Test, un, deux, trois. Un chasseur sachant chasser sait chasser sans son chien. Les chaussettes de l’archiduchesse sont-elles sèches ? » Les sons P, S et CH révèlent vite les pops et la dureté.',
      },
      {
        title: 'Appuyez sur lecture et écoutez',
        body: 'Écoutez une fois pour le volume et une fois pour la qualité. Au casque, les défauts s’entendent bien mieux qu’avec les haut-parleurs d’un portable.',
      },
      {
        title: 'Ajustez et réenregistrez',
        body: 'Changez une seule chose à la fois, comme la distance, le volume d’entrée ou un autre micro, puis réenregistrez et comparez.',
      },
    ],
    guide: [
      {
        heading: 'Ce qu’il faut écouter dans votre enregistrement',
        body: [
          '- Volume : on doit vous entendre sans monter les haut-parleurs. Si vous êtes faible, rapprochez-vous ou augmentez le volume d’entrée.',
          '- Distorsion : des craquements ou un bord rugueux sur les mots forts signifient que le signal est trop fort. Baissez le volume d’entrée ou reculez.',
          '- Écho de la pièce : un son creux, de salle de bain, vient des murs durs et de la distance. Se rapprocher du micro aide plus que tout.',
          '- Pops : les chocs sur les P et les B sont des bouffées d’air qui frappent le micro. Inclinez légèrement le micro sur le côté de la bouche.',
          '- Bruit de fond : un souffle, un ronflement ou un bruit de ventilateur sous votre voix. Éloignez-vous de la source ou laissez la suppression du bruit activée.',
          '- Coupures : des mots qui sautent indiquent souvent une connexion Bluetooth faible ou une suppression du bruit trop agressive.',
        ],
      },
      {
        heading: 'Pourquoi vous sonnez différemment sur un enregistrement',
        body: [
          'Presque tout le monde est surpris par sa voix enregistrée. Quand vous parlez, vous vous entendez en partie par les os du crâne, qui ajoutent des basses fréquences qu’un micro ne capte jamais. L’enregistrement est plus proche de ce qu’entendent les autres : jugez-le sur la clarté et le volume, pas sur sa ressemblance avec la voix que vous avez en tête.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Combien de temps puis-je enregistrer ?',
        a: 'Chaque enregistrement dure 5 secondes, ce qui suffit pour juger le volume et la clarté. Vous pouvez réenregistrer autant de fois que vous voulez. Chaque nouvel enregistrement remplace le précédent.',
      },
      {
        q: 'Où mon enregistrement est-il sauvegardé ?',
        a: 'Nulle part de façon durable. L’extrait est gardé dans la mémoire de votre navigateur pour la lecture et n’est jamais envoyé. Fermer ou recharger l’onglet le supprime.',
      },
      {
        q: 'Pourquoi n’entends-je rien quand j’appuie sur lecture ?',
        a: 'Vérifiez que vos haut-parleurs ou votre casque ne sont pas en sourdine et que l’indicateur a bougé pendant l’enregistrement. S’il est resté plat, le micro ne vous captait pas. Sur iPhone, montez aussi le volume des médias avec les boutons latéraux.',
      },
      {
        q: 'Pourquoi mon enregistrement sonne-t-il faible ou étouffé ?',
        a: 'Le plus souvent, le micro est trop loin, le volume d’entrée est bas ou un autre micro est actif, comme celui de l’ordinateur à la place de votre casque. Vérifiez d’abord le nom de l’appareil dans le panneau « Votre microphone ».',
      },
      {
        q: 'Mon enregistrement sonnera-t-il pareil sur Zoom ou Discord ?',
        a: 'Proche, mais pas identique. Chaque application applique sa propre suppression du bruit et sa propre compression. Un enregistrement propre ici est un bon signe que vous sonnerez bien là-bas aussi.',
      },
    ],
  },

  'hear-yourself-mic-test': {
    slug: 'test-micro-s-entendre',
    nav: 'Test micro : s’entendre',
    blurb: 'Écoutez votre propre micro en direct dans votre casque.',
    title: 'Test micro : s’entendre en direct avec son microphone',
    description:
      'Entendez votre micro en temps réel. Activez l’écoute en direct pour vérifier votre son, votre casque et vos niveaux pendant que vous parlez. Gratuit et privé.',
    h1: 'Test micro : s’entendre',
    lede: 'Activez « Écoutez-vous en direct » pour entendre votre microphone en temps réel. Mettez d’abord un casque.',
    introTitle: 'L’écoute en direct, dans votre navigateur',
    intro: [
      'Parfois, on ne veut pas d’enregistrement. On veut entendre son micro en parlant, pour le déplacer, régler le volume et repérer les problèmes à l’instant où ils surviennent. L’interrupteur « Écoutez-vous en direct » envoie votre micro directement dans votre casque pendant que le test est en cours.',
      'Il est désactivé par défaut pour une bonne raison. Si votre micro entend vos haut-parleurs, le son boucle et monte en un sifflement fort (effet Larsen). Avec un casque, cette boucle ne peut pas se former.',
    ],
    stepsTitle: 'Comment vous entendre dans votre micro',
    steps: [
      {
        title: 'Mettez un casque',
        body: 'Un casque ou des écouteurs filaires fonctionnent le mieux. Ils ajoutent le moins de retard et empêchent vos haut-parleurs de revenir dans le micro.',
      },
      {
        title: 'Lancez le test',
        body: 'Appuyez sur « Tester mon micro » et autorisez l’accès au micro. Vérifiez que l’indicateur de niveau réagit à votre voix.',
      },
      {
        title: 'Activez « Écoutez-vous en direct »',
        body: 'Basculez l’interrupteur. Vous devriez entendre votre voix dans le casque immédiatement. Commencez avec un volume bas et montez progressivement.',
      },
      {
        title: 'Écoutez pendant que vous réglez',
        body: 'Approchez et éloignez le micro, tapotez le bureau, froissez du papier. Vous entendrez exactement ce que le micro capte quand vous changez les choses.',
      },
      {
        title: 'Désactivez-le quand vous avez fini',
        body: 'Rebasculez l’interrupteur ou appuyez sur Arrêter. L’écoute s’arrête aussi dès que vous quittez la page.',
      },
    ],
    guide: [
      {
        heading: 'Pourquoi il y a un léger décalage',
        body: [
          'Votre voix doit voyager du micro, par le système audio de l’ordinateur, puis par le navigateur, avant de ressortir dans votre casque. Ce trajet prend du temps, en général quelques centièmes de seconde avec une installation filaire. Vous le percevrez comme un léger dédoublement de votre voix.',
          'Les casques Bluetooth en ajoutent beaucoup plus, souvent un cinquième de seconde ou davantage, car le son est compressé et transmis par voie hertzienne dans les deux sens. C’est normal et ce n’est pas un défaut de votre micro. Pour une écoute la plus réactive, utilisez un casque filaire.',
          'La ligne « Latence estimée » du panneau montre le délai que signale votre navigateur. Considérez-la comme une valeur approximative. Tous les navigateurs ne signalent pas chaque étape de la chaîne.',
        ],
      },
      {
        heading: 'Écoute en direct ou réécoute : laquelle choisir',
        body: [
          'Utilisez l’écoute en direct pour positionner un micro, régler votre niveau ou repérer un ronflement et du bruit de fond en déplaçant les choses. Utilisez l’enregistrement de 5 secondes pour juger comment vous sonnez vraiment, car il est difficile d’écouter de façon critique pendant qu’on parle.',
          'Si vous voulez vous entendre en permanence dans votre casque, y compris en jeu et en appel, c’est un réglage du système ou du casque, souvent appelé « sidetone » ou retour micro.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Pourquoi utiliser un casque pour ce test ?',
        a: 'Sans casque, votre micro capte son propre son venant des haut-parleurs, qui est amplifié puis recapté. Cette boucle devient un hurlement fort en une ou deux secondes. Le casque garde le son hors du micro.',
      },
      {
        q: 'J’ai activé « Écoutez-vous en direct » mais je n’entends rien. Que se passe-t-il ?',
        a: 'Vérifiez que l’indicateur de niveau bouge, que le volume du casque est monté et que le son part bien vers la sortie que vous portez. Sur iPhone, le commutateur silencieux peut couper l’écoute en direct : passez-le en mode sonnerie et montez le volume.',
      },
      {
        q: 'Pourquoi j’entends un écho de ma propre voix ?',
        a: 'C’est le décalage de l’écoute. Votre voix arrive d’abord directement à vos oreilles, puis dans le casque un instant plus tard. Un casque filaire garde l’écart réduit. Avec le Bluetooth, il est bien plus audible.',
      },
      {
        q: 'Ce décalage est-il le même que celui entendu par les autres en appel ?',
        a: 'Non. Le décalage d’un appel dépend de la connexion internet entre vous et l’autre personne. Ce que vous entendez ici n’est que la boucle locale dans votre propre appareil.',
      },
      {
        q: 'Puis-je continuer à m’entendre après avoir fermé cette page ?',
        a: 'Non. L’écoute s’arrête quand vous arrêtez le test ou quittez la page. Pour entendre votre micro en permanence, utilisez la fonction de retour micro de votre système d’exploitation ou de votre casque.',
      },
    ],
  },

  'webcam-and-mic-test': {
    slug: 'test-webcam-et-micro',
    nav: 'Test webcam et micro',
    blurb: 'Vérifiez votre caméra et votre micro ensemble avant un appel vidéo.',
    title: 'Test webcam et micro : vérifiez caméra et son en ligne',
    description:
      'Testez votre webcam et votre microphone ensemble. Aperçu en direct de la caméra à côté du niveau du micro, enregistrement de test et préparation de votre appel vidéo.',
    h1: 'Test webcam et micro',
    lede: 'Voyez votre caméra et vérifiez votre micro en même temps, pour être prêt avant le début de l’appel.',
    introTitle: 'Une seule vérification pour la caméra et le micro',
    intro: [
      'Rejoindre un appel vidéo et s’apercevoir que sa caméra est noire ou que son micro est muet est stressant, et cela peut s’éviter. Cette page ouvre votre webcam et votre microphone ensemble, affiche un aperçu en direct à côté de votre niveau sonore et vous laisse enregistrer un test de son rapide.',
      'L’aperçu est en miroir, comme dans la plupart des applications de réunion. Les autres participants vous voient dans le bon sens. La vidéo n’est affichée que sur votre écran. Elle n’est ni enregistrée, ni envoyée, ni conservée.',
    ],
    stepsTitle: 'Comment tester votre webcam et votre micro ensemble',
    steps: [
      {
        title: 'Appuyez sur « Tester ma webcam et mon micro »',
        body: 'Votre navigateur demande l’accès à la caméra et au microphone. Autorisez les deux. Certains navigateurs affichent une seule demande, d’autres en posent deux.',
      },
      {
        title: 'Vérifiez votre image',
        body: 'Regardez l’aperçu pour le cadrage, la netteté et la lumière. Vos yeux doivent se situer environ au tiers supérieur du cadre, avec la lumière sur votre visage et non derrière vous.',
      },
      {
        title: 'Vérifiez votre son',
        body: 'Parlez normalement et regardez l’indicateur de niveau à côté de la vidéo. Puis enregistrez 5 secondes et réécoutez-les pour savoir comment vous êtes perçu.',
      },
      {
        title: 'Changez d’appareil si besoin',
        body: 'Si vous avez plusieurs caméras ou micros, des menus apparaissent pour choisir ceux que vous comptez utiliser pendant l’appel.',
      },
    ],
    guide: [
      {
        heading: 'Soignez votre image en une minute',
        body: [
          '- Faites face à la lumière. Une fenêtre ou une lampe devant vous vaut mieux que n’importe quelle caméra plus chère. Une fenêtre lumineuse derrière vous fait de vous une silhouette.',
          '- Montez la caméra à hauteur des yeux. Un portable sur une pile de livres suffit. Regarder la caméra de haut en bas est rarement flatteur.',
          '- Nettoyez l’objectif. Une trace de doigt sur la caméra d’un portable ou d’un téléphone rend toute l’image floue.',
          '- Regardez ce qu’il y a derrière vous. L’aperçu montre exactement ce que verront les autres.',
        ],
      },
      {
        heading: 'Si l’aperçu de la caméra reste noir',
        body: [
          'Cherchez d’abord un cache physique. Beaucoup de portables ont un cache coulissant sur l’objectif ou une touche caméra au clavier, et une webcam externe peut avoir un capuchon.',
          'Fermez ensuite les autres applications qui pourraient utiliser la caméra, comme Zoom, Teams, FaceTime ou une application photo. Sous Windows en particulier, une seule application à la fois peut utiliser une webcam.',
          'Enfin, vérifiez les autorisations. Votre navigateur doit avoir accès à la caméra pour ce site, et votre système d’exploitation doit autoriser votre navigateur à l’utiliser. Si la partie micro du test fonctionne et pas la caméra, ce sont généralement les autorisations.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Ma vidéo est-elle enregistrée ou envoyée ?',
        a: 'Non. L’aperçu de la caméra est affiché sur votre propre écran et ne va nulle part ailleurs. Rien n’est enregistré, sauvegardé ou envoyé à un serveur. La caméra s’éteint quand vous appuyez sur Arrêter ou quittez la page.',
      },
      {
        q: 'Pourquoi l’aperçu de ma caméra est-il inversé ?',
        a: 'L’aperçu est en miroir pour qu’un mouvement vers la gauche apparaisse vers la gauche, ce qui est naturel. Les applications de réunion font de même. Vos interlocuteurs vous voient sans miroir.',
      },
      {
        q: 'Mon micro fonctionne mais pas la caméra. Que vérifier ?',
        a: 'Cherchez un cache d’objectif ou une touche d’extinction de la caméra, fermez les autres applications qui pourraient l’utiliser, et vérifiez que votre navigateur et votre système d’exploitation autorisent l’accès à la caméra. Le test du micro continue de fonctionner même si la caméra ne démarre pas.',
      },
      {
        q: 'Puis-je tester une webcam externe ?',
        a: 'Oui. Branchez-la, lancez le test et choisissez-la dans le menu Caméra. Beaucoup de webcams ont aussi leur propre micro, qui apparaîtra dans le menu Microphone.',
      },
      {
        q: 'Quelle résolution le test utilise-t-il ?',
        a: 'Le test demande à votre caméra une image en 720p et affiche dans le panneau sous l’outil la résolution réellement fournie à votre navigateur. Votre application de réunion peut utiliser une autre résolution selon votre connexion.',
      },
      {
        q: 'Cela fonctionne-t-il sur téléphone et tablette ?',
        a: 'Oui. Sur un téléphone, le test utilise la caméra frontale et le micro intégré, ou celui de votre casque s’il est branché.',
      },
    ],
  },
};
