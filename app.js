const GMAPS = "https://www.google.com/maps/search/?api=1&query=";

const official = {
  alpes: "https://www.alpesvaudoises.ch/en/",
  leysin: "https://www.alpesvaudoises.ch/en/Z117/leysin",
  fromagerie: "https://www.alpesvaudoises.ch/fr/P19994/la-fromagerie",
  kuklos: "https://www.alpesvaudoises.ch/fr/P1290/leysin/le-kuklos",
  bike: "https://www.alpesvaudoises.ch/en/Z134/bike-park",
  aiLake: "https://www.alpesvaudoises.ch/en/P18463/leysin/ai-lake",
  tourAi: "https://www.alpesvaudoises.ch/en/V4211/leysin/ascent-to-the-tour-dai",
  glacier: "https://www.alpesvaudoises.ch/en/P1162/glacier-3000",
  chillon: "https://www.alpesvaudoises.ch/en/P742/chillon-castle",
  aigle: "https://www.alpesvaudoises.ch/en/P41436/aigle/aigle",
  lavaux: "https://www.montreuxriviera.com/en/Z13841/lavaux-unesco",
  lausanne: "https://www.lausanne-tourisme.ch/en/",
  lausanneOlympic: "https://www.lausanne-tourisme.ch/en/explore/the-olympic-museum/the-olympic-museum/",
  lausanneOuchy: "https://www.lausanne-tourisme.ch/en/explore/ouchy/",
  lausanneCathedral: "https://www.lausanne-tourisme.ch/en/explore/on-the-cathedral-esplanade/",
  cafeGrancy: "https://www.cafedegrancy.ch/",
  montbenon: "https://www.brasseriedemontbenon.ch/",
  greatEscape: "https://the-great.ch/",
  sbb: "https://www.sbb.ch/en/leisure-holidays/ideas/offer.html/tagesausflug/la-ligne-al"
};

const categoryLabels = {
  dining: "Dining",
  bars: "Bars",
  activities: "Activities",
  parks: "Parks",
  hiking: "Hikes",
  biking: "Biking",
  castles: "Castles",
  viewpoints: "Views",
  wine: "Wine",
  lake: "Lake"
};

const homeLocations = [
  {
    id: "home-rental",
    short: "Mosse",
    name: "Rte de la Mosse 2",
    address: "Rte de la Mosse 2, 1854 Leysin, Switzerland",
    description: "Rental base",
    coordinates: [46.3424695, 7.0162385],
    color: "#1f75d6",
    googleMapsUrl: "https://maps.app.goo.gl/fCNJVjyxFuHnMsZG7"
  },
  {
    id: "home-family",
    short: "Corbelets",
    name: "Rte des Corbelets 43",
    address: "Rte des Corbelets 43, 1854 Leysin, Switzerland",
    description: "Grandmother's address",
    coordinates: [46.3389597, 7.0103869],
    color: "#227844",
    googleMapsUrl: "https://maps.app.goo.gl/HmvTmKdpnNGkbSBj9"
  }
];

const tripDays = [
  { date: "2026-06-20", short: "Jun 20", title: "Arrival + Leysin orientation", dining: "La Fromagerie", note: "Land GVA 9:55 AM; realistic Leysin arrival 1:00-2:00 PM." },
  { date: "2026-06-21", short: "Jun 21", title: "Berneuse + Le Kuklos", dining: "Le Kuklos / Creperie des Alpes", note: "Leave rental 9:15 AM, or 8:45 AM if stopping at Corbelets first." },
  { date: "2026-06-22", short: "Jun 22", title: "Mountain biking", dining: "Le QG", note: "E-MTB scenic route is the moderate default; bike park is technical." },
  { date: "2026-06-23", short: "Jun 23", title: "Three Towers / Lac d'Ai hike", dining: "La Ferme a Fredy", note: "Leave rental 8:45-9:00 AM; add 30 minutes if coordinating pickup." },
  { date: "2026-06-24", short: "Jun 24", title: "Aigle Castle + wine", dining: "Le QG", note: "Good grandmother-friendly day; train down to Aigle." },
  { date: "2026-06-25", short: "Jun 25", title: "Lausanne city + lake day", dining: "Cafe de Grancy / Brasserie de Montbenon / The Great Escape", note: "Train day via Aigle and Lausanne; plan a later return after dinner and drinks." },
  { date: "2026-06-26", short: "Jun 26", title: "Recovery + local Leysin", dining: "La Calabre", note: "Best relaxed family-time day around Corbelets." },
  { date: "2026-06-27", short: "Jun 27", title: "Bigger mountain day / second ride", dining: "La Fromagerie or Le Leysin", note: "Choose longer hike, via ferrata, or second bike day." },
  { date: "2026-06-28", short: "Jun 28", title: "Montreux + Chillon Castle", dining: "Montreux lakeside / light Leysin dinner", note: "Leave 8:30-9:00 AM; add 20-30 minutes for Corbelets." },
  { date: "2026-06-29", short: "Jun 29", title: "Lavaux wine terraces + farewell dinner", dining: "La Ferme a Fredy or Le Kuklos", note: "Leave 8:30 AM; return late afternoon." },
  { date: "2026-06-30", short: "Jun 30", title: "Departure", dining: "No planned dining", note: "Leave rental 7:00-7:30 AM; target GVA by 9:40-10:00 AM." }
];

const seedItinerary = [
  item("2026-06-20", "15:00", "17:00", "Check in and settle at Rte de la Mosse 2", "Logistics", "Confirm groceries, bags, and family timing.", "0", "planned", "home-rental"),
  item("2026-06-20", "17:15", "18:00", "Visit family at Rte des Corbelets 43", "Logistics", "Original arrival-day family stop before dinner if energy allows.", "0", "planned", "home-family"),
  item("2026-06-20", "18:30", "20:15", "Dinner at La Fromagerie", "Dining", "Reserve ahead for fondue/raclette.", "CHF 35-50 pp", "reserve", "fromagerie"),
  item("2026-06-20", "20:30", "22:00", "Optional drinks at L'Embuscade", "Bars", "Easy first-night pub stop if the travel day has not caught up with everyone.", "CHF 10-25 pp", "optional", "embuscade"),
  item("2026-06-21", "10:00", "13:00", "Berneuse lift and Lac d'Ai walk", "Hiking", "Clear-weather day; check lift status. Leave rental 9:15 AM, or 8:45 AM if stopping at Corbelets first.", "Lift varies", "planned", "berneuse"),
  item("2026-06-21", "13:00", "14:15", "Lunch at Le Kuklos", "Dining", "Mountain-view lunch at the revolving restaurant; reserve if possible.", "CHF 38-60 pp", "reserve", "kuklos"),
  item("2026-06-21", "18:30", "20:00", "Dinner at Creperie des Alpes", "Dining", "Casual recovery dinner after the first mountain day.", "CHF 25-40 pp", "planned", "creperie"),
  item("2026-06-22", "09:30", "15:30", "E-MTB scenic ride or Leysin Bike Park", "Biking", "Book bike/protection. Bike park is technical.", "Rental/pass varies", "reserve", "emtb-leysin"),
  item("2026-06-22", "18:30", "20:30", "Dinner at Le QG", "Dining", "Casual bike-day dinner with drinks nearby.", "CHF 25-40 pp", "planned", "le-qg"),
  item("2026-06-23", "08:45", "14:30", "Three Towers / Lac d'Ai hike", "Hiking", "Leave rental 8:45-9:00 AM. Add 30 minutes if coordinating pickup at Corbelets. Picnic or simple lunch.", "Free/lift varies", "planned", "three-towers"),
  item("2026-06-23", "18:30", "20:30", "Dinner at La Ferme a Fredy", "Dining", "Traditional chalet dinner after the hike; reserve ahead.", "CHF 45-65 pp", "reserve", "ferme-fredy"),
  item("2026-06-24", "10:30", "15:30", "Aigle Castle and vineyard walk", "Castles", "Grandmother-friendly train day with old town, vineyards, and wine museum time.", "CHF 15+ entry", "planned", "aigle-castle"),
  item("2026-06-24", "12:30", "13:45", "Lunch in Aigle old town", "Dining", "Simple cafe or brasserie lunch between castle and vineyard time.", "CHF 25-40 pp", "planned", "aigle-old-town"),
  item("2026-06-24", "18:30", "20:30", "Dinner and drinks at Le QG", "Dining", "Casual Leysin dinner after the Aigle day.", "CHF 25-40 pp", "planned", "le-qg"),
  item("2026-06-25", "08:00", "10:10", "Train to Lausanne via Aigle", "Logistics", "Depart Mosse around 7:30 AM and connect through Aigle for Lausanne.", "Rail fare varies", "planned", "lausanne-station"),
  item("2026-06-25", "10:30", "11:30", "Lausanne Cathedral and old town", "Activities", "Start high in the old town for the cathedral esplanade views before dropping toward the lake.", "Free", "planned", "lausanne-cathedral"),
  item("2026-06-25", "12:00", "13:15", "Lunch at Cafe de Grancy", "Dining", "Station-adjacent historic cafe/brasserie; reserve if you want a smoother lunch stop.", "CHF 30-50 pp", "reserve", "cafe-grancy"),
  item("2026-06-25", "13:45", "15:15", "Olympic Museum and Olympic Park", "Activities", "Museum and sculpture park in Ouchy on the Lake Geneva waterfront.", "Paid entry", "planned", "lausanne-olympic"),
  item("2026-06-25", "15:15", "16:30", "Ouchy lakefront walk", "Lake", "Easy lakeside promenade time before heading back toward the center.", "Free", "planned", "ouchy-lausanne"),
  item("2026-06-25", "18:15", "20:00", "Dinner at Brasserie de Montbenon", "Dining", "Seasonal brasserie dinner with a strong Lausanne setting and lake-facing park nearby.", "CHF 45-70 pp", "reserve", "brasserie-montbenon"),
  item("2026-06-25", "20:15", "21:30", "Drinks at The Great Escape", "Bars", "Popular terrace/pub option near Riponne for beers or a casual nightcap.", "CHF 12-30 pp", "optional", "great-escape"),
  item("2026-06-25", "21:45", "23:15", "Train back to Leysin via Aigle", "Logistics", "Check the last comfortable connections before committing to the drinks stop.", "Rail fare varies", "planned", "lausanne-station"),
  item("2026-06-26", "10:30", "15:30", "Recovery day and family time at Corbelets", "Activities", "Village walk, sports center, pool, short e-bike, cafe time, or an easy local reset.", "Varies", "planned", "home-family"),
  item("2026-06-26", "18:30", "20:15", "Dinner at La Calabre", "Dining", "Italian/pizza choice for the relaxed local day.", "CHF 30-45 pp", "planned", "calabre"),
  item("2026-06-26", "20:30", "22:00", "Drinks at L'Embuscade", "Bars", "Low-key local drinks after dinner.", "CHF 10-25 pp", "optional", "embuscade"),
  item("2026-06-27", "08:45", "15:30", "Bigger mountain day or second ride", "Biking", "Choose a longer Berneuse/Lac d'Ai hike, guided via ferrata, or a second MTB day. Start 8:30-9:00 AM.", "Rental/lift varies", "planned", "emtb-leysin"),
  item("2026-06-27", "18:30", "20:30", "Dinner at Restaurant Le Leysin", "Dining", "Flexible bigger-day dinner; La Fromagerie is the alternate if everyone wants fondue again.", "CHF 45-65 pp", "reserve", "le-leysin"),
  item("2026-06-28", "10:00", "16:30", "Montreux and Chillon Castle", "Castles", "Lakefront walk plus castle visit. Leave 8:30-9:00 AM; add 20-30 minutes for Corbelets.", "CHF 15 entry", "planned", "chillon"),
  item("2026-06-28", "12:45", "14:00", "Lunch on the Montreux lakefront", "Dining", "Lakeside cafe or market-area lunch before or after Chillon.", "CHF 30-50 pp", "planned", "montreux-promenade"),
  item("2026-06-28", "18:30", "20:00", "Light dinner in Leysin", "Dining", "Keep dinner easy after the lake day.", "CHF 25-40 pp", "planned", "creperie"),
  item("2026-06-29", "10:30", "17:00", "Lavaux wine terraces", "Wine", "Book a tasting if possible. Leave around 8:30 AM and return late afternoon.", "CHF 25-50 pp", "reserve", "lavaux"),
  item("2026-06-29", "18:45", "21:00", "Farewell dinner at La Ferme a Fredy", "Dining", "Farewell dinner option; Le Kuklos is the mountain-view alternate if schedules align.", "CHF 45-65 pp", "reserve", "ferme-fredy"),
  item("2026-06-30", "07:15", "10:00", "Transfer to Geneva Airport", "Logistics", "Leave rental 7:00-7:30 AM, or 6:45 AM if starting at Corbelets. Target GVA by 9:40-10:00 AM.", "Fare varies", "planned", "geneva-airport")
];

const dailyMosseAnchors = [
  routeAnchor("2026-06-20", "14:45", "Start from Mosse base"),
  routeAnchor("2026-06-20", "22:15", "Return to Mosse base"),
  routeAnchor("2026-06-21", "09:15", "Start from Mosse base"),
  routeAnchor("2026-06-21", "20:15", "Return to Mosse base"),
  routeAnchor("2026-06-22", "09:00", "Start from Mosse base"),
  routeAnchor("2026-06-22", "20:45", "Return to Mosse base"),
  routeAnchor("2026-06-23", "08:45", "Start from Mosse base"),
  routeAnchor("2026-06-23", "20:45", "Return to Mosse base"),
  routeAnchor("2026-06-24", "09:00", "Start from Mosse base"),
  routeAnchor("2026-06-24", "20:45", "Return to Mosse base"),
  routeAnchor("2026-06-25", "07:30", "Start from Mosse base"),
  routeAnchor("2026-06-25", "23:30", "Return to Mosse base"),
  routeAnchor("2026-06-26", "10:00", "Start from Mosse base"),
  routeAnchor("2026-06-26", "22:15", "Return to Mosse base"),
  routeAnchor("2026-06-27", "08:30", "Start from Mosse base"),
  routeAnchor("2026-06-27", "20:45", "Return to Mosse base"),
  routeAnchor("2026-06-28", "08:30", "Start from Mosse base"),
  routeAnchor("2026-06-28", "20:15", "Return to Mosse base"),
  routeAnchor("2026-06-29", "08:30", "Start from Mosse base"),
  routeAnchor("2026-06-29", "21:15", "Return to Mosse base"),
  routeAnchor("2026-06-30", "07:00", "Start from Mosse base")
];

seedItinerary.push(...dailyMosseAnchors);

