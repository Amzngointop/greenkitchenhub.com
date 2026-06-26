export interface Product {
  id: string
  articleSlug: string
  rank: number
  name: string
  asin: string
  affiliateUrl: string
  imageUrl: string
  badge: string
  summary: string
  pros: string[]
  cons: string[]
  bestFor: string
  howToUse: string
  whyWePicked: string
}

const url = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=YOURTAG-20`

export const products: Product[] = [
  // CATEGORY 1 — best-reusable-paper-towels
  {
    id: 'rpt-1',
    articleSlug: 'best-reusable-paper-towels',
    rank: 1,
    name: 'Fantasticlean Microfiber Cleaning Cloth Roll – 75 Pack',
    asin: 'B0B27JSN71',
    affiliateUrl: url('B0B27JSN71'),
    imageUrl: 'https://m.media-amazon.com/images/I/71qR83bSpYL.AC_SL1500.jpg',
    badge: 'Best Overall',
    summary:
      'A perforated roll of soft microfiber cloths that mounts where your paper towels used to live, giving you a familiar tear-and-toss motion without the landfill guilt.',
    pros: [
      'Tears off like paper towels so the habit transfers instantly',
      'Holds up to dozens of machine washes without shedding',
      'Microfiber grabs grease and dust rather than smearing it',
      'Generous 75-cloth count lasts most households well over a year',
    ],
    cons: [
      'Needs a holder or basket to stay tidy on the counter',
      'Should be washed separately from lint-shedding cotton towels',
    ],
    bestFor: 'Households replacing daily paper-towel use one tear at a time',
    howToUse:
      'Mount the roll on a standard paper-towel holder, tear off a cloth as needed, then rinse and toss it in the wash. Air dry or tumble low and re-roll the clean cloths.',
    whyWePicked:
      'It earns the top spot because the roll-and-tear format removes the single biggest barrier to switching: relearning a habit. Anyone who has used paper towels for years can pick up this roll and use it identically, while the 75-cloth count means the swap covers a household for well over a year before needing a refill.',
  },
  {
    id: 'rpt-2',
    articleSlug: 'best-reusable-paper-towels',
    rank: 2,
    name: 'MoLKENE Swedish Dish Cloths – 10 Pack',
    asin: 'B0B9S9SJQB',
    affiliateUrl: url('B0B9S9SJQB'),
    imageUrl: 'https://m.media-amazon.com/images/I/81ca6uH9vqL.AC_SL1400.jpg',
    badge: '',
    summary:
      'Cellulose-and-cotton sponge cloths that drink up spills like a sponge but dry flat and odor-free like a towel.',
    pros: [
      'Each cloth absorbs many times its weight in liquid',
      'Dries stiff and fast so bacteria and smells never settle in',
      'Fully compostable at the end of its life',
    ],
    cons: [
      'Stiffens when dry and needs a quick rinse to soften',
      'Prints fade gradually with repeated dishwasher cycles',
    ],
    bestFor: 'Wiping counters and soaking up spills without a kitchen sponge',
    howToUse:
      'Rinse under warm water to soften before first use. Wipe surfaces, then rinse clean; sanitize on the top dishwasher rack or in the washing machine.',
    whyWePicked:
      'Swedish dishcloths solve a problem regular cotton rags do not: they dry stiff and fast, so they never sit damp and sour between uses. This particular set\'s combination of cellulose and cotton gives it sponge-level absorbency in a flat, low-clutter format that fits a kitchen drawer instead of cluttering a sink caddy.',
  },
  {
    id: 'rpt-3',
    articleSlug: 'best-reusable-paper-towels',
    rank: 3,
    name: 'FEBU Swedish Dishcloths – 5 Pack Watercolor',
    asin: 'B09JPC3688',
    affiliateUrl: url('B09JPC3688'),
    imageUrl: 'https://m.media-amazon.com/images/I/81GEWmmmRqL.AC_SL1500.jpg',
    badge: '',
    summary:
      'A small starter set of watercolor-print sponge cloths that proves the concept without overcommitting your drawer space.',
    pros: [
      'Pretty prints make them counter-worthy, not just hidden under the sink',
      'Compact five-pack is an easy, low-cost first swap',
      'Reusable for months, replacing dozens of paper towel rolls',
    ],
    cons: [
      'Five cloths run thin in a busy household',
      'Lighter weave wears faster than thicker rolls',
    ],
    bestFor: 'First-time switchers testing the Swedish-cloth habit',
    howToUse:
      'Dampen before wiping, then rinse and wring. Refresh in the washing machine or dishwasher and lay flat to dry between uses.',
    whyWePicked:
      'This set earns its spot as the low-commitment entry point: a five-cloth pack is small enough that trying the format costs almost nothing, yet the watercolor prints make the cloths something you would not mind leaving out on the counter. It is the pick we point hesitant switchers toward first.',
  },
  {
    id: 'rpt-4',
    articleSlug: 'best-reusable-paper-towels',
    rank: 4,
    name: 'AIDEA Microfiber Cleaning Cloth Roll – 55 Sheets',
    asin: 'B0D1KFJSVX',
    affiliateUrl: url('B0D1KFJSVX'),
    imageUrl: 'https://m.media-amazon.com/images/I/81mvL6pJjHL.AC_SL1500.jpg',
    badge: '',
    summary:
      'A mid-size microfiber roll built for the kind of grime that paper towels just push around the counter.',
    pros: [
      'Thick weave tackles stovetop grease and sticky spills',
      'Perforated sheets keep portioning tidy and waste-free',
      'Stands up to repeated hot washes without falling apart',
    ],
    cons: [
      'Bulkier sheets take a little longer to air dry',
      'Color options are limited compared with rivals',
    ],
    bestFor: 'Greasy stovetop and heavy-duty counter cleanups',
    howToUse:
      'Tear off a sheet, use dry for dusting or damp for spills, then launder. Skip fabric softener, which clogs microfiber and reduces grab.',
    whyWePicked:
      'We included this roll specifically for the stovetop-grease scenario other thin cloths struggle with. Its denser weave grabs baked-on residue rather than smearing it across the counter, making it the pick for households whose mess is more "burnt-on dinner" than "spilled water."',
  },
  {
    id: 'rpt-5',
    articleSlug: 'best-reusable-paper-towels',
    rank: 5,
    name: 'Eulnars Swedish Dishcloths – 8 Pack with Clips',
    asin: 'B0CCVXNQBF',
    affiliateUrl: url('B0CCVXNQBF'),
    imageUrl: 'https://m.media-amazon.com/images/I/81oKdRLAvWL.AC_SL1500.jpg',
    badge: '',
    summary:
      'An eight-cloth set bundled with hanging clips so each one dries fully between uses instead of souring in a heap.',
    pros: [
      'Included clips solve the wet-cloth-in-a-pile problem',
      'Eight cloths cover a whole kitchen rotation',
      'Compostable cellulose body keeps the swap genuinely zero-waste',
    ],
    cons: [
      'Clips need a rail or hook to be useful',
      'Thinner than microfiber for scrubbing baked-on messes',
    ],
    bestFor: 'Keeping a clean rotation of cloths drying at all times',
    howToUse:
      'Clip a damp cloth to a rail to air dry after each use. Sanitize weekly in the wash and rotate fresh cloths into service.',
    whyWePicked:
      'This set made the cut because it solves the part of the cloth-switching equation most brands ignore entirely: where the wet cloth actually goes between uses. The bundled clips turn a pile of damp rags into a tidy drying rail, which is the small detail that keeps a household\'s cloth rotation from smelling sour by midweek.',
  },
  {
    id: 'rpt-6',
    articleSlug: 'best-reusable-paper-towels',
    rank: 6,
    name: 'Puomue Microfiber Cleaning Cloth Roll – 55 Pack Grey',
    asin: 'B0F4QGMPP8',
    affiliateUrl: url('B0F4QGMPP8'),
    imageUrl: 'https://m.media-amazon.com/images/I/81yqBIZhYYL.AC_SL1500.jpg',
    badge: '',
    summary:
      'A neutral grey microfiber roll that hides stains and blends into a modern kitchen instead of shouting at it.',
    pros: [
      'Muted grey hides stubborn stains between washes',
      'Roll format keeps the paper-towel muscle memory intact',
      'Reusable for hundreds of cycles before retirement',
    ],
    cons: [
      'Single neutral color only',
      'Best kept apart from cotton in the wash to avoid lint',
    ],
    bestFor: 'Design-conscious kitchens that want a low-key roll',
    howToUse:
      'Use damp for counters or dry for dusting, then wash without softener. Re-roll the dried cloths back onto the holder.',
    whyWePicked:
      'We rounded out this category with a roll built for kitchens where appearance matters as much as function. The neutral grey hides the inevitable staining that bright microfiber shows after a few months, so the roll keeps looking presentable long after a white equivalent would look tired.',
  },

  // CATEGORY 2 — best-bamboo-cutting-boards
  {
    id: 'bcb-1',
    articleSlug: 'best-bamboo-cutting-boards',
    rank: 1,
    name: '3-Piece Carbonized Bamboo Cutting Board Set (Zeawec)',
    asin: 'B0GFCZTRKL',
    affiliateUrl: url('B0GFCZTRKL'),
    imageUrl: 'https://m.media-amazon.com/images/I/71MTOyhiJ5L.AC_SL1500.jpg',
    badge: "Editor's Pick",
    summary:
      'A graduated trio of heat-treated bamboo boards that covers everything from a quick lime wedge to a holiday roast carving.',
    pros: [
      'Three sizes mean the right board for every job',
      'Carbonizing darkens the bamboo and boosts moisture resistance',
      'Dense surface is gentle on knife edges',
      'Lightweight enough to move from board to plate easily',
    ],
    cons: [
      'Hand-wash only to protect the bamboo',
      'Needs periodic oiling to stay sealed',
    ],
    bestFor: 'Cooks who want one set to handle prep of any scale',
    howToUse:
      'Wash by hand with mild soap and dry upright. Rub food-grade mineral oil into the surface every few weeks to keep it sealed and crack-free.',
    whyWePicked:
      'It tops the list because a graduated three-board set matches how kitchens actually work: a small board for garlic and citrus, a medium for everyday prep, a large for holiday carving. Buying all three sizes at once, already carbonized for extra moisture resistance, avoids the piecemeal accumulation of mismatched boards over time.',
  },
  {
    id: 'bcb-2',
    articleSlug: 'best-bamboo-cutting-boards',
    rank: 2,
    name: 'Astercook Deep-Carbonized Bamboo Cutting Board with Stand',
    asin: 'B0FH6YL3XC',
    affiliateUrl: url('B0FH6YL3XC'),
    imageUrl: 'https://m.media-amazon.com/images/I/91xky+JYmZL.AC_SL1500.jpg',
    badge: '',
    summary:
      'A single large board paired with an upright stand so it dries fully and stays off the counter between meals.',
    pros: [
      'Deep carbonization deepens color and water resistance',
      'Included stand keeps the board airing and visible',
      'Roomy surface handles big-batch prep with ease',
    ],
    cons: [
      'Large footprint needs cabinet or counter space',
      'Stand is a separate piece to store',
    ],
    bestFor: 'Batch cooks who prep large quantities at once',
    howToUse:
      'Hand wash, dry both faces, and rest it in the stand to finish airing. Re-oil when the surface starts to look dry or pale.',
    whyWePicked:
      'This board earns its place for solving bamboo\'s biggest care complaint: uneven drying that leads to warping. The included stand keeps both faces exposed to air rather than lying flat against a counter, which matters most for a board this large that sees heavy, frequent use.',
  },
  {
    id: 'bcb-3',
    articleSlug: 'best-bamboo-cutting-boards',
    rank: 3,
    name: 'Freshware Bamboo Cutting Board Set of 3',
    asin: 'B016OP6N3M',
    affiliateUrl: url('B016OP6N3M'),
    imageUrl: 'https://m.media-amazon.com/images/I/81gLwPfpWbL.AC_SL1500.jpg',
    badge: '',
    summary:
      'A no-frills three-board set that has quietly anchored sustainable kitchens for years thanks to honest value.',
    pros: [
      'Three sizes cover most everyday prep tasks',
      'Light, easy to maneuver and store',
      'A proven, long-running design with broad appeal',
    ],
    cons: [
      'Thinner profile than premium boards',
      'Plain styling without juice grooves',
    ],
    bestFor: 'Budget-minded households outfitting a first eco kitchen',
    howToUse:
      'Wash by hand and dry flat. Oil occasionally and keep the smallest board for fruit to avoid onion and garlic transfer.',
    whyWePicked:
      'We picked this set for households building out their first plastic-free kitchen on a real budget. It strips bamboo cutting boards down to the essentials, no grooves, no stand, just three honest, durable boards, proving that going eco does not require paying a premium for extra features.',
  },
  {
    id: 'bcb-4',
    articleSlug: 'best-bamboo-cutting-boards',
    rank: 4,
    name: 'ROYAL CRAFT WOOD Bamboo Cutting Board Set',
    asin: 'B0D2P1HSCV',
    affiliateUrl: url('B0D2P1HSCV'),
    imageUrl: 'https://m.media-amazon.com/images/I/818Koibt7DL.AC_SL1500.jpg',
    badge: '',
    summary:
      'A polished set with juice grooves and handles aimed at home cooks who care how a board looks on the table.',
    pros: [
      'Juice grooves catch runoff from roasts and melons',
      'Cut-out handles make carrying and hanging simple',
      'Smooth finish doubles as a serving platter',
    ],
    cons: [
      'Grooves need extra attention when washing',
      'Heavier than basic flat boards',
    ],
    bestFor: 'Carving juicy meats and serving straight from the board',
    howToUse:
      'Carve over the groove to catch juices, then hand wash and dry. Hang by the handle to air dry and oil monthly.',
    whyWePicked:
      'This board made the list because it doubles as serveware, not just a prep surface. The juice groove and cutout handles mean a roast can go straight from the oven to the table on the same board it was carved on, cutting down on extra dishes in the process.',
  },
  {
    id: 'bcb-5',
    articleSlug: 'best-bamboo-cutting-boards',
    rank: 5,
    name: 'Kikcoin 17x11 Extra Large Bamboo Cutting Board',
    asin: 'B0CC8SZRT3',
    affiliateUrl: url('B0CC8SZRT3'),
    imageUrl: 'https://m.media-amazon.com/images/I/819GDbFB7ZL.AC_SL1500.jpg',
    badge: '',
    summary:
      'A generous single slab that gives you room to spread out a full mise en place without crowding the edges.',
    pros: [
      'Extra-large surface keeps ingredients corralled',
      'Thick build resists warping over time',
      'Reversible faces separate produce from proteins',
    ],
    cons: [
      'Heavy and bulky to store',
      'Too big for tight galley counters',
    ],
    bestFor: 'Spreading out a full mise en place for big meals',
    howToUse:
      'Use one face for produce and the other for raw proteins. Hand wash, stand to dry, and re-oil to prevent the wide surface from cracking.',
    whyWePicked:
      'We chose this board for cooks who run out of room mid-prep. Its oversized surface lets vegetables, proteins, and finished cuts sit side by side without crowding, and the reversible faces give a built-in way to separate produce from raw meat on the same single board.',
  },
  {
    id: 'bcb-6',
    articleSlug: 'best-bamboo-cutting-boards',
    rank: 6,
    name: 'Keechee Bamboo Cutting Board with Deep Juice Grooves',
    asin: 'B0D7M8QB9Y',
    affiliateUrl: url('B0D7M8QB9Y'),
    imageUrl: 'https://m.media-amazon.com/images/I/81CbxCEH0mL.AC_SL1500.jpg',
    badge: '',
    summary:
      'A board engineered around an extra-deep perimeter groove that actually contains the mess of a juicy carve.',
    pros: [
      'Deep groove holds noticeably more liquid',
      'Sturdy thickness feels planted while you work',
      'Smooth, splinter-free edges',
    ],
    cons: [
      'Deeper grooves take longer to scrub clean',
      'Single size only',
    ],
    bestFor: 'Messy, liquid-heavy cutting jobs like watermelon and roasts',
    howToUse:
      'Position the groove downhill to collect juices, then hand wash thoroughly, paying attention to the channel. Dry upright and oil regularly.',
    whyWePicked:
      'It rounds out the category as the answer to one specific complaint: shallow grooves that overflow the moment you carve a watermelon or a roast. This board\'s deeper channel actually contains the mess instead of token-gesturing at it, which is the entire reason it earned a spot here.',
  },

  // CATEGORY 3 — best-stainless-steel-flatware
  {
    id: 'ssf-1',
    articleSlug: 'best-stainless-steel-flatware',
    rank: 1,
    name: 'Acnusik Silverware Set for 8 – 40 Piece Heavy Duty',
    asin: 'B08B39ZH5M',
    affiliateUrl: url('B08B39ZH5M'),
    imageUrl: 'https://m.media-amazon.com/images/I/715zK8PNSHL.AC_SL1500.jpg',
    badge: 'Top Performer',
    summary:
      'A complete service for eight with a reassuring heft that signals this is flatware you buy once and keep for decades.',
    pros: [
      'Serves eight in one box, ideal for families and hosts',
      'Substantial weight feels balanced in the hand',
      'Mirror finish resists water spots and rust',
      'Dishwasher safe for everyday convenience',
    ],
    cons: [
      'Heavier pieces feel large for small children',
      'Forty pieces need a roomy drawer organizer',
    ],
    bestFor: 'Families and frequent hosts buying a lifetime set',
    howToUse:
      'Rinse off acidic foods before they sit, then wash by hand or machine. Dry promptly to keep the mirror finish spotless for years.',
    whyWePicked:
      'This set leads the category because it is sized and built for the long haul: a full service for eight in a heavier gauge steel that resists the bending and pitting cheaper flatware develops within a year or two. For a household replacing plastic cutlery for good, that durability is the entire point.',
  },
  {
    id: 'ssf-2',
    articleSlug: 'best-stainless-steel-flatware',
    rank: 2,
    name: 'KINGSTONE 20 Piece Flatware Set for 4 – 18/10 Steel',
    asin: 'B091SRKPN7',
    affiliateUrl: url('B091SRKPN7'),
    imageUrl: 'https://m.media-amazon.com/images/I/61ysDODB69L.AC_SL1500.jpg',
    badge: '',
    summary:
      'A four-place set in genuine 18/10 steel, the alloy ratio that resists corrosion and keeps its shine the longest.',
    pros: [
      '18/10 steel offers top-tier rust resistance',
      'Right-sized service for a couple or small family',
      'Clean, timeless silhouette suits any table',
    ],
    cons: [
      'Only serves four without buying a second set',
      'Smooth handles can feel slick when wet',
    ],
    bestFor: 'Couples and small households wanting premium-grade steel',
    howToUse:
      'Load into the dishwasher with handles down for a thorough rinse, or hand wash and towel dry. Avoid leaving pieces soaking overnight.',
    whyWePicked:
      'We picked this set specifically for its 18/10 steel ratio, the composition that resists rust and tarnish far better than the lower-grade 13/0 steel common in budget flatware. For a couple or small household, it is the option that still looks new after years of regular dishwasher cycles.',
  },
  {
    id: 'ssf-3',
    articleSlug: 'best-stainless-steel-flatware',
    rank: 3,
    name: 'PHILIPALA 20 Piece Silverware Set – Food Grade',
    asin: 'B0DKTX3H1H',
    affiliateUrl: url('B0DKTX3H1H'),
    imageUrl: 'https://m.media-amazon.com/images/I/61MXl1tbVeL.AC_SL1500.jpg',
    badge: '',
    summary:
      'A clean food-grade set that keeps things simple, focusing budget on safe materials rather than ornate detailing.',
    pros: [
      'Food-grade steel with smooth, rounded edges',
      'Understated design pairs with any dishware',
      'Lightweight feel suits casual everyday use',
    ],
    cons: [
      'Lighter heft than premium sets',
      'Minimalist look may feel plain to some',
    ],
    bestFor: 'Everyday casual dining on a sensible budget',
    howToUse:
      'Machine or hand wash, then dry to prevent spotting. Store in a drawer divider to keep edges from rubbing.',
    whyWePicked:
      'This set earns its place as the sensible middle ground: genuinely food-grade steel with rounded, comfortable edges, without paying for ornamentation a casual table does not need. It is the pick for households that just want safe, durable cutlery that works every single day without fuss.',
  },
  {
    id: 'ssf-4',
    articleSlug: 'best-stainless-steel-flatware',
    rank: 4,
    name: 'EWFEN 24-Piece Black Silverware Set with Steak Knives',
    asin: 'B0BYX1XT81',
    affiliateUrl: url('B0BYX1XT81'),
    imageUrl: 'https://m.media-amazon.com/images/I/71vZ7TGZW1L.AC_SL1500.jpg',
    badge: '',
    summary:
      'A matte-black service for four with steak knives included, for tables that lean modern and a little moody.',
    pros: [
      'Striking matte-black titanium-style coating',
      'Includes steak knives for a complete set',
      'Coating resists fingerprints and smudges',
    ],
    cons: [
      'Colored coatings prefer gentle hand washing',
      'Black finish shows scratches over heavy use',
    ],
    bestFor: 'Modern tablescapes with a bold, dark palette',
    howToUse:
      'Hand wash colored flatware to protect the finish and dry right away. Skip abrasive scrubbers that can dull the coating.',
    whyWePicked:
      'We included this set because most stainless flatware comes in one finish: silver. This matte-black option proves a sustainable swap does not have to mean a generic look, and the bundled steak knives mean it covers a full dinner setting without a separate purchase.',
  },
  {
    id: 'ssf-5',
    articleSlug: 'best-stainless-steel-flatware',
    rank: 5,
    name: 'Stapava 20 Piece Silverware Set – Mirror Polished',
    asin: 'B0FMDR8HPB',
    affiliateUrl: url('B0FMDR8HPB'),
    imageUrl: 'https://m.media-amazon.com/images/I/710133iz6aL.AC_SL1500.jpg',
    badge: '',
    summary:
      'A brightly mirror-polished set that catches candlelight, dressing up an everyday table for special occasions.',
    pros: [
      'High-shine polish elevates a simple table',
      'Balanced four-place service',
      'Rounded handles sit comfortably in the hand',
    ],
    cons: [
      'Mirror finish shows water spots if air-dried',
      'Serves only four',
    ],
    bestFor: 'Dressing up everyday meals with a touch of shine',
    howToUse:
      'Towel dry immediately after washing to preserve the mirror shine and avoid streaks. Polish occasionally with a soft cloth.',
    whyWePicked:
      'This set made the cut for its finish alone: a true mirror polish that most stainless flatware only approximates. It is the pick for anyone who wants their everyday table to feel a little more like a special occasion, without resorting to disposable plasticware for guests.',
  },
  {
    id: 'ssf-6',
    articleSlug: 'best-stainless-steel-flatware',
    rank: 6,
    name: 'Amorston Steak Knives Set of 8 – Black Serrated',
    asin: 'B09Y8WF8WQ',
    affiliateUrl: url('B09Y8WF8WQ'),
    imageUrl: 'https://m.media-amazon.com/images/I/7125-lwYKkL.AC_SL1500.jpg',
    badge: '',
    summary:
      'A dedicated set of eight serrated steak knives to round out a flatware collection that lacks proper cutting power.',
    pros: [
      'Serrated edges slice cleanly without sharpening',
      'Set of eight matches a full dinner party',
      'Black handles coordinate with dark flatware',
    ],
    cons: [
      'Serrated blades are hard to re-sharpen at home',
      'Hand washing preferred to protect handles',
    ],
    bestFor: 'Completing a table with proper steak knives',
    howToUse:
      'Hand wash and dry to protect the edges and handles. Store in a block or sheath so the serrations stay keen and safe.',
    whyWePicked:
      'We added this set because most flatware collections quietly skip real steak knives, leaving households reaching for disposable plastic ones at a dinner party. A dedicated set of eight serrated knives closes that gap permanently, rounding out a fully reusable table setting.',
  },

  // CATEGORY 4 — best-glass-food-containers
  {
    id: 'gfc-1',
    articleSlug: 'best-glass-food-containers',
    rank: 1,
    name: 'Rubbermaid Brilliance Glass Food Storage – Set of 9',
    asin: 'B08BR9HBZ3',
    affiliateUrl: url('B08BR9HBZ3'),
    imageUrl: 'https://m.media-amazon.com/images/I/71H+hPWNagL.AC_SL1500.jpg',
    badge: 'Best Value',
    summary:
      'A nesting set of leak-proof glass containers from a trusted name, built to go from fridge to oven to dishwasher without complaint.',
    pros: [
      'Latching lids create a genuine leak-proof seal',
      'Glass moves safely from freezer to oven',
      'Containers nest to save cabinet space',
      'Clear bodies make leftovers easy to identify',
    ],
    cons: [
      'Lids are hand-wash friendly but bulky to store',
      'Glass adds weight to a packed lunch bag',
    ],
    bestFor: 'Everyday leftovers and meal storage you can reheat in place',
    howToUse:
      'Fill, snap the latches, and stack in the fridge. Vent a latch before microwaving and run the glass through the dishwasher when done.',
    whyWePicked:
      'This set leads the category because it nails the one feature most glass containers fake: a genuinely leak-proof latching lid. Combined with nesting bodies that save real cabinet space, it is the set we point people toward first when they ask which glass container to buy.',
  },
  {
    id: 'gfc-2',
    articleSlug: 'best-glass-food-containers',
    rank: 2,
    name: 'Vtopmart 5-Pack 22oz Glass Containers with Snap Lids',
    asin: 'B0D7P6XKNP',
    affiliateUrl: url('B0D7P6XKNP'),
    imageUrl: 'https://m.media-amazon.com/images/I/81yZcHBqjaL.AC_SL1500.jpg',
    badge: '',
    summary:
      'Five single-portion glass tubs with snap lids, sized right for grab-and-go lunches and tidy fridge stacking.',
    pros: [
      'Uniform 22oz size stacks neatly',
      'Snap lids seal against spills and leaks',
      'Borosilicate-style glass handles temperature swings',
    ],
    cons: [
      'Single size limits portion flexibility',
      'Lid gaskets need a careful wash',
    ],
    bestFor: 'Single-serving lunches and uniform fridge organization',
    howToUse:
      'Portion meals into each tub, snap the four sides shut, and reheat with the lid off. Wash lids by hand to preserve the seal.',
    whyWePicked:
      'We picked this set for the grab-and-go crowd. A single consistent size across all five tubs means lunches stack identically in a fridge or bag every single day, removing the guesswork of matching mismatched lids that plagues larger, multi-size sets.',
  },
  {
    id: 'gfc-3',
    articleSlug: 'best-glass-food-containers',
    rank: 3,
    name: 'Liuruiyu 8-Pack Glass Meal Prep Containers – BPA Free',
    asin: 'B0F9K2KXZV',
    affiliateUrl: url('B0F9K2KXZV'),
    imageUrl: 'https://m.media-amazon.com/images/I/811PAhhOvYL.AC_SL1500.jpg',
    badge: '',
    summary:
      'An eight-piece set aimed squarely at weekly meal preppers who batch-cook every Sunday and need matching containers.',
    pros: [
      'Eight containers cover a full week of prep',
      'BPA-free lids for worry-free reheating',
      'Even sizing makes stacking predictable',
    ],
    cons: [
      'Eight glass bases take real cabinet room',
      'Lids and bases must be tracked as pairs',
    ],
    bestFor: 'Sunday meal preppers batching a week of lunches',
    howToUse:
      'Cook in bulk, divide into the eight bases, and refrigerate or freeze. Reheat with the lid ajar and wash everything in the dishwasher.',
    whyWePicked:
      'This set earns its spot because eight matching containers is exactly the right number for a Sunday-batch routine covering five workdays with a little buffer. Even sizing keeps the fridge shelf organized rather than turning into a jumble of odd-shaped leftovers.',
  },
  {
    id: 'gfc-4',
    articleSlug: 'best-glass-food-containers',
    rank: 4,
    name: 'Vtopmart 8-Pack Glass Meal Prep Containers – Airtight',
    asin: 'B0B9S5HZ26',
    affiliateUrl: url('B0B9S5HZ26'),
    imageUrl: 'https://m.media-amazon.com/images/I/71xlXpdVSUL.AC_SL1500.jpg',
    badge: '',
    summary:
      'An airtight eight-pack designed to keep prepped food fresher for longer with a firmer locking seal.',
    pros: [
      'Airtight locking lids extend freshness',
      'Roomy bases fit hearty single meals',
      'Tempered glass tolerates oven and freezer',
    ],
    cons: [
      'Firm seals take a moment to open',
      'Heavier than plastic equivalents',
    ],
    bestFor: 'Keeping prepped meals fresher with an airtight seal',
    howToUse:
      'Press all four locking tabs down for an airtight seal. Release a tab before microwaving and hand wash lids to keep gaskets supple.',
    whyWePicked:
      'We chose this set for anyone who has opened a "sealed" container to find soggy food anyway. The four-tab locking lid creates a noticeably firmer seal than snap-style alternatives, which matters most for foods that need to stay genuinely fresh for several days, not just covered.',
  },
  {
    id: 'gfc-5',
    articleSlug: 'best-glass-food-containers',
    rank: 5,
    name: 'HOMBERKING 8-Pack Borosilicate Glass Containers with Snap Locks',
    asin: 'B0DWLHPM8Q',
    affiliateUrl: url('B0DWLHPM8Q'),
    imageUrl: 'https://m.media-amazon.com/images/I/81nSlSuySFL.AC_SL1500.jpg',
    badge: '',
    summary:
      'Borosilicate glass containers with snap locks, chosen for their resilience against the thermal shock of fridge-to-oven cooking.',
    pros: [
      'Borosilicate glass resists cracking from temperature shifts',
      'Snap locks deliver a confident seal',
      'Assorted sizes suit different meals',
    ],
    cons: [
      'Mixed sizes stack less uniformly',
      'Premium glass comes at a premium feel',
    ],
    bestFor: 'Cooks who move dishes straight from freezer to oven',
    howToUse:
      'Move dishes directly from freezer to a cold oven and let them heat together to avoid shock. Snap locks shut for storage and wash all parts after.',
    whyWePicked:
      'This set made the cut for one specific habit: pulling something straight from the freezer into a hot oven. Standard glass can crack under that kind of thermal shock, while this borosilicate formulation is built to tolerate exactly that swing, making it the pick for cooks who batch-freeze meals.',
  },
  {
    id: 'gfc-6',
    articleSlug: 'best-glass-food-containers',
    rank: 6,
    name: 'KOMUEE 10-Pack 30oz Glass Meal Prep Containers',
    asin: 'B08X4615SC',
    affiliateUrl: url('B08X4615SC'),
    imageUrl: 'https://m.media-amazon.com/images/I/71FEUOgXhfS.AC_SL1500.jpg',
    badge: '',
    summary:
      'A ten-piece set of larger 30oz containers for households that cook generously and store full-size dinners.',
    pros: [
      'Ten generous 30oz containers handle big meals',
      'Large count suits bigger families',
      'Deep bases fit hearty portions and grains',
    ],
    cons: [
      'Ten large containers demand serious storage',
      'Heavier and bulkier to transport',
    ],
    bestFor: 'Larger families storing full-size dinner portions',
    howToUse:
      'Fill the deep bases with full dinners or grain bowls, seal, and stack. Reheat lid-off and run the set through the dishwasher to reset.',
    whyWePicked:
      'We added this set because most glass containers are sized for a single portion, leaving larger families constantly doubling up dishes. Ten generous 30oz bases finally give a bigger household enough capacity to store full dinners without resorting to mismatched plastic tubs for the overflow.',
  },

  // CATEGORY 5 — best-silicone-kitchen-tools
  {
    id: 'skt-1',
    articleSlug: 'best-silicone-kitchen-tools',
    rank: 1,
    name: 'Umite Chef 33-Piece Silicone Kitchen Utensils Set – Khaki',
    asin: 'B08573DQ39',
    affiliateUrl: url('B08573DQ39'),
    imageUrl: 'https://m.media-amazon.com/images/I/615CbF7dxCL.AC_SL1500.jpg',
    badge: 'Staff Favorite',
    summary:
      'A sweeping 33-piece set that outfits a whole kitchen in one box, with silicone heads that protect nonstick cookware.',
    pros: [
      'Covers nearly every cooking task in a single set',
      'Soft silicone heads will not scratch nonstick pans',
      'High heat tolerance for searing and sauteing',
      'Wood-tone handles add a warm, natural look',
    ],
    cons: [
      'Thirty-three pieces need a big drawer or holder',
      'Some specialty tools see little daily use',
    ],
    bestFor: 'Outfitting an entire kitchen in one purchase',
    howToUse:
      'Use the silicone heads on nonstick cookware to avoid scratches. Hand wash the wood-handled pieces and air dry before storing upright.',
    whyWePicked:
      'It tops this category because 33 pieces is genuinely enough to retire every plastic utensil in a kitchen in one purchase, rather than replacing tools one at a time over months. The silicone heads protect nonstick cookware specifically, which is the detail that makes this a true one-and-done plastic swap.',
  },
  {
    id: 'skt-2',
    articleSlug: 'best-silicone-kitchen-tools',
    rank: 2,
    name: '35-Piece Cooking Utensils with Grater – Heat Resistant',
    asin: 'B094PTSRP9',
    affiliateUrl: url('B094PTSRP9'),
    imageUrl: 'https://m.media-amazon.com/images/I/71yxPx0ekLS.AC_SL1500.jpg',
    badge: '',
    summary:
      'An even bigger 35-piece kit that tosses in extras like a grater, aiming to be the only utensil purchase you make.',
    pros: [
      'Includes bonus tools like a grater and gadgets',
      'Heat-resistant heads handle hot pans',
      'One-and-done kit for a new kitchen',
    ],
    cons: [
      'Storage for 35 pieces is a real consideration',
      'Bonus gadgets vary in everyday usefulness',
    ],
    bestFor: 'New kitchens that want every gadget at once',
    howToUse:
      'Reach for the silicone heads on coated pans and the extras as needed. Wash, dry, and corral the set in a deep crock or drawer.',
    whyWePicked:
      'We picked this set for households setting up a kitchen from scratch. Bundling a grater and a handful of extra gadgets in with the core utensils means fewer separate purchases later, even if a few of the bonus tools end up seeing only occasional use.',
  },
  {
    id: 'skt-3',
    articleSlug: 'best-silicone-kitchen-tools',
    rank: 3,
    name: 'NileHome Silicone Spatula Set – 6 Piece BPA-Free Black',
    asin: 'B0B7J62MV9',
    affiliateUrl: url('B0B7J62MV9'),
    imageUrl: 'https://m.media-amazon.com/images/I/71CZuGEhoDL.AC_SL1500.jpg',
    badge: '',
    summary:
      'A focused six-piece spatula set for cooks who want a few excellent tools rather than a drawer full of duplicates.',
    pros: [
      'Tight, useful selection of everyday spatulas',
      'Seamless one-piece design resists food traps',
      'BPA-free silicone safe for nonstick',
    ],
    cons: [
      'Spatula-only set skips spoons and ladles',
      'Single color option',
    ],
    bestFor: 'Minimalists who prefer a few great tools',
    howToUse:
      'Use the flexible heads to fold, scrape, and flip in nonstick pans. The seamless build wipes clean and is dishwasher safe.',
    whyWePicked:
      'This set earns its place for cooks who find a 30-plus piece mega-set excessive. Six well-made spatulas in a seamless, gap-free design cover the tools people actually reach for daily, without the drawer-clogging duplicates that come bundled into bigger kits.',
  },
  {
    id: 'skt-4',
    articleSlug: 'best-silicone-kitchen-tools',
    rank: 4,
    name: 'CAROTE 10-Piece Silicone Utensils Set – Cream White',
    asin: 'B0C9DNCFG2',
    affiliateUrl: url('B0C9DNCFG2'),
    imageUrl: 'https://m.media-amazon.com/images/I/71wQKlUWk-L.AC_SL1500.jpg',
    badge: '',
    summary:
      'A tidy ten-piece set in soft cream that looks at home on the counter of a bright, modern kitchen.',
    pros: [
      'Curated ten tools cover the essentials',
      'Cream colorway suits light, airy kitchens',
      'Silicone heads guard nonstick surfaces',
    ],
    cons: [
      'Light color can stain from turmeric or tomato',
      'Mid-size set lacks niche gadgets',
    ],
    bestFor: 'Coordinated kitchens that value a clean aesthetic',
    howToUse:
      'Rinse promptly after cooking with pigment-heavy foods to limit staining. Wash by hand or machine and stand in a holder to dry.',
    whyWePicked:
      'We included this set because most silicone tools default to black, which can feel heavy in a bright, modern kitchen. The cream colorway gives an equally durable, nonstick-safe utensil set a lighter visual presence on display, which matters for cooks who keep their tools out rather than hidden in a drawer.',
  },
  {
    id: 'skt-5',
    articleSlug: 'best-silicone-kitchen-tools',
    rank: 5,
    name: 'Astercook 39-Piece Kitchen Utensils Set – Wood Handle',
    asin: 'B0F23QPVVG',
    affiliateUrl: url('B0F23QPVVG'),
    imageUrl: 'https://m.media-amazon.com/images/I/81x2ixCKp8L.AC_SL1500.jpg',
    badge: '',
    summary:
      'The largest set here at 39 pieces, blending silicone heads with wooden handles for a fully stocked, natural-looking kitchen.',
    pros: [
      'Most comprehensive selection in the lineup',
      'Wooden handles bring warmth and grip',
      'Silicone heads stay nonstick-safe',
    ],
    cons: [
      'Wooden handles must be hand washed',
      'Largest set needs the most storage',
    ],
    bestFor: 'Avid cooks who want every tool on hand',
    howToUse:
      'Keep the wooden handles out of standing water and hand wash them. Air dry fully before storing to prevent the wood from swelling.',
    whyWePicked:
      'This set made the list as the most complete option in the lineup, at 39 pieces, for cooks who want every tool accounted for in a single purchase. Pairing silicone heads with wood handles also lands the set somewhere between the all-plastic look of most utensil sets and the all-bamboo feel of a more rustic kitchen.',
  },
  {
    id: 'skt-6',
    articleSlug: 'best-silicone-kitchen-tools',
    rank: 6,
    name: 'AOTHOD Silicone Cooking Utensils Set – 446°F Resistant',
    asin: 'B088DGBRMC',
    affiliateUrl: url('B088DGBRMC'),
    imageUrl: 'https://m.media-amazon.com/images/I/71JicJjYzmL.AC_SL1500.jpg',
    badge: '',
    summary:
      'A set built around verified heat resistance to 446°F, for cooks who push their pans hard and want tools that keep up.',
    pros: [
      'Rated to a high 446°F for hot cooking',
      'Sturdy cores keep heads from flexing under load',
      'Nonstick-safe across the set',
    ],
    cons: [
      'Firmer heads feel less flexible for delicate folding',
      'Limited color choices',
    ],
    bestFor: 'High-heat cooking where tools must hold up',
    howToUse:
      'Use confidently up to the rated temperature and avoid open flame contact. Wash after use and store upright to keep heads in shape.',
    whyWePicked:
      'We added this set specifically for high-heat cooking, where cheaper silicone tools can soften or flex under load near a hot pan. A documented 446°F rating and a sturdier internal core give it real margin for searing and deep frying that lighter-duty utensil sets do not have.',
  },

  // CATEGORY 6 — best-reusable-grocery-bags
  {
    id: 'rgb-1',
    articleSlug: 'best-reusable-grocery-bags',
    rank: 1,
    name: 'TOPDesign 12-Pack Cotton Tote Bags 16x15',
    asin: 'B082CZHQZ3',
    affiliateUrl: url('B082CZHQZ3'),
    imageUrl: 'https://m.media-amazon.com/images/I/613nnka+ELL.AC_SL1500.jpg',
    badge: 'Most Versatile',
    summary:
      'A dozen plain cotton totes that work as grocery bags, library haulers, gym bags, and DIY craft blanks all at once.',
    pros: [
      'Twelve bags mean you always have one in reach',
      'Natural cotton is washable and compostable',
      'Blank canvas takes paint, prints, or patches',
      'Folds flat to stash in a car or drawer',
    ],
    cons: [
      'No reinforced bottom for very heavy loads',
      'Cotton is less wipeable than coated fabrics',
    ],
    bestFor: 'Everyday errands and double-duty around the house',
    howToUse:
      'Keep a few folded in the car and by the door so you never shop without one. Machine wash when soiled and air dry.',
    whyWePicked:
      'It leads this category because twelve bags is enough to stage one in every car, coat, and entryway at once, the single biggest factor in whether a reusable bag actually gets used. Plain natural cotton also takes paint, prints, or patches, so it doubles as a craft blank long after grocery duty.',
  },
  {
    id: 'rgb-2',
    articleSlug: 'best-reusable-grocery-bags',
    rank: 2,
    name: 'TOPDesign Canvas Tote Bag with External Pocket + Zipper',
    asin: 'B083DH7MNG',
    affiliateUrl: url('B083DH7MNG'),
    imageUrl: 'https://m.media-amazon.com/images/I/61OoqpUDVqL.AC_SL1500.jpg',
    badge: '',
    summary:
      'A sturdier canvas tote with a zip top and outer pocket, bridging the gap between grocery bag and everyday carryall.',
    pros: [
      'Zipper keeps contents secure in transit',
      'External pocket holds keys, phone, or a list',
      'Heavier canvas carries more without sagging',
    ],
    cons: [
      'Single bag rather than a multipack',
      'Heavier fabric takes longer to dry',
    ],
    bestFor: 'Doubling as a commuter or market bag with security',
    howToUse:
      'Zip the top closed for transit and tuck small items in the outer pocket. Spot clean or machine wash and reshape while damp.',
    whyWePicked:
      'We picked this tote for the gap between a flimsy grocery bag and a proper bag of its own. The zip top and external pocket mean it can hold groceries on one trip and double as a commuter carryall the next, securing contents in a way an open-top tote cannot.',
  },
  {
    id: 'rgb-3',
    articleSlug: 'best-reusable-grocery-bags',
    rank: 3,
    name: 'BALEINE 3-Pack Foldable Reusable Grocery Bags – Antique Foliage',
    asin: 'B094X266WR',
    affiliateUrl: url('B094X266WR'),
    imageUrl: 'https://m.media-amazon.com/images/I/81nzl6CRlIL.AC_SL1500.jpg',
    badge: '',
    summary:
      'Three foldable patterned bags that collapse into a tiny pouch, so forgetting your bags becomes much harder.',
    pros: [
      'Folds into an attached pouch for pocket carry',
      'Ripstop fabric holds a surprising load',
      'Pretty foliage print stands out at checkout',
    ],
    cons: [
      'Synthetic fabric is less breathable than cotton',
      'Small folded size is easy to misplace',
    ],
    bestFor: 'Keeping a bag tucked in a purse or pocket at all times',
    howToUse:
      'Stuff each bag back into its built-in pouch and clip it to a purse or bag. Wipe clean or hand wash and hang to dry.',
    whyWePicked:
      'This set earns its place by attacking the most common reason reusable bags fail: forgetting them at home. Folding into an attached pouch small enough to clip onto a purse or bag removes the excuse entirely, while the patterned fabric stands out enough to actually be noticed at checkout.',
  },
  {
    id: 'rgb-4',
    articleSlug: 'best-reusable-grocery-bags',
    rank: 4,
    name: 'NPBAG 25-Pack Natural Cotton Tote Bags 15x16',
    asin: 'B08MXMK3S9',
    affiliateUrl: url('B08MXMK3S9'),
    imageUrl: 'https://m.media-amazon.com/images/I/611FnTyBJWL.AC_SL1500.jpg',
    badge: '',
    summary:
      'A bulk 25-pack of natural cotton totes for big households, classrooms, events, or anyone who keeps losing their bags.',
    pros: [
      'Bulk count covers a whole household or event',
      'Plain cotton is ideal for custom printing',
      'Compostable at end of life',
    ],
    cons: [
      'Lightweight cotton suits modest loads',
      'Twenty-five bags is overkill for solo shoppers',
    ],
    bestFor: 'Big families, events, and custom-printing projects',
    howToUse:
      'Distribute bags to every car, bag, and entryway and keep spares for events. Machine wash and line dry as needed.',
    whyWePicked:
      'We added this bulk pack for households, classrooms, and events that need a real quantity on hand at once, not a token few. Twenty-five plain cotton totes mean there is always a spare within reach, and the blank fabric is ready for custom printing for a class, club, or business.',
  },
  {
    id: 'rgb-5',
    articleSlug: 'best-reusable-grocery-bags',
    rank: 5,
    name: 'Nanobag Ultralight Foldable Tote – Standard Black',
    asin: 'B0D5J5XD6Q',
    affiliateUrl: url('B0D5J5XD6Q'),
    imageUrl: 'https://m.media-amazon.com/images/I/51AOgYhG1LL.AC_SL1350.jpg',
    badge: '',
    summary:
      'An ultralight tote that packs down to almost nothing yet expands to swallow a full grocery run when you need it.',
    pros: [
      'Packs down smaller than a wallet',
      'Holds many times its own weight',
      'Weighs almost nothing to carry daily',
    ],
    cons: [
      'Thin fabric feels delicate to the touch',
      'Single bag, single color',
    ],
    bestFor: 'Carrying a just-in-case bag everywhere you go',
    howToUse:
      'Fold it into its tiny pouch and keep it on a keychain or in a pocket. Rinse or hand wash and air dry flat.',
    whyWePicked:
      'This pick made the list as the genuine just-in-case bag, the one small enough to live permanently on a keychain or in a coat pocket without anyone noticing it is there. For impulse stops and unplanned errands, it closes the gap that even a folded tote in the car cannot cover.',
  },
  {
    id: 'rgb-6',
    articleSlug: 'best-reusable-grocery-bags',
    rank: 6,
    name: 'BALEINE 2-Pack Insulated Reusable Grocery Bags – Cooler',
    asin: 'B0B38GQPGF',
    affiliateUrl: url('B0B38GQPGF'),
    imageUrl: 'https://m.media-amazon.com/images/I/81WdaSB+uHL.AC_SL1500.jpg',
    badge: '',
    summary:
      'Two insulated cooler totes that keep frozen and chilled groceries cold on the trip home, no disposable bags required.',
    pros: [
      'Insulated lining protects cold and frozen foods',
      'Roomy build handles a full cold haul',
      'Wipeable interior cleans up after leaks',
    ],
    cons: [
      'Bulkier to store than flat totes',
      'Insulation adds a little weight',
    ],
    bestFor: 'Keeping frozen and refrigerated groceries cold in transit',
    howToUse:
      'Pack cold and frozen items together to help them stay chilled on the way home. Wipe the lining clean and air dry fully before folding.',
    whyWePicked:
      'We closed out this category with an insulated option because frozen groceries are exactly the trip people reach for a disposable plastic bag out of habit, worried about a long thaw on the way home. This cooler tote removes that excuse, keeping cold items cold without a single-use bag in sight.',
  },
]

export const productsByArticle = (slug: string) =>
  products
    .filter((p) => p.articleSlug === slug)
    .sort((a, b) => a.rank - b.rank)

export const topRankedProducts = () =>
  products.filter((p) => p.rank === 1)

export const getProduct = (articleSlug: string, rank: number) =>
  products.find((p) => p.articleSlug === articleSlug && p.rank === rank)
