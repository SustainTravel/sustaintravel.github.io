// Português europeu (pt-PT, AO90). Mesma estrutura que en.ts — o teste de paridade garante-o.
import type { Dictionary } from "./en";

export const pt: Dictionary = {
  common: {
    brand: "Sustain",
    tagline: "Turismo lento e rural em Portugal",
    meta: {
      title: "Sustain — Turismo lento e rural em Portugal",
      description:
        "Viagens lentas de vários dias pelo Portugal rural: plantação de árvores, caminhadas, bicicleta, ioga e comida da terra. Só transfers elétricos, e os lugares famosos só fora de época.",
    },
    skipToContent: "Saltar para o conteúdo",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    language: "Idioma",
    bookTrip: "Reservar",
    exploreTours: "Ver viagens",
    backHome: "Voltar ao início",
    backToTours: "Todas as viagens",
    days: "{n} dias",
    priceFrom: "desde {price}",
    perPerson: "por pessoa",
    perBooking: "por reserva",
    travellerOne: "1 viajante",
    travellerMany: "{n} viajantes",
    continue: "Continuar",
    back: "Voltar",
    optional: "opcional",
    loading: "A carregar…",
  },

  nav: {
    label: "Navegação principal",
    tours: "Viagens",
    values: "Valores",
    about: "Sobre nós",
    faq: "Perguntas",
    contact: "Contacto",
  },

  hero: {
    eyebrow: "Viagens lentas pelo Portugal rural",
    title: "Portugal, ao ritmo de quem caminha",
    lead: "Uma semana ou mais por aldeias de xisto, montados de sobro e costas sossegadas de inverno. Plante árvores, pedale por antigas linhas de comboio, prove o que os vizinhos cultivam — e chegue a todo o lado de bicicleta ou de carro elétrico.",
    cta: "Ver viagens",
    secondaryCta: "Como funciona",
    imageAlt: "Um sobreiro solitário num prado verde do Alentejo",
  },

  different: {
    eyebrow: "Porquê a Sustain",
    title: "Menos sítios. Mais tempo em cada um.",
    lead: "Desenhamos viagens para quem prefere conhecer bem um vale a riscar dez cidades de uma lista.",
    points: [
      {
        title: "Recantos escondidos",
        body: "Aldeias de xisto na Serra da Lousã, lugarejos de granito no Peneda-Gerês, herdades de sobreiros no Alentejo — os sítios por onde a maioria dos visitantes passa sem parar.",
      },
      {
        title: "Os clássicos, fora de época",
        body: "Sintra, Lisboa e o Algarve só entre novembro e março, quando as multidões já foram embora e as terras voltam a ser de quem lá vive.",
      },
      {
        title: "Gente da terra",
        body: "Os nossos guias, cozinheiros e anfitriões são vizinhos, não prestadores de serviços. Vai cozer broa com uma família no Minho e partilhar uma cataplana com pescadores na Costa Vicentina.",
      },
    ],
  },

  values: {
    eyebrow: "Aquilo em que acreditamos",
    title: "Seis compromissos, em todas as viagens",
    lead: "Não é uma página de sustentabilidade escondida no rodapé — é o que molda cada itinerário que escrevemos.",
    items: {
      ev: {
        title: "Só transfers elétricos",
        body: "Todas as deslocações são feitas em carro elétrico ou em autocarro elétrico. Sem carrinhas a gasóleo, sem voos domésticos, sem exceções.",
      },
      bikes: {
        title: "Bicicleta sempre que possível",
        body: "Se a próxima aldeia fica perto o suficiente, vamos de bicicleta. Há bicicletas elétricas para as subidas, para que ninguém fique cá em baixo.",
      },
      local: {
        title: "Comer o que é da terra",
        body: "As refeições vêm de agricultores, pastores, padeiros e cozinhas de família ali ao lado: chanfana, caldo verde, migas, cataplana — feitas como as avós mandam.",
      },
      offseason: {
        title: "Lugares famosos, fora de época",
        body: "Só visitamos os destinos mais conhecidos do país entre novembro e março. Alivia a pressão do turismo de massas — e a luz de inverno é mais bonita.",
      },
      smallGroups: {
        title: "Grupos pequenos, alojamento local",
        body: "Nunca mais de 12 viajantes. Dormimos em casas de família, casas de xisto recuperadas e quintas — nunca em cadeias de hotéis.",
      },
      givingBack: {
        title: "Retribuir",
        body: "Cada viagem financia árvores autóctones — sobreiros, castanheiros, medronheiros — em encostas marcadas pelos incêndios. Em algumas, é o viajante quem as planta.",
      },
    },
  },

  how: {
    eyebrow: "Como funciona",
    title: "Três passos, e o resto fica connosco",
    steps: [
      {
        title: "Escolha uma viagem lenta",
        body: "Entre sete e catorze dias, cada uma com uma região e um ritmo: plantar, caminhar, pedalar, ioga ou um clássico tranquilo de inverno.",
      },
      {
        title: "Reserve as datas",
        body: "Escolha uma partida, diga-nos quem vem e o que gosta de comer. Os grupos são pequenos e as datas esgotam — e ainda bem.",
      },
      {
        title: "Nós tratamos do resto",
        body: "Transfers elétricos, bicicletas, casas de família e refeições de produtores locais. É só chegar, pousar a mala e abrandar.",
      },
    ],
  },

  impact: {
    eyebrow: "O impacto em números",
    title: "Aquilo que o turismo lento já somou",
    lead: "Grupos pequenos, muitas estações. Eis o que os nossos viajantes já fizeram.",
    stats: {
      trees: { value: "18 400", label: "árvores autóctones plantadas" },
      km: { value: "96 000", label: "quilómetros de bicicleta em vez de carro" },
      producers: { value: "64", label: "agricultores e produtores locais parceiros" },
      ev: { value: "100%", label: "das deslocações em veículos elétricos" },
    },
    note: "Números desde a nossa primeira temporada, em 2019, atualizados todas as primaveras.",
  },

  about: {
    eyebrow: "Sobre nós",
    title: "Uma equipa pequena, do interior do país",
    story: [
      "A Sustain nasceu em 2019, à mesa da cozinha de uma aldeia de xisto na Serra da Lousã, dois anos depois dos grandes incêndios. Éramos dois guias, uma cozinheira e um engenheiro florestal, e há anos que víamos a mesma coisa: autocarros a encher Sintra em agosto, enquanto as aldeias a poucas horas dali se iam esvaziando.",
      "Decidimos fazer de outra maneira. Menos gente, estadias mais longas, e o dinheiro gasto onde fica — na família que lhe faz o jantar, no pastor que faz o queijo, na aldeia que o recebe para dormir.",
      "Continuamos pequenos, e queremos continuar assim. Cada viagem que vendemos é uma que já percorremos a pé, de bicicleta e à mesa.",
    ],
    photoAlt: "A equipa da Sustain",
    photoComingSoon: "Fotografia da equipa em breve",
  },

  testimonials: {
    eyebrow: "Dizem os nossos viajantes",
    title: "Nas palavras deles",
    items: [
      {
        quote: "Vim pela plantação de árvores e fiquei pelos jantares. Ao quarto dia já não olhava para o telemóvel. Ao sexto, o cão da aldeia acompanhava-me até ao terreno.",
        name: "Hannah Whitfield",
        from: "Bristol, Reino Unido",
        tour: "Replantar a Serra",
      },
      {
        quote: "Pedalámos pela antiga linha de comboio de aldeia em aldeia e nunca entrámos num carro a combustão. Os miúdos ainda falam do queijo.",
        name: "Joost van Dam",
        from: "Utreque, Países Baixos",
        tour: "Ecopista do Dão de Bicicleta",
      },
      {
        quote: "Vivo em Portugal desde sempre e nunca tinha visto Sintra assim — nevoeiro nos jardins, lareira acesa na casa de hóspedes e os palácios quase só para nós.",
        name: "Marta Oliveira",
        from: "Porto, Portugal",
        tour: "Sintra e Lisboa, com Calma",
      },
    ],
  },

  faq: {
    eyebrow: "Perguntas",
    title: "Boas perguntas, respostas francas",
    items: [
      {
        q: "O que é o turismo lento?",
        a: "É ficar mais tempo em menos sítios e viajar entre eles com calma — a pé, de bicicleta ou de carro elétrico. Há tempo para conhecer um vale, a sua comida e a sua gente, em vez de colecionar paisagens pela janela de um autocarro. Todos os dias têm um plano, mas nunca pressa: muitas tardes são livres e ninguém conta quilómetros.",
      },
      {
        q: "Porque visitam os lugares famosos só fora de época?",
        a: "Sintra, Lisboa e o Algarve são maravilhosos — e no verão estão sobrelotados. Ir entre novembro e março distribui o rendimento do turismo ao longo do ano, alivia a pressão sobre a habitação e a água, e oferece palácios sossegados, praias vazias e gente com tempo para conversar.",
      },
      {
        q: "Como funcionam as deslocações?",
        a: "Todas as deslocações são feitas em carro elétrico ou num pequeno autocarro elétrico, com um motorista da região. Em muitos dias nem é preciso: segue a pé ou de bicicleta de um alojamento para o outro, e a bagagem vai à frente. Também ajudamos a planear a chegada a Portugal de comboio.",
      },
      {
        q: "Têm em conta restrições alimentares?",
        a: "Sim. Vegetariano, vegano, sem glúten, sem lactose ou alergias — basta indicar na reserva. Os nossos cozinheiros estão habituados a adaptar receitas tradicionais, e numa mesa portuguesa há sempre muito mais do que carne.",
      },
      {
        q: "E se precisar de cancelar?",
        a: "Até 60 dias antes da partida, devolvemos tudo, menos uma taxa administrativa de 100 €. Entre 59 e 30 dias, devolvemos metade; depois disso já não é possível reembolsar, mas pode passar o lugar a outra pessoa sem custos. Se formos nós a cancelar, devolvemos o valor total.",
      },
    ],
  },

  contact: {
    eyebrow: "Diga olá",
    title: "Escreva-nos, ou receba a carta da estação",
    lead: "Uma dúvida sobre uma viagem, um grupo ou uma restrição alimentar? Mande-nos uma mensagem. Respondemos a todas pessoalmente, normalmente em dois dias úteis.",
    fields: {
      name: "Nome",
      email: "Email",
      message: "Mensagem",
      newsletter: "Quero também receber a carta da estação — quatro por ano, nunca mais.",
    },
    submit: "Enviar mensagem",
    successTitle: "Obrigado!",
    success: "A sua mensagem chegou até nós. Respondemos em dois dias úteis.",
    errors: {
      required: "Preencha este campo.",
      email: "Introduza um endereço de email válido.",
    },
  },

  footer: {
    mission:
      "Viagens lentas pelo Portugal rural — a pé, de bicicleta e em veículos elétricos, com comida da terra na mesa e árvores plantadas pelo caminho.",
    exploreTitle: "Explorar",
    contactTitle: "Contacto",
    followTitle: "Siga-nos",
    email: "ola@sustain.pt",
    location: "Lousã, Portugal",
    credits: "Créditos fotográficos",
    copyright: "© {year} Sustain. Feito devagar, em Portugal.",
  },

  tours: {
    meta: {
      title: "Viagens lentas em Portugal — Sustain",
      description:
        "Sete viagens lentas, em grupos pequenos, pelo Portugal rural: plantação de árvores, caminhadas, bicicleta, ioga e clássicos fora de época.",
    },
    eyebrow: "As nossas viagens",
    title: "Sete maneiras lentas de percorrer Portugal",
    lead: "Todas as viagens duram pelo menos uma semana, deslocam-se em veículos elétricos e muitas vezes de bicicleta, e comem com produtores locais. Escolha o ritmo que lhe convém.",
    featured: {
      eyebrow: "Viagens em destaque",
      title: "Por onde começar",
      viewAll: "Ver todas as viagens",
    },
    filterLabel: "Filtrar por experiência",
    filterAll: "Todas",
    types: {
      planting: "Plantação de árvores",
      hiking: "Caminhadas",
      biking: "Bicicleta",
      yoga: "Ioga",
      offseason: "Clássicos fora de época",
    },
    count: "{n} viagens",
    empty: "Ainda não há viagens com este filtro.",
    showAll: "Ver todas as viagens",
    viewTour: "Ver a viagem",
  },

  tour: {
    badges: {
      ev: "Transfers elétricos",
      bike: "Dias de bicicleta",
      farm: "Da horta à mesa",
      offSeasonOnly: "Só nov.–mar.",
    },
    gallery: {
      label: "Galeria de fotografias",
      previous: "Fotografia anterior",
      next: "Fotografia seguinte",
      photoOf: "Fotografia {n} de {total}",
    },
    facts: {
      duration: "Duração",
      region: "Região",
      groupSize: "Grupo",
      groupSizeValue: "Até {n} viajantes",
      price: "Preço",
    },
    overview: "Em resumo",
    highlights: "Pontos altos",
    itinerary: "Dia a dia",
    itineraryLead: "Um ritmo sem pressa: uma atividade principal por dia, almoços demorados e tardes livres para não fazer nada.",
    day: "Dia {n}",
    showMore: "Ver mais",
    showLess: "Ver menos",
    food: "À mesa",
    included: "Incluído",
    notIncluded: "Não incluído",
    impact: "O seu impacto",
    transport: {
      title: "Como nos deslocamos",
      ev: "Todas as deslocações são feitas em carro ou autocarro elétrico.",
      bike: "Nos dias de bicicleta, segue-se de um sítio para o outro a pedalar — há bicicletas elétricas para as subidas — e a bagagem vai à frente.",
    },
    offSeason: {
      title: "Porquê só de novembro a março?",
      body: "São dos lugares mais visitados do país. Vir no inverno distribui o turismo pelo ano inteiro e alivia quem lá vive — e há dias amenos, luz suave e ruas tranquilas.",
    },
    book: "Reservar esta viagem",
    bookFrom: "Desde {price} por pessoa",
  },

  checkout: {
    meta: { title: "Reservar {tour} — Sustain" },
    demoBanner: "Demonstração — nenhum pagamento é efetuado. Não introduza dados reais de cartão.",
    title: "Reserve a sua viagem",
    progressLabel: "Progresso da reserva",
    stepOf: "Passo {n} de {total}",
    steps: {
      date: "Data",
      travellers: "Viajantes e extras",
      details: "Os seus dados",
      payment: "Pagamento",
      confirmation: "Confirmação",
    },
    date: {
      title: "Escolha a data de partida",
      lead: "As partidas são de quinze em quinze dias, ao sábado. Escolha a que lhe der mais jeito.",
      calendarLabel: "Calendário de partidas",
      previousMonth: "Mês anterior",
      nextMonth: "Mês seguinte",
      available: "Disponível",
      soldOut: "Esgotado",
      spotsLeft: "Restam {n} lugares",
      selected: "Partida a {date}",
      returns: "Regresso a {date}",
      finding: "A procurar partidas…",
      chooseFirst: "Escolha uma data para continuar.",
      offSeasonNote:
        "Esta viagem só se realiza entre novembro e março. Visitar lugares famosos fora da época alta mantém-nos habitáveis para quem lá vive — e vai tê-los quase só para si.",
    },
    travellers: {
      title: "Quem vem?",
      label: "Viajantes",
      decrease: "Retirar um viajante",
      increase: "Adicionar um viajante",
      max: "Até {n} viajantes nesta partida.",
      extrasTitle: "Um pequeno extra",
      extras: {
        ebike: {
          name: "Aluguer de bicicleta elétrica",
          description: "Uma bicicleta com assistência para cada dia de pedalada — as subidas parecem planas.",
        },
        picnic: {
          name: "Cesto de piquenique do mercado",
          description: "Pão, queijo, fruta e enchidos escolhidos num mercado local, prontos para um almoço demorado ao ar livre.",
        },
        trees: {
          name: "Plantar mais 10 árvores",
          description: "Mais dez árvores autóctones, plantadas e cuidadas pelos nossos parceiros de reflorestação na Serra da Lousã.",
        },
      },
    },
    details: {
      title: "Viajante principal",
      lead: "Usamos estes dados apenas para a sua reserva.",
      fields: {
        name: "Nome completo",
        email: "Email",
        phone: "Telemóvel",
        country: "País de residência",
        diet: "Restrições alimentares",
      },
      dietPlaceholder: "Vegetariano, sem glúten, alergias…",
    },
    payment: {
      title: "Pagamento",
      methodLabel: "Método de pagamento",
      card: "Cartão",
      mbway: "MB WAY",
      cardNumber: "Número do cartão",
      expiry: "Validade (MM/AA)",
      cvc: "CVC",
      holder: "Nome no cartão",
      testCard: "Cartão de teste: 4242 4242 4242 4242",
      mbwayPhone: "Número de telemóvel MB WAY",
      mbwayHint: "Normalmente, confirmaria o pagamento na aplicação MB WAY do seu telemóvel. Nesta demonstração, nada é enviado.",
      pay: "Pagar {total}",
      processing: "A processar o pagamento…",
      secureNote: "Nada do que escreve aqui sai desta página.",
    },
    errors: {
      summary: "Verifique os campos assinalados.",
      required: "Preencha este campo.",
      email: "Introduza um endereço de email válido.",
      phone: "Introduza um número de telefone válido.",
      cardNumber: "Verifique o número do cartão.",
      expiry: "Introduza uma validade correta (MM/AA).",
      cvc: "Introduza o código de segurança de 3 ou 4 dígitos.",
      mbwayPhone: "Introduza um número de telemóvel português (9 dígitos, a começar por 9).",
    },
    summary: {
      title: "A sua viagem",
      date: "Partida",
      noDate: "Ainda por escolher",
      travellers: "Viajantes",
      base: "Viagem, {n} × {price}",
      total: "Total",
      showDetails: "Ver detalhes",
      hideDetails: "Esconder detalhes",
      includes: "Inclui transfers elétricos, alojamento local e refeições da horta à mesa.",
    },
    confirmation: {
      title: "Vai viajar devagar.",
      lead: "Obrigado, {name}. A sua viagem está reservada.",
      reference: "Referência da reserva",
      nextTitle: "E agora?",
      next: [
        "Vai receber um email de confirmação com os detalhes da reserva.",
        "Cerca de um mês antes da partida, o seu guia envia a lista do que levar e o percurso de cada dia.",
        "Entramos em contacto para confirmar as restrições alimentares e ajudar, se quiser, a planear a viagem de comboio até ao ponto de partida.",
        "No primeiro dia, um transfer elétrico espera por si no ponto de encontro. A partir daí, é com calma.",
      ],
      impactTitle: "O bem que a sua viagem faz",
      impact: "Esta reserva vai pôr {trees} árvores autóctones na terra, plantadas com os nossos parceiros na Serra da Lousã.",
      demoNote: "Isto foi uma demonstração: não foi feita nenhuma reserva nem cobrado nenhum pagamento.",
    },
  },

  credits: {
    meta: { title: "Créditos fotográficos — Sustain" },
    title: "Créditos fotográficos",
    lead: "As fotografias deste site mostram os lugares reais por onde passam as nossas viagens. São partilhadas com licenças livres pelos fotógrafos abaixo — obrigado.",
    general: "No resto do site",
    photo: "Fotografia",
    author: "Autor",
    license: "Licença",
    source: "Fonte",
  },

  notFound: {
    title: "Este caminho não vai dar a lado nenhum",
    body: "A página que procurava perdeu-se pelo caminho. Acontece aos melhores numa viagem lenta.",
    home: "Voltar ao início",
    tours: "Ver viagens",
  },
};