const listings = [
  listing("fromagerie", "Restaurant La Fromagerie", "dining", "Swiss chalet", "Leysin", 46.3419, 7.0118, "Historic chalet for fondue, raclette, cheese demos, and a classic first-night Swiss meal.", "easy", ["rainy", "family"], "CHF 35-50 pp", ["swiss", "reservation", "cozy"], "10-15 min", "15-25 min", official.fromagerie),
  listing("kuklos", "Le Kuklos", "dining", "Mountain-view", "La Berneuse", 46.3448, 7.0016, "Revolving restaurant with 360-degree views from La Berneuse; best paired with lift access and a short walk.", "easy", ["clear", "lift"], "CHF 38-60 pp", ["swiss", "view", "reservation"], "Lift + 10 min", "Lift + 10 min", official.kuklos),
  listing("le-qg", "Le QG", "dining", "Casual", "Leysin", 46.3429, 7.0111, "Relaxed bar-restaurant for pizza, burgers, drinks, and a more social evening in town.", "easy", ["rainy", "evening"], "CHF 25-40 pp", ["casual", "lively", "bar"], "10-15 min", "15-25 min", "https://www.leqg-restaurant.ch/"),
  listing("creperie", "Creperie des Alpes", "dining", "Casual", "Leysin", 46.3439, 7.0102, "Low-key crepes and casual dinner option for a recovery evening.", "easy", ["rainy"], "CHF 25-40 pp", ["casual", "family"], "10-15 min", "15-25 min", official.leysin),
  listing("calabre", "La Calabre", "dining", "Italian", "Leysin", 46.3442, 7.0112, "Italian and pizza choice after biking or a relaxed local day.", "easy", ["rainy", "evening"], "CHF 30-45 pp", ["italian", "casual"], "10-15 min", "15-25 min", official.leysin),
  listing("le-leysin", "Restaurant Le Leysin", "dining", "Swiss / European", "Leysin", 46.3438, 7.0096, "Comfortable dinner option with hearty mains and a good fallback for mountain-day evenings.", "easy", ["rainy", "evening"], "CHF 45-65 pp", ["swiss", "reservation"], "10-15 min", "15-25 min", "https://restaurant-leysin.ch/"),
  listing("ferme-fredy", "La Ferme a Fredy", "dining", "Swiss chalet", "Leysin", 46.3423, 7.0046, "Traditional chalet dining at Le Grand Chalet; good for a farewell or slower dinner.", "easy", ["rainy", "romantic"], "CHF 45-65 pp", ["swiss", "reservation", "cozy"], "10-20 min", "15-25 min", official.leysin),
  listing("embuscade", "L'Embuscade", "bars", "Pub", "Leysin", 46.3436, 7.0104, "Easy pub stop for drinks, pool, darts, and casual late-evening energy.", "easy", ["rainy", "evening"], "CHF 10-25 pp", ["bar", "lively"], "10-15 min", "15-25 min", "https://www.alpesvaudoises.ch/en/P20255/leysin/lembuscade"),
  listing("cable-bar", "Cable Bar", "bars", "Lift-base bar", "Leysin", 46.3450, 7.0085, "Useful apres-bike or lift-day stop near the base area when open.", "easy", ["clear", "evening"], "CHF 10-25 pp", ["bar", "casual"], "10-20 min", "15-25 min", official.leysin),
  listing("vagabonds", "Brasserie des Vagabonds", "bars", "Craft brewery", "Leysin village", 46.3432, 7.0110, "Local Leysin craft brewery making village-inspired beers; a strong casual drink stop or take-home beer option.", "easy", ["rainy", "evening"], "CHF 10-25 pp", ["bar", "local", "casual"], "10-15 min", "15-25 min", "https://brasserie-des-vagabonds.ch/en"),
  listing("top-pub", "Top Pub", "bars", "Pub", "Leysin village", 46.3440, 7.0106, "Simple local pub option in the village for a low-key drink when you want another evening choice.", "easy", ["rainy", "evening"], "CHF 10-25 pp", ["bar", "casual"], "10-15 min", "15-25 min", "https://www.allbiz.ch/fr/bar-top-pub"),
  listing("farandole", "La Farandole", "dining", "Tea room / casual", "Leysin village", 46.3436, 7.0112, "Warm village tea room for coffee, pastries, sandwiches, focaccia, panzerotti, and light homemade Italian-leaning food.", "easy", ["rainy", "family"], "CHF 15-35 pp", ["cafe", "casual", "family"], "10-15 min", "15-25 min", "https://lafarandole.ch/"),
  listing("prafandaz", "Chalet-Restaurant de Prafandaz", "dining", "Mountain chalet", "Prafandaz", 46.3494, 7.0270, "Chalet above Leysin with views, Swiss cooking, ravioli, and fondue chinoise by reservation; weather and opening-dependent.", "easy", ["clear", "reservation", "seasonal"], "CHF 30-55 pp", ["swiss", "view", "reservation"], "10-20 min by car", "15-25 min by car", "https://www.prafandaz.com/"),
  listing("temeley", "Le Temeley", "dining", "Alpage chalet", "Leysin mountain area", 46.3606, 7.0138, "Seasonal alpine chalet restaurant open in summer months; a rustic mountain lunch or fondue-style stop on a clear day.", "moderate", ["clear", "seasonal"], "CHF 25-50 pp", ["swiss", "mountain", "seasonal"], "Hike/drive varies", "Hike/drive varies", "https://www.temeley.ch/"),
  listing("buffet-gare-leysin", "Buffet de la Gare - Le Station", "dining", "Station cafe", "Leysin-Feydey", 46.3419, 7.0037, "Practical station-side cafe/restaurant option for train days, casual lunch, or waiting between connections.", "easy", ["rainy", "travel"], "CHF 20-40 pp", ["casual", "station", "family"], "10-20 min", "15-30 min", "https://www.trip.com/restaurant/switzerland/leysin/detail/buffet-de-la-gare-19499862/"),
  listing("alpine-classic", "Alpine Classic Hotel Cafe-Bar", "dining", "Hotel cafe-bar", "Leysin village", 46.3439, 7.0148, "Convenient hotel cafe/bar setting near the village center for coffee, terrace time, or a simple relaxed drink.", "easy", ["rainy", "family"], "CHF 15-35 pp", ["cafe", "bar", "casual"], "10-20 min", "15-25 min", "https://www.classic-hotel.ch/"),
  listing("restaurant-central", "Restaurant Central", "dining", "Village restaurant", "Leysin village", 46.3441, 7.0116, "Central village restaurant option to keep on the map as an easy fallback for simple local dining.", "easy", ["rainy", "evening"], "CHF 25-45 pp", ["casual", "local"], "10-15 min", "15-25 min", `${GMAPS}${encodeURIComponent("Restaurant Central Leysin Switzerland")}`),
  listing("ai-lake", "Lac d'Ai", "hiking", "Alpine lake", "Leysin", 46.3562, 7.0003, "Picnic lake above Leysin below the Tour d'Ai; excellent moderate clear-day target.", "moderate", ["clear", "lift"], "Free", ["picnic", "views"], "Lift + 45-75 min walk", "Lift + 45-75 min walk", official.aiLake),
  listing("tour-ai", "Tour d'Ai ascent", "hiking", "Summit hike", "Leysin", 46.3620, 7.0001, "Difficult summit route with exceptional views; only for good conditions and confident hikers.", "hard", ["clear"], "Free", ["views", "alpine"], "Lift + 2-3 hr hike", "Lift + 2-3 hr hike", official.tourAi),
  listing("berneuse", "La Berneuse viewpoint", "viewpoints", "Lift viewpoint", "Leysin", 46.3448, 7.0016, "Classic high viewpoint above Leysin and the best way to start a scenic mountain day.", "easy", ["clear", "lift"], "Lift ticket varies", ["views", "family"], "Lift + short walk", "Lift + short walk", official.kuklos),
  listing("three-towers", "Three Towers trail", "hiking", "Moderate hike", "Leysin", 46.3526, 7.0010, "Loop-style mountain walk around Aiguille Mayen, Tour d'Ai, and Tour de Famelon scenery.", "moderate", ["clear", "lift"], "Free/lift varies", ["views", "moderate"], "Lift + 2-4 hr hike", "Lift + 2-4 hr hike", official.leysin),
  listing("gourmet-hike", "Leysin gourmet hike", "hiking", "Food walk", "Leysin", 46.3455, 7.0030, "Three-course mountain walk with gondola access and local specialties when offered.", "moderate", ["clear", "booking"], "From CHF 50 pp", ["food", "reservation"], "Lift + 2h45 walk", "Lift + 2h45 walk", "https://www.alpesvaudoises.ch/en/F102012/leysin/gourmet-hike-with-cable-car-ride-leysin"),
  listing("leysin-bike-park", "Leysin Bike Park", "biking", "Downhill", "Leysin", 46.3471, 7.0042, "Technical downhill park with serious terrain; best for experienced riders with protection.", "hard", ["clear", "lift"], "Pass/rental varies", ["rental", "adrenaline"], "10-20 min", "15-25 min", official.bike),
  listing("emtb-leysin", "Leysin scenic e-MTB routes", "biking", "E-bike", "Leysin", 46.3436, 7.0101, "Moderate way to explore forests, pastures, and viewpoints without making it a sufferfest.", "moderate", ["clear"], "Rental varies", ["rental", "moderate"], "Start local", "Start local", "https://www.alpesvaudoises.ch/en/Z172/leysin/cycling-leysin"),
  listing("pumptrack", "Leysin pumptrack", "biking", "Skills park", "Leysin", 46.3444, 7.0128, "Quick local bike skills option for a short activity day.", "easy", ["clear", "family"], "Free", ["short", "family"], "10-20 min", "15-25 min", official.leysin),
  listing("sports-center", "Leysin Sports Center", "activities", "Indoor/outdoor", "Leysin", 46.3447, 7.0124, "Useful rainy-day or recovery-day option with sports and wellness facilities depending on season.", "easy", ["rainy", "family"], "Varies", ["rainy", "family"], "10-20 min", "15-25 min", official.leysin),
  listing("tobogganing-park", "Leysin Tobogganing Park area", "activities", "Seasonal note", "Leysin", 46.3452, 7.0134, "Known winter snow-tubing site; useful as a seasonal note rather than a June anchor.", "easy", ["seasonal"], "Seasonal", ["family"], "10-20 min", "15-25 min", official.leysin),
  listing("aigle-castle", "Chateau d'Aigle", "castles", "Castle / wine museum", "Aigle", 46.3174, 6.9727, "Medieval castle among vineyards with the Vine and Wine Museum; strong culture day from Leysin.", "easy", ["rainy", "family"], "CHF 15-ish pp", ["wine", "culture"], "45-60 min transit", "50-65 min transit", "https://chateauaigle.ch/en/information/"),
  listing("aigle-old-town", "Aigle old town and vineyards", "wine", "Wine walk", "Aigle", 46.3187, 6.9681, "Compact old-town and vineyard walk around Aigle, easy to pair with the castle.", "easy", ["clear", "family"], "Free/tasting varies", ["wine", "walk"], "45-60 min transit", "50-65 min transit", official.aigle),
  listing("yvorne", "Yvorne wine village", "wine", "Wine village", "Yvorne", 46.3313, 6.9590, "Nearby Chasselas village for a slower wine-focused afternoon.", "easy", ["clear"], "Tasting varies", ["wine", "quiet"], "45-60 min", "50-65 min", official.aigle),
  listing("parc-aventure-aigle", "Parc Aventure Aigle", "activities", "Ropes course", "Aigle", 46.3145, 6.9803, "Treetop ropes/adventure park option near Aigle for an active non-hiking day.", "moderate", ["clear", "family"], "Paid", ["booking", "adrenaline"], "45-60 min", "50-65 min", official.aigle),
  listing("world-cycling", "UCI World Cycling Centre", "biking", "Cycling facility", "Aigle", 46.3158, 6.9666, "International cycling headquarters and track facility; good for bike-curious downtime.", "easy", ["rainy"], "Varies", ["cycling", "rainy"], "45-60 min", "50-65 min", official.aigle),
  listing("chillon", "Chateau de Chillon", "castles", "Lake castle", "Veytaux", 46.4142, 6.9275, "Iconic Lake Geneva castle near Montreux; one of the best rainy-or-clear day trips.", "easy", ["rainy", "family"], "CHF 15 pp", ["culture", "lake"], "60-80 min transit", "65-85 min transit", official.chillon),
  listing("montreux-promenade", "Montreux lakefront promenade", "lake", "Lake walk", "Montreux", 46.4312, 6.9107, "Classic Riviera walk with lake views, gardens, cafes, and easy castle pairing.", "easy", ["clear", "family"], "Free", ["lake", "walk"], "60-75 min", "65-85 min", "https://www.montreuxriviera.com/en/"),
  listing("queen-studio", "Queen Studio Experience", "activities", "Museum", "Montreux", 46.4316, 6.9111, "Small music-history stop inside Casino Barriere; useful if weather turns.", "easy", ["rainy"], "Donation/free varies", ["rainy", "culture"], "60-75 min", "65-85 min", "https://www.queenstudioexperience.com/"),
  listing("vevey", "Vevey old town and lake", "lake", "Lake town", "Vevey", 46.4620, 6.8427, "Lakeside town with cafes, photography, and easy strolling if extending the Montreux day.", "easy", ["clear", "family"], "Free", ["lake", "walk"], "75-90 min", "80-95 min", "https://www.montreuxriviera.com/en/"),
  listing("chaplin", "Chaplin's World", "activities", "Museum", "Corsier-sur-Vevey", 46.4753, 6.8430, "Polished museum and estate visit above Vevey; excellent rainy-day backup.", "easy", ["rainy", "family"], "Paid", ["museum", "family"], "80-95 min", "85-100 min", "https://www.chaplinsworld.com/en"),
  listing("lavaux", "Lavaux UNESCO vineyard terraces", "wine", "UNESCO terraces", "Lavaux", 46.4897, 6.7469, "Terraced vineyard walks above Lake Geneva; best for the farewell-day wine plan.", "moderate", ["clear"], "Free/tasting CHF 25-50 pp", ["wine", "views"], "75-95 min", "80-100 min", official.lavaux),
  listing("st-saphorin", "Saint-Saphorin", "wine", "Wine village", "Lavaux", 46.4738, 6.7967, "Picturesque Lavaux wine village with narrow lanes and lake views.", "easy", ["clear"], "Tasting varies", ["wine", "walk"], "75-95 min", "80-100 min", official.lavaux),
  listing("chexbres", "Chexbres / Lavaux viewpoint", "viewpoints", "Vineyard view", "Lavaux", 46.4820, 6.7788, "High viewpoint over Lavaux terraces and Lake Geneva.", "easy", ["clear"], "Free", ["views", "wine"], "75-95 min", "80-100 min", official.lavaux),
  listing("glacier3000", "Glacier 3000", "activities", "High alpine", "Les Diablerets", 46.3531, 7.2051, "Peak Walk, glacier views, summer coaster when open, and a big high-alpine day.", "easy", ["clear", "booking"], "CHF 89 adult lift", ["views", "adventure"], "75-95 min", "80-105 min", official.glacier),
  listing("peak-walk", "Peak Walk by Tissot", "viewpoints", "Suspension bridge", "Glacier 3000", 46.3532, 7.2055, "Suspension bridge linking two peaks at Glacier 3000; clear weather makes the day.", "easy", ["clear"], "Included with lift", ["views", "adventure"], "75-95 min", "80-105 min", official.glacier),
  listing("les-diablerets", "Les Diablerets village", "activities", "Alpine village", "Les Diablerets", 46.3493, 7.1587, "Mountain village gateway for Glacier 3000, walks, cafes, and bad-weather pivots.", "easy", ["clear", "rainy"], "Free", ["walk", "village"], "50-70 min", "55-75 min", "https://www.alpesvaudoises.ch/en/Z104/les-diablerets"),
  listing("diablerets-bike", "Diablerets / Gryon flow trails", "biking", "Flow trail", "Gryon", 46.2799, 7.0665, "Smoother flow trail options in the wider Alpes Vaudoises bike network.", "moderate", ["clear", "lift"], "Pass/rental varies", ["rental", "moderate"], "60-80 min", "65-85 min", official.bike),
  listing("villars", "Villars-sur-Ollon", "activities", "Resort town", "Villars", 46.2987, 7.0560, "Nearby resort town with hikes, restaurants, and lift-linked summer options.", "easy", ["clear", "rainy"], "Free", ["walk", "views"], "55-75 min", "60-80 min", "https://www.alpesvaudoises.ch/en/Z104/villars"),
  listing("roc-orsay", "Roc d'Orsay viewpoint", "viewpoints", "Lift viewpoint", "Villars", 46.3093, 7.0722, "Villars lift viewpoint with broad alpine views and summer walking options.", "easy", ["clear", "lift"], "Lift varies", ["views"], "65-85 min", "70-90 min", "https://www.alpesvaudoises.ch/en/Z104/villars"),
  listing("solalex", "Solalex valley", "hiking", "Valley walk", "Gryon", 46.2961, 7.1192, "Scenic valley below dramatic cliffs; good for a gentler alpine walk and lunch.", "moderate", ["clear"], "Free", ["views", "walk"], "65-90 min", "70-95 min", "https://www.alpesvaudoises.ch/en/Z104/villars"),
  listing("lac-lioson", "Lac Lioson", "hiking", "Alpine lake", "Les Mosses", 46.3956, 7.0967, "Beautiful alpine lake hike from Les Mosses area; a strong clear-day alternative.", "moderate", ["clear"], "Free", ["lake", "views"], "45-65 min by car", "50-70 min by car", "https://www.alpesvaudoises.ch/en/Z108/les-mosses"),
  listing("col-mosses", "Col des Mosses", "parks", "Mountain pass", "Les Mosses", 46.3940, 7.1027, "Easy-access pass area for walks, views, and low-key mountain air.", "easy", ["clear", "family"], "Free", ["walk", "family"], "35-55 min by car", "40-60 min by car", "https://www.alpesvaudoises.ch/en/Z108/les-mosses"),
  listing("mosses-gourmet", "Gourmet walk - Les Mosses", "hiking", "Food walk", "Les Mosses", 46.3970, 7.1032, "Food-and-walk experience through Les Mosses refreshment stands when scheduled.", "moderate", ["clear", "booking"], "From CHF 50 pp", ["food", "reservation"], "35-55 min by car", "40-60 min by car", "https://www.alpesvaudoises.ch/en/F102018/col-des-mosses/gourmet-walk-les-mosses"),
  listing("rocher-de-naye", "Rochers-de-Naye", "viewpoints", "Cog railway viewpoint", "Montreux", 46.4320, 6.9760, "High viewpoint above Montreux; can be a longer day but impressive if skies are clear.", "easy", ["clear"], "Train fare varies", ["views", "rail"], "90+ min", "95+ min", "https://www.montreuxriviera.com/en/P8823/rochers-de-naye"),
  listing("bex-salt", "Bex Salt Mines", "activities", "Mine tour", "Bex", 46.2535, 7.0150, "Underground tour and strong rainy-day activity within reach from Aigle/Bex.", "easy", ["rainy", "family"], "Paid", ["museum", "rainy"], "60-80 min", "65-85 min", "https://www.mines.ch/en/"),
  listing("bex-villars-train", "Bex-Villars-Bretaye railway", "activities", "Scenic rail", "Bex/Villars", 46.2510, 7.0120, "Scenic mountain railway option for a slower transit-and-views day.", "easy", ["clear", "family"], "Fare varies", ["rail", "views"], "60-85 min", "65-90 min", "https://www.tpc.ch/"),
  listing("aigle-market", "Aigle market square", "activities", "Town stroll", "Aigle", 46.3185, 6.9706, "Easy cafe, shops, and old-town stop before or after the castle.", "easy", ["rainy", "family"], "Free", ["walk", "cafe"], "45-60 min", "50-65 min", official.aigle),
  listing("montreux-market", "Montreux covered market", "activities", "Lake market", "Montreux", 46.4322, 6.9101, "Landmark lakeside market hall area for snacks and a simple meeting point.", "easy", ["rainy", "lake"], "Free", ["food", "walk"], "60-75 min", "65-85 min", "https://www.montreuxriviera.com/en/"),
  listing("terrasses-lavaux", "Lavaux panoramic trail", "hiking", "Vineyard walk", "Lavaux", 46.4876, 6.7604, "Classic walk through vineyard terraces; choose a short station-to-station segment.", "moderate", ["clear"], "Free", ["wine", "views"], "75-95 min", "80-100 min", official.lavaux),
  listing("mayen-refuge", "Refuge de Mayen", "dining", "Mountain refuge", "Leysin", 46.3565, 7.0095, "Mountain refuge stop on Leysin hiking routes; check opening before counting on lunch.", "moderate", ["clear", "seasonal"], "CHF 25-45 pp", ["mountain", "casual"], "Lift + hike", "Lift + hike", official.leysin),
  listing("restaurant-fers", "Restaurant des Fers", "dining", "Mountain restaurant", "Leysin", 46.3475, 7.0107, "Mountain route dining option used in gourmet hike itineraries; check seasonal opening.", "moderate", ["clear", "seasonal"], "CHF 25-45 pp", ["mountain", "casual"], "Walk/lift varies", "Walk/lift varies", official.leysin),
  listing("leysin-village", "Old Leysin village walk", "activities", "Village walk", "Leysin", 46.3415, 7.0125, "Low-effort local orientation walk with chalet streets and viewpoints.", "easy", ["clear", "family"], "Free", ["walk", "local"], "Start local", "Start local", official.leysin),
  listing("leysin-viewpoint", "Leysin village viewpoints", "viewpoints", "Local views", "Leysin", 46.3455, 7.0151, "Short local viewpoint option for arrival day or golden-hour downtime.", "easy", ["clear"], "Free", ["views", "short"], "10-25 min", "15-30 min", official.leysin),
  listing("train-aigle-leysin", "Aigle-Leysin mountain train", "activities", "Scenic transit", "Leysin/Aigle", 46.3300, 6.9900, "The mountain train is part of the experience and your best no-car link to Aigle and beyond.", "easy", ["rainy", "family"], "Fare varies", ["rail", "logistics"], "Local", "Local", official.sbb),
  listing("geneva-airport", "Geneva Airport transfer", "activities", "Travel logistics", "Geneva", 46.2381, 6.1090, "Door-to-door planning anchor for arrival and departure days via Aigle.", "easy", ["travel"], "Fare varies", ["airport", "rail"], "2.25-2.75 hr", "2.4-2.9 hr", "https://www.gva.ch/en/"),
  listing("lausanne-station", "Lausanne station", "activities", "Travel logistics", "Lausanne", 46.5160, 6.6291, "Rail anchor for the Lausanne city day via Aigle; useful for route planning and return timing.", "easy", ["travel", "rainy"], "Rail fare varies", ["rail", "city"], "90-115 min transit", "95-120 min transit", official.sbb),
  listing("lausanne-cathedral", "Lausanne Cathedral and old town", "activities", "Old town / viewpoint", "Lausanne", 46.5226, 6.6358, "Historic cathedral area with old-town lanes and a broad esplanade view over Lausanne, the lake, and mountains.", "moderate", ["clear", "rainy"], "Free", ["culture", "views", "city"], "95-120 min transit", "100-125 min transit", official.lausanneCathedral),
  listing("cafe-grancy", "Cafe de Grancy", "dining", "Historic cafe / brasserie", "Lausanne", 46.5162, 6.6284, "Historic station-adjacent cafe and brasserie for a practical, polished Lausanne lunch.", "easy", ["rainy", "family"], "CHF 30-50 pp", ["cafe", "brasserie", "reservation"], "90-115 min transit", "95-120 min transit", official.cafeGrancy),
  listing("lausanne-olympic", "Olympic Museum Lausanne", "activities", "Museum", "Lausanne Ouchy", 46.5086, 6.6339, "Slick museum and Olympic Park stop on the Ouchy waterfront; strong clear-or-rainy Lausanne anchor.", "easy", ["rainy", "family"], "Paid", ["museum", "city", "lake"], "100-125 min transit", "105-130 min transit", official.lausanneOlympic),
  listing("ouchy-lausanne", "Ouchy lakefront promenade", "lake", "Lake walk", "Lausanne Ouchy", 46.5065, 6.6276, "Classic Lausanne waterfront walk with parks, lake views, and easy metro access back toward the station/center.", "easy", ["clear", "family"], "Free", ["lake", "walk", "city"], "100-125 min transit", "105-130 min transit", official.lausanneOuchy),
  listing("brasserie-montbenon", "Brasserie de Montbenon", "dining", "Brasserie", "Lausanne", 46.5200, 6.6256, "Seasonal brasserie dinner in a handsome Montbenon setting, useful before an evening drink near Riponne/old town.", "easy", ["rainy", "evening"], "CHF 45-70 pp", ["brasserie", "reservation", "view"], "95-120 min transit", "100-125 min transit", official.montbenon),
  listing("great-escape", "The Great Escape", "bars", "Pub / terrace", "Lausanne", 46.5222, 6.6339, "Popular Lausanne terrace/pub with craft and international beers, burgers, and a lively evening crowd.", "easy", ["evening", "rainy"], "CHF 12-30 pp", ["bar", "lively", "terrace"], "95-120 min transit", "100-125 min transit", official.greatEscape),
  listing("bains-lavey", "Lavey-les-Bains thermal baths", "activities", "Thermal baths", "Lavey", 46.2095, 7.0178, "Thermal spa option for recovery; better by car/taxi than transit from Leysin.", "easy", ["rainy", "relax"], "Paid", ["wellness", "rainy"], "45-65 min by car", "50-70 min by car", "https://www.lavey-les-bains.ch/en/"),
  listing("villeneuve-reserve", "Les Grangettes nature reserve", "parks", "Nature reserve", "Villeneuve", 46.3952, 6.9096, "Flat lakeside nature reserve near the Rhone delta for an easy birding/walk option.", "easy", ["clear", "family"], "Free", ["lake", "nature"], "60-80 min", "65-85 min", "https://www.montreuxriviera.com/en/")
];

