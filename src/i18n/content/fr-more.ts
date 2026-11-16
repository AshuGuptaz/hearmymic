import type { PageTranslation } from '../../data/types';

/** Français : Zoom, Discord et le guide « le micro ne fonctionne pas ». */
export const frMore: Record<string, PageTranslation> = {
  'zoom-mic-test': {
    slug: 'test-micro-zoom',
    nav: 'Test micro Zoom',
    blurb: 'Vérifiez votre micro avant une réunion Zoom, puis alignez les réglages de Zoom.',
    title: 'Test micro Zoom : vérifiez votre microphone avant une réunion',
    description:
      'Testez votre microphone avant de rejoindre Zoom. Vérifiez ici qu’il fonctionne, puis utilisez le test du micro et les réglages audio de Zoom pour être bien entendu.',
    h1: 'Test micro Zoom',
    lede: 'Assurez-vous que votre microphone fonctionne avant le début de votre réunion Zoom, sans ouvrir Zoom ni rejoindre un appel.',
    introTitle: 'Testez d’abord, puis réglez Zoom',
    intro: [
      'La vérification la plus rapide du micro pour Zoom comporte deux étapes. D’abord, confirmez ici que votre microphone fonctionne et notez son nom dans le panneau « Votre microphone ». Ensuite, assurez-vous que Zoom utilise ce même micro. La plupart des problèmes du type « on ne m’entend pas sur Zoom » viennent de Zoom qui écoute un autre appareil que celui dans lequel vous parlez.',
      'Zoom propose aussi son propre test. Dans l’application de bureau, ouvrez Paramètres, choisissez Audio et appuyez sur Tester le micro. Il enregistre quelques secondes et les rejoue sur le haut-parleur sélectionné.',
    ],
    stepsTitle: 'Comment tester votre micro pour Zoom',
    steps: [
      {
        title: 'Lancez le test sur cette page',
        body: 'Appuyez sur « Tester mon micro », parlez et vérifiez que l’indicateur bouge. Notez ou retenez le nom du microphone affiché dans le panneau.',
      },
      {
        title: 'Ouvrez les réglages audio de Zoom',
        body: 'Dans l’application de bureau Zoom, cliquez sur votre photo de profil, puis sur Paramètres, puis sur Audio. Pendant une réunion, cliquez sur la flèche à côté du bouton Couper le micro et choisissez Paramètres audio.',
      },
      {
        title: 'Sélectionnez le même microphone',
        body: 'Sous Microphone, choisissez l’appareil qui a fonctionné ici. « Identique au système » suit le choix par défaut de votre ordinateur, qui peut changer quand vous branchez un casque.',
      },
      {
        title: 'Utilisez le test du micro de Zoom',
        body: 'Appuyez sur Tester le micro, parlez et écoutez la lecture. Laissez « Régler automatiquement le volume du microphone » activé, sauf raison particulière de régler le niveau à la main.',
      },
      {
        title: 'Rejoignez une réunion test pour en être sûr',
        body: 'Allez sur zoom.us/test pour rejoindre une réunion d’essai privée. Zoom vous guide à travers un test des haut-parleurs et un test du micro avant que quiconque puisse vous entendre.',
      },
    ],
    faqs: [
      {
        q: 'Mon micro fonctionne ici mais pas dans Zoom. Pourquoi ?',
        a: 'Zoom utilise presque certainement un autre micro, ou n’a pas l’autorisation. Choisissez le bon appareil dans Paramètres, puis Audio. Sur Mac, ouvrez aussi Réglages Système, Confidentialité et sécurité, Microphone, et vérifiez que Zoom est activé. Sous Windows, vérifiez Paramètres, Confidentialité et sécurité, Microphone.',
      },
      {
        q: 'Pourquoi vois-je « Rejoindre l’audio » au lieu d’un bouton Couper le micro dans Zoom ?',
        a: 'Vous avez rejoint la réunion sans connecter l’audio : personne ne vous entend et vous n’entendez personne. Cliquez sur Rejoindre l’audio, puis choisissez Rejoindre avec l’audio de l’ordinateur.',
      },
      {
        q: 'On me dit que ça hache ou que ça sonne robotique sur Zoom. Est-ce mon micro ?',
        a: 'Enregistrez un extrait de 5 secondes ici. Si la lecture est propre, votre micro va bien et le problème vient de votre connexion internet ou de la suppression du bruit de Zoom. Dans les réglages audio de Zoom, essayez de régler la suppression du bruit de fond sur Faible.',
      },
      {
        q: 'Puis-je utiliser ce test pour Zoom dans un navigateur ?',
        a: 'Oui, et la correspondance est particulièrement fidèle. Le client web de Zoom utilise le même accès au micro du navigateur que cette page. N’oubliez pas que l’autorisation est accordée site par site : vous devrez donc aussi autoriser le micro pour le site de Zoom.',
      },
      {
        q: 'Qu’est-ce que le « Son d’origine » dans Zoom ?',
        a: 'C’est une option qui désactive la plus grande partie du traitement audio de Zoom. Elle est prévue pour la musique ou les micros professionnels dans des pièces silencieuses. Pour les appels de tous les jours, laissez-la désactivée afin que Zoom puisse supprimer l’écho et le bruit de fond.',
      },
    ],
  },

  'discord-mic-test': {
    slug: 'test-micro-discord',
    nav: 'Test micro Discord',
    blurb: 'Déterminez si le problème de micro vient de votre matériel ou des réglages Discord.',
    title: 'Test micro Discord : vérifiez votre micro et vos réglages vocaux',
    description:
      'Testez votre micro pour Discord. Vérifiez ici qu’il fonctionne, puis corrigez le périphérique d’entrée, la sensibilité d’entrée et le push-to-talk de Discord.',
    h1: 'Test micro Discord',
    lede: 'Vos amis ne vous entendent pas dans le salon vocal ? Vérifiez d’abord votre micro ici, puis corrigez le réglage Discord qui gêne.',
    introTitle: 'Est-ce votre micro ou Discord ?',
    intro: [
      'Discord ajoute plusieurs couches entre votre microphone et vos amis : un réglage de périphérique d’entrée, un seuil de sensibilité d’entrée, un push-to-talk facultatif et la suppression du bruit. N’importe laquelle peut rendre muet un micro parfaitement bon. Tester ici met Discord hors de cause. Si l’indicateur bouge sur cette page, votre matériel va bien et la solution se trouve dans les réglages Voix et vidéo de Discord.',
      'Discord propose aussi une vérification intégrée. Ouvrez Paramètres utilisateur, allez dans Voix et vidéo et appuyez sur Vérifions sous Test du micro. Discord vous rejoue votre voix jusqu’à ce que vous l’arrêtiez.',
    ],
    stepsTitle: 'Comment tester votre micro pour Discord',
    steps: [
      {
        title: 'Testez votre micro sur cette page',
        body: 'Appuyez sur « Tester mon micro » et parlez. Notez le nom du microphone dans le panneau. Si rien ne bouge ici, le problème n’est pas Discord.',
      },
      {
        title: 'Réglez le périphérique d’entrée de Discord',
        body: 'Dans Discord, cliquez sur la roue dentée à côté de votre pseudo, puis sur Voix et vidéo. Réglez Périphérique d’entrée sur le microphone qui a fonctionné ici. « Par défaut » peut pointer vers le mauvais.',
      },
      {
        title: 'Vérifiez la sensibilité d’entrée',
        body: 'Avec Détection de l’activité vocale sélectionnée, activez la sensibilité d’entrée automatique, ou faites glisser le curseur pour que votre voix normale se situe dans la partie verte de la barre.',
      },
      {
        title: 'Lancez le test du micro de Discord',
        body: 'Appuyez sur Vérifions et parlez. Si vous vous entendez, vos amis vous entendront aussi.',
      },
    ],
    faqs: [
      {
        q: 'Mon micro fonctionne ici mais personne ne m’entend sur Discord. Que vérifier ?',
        a: 'Vérifiez quatre points dans l’ordre : le Périphérique d’entrée dans Voix et vidéo, si vous êtes en sourdine ou rendu muet par le serveur (une barre rouge sur l’icône du micro), si le Push-to-talk est activé sans touche assignée, et si la sensibilité d’entrée est réglée si haut que votre voix n’ouvre jamais le seuil.',
      },
      {
        q: 'Pourquoi Discord coupe-t-il le début ou la fin de mes mots ?',
        a: 'Le seuil de sensibilité d’entrée est trop haut, donc les syllabes faibles ne comptent pas comme de la parole. Baissez le curseur ou activez la sensibilité automatique. Si vous utilisez la suppression du bruit Krisp, essayez de la désactiver pour comparer.',
      },
      {
        q: 'Ce test fonctionne-t-il pour Discord dans un navigateur ?',
        a: 'Oui. Discord dans un navigateur utilise le même accès au micro que cette page. Vous devrez autoriser le micro séparément pour le site de Discord, car les navigateurs accordent l’autorisation site par site.',
      },
      {
        q: 'Pourquoi mon micro est-il si faible sur Discord ?',
        a: 'Augmentez le Volume d’entrée dans Voix et vidéo et vérifiez le niveau du micro dans les réglages son du système. Vérifiez aussi que le Contrôle automatique du gain est activé dans les options de traitement vocal de Discord. Enregistrez un extrait ici pour confirmer si c’est le micro lui-même qui est faible.',
      },
      {
        q: 'Pourquoi mes amis entendent-ils mon jeu ou mes haut-parleurs dans mon micro ?',
        a: 'Votre microphone capte vos haut-parleurs. Utilisez un casque, gardez l’Annulation d’écho activée dans Discord et assurez-vous que le Périphérique d’entrée n’est pas un « Mixage stéréo » ou un périphérique de bouclage, qui envoie tout le son de votre ordinateur.',
      },
    ],
  },

  'fix/mic-not-working': {
    slug: 'micro-ne-fonctionne-pas',
    nav: 'Micro qui ne fonctionne pas',
    blurb: 'Une liste de vérifications pas à pas pour un micro qui reste muet.',
    title: 'Micro qui ne fonctionne pas ? Comment le réparer',
    description:
      'Votre micro ne fonctionne pas ? Suivez cette liste : sourdine, bon périphérique d’entrée, autorisations du navigateur et du système, applications.',
    h1: 'Micro qui ne fonctionne pas ? Voici comment le réparer',
    lede: 'Lancez le test ci-dessous, puis parcourez la liste. La plupart des micros muets se règlent dès les trois premières étapes.',
    introTitle: 'Commencez par trouver d’où vient le problème',
    intro: [
      'Un micro qui « ne marche pas » fonctionne généralement très bien et se trouve bloqué quelque part en chemin : par un interrupteur de sourdine, par un mauvais appareil sélectionné, par une autorisation ou par une autre application. Le test ci-dessus vous aide à cerner rapidement la cause.',
      'Si le test ne démarre pas, le message affiché vous indique si le micro est bloqué, absent ou occupé. Si le test démarre mais que l’indicateur reste plat, votre ordinateur voit un micro et n’en reçoit que du silence, ce qui pointe vers un interrupteur de sourdine, un réglage de volume ou le mauvais appareil.',
    ],
    stepsTitle: 'Réparer un micro qui ne fonctionne pas',
    steps: [
      {
        title: 'Vérifiez la sourdine physique et la connexion',
        body: 'Cherchez un bouton de sourdine sur le casque, le câble ou le micro lui-même, ainsi qu’une touche de coupure du micro sur le clavier de votre portable. Débranchez le micro et rebranchez-le fermement. Essayez un autre port USB. Une fiche jack 3,5 mm doit aller dans la prise micro ou casque-micro, pas dans la prise réservée au casque.',
      },
      {
        title: 'Sélectionnez le bon microphone',
        body: 'Lancez le test et lisez le nom de l’appareil dans le panneau « Votre microphone ». Si ce n’est pas le micro dans lequel vous parlez, choisissez le bon dans le menu Microphone, ou changez l’entrée par défaut dans les réglages son du système.',
      },
      {
        title: 'Augmentez le volume d’entrée',
        body: 'Sous Windows 11, ouvrez Paramètres, Système, Son, puis cliquez sur votre microphone sous Entrée. Sur Mac, ouvrez Réglages Système, Son, Entrée. Vérifiez que le volume d’entrée n’est pas à zéro.',
      },
      {
        title: 'Vérifiez les autorisations du navigateur et du système',
        body: 'Cliquez sur l’icône à gauche de la barre d’adresse et réglez Microphone sur Autoriser. Vérifiez ensuite que votre système d’exploitation autorise votre navigateur à utiliser le micro, dans la section Microphone de ses réglages de confidentialité.',
      },
      {
        title: 'Fermez les autres applications, puis redémarrez',
        body: 'Quittez Zoom, Teams, Discord, les logiciels d’enregistrement et les autres onglets du navigateur qui pourraient occuper le micro. Si rien ne change, redémarrez le navigateur, puis l’ordinateur. Cela débloque des périphériques audio coincés plus souvent qu’on ne le croit.',
      },
    ],
    faqs: [
      {
        q: 'Le test indique « Votre micro est occupé ». Que signifie-t-il ?',
        a: 'Votre navigateur a trouvé le microphone mais n’a pas pu l’ouvrir, généralement parce qu’un autre programme en a l’usage exclusif. Fermez les applications de réunion, le chat vocal et les logiciels d’enregistrement, puis appuyez sur Réessayer. Sous Windows, redémarrer l’ordinateur libère un micro coincé.',
      },
      {
        q: 'Le test indique « Aucun microphone trouvé ». Que faire ?',
        a: 'Votre navigateur ne voit aucun périphérique d’entrée. Rebranchez le microphone, essayez un autre port ou un autre câble, et vérifiez dans les réglages son du système s’il apparaît. Si le système ne le liste pas non plus, le problème vient du micro, du câble ou du port.',
      },
      {
        q: 'Comment savoir si mon microphone est cassé ?',
        a: 'Essayez-le sur un second appareil, comme un autre ordinateur ou un téléphone. S’il échoue partout, le microphone est défectueux. S’il fonctionne ailleurs, le problème se trouve dans les réglages, le port ou les pilotes du premier appareil.',
      },
      {
        q: 'Mon micro fonctionne dans une application mais pas dans une autre. Pourquoi ?',
        a: 'Chaque application choisit son propre microphone et a besoin de sa propre autorisation. Ouvrez les réglages audio de l’application qui pose problème, sélectionnez le microphone par son nom et vérifiez que votre système d’exploitation autorise cette application à l’utiliser.',
      },
      {
        q: 'Le micro de mon casque Bluetooth ne fonctionne pas. Des conseils ?',
        a: 'Vérifiez qu’il est connecté en tant que casque-micro et pas seulement comme casque audio. Beaucoup d’appareils affichent deux entrées pour un même casque, et seule l’entrée « mains libres » ou « casque-micro » transporte le microphone. Désactiver puis réactiver le Bluetooth, ou rejumeler l’appareil, le rétablit généralement.',
      },
    ],
  },

  'webcam-test': {
    slug: 'test-webcam',
    nav: 'Test webcam',
    blurb: 'Voyez votre caméra en direct et vérifiez cadrage, lumière et netteté.',
    title: 'Test webcam : vérifiez votre caméra en ligne (gratuit, privé)',
    description:
      'Testez votre webcam en ligne en un clic. Aperçu en direct, résolution, cadrage et éclairage, et changement de caméra. Rien n’est enregistré ni envoyé.',
    h1: 'Test webcam',
    lede: 'Appuyez sur le bouton pour voir ce que voit votre caméra. L’aperçu reste sur votre écran, rien n’est enregistré ni envoyé.',
    introTitle: 'Vérifiez votre caméra avant que quelqu’un d’autre la voie',
    intro: [
      'Ce test webcam ouvre votre caméra dans le navigateur et affiche un aperçu en direct, pour vérifier l’image avant une réunion, un stream ou un entretien. Il fonctionne avec les caméras intégrées des ordinateurs portables, les webcams USB, les caméras de téléphone et les caméras virtuelles.',
      'Le test affiche aussi un niveau de microphone à côté de la vidéo, car beaucoup de problèmes vidéo sont en réalité des problèmes de caméra et de micro à la fois. Si seule l’image vous intéresse, ignorez l’indicateur.',
    ],
    stepsTitle: 'Comment tester votre webcam en ligne',
    steps: [
      {
        title: 'Appuyez sur « Tester ma webcam et mon micro »',
        body: 'Votre navigateur demande l’autorisation d’utiliser la caméra. Choisissez Autoriser. Si une demande pour le micro apparaît aussi, autorisez-la, ou ignorez-la si seule l’image vous intéresse.',
      },
      {
        title: 'Regardez l’aperçu',
        body: 'Vous devriez vous voir en une ou deux secondes. L’aperçu est en miroir, comme dans la plupart des applications de réunion. Les autres vous voient dans le bon sens.',
      },
      {
        title: 'Vérifiez la résolution',
        body: 'Le panneau sous l’outil indique la résolution reçue par votre navigateur. Une webcam récente donne normalement du 720p ou du 1080p. Une valeur bien plus faible peut indiquer une caméra de mauvaise qualité ou un port USB trop lent.',
      },
      {
        title: 'Choisissez la bonne caméra',
        body: 'Si vous avez plusieurs caméras, un menu permet de changer. C’est ainsi que vous savez laquelle est la webcam externe et laquelle est celle de l’ordinateur.',
      },
      {
        title: 'Arrêtez le test',
        body: 'Appuyez sur Arrêter ou quittez la page. Le voyant de la caméra de votre appareil doit s’éteindre aussitôt.',
      },
    ],
    guide: [
      {
        heading: 'À quoi ressemble une bonne image de webcam',
        body: [
          '- Lumière : placez une fenêtre ou une lampe devant vous. Une lumière derrière vous fait de vous une silhouette, quelle que soit la caméra.',
          '- Hauteur : l’objectif doit se trouver à peu près à hauteur des yeux. Surélevez un ordinateur portable avec quelques livres.',
          '- Distance : asseyez-vous à environ un bras de distance, la tête et les épaules dans le cadre.',
          '- Netteté : essuyez l’objectif avec un chiffon doux. Une trace de doigt est la cause la plus fréquente d’une image floue.',
          '- Arrière-plan : l’aperçu montre exactement ce que les autres verront derrière vous.',
        ],
      },
      {
        heading: 'Si l’image reste noire',
        body: [
          'Cherchez d’abord un cache physique. Beaucoup d’ordinateurs portables ont un cache coulissant ou une touche pour désactiver la caméra, et une webcam externe peut avoir un capuchon.',
          'Fermez ensuite tout ce qui pourrait utiliser la caméra : Zoom, Teams, FaceTime, OBS ou une application photo. Sous Windows, une seule application à la fois peut utiliser une webcam.',
          'Enfin, vérifiez les autorisations. Votre navigateur doit avoir accès à la caméra pour ce site, et votre système d’exploitation doit autoriser le navigateur à utiliser la caméra.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Mon test de webcam est-il privé ?',
        a: 'Oui. La vidéo s’affiche uniquement sur votre écran et ne va nulle part ailleurs. Rien n’est enregistré, sauvegardé ni envoyé à un serveur. La caméra s’éteint quand vous appuyez sur Arrêter ou quittez la page.',
      },
      {
        q: 'Pourquoi ma webcam ne fonctionne-t-elle pas dans le test ?',
        a: 'Les causes habituelles sont un cache ou une touche qui désactive la caméra, une autre application qui utilise déjà la caméra, ou des autorisations bloquées. Fermez les autres applications de caméra, vérifiez les autorisations du site dans votre navigateur et les paramètres de confidentialité de la caméra de votre système.',
      },
      {
        q: 'Pourquoi l’image est-elle en miroir ?',
        a: 'L’aperçu est inversé comme un miroir pour que se déplacer vers la gauche paraisse naturel. Les autres participants d’un appel vidéo vous voient dans le bon sens.',
      },
      {
        q: 'Comment tester une webcam externe ?',
        a: 'Branchez-la, lancez le test et choisissez-la dans le menu Caméra. Si elle n’apparaît pas, essayez un autre port USB et vérifiez qu’aucune autre application ne l’utilise.',
      },
      {
        q: 'Puis-je tester la caméra de mon téléphone ?',
        a: 'Oui. Ouvrez cette page dans le navigateur de votre téléphone. Elle utilise la caméra avant, et vous pouvez en général passer à la caméra arrière depuis le menu Caméra.',
      },
      {
        q: 'Quelle est la résolution de ma webcam ?',
        a: 'Le panneau sous l’outil indique la résolution reçue par votre navigateur. Le test demande du 720p, donc une caméra capable de plus peut quand même afficher 720p ici. Les applications de réunion choisissent leur propre résolution.',
      },
    ],
  },

  'is-my-mic-working': {
    slug: 'mon-micro-fonctionne-t-il',
    nav: 'Mon micro fonctionne-t-il ?',
    blurb: 'Une vérification en un clic pour savoir si votre micro est activé et vous capte.',
    title: 'Mon micro fonctionne-t-il ? Vérifiez s’il est activé',
    description:
      'Découvrez en quelques secondes si votre micro est activé et fonctionne. Parlez, regardez l’indicateur de niveau, puis suivez les solutions rapides.',
    h1: 'Mon micro fonctionne-t-il ?',
    lede: 'Appuyez sur le bouton et dites quelques mots. Si l’indicateur bouge, votre micro est activé et fonctionne.',
    introTitle: 'Une réponse rapide : oui ou non',
    intro: [
      'Appuyez sur « Tester mon micro », autorisez l’accès au microphone et parlez. L’indicateur de niveau suit votre voix. S’il bouge, votre micro est activé et votre ordinateur ou téléphone l’entend. S’il reste plat, la page vous indique où chercher.',
      'Voir l’indicateur bouger prouve seulement que votre appareil entend le micro. Cela ne prouve pas qu’une application comme Zoom ou Discord écoute le même. Les vérifications rapides ci-dessous couvrent aussi ce point.',
    ],
    stepsTitle: 'Comment vérifier que votre micro est activé',
    steps: [
      {
        title: 'Lancez le test et parlez',
        body: 'Appuyez sur « Tester mon micro », choisissez Autoriser quand le navigateur le demande, puis dites une phrase à voix normale.',
      },
      {
        title: 'Regardez l’indicateur de niveau',
        body: 'L’indicateur doit monter et descendre avec votre voix et atteindre le milieu ou le haut de l’échelle quand vous parlez. Un indicateur plat signifie qu’aucun son n’arrive.',
      },
      {
        title: 'Enregistrez et réécoutez',
        body: 'Enregistrez 5 secondes et réécoutez. Si vous vous entendez clairement, votre micro fonctionne et capte bien ce que vous attendez.',
      },
      {
        title: 'Vérifiez les commandes de coupure s’il est plat',
        body: 'Cherchez un interrupteur ou un bouton de coupure sur votre casque, une touche micro désactivé sur l’ordinateur portable, et un micro désactivé dans les paramètres son du système.',
      },
      {
        title: 'Vérifiez que vous utilisez le bon micro',
        body: 'Si vous en avez plusieurs, un menu Microphone apparaît. Choisissez celui dans lequel vous parlez vraiment, par exemple votre casque, puis réessayez.',
      },
    ],
    faqs: [
      {
        q: 'Comment savoir si mon micro est activé ?',
        a: 'Lancez le test et parlez. Si l’indicateur de niveau bouge, le micro est activé et votre appareil reçoit le son. Certains casques ont aussi un voyant ou un interrupteur, mais l’indicateur est la vérification la plus fiable.',
      },
      {
        q: 'L’indicateur ne bouge pas. Que faire ?',
        a: 'Vérifiez l’interrupteur de coupure de votre casque et la touche micro de votre ordinateur portable. Assurez-vous ensuite que le bon microphone est sélectionné dans le menu et que votre navigateur et votre système autorisent l’accès au micro.',
      },
      {
        q: 'Mon micro fonctionne ici, mais on ne m’entend pas dans mon application d’appel.',
        a: 'L’application utilise probablement un autre microphone ou n’a pas l’autorisation. Ouvrez les paramètres audio de l’application, choisissez le micro qui a fonctionné ici et vérifiez les paramètres de confidentialité du microphone de votre système pour cette application.',
      },
      {
        q: 'Pourquoi le navigateur redemande-t-il l’autorisation ?',
        a: 'Les navigateurs demandent une fois par site et peuvent retenir votre choix si vous autorisez. S’il redemande à chaque fois, vos paramètres de confidentialité effacent peut-être les autorisations à la fermeture du navigateur.',
      },
      {
        q: 'Ce test peut-il m’enregistrer ?',
        a: 'Seulement pour la lecture de 5 secondes, et uniquement sur votre appareil. Rien n’est envoyé ni conservé ailleurs, et l’enregistrement disparaît quand vous quittez la page.',
      },
    ],
  },
};
