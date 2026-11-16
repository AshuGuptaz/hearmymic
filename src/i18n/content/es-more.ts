import type { PageTranslation } from '../../data/types';

/** Español: Zoom, Discord y la guía «el micrófono no funciona». */
export const esMore: Record<string, PageTranslation> = {
  'zoom-mic-test': {
    slug: 'probar-microfono-zoom',
    nav: 'Probar micrófono en Zoom',
    blurb: 'Comprueba tu micrófono antes de una reunión de Zoom y ajusta la configuración de Zoom.',
    title: 'Probar micrófono en Zoom: compruébalo antes de la reunión',
    description:
      'Prueba tu micrófono antes de entrar a Zoom. Confirma aquí que funciona y usa después el Probar micrófono y los ajustes de audio de Zoom para que se te oiga bien.',
    h1: 'Probar micrófono en Zoom',
    lede: 'Asegúrate de que tu micrófono funciona antes de que empiece tu reunión de Zoom, sin abrir Zoom ni entrar en una llamada.',
    introTitle: 'Primero la prueba, después la configuración de Zoom',
    intro: [
      'La forma más rápida de comprobar el micrófono para Zoom tiene dos partes. Primero, confirma aquí que tu micrófono funciona y anota su nombre en el panel «Tu micrófono». Segundo, asegúrate de que Zoom usa ese mismo micrófono. La mayoría de los problemas de «no me oyen en Zoom» se deben a que Zoom escucha un dispositivo distinto de aquel en el que estás hablando.',
      'Zoom también tiene su propia prueba. En la aplicación de escritorio, abre Configuración, elige Audio y pulsa Probar micrófono. Graba unos segundos y los reproduce por el altavoz que hayas seleccionado.',
    ],
    stepsTitle: 'Cómo probar tu micrófono para Zoom',
    steps: [
      {
        title: 'Haz la prueba en esta página',
        body: 'Pulsa «Probar mi micrófono», habla y comprueba que el medidor se mueve. Anota o recuerda el nombre del micrófono que aparece en el panel.',
      },
      {
        title: 'Abre los ajustes de audio de Zoom',
        body: 'En la aplicación de escritorio de Zoom, haz clic en tu foto de perfil, luego en Configuración y en Audio. Durante una reunión, haz clic en la flecha junto al botón Silenciar y elige Configuración de audio.',
      },
      {
        title: 'Selecciona el mismo micrófono',
        body: 'En Micrófono, elige el dispositivo que funcionó aquí. «Igual que el sistema» sigue el predeterminado de tu ordenador, que puede cambiar al conectar unos auriculares.',
      },
      {
        title: 'Usa el Probar micrófono de Zoom',
        body: 'Pulsa Probar micrófono, habla y escucha la reproducción. Deja activado «Ajustar automáticamente el volumen del micrófono» salvo que tengas un motivo para fijar el nivel a mano.',
      },
      {
        title: 'Entra en una reunión de prueba si quieres estar seguro',
        body: 'Ve a zoom.us/test para unirte a una reunión de práctica privada. Zoom te guía por una prueba de altavoz y otra de micrófono antes de que nadie más pueda oírte.',
      },
    ],
    faqs: [
      {
        q: 'Mi micrófono funciona aquí pero no en Zoom. ¿Por qué?',
        a: 'Casi seguro que Zoom usa otro micrófono o no tiene permiso. Elige el dispositivo correcto en Configuración, Audio. En un Mac, abre también Ajustes del Sistema, Privacidad y seguridad, Micrófono, y comprueba que Zoom esté activado. En Windows, revisa Configuración, Privacidad y seguridad, Micrófono.',
      },
      {
        q: '¿Por qué veo «Unirse al audio» en vez de un botón Silenciar en Zoom?',
        a: 'Has entrado en la reunión sin conectar el audio, así que nadie te oye ni tú los oyes a ellos. Haz clic en Unirse al audio y elige Unirse con audio del ordenador.',
      },
      {
        q: 'Me dicen que suena entrecortado o robótico en Zoom. ¿Es mi micrófono?',
        a: 'Graba un clip de 5 segundos aquí. Si la reproducción suena limpia, tu micrófono está bien y el problema es tu conexión a internet o la supresión de ruido de Zoom. En los ajustes de audio de Zoom, prueba a poner la supresión de ruido de fondo en Baja.',
      },
      {
        q: '¿Puedo usar este test para Zoom en el navegador?',
        a: 'Sí, y es una coincidencia especialmente fiel. El cliente web de Zoom usa el mismo acceso al micrófono del navegador que esta página. Recuerda que el permiso se concede por sitio, así que tendrás que permitir el micrófono también para el sitio de Zoom.',
      },
      {
        q: '¿Qué es el «Sonido original» en Zoom?',
        a: 'Es una opción que desactiva la mayor parte del procesamiento de audio de Zoom. Está pensada para música o micrófonos profesionales en salas silenciosas. En las llamadas del día a día déjala desactivada para que Zoom pueda eliminar el eco y el ruido de fondo.',
      },
    ],
  },

  'discord-mic-test': {
    slug: 'probar-microfono-discord',
    nav: 'Probar micrófono en Discord',
    blurb: 'Descubre si el fallo del micrófono es de tu hardware o de la configuración de Discord.',
    title: 'Probar micrófono en Discord: revisa tu micro y los ajustes de voz',
    description:
      'Prueba tu micrófono para Discord. Confirma aquí que funciona y corrige el dispositivo de entrada, la sensibilidad de entrada y el pulsar para hablar de Discord.',
    h1: 'Probar micrófono en Discord',
    lede: '¿Tus amigos no te oyen en el chat de voz? Revisa primero tu micrófono aquí y arregla después el ajuste de Discord que lo impide.',
    introTitle: '¿Es tu micrófono o es Discord?',
    intro: [
      'Discord añade varias capas entre tu micrófono y tus amigos: un ajuste de dispositivo de entrada, una puerta de sensibilidad de entrada, el pulsar para hablar opcional y la supresión de ruido. Cualquiera de ellas puede silenciar un micrófono perfectamente sano. Probar aquí saca a Discord de la ecuación. Si el medidor se mueve en esta página, tu hardware está bien y la solución está en los ajustes de Voz y vídeo de Discord.',
      'Discord también tiene una comprobación integrada. Abre Ajustes de usuario, ve a Voz y vídeo y pulsa Vamos a comprobarlo en Prueba de micrófono. Discord te reproduce tu voz hasta que lo detengas.',
    ],
    stepsTitle: 'Cómo probar tu micrófono para Discord',
    steps: [
      {
        title: 'Prueba tu micrófono en esta página',
        body: 'Pulsa «Probar mi micrófono» y habla. Fíjate en el nombre del micrófono en el panel. Si aquí no se mueve nada, el problema no es Discord.',
      },
      {
        title: 'Configura el dispositivo de entrada de Discord',
        body: 'En Discord, haz clic en el engranaje junto a tu nombre de usuario y luego en Voz y vídeo. Pon Dispositivo de entrada en el micrófono que funcionó aquí. «Predeterminado» puede apuntar al equivocado.',
      },
      {
        title: 'Revisa la sensibilidad de entrada',
        body: 'Con Actividad de voz seleccionada, activa la sensibilidad de entrada automática o arrastra el control deslizante para que tu voz normal caiga en la parte verde de la barra.',
      },
      {
        title: 'Ejecuta la Prueba de micrófono de Discord',
        body: 'Pulsa Vamos a comprobarlo y habla. Si te oyes, tus amigos también podrán oírte.',
      },
    ],
    faqs: [
      {
        q: 'Mi micrófono funciona aquí pero nadie me oye en Discord. ¿Qué reviso?',
        a: 'Comprueba cuatro cosas en orden: el Dispositivo de entrada en Voz y vídeo, si estás silenciado o silenciado por el servidor (una barra roja sobre el icono del micrófono), si el Pulsar para hablar está activado sin tecla asignada y si la sensibilidad de entrada está tan alta que tu voz nunca abre la puerta.',
      },
      {
        q: '¿Por qué Discord me corta el principio o el final de las palabras?',
        a: 'El umbral de sensibilidad de entrada es demasiado alto, así que las sílabas suaves no cuentan como voz. Baja el control deslizante o activa la sensibilidad automática. Si usas la supresión de ruido Krisp, prueba a desactivarla para comparar.',
      },
      {
        q: '¿Sirve este test para Discord en el navegador?',
        a: 'Sí. Discord en el navegador usa el mismo acceso al micrófono que esta página. Tendrás que permitir el micrófono por separado para el sitio de Discord, porque los navegadores conceden el permiso sitio por sitio.',
      },
      {
        q: '¿Por qué mi micrófono se oye tan bajo en Discord?',
        a: 'Sube el Volumen de entrada en Voz y vídeo y revisa el nivel del micrófono en los ajustes de sonido del sistema. Comprueba también que el Control automático de ganancia esté activado en las opciones de procesamiento de voz de Discord. Graba un clip aquí para confirmar si el micrófono en sí suena bajo.',
      },
      {
        q: '¿Por qué mis amigos oyen mi juego o mis altavoces a través del micrófono?',
        a: 'Tu micrófono está captando tus altavoces. Usa auriculares, mantén activada la Cancelación de eco en Discord y asegúrate de que el Dispositivo de entrada no sea una «Mezcla estéreo» ni un dispositivo de bucle, que envía todo el sonido de tu ordenador.',
      },
    ],
  },

  'fix/mic-not-working': {
    slug: 'microfono-no-funciona',
    nav: 'El micrófono no funciona',
    blurb: 'Una lista paso a paso para un micrófono que se queda en silencio.',
    title: '¿El micrófono no funciona? Cómo arreglarlo',
    description:
      '¿El micrófono no funciona? Sigue esta lista: silencio, dispositivo de entrada correcto, permisos del navegador y del sistema, y apps que lo ocupan.',
    h1: '¿El micrófono no funciona? Así se arregla',
    lede: 'Haz la prueba de abajo y recorre la lista. La mayoría de los micrófonos en silencio se arreglan en los tres primeros pasos.',
    introTitle: 'Empieza por averiguar dónde está el problema',
    intro: [
      'Un micrófono que «no funciona» suele funcionar bien y estar bloqueado en algún punto del camino: por un interruptor de silencio, por tener seleccionado el dispositivo equivocado, por un permiso o por otra aplicación. La prueba de arriba te ayuda a acotarlo rápido.',
      'Si la prueba no arranca, el mensaje que muestra te dice si el micrófono está bloqueado, ausente u ocupado. Si la prueba arranca pero el medidor se queda plano, tu ordenador ve un micrófono y recibe silencio de él, lo que apunta a un interruptor de silencio, un ajuste de volumen o el dispositivo equivocado.',
    ],
    stepsTitle: 'Arregla un micrófono que no funciona',
    steps: [
      {
        title: 'Revisa el silencio físico y la conexión',
        body: 'Busca un botón de silencio en los auriculares, el cable o el propio micrófono, y una tecla de silenciar micrófono en el teclado del portátil. Desconecta el micrófono y vuelve a conectarlo con firmeza. Prueba otro puerto USB. Un conector de 3,5 mm debe ir en la toma de micrófono o de auriculares con micro, no en la toma solo de auriculares.',
      },
      {
        title: 'Selecciona el micrófono correcto',
        body: 'Inicia la prueba y lee el nombre del dispositivo en el panel «Tu micrófono». Si no es el micrófono en el que hablas, elige el correcto en el menú Micrófono o cambia la entrada predeterminada en los ajustes de sonido del sistema.',
      },
      {
        title: 'Sube el volumen de entrada',
        body: 'En Windows 11, abre Configuración, Sistema, Sonido y haz clic en tu micrófono en Entrada. En un Mac, abre Ajustes del Sistema, Sonido, Entrada. Comprueba que el volumen de entrada no esté a cero.',
      },
      {
        title: 'Revisa los permisos en el navegador y el sistema',
        body: 'Haz clic en el icono a la izquierda de la barra de direcciones y pon Micrófono en Permitir. Después comprueba que tu sistema operativo deja a tu navegador usar el micrófono, en la sección Micrófono de sus ajustes de privacidad.',
      },
      {
        title: 'Cierra otras aplicaciones y reinicia',
        body: 'Cierra Zoom, Teams, Discord, el software de grabación y otras pestañas del navegador que puedan estar ocupando el micrófono. Si nada cambia, reinicia el navegador y después el ordenador. Libera dispositivos de audio atascados más a menudo de lo que cabría esperar.',
      },
    ],
    faqs: [
      {
        q: 'La prueba dice «Tu micrófono está ocupado». ¿Qué significa?',
        a: 'Tu navegador encontró el micrófono pero no pudo abrirlo, normalmente porque otro programa lo tiene en uso exclusivo. Cierra las aplicaciones de reuniones, el chat de voz y el software de grabación, y pulsa Intentar de nuevo. En Windows, reiniciar el ordenador libera un micrófono atascado.',
      },
      {
        q: 'La prueba dice «No se encontró ningún micrófono». ¿Qué hago?',
        a: 'Tu navegador no ve ningún dispositivo de entrada. Vuelve a conectar el micrófono, prueba otro puerto u otro cable y mira en los ajustes de sonido del sistema si aparece allí. Si el sistema tampoco lo lista, el problema es el micrófono, el cable o el puerto.',
      },
      {
        q: '¿Cómo sé si mi micrófono está roto?',
        a: 'Pruébalo en un segundo dispositivo, como otro ordenador o un móvil. Si falla en todos, el micrófono está averiado. Si funciona en otro sitio, el problema está en los ajustes, el puerto o los controladores del primer dispositivo.',
      },
      {
        q: 'Mi micrófono funciona en una aplicación pero en otra no. ¿Por qué?',
        a: 'Cada aplicación elige su propio micrófono y necesita su propio permiso. Abre los ajustes de audio de la aplicación que falla, selecciona el micrófono por su nombre y comprueba que tu sistema operativo permite a esa aplicación usarlo.',
      },
      {
        q: 'El micrófono de mis auriculares Bluetooth no funciona. ¿Algún consejo?',
        a: 'Asegúrate de que estén conectados como auriculares con micrófono y no solo como auriculares. Muchos dispositivos muestran dos entradas para un mismo auricular, y solo la de «manos libres» o «auricular con micrófono» incluye el micrófono. Apagar y encender el Bluetooth, o volver a emparejar, suele resolverlo.',
      },
    ],
  },

  'webcam-test': {
    slug: 'test-de-webcam',
    nav: 'Test de webcam',
    blurb: 'Mira tu cámara en directo y revisa encuadre, luz y nitidez.',
    title: 'Test de webcam: prueba tu cámara online (gratis y privado)',
    description:
      'Prueba tu webcam online con un clic. Vista previa en directo, resolución, encuadre e iluminación, y cambio de cámara. No se graba ni se sube nada.',
    h1: 'Test de webcam',
    lede: 'Pulsa el botón para ver lo que ve tu cámara. La vista previa se queda en tu pantalla y no se graba ni se sube nada.',
    introTitle: 'Revisa tu cámara antes de que la vea nadie más',
    intro: [
      'Este test de webcam abre tu cámara en el navegador y muestra una vista previa en directo, para que compruebes la imagen antes de una reunión, un directo o una entrevista. Funciona con las cámaras integradas de portátiles, webcams USB, cámaras de móvil y cámaras virtuales.',
      'El test también muestra un nivel de micrófono junto al vídeo, porque muchos problemas de vídeo son en realidad problemas de cámara y de micrófono a la vez. Si solo te interesa la imagen, puedes ignorar el indicador.',
    ],
    stepsTitle: 'Cómo probar tu webcam online',
    steps: [
      {
        title: 'Pulsa «Probar mi cámara y micrófono»',
        body: 'Tu navegador pide permiso para usar la cámara. Elige Permitir. Si también aparece la solicitud del micrófono, permítela, o ignórala si solo quieres revisar la imagen.',
      },
      {
        title: 'Mira la vista previa',
        body: 'Deberías verte en uno o dos segundos. La vista previa está en espejo, como en la mayoría de las aplicaciones de reuniones. Los demás te ven del lado correcto.',
      },
      {
        title: 'Comprueba la resolución',
        body: 'El panel bajo la herramienta muestra la resolución que recibió tu navegador. Una webcam moderna suele dar 720p o 1080p. Un valor mucho menor puede indicar una cámara básica o un puerto USB demasiado lento.',
      },
      {
        title: 'Elige la cámara correcta',
        body: 'Si tienes más de una cámara, un menú te permite cambiar. Así descubres cuál es la webcam externa y cuál la del portátil.',
      },
      {
        title: 'Detén el test',
        body: 'Pulsa Detener o sal de la página. La luz de la cámara de tu dispositivo debería apagarse enseguida.',
      },
    ],
    guide: [
      {
        heading: 'Cómo se ve una buena imagen de webcam',
        body: [
          '- Luz: coloca una ventana o una lámpara delante de ti. La luz por detrás te convierte en una silueta, cueste lo que cueste la cámara.',
          '- Altura: el objetivo debe estar más o menos a la altura de los ojos. Eleva el portátil con unos libros.',
          '- Distancia: siéntate a un brazo de distancia, con la cabeza y los hombros en el encuadre.',
          '- Nitidez: limpia el objetivo con un paño suave. Una huella es la causa más habitual de una imagen borrosa.',
          '- Fondo: la vista previa muestra exactamente lo que verán los demás detrás de ti.',
        ],
      },
      {
        heading: 'Si solo ves una imagen negra',
        body: [
          'Busca primero una tapa física. Muchos portátiles tienen un obturador deslizante o una tecla para apagar la cámara, y una webcam externa puede llevar una tapa en el objetivo.',
          'Después cierra todo lo que pueda estar usando la cámara: Zoom, Teams, FaceTime, OBS o una aplicación de cámara. En Windows, solo una aplicación a la vez puede usar una webcam.',
          'Por último, revisa los permisos. Tu navegador necesita acceso a la cámara para este sitio, y tu sistema operativo debe permitir que el navegador use la cámara.',
        ],
      },
    ],
    faqs: [
      {
        q: '¿Es privado mi test de webcam?',
        a: 'Sí. El vídeo se muestra solo en tu pantalla y no va a ningún otro sitio. No se graba, guarda ni envía a ningún servidor. La cámara se apaga cuando pulsas Detener o sales de la página.',
      },
      {
        q: '¿Por qué mi webcam no funciona en el test?',
        a: 'Las causas habituales son una tapa o una tecla que apaga la cámara, otra aplicación que ya la usa, o permisos bloqueados. Cierra otras aplicaciones de cámara, revisa los permisos del sitio en tu navegador y los ajustes de privacidad de la cámara de tu sistema.',
      },
      {
        q: '¿Por qué la imagen se ve en espejo?',
        a: 'La vista previa se invierte como un espejo para que moverte a la izquierda resulte natural. En una videollamada los demás te ven del lado correcto.',
      },
      {
        q: '¿Cómo pruebo una webcam externa?',
        a: 'Conéctala, inicia el test y elígela en el menú Cámara. Si no aparece, prueba otro puerto USB y comprueba que ninguna otra aplicación la esté usando.',
      },
      {
        q: '¿Puedo probar la cámara de mi móvil?',
        a: 'Sí. Abre esta página en el navegador del móvil. Usa la cámara frontal y normalmente puedes pasar a la trasera desde el menú Cámara.',
      },
      {
        q: '¿Qué resolución tiene mi webcam?',
        a: 'El panel bajo la herramienta muestra la resolución que recibió tu navegador. El test pide 720p, así que una cámara capaz de más puede mostrar 720p aquí. Las aplicaciones de reuniones eligen su propia resolución.',
      },
    ],
  },

  'is-my-mic-working': {
    slug: 'funciona-mi-microfono',
    nav: '¿Funciona mi micrófono?',
    blurb: 'Una comprobación de un clic para saber si tu micrófono está encendido y te capta.',
    title: '¿Funciona mi micrófono? Comprueba si está encendido',
    description:
      'Averigua en segundos si tu micrófono está encendido y funciona. Habla y mira el indicador de nivel; si no se mueve, sigue las soluciones rápidas.',
    h1: '¿Funciona mi micrófono?',
    lede: 'Pulsa el botón y di unas palabras. Si el indicador se mueve, tu micrófono está encendido y funciona.',
    introTitle: 'Una respuesta rápida: sí o no',
    intro: [
      'Pulsa «Probar mi micrófono», permite el acceso al micrófono y habla. El indicador de nivel sigue tu voz. Si se mueve, tu micrófono está encendido y tu ordenador o móvil lo oye. Si se queda plano, la página te dice dónde buscar.',
      'Ver moverse el indicador solo demuestra que tu dispositivo oye el micrófono. No demuestra que una aplicación como Zoom o Discord esté escuchando el mismo. Las comprobaciones rápidas de abajo también cubren eso.',
    ],
    stepsTitle: 'Cómo comprobar si tu micrófono está encendido',
    steps: [
      {
        title: 'Inicia el test y habla',
        body: 'Pulsa «Probar mi micrófono», elige Permitir cuando el navegador lo pida y di una frase con tu volumen normal.',
      },
      {
        title: 'Mira el indicador de nivel',
        body: 'El indicador debe subir y bajar con tu voz y llegar hacia la mitad o más al hablar. Un indicador plano significa que no llega sonido.',
      },
      {
        title: 'Graba y escucha',
        body: 'Graba 5 segundos y escúchalos. Si te oyes con claridad, tu micrófono funciona y capta lo que esperas.',
      },
      {
        title: 'Si está plano, revisa los controles de silencio',
        body: 'Busca un interruptor o botón de silencio en tus auriculares, una tecla de micrófono apagado en el portátil y un micrófono silenciado en los ajustes de sonido del sistema.',
      },
      {
        title: 'Comprueba que usas el micrófono correcto',
        body: 'Si tienes varios, aparece un menú Micrófono. Elige el que realmente estás usando, por ejemplo tus auriculares, y vuelve a intentarlo.',
      },
    ],
    faqs: [
      {
        q: '¿Cómo sé si mi micrófono está encendido?',
        a: 'Inicia el test y habla. Si el indicador de nivel se mueve, el micrófono está encendido y tu dispositivo recibe sonido. Algunos auriculares tienen también una luz o un interruptor, pero el indicador es la comprobación más fiable.',
      },
      {
        q: 'El indicador no se mueve. ¿Qué hago?',
        a: 'Revisa el interruptor de silencio de tus auriculares y cualquier tecla de micrófono del portátil. Después asegúrate de que el micrófono correcto esté elegido en el menú y de que el navegador y el sistema permitan el acceso al micrófono.',
      },
      {
        q: 'Mi micrófono funciona aquí, pero no me oyen en mi aplicación de llamadas.',
        a: 'Lo más probable es que la aplicación use otro micrófono o no tenga permiso. Abre los ajustes de audio de la aplicación, elige el micrófono que funcionó aquí y revisa los ajustes de privacidad del micrófono de tu sistema para esa aplicación.',
      },
      {
        q: '¿Por qué el navegador me pide permiso una y otra vez?',
        a: 'Los navegadores preguntan una vez por sitio y pueden recordar tu elección si permites. Si pregunta cada vez, es posible que tus ajustes de privacidad borren los permisos del sitio al cerrar el navegador.',
      },
      {
        q: '¿Puede este test grabarme?',
        a: 'Solo para la reproducción de 5 segundos y solo en tu propio dispositivo. No se sube ni se guarda nada en ningún otro sitio, y la grabación desaparece al salir de la página.',
      },
    ],
  },
};