let state = {
  activeTab: "overview",
  travelSubTab: "justin-tasha",
  categoryFilters: new Set(),
  conditionFilters: new Set(),
  homesOnly: false,
  mapView: "map",
  sort: "trip",
  selectedListingId: null,
  pendingAddId: null,
  editingItemId: null,
  search: "",
  effort: "all",
  selectedDay: "2026-06-20",
  theme: readStore("leysin_theme", "light"),
  saved: readStore("leysin_saved", []),
  itinerary: readStore("leysin_itinerary", seedItinerary),
  assistantOpen: false,
  assistantBusy: false,
  assistantError: "",
  assistantSettings: false,
  assistantMessages: [],
  assistantPending: null,
  aiProxyUrl: readStore("leysin_ai_proxy", ""),
  aiPass: readStore("leysin_ai_pass", "")
};
maybeLoadSharedState();
backfillSeedItinerary();

let map;
let markerLayer;
let mapNode = null;
let lastMapSignature = "";
let mapViewState = null;
let fallbackMapZoom = 1;
const routeCache = new Map();
let routeRequestSerial = 0;
let itineraryDayPickerScrollLeft = 0;
let fitRouteOnNextMapRender = false;

function item(day, start, end, title, category, notes, cost, status, listingId = null) {
  return {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    day,
    start,
    end,
    title,
    category,
    notes,
    cost,
    status,
    listingId
  };
}

function routeAnchor(day, start, title) {
  return item(
    day,
    start,
    start,
    title,
    "Logistics",
    "Route anchor for the daily map line.",
    "0",
    "planned",
    "home-rental"
  );
}

function listing(id, name, category, subcategory, area, lat, lng, description, effort, weather, price, tags, fromRental, fromCorbelets, officialUrl) {
  return {
    id,
    name,
    category,
    subcategory,
    area,
    coordinates: [lat, lng],
    priority: ["fromagerie", "kuklos", "ai-lake", "leysin-bike-park", "aigle-castle", "chillon", "glacier3000", "lavaux"].includes(id) ? "Must" : "Strong",
    description,
    effort,
    weather,
    price,
    tags,
    travelTimes: { rental: fromRental, corbelets: fromCorbelets },
    officialUrl,
    googleMapsUrl: `${GMAPS}${encodeURIComponent(`${name} ${area} Switzerland`)}`
  };
}

