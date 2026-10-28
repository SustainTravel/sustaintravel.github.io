// Português europeu (pt-PT, AO90). Mesma estrutura que en.ts — o teste de paridade garante-o.
import type { Dictionary } from "./en";

export const pt: Dictionary = {
  common: {
    brand: "Sustain",
    meta: {
      title: "Sustain — Turismo lento e rural em Portugal",
      description:
        "Viagens lentas de vários dias pelo Portugal rural: plantação de árvores, caminhadas, bicicleta, ioga e comida da terra. Só transfers elétricos, e os lugares famosos só fora de época.",
    },
    skipToContent: "Saltar para o conteúdo",
    openMenu: "Abrir menu",
    newTab: "(abre num novo separador)",
    closeMenu: "Fechar menu",
    language: "Idioma",
    bookTrip: "Reservar",
    backToTours: "Todas as viagens",
    days: "{n} dias",
    priceFrom: "desde {price}",
    perPerson: "por pessoa",
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
        body: "Aldeias de xisto na Serra da Lousã, lugarejos de granito na Peneda-Gerês, herdades de sobreiros no Alentejo — os sítios por onde a maioria dos visitantes passa sem parar.",
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
    lead: "Grupos pequenos, muitas estações. Eis aquilo por que trabalhamos.",
    stats: {
      trees: { value: "18\u00a0400", label: "árvores autóctones plantadas" },
      km: { value: "96\u00a0000", label: "quilómetros de bicicleta em vez de carro" },
      producers: { value: "64", label: "agricultores e produtores locais parceiros" },
      ev: { value: "100%", label: "das deslocações em veículos elétricos" },
    },
    note: "As nossas metas para as primeiras cinco temporadas, revistas todas as primaveras.",
  },

  about: {
    eyebrow: "Sobre nós",
    title: "Nascemos num programa Erasmus+",
    story: [
      "A Sustain nasceu em 2026, quando nós os sete nos conhecemos em Portugal, num BIP (Blended Intensive Programme) do Erasmus+. Vínhamos de países e cursos diferentes e voltávamos sempre à mesma pergunta: porque é que o turismo tantas vezes tira mais a um lugar do que lhe devolve?",
      "A nossa resposta é uma empresa de viagens assente numa economia sustentável e circular. Grupos pequenos e estadias mais longas. Transfers elétricos e bicicletas em vez de autocarros de turismo. Refeições compradas aos agricultores e às famílias que as produzem, e dinheiro que fica nas aldeias que o recebem. O que uma viagem gasta, deve ajudar a devolver — a começar pelas árvores que plantamos.",
      "Somos pequenos e queremos continuar assim. Cada viagem é desenhada em conjunto com quem vive ao longo do seu percurso.",
    ],
    photoAlt: "Os sete membros da equipa da Sustain à porta de um edifício universitário em Portugal",
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
      newsletter: "Quero também receber a carta da estação — no máximo quatro por ano.",
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
    lead: "Todas as viagens duram pelo menos uma semana, deslocam-se em veículos elétricos e muitas vezes de bicicleta, e as refeições vêm de produtores locais. Escolha o ritmo que lhe convém.",
    featured: {
      eyebrow: "Viagens em destaque",
      title: "Por onde começar",
      viewAll: "Ver todas as viagens",
    },
    listTitle: "Todas as viagens",
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
    countOne: "1 viagem",
    empty: "Ainda não há viagens com este filtro.",
    showAll: "Ver todas as viagens",
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
      label: "Dados da viagem",
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
    food: "À mesa",
    included: "Incluído",
    notIncluded: "Não incluído",
    impact: "O seu impacto",
    transport: {
      title: "Como nos deslocamos",
      ev: "Todas as deslocações são feitas em carros e autocarros elétricos.",
      bike: "Nos dias de bicicleta, segue-se de um sítio para o outro a pedalar — há bicicletas elétricas para as subidas — e a bagagem vai à frente.",
    },
    offSeason: {
      title: "Porquê só de novembro a março?",
      body: "São dos lugares mais visitados do país. Vir no inverno distribui o turismo pelo ano inteiro e alivia quem lá vive — e há dias amenos, luz suave e ruas tranquilas.",
    },
    book: "Reservar esta viagem",
  },

  credits: {
    meta: { title: "Créditos fotográficos — Sustain" },
    title: "Créditos fotográficos",
    lead: "As fotografias deste site mostram os lugares reais por onde passam as nossas viagens. São partilhadas com licenças livres pelos fotógrafos abaixo — obrigado.",
    general: "No resto do site",
    viewSource: "Ver na Wikimedia Commons",
    resized: "Redimensionada a partir do original.",
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
