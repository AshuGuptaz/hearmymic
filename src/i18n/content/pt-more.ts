import type { PageTranslation } from '../../data/types';

/** Português: Zoom, Discord e o guia “microfone não funciona”. */
export const ptMore: Record<string, PageTranslation> = {
  'zoom-mic-test': {
    slug: 'teste-de-microfone-zoom',
    nav: 'Teste de microfone no Zoom',
    blurb: 'Verifique o microfone antes de uma reunião no Zoom e depois alinhe as configurações do Zoom.',
    title: 'Teste de microfone no Zoom: verifique antes da reunião',
    description:
      'Teste seu microfone antes de entrar no Zoom. Confirme aqui que ele funciona e use o Testar microfone e as configurações de áudio do Zoom para ser ouvido com clareza.',
    h1: 'Teste de microfone no Zoom',
    lede: 'Garanta que o microfone funciona antes de a reunião do Zoom começar, sem abrir o Zoom nem entrar numa chamada.',
    introTitle: 'Teste primeiro, depois configure o Zoom',
    intro: [
      'A verificação mais rápida do microfone para o Zoom tem duas partes. Primeiro, confirme aqui que o microfone funciona e anote o nome dele no painel “Seu microfone”. Depois, garanta que o Zoom está usando esse mesmo microfone. A maioria dos problemas de “não me ouvem no Zoom” acontece porque o Zoom escuta um dispositivo diferente daquele em que você está falando.',
      'O Zoom também tem um teste próprio. No aplicativo para computador, abra Configurações, escolha Áudio e toque em Testar microfone. Ele grava alguns segundos e reproduz no alto-falante selecionado.',
    ],
    stepsTitle: 'Como testar o microfone para o Zoom',
    steps: [
      {
        title: 'Faça o teste nesta página',
        body: 'Toque em “Testar meu microfone”, fale e confira se o medidor se mexe. Anote ou memorize o nome do microfone exibido no painel.',
      },
      {
        title: 'Abra as configurações de áudio do Zoom',
        body: 'No aplicativo do Zoom para computador, clique na sua foto de perfil, depois em Configurações e em Áudio. Durante uma reunião, clique na seta ao lado do botão Silenciar e escolha Configurações de áudio.',
      },
      {
        title: 'Selecione o mesmo microfone',
        body: 'Em Microfone, escolha o dispositivo que funcionou aqui. “Igual ao sistema” segue o padrão do computador, que pode mudar quando você conecta um headset.',
      },
      {
        title: 'Use o Testar microfone do Zoom',
        body: 'Toque em Testar microfone, fale e ouça a reprodução. Deixe “Ajustar o volume do microfone automaticamente” ligado, a menos que tenha motivo para definir o nível manualmente.',
      },
      {
        title: 'Entre numa reunião de teste se quiser ter certeza',
        body: 'Acesse zoom.us/test para entrar numa reunião de prática privada. O Zoom guia você por um teste de alto-falante e um de microfone antes que alguém possa ouvi-lo.',
      },
    ],
    faqs: [
      {
        q: 'Meu microfone funciona aqui, mas não no Zoom. Por quê?',
        a: 'Quase certamente o Zoom está usando outro microfone ou não tem permissão. Escolha o dispositivo certo em Configurações, Áudio. No Mac, abra também Ajustes do Sistema, Privacidade e Segurança, Microfone, e confira se o Zoom está ligado. No Windows, veja Configurações, Privacidade e segurança, Microfone.',
      },
      {
        q: 'Por que vejo “Entrar no áudio” em vez de um botão Silenciar no Zoom?',
        a: 'Você entrou na reunião sem conectar o áudio, então ninguém ouve você e você não ouve ninguém. Clique em Entrar no áudio e escolha Entrar com o áudio do computador.',
      },
      {
        q: 'Dizem que eu soo picotado ou robótico no Zoom. É o meu microfone?',
        a: 'Grave um trecho de 5 segundos aqui. Se a reprodução estiver limpa, o microfone está bem e o problema é a sua conexão de internet ou a supressão de ruído do Zoom. Nas configurações de áudio do Zoom, tente definir a supressão de ruído de fundo como Baixa.',
      },
      {
        q: 'Posso usar este teste para o Zoom no navegador?',
        a: 'Sim, e é uma correspondência especialmente próxima. O cliente web do Zoom usa o mesmo acesso ao microfone do navegador que esta página. Lembre-se de que a permissão é concedida por site, então você ainda precisará permitir o microfone para o site do Zoom.',
      },
      {
        q: 'O que é o “Som original” no Zoom?',
        a: 'É uma opção que desliga a maior parte do processamento de áudio do Zoom. Foi pensada para música ou microfones profissionais em salas silenciosas. Em chamadas do dia a dia, deixe desligada para que o Zoom possa remover o eco e o ruído de fundo.',
      },
    ],
  },

  'discord-mic-test': {
    slug: 'teste-de-microfone-discord',
    nav: 'Teste de microfone no Discord',
    blurb: 'Descubra se o problema do microfone está no hardware ou nas configurações do Discord.',
    title: 'Teste de microfone no Discord: mic e configurações de voz',
    description:
      'Teste seu microfone para o Discord. Confirme aqui que ele funciona e corrija o dispositivo de entrada, a sensibilidade de entrada e o apertar para falar do Discord.',
    h1: 'Teste de microfone no Discord',
    lede: 'Seus amigos não ouvem você no chat de voz? Verifique o microfone aqui primeiro e depois corrija a configuração do Discord que está atrapalhando.',
    introTitle: 'É o seu microfone ou é o Discord?',
    intro: [
      'O Discord coloca várias camadas entre o seu microfone e seus amigos: uma configuração de dispositivo de entrada, um limite de sensibilidade de entrada, o apertar para falar opcional e a supressão de ruído. Qualquer uma delas pode silenciar um microfone perfeito. Testar aqui tira o Discord da equação. Se o medidor se mexe nesta página, o hardware está bem e a solução está nas configurações de Voz e vídeo do Discord.',
      'O Discord também tem uma verificação embutida. Abra as Configurações de usuário, vá em Voz e vídeo e toque em Vamos verificar em Teste de microfone. O Discord reproduz a sua voz até você parar.',
    ],
    stepsTitle: 'Como testar o microfone para o Discord',
    steps: [
      {
        title: 'Teste o microfone nesta página',
        body: 'Toque em “Testar meu microfone” e fale. Anote o nome do microfone no painel. Se nada se mexer aqui, o problema não é o Discord.',
      },
      {
        title: 'Defina o dispositivo de entrada do Discord',
        body: 'No Discord, clique na engrenagem ao lado do seu nome de usuário e depois em Voz e vídeo. Defina Dispositivo de entrada como o microfone que funcionou aqui. “Padrão” pode apontar para o errado.',
      },
      {
        title: 'Confira a sensibilidade de entrada',
        body: 'Com Atividade de voz selecionada, ligue a sensibilidade de entrada automática ou arraste o controle para que a sua voz normal fique na parte verde da barra.',
      },
      {
        title: 'Execute o Teste de microfone do Discord',
        body: 'Toque em Vamos verificar e fale. Se você se ouvir, seus amigos também vão ouvir.',
      },
    ],
    faqs: [
      {
        q: 'Meu microfone funciona aqui, mas ninguém me ouve no Discord. O que verificar?',
        a: 'Verifique quatro coisas, em ordem: o Dispositivo de entrada em Voz e vídeo, se você está no mudo ou silenciado pelo servidor (uma barra vermelha sobre o ícone do microfone), se o Apertar para falar está ativo sem tecla definida e se a sensibilidade de entrada está tão alta que a sua voz nunca abre o limite.',
      },
      {
        q: 'Por que o Discord corta o começo ou o fim das minhas palavras?',
        a: 'O limite de sensibilidade de entrada está alto demais, então sílabas baixas não contam como fala. Abaixe o controle ou ligue a sensibilidade automática. Se você usa a supressão de ruído Krisp, tente desligá-la para comparar.',
      },
      {
        q: 'Este teste serve para o Discord no navegador?',
        a: 'Sim. O Discord no navegador usa o mesmo acesso ao microfone desta página. Será preciso permitir o microfone separadamente para o site do Discord, porque os navegadores concedem a permissão site por site.',
      },
      {
        q: 'Por que meu microfone está tão baixo no Discord?',
        a: 'Aumente o Volume de entrada em Voz e vídeo e confira o nível do microfone nas configurações de som do sistema. Veja também se o Controle automático de ganho está ligado nas opções de processamento de voz do Discord. Grave um trecho aqui para confirmar se o próprio microfone é baixo.',
      },
      {
        q: 'Por que meus amigos ouvem meu jogo ou meus alto-falantes pelo microfone?',
        a: 'Seu microfone está captando os alto-falantes. Use fones de ouvido, mantenha o Cancelamento de eco ligado no Discord e confirme que o Dispositivo de entrada não é uma “Mixagem estéreo” ou um dispositivo de loopback, que envia todo o som do computador.',
      },
    ],
  },

  'fix/mic-not-working': {
    slug: 'microfone-nao-funciona',
    nav: 'Microfone não funciona',
    blurb: 'Uma lista passo a passo para um microfone que fica mudo.',
    title: 'Microfone não funciona? Como consertar',
    description:
      'O microfone não funciona? Siga esta lista: botões de mudo, o dispositivo de entrada certo, permissões do navegador e do sistema e aplicativos que ocupam o microfone.',
    h1: 'Microfone não funciona? Veja como consertar',
    lede: 'Faça o teste abaixo e percorra a lista. A maioria dos microfones mudos é resolvida nos três primeiros passos.',
    introTitle: 'Comece descobrindo onde está o problema',
    intro: [
      'Um microfone que “não funciona” geralmente está funcionando bem e sendo barrado em algum ponto do caminho: por um botão de mudo, por um dispositivo errado selecionado, por uma permissão ou por outro aplicativo. O teste acima ajuda a restringir isso rapidamente.',
      'Se o teste não inicia, a mensagem exibida diz se o microfone está bloqueado, ausente ou ocupado. Se o teste inicia, mas o medidor fica parado, o computador enxerga um microfone e recebe silêncio dele, o que aponta para um botão de mudo, uma configuração de volume ou o dispositivo errado.',
    ],
    stepsTitle: 'Conserte um microfone que não funciona',
    steps: [
      {
        title: 'Verifique o mudo físico e a conexão',
        body: 'Procure um botão de mudo no headset, no cabo ou no próprio microfone, e uma tecla de mudo do microfone no teclado do notebook. Desconecte o microfone e conecte de novo com firmeza. Experimente outra porta USB. Um plugue de 3,5 mm precisa ir na entrada de microfone ou de headset, não na entrada só de fone.',
      },
      {
        title: 'Selecione o microfone certo',
        body: 'Inicie o teste e leia o nome do dispositivo no painel “Seu microfone”. Se não for o microfone em que você fala, escolha o correto no menu Microfone ou mude a entrada padrão nas configurações de som do sistema.',
      },
      {
        title: 'Aumente o volume de entrada',
        body: 'No Windows 11, abra Configurações, Sistema, Som e clique no seu microfone em Entrada. No Mac, abra Ajustes do Sistema, Som, Entrada. Confira se o volume de entrada não está em zero.',
      },
      {
        title: 'Confira as permissões no navegador e no sistema',
        body: 'Clique no ícone à esquerda da barra de endereço e defina Microfone como Permitir. Depois, veja se o sistema operacional permite que o navegador use o microfone, na seção Microfone das configurações de privacidade.',
      },
      {
        title: 'Feche outros aplicativos e reinicie',
        body: 'Feche Zoom, Teams, Discord, softwares de gravação e outras abas do navegador que possam estar ocupando o microfone. Se nada mudar, reinicie o navegador e depois o computador. Isso desbloqueia dispositivos de áudio travados mais vezes do que se imagina.',
      },
    ],
    faqs: [
      {
        q: 'O teste diz “Seu microfone está ocupado”. O que significa?',
        a: 'O navegador encontrou o microfone, mas não conseguiu abri-lo, normalmente porque outro programa tem uso exclusivo dele. Feche aplicativos de reunião, chat de voz e softwares de gravação e toque em Tentar de novo. No Windows, reiniciar o computador libera um microfone travado.',
      },
      {
        q: 'O teste diz “Nenhum microfone encontrado”. O que fazer?',
        a: 'O navegador não enxerga nenhum dispositivo de entrada. Reconecte o microfone, tente outra porta ou outro cabo e veja nas configurações de som do sistema se ele aparece lá. Se o sistema também não o lista, o problema é o microfone, o cabo ou a porta.',
      },
      {
        q: 'Como saber se meu microfone está quebrado?',
        a: 'Teste-o em um segundo dispositivo, como outro computador ou um celular. Se falhar em todos, o microfone está com defeito. Se funcionar em outro lugar, o problema está nas configurações, na porta ou nos drivers do primeiro dispositivo.',
      },
      {
        q: 'Meu microfone funciona em um aplicativo, mas não em outro. Por quê?',
        a: 'Cada aplicativo escolhe seu próprio microfone e precisa da própria permissão. Abra as configurações de áudio do aplicativo com problema, selecione o microfone pelo nome e confira se o sistema operacional permite que esse aplicativo o use.',
      },
      {
        q: 'O microfone do meu headset Bluetooth não funciona. Alguma dica?',
        a: 'Confira se ele está conectado como headset e não só como fone de ouvido. Muitos dispositivos mostram duas entradas para um mesmo headset, e só a entrada “viva-voz” ou “headset” inclui o microfone. Desligar e ligar o Bluetooth, ou parear de novo, costuma resolver.',
      },
    ],
  },

  'webcam-test': {
    slug: 'teste-de-webcam',
    nav: 'Teste de webcam',
    blurb: 'Veja sua câmera ao vivo e confira enquadramento, luz e nitidez.',
    title: 'Teste de webcam: verifique sua câmera online (grátis e privado)',
    description:
      'Teste sua webcam online com um clique. Prévia ao vivo, resolução, enquadramento e iluminação, e troca de câmera. Nada é gravado nem enviado.',
    h1: 'Teste de webcam',
    lede: 'Clique no botão para ver o que sua câmera vê. A prévia fica na sua tela e nada é gravado nem enviado.',
    introTitle: 'Confira sua câmera antes que outra pessoa a veja',
    intro: [
      'Este teste de webcam abre sua câmera no navegador e mostra uma prévia ao vivo, para você conferir a imagem antes de uma reunião, de uma transmissão ou de uma entrevista. Funciona com câmeras integradas de notebooks, webcams USB, câmeras de celular e câmeras virtuais.',
      'O teste também mostra um nível de microfone ao lado do vídeo, porque muitos problemas de vídeo são, na verdade, problemas de câmera e de microfone juntos. Se você só quer ver a imagem, pode ignorar o indicador.',
    ],
    stepsTitle: 'Como testar sua webcam online',
    steps: [
      {
        title: 'Clique em «Testar minha câmera e microfone»',
        body: 'Seu navegador pede permissão para usar a câmera. Escolha Permitir. Se também aparecer o pedido do microfone, permita, ou ignore se quiser conferir só a imagem.',
      },
      {
        title: 'Olhe a prévia',
        body: 'Você deve se ver em um ou dois segundos. A prévia é espelhada, como na maioria dos aplicativos de reunião. As outras pessoas veem você do lado certo.',
      },
      {
        title: 'Confira a resolução',
        body: 'O painel abaixo da ferramenta mostra a resolução que seu navegador recebeu. Uma webcam moderna costuma dar 720p ou 1080p. Um valor bem menor pode indicar uma câmera simples ou uma porta USB lenta demais.',
      },
      {
        title: 'Escolha a câmera certa',
        body: 'Se você tem mais de uma câmera, um menu permite trocar. Assim você descobre qual é a webcam externa e qual é a do notebook.',
      },
      {
        title: 'Pare o teste',
        body: 'Clique em Parar ou saia da página. A luz da câmera do seu dispositivo deve apagar na hora.',
      },
    ],
    guide: [
      {
        heading: 'Como é uma boa imagem de webcam',
        body: [
          '- Luz: coloque uma janela ou um abajur na sua frente. Luz atrás de você faz de você uma silhueta, não importa a câmera.',
          '- Altura: a lente deve ficar mais ou menos na altura dos olhos. Eleve o notebook com alguns livros.',
          '- Distância: sente-se a cerca de um braço de distância, com cabeça e ombros no enquadramento.',
          '- Nitidez: limpe a lente com um pano macio. Uma digital é a causa mais comum de imagem embaçada.',
          '- Fundo: a prévia mostra exatamente o que os outros verão atrás de você.',
        ],
      },
      {
        heading: 'Se a imagem continua preta',
        body: [
          'Procure primeiro uma cobertura física. Muitos notebooks têm uma tampa deslizante ou uma tecla para desligar a câmera, e uma webcam externa pode ter uma tampa na lente.',
          'Depois feche tudo que possa estar usando a câmera: Zoom, Teams, FaceTime, OBS ou um aplicativo de câmera. No Windows, só um aplicativo por vez pode usar uma webcam.',
          'Por fim, confira as permissões. Seu navegador precisa de acesso à câmera para este site, e seu sistema operacional precisa permitir que o navegador use a câmera.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Meu teste de webcam é privado?',
        a: 'Sim. O vídeo aparece só na sua tela e não vai para nenhum outro lugar. Nada é gravado, salvo ou enviado a um servidor. A câmera desliga quando você clica em Parar ou sai da página.',
      },
      {
        q: 'Por que minha webcam não funciona no teste?',
        a: 'As causas comuns são uma cobertura ou tecla que desliga a câmera, outro aplicativo já usando a câmera ou permissões bloqueadas. Feche outros aplicativos de câmera, confira as permissões do site no navegador e as configurações de privacidade da câmera do sistema.',
      },
      {
        q: 'Por que a imagem aparece espelhada?',
        a: 'A prévia é invertida como um espelho para que mover-se para a esquerda pareça natural. Em uma chamada de vídeo, os outros veem você do lado certo.',
      },
      {
        q: 'Como testo uma webcam externa?',
        a: 'Conecte-a, inicie o teste e escolha-a no menu Câmera. Se ela não aparecer, tente outra porta USB e confira se nenhum outro aplicativo a está usando.',
      },
      {
        q: 'Posso testar a câmera do meu celular?',
        a: 'Sim. Abra esta página no navegador do celular. Ela usa a câmera frontal e, em geral, você pode trocar para a traseira no menu Câmera.',
      },
      {
        q: 'Qual é a resolução da minha webcam?',
        a: 'O painel abaixo da ferramenta mostra a resolução que seu navegador recebeu. O teste pede 720p, então uma câmera capaz de mais pode mostrar 720p aqui. Os aplicativos de reunião escolhem a própria resolução.',
      },
    ],
  },

  'is-my-mic-working': {
    slug: 'meu-microfone-funciona',
    nav: 'Meu microfone funciona?',
    blurb: 'Uma verificação em um clique para saber se o microfone está ligado e captando você.',
    title: 'Meu microfone funciona? Verifique se está ligado',
    description:
      'Descubra em segundos se seu microfone está ligado e funcionando. Fale e veja o indicador de nível; se nada se mexer, siga as soluções rápidas. Grátis, no navegador.',
    h1: 'Meu microfone funciona?',
    lede: 'Clique no botão e diga algumas palavras. Se o indicador se mexer, seu microfone está ligado e funcionando.',
    introTitle: 'Uma resposta rápida: sim ou não',
    intro: [
      'Clique em «Testar meu microfone», permita o acesso ao microfone e fale. O indicador de nível acompanha sua voz. Se ele se mexer, seu microfone está ligado e seu computador ou celular o ouve. Se ficar parado, a página mostra onde procurar.',
      'Ver o indicador se mexer só prova que seu dispositivo ouve o microfone. Não prova que um aplicativo como Zoom ou Discord está ouvindo o mesmo. As verificações rápidas abaixo cobrem isso também.',
    ],
    stepsTitle: 'Como verificar se seu microfone está ligado',
    steps: [
      {
        title: 'Inicie o teste e fale',
        body: 'Clique em «Testar meu microfone», escolha Permitir quando o navegador pedir e diga uma frase no seu volume normal.',
      },
      {
        title: 'Observe o indicador de nível',
        body: 'O indicador deve subir e descer com sua voz e chegar de meio a alto ao falar. Um indicador parado significa que nenhum som está chegando.',
      },
      {
        title: 'Grave e ouça',
        body: 'Grave 5 segundos e ouça. Se você se ouvir com clareza, seu microfone funciona e capta o que você espera.',
      },
      {
        title: 'Se estiver parado, confira os controles de mudo',
        body: 'Procure um interruptor ou botão de mudo no fone, uma tecla de microfone desligado no notebook e um microfone silenciado nas configurações de som do sistema.',
      },
      {
        title: 'Confira se está usando o microfone certo',
        body: 'Se você tem vários, aparece um menu Microfone. Escolha aquele em que você está realmente falando, como seu fone, e tente de novo.',
      },
    ],
    faqs: [
      {
        q: 'Como sei se meu microfone está ligado?',
        a: 'Inicie o teste e fale. Se o indicador de nível se mexer, o microfone está ligado e seu dispositivo recebe som. Alguns fones têm também uma luz ou um interruptor, mas o indicador é a verificação mais confiável.',
      },
      {
        q: 'O indicador não se mexe. E agora?',
        a: 'Confira o interruptor de mudo do fone e qualquer tecla de microfone do notebook. Depois, verifique se o microfone certo está escolhido no menu e se o navegador e o sistema permitem o acesso ao microfone.',
      },
      {
        q: 'Meu microfone funciona aqui, mas não me ouvem no aplicativo de chamadas.',
        a: 'O aplicativo provavelmente usa outro microfone ou não tem permissão. Abra as configurações de áudio do aplicativo, escolha o microfone que funcionou aqui e confira as configurações de privacidade do microfone do sistema para esse aplicativo.',
      },
      {
        q: 'Por que o navegador pede permissão toda hora?',
        a: 'Os navegadores perguntam uma vez por site e podem lembrar sua escolha se você permitir. Se perguntar sempre, suas configurações de privacidade podem estar apagando as permissões dos sites ao fechar o navegador.',
      },
      {
        q: 'Este teste pode me gravar?',
        a: 'Só para a reprodução de 5 segundos e só no seu próprio dispositivo. Nada é enviado nem guardado em outro lugar, e a gravação some quando você sai da página.',
      },
    ],
  },
};