function readStore(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function writeStore() {
  localStorage.setItem("leysin_theme", JSON.stringify(state.theme));
  localStorage.setItem("leysin_saved", JSON.stringify(state.saved));
  localStorage.setItem("leysin_itinerary", JSON.stringify(state.itinerary));
}

// ---- Sharing: export / import / link ----------------------------------
function tripSnapshot() {
  return { v: 1, exportedAt: new Date().toISOString(), saved: state.saved, itinerary: state.itinerary };
}

function encodeTrip(snapshot) {
  // UTF-8 safe base64 for the URL hash
  return btoa(unescape(encodeURIComponent(JSON.stringify(snapshot))));
}

function decodeTrip(encoded) {
  return JSON.parse(decodeURIComponent(escape(atob(encoded))));
}

function applySnapshot(snapshot) {
  if (!snapshot || !Array.isArray(snapshot.itinerary)) return false;
  state.itinerary = snapshot.itinerary;
  state.saved = Array.isArray(snapshot.saved) ? snapshot.saved : [];
  writeStore();
  return true;
}

function maybeLoadSharedState() {
  try {
    const hash = (typeof location !== "undefined" && location.hash) || "";
    const tripMatch = hash.match(/[#&]trip=([^&]+)/);
    const aiMatch = hash.match(/[#&]ai=([^&]+)/);
    if (tripMatch) {
      const snapshot = decodeTrip(decodeURIComponent(tripMatch[1]));
      if (snapshot && Array.isArray(snapshot.itinerary) &&
          confirm("This link contains a shared itinerary. Load it? This replaces the plan saved in this browser.")) {
        applySnapshot(snapshot);
      }
    }
    if (aiMatch) {
      const config = JSON.parse(decodeURIComponent(escape(atob(decodeURIComponent(aiMatch[1])))));
      if (config && config.url &&
          confirm("This link will connect the Claude assistant on this device. Continue?")) {
        state.aiProxyUrl = config.url;
        state.aiPass = config.pass || "";
        saveAiConfig();
      }
    }
    // Clear the hash either way so a refresh doesn't re-prompt.
    if (tripMatch || aiMatch) history.replaceState(null, "", location.pathname + location.search);
  } catch (error) {
    console.warn("Could not read shared settings from link.", error);
  }
}

function exportTrip() {
  const blob = new Blob([JSON.stringify(tripSnapshot(), null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = el("a", { href: url, download: "leysin-itinerary.json" });
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

function importTripFromFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const snapshot = JSON.parse(reader.result);
      if (applySnapshot(snapshot)) {
        alert("Itinerary imported.");
        render();
      } else {
        alert("That file does not look like a Leysin itinerary export.");
      }
    } catch {
      alert("Could not read that file. Make sure it is a Leysin itinerary JSON export.");
    }
  };
  reader.readAsText(file);
}

async function copyShareLink() {
  const base = location.origin + location.pathname;
  const link = `${base}#trip=${encodeURIComponent(encodeTrip(tripSnapshot()))}`;
  try {
    await navigator.clipboard.writeText(link);
    alert("Share link copied to your clipboard. Anyone who opens it can load this plan.");
  } catch {
    prompt("Copy this share link:", link);
  }
}

// ---- Claude assistant (via serverless proxy) --------------------------
const ASSISTANT_MODEL = "claude-haiku-4-5-20251001";

function saveAiConfig() {
  localStorage.setItem("leysin_ai_proxy", JSON.stringify(state.aiProxyUrl));
  localStorage.setItem("leysin_ai_pass", JSON.stringify(state.aiPass));
}

async function copyInviteLink() {
  if (!state.aiProxyUrl) {
    alert("Connect the assistant first, then you can create an invite link.");
    return;
  }
  const encoded = btoa(unescape(encodeURIComponent(JSON.stringify({ url: state.aiProxyUrl, pass: state.aiPass }))));
  const link = `${location.origin + location.pathname}#ai=${encodeURIComponent(encoded)}`;
  try {
    await navigator.clipboard.writeText(link);
    alert("Assistant invite link copied. Send it privately to family — opening it connects their device to the assistant, no setup needed.");
  } catch {
    prompt("Copy this assistant invite link (send privately):", link);
  }
}

function openAssistant() {
  state.assistantOpen = true;
  state.assistantError = "";
  state.assistantSettings = !state.aiProxyUrl;
  render();
}

function closeAssistant() {
  state.assistantOpen = false;
  state.assistantPending = null;
  render();
}

function buildAssistantSystem() {
  const days = tripDays.map((d) => `${d.date} (${d.short}): ${d.title}`).join("; ");
  const itinerary = state.itinerary
    .slice()
    .sort((a, b) => (a.day + a.start).localeCompare(b.day + b.start))
    .map((e) => `${e.id} | ${e.day} ${e.start}-${e.end} | ${e.title} | ${e.category} | ${e.status}${e.listingId ? ` | place:${e.listingId}` : ""}`)
    .join("\n");
  const places = listings
    .map((l) => `${l.id} | ${l.name} | ${categoryLabels[l.category] || l.category} | ${l.area} | ${l.price}`)
    .join("\n");
  return [
    "You are the trip-planning assistant inside the Leysin Trip Hub, a family trip to Leysin, Switzerland on June 20-30, 2026.",
    'Respond with STRICT minified JSON only, no markdown or prose outside it: {"reply": string, "actions": array}.',
    "'reply' is a short friendly summary for the user. 'actions' lists itinerary changes to PROPOSE (the user confirms before they apply).",
    "Action shapes:",
    '- add: {"op":"add","day":"2026-06-DD","start":"HH:MM","end":"HH:MM","title":string,"category":string,"notes":string,"cost":string,"status":string,"listingId":string?}',
    '- update: {"op":"update","id":string,"fields":{...}}  (id is an existing item id)',
    '- remove: {"op":"remove","id":string}',
    '- move: {"op":"move","id":string,"day":string?,"start":string?,"end":string?}',
    "Rules: dates within 2026-06-20..2026-06-30; times 24h HH:MM; status one of planned/reserve/booked/backup/optional.",
    "For 'add', set listingId to a matching curated place id when one fits so it appears on the map; otherwise omit it.",
    "Reference existing items by their id. If the user only asks a question, return actions: [] and answer in reply.",
    "",
    "TRIP DAYS: " + days,
    "",
    "CURRENT ITINERARY (id | day time | title | category | status [| place]):",
    itinerary,
    "",
    "CURATED PLACES (id | name | category | area | price):",
    places
  ].join("\n");
}

function assistantApiMessages() {
  return state.assistantMessages
    .filter((m) => m.role === "user" || m.role === "assistant")
    .map((m) => ({ role: m.role, content: m.text }));
}

function parseAssistantJson(raw) {
  if (!raw) return null;
  let text = String(raw).trim();
  const fence = text.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fence) text = fence[1].trim();
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start < 0 || end <= start) return null;
  try {
    return JSON.parse(text.slice(start, end + 1));
  } catch {
    return null;
  }
}

async function sendAssistant(text) {
  const message = (text || "").trim();
  if (!message) return;
  if (!state.aiProxyUrl) {
    state.assistantSettings = true;
    state.assistantError = "Add your worker URL and passphrase in Settings first.";
    render();
    return;
  }
  state.assistantMessages.push({ role: "user", text: message });
  state.assistantBusy = true;
  state.assistantError = "";
  state.assistantPending = null;
  render();
  try {
    const response = await fetch(state.aiProxyUrl, {
      method: "POST",
      headers: { "content-type": "application/json", "x-trip-pass": state.aiPass || "" },
      body: JSON.stringify({
        model: ASSISTANT_MODEL,
        max_tokens: 1024,
        system: buildAssistantSystem(),
        messages: assistantApiMessages()
      })
    });
    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      throw new Error(`Proxy ${response.status}. ${detail.slice(0, 180)}`);
    }
    const data = await response.json();
    const rawText = (data.content || []).filter((b) => b.type === "text").map((b) => b.text).join("\n") || "";
    const parsed = parseAssistantJson(rawText);
    if (parsed && Array.isArray(parsed.actions) && parsed.actions.length) {
      state.assistantPending = parsed;
      state.assistantMessages.push({ role: "assistant", text: parsed.reply || "Here are the proposed changes." });
    } else {
      state.assistantMessages.push({ role: "assistant", text: (parsed && parsed.reply) || rawText || "(no response)" });
    }
  } catch (error) {
    state.assistantError = String(error.message || error);
  } finally {
    state.assistantBusy = false;
    render();
  }
}

function describeAction(action) {
  if (!action || !action.op) return "Unknown change";
  if (action.op === "add") {
    return `Add "${action.title || (action.listingId && getPlaceById(action.listingId)?.name) || "item"}" on ${action.day || state.selectedDay} ${action.start || ""}${action.end ? "-" + action.end : ""}`.trim();
  }
  const current = state.itinerary.find((e) => e.id === action.id);
  const label = current ? `"${current.title}"` : `item ${action.id}`;
  if (action.op === "remove") return `Remove ${label}`;
  if (action.op === "move") return `Move ${label} to ${action.day || (current && current.day) || ""} ${action.start || ""}${action.end ? "-" + action.end : ""}`.trim();
  if (action.op === "update") {
    const fields = action.fields ? Object.keys(action.fields).join(", ") : "";
    return `Update ${label}${fields ? ` (${fields})` : ""}`;
  }
  return action.op + " " + label;
}

function applyAssistantActions(actions) {
  let applied = 0;
  (actions || []).forEach((action) => {
    if (!action || !action.op) return;
    if (action.op === "add") {
      const place = action.listingId ? getPlaceById(action.listingId) : null;
      state.itinerary.push(item(
        action.day || state.selectedDay,
        action.start || "10:00",
        action.end || "11:00",
        action.title || (place && place.name) || "New item",
        action.category || (place && (categoryLabels[place.category] || place.category)) || "Custom",
        action.notes || "",
        action.cost || "",
        action.status || "planned",
        place ? action.listingId : null
      ));
      applied++;
    } else if (action.op === "update") {
      const entry = state.itinerary.find((e) => e.id === action.id);
      if (entry && action.fields && typeof action.fields === "object") {
        const allowed = ["title", "start", "end", "category", "notes", "cost", "status", "day"];
        allowed.forEach((key) => {
          if (action.fields[key] !== undefined) entry[key] = action.fields[key];
        });
        applied++;
      }
    } else if (action.op === "remove") {
      const before = state.itinerary.length;
      state.itinerary = state.itinerary.filter((e) => e.id !== action.id);
      if (state.itinerary.length < before) applied++;
    } else if (action.op === "move") {
      const entry = state.itinerary.find((e) => e.id === action.id);
      if (entry) {
        if (action.day) entry.day = action.day;
        if (action.start) entry.start = action.start;
        if (action.end) entry.end = action.end;
        applied++;
      }
    }
  });
  writeStore();
  return applied;
}

function confirmAssistantActions() {
  const pending = state.assistantPending;
  if (!pending) return;
  const count = applyAssistantActions(pending.actions);
  const firstAdd = (pending.actions || []).find((a) => a.op === "add" || a.op === "move");
  if (firstAdd && firstAdd.day) state.selectedDay = firstAdd.day;
  state.assistantPending = null;
  state.assistantMessages.push({ role: "system", text: `Applied ${count} change${count === 1 ? "" : "s"} to your itinerary.` });
  render();
}

function dismissAssistantActions() {
  state.assistantPending = null;
  state.assistantMessages.push({ role: "system", text: "Discarded the proposed changes." });
  render();
}

function renderAssistantSettings() {
  return el("form", {
    class: "assistant-settings",
    onsubmit: (event) => {
      event.preventDefault();
      const data = new FormData(event.target);
      state.aiProxyUrl = (data.get("proxy") || "").trim();
      state.aiPass = (data.get("pass") || "").trim();
      saveAiConfig();
      state.assistantSettings = false;
      state.assistantError = "";
      render();
    }
  }, [
    el("p", { class: "muted small" }, ["Connect to your Cloudflare Worker (see ASSISTANT_SETUP.md). Stored only in this browser."]),
    el("label", { class: "field-label" }, ["Worker URL"]),
    el("input", { name: "proxy", type: "url", placeholder: "https://leysin-assistant.you.workers.dev", value: state.aiProxyUrl, "aria-label": "Worker URL" }),
    el("label", { class: "field-label" }, ["Passphrase"]),
    el("input", { name: "pass", type: "text", placeholder: "shared passphrase", value: state.aiPass, "aria-label": "Passphrase" }),
    el("div", { class: "listing-actions" }, [
      el("button", { class: "primary-btn", type: "submit" }, ["Save"]),
      state.aiProxyUrl ? el("button", { class: "ghost-btn", type: "button", onclick: () => { state.assistantSettings = false; render(); } }, ["Cancel"]) : el("span")
    ]),
    state.aiProxyUrl
      ? el("div", { class: "invite-block" }, [
          el("p", { class: "muted small" }, ["Share access without setup: send family this link and the assistant connects on their device automatically."]),
          el("button", { class: "ghost-btn", type: "button", onclick: copyInviteLink }, ["Copy invite link for family"])
        ])
      : el("span")
  ]);
}

function renderAssistantPending() {
  const pending = state.assistantPending;
  if (!pending) return el("span");
  return el("div", { class: "assistant-pending" }, [
    el("strong", {}, ["Proposed changes"]),
    el("ul", { class: "pending-list" }, (pending.actions || []).map((action) =>
      el("li", { class: `pending-${action.op || "x"}` }, [describeAction(action)])
    )),
    el("div", { class: "listing-actions" }, [
      el("button", { class: "primary-btn", type: "button", onclick: confirmAssistantActions }, [`Confirm ${pending.actions.length} change${pending.actions.length === 1 ? "" : "s"}`]),
      el("button", { class: "ghost-btn", type: "button", onclick: dismissAssistantActions }, ["Discard"])
    ])
  ]);
}

function renderAssistantModal() {
  const configured = Boolean(state.aiProxyUrl);
  return el("div", {
    class: "modal-backdrop",
    onclick: (event) => { if (event.target.classList.contains("modal-backdrop")) closeAssistant(); }
  }, [
    el("div", { class: "assistant-modal", role: "dialog", "aria-label": "Ask Claude" }, [
      el("div", { class: "section-title" }, [
        el("h2", {}, ["✨ Ask Claude"]),
        el("div", { class: "assistant-head-actions" }, [
          el("button", { class: "origin-clear", type: "button", onclick: () => { state.assistantSettings = !state.assistantSettings; render(); } }, [state.assistantSettings ? "Back" : "Settings"]),
          el("button", { class: "origin-clear", type: "button", onclick: closeAssistant }, ["Close"])
        ])
      ]),
      state.assistantSettings
        ? renderAssistantSettings()
        : el("div", { class: "assistant-body" }, [
            el("div", { class: "assistant-log" },
              state.assistantMessages.length
                ? state.assistantMessages.map((m) => el("div", { class: `chat-msg chat-${m.role}` }, [m.text]))
                : [el("p", { class: "muted small" }, ["Ask me to add, move, update, or remove itinerary items — e.g. “Add a wine tasting in Yvorne on the 26th around 3pm” or “move the bike-day dinner later.” I'll propose changes for you to confirm."])]
            ),
            state.assistantBusy ? el("div", { class: "muted small assistant-thinking" }, ["Claude is thinking…"]) : el("span"),
            renderAssistantPending(),
            state.assistantError ? el("div", { class: "assistant-error" }, [state.assistantError]) : el("span"),
            el("form", {
              class: "assistant-input",
              onsubmit: (event) => {
                event.preventDefault();
                const field = event.target.querySelector("textarea");
                const value = field.value;
                field.value = "";
                sendAssistant(value);
              }
            }, [
              el("textarea", { placeholder: configured ? "Ask Claude to change the plan…" : "Add your worker URL in Settings first…", "aria-label": "Message", rows: "2", disabled: state.assistantBusy ? "disabled" : null }),
              el("button", { class: "primary-btn", type: "submit", disabled: state.assistantBusy ? "disabled" : null }, ["Send"])
            ])
          ])
    ])
  ]);
}

function backfillSeedItinerary() {
  removeSupersededSeedItems();
  seedItinerary.forEach((seed) => {
    const existing = state.itinerary.find((entry) =>
      entry.day === seed.day &&
      entry.title === seed.title
    );
    if (existing) {
      ["listingId", "category", "notes", "cost", "status"].forEach((key) => {
        if ((existing[key] === null || existing[key] === undefined || existing[key] === "") && seed[key]) {
          existing[key] = seed[key];
        }
      });
    } else {
      state.itinerary.push(seed);
    }
  });
  writeStore();
}

function removeSupersededSeedItems() {
  const superseded = new Set([
    "2026-06-25|Glacier 3000",
    "2026-06-25|Lunch at Glacier 3000",
    "2026-06-25|Dinner at Restaurant Le Leysin",
    "2026-06-25|Return to Mosse base"
  ]);
  state.itinerary = state.itinerary.filter((entry) => !superseded.has(`${entry.day}|${entry.title}`));
}

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([key, value]) => {
    if (key === "class") node.className = value;
    else if (key === "html") node.innerHTML = value;
    else if (key.startsWith("on")) node.addEventListener(key.slice(2), value);
    else if (value !== null && value !== undefined) node.setAttribute(key, value);
  });
  children.forEach((child) => node.append(child?.nodeType ? child : document.createTextNode(child)));
  return node;
}

function render() {
  rememberMapView();
  rememberItineraryDayScroll();
  document.documentElement.dataset.theme = state.theme;
  const app = document.getElementById("app");
  app.innerHTML = "";
  app.append(
    el("div", { class: "app-shell" }, [
      el("a", { class: "skip-link", href: "#main" }, ["Skip to main content"]),
      renderHeader(),
      el("main", { class: "main", id: "main", tabindex: "-1" }, [
        renderActiveTab(),
        state.pendingAddId ? renderAddModal() : el("span"),
        state.assistantOpen ? renderAssistantModal() : el("span")
      ])
    ])
  );
  restoreItineraryDayScroll();
  refreshWeather();
  if (state.activeTab === "map") setTimeout(initMap, 0);
}

let weatherText = "June avg ~18°C · Leysin";
let weatherFetchTried = false;

function refreshWeather() {
  if (weatherFetchTried) return;
  weatherFetchTried = true;
  // Live current conditions where the network allows it (e.g. GitHub Pages);
  // silently keeps the seasonal-average label offline (e.g. inside an artifact).
  fetch("https://api.open-meteo.com/v1/forecast?latitude=46.34&longitude=7.02&current=temperature_2m")
    .then((response) => response.ok ? response.json() : Promise.reject())
    .then((data) => {
      const temp = data?.current?.temperature_2m;
      if (typeof temp === "number") {
        weatherText = `${Math.round(temp)}°C now · Leysin`;
        const node = document.querySelector(".weather-pill span");
        if (node) node.textContent = weatherText;
      }
    })
    .catch(() => {});
}

function rememberItineraryDayScroll() {
  const picker = document.querySelector(".builder-side .day-picker, .builder-controls .day-picker, .day-picker");
  if (picker) itineraryDayPickerScrollLeft = picker.scrollLeft;
}

function restoreItineraryDayScroll() {
  requestAnimationFrame(() => {
    document.querySelectorAll(".day-picker").forEach((picker) => {
      picker.scrollLeft = itineraryDayPickerScrollLeft;
    });
  });
}

function renderHeader() {
  const isDark = state.theme === "dark";
  return el("header", { class: "topbar" }, [
    el("div", { class: "topbar-inner" }, [
      el("div", { class: "brand-line" }, [
        el("div", { class: "brand" }, [
          el("div", { class: "mountain-logo swiss-flag", "aria-label": "Swiss flag" }),
          el("div", {}, [
            el("h1", {}, ["Leysin Trip Hub"]),
            el("p", { class: "subline" }, ["June 20-30, 2026 · Rte de la Mosse 2 + Rte des Corbelets 43"])
          ])
        ]),
        el("div", { class: "weather-pill", title: "Live where the network allows it; otherwise the typical late-June daytime temperature." }, ["☀️", el("span", {}, [weatherText])]),
        el("button", {
          class: "theme-toggle",
          type: "button",
          "aria-pressed": isDark ? "true" : "false",
          onclick: toggleTheme
        }, [isDark ? "Light" : "Dark"]),
        el("button", { class: "assistant-button", type: "button", onclick: openAssistant }, ["✨ Ask Claude"]),
        el("button", { class: "print-button", onclick: () => window.print() }, ["Print / PDF"])
      ]),
      el("nav", { class: "tabs", "aria-label": "Dashboard tabs" },
        ["overview", "travel", "map"].map((tab) =>
          el("button", {
            class: `tab ${state.activeTab === tab ? "active" : ""}`,
            onclick: () => {
              state.activeTab = tab;
              render();
            }
          }, [tab === "map" ? "Map + Builder" : tab[0].toUpperCase() + tab.slice(1)])
        )
      )
    ])
  ]);
}

function toggleTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  writeStore();
  render();
}

