// Tour content, EN + PT-PT (AO90). Titles of three tours are quoted in the dictionaries' testimonials, so keep them in sync.
import type { Localized, Tour } from "./types";

const images = (slug: string) => [1, 2, 3, 4].map((n) => `/images/tours/${slug}-${n}.jpg`);

const notIncluded: Localized<string[]> = {
  en: [
    "Travel to and from Portugal",
    "Travel insurance",
    "Drinks outside meals and personal expenses",
    "Optional extras, arranged with us on request",
  ],
  pt: [
    "Viagem de ida e volta para Portugal",
    "Seguro de viagem",
    "Bebidas fora das refeições e despesas pessoais",
    "Extras opcionais, combinados connosco a pedido",
  ],
};

export const tours: Tour[] = [
  {
    slug: "replant-the-serra",
    days: 7,
    priceFrom: 1190,
    maxGroup: 12,
    types: ["planting", "hiking"],
    featured: true,
    allowedMonths: null,
    badges: { ev: true, bike: true, farm: true },
    images: images("replant-the-serra"),
    title: { en: "Replant the Serra", pt: "Replantar a Serra" },
    region: { en: "Serra da Lousã, Central Portugal", pt: "Serra da Lousã, Centro" },
    summary: {
      en: "A week in the schist villages of the Serra da Lousã, planting native oaks, chestnuts and strawberry trees on slopes burned by the 2017 wildfires. Mornings in the field, afternoons free, evenings at long tables of chanfana and mountain honey.",
      pt: "Uma semana nas aldeias de xisto da Serra da Lousã a plantar carvalhos, castanheiros e medronheiros nas encostas que arderam nos incêndios de 2017. Manhãs no terreno, tardes livres e noites à mesa com chanfana e mel da serra.",
    },
    highlights: {
      en: [
        "Plant around 30 native trees over two mornings with a local forester",
        "Stay in a restored schist house in Talasnal",
        "Cycle down the mountain to the planting sites",
        "Lunch with a beekeeper who makes Serra da Lousã honey",
      ],
      pt: [
        "Plante cerca de 30 árvores autóctones em duas manhãs, com um técnico florestal da região",
        "Fique numa casa de xisto recuperada no Talasnal",
        "Desça a serra de bicicleta até aos terrenos de plantação",
        "Almoce com um apicultor que produz mel da Serra da Lousã",
      ],
    },
    food: {
      en: [
        "Chanfana: goat slow-cooked in red wine in a black clay pot",
        "Serra da Lousã DOP honey, straight from the hive",
        "Broa de milho and fresh goat’s cheese at field picnics",
        "Medronho, the strawberry-tree brandy, by the fire",
      ],
      pt: [
        "Chanfana: cabra cozinhada lentamente em vinho tinto, em caçoila de barro preto",
        "Mel da Serra da Lousã DOP, acabado de sair da colmeia",
        "Broa de milho e queijo fresco de cabra nos piqueniques do terreno",
        "Aguardente de medronho à lareira",
      ],
    },
    included: {
      en: [
        "6 nights in a family-run guesthouse in a schist village",
        "Full board, with local wine at dinner",
        "Electric transfers to and from Coimbra-B station",
        "Bikes, helmets, planting tools and gloves",
        "A local guide throughout, and a forester on planting days",
      ],
      pt: [
        "6 noites numa casa de turismo rural familiar, numa aldeia de xisto",
        "Pensão completa, com vinho da região ao jantar",
        "Transfers elétricos de e para a estação de Coimbra-B",
        "Bicicletas, capacetes, ferramentas e luvas de plantação",
        "Guia local durante toda a viagem e técnico florestal nos dias de plantação",
      ],
    },
    notIncluded,
    impact: {
      en: "Each guest plants around 30 native trees on land burned in 2017. Our partners, a local forest owners’ association, water and tend them for the first three summers, when most young trees are lost.",
      pt: "Cada viajante planta cerca de 30 árvores autóctones em terrenos que arderam em 2017. Os nossos parceiros, uma associação local de proprietários florestais, regam-nas e cuidam delas durante os três primeiros verões, quando se perde a maioria das árvores jovens.",
    },
    itinerary: [
      {
        title: { en: "Arrive in the schist villages", pt: "Chegada às aldeias de xisto" },
        body: {
          en: "Electric transfer from Coimbra-B station (about 40 minutes) up to Talasnal, a hamlet of slate houses on the mountainside. Time to settle in, then a welcome dinner of chanfana in the village.",
          pt: "Transfer elétrico desde a estação de Coimbra-B (cerca de 40 minutos) até ao Talasnal, um lugarejo de casas de xisto na encosta da serra. Tempo para se instalar e jantar de boas-vindas com chanfana, na aldeia.",
        },
      },
      {
        title: { en: "The schist village trail", pt: "O trilho das aldeias de xisto" },
        body: {
          en: "A gentle 8 km walk between Talasnal, Chiqueiro and Casal Novo, on old paths through chestnut groves. Picnic by a stream; the afternoon is yours.",
          pt: "Um percurso tranquilo de 8 km entre o Talasnal, o Chiqueiro e o Casal Novo, por caminhos antigos entre soutos de castanheiros. Piquenique junto a um ribeiro; a tarde é sua.",
        },
      },
      {
        title: { en: "First planting morning", pt: "Primeira manhã de plantação" },
        body: {
          en: "Ride down to the planting site on the slopes above Lousã, where our forester explains how a burned hillside comes back to life. Plant cork oaks, Pyrenean oaks and strawberry trees until lunch in the field; the electric van brings you and the bikes back up.",
          pt: "Desça de bicicleta até ao terreno, nas encostas acima da Lousã, onde o técnico florestal explica como uma encosta ardida volta à vida. Plante sobreiros, carvalhos-negrais e medronheiros até ao almoço no campo; a carrinha elétrica traz o grupo e as bicicletas de volta à aldeia.",
        },
      },
      {
        title: { en: "The beekeeper’s table", pt: "À mesa do apicultor" },
        body: {
          en: "A short walk to meet a beekeeper whose hives sit among heather and chestnut. Lunch at his farm: honey, fresh cheese, broa and whatever the garden gives. Spend the afternoon at the river beach below Lousã castle, or simply rest.",
          pt: "Uma curta caminhada até às colmeias de um apicultor, entre urzes e castanheiros. Almoço na quinta dele: mel, queijo fresco, broa e o que a horta der. À tarde, a praia fluvial da Senhora da Piedade, junto ao castelo da Lousã, ou simplesmente descanso.",
        },
      },
      {
        title: { en: "Second planting morning", pt: "Segunda manhã de plantação" },
        body: {
          en: "Back to the hillside to plant again and to check on last year’s trees. Most are now knee-high. Every tree you plant is logged with its location so you can follow it from home. Free afternoon.",
          pt: "Regresso à encosta para plantar e ver como estão as árvores do ano passado. A maioria já chega ao joelho. Cada árvore que planta fica registada com a sua localização, para a poder acompanhar a partir de casa. Tarde livre.",
        },
      },
      {
        title: { en: "Up to Trevim", pt: "Subida ao Trevim" },
        body: {
          en: "A 12 km ridge walk to Trevim, the highest point of the serra at 1,205 m, with views to the Serra da Estrela on clear days. Farewell dinner in Talasnal: kid roasted in the wood oven and a glass of medronho.",
          pt: "Uma caminhada de 12 km pela cumeada até ao Trevim, o ponto mais alto da serra, a 1205 m, com vista para a Serra da Estrela nos dias limpos. Jantar de despedida no Talasnal, com cabrito assado em forno de lenha e um cálice de medronho.",
        },
      },
      {
        title: { en: "Departure", pt: "Partida" },
        body: {
          en: "A last look at your trees on the way down, then an electric transfer to Coimbra-B station for trains to Lisbon and Porto.",
          pt: "Um último olhar às suas árvores pelo caminho e transfer elétrico até à estação de Coimbra-B, com comboios para Lisboa e Porto.",
        },
      },
    ],
  },

  {
    slug: "peneda-geres-village-trails",
    days: 8,
    priceFrom: 1450,
    maxGroup: 12,
    types: ["hiking"],
    featured: false,
    allowedMonths: null,
    badges: { ev: true, bike: false, farm: true },
    images: images("peneda-geres-village-trails"),
    title: { en: "Peneda-Gerês Village Trails", pt: "Trilhos das Aldeias da Peneda-Gerês" },
    region: { en: "Peneda-Gerês National Park, Minho", pt: "Parque Nacional da Peneda-Gerês, Minho" },
    summary: {
      en: "Eight days on foot between the granite hamlets of Portugal’s only national park: stone granaries, shepherds’ summer villages, terraced valleys and long-horned cattle grazing free. Bake broa and cook caldo verde with a family in Soajo.",
      pt: "Oito dias a pé entre as aldeias de granito do único parque nacional português: espigueiros, brandas de pastores, vales em socalcos e vacas de cornos compridos a pastar em liberdade. Coza broa e faça caldo verde com uma família no Soajo.",
    },
    highlights: {
      en: [
        "Walk 8–14 km a day on old mule tracks and shepherds’ paths",
        "The granite granaries of Soajo and Lindoso",
        "Sistelo’s terraced valley, Portugal’s little Tibet",
        "The summer and winter villages of Castro Laboreiro",
      ],
      pt: [
        "Caminhe 8 a 14 km por dia em velhos caminhos de almocreves e pastores",
        "Os espigueiros de granito do Soajo e do Lindoso",
        "Os socalcos de Sistelo, o pequeno Tibete português",
        "As brandas e inverneiras de Castro Laboreiro",
      ],
    },
    food: {
      en: [
        "Baking broa in Soajo’s communal oven and cooking caldo verde with a village family",
        "Cachena da Peneda DOP beef with the farmer who raises it",
        "Alvarinho from Melgaço and vinho verde from the Lima valley",
        "Mountain honey and presunto from the village smokehouse",
      ],
      pt: [
        "Cozer broa no forno comunitário do Soajo e fazer caldo verde com uma família da aldeia",
        "Carne Cachena da Peneda DOP, com o criador que a produz",
        "Alvarinho de Melgaço e vinho verde do vale do Lima",
        "Mel da serra e presunto do fumeiro da aldeia",
      ],
    },
    included: {
      en: [
        "7 nights in stone guesthouses in Soajo, Lindoso, Sistelo and Castro Laboreiro",
        "Full board, with local wine at dinner",
        "Electric transfers from and to Porto, and between valleys",
        "Luggage moved ahead on walking days",
        "A local mountain guide throughout",
      ],
      pt: [
        "7 noites em casas de pedra no Soajo, no Lindoso, em Sistelo e em Castro Laboreiro",
        "Pensão completa, com vinho da região ao jantar",
        "Transfers elétricos de e para o Porto, e entre vales",
        "Transporte da bagagem nos dias de caminhada",
        "Guia de montanha local durante toda a viagem",
      ],
    },
    notIncluded,
    impact: {
      en: "The national park’s villages have lost most of their young people. Your stay pays families to keep their guesthouses, communal ovens and herds going. Part of every booking funds the upkeep of the old paths you walk on.",
      pt: "As aldeias do parque nacional perderam a maioria dos seus jovens. A sua estadia paga às famílias para manterem as casas, os fornos comunitários e os rebanhos. Parte de cada reserva financia a manutenção dos caminhos antigos por onde caminha.",
    },
    itinerary: [
      {
        title: { en: "Into the mountains", pt: "Rumo à serra" },
        body: {
          en: "Electric transfer from Porto (about 1 h 45 min) to Soajo, a granite village above the Lima valley. An evening stroll to the threshing floor and its granaries, then dinner at the guesthouse.",
          pt: "Transfer elétrico desde o Porto (cerca de 1 h 45 min) até ao Soajo, aldeia de granito sobre o vale do Lima. Passeio ao fim da tarde até à eira e aos espigueiros, e jantar na casa.",
        },
      },
      {
        title: { en: "Soajo’s old paths", pt: "Os caminhos velhos do Soajo" },
        body: {
          en: "A 10 km loop through oak woods and past abandoned watermills, with a picnic by the river. Back in time for a long, unhurried afternoon.",
          pt: "Um percurso circular de 10 km por carvalhais e moinhos de água abandonados, com piquenique junto ao rio. Regresso a tempo de uma tarde longa e sem pressa.",
        },
      },
      {
        title: { en: "Broa and caldo verde", pt: "Broa e caldo verde" },
        body: {
          en: "Spend the morning with a village family: knead maize-and-rye broa, fire the communal oven and cook caldo verde with greens from their garden. Lunch together at their table; a short walk in the afternoon if you feel like it.",
          pt: "Passe a manhã com uma família da aldeia: amasse a broa de milho e centeio, acenda o forno comunitário e faça caldo verde com couves da horta. Almoço à mesa da família; à tarde, uma curta caminhada, se lhe apetecer.",
        },
      },
      {
        title: { en: "Soajo to Lindoso on foot", pt: "Do Soajo ao Lindoso a pé" },
        body: {
          en: "About 14 km on old mule tracks over the hill to Lindoso, while your luggage travels ahead by electric van. Arrive at the castle and its cluster of fifty granaries in the late-afternoon light.",
          pt: "Cerca de 14 km por antigos caminhos de almocreves até ao Lindoso, enquanto a bagagem segue na carrinha elétrica. Chegada ao castelo e ao conjunto de cinquenta espigueiros com a luz do fim da tarde.",
        },
      },
      {
        title: { en: "A day of rest", pt: "Um dia de descanso" },
        body: {
          en: "Nothing planned. Read on the terrace, swim in the river in summer, or walk with the guide up to the Galician border (about 8 km there and back).",
          pt: "Nada planeado. Leia no terraço, dê um mergulho no rio no verão ou suba com o guia até à fronteira com a Galiza (cerca de 8 km, ida e volta).",
        },
      },
      {
        title: { en: "The terraces of Sistelo", pt: "Os socalcos de Sistelo" },
        body: {
          en: "Electric transfer to Sistelo (about 50 minutes). Walk 9 km along the Vez river and up through the terraces, then lunch with a farmer who raises Cachena cattle on the high pastures.",
          pt: "Transfer elétrico até Sistelo (cerca de 50 minutos). Caminhada de 9 km ao longo do rio Vez e pelos socalcos acima, seguida de almoço com um criador de gado Cachena, que pasta nos lameiros da serra.",
        },
      },
      {
        title: { en: "Castro Laboreiro", pt: "Castro Laboreiro" },
        body: {
          en: "Electric transfer north to the Castro Laboreiro plateau. Walk 12 km of the Trilho Castrejo between brandas and inverneiras, the summer and winter villages shepherds once moved between with their flocks. Farewell dinner with Alvarinho from Melgaço.",
          pt: "Transfer elétrico para norte, até ao planalto de Castro Laboreiro. Caminhada de 12 km pelo Trilho Castrejo, entre brandas e inverneiras, as aldeias de verão e de inverno por onde os pastores andavam com os rebanhos. Jantar de despedida com Alvarinho de Melgaço.",
        },
      },
      {
        title: { en: "Departure", pt: "Partida" },
        body: {
          en: "Electric transfer to Porto (about 2 hours), arriving in time for afternoon trains and flights.",
          pt: "Transfer elétrico até ao Porto (cerca de 2 horas), a tempo dos comboios e voos da tarde.",
        },
      },
    ],
  },

  {
    slug: "ecopista-do-dao-by-bike",
    days: 7,
    priceFrom: 1350,
    maxGroup: 12,
    types: ["biking"],
    featured: true,
    allowedMonths: null,
    badges: { ev: true, bike: true, farm: true },
    images: images("ecopista-do-dao-by-bike"),
    title: { en: "Ecopista do Dão by Bike", pt: "Ecopista do Dão de Bicicleta" },
    region: { en: "Dão and Viseu, Central Portugal", pt: "Dão e Viseu, Centro" },
    summary: {
      en: "Cycle the old Dão railway line from Viseu to Santa Comba Dão, a car-free greenway through pine woods, vineyards and sleepy stations. Short riding days, long lunches with winegrowers and cheesemakers, and nothing steeper than a train could climb.",
      pt: "Pedale pela antiga linha do Dão, de Viseu a Santa Comba Dão: uma ecopista sem carros entre pinhais, vinhas e estações adormecidas. Etapas curtas, almoços longos com vinicultores e queijeiros, e nada mais íngreme do que um comboio conseguia subir.",
    },
    highlights: {
      en: [
        "Ride the whole Ecopista do Dão in easy stages",
        "Never more than 25 km in the saddle in a day",
        "Lunch among the vines with a family winegrower",
        "Taste Serra da Estrela cheese at a shepherd’s farm",
        "Good for families: gentle gradients, no traffic and plenty of shade",
      ],
      pt: [
        "Percorra toda a Ecopista do Dão em etapas tranquilas",
        "Nunca mais de 25 km por dia em cima da bicicleta",
        "Almoço entre as vinhas com uma família de vinicultores",
        "Prove queijo Serra da Estrela numa quinta de pastores",
        "Ideal para famílias: inclinações suaves, sem trânsito e com muita sombra",
      ],
    },
    food: {
      en: [
        "Dão reds and Encruzado whites with the people who grow them",
        "Queijo Serra da Estrela DOP, curdled with thistle flower",
        "Veal roasted the Lafões way",
        "Castanhas doces, Viseu’s egg-yolk sweets",
      ],
      pt: [
        "Tintos do Dão e brancos de Encruzado, com quem os produz",
        "Queijo Serra da Estrela DOP, coalhado com flor de cardo",
        "Vitela assada à moda de Lafões",
        "Castanhas doces de Viseu, feitas de gema de ovo",
      ],
    },
    included: {
      en: [
        "6 nights in small hotels and quintas in Viseu, Tondela and Santa Comba Dão",
        "Full board, with Dão wine at dinner",
        "Touring bikes, helmets and panniers",
        "Luggage moved ahead on riding days",
        "Electric transfers from and to Coimbra-B station",
        "A local cycling guide throughout",
      ],
      pt: [
        "6 noites em pequenos hotéis e quintas em Viseu, Tondela e Santa Comba Dão",
        "Pensão completa, com vinho do Dão ao jantar",
        "Bicicletas de viagem, capacetes e alforges",
        "Transporte da bagagem nos dias de bicicleta",
        "Transfers elétricos de e para a estação de Coimbra-B",
        "Guia de ciclismo local durante toda a viagem",
      ],
    },
    notIncluded,
    impact: {
      en: "The Ecopista turned a closed railway into a lifeline for the villages along it. Riding it brings income to old stations turned cafés, small quintas and cheesemakers that most travellers drive straight past on the motorway.",
      pt: "A ecopista transformou uma linha encerrada numa nova vida para as aldeias por onde passa. Pedalar por ela leva rendimento às antigas estações transformadas em cafés, às pequenas quintas e aos queijeiros por quem a maioria dos viajantes passa ao lado, na autoestrada.",
    },
    itinerary: [
      {
        title: { en: "Arrive in Viseu", pt: "Chegada a Viseu" },
        body: {
          en: "Electric transfer from Coimbra-B station (about 1 h 10 min). Bike fitting, a slow walk through the old town to the cathedral, and dinner of veal roasted the Lafões way.",
          pt: "Transfer elétrico desde a estação de Coimbra-B (cerca de 1 h 10 min). Afinação das bicicletas, passeio lento pelo centro histórico até à Sé e jantar de vitela assada à moda de Lafões.",
        },
      },
      {
        title: { en: "Finding your wheels", pt: "A ganhar ritmo" },
        body: {
          en: "A 20 km warm-up ride out along the first stretch of the greenway and back. The afternoon is free for the Grão Vasco Museum, a coffee in Praça D. Duarte or a nap.",
          pt: "Um percurso de aquecimento de 20 km, ida e volta pelo primeiro troço da ecopista. Tarde livre para o Museu Grão Vasco, um café na Praça D. Duarte ou uma sesta.",
        },
      },
      {
        title: { en: "Viseu to Tondela", pt: "De Viseu a Tondela" },
        body: {
          en: "About 25 km along the old line through pine woods and past restored stations, with a coffee stop in one of them. Your luggage goes ahead by electric van.",
          pt: "Cerca de 25 km pela antiga linha, entre pinhais e estações recuperadas, com paragem para café numa delas. A bagagem segue na carrinha elétrica.",
        },
      },
      {
        title: { en: "A day among the vines", pt: "Um dia entre vinhas" },
        body: {
          en: "A short 15 km round trip from Tondela on quiet lanes to a family quinta. Walk the vineyard with the winegrower, then stay for a long lunch at their table with Touriga Nacional and Encruzado. Free afternoon.",
          pt: "Uma pedalada curta de 15 km, ida e volta a partir de Tondela, por estradas sossegadas até uma quinta familiar. Percorra a vinha com o vinicultor e fique para um almoço demorado à mesa da família, com Touriga Nacional e Encruzado. Tarde livre.",
        },
      },
      {
        title: { en: "Tondela to Santa Comba Dão", pt: "De Tondela a Santa Comba Dão" },
        body: {
          en: "The last 25 km of the greenway, gently downhill towards the Dão river. Arrive by lunchtime and spend the afternoon by the water.",
          pt: "Os últimos 25 km da ecopista, a descer suavemente em direção ao rio Dão. Chegada à hora de almoço e tarde passada junto à água.",
        },
      },
      {
        title: { en: "The shepherd’s cheese", pt: "O queijo do pastor" },
        body: {
          en: "Electric transfer to a shepherd’s farm in the Serra da Estrela foothills (about 50 minutes). Meet the Bordaleira sheep, learn how the milk is set with thistle flower and taste the cheese at different ages over lunch.",
          pt: "Transfer elétrico até uma quinta de pastores no sopé da Serra da Estrela (cerca de 50 minutos). Conheça as ovelhas bordaleiras, veja como se coalha o leite com flor de cardo e prove o queijo em diferentes curas, ao almoço.",
        },
      },
      {
        title: { en: "Departure", pt: "Partida" },
        body: {
          en: "Electric transfer to Coimbra-B station (about 50 minutes) for trains to Lisbon and Porto.",
          pt: "Transfer elétrico até à estação de Coimbra-B (cerca de 50 minutos), com comboios para Lisboa e Porto.",
        },
      },
    ],
  },

  {
    slug: "alentejo-slow-yoga-retreat",
    days: 10,
    priceFrom: 1890,
    maxGroup: 12,
    types: ["yoga"],
    featured: false,
    allowedMonths: null,
    badges: { ev: true, bike: false, farm: true },
    images: images("alentejo-slow-yoga-retreat"),
    title: { en: "Alentejo Slow Yoga Retreat", pt: "Retiro de Ioga Lento no Alentejo" },
    region: { en: "Cork-oak country, Alentejo", pt: "Montado alentejano" },
    summary: {
      en: "Ten days on a farm in the cork-oak forest near Montemor-o-Novo, with yoga at sunrise and sunset and very little in between. Bake bread, cook açorda, walk among the oaks with the people who harvest their bark, and end under the dark skies of Monsaraz.",
      pt: "Dez dias numa herdade no montado de sobro perto de Montemor-o-Novo, com ioga ao nascer e ao pôr do sol e muito pouco pelo meio. Coza pão, faça açorda, caminhe entre os sobreiros com quem lhes tira a cortiça e termine sob os céus escuros de Monsaraz.",
    },
    highlights: {
      en: [
        "Two yoga sessions a day for all levels, one of them at sunrise",
        "Walk the montado with a cork harvester",
        "Stargazing in the Dark Sky Alqueva reserve",
        "A whole day with nothing planned at all",
      ],
      pt: [
        "Duas sessões de ioga por dia, para todos os níveis, uma delas ao nascer do sol",
        "Percorra o montado com um tirador de cortiça",
        "Observação de estrelas na reserva Dark Sky Alqueva",
        "Um dia inteiro sem nada planeado",
      ],
    },
    food: {
      en: [
        "Açorda alentejana: bread, garlic, coriander and olive oil, cooked with the farm’s cook",
        "Migas with black pork in Évora",
        "Olive oil and sheep’s cheese at a neighbouring family farm",
        "Sericaia with Elvas plums",
      ],
      pt: [
        "Açorda alentejana: pão, alho, coentros e azeite, feita com a cozinheira da herdade",
        "Migas com carne de porco preto, em Évora",
        "Azeite e queijo de ovelha numa quinta familiar vizinha",
        "Sericaia com ameixas de Elvas",
      ],
    },
    included: {
      en: [
        "7 nights on a cork-oak farm and 2 nights in Monsaraz",
        "Full board, with Alentejo wine at dinner",
        "Two yoga sessions a day with an experienced teacher; mats and props",
        "Electric transfers from and to Lisbon, and to Évora and Monsaraz",
        "A local guide for walks and visits",
      ],
      pt: [
        "7 noites numa herdade de sobreiros e 2 noites em Monsaraz",
        "Pensão completa, com vinho alentejano ao jantar",
        "Duas sessões de ioga por dia com um professor experiente; tapetes e acessórios",
        "Transfers elétricos de e para Lisboa, e até Évora e Monsaraz",
        "Guia local nas caminhadas e visitas",
      ],
    },
    notIncluded,
    impact: {
      en: "The montado is one of Europe’s richest farmed landscapes, and it only survives if cork, cattle and visitors make it pay. Your stay supports a farm that harvests cork the traditional way: by hand, every nine years, without felling a single tree.",
      pt: "O montado é uma das paisagens agrícolas mais ricas da Europa e só sobrevive se a cortiça, o gado e os visitantes o tornarem viável. A sua estadia apoia uma herdade que tira a cortiça à maneira tradicional: à mão, de nove em nove anos, sem abater uma única árvore.",
    },
    itinerary: [
      {
        title: { en: "Arrive among the cork oaks", pt: "Chegada ao montado" },
        body: {
          en: "Electric transfer from Lisbon (about 1 h 15 min) to a farm near Montemor-o-Novo. Time to settle in, then a gentle evening practice as the light turns gold.",
          pt: "Transfer elétrico desde Lisboa (cerca de 1 h 15 min) até uma herdade perto de Montemor-o-Novo. Tempo para se instalar e uma prática suave ao fim da tarde, quando a luz fica dourada.",
        },
      },
      {
        title: { en: "Finding the rhythm", pt: "Encontrar o ritmo" },
        body: {
          en: "First sunrise yoga, a long breakfast and a slow 6 km walk through the montado. The afternoon is for the pool, the hammock or a book; yin yoga in the evening.",
          pt: "Primeiro ioga ao nascer do sol, um pequeno-almoço demorado e uma caminhada lenta de 6 km pelo montado. A tarde é para a piscina, a rede ou um livro; ao fim do dia, yin ioga.",
        },
      },
      {
        title: { en: "The cork harvester", pt: "O tirador de cortiça" },
        body: {
          en: "Walk the farm with a cork harvester and learn how the bark is stripped by hand every nine years, and why each tree has a number painted on its trunk. Free afternoon; sunset practice.",
          pt: "Percorra a herdade com um tirador de cortiça e descubra como se tira a casca à mão, de nove em nove anos, e porque é que cada sobreiro tem um número pintado no tronco. Tarde livre; prática ao pôr do sol.",
        },
      },
      {
        title: { en: "Bread and açorda", pt: "Pão e açorda" },
        body: {
          en: "Bake Alentejo bread in the wood oven with the farm’s cook, then turn yesterday’s loaves into açorda with garlic, coriander and a poached egg. Lunch is what you made.",
          pt: "Coza pão alentejano no forno a lenha com a cozinheira da herdade e transforme o pão da véspera numa açorda com alho, coentros e ovo escalfado. O almoço é o que fizer.",
        },
      },
      {
        title: { en: "A day of nothing", pt: "Um dia sem nada" },
        body: {
          en: "No schedule. Yoga is there if you want it; so are the pool, the shade and the farm cats.",
          pt: "Sem horários. O ioga está lá, se o quiser; a piscina, a sombra e os gatos da herdade também.",
        },
      },
      {
        title: { en: "Morning in Évora", pt: "Manhã em Évora" },
        body: {
          en: "Electric transfer to Évora (about 30 minutes). Wander the walled town and the Roman temple, then lunch on migas with black pork in a family restaurant. Back to the farm for sunset yoga.",
          pt: "Transfer elétrico até Évora (cerca de 30 minutos). Passeie pela cidade amuralhada e pelo templo romano e almoce migas com carne de porco preto num restaurante familiar. Regresso à herdade para o ioga ao pôr do sol.",
        },
      },
      {
        title: { en: "Olive oil and cheese", pt: "Azeite e queijo" },
        body: {
          en: "Walk 5 km to a neighbouring family farm for an olive oil tasting and a long lunch of their sheep’s cheese, bread and garden vegetables. Yoga nidra in the evening.",
          pt: "Caminhe 5 km até uma quinta vizinha para uma prova de azeite e um almoço demorado com o queijo de ovelha da família, pão e legumes da horta. Ioga nidra ao fim do dia.",
        },
      },
      {
        title: { en: "To Monsaraz", pt: "Rumo a Monsaraz" },
        body: {
          en: "Electric transfer to Monsaraz (about 1 h 15 min), a walled hilltop village above the Alqueva lake. After dinner, a guided night under one of Europe’s darkest skies.",
          pt: "Transfer elétrico até Monsaraz (cerca de 1 h 15 min), uma aldeia amuralhada no alto de um monte sobre o lago do Alqueva. Depois do jantar, uma noite guiada sob um dos céus mais escuros da Europa.",
        },
      },
      {
        title: { en: "Clay and water", pt: "Barro e água" },
        body: {
          en: "Yoga on a terrace above the lake, then a visit to the potters of São Pedro do Corval. Farewell dinner of lamb ensopado and sericaia with Elvas plums.",
          pt: "Ioga num terraço sobre o lago e visita às olarias de São Pedro do Corval. Jantar de despedida com ensopado de borrego e sericaia com ameixas de Elvas.",
        },
      },
      {
        title: { en: "Departure", pt: "Partida" },
        body: {
          en: "A last sunrise practice, then an electric transfer to Lisbon (about 2 hours) for afternoon trains and flights.",
          pt: "Uma última prática ao nascer do sol e transfer elétrico até Lisboa (cerca de 2 horas), a tempo dos comboios e voos da tarde.",
        },
      },
    ],
  },

  {
    slug: "sintra-lisbon-quietly",
    days: 7,
    priceFrom: 1290,
    maxGroup: 12,
    types: ["offseason"],
    featured: true,
    allowedMonths: [11, 12, 1, 2, 3],
    badges: { ev: true, bike: false, farm: true },
    images: images("sintra-lisbon-quietly"),
    title: { en: "Sintra & Lisbon, Quietly", pt: "Sintra e Lisboa, com Calma" },
    region: { en: "Sintra and Lisbon", pt: "Sintra e Lisboa" },
    summary: {
      en: "Portugal’s most-visited corner, in the months when it belongs to the people who live there. Mist in the gardens of Sintra, wine grown in the sand at Colares and Lisbon’s hills in soft winter light. November to March only.",
      pt: "O canto mais visitado de Portugal, nos meses em que volta a ser de quem lá vive. Nevoeiro nos jardins de Sintra, vinho nascido na areia em Colares e as colinas de Lisboa com a luz macia do inverno. Só de novembro a março.",
    },
    highlights: {
      en: [
        "Pena Palace at opening time, almost to yourself",
        "Forest paths between Monserrate and the Quinta da Regaleira",
        "Lunch with a Colares winemaker whose vines grow in sand",
        "Neighbourhood fado in Lisbon, sung by the people who live there",
      ],
      pt: [
        "O Palácio da Pena à hora de abertura, quase só para si",
        "Caminhos de floresta entre Monserrate e a Quinta da Regaleira",
        "Almoço com um produtor de Colares, cujas vinhas crescem na areia",
        "Fado vadio num bairro de Lisboa, cantado por quem lá mora",
      ],
    },
    food: {
      en: [
        "Travesseiros and queijadas from Sintra’s old pastry shops",
        "Colares wine and queijo saloio with the family who make them",
        "A pastéis de nata baking class in Lisbon",
        "Bacalhau à Brás and ginjinha in a family tasca",
      ],
      pt: [
        "Travesseiros e queijadas das antigas pastelarias de Sintra",
        "Vinho de Colares e queijo saloio, com a família que os produz",
        "Uma aula de pastéis de nata em Lisboa",
        "Bacalhau à Brás e ginjinha numa tasca de família",
      ],
    },
    included: {
      en: [
        "6 nights: 4 in a quinta with a fireplace in Sintra, 2 in a guesthouse in Lisbon’s Graça",
        "Full board, with local wine at dinner",
        "Entrance to Pena Palace, Monserrate and the Quinta da Regaleira",
        "Electric transfers from and to Lisbon airport, and from Sintra to Lisbon",
        "A local guide throughout",
      ],
      pt: [
        "6 noites: 4 numa quinta com lareira em Sintra e 2 numa casa de hóspedes na Graça, em Lisboa",
        "Pensão completa, com vinho da região ao jantar",
        "Entradas no Palácio da Pena, em Monserrate e na Quinta da Regaleira",
        "Transfers elétricos de e para o aeroporto de Lisboa, e de Sintra para Lisboa",
        "Guia local durante toda a viagem",
      ],
    },
    notIncluded,
    impact: {
      en: "Coming in winter spreads tourism income across the year, so the cafés, guides and guesthouses of Sintra and Lisbon don’t depend on three crowded summer months, and it takes pressure off housing and water when they are most stretched.",
      pt: "Viajar no inverno distribui o rendimento do turismo ao longo do ano, para que os cafés, os guias e as casas de Sintra e Lisboa não dependam de três meses de verão cheios, e alivia a pressão sobre a habitação e a água quando ela é maior.",
    },
    itinerary: [
      {
        title: { en: "Arrive in Sintra", pt: "Chegada a Sintra" },
        body: {
          en: "Electric transfer from Lisbon airport (about 40 minutes) to a quinta in the Sintra hills. A fire in the hearth, a slow dinner and an early night.",
          pt: "Transfer elétrico desde o aeroporto de Lisboa (cerca de 40 minutos) até uma quinta na serra de Sintra. Lareira acesa, jantar sem pressa e cama cedo.",
        },
      },
      {
        title: { en: "Pena before the crowds", pt: "A Pena antes de toda a gente" },
        body: {
          en: "Walk up through the forest to Pena Palace for opening time, then along the ridge to the Moorish Castle, about 7 km in all. Free afternoon in the old town, with travesseiros at the pastry shop where they were invented.",
          pt: "Suba pela floresta até ao Palácio da Pena à hora de abertura e siga pela cumeada até ao Castelo dos Mouros, cerca de 7 km no total. Tarde livre na vila velha, com travesseiros na pastelaria onde foram inventados.",
        },
      },
      {
        title: { en: "Gardens in the mist", pt: "Jardins no nevoeiro" },
        body: {
          en: "Monserrate’s gardens in the morning, then 6 km on forest paths to the Quinta da Regaleira and its initiation well. In winter you may have the spiral stairs to yourself.",
          pt: "Os jardins de Monserrate de manhã e 6 km por caminhos de floresta até à Quinta da Regaleira e ao seu poço iniciático. No inverno, a escadaria em espiral pode ser só sua.",
        },
      },
      {
        title: { en: "Wine in the sand", pt: "Vinho na areia" },
        body: {
          en: "Walk 10 km from Peninha down to Cabo da Roca, the westernmost point of mainland Europe. Electric transfer to Colares for a late lunch with a winemaker whose ungrafted vines grow in the dunes. Phylloxera never reached them.",
          pt: "Caminhe 10 km da Peninha até ao Cabo da Roca, o ponto mais ocidental da Europa continental. Transfer elétrico até Colares para um almoço tardio com um produtor cujas vinhas, sem enxerto, crescem nas dunas. A filoxera nunca lá chegou.",
        },
      },
      {
        title: { en: "Into Lisbon", pt: "Rumo a Lisboa" },
        body: {
          en: "Electric transfer to Lisbon (about 45 minutes) and a guesthouse in Graça. Walk the miradouros at your own pace, and in the evening listen to fado vadio in a neighbourhood tasca.",
          pt: "Transfer elétrico até Lisboa (cerca de 45 minutos) e uma casa de hóspedes na Graça. Percorra os miradouros ao seu ritmo e, à noite, ouça fado vadio numa tasca do bairro.",
        },
      },
      {
        title: { en: "Market and nata", pt: "Mercado e pastéis de nata" },
        body: {
          en: "A morning at a neighbourhood market with a Lisbon cook, then bake pastéis de nata in a small workshop. The afternoon is free. Winter is the best time for the museums, or for a tram ride without the queues.",
          pt: "Manhã num mercado de bairro com uma cozinheira lisboeta e uma aula de pastéis de nata numa pequena oficina. Tarde livre. O inverno é a melhor altura para os museus ou para uma viagem de elétrico sem filas.",
        },
      },
      {
        title: { en: "Departure", pt: "Partida" },
        body: {
          en: "Electric transfer to Lisbon airport or Santa Apolónia station.",
          pt: "Transfer elétrico até ao aeroporto de Lisboa ou à estação de Santa Apolónia.",
        },
      },
    ],
  },

  {
    slug: "algarve-in-winter",
    days: 9,
    priceFrom: 1590,
    maxGroup: 12,
    types: ["offseason", "hiking"],
    featured: false,
    allowedMonths: [11, 12, 1, 2, 3],
    badges: { ev: true, bike: true, farm: true },
    images: images("algarve-in-winter"),
    title: { en: "Algarve in Winter", pt: "Algarve no inverno" },
    region: { en: "Western Algarve and the Costa Vicentina", pt: "Barlavento algarvio e Costa Vicentina" },
    summary: {
      en: "The Algarve as it was before the summer rush: almond trees in blossom, oranges ripe on the branch, mild days for walking and wild beaches with nobody on them. From the cork hills of Monchique to the cliffs of the Costa Vicentina, on foot and by bike. November to March only.",
      pt: "O Algarve como era antes da enchente do verão: amendoeiras em flor, laranjas maduras nas árvores, dias amenos para caminhar e praias selvagens sem ninguém. Das serras de sobreiros de Monchique às falésias da Costa Vicentina, a pé e de bicicleta. Só de novembro a março.",
    },
    highlights: {
      en: [
        "Walk sections of the Rota Vicentina along the clifftops",
        "Ride from the Monchique hills down to the Atlantic",
        "Sunset at Cabo de São Vicente, the south-western tip of Europe",
        "Cataplana cooked by fishermen at Arrifana’s little harbour",
      ],
      pt: [
        "Caminhe troços da Rota Vicentina pelo alto das falésias",
        "Desça de bicicleta da serra de Monchique até ao Atlântico",
        "Pôr do sol no Cabo de São Vicente, o extremo sudoeste da Europa",
        "Cataplana feita por pescadores no pequeno porto da Arrifana",
      ],
    },
    food: {
      en: [
        "Cataplana with the fishermen of Arrifana",
        "Medronho and smoked sausages at a farm in the Monchique hills",
        "Aljezur sweet potatoes, roasted or baked into cake",
        "Winter oranges, almonds and figs in Algarve sweets",
      ],
      pt: [
        "Cataplana com os pescadores da Arrifana",
        "Medronho e enchidos numa quinta da serra de Monchique",
        "Batata-doce de Aljezur, assada ou em bolo",
        "Laranjas de inverno, amêndoa e figo nos doces algarvios",
      ],
    },
    included: {
      en: [
        "8 nights in family-run guesthouses in Monchique, Aljezur, Vila do Bispo, Sagres and Lagos",
        "Full board, with local wine at dinner",
        "Touring bikes and helmets for the two riding days",
        "Luggage moved ahead on walking and riding days",
        "Electric transfers from and to Faro airport or Lagos station",
        "A local guide throughout",
      ],
      pt: [
        "8 noites em casas familiares em Monchique, Aljezur, Vila do Bispo, Sagres e Lagos",
        "Pensão completa, com vinho da região ao jantar",
        "Bicicletas de viagem e capacetes para os dois dias de bicicleta",
        "Transporte da bagagem nos dias de caminhada e de bicicleta",
        "Transfers elétricos de e para o aeroporto de Faro ou a estação de Lagos",
        "Guia local durante toda a viagem",
      ],
    },
    notIncluded,
    impact: {
      en: "In summer the western Algarve fills several times over, straining water and housing; in winter many of its guesthouses and restaurants struggle to stay open. Your trip helps them keep staff all year, and uses the coast when it has room to spare.",
      pt: "No verão, o barlavento algarvio enche várias vezes acima da sua capacidade, com pressão sobre a água e a habitação; no inverno, muitas casas e restaurantes têm dificuldade em manter as portas abertas. A sua viagem ajuda-os a manter trabalhadores todo o ano, e usa a costa quando ela tem espaço de sobra.",
    },
    itinerary: [
      {
        title: { en: "Arrive in the Monchique hills", pt: "Chegada à serra de Monchique" },
        body: {
          en: "Electric transfer from Faro airport (about 1 hour) or Lagos station (about 40 minutes) up into hills of cork oak and strawberry tree. Dinner by the fire.",
          pt: "Transfer elétrico desde o aeroporto de Faro (cerca de 1 hora) ou da estação de Lagos (cerca de 40 minutos) até à serra, entre sobreiros e medronheiros. Jantar junto à lareira.",
        },
      },
      {
        title: { en: "Up to Fóia", pt: "Subida à Fóia" },
        body: {
          en: "A 12 km walk to Fóia, the Algarve’s highest point, with the whole coast below on a clear winter day. Lunch with a family who distil medronho and cure their own sausages; the afternoon is free.",
          pt: "Uma caminhada de 12 km até à Fóia, o ponto mais alto do Algarve, com a costa inteira lá em baixo nos dias limpos de inverno. Almoço com uma família que destila medronho e faz os seus próprios enchidos; tarde livre.",
        },
      },
      {
        title: { en: "From the hills to the sea", pt: "Da serra ao mar" },
        body: {
          en: "Ride about 35 km from Monchique through Marmelete down to Aljezur, mostly downhill on quiet roads. Your luggage goes ahead by electric van; with an e-bike, the few climbs are easy.",
          pt: "Pedale cerca de 35 km desde Monchique, por Marmelete, até Aljezur, quase sempre a descer, por estradas sossegadas. A bagagem segue na carrinha elétrica; com bicicleta elétrica, as poucas subidas fazem-se sem esforço.",
        },
      },
      {
        title: { en: "Cataplana at Arrifana", pt: "Cataplana na Arrifana" },
        body: {
          en: "Walk 12 km on the Rota Vicentina from Aljezur to the clifftop at Arrifana. Lunch at the little harbour with the fishermen, who cook a cataplana with the morning’s catch.",
          pt: "Caminhe 12 km pela Rota Vicentina, de Aljezur até às falésias da Arrifana. Almoço no pequeno porto com os pescadores, que fazem uma cataplana com o peixe dessa manhã.",
        },
      },
      {
        title: { en: "A free day in Aljezur", pt: "Dia livre em Aljezur" },
        body: {
          en: "Sleep in, climb to the castle above the town, try a beginners’ surf lesson on the winter waves or walk among almond trees in blossom (late January to February).",
          pt: "Acorde tarde, suba ao castelo sobre a vila, experimente uma aula de surf para principiantes nas ondas de inverno ou passeie entre amendoeiras em flor (do fim de janeiro a fevereiro).",
        },
      },
      {
        title: { en: "The cliffs of Carrapateira", pt: "As falésias da Carrapateira" },
        body: {
          en: "Electric transfer to Carrapateira (about 25 minutes) and a 9 km loop around the Pontal headland, high above Bordeira beach. Night in Vila do Bispo.",
          pt: "Transfer elétrico até à Carrapateira (cerca de 25 minutos) e um percurso circular de 9 km pelo Pontal, bem acima da praia da Bordeira. Noite em Vila do Bispo.",
        },
      },
      {
        title: { en: "To the end of Europe", pt: "Até ao fim da Europa" },
        body: {
          en: "Walk 14 km from Vila do Bispo across the windswept plateau to Cabo de São Vicente, and stay for sunset over the Atlantic. Night in Sagres.",
          pt: "Caminhe 14 km desde Vila do Bispo, pelo planalto varrido pelo vento, até ao Cabo de São Vicente, e fique para o pôr do sol sobre o Atlântico. Noite em Sagres.",
        },
      },
      {
        title: { en: "Sagres to Lagos by bike", pt: "De Sagres a Lagos de bicicleta" },
        body: {
          en: "About 35 km on the Ecovia do Litoral and quiet back roads to Lagos. Late in the afternoon, walk to the sea arches of Ponta da Piedade; farewell dinner of razor-clam rice.",
          pt: "Cerca de 35 km pela Ecovia do Litoral e por estradas secundárias sossegadas até Lagos. Ao fim da tarde, caminhada até aos arcos de rocha da Ponta da Piedade; jantar de despedida com arroz de lingueirão.",
        },
      },
      {
        title: { en: "Departure", pt: "Partida" },
        body: {
          en: "Electric transfer to Faro airport (about 1 hour), or a short walk to Lagos station for the train.",
          pt: "Transfer elétrico até ao aeroporto de Faro (cerca de 1 hora), ou uma curta caminhada até à estação de Lagos para apanhar o comboio.",
        },
      },
    ],
  },

  {
    slug: "slow-portugal-journey",
    days: 14,
    priceFrom: 2890,
    maxGroup: 12,
    types: ["planting", "hiking", "biking", "yoga"],
    featured: true,
    allowedMonths: null,
    badges: { ev: true, bike: true, farm: true },
    images: images("slow-portugal-journey"),
    title: { en: "The Slow Portugal Journey", pt: "A Grande Viagem Lenta por Portugal" },
    region: { en: "North to south: Minho, Centro and Alentejo", pt: "De norte a sul: Minho, Centro e Alentejo" },
    summary: {
      en: "Our signature journey: two weeks from the granite villages of Peneda-Gerês to the cork-oak plains of the Alentejo, without a single domestic flight or diesel engine. Walk, cycle the old Dão railway, plant trees in the Serra da Lousã and end with yoga among the oaks.",
      pt: "A nossa viagem emblemática: duas semanas das aldeias de granito da Peneda-Gerês aos montados do Alentejo, sem um único voo doméstico nem motor a gasóleo. Caminhe, pedale pela antiga linha do Dão, plante árvores na Serra da Lousã e termine com ioga entre os sobreiros.",
    },
    highlights: {
      en: [
        "Four regions, four ways to travel: on foot, by bike, planting and on the mat",
        "Bake broa with a family in Soajo",
        "Ride the Ecopista do Dão from Viseu to Santa Comba Dão",
        "Plant native trees on the burned slopes of the Serra da Lousã",
        "Sunrise yoga in the Alentejo montado",
      ],
      pt: [
        "Quatro regiões, quatro maneiras de viajar: a pé, de bicicleta, a plantar e no tapete de ioga",
        "Coza broa com uma família no Soajo",
        "Percorra a Ecopista do Dão de Viseu a Santa Comba Dão",
        "Plante árvores autóctones nas encostas ardidas da Serra da Lousã",
        "Ioga ao nascer do sol no montado alentejano",
      ],
    },
    food: {
      en: [
        "Caldo verde and broa with a family in Soajo",
        "Dão wine with a winegrower, and Serra da Estrela cheese",
        "Chanfana and Serra da Lousã honey",
        "Açorda and migas in the Alentejo",
      ],
      pt: [
        "Caldo verde e broa com uma família do Soajo",
        "Vinho do Dão com um vinicultor e queijo Serra da Estrela",
        "Chanfana e mel da Serra da Lousã",
        "Açorda e migas no Alentejo",
      ],
    },
    included: {
      en: [
        "13 nights in family-run guesthouses, quintas and a cork-oak farm",
        "Full board, with regional wine at dinner",
        "Bikes and helmets, planting tools, yoga mats",
        "Electric transfers for every journey between regions, from Porto at the start to Lisbon at the end",
        "One guide with you from start to finish, plus local guides in each region",
      ],
      pt: [
        "13 noites em casas de turismo rural familiares, quintas e uma herdade de sobreiros",
        "Pensão completa, com vinho da região ao jantar",
        "Bicicletas e capacetes, ferramentas de plantação, tapetes de ioga",
        "Transfers elétricos em todas as deslocações entre regiões, do Porto no início a Lisboa no fim",
        "Um guia consigo do primeiro ao último dia, e guias locais em cada região",
      ],
    },
    notIncluded,
    impact: {
      en: "This journey spreads its spending across four regions that see few visitors: mountain families in the Minho, quintas and cafés along the Dão, the forest association replanting the Serra da Lousã and a cork farm in the Alentejo. Every guest also plants around 15 native trees.",
      pt: "Esta viagem distribui o que gasta por quatro regiões com poucos visitantes: famílias da serra no Minho, quintas e cafés ao longo do Dão, a associação florestal que replanta a Serra da Lousã e uma herdade de cortiça no Alentejo. Cada viajante planta ainda cerca de 15 árvores autóctones.",
    },
    itinerary: [
      {
        title: { en: "Arrive in the north", pt: "Chegada ao norte" },
        body: {
          en: "Electric transfer from Porto (about 1 h 45 min) to Soajo, in the Peneda-Gerês National Park. Dinner in a granite guesthouse.",
          pt: "Transfer elétrico desde o Porto (cerca de 1 h 45 min) até ao Soajo, no Parque Nacional da Peneda-Gerês. Jantar numa casa de granito.",
        },
      },
      {
        title: { en: "Granaries and watermills", pt: "Espigueiros e moinhos" },
        body: {
          en: "A 10 km loop past Soajo’s stone granaries, oak woods and old watermills, with a picnic by the river. Free afternoon.",
          pt: "Um percurso circular de 10 km pelos espigueiros do Soajo, carvalhais e velhos moinhos de água, com piquenique junto ao rio. Tarde livre.",
        },
      },
      {
        title: { en: "Broa and caldo verde", pt: "Broa e caldo verde" },
        body: {
          en: "Knead broa and fire the communal oven with a village family, cook caldo verde from their garden and stay for lunch. A short walk in the afternoon, if you like.",
          pt: "Amasse a broa e acenda o forno comunitário com uma família da aldeia, faça caldo verde com couves da horta e fique para o almoço. À tarde, uma curta caminhada, se lhe apetecer.",
        },
      },
      {
        title: { en: "South to Viseu", pt: "Para sul, até Viseu" },
        body: {
          en: "Electric transfer to Viseu (about 2 h 30 min, with a coffee stop on the way). Bike fitting and a slow evening in the old town.",
          pt: "Transfer elétrico até Viseu (cerca de 2 h 30 min, com paragem para café pelo caminho). Afinação das bicicletas e um fim de tarde lento no centro histórico.",
        },
      },
      {
        title: { en: "Viseu to Tondela", pt: "De Viseu a Tondela" },
        body: {
          en: "About 25 km on the Ecopista do Dão, the old railway line, through pine woods and past restored stations. Your luggage travels ahead.",
          pt: "Cerca de 25 km pela Ecopista do Dão, a antiga linha de comboio, entre pinhais e estações recuperadas. A bagagem segue à frente.",
        },
      },
      {
        title: { en: "Tondela to Santa Comba Dão", pt: "De Tondela a Santa Comba Dão" },
        body: {
          en: "The last 25 km of the greenway, gently downhill. Lunch among the vines with a family winegrower: Dão wine and Serra da Estrela cheese.",
          pt: "Os últimos 25 km da ecopista, a descer suavemente. Almoço entre as vinhas com uma família de vinicultores: vinho do Dão e queijo Serra da Estrela.",
        },
      },
      {
        title: { en: "Into the schist villages", pt: "Rumo às aldeias de xisto" },
        body: {
          en: "Electric transfer to Talasnal in the Serra da Lousã (about 1 hour). The afternoon is free; chanfana for dinner.",
          pt: "Transfer elétrico até ao Talasnal, na Serra da Lousã (cerca de 1 hora). Tarde livre; chanfana ao jantar.",
        },
      },
      {
        title: { en: "Planting morning", pt: "Manhã de plantação" },
        body: {
          en: "Ride down to the planting site with our forester and plant cork oaks, Pyrenean oaks and strawberry trees on slopes burned in 2017. Lunch in the field; the electric van brings you back up.",
          pt: "Desça de bicicleta até ao terreno com o técnico florestal e plante sobreiros, carvalhos-negrais e medronheiros nas encostas que arderam em 2017. Almoço no campo; a carrinha elétrica traz o grupo de volta.",
        },
      },
      {
        title: { en: "Schist trails and honey", pt: "Trilhos de xisto e mel" },
        body: {
          en: "A 9 km walk between the schist villages to a beekeeper’s farm, and lunch on his Serra da Lousã honey, fresh cheese and broa.",
          pt: "Uma caminhada de 9 km entre as aldeias de xisto até à quinta de um apicultor, com almoço de mel da Serra da Lousã, queijo fresco e broa.",
        },
      },
      {
        title: { en: "A day of rest", pt: "Um dia de descanso" },
        body: {
          en: "Nothing planned. Read, nap, swim at the river beach below the castle, or plant a few more trees if you can’t help yourself.",
          pt: "Nada planeado. Leia, durma a sesta, dê um mergulho na praia fluvial junto ao castelo ou plante mais umas árvores, se não resistir.",
        },
      },
      {
        title: { en: "To the Alentejo", pt: "Rumo ao Alentejo" },
        body: {
          en: "The longest electric transfer of the trip (about 2 h 45 min, with a lunch stop) to a cork-oak farm near Montemor-o-Novo. Gentle yoga as the sun goes down.",
          pt: "O transfer elétrico mais longo da viagem (cerca de 2 h 45 min, com paragem para almoço) até uma herdade de sobreiros perto de Montemor-o-Novo. Ioga suave ao pôr do sol.",
        },
      },
      {
        title: { en: "Cork and açorda", pt: "Cortiça e açorda" },
        body: {
          en: "Sunrise yoga, then a walk through the montado with a cork harvester. Bake bread with the farm’s cook and make açorda for lunch.",
          pt: "Ioga ao nascer do sol e passeio pelo montado com um tirador de cortiça. Coza pão com a cozinheira da herdade e faça açorda para o almoço.",
        },
      },
      {
        title: { en: "Évora and farewell", pt: "Évora e despedida" },
        body: {
          en: "Electric transfer to Évora (about 30 minutes) for a morning in the walled town and a lunch of migas. Back to the farm for a last sunset practice and a long farewell dinner.",
          pt: "Transfer elétrico até Évora (cerca de 30 minutos) para uma manhã na cidade amuralhada e um almoço de migas. Regresso à herdade para uma última prática ao pôr do sol e um jantar de despedida demorado.",
        },
      },
      {
        title: { en: "Departure", pt: "Partida" },
        body: {
          en: "Electric transfer to Lisbon airport or Oriente station (about 1 h 15 min).",
          pt: "Transfer elétrico até ao aeroporto de Lisboa ou à estação do Oriente (cerca de 1 h 15 min).",
        },
      },
    ],
  },
];

export function getTour(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug);
}
