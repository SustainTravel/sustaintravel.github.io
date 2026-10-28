// UI strings and landing copy. Tour content lives in src/content/tours.ts.
// `{name}` placeholders are filled with `fill()` from get-dictionary.ts.
export const en = {
  common: {
    brand: "Sustain",
    meta: {
      title: "Sustain | Slow & rural travel in Portugal",
      description:
        "Multi-day slow journeys through rural Portugal: tree planting, hikes, bike rides, yoga and farm food. Electric transfers only, famous sights only off-season.",
    },
    skipToContent: "Skip to content",
    backToTop: "Back to top",
    openMenu: "Open menu",
    newTab: "(opens in a new tab)",
    closeMenu: "Close menu",
    language: "Language",
    bookTrip: "Book a trip",
    backToTours: "All journeys",
    days: "{n} days",
    priceFrom: "from {price}",
    perPerson: "per person",
  },

  nav: {
    label: "Main navigation",
    tours: "Tours",
    values: "Values",
    about: "About us",
    faq: "FAQ",
    contact: "Contact",
    businessModel: "Business model",
  },

  hero: {
    eyebrow: "Slow journeys in rural Portugal",
    title: "Portugal, at the pace of a walk",
    lead: "Week-long journeys through schist villages, cork-oak plains and quiet winter coasts. Plant trees, cycle old railway lines, eat what the neighbours grow, and arrive everywhere by bike or electric car.",
    cta: "Explore tours",
    secondaryCta: "How it works",
  },

  different: {
    eyebrow: "Why Sustain",
    title: "Fewer places. More time in each.",
    lead: "We plan journeys for people who would rather know one valley well than tick off ten cities.",
    points: [
      {
        title: "Hidden gems",
        body: "Schist hamlets in the Serra da Lousã, granite villages in Peneda-Gerês, cork-oak farms in the Alentejo: the places most visitors drive straight past.",
      },
      {
        title: "Classics, off-season",
        body: "Sintra, Lisbon and the Algarve only between November and March, when the crowds have gone home and the towns belong to the people who live there.",
      },
      {
        title: "Local people",
        body: "Our guides, cooks and hosts are neighbours, not contractors. You’ll bake broa with a family in the Minho and share a cataplana with fishermen on the Costa Vicentina.",
      },
    ],
  },

  values: {
    eyebrow: "What we stand by",
    title: "Six promises, on every journey",
    lead: "Not a sustainability page tucked away in the footer. These shape every itinerary we write.",
    items: {
      ev: {
        title: "Electric transfers only",
        body: "Every transfer is in an electric car or an electric bus. No diesel vans, no domestic flights, no exceptions.",
      },
      bikes: {
        title: "Bikes wherever possible",
        body: "When the next village is close enough to ride to, we ride. E-bikes are on hand for the hills, so nobody is left at the bottom.",
      },
      local: {
        title: "Eat local",
        body: "Meals come from farmers, shepherds, bakers and family kitchens nearby: chanfana, caldo verde, migas, cataplana. All cooked the way grandmothers insist on.",
      },
      offseason: {
        title: "Famous places, off-season",
        body: "We visit Portugal’s best-known sights only from November to March. It eases the pressure of mass tourism, and the winter light is better anyway.",
      },
      smallGroups: {
        title: "Small groups, local stays",
        body: "Never more than 12 travellers. We sleep in family-run guesthouses, restored schist houses and farm stays, never chain hotels.",
      },
      givingBack: {
        title: "Giving back",
        body: "Every journey funds native trees (cork oaks, chestnuts, strawberry trees) on hillsides scarred by wildfire. On some, you’ll plant them yourself.",
      },
    },
  },

  how: {
    eyebrow: "How it works",
    title: "Three steps, then we take it from there",
    steps: [
      {
        title: "Choose a slow journey",
        body: "Seven to fourteen days, each built around one region and one rhythm: planting, hiking, cycling, yoga or a quiet winter classic.",
      },
      {
        title: "Book your dates",
        body: "Pick a departure, tell us who’s coming and what you like to eat. Groups are small, so dates do fill up. That’s rather the point.",
      },
      {
        title: "We handle the rest",
        body: "Electric transfers, bikes, family-run stays and meals from local producers. You arrive, unpack, and slow down.",
      },
    ],
  },

  impact: {
    eyebrow: "Impact in numbers",
    title: "What slow travel adds up to",
    lead: "Small groups, many seasons. Here is what we are working towards.",
    stats: {
      trees: { value: "18,400", label: "native trees planted" },
      km: { value: "96,000", label: "kilometres cycled instead of driven" },
      producers: { value: "64", label: "local farmers and producers we buy from" },
      ev: { value: "100%", label: "of transfers in electric vehicles" },
    },
    note: "Our goals for the first five seasons, reviewed every spring.",
  },

  about: {
    eyebrow: "About us",
    title: "Born on an Erasmus+ programme",
    story: [
      "Sustain started in 2026, when the seven of us met in Portugal on a BIP (Blended Intensive Programme) of Erasmus+. We came from different countries and different courses, and we kept coming back to the same question: why does tourism so often take more from a place than it gives back?",
      "Our answer is a travel business built on a sustainable, circular economy. Small groups and longer stays. Electric transfers and bikes instead of coaches. Meals bought from the farmers and families who grow them, and money that stays in the villages that host you. Whatever a journey uses, it should help put back, starting with the trees we plant.",
      "We are small, and we mean to stay that way. Every journey is designed together with the people who live along its route.",
    ],
    photoAlt: "The seven members of the Sustain team outside a university building in Portugal",
  },

  testimonials: {
    eyebrow: "From our guests",
    title: "In their words",
    items: [
      {
        quote: "I came for the tree planting and stayed for the dinners. By day four I’d stopped checking my phone. By day six the village dog was walking me to the planting site.",
        name: "Hannah Whitfield",
        from: "Bristol, United Kingdom",
        tour: "Replant the Serra",
      },
      {
        quote: "We cycled the old railway line from village to village and never once sat in a car with an engine. The kids still talk about the cheese.",
        name: "Joost van Dam",
        from: "Utrecht, Netherlands",
        tour: "Ecopista do Dão by Bike",
      },
      {
        quote: "I’ve lived in Portugal all my life and never seen Sintra like this: mist in the gardens, a fire lit in the guesthouse, the palaces almost to ourselves.",
        name: "Marta Oliveira",
        from: "Porto, Portugal",
        tour: "Sintra & Lisbon, Quietly",
      },
    ],
  },

  faq: {
    eyebrow: "Questions",
    title: "Good questions, honest answers",
    items: [
      {
        q: "What is slow travel?",
        a: "Staying longer in fewer places and moving between them gently, on foot, by bike or in an electric car. You get time to know a valley, its food and its people, rather than collecting views through a coach window. Every day has a plan, never a rush: afternoons are often free, and nobody is counting kilometres.",
      },
      {
        q: "Why do you visit famous places only in the off-season?",
        a: "Sintra, Lisbon and the Algarve are wonderful. In summer, they are overwhelmed. Going between November and March spreads tourism income across the year, eases the pressure on housing and water, and gives you quiet palaces, empty beaches and locals with time to talk.",
      },
      {
        q: "How do transfers work?",
        a: "Every transfer is in an electric car or a small electric bus with a local driver. On many days you won’t need one at all: you walk or cycle from one stay to the next while your luggage travels ahead. We’re happy to help you plan your arrival in Portugal by train, too.",
      },
      {
        q: "Can you cater for dietary needs?",
        a: "Yes. Vegetarian, vegan, gluten-free, lactose-free and allergies are all fine. Just tell us when you book. Our cooks are used to adapting traditional recipes, and there is always more on a Portuguese table than meat.",
      },
      {
        q: "What if I need to cancel?",
        a: "Cancel up to 60 days before departure for a full refund, minus a €100 admin fee. Between 59 and 30 days we refund half; after that we can’t refund, but you can pass your place to someone else at no cost. If we ever have to cancel, you get everything back.",
      },
    ],
  },

  contact: {
    eyebrow: "Say olá",
    title: "Write to us, or join the seasonal letter",
    lead: "A question about a journey, a group or a dietary need? Send us a note. We answer every message ourselves, usually within two working days.",
    fields: {
      name: "Your name",
      email: "Email",
      message: "Message",
      newsletter: "Also send me the seasonal letter: four a year, no more.",
    },
    submit: "Send message",
    successTitle: "Obrigado!",
    success: "Your message is with us. We’ll write back within two working days.",
    errors: {
      required: "Please fill this in.",
      email: "Please enter a valid email address.",
    },
  },

  footer: {
    mission:
      "Slow, rural journeys through Portugal (on foot, by bike and in electric vehicles), with local food on the table and trees planted along the way.",
    exploreTitle: "Explore",
    contactTitle: "Get in touch",
    followTitle: "Follow us",
    email: "ola@sustain.pt",
    location: "Lousã, Portugal",
    credits: "Photo credits",
    copyright: "© {year} Sustain. Made slowly in Portugal.",
  },

  tours: {
    meta: {
      title: "Slow journeys in Portugal | Sustain",
      description:
        "Seven slow, small-group journeys through rural Portugal: tree planting, hiking, cycling, yoga and off-season classics.",
    },
    eyebrow: "Our journeys",
    title: "Seven slow ways through Portugal",
    lead: "Every journey runs for at least a week, travels by electric vehicle and often by bike, and its meals come from local producers. Pick the rhythm that suits you.",
    featured: {
      eyebrow: "Featured journeys",
      title: "Where to start",
      viewAll: "See all journeys",
    },
    listTitle: "All journeys",
    filterLabel: "Filter by experience",
    filterAll: "All",
    types: {
      planting: "Tree planting",
      hiking: "Hiking",
      biking: "Biking",
      yoga: "Yoga",
      offseason: "Off-season classics",
    },
    count: "{n} journeys",
    countOne: "1 journey",
    empty: "No journeys match this filter yet.",
    showAll: "Show all journeys",
  },

  tour: {
    badges: {
      ev: "EV transfers",
      bike: "Bike days",
      farm: "Farm-to-table meals",
      offSeasonOnly: "Nov–Mar only",
    },
    gallery: {
      label: "Photo gallery",
      previous: "Previous photo",
      next: "Next photo",
      photoOf: "Photo {n} of {total}",
    },
    facts: {
      label: "Journey facts",
      duration: "Duration",
      region: "Region",
      groupSize: "Group size",
      groupSizeValue: "Up to {n} travellers",
      price: "Price",
    },
    overview: "Overview",
    highlights: "Highlights",
    itinerary: "Day by day",
    itineraryLead: "An unhurried rhythm: one main activity a day, long lunches, and free afternoons to do nothing at all.",
    day: "Day {n}",
    food: "Food moments",
    included: "What’s included",
    notIncluded: "Not included",
    impact: "Your impact",
    transport: {
      title: "Getting around",
      ev: "All transfers are in electric cars or electric buses.",
      bike: "On bike days you ride from place to place, with e-bikes on hand for the hills, and your luggage travels ahead.",
    },
    offSeason: {
      title: "Why only November to March?",
      body: "These are some of Portugal’s most-visited places. Coming in winter spreads tourism across the year, takes pressure off the people who live there, and you get mild days, soft light and quiet streets.",
    },
    book: "Book this journey",
  },

  credits: {
    meta: { title: "Photo credits | Sustain" },
    title: "Photo credits",
    lead: "The photos on this site show the real places our journeys visit. They are shared under free licences by the photographers below. Thank you.",
    general: "Around the site",
    viewSource: "View on Wikimedia Commons",
    resized: "Resized from the original.",
    author: "Author",
    license: "Licence",
    source: "Source",
  },

  businessModel: {
    meta: {
      title: "Business model | Sustain",
      description:
        "The Sustain Business Model Canvas: how a slow, circular travel agency in rural Portugal creates, delivers and captures value.",
    },
    eyebrow: "Business Model Canvas",
    title: "Our business model",
    lead: "The nine building blocks behind every Sustain journey. This is how we create, deliver and capture value through slow, circular tourism.",
    blocks: {
      keyPartners: {
        title: "Key partners",
        items: [
          "Tree nurseries",
          "Housing providers",
          "Airport transfer providers",
          "Local businesses",
          "Transfer providers (circular)",
          "Travel insurance",
          "Banks and loan providers (for initial financing)",
        ],
      },
      keyActivities: {
        title: "Key activities",
        items: ["Connecting with local suppliers", "Website backend", "Organising trips", "Marketing campaigns"],
      },
      keyResources: {
        title: "Key resources",
        items: ["Financial resources", "IT workers", "Tour operators", "Suppliers", "Marketing expert", "Accountant"],
      },
      valueProposition: {
        title: "Value proposition",
        items: [
          "Sustainable travel",
          "Rural tourism",
          "Slow tourism",
          "Exploring hidden gems",
          "Unique experiences",
          "Connection with nature",
          "Local lifestyle",
          "Circular agriculture",
          "Supporting the local community",
          "Reducing mass tourism",
        ],
      },
      customerRelationships: {
        title: "Customer relationships",
        items: ["Loyalty cards and programme", "Social media", "Outdoor activities", "Gift cards"],
      },
      channels: {
        title: "Channels",
        items: ["App", "Website", "Office (future plan)"],
      },
      customerSegments: {
        title: "Customer segments",
        items: ["Families (nature aspect)", "Couples", "Nature activists", "Active people", "People looking for new or calm experiences"],
      },
      costStructure: {
        title: "Cost structure",
        items: ["Website and app upkeep", "Marketing", "Personnel", "Supplies", "Logistics"],
      },
      revenueStreams: {
        title: "Revenue streams",
        items: ["Tourists pay for the packages", "Sale of souvenirs", "Sale of specific local products", "Seasonal events"],
      },
    },
    finance: {
      title: "Sustain Travel Agency: five-year financial assumptions (EUR)",
      lead: "The inputs behind our plan for 2027 to 2031: what we expect to sell and at what price, what it costs to deliver, who we hire, and how we pay for the start.",
      item: "Item",
      total: "Total",
      years: "Years",
      kpis: {
        tours: { label: "Tours sold in 2031", note: "{n} in 2027" },
        team: { label: "Team in 2031", note: "{n} people in 2027" },
        shareCapital: { label: "Share capital", note: "Paid in at the start, 2027" },
        loan: { label: "Bank loan", note: "{rate} a year over {years} years" },
        capex: { label: "Equipment investment", note: "Spread over 2027 to 2030" },
      },
      sales: {
        title: "Sales",
        units: "Units sold per year",
        prices: "Selling price per unit",
        chart: "Units sold per item and year",
        chartItem: "{item}: {from} in {first}, {to} in {last}",
      },
      costs: {
        title: "Direct costs",
        materials: "Materials and services as a share of each item's revenue",
        other: "Other direct expenses",
        relatedTo: "For",
        chart: "Other direct expenses per year (€)",
      },
      staff: {
        title: "Staffing",
        headcount: "Headcount by role",
        totalTeam: "Total team",
        chart: "Team size per year (people)",
        salaries: "Yearly pay per person",
        gross: "Gross salary (14 months)",
        other: "Other personnel costs",
        net: "Net salary",
        rates: "Payroll rates",
        employerSocialSecurity: "Employer social security",
        employeeSocialSecurity: "Employee social security",
        incomeTax: "Income tax withholding",
      },
      opex: {
        title: "Operating expenses",
        table: "Operating expenses per year",
        chart: "Operating expenses per year (€)",
      },
      capex: {
        title: "Capital expenditure",
        table: "Equipment bought, paid on delivery",
        value: "Value",
        year: "Year bought",
        life: "Useful life",
        lifeYears: "{n} years",
      },
      financing: {
        title: "Financing and payment terms",
        start: "Start-up funding",
        shareCapital: "Share capital",
        principal: "Bank loan",
        rate: "Interest rate",
        term: "Term",
        termYears: "{n} years",
        instalment: "Yearly instalment",
        terms: "Payment terms",
        customers: "Customers",
        customersNote: "Every sale is paid in full at booking.",
        payNow: "{share} on delivery",
        payLater: "{share} paid immediately, the rest after {days} days",
      },
    },
  },

  notFound: {
    title: "This path leads nowhere",
    body: "The page you were looking for has wandered off. Happens to the best of us on a slow trip.",
    home: "Back to the start",
    tours: "Browse journeys",
  },
};

export type Dictionary = typeof en;