function renderActiveTab() {
  if (state.activeTab === "travel") return renderTravel();
  if (state.activeTab === "map") return renderMapTab();
  return renderOverview();
}

function renderOverview() {
  const savedListings = listings.filter((l) => state.saved.includes(l.id)).slice(0, 4);
  const activityCount = countItineraryCategories(["activities", "hiking", "biking", "castles", "parks"]);
  const diningCount = countItineraryCategories(["dining", "bars", "wine"]);
  return el("div", { class: "grid overview-grid" }, [
    el("section", { class: "panel hero" }, [
      el("div", { class: "hero-content" }, [
        el("h2", {}, ["Leysin Trip Planner"]),
        el("p", {}, ["Open the map to filter curated places, save favorites, then build a day-by-day timeline that stays on this device."]),
        el("div", { class: "stat-row" }, [
          stat("11", "trip days"),
          stat(String(listings.length), "curated pins"),
          stat(String(diningCount), "Dining"),
          stat(String(activityCount), "Activities")
        ])
      ])
    ]),
    el("section", { class: "panel panel-pad" }, [
      title("Next Planning Moves", "Seeded from your itinerary"),
      el("div", { class: "day-list" }, tripDays.slice(0, 5).map(renderDayCard)),
      el("div", { class: "chip-row" }, [
        el("span", { class: "mini blue" }, ["Reserve: Le Kuklos"]),
        el("span", { class: "mini green" }, ["Book: MTB rental"]),
        el("span", { class: "mini red" }, ["Check: lift status"])
      ])
    ]),
    el("section", { class: "panel panel-pad" }, [
      title("Address Timing Buffers", "Use these before trains/lifts"),
      el("div", { class: "travel-list" }, [
        travelCard("Rental to Corbelets", "5-10 min by car/taxi · 25-35 min walking depending on hill direction."),
        travelCard("Rental to Leysin-Feydey / lift area", "10-20 min walking · short bus/taxi hop if timing matters."),
        travelCard("Corbelets to Leysin-Feydey", "20-30 min walking uphill · 5-10 min by taxi/local bus."),
        travelCard("Leysin to Aigle", "Roughly 25-30 min by mountain train."),
        travelCard("Leysin to Geneva Airport", "Plan 2.25-2.75 hours door-to-door with train changes.")
      ])
    ]),
    el("section", { class: "panel panel-pad" }, [
      title("Saved Highlights", `${state.saved.length} saved`),
      savedListings.length
        ? el("div", { class: "day-list" }, savedListings.map((listing) => compactListing(listing)))
        : el("div", { class: "empty" }, ["Save places from the Map tab and they will appear here."])
    ]),
    renderSharePanel()
  ]);
}

function renderSharePanel() {
  return el("section", { class: "panel panel-pad share-panel" }, [
    title("Share This Plan", "Sync across the family"),
    el("p", { class: "muted small" }, ["Your plan saves only in this browser. Use these to copy it to family members. Importing or opening a share link replaces the plan on this device."]),
    el("div", { class: "listing-actions" }, [
      el("button", { class: "primary-btn", type: "button", onclick: copyShareLink }, ["Copy share link"]),
      el("button", { class: "ghost-btn", type: "button", onclick: exportTrip }, ["Export JSON"]),
      el("label", { class: "ghost-btn import-label" }, [
        "Import JSON",
        el("input", {
          type: "file",
          accept: "application/json,.json",
          class: "visually-hidden-input",
          onchange: (event) => importTripFromFile(event.target.files[0])
        })
      ])
    ])
  ]);
}

function renderTravel() {
  return el("div", { class: "grid travel-grid" }, [
    el("section", { class: "panel panel-pad" }, [
      title("Travel Plans", state.travelSubTab === "justin-tasha" ? "Justin + Tasha" : "Family"),
      el("div", { class: "subtabs" }, [
        subTab("justin-tasha", "Justin + Tasha"),
        subTab("family", "Family")
      ]),
      state.travelSubTab === "justin-tasha" ? renderJustinTashaTravel() : renderFamilyTravel()
    ]),
    el("section", { class: "panel panel-pad" }, [
      title("Airport + Train Flow", "Practical buffers"),
      el("div", { class: "travel-list" }, [
        travelCard("Arrival day", "Land GVA 9:55 AM. After bags and train connections, expect Leysin rental arrival around 1:00-2:00 PM."),
        travelCard("Route", "Geneva Airport to Aigle, then Aigle-Leysin mountain train. Use SBB for exact timings close to travel."),
        travelCard("Departure day", "For 12:40 PM GVA flight, leave Rte de la Mosse 2 at 7:00-7:30 AM; if stopping at Corbelets first, leave 6:45-7:00 AM."),
        travelCard("Meetup default", "Use Leysin-Feydey station for train days and the rental for local dinner starts to avoid hillside backtracking.")
      ]),
      el("div", { class: "listing-actions" }, [
        el("a", { class: "primary-btn", target: "_blank", href: official.sbb }, ["Aigle-Leysin rail info"]),
        el("a", { class: "ghost-btn", target: "_blank", href: `${GMAPS}${encodeURIComponent("Rte de la Mosse 2 1854 Leysin to Geneva Airport")}` }, ["Rental to GVA map"]),
        el("a", { class: "ghost-btn", target: "_blank", href: `${GMAPS}${encodeURIComponent("Rte des Corbelets 43 1854 Leysin to Leysin-Feydey")}` }, ["Corbelets to station"])
      ])
    ])
  ]);
}

function subTab(id, label) {
  return el("button", {
    class: `subtab ${state.travelSubTab === id ? "active" : ""}`,
    onclick: () => {
      state.travelSubTab = id;
      render();
    }
  }, [label]);
}

function renderJustinTashaTravel() {
  return el("div", { class: "travel-list" }, [
    travelCard("Justin + Tasha · Fri Jun 19 · AUS to YUL", "UA 8061 · 10:25 AM to 3:23 PM · Air Canada Rouge · Seats 18E, 18D"),
    travelCard("Justin + Tasha · Fri/Sat Jun 19-20 · YUL to GVA", "UA 8390 · 8:50 PM to 9:55 AM · Air Canada · Seats 32J, 32H"),
    travelCard("Justin + Tasha · Tue Jun 30 · GVA to YUL", "UA 8391 · 12:40 PM to 2:40 PM · Air Canada · Seats 33F, 33G"),
    travelCard("Justin + Tasha · Tue Jun 30 · YUL to AUS", "UA 8046 · 4:40 PM to 7:57 PM · Air Canada Rouge · Seats 18E, 18D")
  ]);
}

function renderFamilyTravel() {
  return el("div", { class: "travel-list" }, [
    travelCard("Additional family travel", "Add family member flights, train arrivals, pickup windows, or hotel transfers here as plans are confirmed."),
    travelCard("Leysin meetup default", "Use Leysin-Feydey station for train arrivals and the rental address for local dinner starts.")
  ]);
}

function renderMapTab() {
  return el("div", { class: "map-shell" }, [
    el("div", { class: "map-toolbar" }, [
      el("input", {
        class: "map-search",
        type: "search",
        placeholder: "Search places by name, area, or tag...",
        value: state.search,
        "aria-label": "Search places",
        oninput: (event) => { state.search = event.target.value; refreshMapResults(); }
      }),
      el("div", { class: "view-toggle", role: "group", "aria-label": "Choose map or list view" }, [
        viewToggleBtn("map", "Map"),
        viewToggleBtn("list", "List")
      ])
    ]),
    el("aside", { class: "filter-rail", role: "group", "aria-label": "Filter places" }, filters().map((filter) =>
        el("button", {
          class: `filter-chip filter-${filter.id} ${isFilterActive(filter.id) ? "active" : ""}`,
          type: "button",
          "aria-pressed": isFilterActive(filter.id) ? "true" : "false",
          onclick: () => toggleFilter(filter.id)
        }, [filter.label])
      )
    ),
    el("div", { class: "map-grid" }, [
      state.mapView === "list"
        ? el("section", { class: "panel list-wrap" }, [renderListView()])
        : el("section", { class: "panel map-wrap" }, [
            getMapNode(),
            renderMapLegend()
          ]),
      el("aside", { class: "builder-side grid" }, [
        renderMapBuilderPanel(),
        el("section", { class: "panel panel-pad" }, [
          title("Add Custom Item", "Saved locally"),
          renderCustomForm()
        ])
      ])
    ])
  ]);
}

function viewToggleBtn(view, label) {
  return el("button", {
    class: `toggle-btn ${state.mapView === view ? "active" : ""}`,
    type: "button",
    "aria-pressed": state.mapView === view ? "true" : "false",
    onclick: () => { state.mapView = view; render(); }
  }, [label]);
}

