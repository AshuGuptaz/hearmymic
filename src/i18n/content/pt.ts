import type { PageTranslation } from '../../data/types';

/** Português (neutral, written with Brazilian spelling). Keys are the English slugs. */
export const pt: Record<string, PageTranslation> = {
  '': {
    slug: '',
    nav: 'Teste de microfone',
    blurb: 'Verifique seu microfone com medidor ao vivo, reprodução e detalhes do dispositivo.',
    title: 'Teste de microfone: teste seu microfone online grátis | HearMyMic',
    description:
      'Teste seu microfone em segundos. Veja o nível ao vivo, grave 5 segundos e ouça de volta, ou ouça a si mesmo em tempo real. Grátis, privado e sem instalar nada.',
    h1: 'Teste de microfone',
    lede: 'Confira se o seu microfone funciona e ouça como você soa. É grátis, leva alguns segundos e roda inteiramente no seu navegador.',
    introTitle: 'Um jeito rápido e privado de testar seu microfone',
    intro: [
      'O HearMyMic responde a duas perguntas antes da sua próxima chamada, live ou gravação: meu microfone está me captando e como eu soo? Toque no botão, permita o acesso e o medidor se mexe enquanto você fala. Se ele se mexe, seu microfone funciona.',
      'Depois você pode gravar um trecho de 5 segundos e ouvir de volta, ligar o monitoramento ao vivo para se ouvir no fone ou escolher outro microfone, se tiver mais de um. Tudo é processado no seu dispositivo. Nenhum áudio é enviado ou guardado.',
    ],
    stepsTitle: 'Como testar seu microfone',
    steps: [
      {
        title: 'Toque em “Testar meu microfone”',
        body: 'Seu navegador pergunta se esta página pode usar o microfone. Escolha Permitir. Se não aparecer nenhum aviso, procure um ícone de microfone ou de cadeado na barra de endereço.',
      },
      {
        title: 'Fale e observe o medidor',
        body: 'Fale no seu volume normal. A forma de onda e a barra de nível devem reagir na hora. Um nível verde estável com a classificação “Bom” significa que você é ouvido com facilidade.',
      },
      {
        title: 'Grave 5 segundos e ouça',
        body: 'Toque em Gravar, diga uma ou duas frases e toque em reproduzir. É o que mais se aproxima de ouvir você do jeito que os outros ouvem.',
      },
      {
        title: 'Corrija o que soar estranho',
        body: 'Baixo demais, com eco ou mudo? A classificação do nível e o painel “Seu microfone” apontam a causa, e os guias de solução mostram como resolver.',
      },
    ],
    guide: [
      {
        heading: 'O que você pode fazer com o HearMyMic',
        body: [
          'O HearMyMic é um teste gratuito de microfone e webcam que roda no navegador. Ele reúne as verificações que as pessoas costumam precisar, para que você não tenha de instalar um aplicativo nem entrar numa chamada só para saber se está sendo ouvido.',
          '- Medidor e forma de onda ao vivo: mostram sua voz enquanto você fala, para ver de relance se o microfone está captando você.',
          '- Gravar e ouvir de volta: captura 5 segundos para você ouvir, o mais próximo possível do que os outros escutam.',
          '- Ouvir a si mesmo ao vivo: envia seu microfone para o fone em tempo real, útil para posicionar o microfone ou checar ruídos.',
          '- Detalhes do dispositivo: mostram o nome do microfone, a taxa de amostragem, os canais e se o cancelamento de eco, a supressão de ruído e o controle automático de ganho estão ativados.',
          '- Seletor de microfone: permite alternar entre os microfones conectados sem sair da página.',
          '- Verificação de webcam: a página de teste de webcam e microfone adiciona uma prévia da câmera ao vivo ao lado do medidor de nível.',
        ],
      },
      {
        heading: 'Quando vale a pena testar o microfone',
        body: [
          'Faça um teste sempre que algo mudar na sua configuração: um headset novo, um notebook novo, uma atualização do navegador ou do sistema que possa ter redefinido suas configurações de privacidade. Também vale um minuto antes de algo importante, como uma entrevista de emprego, uma prova online, a gravação de um podcast ou uma transmissão.',
          'Gamers usam para confirmar que o headset funciona antes de entrar no chat de voz, e alunos e professores antes das aulas online. Se já disseram que você soa baixo, distante ou robótico, uma gravação aqui ajuda a ouvir o problema e decidir se é o microfone, a sala ou o aplicativo.',
        ],
      },
      {
        heading: 'Qual teste combina com a sua situação',
        body: [
          'O teste acima é o mesmo em todas as páginas, mas cada página é pensada para uma tarefa diferente. Se quer avaliar seu som, use o teste de microfone com gravação. Se quer se ouvir enquanto fala, experimente o teste para se ouvir. Antes de uma chamada de vídeo, o teste de webcam e microfone verifica imagem e áudio juntos.',
        ],
      },
      {
        heading: 'O que significa a classificação do nível',
        body: [
          'O medidor mostra a força do sinal do seu microfone em relação ao sinal mais forte que o navegador consegue captar. A classificação traduz isso em palavras simples.',
          '- Baixo: sua voz chega ao microfone, mas por pouco. Podem pedir que você fale mais alto. Chegue mais perto ou aumente o volume de entrada nas configurações do sistema.',
          '- Bom: um nível saudável para chamadas e gravações, com folga quando você ri ou levanta a voz.',
          '- Alto: o sinal está perto do máximo. Sons fortes podem distorcer. Afaste-se um pouco ou diminua o volume de entrada.',
          'A classificação é uma referência, não uma medição de laboratório. O controle automático de ganho, que muitos navegadores ativam por padrão, ajusta seu nível o tempo todo, então o valor varia um pouco.',
        ],
      },
      {
        heading: 'O que o painel “Seu microfone” mostra',
        body: [
          'Com o teste em andamento, o painel abaixo da ferramenta lista o que o navegador informa sobre o microfone aberto: o nome do dispositivo, a taxa de amostragem, o número de canais e se o cancelamento de eco, a supressão de ruído e o controle automático de ganho estão ativados.',
          'O nome do dispositivo é a linha mais útil. Se aparecer “Webcam” quando você esperava o seu headset, achou o problema. Escolha o microfone certo na lista que aparece quando há mais de um conectado.',
          'A latência estimada é o atraso que o navegador informa entre captar o som e reproduzi-lo. Alguns navegadores não informam, e então o painel avisa.',
        ],
      },
      {
        heading: 'Jeitos rápidos de melhorar o som',
        body: [
          'Algumas mudanças pequenas fazem mais diferença do que a maioria dos upgrades. Teste depois de cada uma para ver qual ajuda.',
          '- Distância: mantenha a haste do headset ou o microfone de mesa perto, a cerca de uma mão da boca. Reduzir a distância pela metade deixa você bem mais alto em relação à sala.',
          '- Ambiente: paredes duras e pisos sem tapete criam eco. Cortinas, um tapete ou algumas almofadas ajudam a suavizar.',
          '- Ruído: desligue ventiladores e feche janelas, se puder, e mantenha o microfone longe das saídas de ar do computador.',
          '- Fones: use-os nas chamadas para que a voz da outra pessoa não vaze dos alto-falantes de volta para o microfone.',
          '- Nível: fale normalmente e busque um “Bom” estável. Se não estiver, ajuste o volume de entrada nas configurações de som do sistema.',
        ],
      },
      {
        heading: 'É seguro permitir o acesso ao microfone?',
        body: [
          'Sim. O teste roda como código dentro da aba do seu navegador. Seu áudio vai do microfone para o medidor na tela e para lugar nenhum mais. Não há conta, envio nem gravação em servidor. O trecho de 5 segundos fica na memória do navegador e some quando você fecha ou recarrega a página.',
          'Você pode retirar a permissão a qualquer momento pelo ícone de cadeado ou de configurações na barra de endereço.',
        ],
      },
      {
        heading: 'O que este teste não consegue dizer',
        body: [
          'O HearMyMic mede o que o seu navegador consegue ver. Não avalia qualidades de estúdio, como a resposta em frequência, nem enxerga dentro de outros aplicativos, que adicionam processamento próprio. Também não testa seus alto-falantes nem sua conexão com a internet, então uma chamada pode falhar mesmo com um microfone perfeito.',
          'Se o teste passar, mas um aplicativo ainda não ouvir você, confira a configuração de dispositivo de entrada desse aplicativo e a permissão de microfone dele no sistema operacional.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Como sei se meu microfone está funcionando?',
        a: 'Toque em “Testar meu microfone”, permita o acesso e fale. Se o medidor de nível e a forma de onda se mexerem com a sua voz, seu microfone está funcionando. Para uma segunda checagem, grave 5 segundos e ouça de volta.',
      },
      {
        q: 'Por que o medidor não se mexe quando eu falo?',
        a: 'As causas mais comuns são microfone no mudo (confira o botão do headset ou do cabo), outro microfone selecionado ou o volume de entrada em zero nas configurações de som do sistema. Se o teste nem começa, o navegador provavelmente está bloqueando o acesso ao microfone.',
      },
      {
        q: 'O HearMyMic grava ou guarda minha voz?',
        a: 'Não. Seu áudio é processado no navegador e nunca é enviado a um servidor. A gravação opcional de 5 segundos fica na memória do navegador para você ouvir e é descartada quando você sai ou recarrega a página.',
      },
      {
        q: 'Preciso instalar alguma coisa?',
        a: 'Não. O teste funciona nas versões atuais do Chrome, Edge, Firefox e Safari em computadores, celulares e tablets. Não há nada para baixar nem cadastro.',
      },
      {
        q: 'Posso testar um headset, um microfone USB ou AirPods?',
        a: 'Sim. Qualquer microfone que o seu dispositivo reconheça funciona, incluindo microfones embutidos, headsets com fio e Bluetooth, microfones USB e interfaces de áudio. Se houver mais de um conectado, aparece um menu de microfone para testar cada um.',
      },
      {
        q: 'Qual a precisão dos resultados?',
        a: 'São uma boa verificação prática, não uma medição calibrada. O nível, as configurações e a latência vêm do que o navegador informa, e aplicativos como Zoom ou Discord aplicam o próprio processamento por cima.',
      },
    ],
  },

  'online-mic-test': {
    slug: 'teste-de-microfone-online',
    nav: 'Teste de microfone online',
    blurb: 'Teste qualquer microfone no navegador. Sem download e sem cadastro.',
    title: 'Teste de microfone online: verifique seu microfone no navegador',
    description:
      'Faça um teste de microfone online sem baixar nada. Veja seu nível de entrada ao vivo, confira qual microfone o navegador usa e descubra problemas rapidamente.',
    h1: 'Teste de microfone online',
    lede: 'Teste seu microfone aqui mesmo, no navegador. Sem aplicativo, sem conta, sem espera.',
    introTitle: 'Por que testar o microfone online?',
    intro: [
      'Um teste de microfone online é o jeito mais rápido de separar um problema do microfone de um problema do aplicativo. Se o seu microfone funciona nesta página, o hardware, o cabo e as configurações do sistema estão bem, e o que deu errado está no aplicativo que você usava. Se aqui também não funciona, você sabe que deve olhar o próprio microfone, a conexão ou as permissões.',
      'Como roda no navegador, o teste funciona do mesmo jeito em um PC com Windows, um Mac, um Chromebook ou um celular. Ele usa o mesmo acesso ao microfone das ferramentas de reunião na web, então é uma verificação realista antes de qualquer chamada feita numa aba do navegador.',
    ],
    stepsTitle: 'Como funciona o teste de microfone online',
    steps: [
      {
        title: 'Inicie o teste e permita o acesso',
        body: 'Toque em “Testar meu microfone”. Os navegadores só compartilham o microfone com uma página depois que você diz sim, e apenas para este site.',
      },
      {
        title: 'Confirme que o microfone certo está em uso',
        body: 'Veja o nome do dispositivo no painel “Seu microfone”. Notebooks com webcam, headset e microfone embutido costumam escolher um diferente do esperado.',
      },
      {
        title: 'Fale e leia o nível',
        body: 'Conte até dez no seu volume de voz habitual. Busque um nível na faixa verde e a classificação “Bom”.',
      },
      {
        title: 'Experimente seus outros microfones',
        body: 'Se houver mais de um microfone conectado, use o menu Microfone para alternar entre eles e comparar os níveis sem sair da página.',
      },
    ],
    guide: [
      {
        heading: 'O que um navegador pode e não pode dizer',
        body: [
          'Um teste no navegador vai bem no básico: se há um microfone conectado, se o site tem permissão para usá-lo, qual a força do sinal e quais recursos de processamento estão ativos. Isso cobre a grande maioria dos problemas de “ninguém me ouve”.',
          'Ele não mede com precisão qualidades de estúdio, como resposta em frequência ou ruído próprio. Além disso, os navegadores processam o sinal antes que a página o veja. Cancelamento de eco, supressão de ruído e controle automático de ganho costumam vir ativados por padrão, o que é ideal para chamadas, mas significa que o nível que você vê já foi “arrumado”.',
        ],
      },
      {
        heading: 'Como ler a taxa de amostragem e os canais',
        body: [
          'A taxa de amostragem indica quantas vezes por segundo o áudio é medido. A maioria dos dispositivos informa 44,1 ou 48 kHz, e qualquer uma das duas é mais do que suficiente para voz clara. Headsets Bluetooth costumam cair para 16 kHz ou menos enquanto o microfone está em uso, e por isso as vozes soam mais finas.',
          'Canais indica se o navegador abriu o microfone em mono ou estéreo. Um canal é normal e esperado para voz.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Este teste de microfone online é grátis?',
        a: 'Sim, totalmente. Não há limites, período de teste nem conta.',
      },
      {
        q: 'Em quais navegadores funciona?',
        a: 'As versões atuais do Chrome, Edge, Firefox, Safari, Brave e Samsung Internet funcionam. Navegadores embutidos em outros aplicativos, como os que abrem links dentro do Instagram ou do Facebook, costumam bloquear o microfone; abra a página no seu navegador de costume.',
      },
      {
        q: 'Meu microfone funciona aqui, mas não no aplicativo de reuniões. Por quê?',
        a: 'Isso aponta para as configurações do próprio aplicativo. Abra as configurações de áudio dele e confira se o mesmo microfone que você viu aqui está selecionado, se você não está no mudo no aplicativo e se o sistema operacional permite que ele use o microfone.',
      },
      {
        q: 'Por que o teste mostra um microfone diferente do que eu conectei?',
        a: 'Os navegadores começam pelo dispositivo de entrada padrão do sistema. Escolha seu microfone no menu Microfone da ferramenta ou mude a entrada padrão nas configurações de som do sistema.',
      },
      {
        q: 'O teste funciona no celular?',
        a: 'Sim. Funciona no Safari do iPhone e do iPad e no Chrome do Android. Os passos são os mesmos: toque no botão, permita o acesso ao microfone e fale.',
      },
    ],
  },

  'mic-test-with-playback': {
    slug: 'teste-de-microfone-com-gravacao',
    nav: 'Teste de microfone com gravação',
    blurb: 'Grave 5 segundos e ouça de volta para saber como você realmente soa.',
    title: 'Teste de microfone com gravação: grave e ouça a si mesmo',
    description:
      'Grave um trecho de 5 segundos e reproduza para ouvir exatamente como seu microfone soa. Teste de microfone com reprodução, grátis, direto no navegador.',
    h1: 'Teste de microfone com gravação',
    lede: 'Grave um trecho curto e ouça de volta. É a forma mais honesta de descobrir como você soa para os outros.',
    introTitle: 'Ouça o que todo mundo ouve',
    intro: [
      'Um medidor de nível se mexendo prova que o microfone funciona. Ele não diz se você soa claro, abafado, distante ou com chiado. A reprodução diz. Grave cinco segundos de fala normal, ouça com fones ou alto-falantes e você saberá de uma vez se a sua configuração está pronta.',
      'A gravação é feita e guardada apenas na memória do seu navegador. Ela não é enviada e some quando você fecha ou recarrega a página.',
    ],
    stepsTitle: 'Como gravar e ouvir seu microfone',
    steps: [
      {
        title: 'Inicie o teste',
        body: 'Toque em “Testar meu microfone” e permita o acesso ao microfone. Confira se o medidor se mexe quando você fala.',
      },
      {
        title: 'Toque em “Gravar 5 segundos”',
        body: 'Um anel faz a contagem regressiva enquanto você fala. Use sua voz normal e sua distância habitual do microfone, como numa chamada de verdade.',
      },
      {
        title: 'Diga algo útil',
        body: 'Experimente: “Testando, um, dois, três. O rato roeu a roupa do rei de Roma. Três pratos de trigo para três tigres tristes.” Os sons de R, S e T revelam rápido estalos e aspereza.',
      },
      {
        title: 'Toque em reproduzir e ouça',
        body: 'Ouça uma vez pelo volume e outra pela qualidade. Com fones, os problemas são muito mais fáceis de ouvir do que nos alto-falantes do notebook.',
      },
      {
        title: 'Ajuste e grave de novo',
        body: 'Mude uma coisa de cada vez, como a distância, o volume de entrada ou outro microfone, e grave de novo para comparar.',
      },
    ],
    guide: [
      {
        heading: 'O que ouvir na sua gravação',
        body: [
          '- Volume: você deve ser ouvido com facilidade sem aumentar os alto-falantes. Se estiver fraco, chegue mais perto ou aumente o volume de entrada.',
          '- Distorção: estalos ou uma borda áspera e embaçada em palavras fortes indicam sinal alto demais. Diminua o volume de entrada ou afaste-se.',
          '- Eco da sala: um som oco, de banheiro, vem de paredes duras e da distância. Chegar mais perto do microfone ajuda mais do que qualquer outra coisa.',
          '- Estouros: pancadas em sons de P e B são rajadas de ar atingindo o microfone. Incline o microfone levemente para o lado da boca.',
          '- Ruído de fundo: um chiado, zumbido ou barulho de ventilador sob a voz. Afaste-se da fonte ou deixe a supressão de ruído ligada.',
          '- Cortes: palavras que falham ou somem costumam indicar conexão Bluetooth fraca ou supressão de ruído agressiva demais.',
        ],
      },
      {
        heading: 'Por que você soa diferente numa gravação',
        body: [
          'Quase todo mundo se surpreende com a própria voz gravada. Quando você fala, se ouve em parte pelos ossos do crânio, que acrescentam frequências graves que o microfone nunca capta. A gravação é mais próxima do que os outros ouvem, então avalie pela clareza e pelo volume, não por ser igual à voz que você tem na cabeça.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Por quanto tempo posso gravar?',
        a: 'Cada gravação tem 5 segundos, o suficiente para avaliar volume e clareza. Você pode gravar de novo quantas vezes quiser. Cada nova gravação substitui a anterior.',
      },
      {
        q: 'Onde minha gravação fica salva?',
        a: 'Em lugar nenhum de forma permanente. O trecho fica na memória do navegador para reprodução e nunca é enviado. Fechar ou recarregar a aba o apaga.',
      },
      {
        q: 'Por que não ouço nada quando toco em reproduzir?',
        a: 'Confira se os alto-falantes ou fones não estão no mudo e se o medidor se mexeu durante a gravação. Se ficou parado, o microfone não estava captando você. No iPhone, aumente também o volume de mídia com os botões laterais.',
      },
      {
        q: 'Por que minha gravação soa baixa ou abafada?',
        a: 'Geralmente o microfone está longe demais, o volume de entrada está baixo ou outro microfone está ativo, como o embutido do notebook em vez do headset. Veja primeiro o nome do dispositivo no painel “Seu microfone”.',
      },
      {
        q: 'Minha gravação vai soar igual no Zoom ou no Discord?',
        a: 'Parecido, mas não idêntico. Cada aplicativo aplica a própria supressão de ruído e compressão. Uma gravação limpa aqui é um bom sinal de que você soará bem lá também.',
      },
    ],
  },

  'hear-yourself-mic-test': {
    slug: 'teste-de-microfone-se-ouvir',
    nav: 'Teste de microfone: se ouvir',
    blurb: 'Ouça seu próprio microfone ao vivo pelo fone de ouvido.',
    title: 'Teste de microfone para se ouvir: escute seu mic ao vivo',
    description:
      'Ouça seu microfone em tempo real. Ligue o monitoramento ao vivo para checar seu som, seu headset e seus níveis enquanto fala. Grátis e privado.',
    h1: 'Teste de microfone: se ouvir',
    lede: 'Ligue “Ouça a si mesmo ao vivo” para escutar o microfone em tempo real. Coloque os fones antes.',
    introTitle: 'Monitoramento ao vivo, direto no navegador',
    intro: [
      'Às vezes você não quer uma gravação. Quer ouvir o microfone enquanto fala, para mexer nele, ajustar o volume e notar problemas no momento em que acontecem. A chave “Ouça a si mesmo ao vivo” envia seu microfone direto para os fones enquanto o teste está rodando.',
      'Ela vem desligada por um bom motivo. Se o microfone ouve os seus alto-falantes, o som entra em ciclo e vira um apito alto. Com fones, esse ciclo não consegue se formar.',
    ],
    stepsTitle: 'Como se ouvir pelo microfone',
    steps: [
      {
        title: 'Coloque os fones de ouvido',
        body: 'Fones com fio funcionam melhor. Eles têm o menor atraso e impedem que os alto-falantes voltem para o microfone.',
      },
      {
        title: 'Inicie o teste',
        body: 'Toque em “Testar meu microfone” e permita o acesso ao microfone. Confirme que o medidor de nível responde à sua voz.',
      },
      {
        title: 'Ligue “Ouça a si mesmo ao vivo”',
        body: 'Acione a chave. Você deve ouvir sua própria voz nos fones imediatamente. Comece com o volume baixo e vá aumentando.',
      },
      {
        title: 'Ouça enquanto ajusta',
        body: 'Aproxime e afaste o microfone, bata na mesa, amasse um papel. Você ouvirá exatamente o que o microfone capta conforme muda as coisas.',
      },
      {
        title: 'Desligue quando terminar',
        body: 'Volte a chave ou toque em Parar. O monitoramento também termina assim que você sai da página.',
      },
    ],
    guide: [
      {
        heading: 'Por que há um pequeno atraso',
        body: [
          'Sua voz precisa sair do microfone, passar pelo sistema de áudio do computador, pelo navegador e voltar para os fones. Essa viagem leva tempo, normalmente alguns centésimos de segundo numa configuração com fio. Você percebe como uma leve duplicação da própria voz.',
          'Fones Bluetooth acrescentam bem mais, muitas vezes um quinto de segundo ou mais, porque o áudio é comprimido e enviado pelo ar nos dois sentidos. Isso é normal e não é defeito do seu microfone. Para um monitoramento mais imediato, use fones com fio.',
          'A linha “Latência estimada” no painel mostra o atraso que o navegador informa. Trate como um número aproximado. Nem todo navegador informa cada parte da cadeia.',
        ],
      },
      {
        heading: 'Monitoramento ao vivo ou gravação: qual usar',
        body: [
          'Use o monitoramento ao vivo para posicionar um microfone, ajustar seu nível ou procurar zumbido e ruído de fundo enquanto mexe nas coisas. Use a gravação de 5 segundos quando quiser avaliar como você realmente soa, porque é difícil ouvir com senso crítico enquanto se fala.',
          'Se quiser ouvir seu microfone nos fones o tempo todo, inclusive em jogos e chamadas, isso é uma configuração do sistema ou do headset, geralmente chamada de “sidetone” ou monitoramento do microfone.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Por que devo usar fones de ouvido neste teste?',
        a: 'Sem eles, o microfone capta o próprio som dos alto-falantes, que é amplificado e captado de novo. Esse ciclo vira um uivo alto em um ou dois segundos. Os fones mantêm o som fora do microfone.',
      },
      {
        q: 'Liguei “Ouça a si mesmo ao vivo”, mas não ouço nada. O que houve?',
        a: 'Confira se o medidor de nível está se mexendo, se o volume do fone está alto e se o som está indo para a saída que você está usando. No iPhone, o botão de silenciar pode mudar o monitoramento ao vivo: coloque em modo toque e aumente o volume.',
      },
      {
        q: 'Por que ouço um eco da minha própria voz?',
        a: 'É o atraso do monitoramento. Sua voz chega primeiro direto aos ouvidos e, um instante depois, pelos fones. Fones com fio mantêm a diferença pequena. Com Bluetooth, ela fica bem mais evidente.',
      },
      {
        q: 'O atraso que ouço é o mesmo que as pessoas ouvem nas chamadas?',
        a: 'Não. O atraso de uma chamada depende da conexão de internet entre você e a outra pessoa. O que você ouve aqui é apenas o ciclo local dentro do seu dispositivo.',
      },
      {
        q: 'Posso continuar me ouvindo depois de fechar esta página?',
        a: 'Não. O monitoramento para quando você encerra o teste ou sai da página. Para ouvir o microfone o tempo todo, use o recurso de monitoramento do sistema operacional ou do headset.',
      },
    ],
  },

  'webcam-and-mic-test': {
    slug: 'teste-de-webcam-e-microfone',
    nav: 'Teste de webcam e microfone',
    blurb: 'Verifique câmera e microfone juntos antes de uma chamada de vídeo.',
    title: 'Teste de webcam e microfone: verifique câmera e áudio online',
    description:
      'Teste sua webcam e seu microfone juntos. Veja a prévia da câmera ao vivo ao lado do nível do microfone, grave um teste de som e prepare-se para a chamada de vídeo.',
    h1: 'Teste de webcam e microfone',
    lede: 'Veja sua câmera e confira o microfone ao mesmo tempo, para estar pronto antes de a chamada começar.',
    introTitle: 'Uma verificação para câmera e microfone',
    intro: [
      'Entrar numa chamada de vídeo e descobrir que a câmera está preta ou que o microfone está mudo é estressante, e dá para evitar. Esta página abre a webcam e o microfone juntos, mostra uma prévia ao vivo ao lado do nível de áudio e deixa você gravar um teste de som rápido.',
      'A prévia é espelhada, como a maioria dos aplicativos de reunião mostra você para si mesmo. As outras pessoas na chamada veem você do lado certo. O vídeo aparece só na sua tela. Não é gravado, enviado nem guardado.',
    ],
    stepsTitle: 'Como testar webcam e microfone juntos',
    steps: [
      {
        title: 'Toque em “Testar minha câmera e microfone”',
        body: 'Seu navegador pede acesso à câmera e ao microfone. Permita os dois. Alguns navegadores mostram um único aviso, outros perguntam duas vezes.',
      },
      {
        title: 'Confira sua imagem',
        body: 'Olhe a prévia para ver enquadramento, foco e luz. Seus olhos devem ficar a cerca de um terço da altura do quadro, com luz no rosto e não atrás de você.',
      },
      {
        title: 'Confira seu som',
        body: 'Fale normalmente e observe o medidor de nível ao lado do vídeo. Depois grave 5 segundos e ouça de volta para saber como você soa.',
      },
      {
        title: 'Troque de dispositivo se precisar',
        body: 'Se tiver mais de uma câmera ou microfone, aparecem menus para escolher os que você pretende usar na chamada.',
      },
    ],
    guide: [
      {
        heading: 'Fique melhor na câmera em um minuto',
        body: [
          '- Fique de frente para a luz. Uma janela ou abajur à sua frente vale mais do que qualquer câmera nova. Uma janela clara atrás de você transforma você em silhueta.',
          '- Suba a câmera até a altura dos olhos. Um notebook sobre uma pilha de livros basta. Olhar de cima para baixo na câmera raramente favorece.',
          '- Limpe a lente. Uma digital na câmera do notebook ou do celular deixa toda a imagem embaçada.',
          '- Veja o que há atrás de você. A prévia mostra exatamente o que todos os outros verão.',
        ],
      },
      {
        heading: 'Se a prévia da câmera continuar preta',
        body: [
          'Primeiro procure uma proteção física. Muitos notebooks têm uma tampa deslizante sobre a lente ou uma tecla de câmera no teclado, e uma webcam externa pode ter uma tampinha.',
          'Depois feche outros aplicativos que possam estar usando a câmera, como Zoom, Teams, FaceTime ou um app de câmera. No Windows em particular, só um aplicativo por vez pode usar a webcam.',
          'Por fim, confira as permissões. O navegador precisa de acesso à câmera para este site, e o sistema operacional precisa permitir que o navegador use a câmera. Se a parte do microfone funciona e a câmera não, as permissões costumam ser o motivo.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Meu vídeo é gravado ou enviado?',
        a: 'Não. A prévia da câmera é desenhada na sua própria tela e não vai para nenhum outro lugar. Nada é gravado, salvo ou enviado a um servidor. A câmera desliga quando você toca em Parar ou sai da página.',
      },
      {
        q: 'Por que a prévia da minha câmera está invertida?',
        a: 'A prévia é espelhada para que mover-se para a esquerda pareça um movimento para a esquerda, o que é natural. Os aplicativos de reunião fazem o mesmo. As pessoas do outro lado da chamada veem você sem espelhamento.',
      },
      {
        q: 'Meu microfone funciona, mas a câmera não. O que verifico?',
        a: 'Procure uma tampa na lente ou uma tecla que desliga a câmera, feche outros aplicativos que possam estar usando-a e confirme que o navegador e o sistema operacional permitem o acesso à câmera. O teste de microfone continua funcionando mesmo quando a câmera não consegue iniciar.',
      },
      {
        q: 'Posso testar uma webcam externa?',
        a: 'Sim. Conecte-a, inicie o teste e escolha-a no menu Câmera. Muitas webcams também têm microfone próprio, que aparecerá no menu Microfone.',
      },
      {
        q: 'Qual resolução o teste usa?',
        a: 'O teste pede à câmera uma imagem em 720p e mostra, no painel abaixo da ferramenta, a resolução que o navegador realmente recebeu. O aplicativo de reunião pode usar outra resolução, dependendo da conexão.',
      },
      {
        q: 'Funciona em celulares e tablets?',
        a: 'Sim. No celular, o teste usa a câmera frontal e o microfone embutido, ou o do seu headset, se houver um conectado.',
      },
    ],
  },
};
