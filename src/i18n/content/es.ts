import type { PageTranslation } from '../../data/types';

/** Español. Keys are the English slugs. */
export const es: Record<string, PageTranslation> = {
  '': {
    slug: '',
    nav: 'Test de micrófono',
    blurb: 'Comprueba tu micrófono con un medidor en vivo, grabación y detalles del dispositivo.',
    title: 'Test de micrófono: prueba tu micrófono online gratis | HearMyMic',
    description:
      'Prueba tu micrófono en segundos. Mira el nivel en vivo, graba 5 segundos y escúchalos, o escúchate en directo. Gratis, privado y sin instalar nada.',
    h1: 'Test de micrófono',
    lede: 'Comprueba que tu micrófono funciona y escucha cómo suenas. Es gratis, tarda unos segundos y funciona por completo en tu navegador.',
    introTitle: 'Una forma rápida y privada de probar tu micrófono',
    intro: [
      'HearMyMic responde a dos preguntas antes de tu próxima llamada, directo o grabación: ¿me capta el micrófono? y ¿cómo sueno? Pulsa el botón, permite el acceso y el medidor se moverá mientras hablas. Si se mueve, tu micrófono funciona.',
      'Después puedes grabar un clip de 5 segundos y reproducirlo, activar la monitorización en vivo para escucharte en los auriculares o elegir otro micrófono si tienes más de uno. Todo se procesa en tu dispositivo. No se sube ni se guarda ningún audio.',
    ],
    stepsTitle: 'Cómo probar tu micrófono',
    steps: [
      {
        title: 'Pulsa «Probar mi micrófono»',
        body: 'Tu navegador te preguntará si esta página puede usar el micrófono. Elige Permitir. Si no ves ningún aviso, busca un icono de micrófono o de candado en la barra de direcciones.',
      },
      {
        title: 'Habla y mira el medidor',
        body: 'Habla con tu volumen normal. La forma de onda y la barra de nivel deberían reaccionar al instante. Un nivel verde estable con la valoración «Bueno» significa que se te oye bien.',
      },
      {
        title: 'Graba 5 segundos y escúchate',
        body: 'Pulsa Grabar, di una o dos frases y pulsa reproducir. Es lo más parecido a oírte como te oyen los demás.',
      },
      {
        title: 'Soluciona lo que suene mal',
        body: '¿Muy bajo, con eco o en silencio? La valoración del nivel y el panel «Tu micrófono» señalan la causa, y las guías de solución te explican cómo arreglarlo.',
      },
    ],
    guide: [
      {
        heading: 'Qué puedes hacer con HearMyMic',
        body: [
          'HearMyMic es un test de micrófono y de cámara web gratuito que funciona en tu navegador. Reúne las comprobaciones que suele hacer falta tener a mano, para que no tengas que instalar una aplicación ni entrar en una llamada solo para saber si te oyen.',
          '- Medidor y forma de onda en vivo: muestra tu voz mientras hablas, así ves de un vistazo si el micrófono te capta.',
          '- Grabar y reproducir: captura 5 segundos para que te escuches, lo más cercano a oír lo que oyen los demás.',
          '- Escucharte en directo: envía tu micrófono a los auriculares en tiempo real, útil para colocar el micrófono o detectar ruido.',
          '- Detalles del dispositivo: muestra el nombre del micrófono, la frecuencia de muestreo, los canales y si la cancelación de eco, la supresión de ruido y el control automático de ganancia están activados.',
          '- Selector de micrófono: te deja cambiar entre los micrófonos conectados sin salir de la página.',
          '- Prueba de cámara: la página de test de cámara y micrófono añade una vista previa en vivo junto al medidor de nivel.',
        ],
      },
      {
        heading: 'Cuándo conviene hacer un test de micrófono',
        body: [
          'Haz una prueba siempre que cambie algo en tu equipo: unos auriculares nuevos, un portátil nuevo, una actualización del navegador o del sistema que haya restablecido tus ajustes de privacidad. También vale la pena dedicarle un minuto antes de algo importante, como una entrevista de trabajo, un examen online, la grabación de un pódcast o un directo.',
          'Los jugadores lo usan para confirmar que sus cascos funcionan antes de entrar al chat de voz, y estudiantes y profesores antes de las clases online. Si te han dicho que suenas bajo, lejano o robótico, una grabación aquí te ayuda a oír el problema y a decidir si es el micrófono, la habitación o la aplicación.',
        ],
      },
      {
        heading: 'Qué prueba te conviene',
        body: [
          'El test de arriba es el mismo en todas las páginas, pero cada una está pensada para una tarea distinta. Si quieres juzgar tu sonido, usa el test de micrófono con grabación. Si quieres oírte mientras hablas, prueba el test para escucharte. Antes de una videollamada, el test de cámara y micrófono comprueba tu imagen y tu audio a la vez.',
        ],
      },
      {
        heading: 'Qué significa la valoración del nivel',
        body: [
          'El medidor mide la fuerza de la señal de tu micrófono en comparación con la señal más fuerte que puede captar tu navegador. La valoración lo traduce a palabras sencillas.',
          '- Bajo: tu voz llega al micrófono, pero por poco. Puede que te pidan que hables más alto. Acércate o sube el volumen de entrada en los ajustes del sistema.',
          '- Bueno: un nivel sano para llamadas y grabaciones, con margen cuando te ríes o levantas la voz.',
          '- Alto: la señal está cerca del máximo. Los sonidos fuertes pueden distorsionar. Aléjate un poco o baja el volumen de entrada.',
          'La valoración es una guía, no una medición de laboratorio. El control automático de ganancia, que muchos navegadores activan por defecto, ajusta tu nivel constantemente, por lo que el valor varía un poco.',
        ],
      },
      {
        heading: 'Qué muestra el panel «Tu micrófono»',
        body: [
          'Con el test en marcha, el panel bajo la herramienta enumera lo que informa tu navegador sobre el micrófono que abrió: el nombre del dispositivo, la frecuencia de muestreo, el número de canales y si la cancelación de eco, la supresión de ruido y el control automático de ganancia están activados.',
          'El nombre del dispositivo es la línea más útil. Si pone «Webcam» cuando esperabas tus auriculares, has encontrado el problema. Elige el micrófono correcto en la lista que aparece cuando hay más de uno conectado.',
          'La latencia estimada es el retraso que informa tu navegador entre capturar el sonido y reproducirlo. Algunos navegadores no la informan, y entonces el panel lo indica.',
        ],
      },
      {
        heading: 'Cómo mejorar tu sonido rápidamente',
        body: [
          'Unos pequeños cambios marcan más diferencia que la mayoría de las mejoras de equipo. Haz una prueba después de cada uno para ver cuál ayuda.',
          '- Distancia: mantén el brazo del micrófono o el micrófono de mesa cerca, a un palmo de la boca. Reducir la distancia a la mitad te hace mucho más audible frente a la habitación.',
          '- Sala: las paredes duras y los suelos desnudos añaden eco. Cortinas, una alfombra o unos cojines lo suavizan.',
          '- Ruido: apaga ventiladores y cierra ventanas si puedes, y aleja el micrófono de las rejillas del ventilador del ordenador.',
          '- Auriculares: úsalos en las llamadas para que la voz de la otra persona no se cuele desde los altavoces a tu micrófono.',
          '- Nivel: habla con normalidad y busca un «Bueno» estable. Si no es así, ajusta el volumen de entrada en los ajustes de sonido del sistema.',
        ],
      },
      {
        heading: '¿Es seguro permitir el acceso al micrófono?',
        body: [
          'Sí. El test se ejecuta como código dentro de la pestaña de tu navegador. Tu audio va del micrófono al medidor de tu pantalla y a ningún otro sitio. No hay cuenta, ni subida, ni grabación en servidores. El clip de 5 segundos vive en la memoria de tu navegador y desaparece al cerrar o recargar la página.',
          'Puedes retirar el permiso en cualquier momento desde el icono del candado o de ajustes en la barra de direcciones.',
        ],
      },
      {
        heading: 'Lo que este test no puede decirte',
        body: [
          'HearMyMic mide lo que puede ver tu navegador. No puede juzgar cualidades de estudio como la respuesta en frecuencia ni mirar dentro de otras aplicaciones, que añaden su propio procesamiento. Tampoco prueba tus altavoces ni tu conexión a internet, así que una llamada puede entrecortarse aunque el micrófono sea perfecto.',
          'Si el test sale bien pero una aplicación sigue sin oírte, revisa el dispositivo de entrada de esa aplicación y su permiso de micrófono en tu sistema operativo.',
        ],
      },
    ],
    faqs: [
      {
        q: '¿Cómo sé si mi micrófono funciona?',
        a: 'Pulsa «Probar mi micrófono», permite el acceso y habla. Si el medidor de nivel y la forma de onda se mueven con tu voz, tu micrófono funciona. Para una segunda comprobación, graba 5 segundos y reprodúcelos.',
      },
      {
        q: '¿Por qué no se mueve el medidor cuando hablo?',
        a: 'Las causas más comunes son un micrófono silenciado (revisa el interruptor de los auriculares o del cable), tener seleccionado otro micrófono o un volumen de entrada a cero en los ajustes de sonido del sistema. Si el test ni siquiera arranca, lo más probable es que tu navegador esté bloqueando el acceso al micrófono.',
      },
      {
        q: '¿HearMyMic graba o guarda mi voz?',
        a: 'No. Tu audio se procesa en tu navegador y nunca se envía a un servidor. La grabación opcional de 5 segundos se queda en la memoria de tu navegador para que puedas reproducirla y se descarta al salir o recargar la página.',
      },
      {
        q: '¿Tengo que instalar algo?',
        a: 'No. El test funciona en las versiones actuales de Chrome, Edge, Firefox y Safari en ordenadores, móviles y tabletas. No hay nada que descargar ni registro.',
      },
      {
        q: '¿Puedo probar unos auriculares, un micrófono USB o AirPods?',
        a: 'Sí. Funciona cualquier micrófono que tu dispositivo reconozca, incluidos los integrados, los auriculares con cable y Bluetooth, los micrófonos USB y las interfaces de audio. Si tienes más de uno conectado, aparece un menú de micrófono para probar cada uno.',
      },
      {
        q: '¿Qué precisión tienen los resultados?',
        a: 'Son una buena comprobación práctica, no una medición calibrada. El nivel, los ajustes y la latencia provienen de lo que informa tu navegador, y aplicaciones como Zoom o Discord aplican su propio procesamiento encima.',
      },
    ],
  },

  'online-mic-test': {
    slug: 'probar-microfono-online',
    nav: 'Probar micrófono online',
    blurb: 'Prueba cualquier micrófono en tu navegador. Sin descargas ni registro.',
    title: 'Probar micrófono online: comprueba tu micrófono en el navegador',
    description:
      'Prueba tu micrófono online sin descargar nada. Mira tu nivel de entrada en vivo, comprueba qué micrófono usa tu navegador y detecta problemas rápido.',
    h1: 'Probar micrófono online',
    lede: 'Prueba tu micrófono aquí mismo, en el navegador. Sin aplicación, sin cuenta, sin esperas.',
    introTitle: '¿Por qué probar tu micrófono online?',
    intro: [
      'Probar el micrófono online es la forma más rápida de separar un problema del micrófono de un problema de la aplicación. Si tu micrófono funciona en esta página, el hardware, el cable y los ajustes del sistema están bien, y lo que falló está dentro de la aplicación que usabas. Si aquí tampoco funciona, sabes que debes mirar el propio micrófono, la conexión o los permisos.',
      'Como funciona en el navegador, el test se comporta igual en un PC con Windows, un Mac, un Chromebook o un móvil. Usa el mismo acceso al micrófono que las herramientas de reunión web, así que es una comprobación realista antes de cualquier llamada en una pestaña del navegador.',
    ],
    stepsTitle: 'Cómo funciona el test de micrófono online',
    steps: [
      {
        title: 'Inicia el test y permite el acceso',
        body: 'Pulsa «Probar mi micrófono». Los navegadores solo comparten tu micrófono con una página después de que digas que sí, y solo para ese sitio.',
      },
      {
        title: 'Confirma que se usa el micrófono correcto',
        body: 'Mira el nombre del dispositivo en el panel «Tu micrófono». Los portátiles con webcam, auriculares y micrófono integrado a menudo eligen uno distinto del que esperas.',
      },
      {
        title: 'Habla y lee el nivel',
        body: 'Cuenta hasta diez con tu volumen habitual. Busca un nivel en la zona verde y una valoración de «Bueno».',
      },
      {
        title: 'Prueba tus otros micrófonos',
        body: 'Si tienes más de un micrófono conectado, usa el menú Micrófono para cambiar entre ellos y comparar niveles sin salir de la página.',
      },
    ],
    guide: [
      {
        heading: 'Lo que un navegador puede y no puede decirte',
        body: [
          'Un test en el navegador se da bien en lo básico: si hay un micrófono conectado, si el sitio tiene permiso para usarlo, qué fuerza tiene la señal y qué funciones de procesamiento están activadas. Eso cubre la gran mayoría de los problemas de «nadie me oye».',
          'No puede medir con exactitud cualidades de estudio como la respuesta en frecuencia o el ruido propio. Además, los navegadores procesan la señal antes de que la página llegue a verla. La cancelación de eco, la supresión de ruido y el control automático de ganancia suelen estar activados por defecto, lo ideal para llamadas, pero significa que el nivel que ves ya viene «arreglado».',
        ],
      },
      {
        heading: 'Cómo leer la frecuencia de muestreo y los canales',
        body: [
          'La frecuencia de muestreo es cuántas veces por segundo se mide tu audio. La mayoría de los dispositivos informan 44,1 o 48 kHz, y cualquiera de las dos es más que suficiente para una voz clara. Los auriculares Bluetooth suelen bajar a 16 kHz o menos mientras usan el micrófono, por eso las voces suenan más finas en ellos.',
          'Canales indica si el navegador abrió el micrófono en mono o en estéreo. Un solo canal es lo normal y esperable para la voz.',
        ],
      },
    ],
    faqs: [
      {
        q: '¿Es gratis este test de micrófono online?',
        a: 'Sí, totalmente. No hay límites, ni prueba, ni cuenta.',
      },
      {
        q: '¿En qué navegadores funciona?',
        a: 'Funcionan las versiones actuales de Chrome, Edge, Firefox, Safari, Brave y Samsung Internet. Los navegadores integrados en otras aplicaciones, como los que abren enlaces dentro de Instagram o Facebook, suelen bloquear el micrófono, así que abre la página en tu navegador habitual.',
      },
      {
        q: 'Mi micrófono funciona aquí pero no en mi aplicación de reuniones. ¿Por qué?',
        a: 'Eso apunta a los ajustes de la propia aplicación. Abre sus ajustes de audio y comprueba que esté seleccionado el mismo micrófono que viste aquí, que no estés silenciado en la aplicación y que tu sistema operativo permita a esa aplicación usar el micrófono.',
      },
      {
        q: '¿Por qué el test muestra un micrófono distinto del que conecté?',
        a: 'Los navegadores empiezan con el dispositivo de entrada predeterminado del sistema. Elige tu micrófono en el menú Micrófono de la herramienta o cambia la entrada predeterminada en los ajustes de sonido del sistema.',
      },
      {
        q: '¿Funciona el test en un móvil?',
        a: 'Sí. Funciona en Safari en iPhone y iPad y en Chrome en Android. Los pasos son los mismos: toca el botón, permite el acceso al micrófono y habla.',
      },
    ],
  },

  'mic-test-with-playback': {
    slug: 'test-de-microfono-con-grabacion',
    nav: 'Test de micrófono con grabación',
    blurb: 'Graba 5 segundos y escúchate para saber cómo suenas de verdad.',
    title: 'Test de micrófono con grabación: grábate y escúchate',
    description:
      'Graba un clip de 5 segundos y reprodúcelo para oír exactamente cómo suena tu micrófono. Test de micrófono con grabación gratis, en tu navegador.',
    h1: 'Test de micrófono con grabación',
    lede: 'Graba un clip corto y reprodúcelo. Es la forma más sincera de saber cómo suenas para los demás.',
    introTitle: 'Escucha lo que oyen los demás',
    intro: [
      'Un medidor de nivel que se mueve demuestra que tu micrófono funciona. No dice si suenas claro, apagado, lejano o con zumbido. La reproducción sí. Graba cinco segundos de voz normal, escúchalos con auriculares o altavoces y sabrás de una vez si tu equipo está listo.',
      'La grabación se hace y se guarda solo en la memoria de tu navegador. No se sube y desaparece al cerrar o recargar la página.',
    ],
    stepsTitle: 'Cómo grabar y reproducir tu micrófono',
    steps: [
      {
        title: 'Inicia el test',
        body: 'Pulsa «Probar mi micrófono» y permite el acceso al micrófono. Comprueba que el medidor se mueve cuando hablas.',
      },
      {
        title: 'Pulsa «Grabar 5 segundos»',
        body: 'Un anillo cuenta atrás mientras hablas. Usa tu voz normal y tu distancia habitual al micrófono, como en una llamada real.',
      },
      {
        title: 'Di algo útil',
        body: 'Prueba: «Probando, uno, dos, tres. Tres tristes tigres tragaban trigo en un trigal. Pablito clavó un clavito». Los sonidos P y S revelan enseguida los golpes de aire y la aspereza.',
      },
      {
        title: 'Pulsa reproducir y escucha',
        body: 'Escucha una vez por el volumen y otra por la calidad. Con auriculares los problemas se oyen mucho mejor que con los altavoces del portátil.',
      },
      {
        title: 'Ajusta y vuelve a grabar',
        body: 'Cambia una sola cosa cada vez, como la distancia, el volumen de entrada u otro micrófono, y graba de nuevo para comparar.',
      },
    ],
    guide: [
      {
        heading: 'Qué escuchar en tu grabación',
        body: [
          '- Volumen: debes oírte bien sin subir los altavoces. Si suenas flojo, acércate o sube el volumen de entrada.',
          '- Distorsión: crujidos o un borde áspero y borroso en las palabras fuertes indican que la señal es demasiado alta. Baja el volumen de entrada o aléjate.',
          '- Eco de sala: un sonido hueco, como de baño, viene de paredes duras y de la distancia. Acercarte al micrófono ayuda más que cualquier otra cosa.',
          '- Golpes de aire: los golpes en las P y las B son ráfagas de aire que chocan con el micrófono. Inclina el micrófono ligeramente hacia un lado de la boca.',
          '- Ruido de fondo: un siseo, zumbido o ruido de ventilador bajo tu voz. Aléjate de la fuente o deja activada la supresión de ruido.',
          '- Cortes: palabras que se entrecortan suelen indicar una conexión Bluetooth débil o una supresión de ruido demasiado agresiva.',
        ],
      },
      {
        heading: 'Por qué suenas distinto en una grabación',
        body: [
          'Casi todo el mundo se sorprende al oír su voz grabada. Cuando hablas, te oyes en parte a través de los huesos del cráneo, que añaden frecuencias graves que un micrófono nunca capta. La grabación se parece más a lo que oyen los demás, así que júzgala por su claridad y volumen, no por si coincide con la voz que tienes en la cabeza.',
        ],
      },
    ],
    faqs: [
      {
        q: '¿Cuánto tiempo puedo grabar?',
        a: 'Cada grabación dura 5 segundos, suficiente para juzgar volumen y claridad. Puedes grabar de nuevo las veces que quieras. Cada grabación nueva sustituye a la anterior.',
      },
      {
        q: '¿Dónde se guarda mi grabación?',
        a: 'En ningún sitio permanente. El clip se mantiene en la memoria de tu navegador para reproducirlo y nunca se sube. Al cerrar o recargar la pestaña se elimina.',
      },
      {
        q: '¿Por qué no oigo nada al pulsar reproducir?',
        a: 'Comprueba que tus altavoces o auriculares no estén silenciados y que el medidor se moviera mientras grababas. Si el medidor se quedó plano, el micrófono no te captaba. En un iPhone, sube también el volumen multimedia con los botones laterales.',
      },
      {
        q: '¿Por qué mi grabación suena baja o apagada?',
        a: 'Normalmente el micrófono está demasiado lejos, el volumen de entrada es bajo o hay otro micrófono activo, como el integrado del portátil en lugar de tus auriculares. Revisa primero el nombre del dispositivo en el panel «Tu micrófono».',
      },
      {
        q: '¿Sonaré igual en Zoom o Discord?',
        a: 'Parecido, pero no idéntico. Cada aplicación aplica su propia supresión de ruido y compresión. Una grabación limpia aquí es una buena señal de que también sonarás bien allí.',
      },
    ],
  },

  'hear-yourself-mic-test': {
    slug: 'escucharte-con-el-microfono',
    nav: 'Escucharte con el micrófono',
    blurb: 'Escucha tu propio micrófono en directo por los auriculares.',
    title: 'Test para escucharte con el micrófono en directo',
    description:
      'Escucha tu micrófono en tiempo real. Activa la monitorización en vivo para comprobar tu sonido, tus auriculares y tus niveles mientras hablas. Gratis y privado.',
    h1: 'Escucharte con el micrófono',
    lede: 'Activa «Escúchate en directo» para oír tu micrófono en tiempo real. Ponte antes los auriculares.',
    introTitle: 'Monitorización en vivo, en tu navegador',
    intro: [
      'A veces no quieres una grabación. Quieres oír tu micrófono mientras hablas, para moverlo, ajustar el volumen y notar los problemas en el momento en que ocurren. El interruptor «Escúchate en directo» envía tu micrófono directamente a los auriculares mientras el test está en marcha.',
      'Está desactivado por defecto por una buena razón. Si tu micrófono oye tus altavoces, el sonido da vueltas y crece hasta convertirse en un pitido fuerte. Con auriculares, ese bucle no puede formarse.',
    ],
    stepsTitle: 'Cómo escucharte a través del micrófono',
    steps: [
      {
        title: 'Ponte los auriculares',
        body: 'Los auriculares o cascos con cable funcionan mejor. Añaden el menor retraso y evitan que tus altavoces vuelvan a entrar en el micrófono.',
      },
      {
        title: 'Inicia el test',
        body: 'Pulsa «Probar mi micrófono» y permite el acceso al micrófono. Comprueba que el medidor de nivel responde a tu voz.',
      },
      {
        title: 'Activa «Escúchate en directo»',
        body: 'Mueve el interruptor. Deberías oír tu voz en los auriculares de inmediato. Empieza con el volumen bajo y súbelo poco a poco.',
      },
      {
        title: 'Escucha mientras ajustas',
        body: 'Acerca y aleja el micrófono, golpea la mesa, arruga un papel. Oirás exactamente lo que capta el micrófono según cambias las cosas.',
      },
      {
        title: 'Desactívalo al terminar',
        body: 'Vuelve a mover el interruptor o pulsa Detener. La monitorización también termina en cuanto sales de la página.',
      },
    ],
    guide: [
      {
        heading: 'Por qué hay un pequeño retraso',
        body: [
          'Tu voz tiene que viajar desde el micrófono, pasar por el sistema de audio del ordenador, por el navegador y volver a salir hacia tus auriculares. Ese recorrido lleva tiempo, normalmente unas centésimas de segundo con un equipo con cable. Lo notarás como un leve doblado de tu propia voz.',
          'Los auriculares Bluetooth añaden mucho más, a menudo una quinta parte de segundo o más, porque el audio se comprime y se envía por el aire en los dos sentidos. Es normal y no es un fallo de tu micrófono. Para una monitorización más ajustada, usa auriculares con cable.',
          'La línea «Latencia estimada» del panel muestra el retraso que informa tu navegador. Tómala como una cifra aproximada. No todos los navegadores informan de cada parte de la cadena.',
        ],
      },
      {
        heading: 'Monitorización en vivo o grabación: cuál usar',
        body: [
          'Usa la monitorización en vivo para colocar un micrófono, ajustar tu nivel o detectar zumbidos y ruido de fondo mientras mueves cosas. Usa la grabación de 5 segundos cuando quieras juzgar cómo suenas de verdad, porque es difícil escuchar con sentido crítico mientras hablas.',
          'Si quieres oír tu micrófono en los auriculares todo el tiempo, incluso en juegos y llamadas, es un ajuste del sistema o de los auriculares que suele llamarse «sidetone» o monitorización del micrófono.',
        ],
      },
    ],
    faqs: [
      {
        q: '¿Por qué debo usar auriculares en este test?',
        a: 'Sin ellos, tu micrófono capta su propio sonido desde los altavoces, que se amplifica y se vuelve a captar. Ese bucle se convierte en un aullido fuerte en un segundo o dos. Los auriculares mantienen el sonido fuera del micrófono.',
      },
      {
        q: 'Activé «Escúchate en directo» pero no oigo nada. ¿Qué pasa?',
        a: 'Comprueba que el medidor de nivel se mueve, que el volumen de tus auriculares está alto y que el sonido sale por la salida que llevas puesta. En un iPhone, el interruptor de silencio puede silenciar la monitorización: ponlo en modo timbre y sube el volumen.',
      },
      {
        q: '¿Por qué oigo un eco de mi propia voz?',
        a: 'Es el retraso de la monitorización. Tu voz llega primero directamente a tus oídos y, un instante después, por los auriculares. Los auriculares con cable mantienen pequeña esa diferencia. Con Bluetooth se nota mucho más.',
      },
      {
        q: '¿Es el mismo retraso que oyen los demás en las llamadas?',
        a: 'No. El retraso de una llamada depende de la conexión a internet entre tú y la otra persona. Lo que oyes aquí es solo el bucle local dentro de tu propio dispositivo.',
      },
      {
        q: '¿Puedo seguir oyéndome después de cerrar esta página?',
        a: 'No. La monitorización se detiene cuando detienes el test o sales. Para oír tu micrófono todo el tiempo, usa la función de monitorización de tu sistema operativo o de tus auriculares.',
      },
    ],
  },

  'webcam-and-mic-test': {
    slug: 'test-de-camara-y-microfono',
    nav: 'Test de cámara y micrófono',
    blurb: 'Comprueba tu cámara y tu micrófono juntos antes de una videollamada.',
    title: 'Test de cámara web y micrófono: comprueba cámara y audio online',
    description:
      'Prueba tu cámara web y tu micrófono a la vez. Mira una vista previa en vivo junto al nivel del micrófono, graba una prueba de sonido y prepárate para tu videollamada.',
    h1: 'Test de cámara web y micrófono',
    lede: 'Mira tu cámara y comprueba tu micrófono al mismo tiempo, para estar listo antes de que empiece la llamada.',
    introTitle: 'Una sola comprobación para cámara y micrófono',
    intro: [
      'Entrar en una videollamada y descubrir que tu cámara sale negra o que tu micrófono no suena es estresante, y se puede evitar. Esta página abre tu cámara web y tu micrófono a la vez, muestra una vista previa en vivo junto a tu nivel de audio y te deja grabar una prueba de sonido rápida.',
      'La vista previa está en espejo, como la mayoría de las aplicaciones de reuniones te muestran a ti mismo. Los demás en una llamada te ven del derecho. El vídeo solo se muestra en tu pantalla. No se graba, no se sube ni se guarda.',
    ],
    stepsTitle: 'Cómo probar tu cámara web y tu micrófono juntos',
    steps: [
      {
        title: 'Pulsa «Probar mi cámara y micrófono»',
        body: 'Tu navegador pedirá permiso para la cámara y el micrófono. Permite ambos. Algunos navegadores muestran un solo aviso y otros preguntan dos veces.',
      },
      {
        title: 'Revisa tu imagen',
        body: 'Mira la vista previa para ver el encuadre, el enfoque y la luz. Tus ojos deben quedar a un tercio de la altura del encuadre, con luz sobre tu cara y no detrás de ti.',
      },
      {
        title: 'Revisa tu sonido',
        body: 'Habla con normalidad y observa el medidor de nivel junto al vídeo. Después graba 5 segundos y reprodúcelos para oír cómo te perciben.',
      },
      {
        title: 'Cambia de dispositivo si lo necesitas',
        body: 'Si tienes más de una cámara o micrófono, aparecen menús para elegir los que quieres usar en la llamada.',
      },
    ],
    guide: [
      {
        heading: 'Luce mejor en cámara en un minuto',
        body: [
          '- Mira hacia la luz. Una ventana o una lámpara frente a ti vale más que cualquier mejora de cámara. Una ventana luminosa a tu espalda te convierte en una silueta.',
          '- Sube la cámara a la altura de los ojos. Con unos libros debajo del portátil basta. Mirar hacia abajo a la cámara rara vez favorece.',
          '- Limpia la lente. Una huella en la cámara del portátil o del móvil vuelve borrosa toda la imagen.',
          '- Revisa lo que hay detrás de ti. La vista previa muestra exactamente lo que verán los demás.',
        ],
      },
      {
        heading: 'Si la vista previa de la cámara sigue en negro',
        body: [
          'Primero busca una tapa física. Muchos portátiles tienen un obturador deslizante sobre la lente o una tecla de cámara en el teclado, y una cámara web externa puede tener tapa en la lente.',
          'Después, cierra otras aplicaciones que puedan estar usando la cámara, como Zoom, Teams, FaceTime o una aplicación de cámara. En Windows en particular, solo una aplicación a la vez puede usar una cámara web.',
          'Por último, revisa los permisos. Tu navegador necesita acceso a la cámara para este sitio, y tu sistema operativo debe permitir que tu navegador use la cámara. Si la parte del micrófono funciona y la de la cámara no, lo habitual es que sean los permisos.',
        ],
      },
    ],
    faqs: [
      {
        q: '¿Se graba o se sube mi vídeo?',
        a: 'No. La vista previa de la cámara se dibuja en tu pantalla y no va a ningún otro sitio. No se graba, guarda ni envía nada a un servidor. La cámara se apaga cuando pulsas Detener o sales de la página.',
      },
      {
        q: '¿Por qué mi vista previa aparece invertida?',
        a: 'La vista previa está en espejo para que moverte a la izquierda se vea como un movimiento a la izquierda, lo cual resulta natural. Las aplicaciones de reuniones hacen lo mismo. Las personas al otro lado de la llamada te ven sin espejo.',
      },
      {
        q: 'Mi micrófono funciona pero la cámara no. ¿Qué reviso?',
        a: 'Busca una tapa de la lente o una tecla para apagar la cámara, cierra otras aplicaciones que puedan estar usándola y comprueba que tanto tu navegador como tu sistema operativo permiten el acceso a la cámara. El test de micrófono sigue funcionando aunque la cámara no pueda arrancar.',
      },
      {
        q: '¿Puedo probar una cámara web externa?',
        a: 'Sí. Conéctala, inicia el test y elígela en el menú Cámara. Muchas cámaras web también tienen su propio micrófono, que aparecerá en el menú Micrófono.',
      },
      {
        q: '¿Qué resolución usa el test?',
        a: 'El test pide a tu cámara una imagen de 720p y muestra en el panel bajo la herramienta la resolución que tu navegador recibió realmente. Tu aplicación de reuniones puede usar otra resolución según tu conexión.',
      },
      {
        q: '¿Funciona en móviles y tabletas?',
        a: 'Sí. En un móvil el test usa la cámara frontal y el micrófono integrado, o el de tus auriculares si hay alguno conectado.',
      },
    ],
  },
};