function renderListView() {
  const rows = filteredListings();
  return el("div", { class: "list-view" }, [
    el("div", { class: "list-head" }, [
      el("span", { class: "muted small", id: "list-count" }, [`${rows.length} places`]),
      el("label", { class: "sort-label" }, [
        "Sort: ",
        el("select", { "aria-label": "Sort places", onchange: (event) => { state.sort = event.target.value; render(); } }, [
          sortOption("trip", "Trip fit"),
          sortOption("name", "Name"),
          sortOption("area", "Area")
        ])
      ])
    ]),
    el("div", { class: "list-results", id: "list-results" },
      rows.length ? rows.map((listing) => renderListingCard(listing)) : [el("div", { class: "empty" }, ["No places match these filters."])]
    )
  ]);
}

function sortOption(value, label) {
  return el("option", { value, selected: state.sort === value ? "selected" : null }, [label]);
}

function refreshMapResults() {
  if (state.mapView === "list") {
    const node = document.getElementById("list-results");
    const count = document.getElementById("list-count");
    if (node) {
      const rows = filteredListings();
      node.innerHTML = "";
      if (rows.length) rows.forEach((listing) => node.append(renderListingCard(listing)));
      else node.append(el("div", { class: "empty" }, ["No places match these filters."]));
      if (count) count.textContent = `${rows.length} places`;
    }
  } else if (state.activeTab === "map") {
    initMap();
  }
}

const categoryLegend = [
  { category: "dining", label: "Dining" },
  { category: "bars", label: "Bars" },
  { category: "wine", label: "Wine" },
  { category: "activities", label: "Activities" },
  { category: "hiking", label: "Hikes" },
  { category: "biking", label: "Biking" },
  { category: "castles", label: "Castles" },
  { category: "parks", label: "Parks" },
  { category: "viewpoints", label: "Views" },
  { category: "lake", label: "Lake" }
];

function renderMapLegend() {
  return el("details", { class: "map-legend" }, [
    el("summary", {}, ["Legend"]),
    el("div", { class: "legend-grid" }, categoryLegend.map((entry) =>
      el("span", { class: "legend-row" }, [
        el("span", { class: "legend-pin", style: `background:${markerColor(entry.category)}` }, [iconText(entry.category)]),
        entry.label
      ])
    ).concat([
      el("span", { class: "legend-row" }, [
        el("span", { class: "legend-pin legend-star" }, ["★"]),
        "On your itinerary"
      ])
    ]))
  ]);
}

function renderMapBuilderPanel() {
  const dayItems = state.itinerary
    .filter((entry) => entry.day === state.selectedDay)
    .sort((a, b) => `${a.start}${a.title}`.localeCompare(`${b.start}${b.title}`));
  return el("section", { class: "panel panel-pad" }, [
    title("Itinerary Builder", `${filteredListings().length} map results`),
    el("p", { class: "muted small builder-help" }, ["Filter or select pins on the map. Add locations from pin popups; starred pins are already on your itinerary."]),
    renderHomeFilterStatus(),
    el("div", { class: "day-picker" }, tripDays.map((day) =>
      el("button", {
        class: `day-pill ${state.selectedDay === day.date ? "active" : ""}`,
        onclick: () => {
          selectDay(day.date);
        }
      }, [day.short, el("br"), day.title.split(" ").slice(0, 2).join(" ")])
    )),
    el("div", { class: "timeline-list" }, [
      renderSelectedDayTiming(),
      dayItems.length
        ? el("div", { class: "timeline-list" }, dayItems.map((entry, index) => renderTimelineItem(entry, index, dayItems.length)))
        : el("div", { class: "empty" }, ["No items yet for this day. Select a pin and use Add from its popup, or add a custom item below."])
    ])
  ]);
}

function renderSelectedDayTiming() {
  const day = tripDays.find((candidate) => candidate.date === state.selectedDay);
  return day ? el("div", { class: "day-timing-note" }, [
    el("strong", {}, [`Day Timing Anchor · ${day.short}`]),
    el("p", { class: "small muted" }, [day.note])
  ]) : el("span");
}

function renderHomeFilterStatus() {
  const homesActive = state.homesOnly;
  const selected = listings.find((listing) => listing.id === state.selectedListingId);
  return el("div", { class: "origin-status" }, [
    selected
      ? el("span", { class: "mini red" }, [`Selected: ${selected.name}`])
      : homesActive
      ? el("span", { class: "mini blue" }, ["Homes: Mosse base + Corbelets 43"])
      : el("span"),
    selected
      ? el("button", { class: "origin-clear", onclick: clearSelectedListing }, ["Clear selection"])
      : homesActive
      ? el("span", { class: "home-links" }, homeLocations.map((home) =>
          el("a", { class: "origin-clear", href: home.googleMapsUrl, target: "_blank", rel: "noreferrer" }, [home.short])
        ))
      : el("span")
  ]);
}

function renderBuilder() {
  const dayItems = state.itinerary
    .filter((entry) => entry.day === state.selectedDay)
    .sort((a, b) => `${a.start}${a.title}`.localeCompare(`${b.start}${b.title}`));
  const savedListings = listings.filter((l) => state.saved.includes(l.id));
  return el("div", { class: "grid builder-grid" }, [
    el("section", { class: "panel panel-pad" }, [
      title("Timeline Builder", tripDays.find((d) => d.date === state.selectedDay)?.title || "Custom day"),
      el("div", { class: "builder-controls" }, [
        el("div", { class: "day-picker" }, tripDays.map((day) =>
          el("button", {
            class: `day-pill ${state.selectedDay === day.date ? "active" : ""}`,
            onclick: () => {
              selectDay(day.date);
            }
          }, [day.short, el("br"), day.title.split(" ").slice(0, 2).join(" ")])
        ))
      ]),
      dayItems.length ? el("div", { class: "timeline" }, dayItems.map((entry, index) => renderTimelineItem(entry, index, dayItems.length))) : el("div", { class: "empty" }, ["No items yet for this day. Add a custom block or add a saved place."])
    ]),
    el("aside", { class: "builder-side grid" }, [
      el("section", { class: "panel panel-pad" }, [
        title("Add Custom Item", "Saved locally"),
        renderCustomForm()
      ]),
      el("section", { class: "panel panel-pad" }, [
        title("Saved Places", `${savedListings.length} favorites`),
        savedListings.length
          ? el("div", { class: "day-list" }, savedListings.map((listing) => savedRow(listing)))
          : el("div", { class: "empty" }, ["Save places from the Map tab first, or use the custom item form."])
      ])
    ])
  ]);
}

function renderMapItineraryStrip() {
  const preview = state.itinerary
    .filter((entry) => entry.day === state.selectedDay)
    .sort((a, b) => `${a.start}${a.title}`.localeCompare(`${b.start}${b.title}`))
    .slice(0, 5);
  return el("div", { class: "map-itinerary-strip" }, [
    el("div", { class: "strip-head" }, [
      el("strong", {}, [`Itinerary · ${tripDays.find((d) => d.date === state.selectedDay)?.short || "Selected day"}`]),
      el("button", { class: "ghost-btn", onclick: () => { state.activeTab = "builder"; render(); } }, ["Edit"])
    ]),
    preview.length
      ? el("div", { class: "strip-blocks" }, preview.map((entry) =>
          el("div", { class: `strip-block ${entry.category.toLowerCase().includes("dining") ? "food" : ""}` }, [
            el("strong", {}, [entry.start]),
            el("p", { class: "small muted" }, [entry.title])
          ])
        ))
      : el("div", { class: "empty" }, ["Add places to see the day timeline here."])
  ]);
}

function title(left, right) {
  return el("div", { class: "section-title" }, [
    el("h2", {}, [left]),
    right ? el("span", { class: "tag" }, [right]) : el("span")
  ]);
}

function stat(value, label) {
  return el("div", { class: "stat" }, [el("strong", {}, [value]), el("span", {}, [label])]);
}

function travelCard(name, detail) {
  return el("div", { class: "travel-card" }, [
    el("strong", {}, [name]),
    el("p", { class: "muted small" }, [detail])
  ]);
}

function countItineraryCategories(categories) {
  return state.itinerary.reduce((count, entry) => {
    const place = getPlaceById(entry.listingId);
    if (place && categories.includes(place.category)) return count + 1;
    const normalized = normalizeItineraryCategory(entry.category);
    return categories.includes(normalized) ? count + 1 : count;
  }, 0);
}

function normalizeItineraryCategory(category = "") {
  const value = category.toLowerCase();
  if (value.includes("dining") || value.includes("bar")) return "dining";
  if (value.includes("wine")) return "wine";
  if (value.includes("bike") || value.includes("biking")) return "biking";
  if (value.includes("hike") || value.includes("mountain")) return "hiking";
  if (value.includes("castle") || value.includes("culture")) return "castles";
  if (value.includes("park")) return "parks";
  if (value.includes("activity") || value.includes("day trip") || value.includes("lake")) return "activities";
  return value;
}

function renderDayCard(day) {
  return el("article", { class: "day-card" }, [
    el("div", { class: "day-head" }, [
      el("strong", {}, [`${day.short}: ${day.title}`]),
      el("span", { class: "mini green" }, [day.dining])
    ]),
    el("p", { class: "muted small" }, [day.note])
  ]);
}

function filters() {
  return [
    { id: "all", label: "All" },
    { id: "homes", label: "Homes" },
    { id: "dining", label: "Dining" },
    { id: "bars", label: "Bars" },
    { id: "wine", label: "Wine" },
    { id: "activities", label: "Activities" },
    { id: "hiking", label: "Hikes" },
    { id: "biking", label: "Biking" },
    { id: "castles", label: "Castles" },
    { id: "parks", label: "Parks" },
    { id: "rainy", label: "Rainy Day" },
    { id: "clear", label: "Clear Weather" },
    { id: "moderate", label: "Moderate" }
  ];
}

const FILTER_GROUPS = {
  dining: "category", bars: "category", wine: "category", activities: "category",
  hiking: "category", biking: "category", castles: "category", parks: "category",
  rainy: "condition", clear: "condition", moderate: "condition"
};

function toggleFilter(id) {
  state.selectedListingId = null;
  if (id === "all") {
    state.categoryFilters.clear();
    state.conditionFilters.clear();
    state.homesOnly = false;
  } else if (id === "homes") {
    state.homesOnly = !state.homesOnly;
  } else {
    const group = FILTER_GROUPS[id] === "condition" ? state.conditionFilters : state.categoryFilters;
    group.has(id) ? group.delete(id) : group.add(id);
  }
  render();
}

function isFilterActive(id) {
  if (id === "all") return state.categoryFilters.size === 0 && state.conditionFilters.size === 0 && !state.homesOnly;
  if (id === "homes") return state.homesOnly;
  return state.categoryFilters.has(id) || state.conditionFilters.has(id);
}

function filteredListings() {
  const search = state.search.trim().toLowerCase();
  const homesFilter = state.homesOnly;
  if (state.selectedListingId) {
    const selected = listings.find((listing) => listing.id === state.selectedListingId);
    return selected ? [selected] : [];
  }
  const cats = state.categoryFilters;
  const conds = state.conditionFilters;
  let rows = listings.filter((listing) => {
    const categoryOk = cats.size === 0 || cats.has(listing.category);
    const conditionOk = conds.size === 0 || [...conds].some((condition) =>
      listing.weather.includes(condition) || listing.tags.includes(condition) || listing.effort === condition
    );
    const effortOk = state.effort === "all" || listing.effort === state.effort;
    const searchOk = !search || [listing.name, listing.area, listing.description, listing.subcategory, ...listing.tags].join(" ").toLowerCase().includes(search);
    const originOk = !homesFilter || isReachableFromAnyHome(listing);
    return categoryOk && conditionOk && effortOk && searchOk && originOk;
  });
  const priorityScore = (listing) => listing.priority === "Must" ? 0 : 1;
  if (state.sort === "name") rows.sort((a, b) => a.name.localeCompare(b.name));
  else if (state.sort === "area") rows.sort((a, b) => a.area.localeCompare(b.area) || priorityScore(a) - priorityScore(b));
  else rows.sort((a, b) => {
    if (homesFilter) {
      const timeDiff = Math.min(travelSortValue(a, "home-rental"), travelSortValue(a, "home-family")) - Math.min(travelSortValue(b, "home-rental"), travelSortValue(b, "home-family"));
      if (timeDiff) return timeDiff;
    }
    return priorityScore(a) - priorityScore(b) || a.category.localeCompare(b.category) || a.name.localeCompare(b.name);
  });
  return rows;
}

function isReachableFromAnyHome(listing) {
  return isReachableFromOrigin(listing, "home-rental") || isReachableFromOrigin(listing, "home-family");
}

function mapListings() {
  const selected = state.selectedListingId;
  state.selectedListingId = null;
  const rows = filteredListings();
  state.selectedListingId = selected;
  return rows;
}

function isReachableFromOrigin(listing, originId) {
  const estimate = originId === "corbelets" ? listing.travelTimes.corbelets : listing.travelTimes.rental;
  const minutes = travelSortValue(listing, originId);
  const text = estimate.toLowerCase();
  if (text.includes("local") || text.includes("start") || text.includes("lift") || text.includes("walk")) return true;
  return minutes <= 60;
}

function travelSortValue(listing, originId) {
  const estimate = (originId === "corbelets" ? listing.travelTimes.corbelets : listing.travelTimes.rental).toLowerCase();
  if (estimate.includes("local") || estimate.includes("start")) return 0;
  const minuteMatch = estimate.match(/(\d+)(?:\.\d+)?\s*-\s*(\d+)(?:\.\d+)?\s*min|(\d+)(?:\.\d+)?\s*min/);
  if (minuteMatch) return Number(minuteMatch[1] || minuteMatch[3] || 999);
  if (estimate.includes("lift") || estimate.includes("walk")) return 20;
  const hourMatch = estimate.match(/(\d+(?:\.\d+)?)\s*-\s*(\d+(?:\.\d+)?)\s*hr|(\d+(?:\.\d+)?)\s*hr/);
  if (hourMatch) return Math.round(Number(hourMatch[1] || hourMatch[3] || 99) * 60);
  const anyNumber = estimate.match(/(\d+)/);
  return anyNumber ? Number(anyNumber[1]) : 999;
}

function input(label, value, onChange) {
  return el("input", {
    value,
    placeholder: label,
    oninput: (event) => onChange(event.target.value),
    "aria-label": label
  });
}

function select(values, value, onChange) {
  const labels = {
    all: "All effort",
    easy: "Easy",
    moderate: "Moderate",
    hard: "Hard",
    trip: "Trip fit",
    name: "Name",
    area: "Area"
  };
  return el("select", { value, onchange: (event) => onChange(event.target.value) },
    values.map((option) => el("option", { value: option, selected: option === value ? "selected" : null }, [labels[option] || option]))
  );
}

function renderListingCard(listing) {
  const saved = state.saved.includes(listing.id);
  const selected = state.selectedListingId === listing.id;
  const inItinerary = isListingInItinerary(listing.id);
  return el("article", { class: `listing-card ${selected ? "selected" : ""}` }, [
    el("div", {
      class: "listing-photo",
      style: `background-image: url('${imageFor(listing)}')`
    }, [el("span", { class: "photo-icon" }, [categoryIcon(listing.category)])]),
    el("div", { class: "listing-content" }, [
      el("div", { class: "listing-title" }, [
        el("h3", {}, [listing.name]),
        el("span", { class: "priority" }, [inItinerary ? "★" : listing.priority])
      ]),
      el("div", { class: "listing-meta" }, [
        el("span", { class: "mini blue" }, [categoryLabels[listing.category] || listing.category]),
        el("span", { class: "mini" }, [listing.effort]),
        el("span", { class: "mini green" }, [listing.price])
      ]),
      el("p", {}, [listing.description]),
      el("div", { class: "chip-row" }, [
        el("span", { class: "mini" }, [`Mosse: ${listing.travelTimes.rental}`]),
        el("span", { class: "mini" }, [`Corbelets: ${listing.travelTimes.corbelets}`])
      ]),
      el("div", { class: "listing-actions" }, [
        el("button", { class: "ghost-btn", onclick: () => selectListing(listing.id) }, [selected ? "Focused" : "Focus"]),
        el("button", { class: `ghost-btn ${saved ? "saved" : ""}`, onclick: () => toggleSave(listing.id) }, [saved ? "Saved" : "Save"]),
        el("button", { class: "ghost-btn", onclick: () => addListingToDay(listing) }, ["Add to day"]),
        el("a", { class: "primary-btn", href: listing.googleMapsUrl, target: "_blank", rel: "noreferrer" }, ["Google Maps"]),
        el("a", { class: "ghost-btn", href: listing.officialUrl, target: "_blank", rel: "noreferrer" }, ["Official"])
      ])
    ])
  ]);
}

function compactListing(listing) {
  return el("div", { class: "saved-row" }, [
    el("strong", {}, [listing.name]),
    el("p", { class: "muted small" }, [`${categoryLabels[listing.category]} · ${listing.area} · ${listing.price}`])
  ]);
}

function savedRow(listing) {
  return el("div", { class: "saved-row" }, [
    el("strong", {}, [listing.name]),
    el("p", { class: "muted small" }, [`${listing.area} · ${listing.price}`]),
    el("div", { class: "listing-actions" }, [
      el("button", { class: "ghost-btn", onclick: () => addListingToDay(listing) }, ["Add to selected day"]),
      el("button", { class: "danger-btn", onclick: () => toggleSave(listing.id) }, ["Remove"])
    ])
  ]);
}

function renderTimelineItem(entry, index, count) {
  if (state.editingItemId === entry.id) return renderTimelineEditor(entry);
  const place = getPlaceById(entry.listingId);
  const body = [
    el("strong", {}, [entry.title]),
    el("p", { class: "muted small" }, [`${entry.category} · ${entry.cost || "Cost TBD"} · ${statusLabel(entry.status)}`]),
    entry.notes ? el("p", { class: "small" }, [entry.notes]) : el("span")
  ];
  const titleBlock = place
    ? el("button", {
        class: "timeline-open",
        type: "button",
        "aria-label": `Show ${entry.title} on the map`,
        onclick: () => selectPlaceFromItinerary(entry.listingId)
      }, body)
    : el("div", { class: "timeline-open static" }, body);
  return el("article", { class: `timeline-card ${place ? "selectable" : ""}` }, [
    el("div", { class: "timeline-top" }, [
      el("div", { class: "time" }, [`${entry.start}-${entry.end}`]),
      titleBlock
    ]),
    el("div", { class: "timeline-actions" }, [
      el("button", { class: "ghost-btn", type: "button", onclick: () => shiftItem(entry.id, -1), disabled: index === 0 ? "disabled" : null, "aria-label": `Move ${entry.title} earlier` }, ["Move up"]),
      el("button", { class: "ghost-btn", type: "button", onclick: () => shiftItem(entry.id, 1), disabled: index === count - 1 ? "disabled" : null, "aria-label": `Move ${entry.title} later` }, ["Move down"]),
      el("button", { class: "ghost-btn", type: "button", onclick: () => startEditItem(entry.id) }, ["Edit"]),
      place ? el("button", { class: "ghost-btn", type: "button", onclick: () => selectPlaceFromItinerary(entry.listingId) }, ["Map"]) : el("span"),
      el("button", { class: "danger-btn", type: "button", onclick: () => removeItem(entry.id), "aria-label": `Remove ${entry.title}` }, ["Remove"])
    ])
  ]);
}

function statusLabel(status) {
  return { planned: "Planned", reserve: "Needs reservation", booked: "Booked", backup: "Backup", optional: "Optional" }[status] || status;
}

function renderTimelineEditor(entry) {
  return el("article", { class: "timeline-card editing" }, [
    el("form", {
      class: "item-form inline-edit",
      onsubmit: (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        saveItemEdit(entry.id, {
          title: data.get("title") || entry.title,
          start: data.get("start") || entry.start,
          end: data.get("end") || entry.end,
          category: data.get("category") || entry.category,
          cost: data.get("cost") || "",
          status: data.get("status") || entry.status,
          notes: data.get("notes") || ""
        });
      }
    }, [
      el("input", { name: "title", value: entry.title, placeholder: "Title", required: "required", "aria-label": "Title" }),
      el("div", { class: "form-grid" }, [
        el("input", { name: "start", type: "time", value: entry.start, "aria-label": "Start time" }),
        el("input", { name: "end", type: "time", value: entry.end, "aria-label": "End time" })
      ]),
      el("div", { class: "form-grid" }, [
        el("input", { name: "category", value: entry.category, placeholder: "Category", "aria-label": "Category" }),
        el("input", { name: "cost", value: entry.cost || "", placeholder: "Cost", "aria-label": "Cost" })
      ]),
      el("select", { name: "status", "aria-label": "Status" }, ["planned", "reserve", "booked", "backup", "optional"].map((status) =>
        el("option", { value: status, selected: entry.status === status ? "selected" : null }, [statusLabel(status)])
      )),
      el("textarea", { name: "notes", placeholder: "Notes, confirmation, weather backup...", "aria-label": "Notes" }, [entry.notes || ""]),
      el("div", { class: "listing-actions" }, [
        el("button", { class: "primary-btn", type: "submit" }, ["Save"]),
        el("button", { class: "ghost-btn", type: "button", onclick: cancelEditItem }, ["Cancel"])
      ])
    ])
  ]);
}

function startEditItem(id) {
  state.editingItemId = id;
  render();
}

function cancelEditItem() {
  state.editingItemId = null;
  render();
}

function saveItemEdit(id, data) {
  const entry = state.itinerary.find((candidate) => candidate.id === id);
  if (entry) {
    Object.assign(entry, data);
    writeStore();
  }
  state.editingItemId = null;
  render();
}

function renderCustomForm() {
  const form = el("form", {
    class: "item-form",
    onsubmit: (event) => {
      event.preventDefault();
      const data = new FormData(event.target);
      state.itinerary.push(item(
        state.selectedDay,
        data.get("start") || "10:00",
        data.get("end") || "11:00",
        data.get("title") || "Custom item",
        data.get("category") || "Custom",
        data.get("notes") || "",
        data.get("cost") || "",
        data.get("status") || "planned"
      ));
      writeStore();
      render();
    }
  }, [
    el("input", { name: "title", placeholder: "Title", required: "required" }),
    el("div", { class: "form-grid" }, [
      el("input", { name: "start", type: "time", value: "10:00", "aria-label": "Start time" }),
      el("input", { name: "end", type: "time", value: "11:00", "aria-label": "End time" })
    ]),
    el("div", { class: "form-grid" }, [
      el("input", { name: "category", placeholder: "Category", value: "Custom" }),
      el("input", { name: "cost", placeholder: "Cost" })
    ]),
    el("select", { name: "status" }, [
      el("option", { value: "planned" }, ["Planned"]),
      el("option", { value: "reserve" }, ["Needs reservation"]),
      el("option", { value: "booked" }, ["Booked"]),
      el("option", { value: "backup" }, ["Backup"])
    ]),
    el("textarea", { name: "notes", placeholder: "Notes, confirmation, weather backup..." }),
    el("button", { class: "primary-btn", type: "submit" }, ["Add to selected day"])
  ]);
  return form;
}

function renderAddModal() {
  const place = getPlaceById(state.pendingAddId);
  if (!place) return el("span");
  return el("div", { class: "modal-backdrop", onclick: (event) => { if (event.target.className === "modal-backdrop") closeAddModal(); } }, [
    el("form", {
      class: "add-modal",
      onsubmit: (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        addPlaceToItinerary(place, {
          day: data.get("day"),
          start: data.get("start"),
          end: data.get("end"),
          status: data.get("status"),
          notes: data.get("notes")
        });
      }
    }, [
      el("div", { class: "section-title" }, [
        el("h2", {}, ["Add to itinerary"]),
        el("button", { class: "origin-clear", type: "button", onclick: closeAddModal }, ["Close"])
      ]),
      el("strong", {}, [place.name]),
      el("p", { class: "muted small" }, [place.description || place.address || "Trip location"]),
      el("select", { name: "day" }, tripDays.map((day) =>
        el("option", { value: day.date, selected: day.date === state.selectedDay ? "selected" : null }, [`${day.short} · ${day.title}`])
      )),
      el("div", { class: "form-grid" }, [
        el("input", { name: "start", type: "time", value: defaultStartForPlace(place), "aria-label": "Start time" }),
        el("input", { name: "end", type: "time", value: defaultEndForPlace(place), "aria-label": "End time" })
      ]),
      el("select", { name: "status" }, [
        el("option", { value: "planned" }, ["Planned"]),
        el("option", { value: "reserve" }, ["Needs reservation"]),
        el("option", { value: "booked" }, ["Booked"]),
        el("option", { value: "backup" }, ["Backup"])
      ]),
      el("textarea", { name: "notes", placeholder: "Notes, confirmation, route details..." }, [defaultNotesForPlace(place)]),
      el("button", { class: "primary-btn", type: "submit" }, ["Add"])
    ])
  ]);
}

function iconText(category) {
  return {
    dining: "DI",
    bars: "BA",
    activities: "AC",
    parks: "PA",
    hiking: "HI",
    biking: "BI",
    castles: "CA",
    viewpoints: "VI",
    wine: "WI",
    lake: "LA"
  }[category] || "GO";
}

function categoryIcon(category) {
  return {
    dining: "🍽",
    bars: "🍷",
    activities: "☀",
    parks: "🌲",
    hiking: "🥾",
    biking: "🚵",
    castles: "🏰",
    viewpoints: "▲",
    wine: "🍇",
    lake: "≈"
  }[category] || "•";
}

function imageFor(listing) {
  const images = {
    dining: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=520&q=82",
    bars: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=520&q=82",
    activities: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=520&q=82",
    parks: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=520&q=82",
    hiking: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=520&q=82",
    biking: "https://images.unsplash.com/photo-1544191696-15693072e3b5?auto=format&fit=crop&w=520&q=82",
    castles: "https://images.unsplash.com/photo-1520637836862-4d197d17c90a?auto=format&fit=crop&w=520&q=82",
    viewpoints: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=520&q=82",
    wine: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=520&q=82",
    lake: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=520&q=82"
  };
  return images[listing.category] || images.activities;
}

function toggleSave(id) {
  state.saved = state.saved.includes(id) ? state.saved.filter((savedId) => savedId !== id) : [...state.saved, id];
  writeStore();
  render();
}

function isListingInItinerary(id) {
  return state.itinerary.some((entry) => entry.listingId === id);
}

function openAddModal(id) {
  state.pendingAddId = id;
  render();
}

function closeAddModal() {
  state.pendingAddId = null;
  render();
}

function getPlaceById(id) {
  return listings.find((listing) => listing.id === id) || homeLocations.find((home) => home.id === id) || null;
}

function addPlaceToItinerary(place, details) {
  const category = place.category ? categoryLabels[place.category] || place.category : "Home";
  state.itinerary.push(item(
    details.day || state.selectedDay,
    details.start || defaultStartForPlace(place),
    details.end || defaultEndForPlace(place),
    place.name,
    category,
    details.notes || defaultNotesForPlace(place),
    place.price || "0",
    details.status || "planned",
    place.id
  ));
  if (!state.saved.includes(place.id)) state.saved.push(place.id);
  state.selectedDay = details.day || state.selectedDay;
  state.pendingAddId = null;
  writeStore();
  render();
}

function defaultStartForPlace(place) {
  return place.category === "dining" || place.category === "bars" || place.category === "wine" ? "18:30" : "10:00";
}

function defaultEndForPlace(place) {
  return place.category === "dining" || place.category === "bars" || place.category === "wine" ? "20:00" : "12:00";
}

function defaultNotesForPlace(place) {
  if (place.address) return `${place.description}. ${place.address}`;
  return `${place.description} Travel from rental: ${place.travelTimes.rental}; from Corbelets: ${place.travelTimes.corbelets}.`;
}

function selectListing(id) {
  rememberMapView();
  const wasSelected = state.selectedListingId === id;
  state.selectedListingId = wasSelected ? null : id;
  state.activeTab = "map";
  if (!wasSelected) {
    const listing = listings.find((candidate) => candidate.id === id);
    if (listing) mapViewState = { center: listing.coordinates, zoom: 15 };
  }
  render();
}

function selectDay(date) {
  if (state.selectedDay === date) {
    fitRouteOnNextMapRender = true;
  } else {
    state.selectedDay = date;
    state.selectedListingId = null;
    fitRouteOnNextMapRender = true;
  }
  state.activeTab = "map";
  render();
}

function selectPlaceFromItinerary(id) {
  const place = getPlaceById(id);
  if (!place) return;
  rememberMapView();
  state.activeTab = "map";
  state.selectedListingId = place.category ? id : null;
  mapViewState = { center: place.coordinates, zoom: 15 };
  render();
}

function clearSelectedListing() {
  rememberMapView();
  state.selectedListingId = null;
  render();
}

function rememberMapView() {
  if (map && state.activeTab === "map") {
    const center = map.getCenter();
    mapViewState = {
      center: [center.lat, center.lng],
      zoom: map.getZoom()
    };
  }
}

function addListingToDay(listing) {
  openAddModal(listing.id);
}

function removeItem(id) {
  state.itinerary = state.itinerary.filter((entry) => entry.id !== id);
  writeStore();
  render();
}

// Editing is handled inline via startEditItem / renderTimelineEditor / saveItemEdit.

function shiftItem(id, direction) {
  const dayItems = state.itinerary
    .filter((entry) => entry.day === state.selectedDay)
    .sort((a, b) => `${a.start}${a.title}`.localeCompare(`${b.start}${b.title}`));
  const index = dayItems.findIndex((entry) => entry.id === id);
  const swapWith = index + direction;
  if (index < 0 || swapWith < 0 || swapWith >= dayItems.length) return;
  const a = dayItems[index];
  const b = dayItems[swapWith];
  [a.start, b.start] = [b.start, a.start];
  [a.end, b.end] = [b.end, a.end];
  writeStore();
  render();
}

function getMapNode() {
  if (!mapNode) {
    mapNode = el("div", { id: "map", role: "application", "aria-label": "Leysin area OpenStreetMap" });
  }
  return mapNode;
}

function initMap() {
  if (state.activeTab !== "map" || state.mapView !== "map") return;
  if (!window.L) {
    renderFallbackMap();
    return;
  }
  const visiblePins = mapListings();
  const container = mapNode || document.getElementById("map");
  if (!container) return;
  // Reuse the existing map instance when possible so tiles are not reloaded
  // and the view does not flicker on every interaction.
  if (!map || map.getContainer() !== container) {
    if (map) { map.remove(); map = null; }
    map = L.map(container, { scrollWheelZoom: true }).setView(mapViewState?.center || [46.35, 7.02], mapViewState?.zoom || 10);
    map.scrollWheelZoom.enable();
    container.addEventListener("wheel", (event) => event.stopPropagation(), { passive: true });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);
    markerLayer = L.layerGroup().addTo(map);
  } else {
    map.invalidateSize();
    markerLayer.clearLayers();
  }
  homeLocations.forEach((home) => {
    const inItinerary = isListingInItinerary(home.id);
    const marker = L.marker(home.coordinates, {
      icon: L.divIcon({
        className: "",
        html: `<div class="home-map-marker ${state.homesOnly ? "active" : ""} ${inItinerary ? "starred" : ""}" style="background:${home.color}" title="${home.address}" role="button" aria-label="${home.address}. Homes filter marker.">${inItinerary ? "★" : home.short === "Mosse" ? "M" : "C"}</div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 15]
      })
    });
    marker.bindPopup(`
      <div class="popup-title">${home.name}</div>
      <div>${home.address}</div>
      <div>${home.description}</div>
      <div class="popup-actions">
        <button type="button" onclick="window.tripHubActions.add('${home.id}')">Add</button>
        <a href="${home.googleMapsUrl}" target="_blank" rel="noreferrer">Google Maps</a>
      </div>
    `);
    marker.on("click", () => {
      state.homesOnly = !state.homesOnly;
      render();
    });
    marker.addTo(markerLayer);
  });
  let selectedMarker = null;
  visiblePins.forEach((listing) => {
    const isSelected = state.selectedListingId === listing.id;
    const inItinerary = isListingInItinerary(listing.id);
    const glyph = inItinerary ? "★" : iconText(listing.category);
    const marker = L.marker(listing.coordinates, {
      title: listing.name,
      keyboard: true,
      icon: L.divIcon({
        className: "",
        html: `<div class="place-pin ${isSelected ? "selected" : ""} ${inItinerary ? "starred" : ""} ${listing.priority === "Must" ? "must" : ""}" style="background:${markerColor(listing.category)}" aria-label="${escapeHtml(listing.name)}, ${escapeHtml(categoryLabels[listing.category] || listing.category)}">${glyph}</div>`,
        iconSize: [26, 26],
        iconAnchor: [13, 13]
      })
    });
    marker.bindPopup(renderListingPopup(listing));
    marker.on("click", () => selectListing(listing.id));
    marker.addTo(markerLayer);
    if (isSelected) selectedMarker = marker;
  });
  drawDayRoute(map, markerLayer);
  const selected = listings.find((listing) => listing.id === state.selectedListingId);
  if (fitRouteOnNextMapRender && fitMapToSelectedDayRoute()) {
    fitRouteOnNextMapRender = false;
  } else if (selected) {
    map.setView(selected.coordinates, 15, { animate: false });
    if (selectedMarker) selectedMarker.openPopup();
  } else if (mapViewState) {
    map.setView(mapViewState.center, mapViewState.zoom, { animate: false });
  } else if (visiblePins.length) {
    const bounds = L.latLngBounds([...homeLocations.map((home) => home.coordinates), ...visiblePins.map((listing) => listing.coordinates)]);
    map.fitBounds(bounds.pad(0.18));
  }
}

function fitMapToSelectedDayRoute() {
  if (!window.L || !map) return false;
  const coordinates = selectedDayRouteCoordinates();
  if (coordinates.length < 2) return false;
  map.fitBounds(L.latLngBounds(coordinates).pad(0.18), { animate: false, maxZoom: 14 });
  mapViewState = {
    center: [map.getCenter().lat, map.getCenter().lng],
    zoom: map.getZoom()
  };
  return true;
}

function selectedDayRouteCoordinates() {
  return uniqueRouteCoordinates(state.itinerary
    .filter((entry) => entry.day === state.selectedDay)
    .sort((a, b) => `${a.start}${a.title}`.localeCompare(`${b.start}${b.title}`))
    .map((entry) => getPlaceById(entry.listingId)?.coordinates)
    .filter(Boolean));
}

function drawDayRoute(activeMap, layer) {
  const points = state.itinerary
    .filter((entry) => entry.day === state.selectedDay)
    .sort((a, b) => `${a.start}${a.title}`.localeCompare(`${b.start}${b.title}`))
    .map((entry) => getPlaceById(entry.listingId))
    .filter(Boolean);
  if (points.length < 2 || !window.L) return;
  const coordinates = uniqueRouteCoordinates(points.map((place) => place.coordinates));
  if (coordinates.length < 2) return;
  const requestId = ++routeRequestSerial;
  const fallbackLine = L.polyline(coordinates, {
    color: "#dc3d26",
    weight: 3,
    opacity: 0.45,
    dashArray: "6 10",
    interactive: false
  }).addTo(layer);
  fallbackLine.bringToBack();

  fetchStreetRoute(coordinates)
    .then((routeCoordinates) => {
      if (requestId !== routeRequestSerial || layer !== markerLayer || !routeCoordinates.length) return;
      layer.removeLayer(fallbackLine);
      const routeLine = L.polyline(routeCoordinates, {
        color: "#dc3d26",
        weight: 5,
        opacity: 0.82,
        interactive: false
      }).addTo(layer);
      routeLine.bringToBack();
    })
    .catch(() => {
      fallbackLine.setStyle({ opacity: 0.58 });
    });
}

function uniqueRouteCoordinates(coordinates) {
  return coordinates.filter((coordinate, index) => {
    const previous = coordinates[index - 1];
    return !previous || previous[0] !== coordinate[0] || previous[1] !== coordinate[1];
  });
}

async function fetchStreetRoute(coordinates) {
  const key = coordinates.map(([lat, lng]) => `${lat.toFixed(5)},${lng.toFixed(5)}`).join("|");
  if (routeCache.has(key)) return routeCache.get(key);
  const waypointText = coordinates.map(([lat, lng]) => `${lng},${lat}`).join(";");
  const url = `https://router.project-osrm.org/route/v1/driving/${waypointText}?overview=full&geometries=geojson&continue_straight=false`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Route request failed");
  const data = await response.json();
  const route = data.routes?.[0]?.geometry?.coordinates;
  if (!route?.length) throw new Error("Route unavailable");
  const routeCoordinates = route.map(([lng, lat]) => [lat, lng]);
  routeCache.set(key, routeCoordinates);
  return routeCoordinates;
}

function renderFallbackMap() {
  const mapNode = document.getElementById("map");
  if (!mapNode) return;
  const filtered = filteredListings();
  const visiblePins = mapListings();
  mapNode.innerHTML = "";
  const fallbackLayer = el("div", { class: "fallback-map-layer", style: `transform: scale(${fallbackMapZoom})` }, [
    el("div", { class: "map-river" }),
    el("div", { class: "map-route" }),
    el("span", { class: "map-label", style: "left: 53%; top: 44%;" }, ["Leysin"]),
    el("span", { class: "map-label", style: "left: 38%; top: 63%;" }, ["Aigle"]),
    el("span", { class: "map-label", style: "left: 25%; top: 75%;" }, ["Montreux"]),
    el("span", { class: "map-label", style: "left: 11%; top: 81%;" }, ["Lavaux"]),
    el("span", { class: "map-label", style: "left: 74%; top: 42%;" }, ["Les Diablerets"]),
    el("div", { class: "map-note" }, [`Self-contained alpine map view: ${visiblePins.length} pins; ${filtered.length} list results. Use each listing's Google Maps button for live routing.`])
  ]);
  mapNode.append(fallbackLayer);
  mapNode.onwheel = (event) => {
    event.preventDefault();
    fallbackMapZoom = Math.max(1, Math.min(2.8, fallbackMapZoom + (event.deltaY < 0 ? 0.14 : -0.14)));
    fallbackLayer.style.transform = `scale(${fallbackMapZoom})`;
  };
  const bounds = {
    minLat: 46.19,
    maxLat: 46.51,
    minLng: 6.62,
    maxLng: 7.22
  };
  homeLocations.forEach((home, index) => {
    const point = mapPoint(home.coordinates, bounds);
    const offset = index === 0 ? -2.2 : 2.2;
    const inItinerary = isListingInItinerary(home.id);
    fallbackLayer.append(el("button", {
      class: `home-fallback-marker ${state.homesOnly ? "active" : ""} ${inItinerary ? "starred" : ""}`,
      title: `${home.address} · filter results from here`,
      "aria-label": `${home.address}. Homes filter marker.`,
      style: `left:${point.x + offset}%; top:${point.y + offset}%; background:${home.color};`,
      onclick: () => {
        state.homesOnly = !state.homesOnly;
        render();
      }
    }, [inItinerary ? "★" : home.short === "Mosse" ? "M" : "C"]));
  });
  visiblePins.forEach((listing, index) => {
    const isSelected = state.selectedListingId === listing.id;
    const inItinerary = isListingInItinerary(listing.id);
    const point = mapPoint(listing.coordinates, bounds);
    const jitter = ((index % 9) - 4) * 0.45;
    const x = point.x + jitter;
    const y = point.y + ((index % 7) - 3) * 0.35;
    fallbackLayer.append(el("a", {
      class: `map-marker ${isSelected ? "selected" : ""}`,
      href: "#",
      "data-title": `${listing.name} · ${listing.area}`,
      title: `${listing.name} · focus on map`,
      style: `left:${Math.max(4, Math.min(96, x))}%; top:${Math.max(4, Math.min(90, y))}%; background:${markerColor(listing.category)};`
      ,
      onclick: (event) => {
        event.preventDefault();
        selectListing(listing.id);
      }
    }, [inItinerary ? "★" : iconText(listing.category)]));
  });
  drawFallbackRoute(fallbackLayer, bounds);
}

function drawFallbackRoute(layer, bounds) {
  const points = state.itinerary
    .filter((entry) => entry.day === state.selectedDay)
    .sort((a, b) => `${a.start}${a.title}`.localeCompare(`${b.start}${b.title}`))
    .map((entry) => getPlaceById(entry.listingId))
    .filter(Boolean);
  if (points.length < 2) return;
  points.slice(0, -1).forEach((place, index) => {
    const from = mapPoint(place.coordinates, bounds);
    const to = mapPoint(points[index + 1].coordinates, bounds);
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const length = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx) * 180 / Math.PI;
    layer.append(el("div", {
      class: "fallback-route-line",
      style: `left:${from.x}%; top:${from.y}%; width:${length}%; transform: rotate(${angle}deg);`
    }));
  });
}

function renderListingPopup(listing) {
  const saved = state.saved.includes(listing.id);
  const selected = state.selectedListingId === listing.id;
  const inItinerary = isListingInItinerary(listing.id);
  return `
    <div class="pin-popup">
      <div class="popup-title">${inItinerary ? "★ " : ""}${escapeHtml(listing.name)}</div>
      <div class="popup-meta">
        <span>${escapeHtml(categoryLabels[listing.category] || listing.category)}</span>
        <span>${escapeHtml(listing.effort)}</span>
        <span>${escapeHtml(listing.price)}</span>
      </div>
      <div class="popup-area">${escapeHtml(listing.subcategory)} · ${escapeHtml(listing.area)} · ${escapeHtml(listing.priority)}</div>
      <p>${escapeHtml(listing.description)}</p>
      <div class="popup-times">
        <span>Mosse: ${escapeHtml(listing.travelTimes.rental)}</span>
        <span>Corbelets: ${escapeHtml(listing.travelTimes.corbelets)}</span>
      </div>
      <div class="popup-actions">
        <button type="button" onclick="window.tripHubActions.focus('${listing.id}')">${selected ? "Focused" : "Focus"}</button>
        <button type="button" onclick="window.tripHubActions.save('${listing.id}')">${saved ? "Saved" : "Save"}</button>
        <button type="button" onclick="window.tripHubActions.add('${listing.id}')">${inItinerary ? "Add again" : "Add"}</button>
        <a href="${listing.googleMapsUrl}" target="_blank" rel="noreferrer">Google Maps</a>
        <a href="${listing.officialUrl}" target="_blank" rel="noreferrer">Official</a>
      </div>
    </div>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function mapPoint(coordinates, bounds) {
  const [lat, lng] = coordinates;
  return {
    x: ((lng - bounds.minLng) / (bounds.maxLng - bounds.minLng)) * 82 + 8,
    y: (1 - (lat - bounds.minLat) / (bounds.maxLat - bounds.minLat)) * 72 + 10
  };
}

function markerColor(category) {
  return {
    dining: "#c84532",
    bars: "#20313b",
    activities: "#246f8f",
    parks: "#527a54",
    hiking: "#527a54",
    biking: "#246f8f",
    castles: "#8d6b58",
    viewpoints: "#c49a45",
    wine: "#8b3d39",
    lake: "#4b8ca8"
  }[category] || "#246f8f";
}

window.tripHubActions = {
  focus(id) {
    selectListing(id);
  },
  save(id) {
    toggleSave(id);
  },
  add(id) {
    const place = getPlaceById(id);
    if (place) openAddModal(place.id);
  }
};

render();
// End of Leysin Trip Hub app.
