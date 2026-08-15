const pieces = {

// PIANO SONATAS

"piano-sonata-1": {
  title: "Piano Sonata No. 1",
  project: "Piano Sonatas",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-piano-sonata-1.pdf",
  description: "See the related blog post.",
  relatedPages: [
    {
      title: "On composing fragments",
      url: "/blog/2026-04-25-fragments.html"
    },
    {
      title: "More fragments",
      url: "/blog/2026-06-01-more-fragments.html"
    }
  ],
  youtube: "https://www.youtube.com/watch?v=jkYH7sam_1o"
},

"piano-sonata-2": {
  title: "Piano Sonata No. 2",
  project: "Piano Sonatas",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-piano-sonata-2.pdf"
},

"piano-sonata-3": {
  title: "Piano Sonata No. 3",
  project: "Piano Sonatas",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-piano-sonata-3.pdf"
},

"piano-sonata-4": {
  title: "Piano Sonata No. 4",
  project: "Piano Sonatas",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-piano-sonata-4.pdf"
},

"piano-sonata-5": {
  title: "Piano Sonata No. 5",
  project: "Piano Sonatas",
  instrumentation: "Piano",
  movementInfo: "Four very brief movements",
  score: "/scores/thornock-neil-piano-sonata-5.pdf"
},

"piano-sonata-6": {
  title: "Piano Sonata No. 6",
  project: "Piano Sonatas",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-piano-sonata-6.pdf"
},

"piano-sonata-7": {
  title: "Piano Sonata No. 7",
  project: "Piano Sonatas",
  instrumentation: "Piano or clavichord",
  instrumentationFilters: ["piano", "clavichord"],
  movementInfo: "Three movements",
  description: `Each movement takes the hymn tune “Come, Come, Ye Saints” as a cantus firmus.`,
  score: "/scores/thornock-neil-piano-sonata-7.pdf"
},

"piano-sonata-8": {
  title: "Piano Sonata No. 8 (Piano Sonata No. ∞)",
  project: "Piano Sonatas",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-piano-sonata-8.pdf"
},

// OTHER PIANO

"my-fist-o-waltzes-no-1": {
  title: "My Fist o’ Waltzes No. 1",
  instrumentation: "Piano",
  description: "A Liszt-inspired waltz infused with the virtuosic spirit of the Romantic and with the polystylism of the 21st century.",
  score: "/scores/thornock-neil-my-fist-o-waltzes-no-1.pdf",
  youtube: "https://www.youtube.com/watch?v=x66T-KuBaiw"
},

suite: {
  title: "Suite",
  instrumentation: "Clavichord or piano",
  instrumentationFilters: ["clavichord", "piano"],
  movements: [
    "Allemande",
    "Courante",
    "Sarabande",
    "Gigue",
    "Musette"
  ],
  description: "Suitable for either clavichord or piano.",
  score: "/scores/thornock-neil-suite.pdf"
},

stellalunasol: {
  title: "Stella—Lunna—Sol",
  score: "/scores/thornock-neil-stella-luna-sol.pdf",
  instrumentation: "Piano",
  youtube: "https://www.youtube.com/watch?v=hSor0HCBjsY"
},

// NEW RAGTIME

lostwaltz1: {
  title: "Lost Waltz No. 1",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-lost-waltz-1.pdf",
  youtube: "https://www.youtube.com/watch?v=L608QeodbS4"
},

lostwaltz2: {
  title: "Lost Waltz No. 2",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-lost-waltz-2.pdf",
  youtube: "https://www.youtube.com/watch?v=59am0R9fFPI"
},

iridescentwaltz: {
  title: "Iridescent Waltz",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-iridescent-waltz.pdf",
  project: "Waltzes",
  youtube: "https://www.youtube.com/watch?v=-MYTVgfIpK4"
},

waltzdiptych1: {
  title: "Waltz Diptych 1",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-waltz-diptych-1.pdf",
  project: "Waltzes"
},

waltzdiptych2: {
  title: "Waltz Diptych 2",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-waltz-diptych-2.pdf",
  project: "Waltzes"
},

cirrusclouds: {
  title: "Cirrus Clouds",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-cirrus-clouds.pdf",
  project: "Waltzes"
},

fuselisnightmare: {
  title: "Fuseli's Nightmare",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-fuselis-nightmare.pdf",
  relatedPages: [
    {
      title: "More fragments",
      url: "/blog/2026-06-01-more-fragments.html"
    }
  ],
  project: "Waltzes",
  youtube: "https://www.youtube.com/watch?v=z1vJJF0tzs4"
},

wildflowers: {
  title: "Wildflowers",
  instrumentation: "Piano",
  movementInfo: "Eleven waltzes",
  description: "Eleven very short waltzes, intended to be performed as a set.",
  score: "/scores/thornock-neil-wildflowers.pdf",
  project: "Waltzes"
},

ragatelles: {
  title: "Ragatelles",
  instrumentation: "Piano",
  movements: [
    "Bandicoot Rag",
    "Blueberry Patch",
    "Broke Rag",
    "Crab Boil",
    "Fits and Starts",
    "Grandpa's Games",
    "Natterjack Rag",
    "Pickle Jam",
    "Quark",
    "Topsy Turvy"
  ],
  score: "/scores/thornock-neil-ragatelles.pdf",
  youtube: "https://www.youtube.com/watch?v=AOOWQDXu-uI&list=PLLo_KrfM9ZY9OZuFyrkt1Ctzft6uKfAEw"
},

trag: {
  title: "Trag",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-trag.pdf"
},

sonaragatina: {
  title: "Sonaragatina",
  project: "New Ragtime",
  instrumentation: "Piano",
  movementInfo: "Three movements",
  score: "/scores/thornock-neil-sonaragatina.pdf"
},

riverdeltabirds: {
  title: "River Delta Birds",
  project: "New Ragtime",
  instrumentation: "Piano",
  movements: [
    "Snowy Egret",
    "Blue Heron",
    "Black Ibis",
    "Caspian Tern"
  ],
  score: "/scores/thornock-neil-river-delta-birds.pdf"
},

ragoveralostpenny: {
  title: "Rag Over a Lost Penny",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-rag-over-a-lost-penny.pdf"
},

ragoveralostkey: {
  title: "Rag Over a Lost Key",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-rag-over-a-lost-key.pdf",
  description: `As a high school student, I attended
  a ragtime recital featuring a handful of William Bolcom's rags.
  I already knew Joplin's rags, but this new twist on the genre inspired me.
  Full of excitement, I ran home and wrote “Rag over a Lost Key.”
  This is essentially the same piece I wrote as a 17-year-old,
  but gussied up a bit after sitting unthought of four a few decades.`
},

notforanickel: {
  title: "Not for a Nickel",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-not-for-a-nickel.pdf"
},

mirage: {
  title: "Mirage",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-mirage.pdf"
},

ephemerag: {
  title: "Ephemerag",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-ephemerag.pdf"
},

beamish: {
  title: "Beamish",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-beamish.pdf"
},

ackamarackus: {
  title: "Ackamarackus",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-ackamarackus.pdf"
},

zigrag: {
  title: "Zig Rag",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-zig-rag.pdf",
  description: `Lots of angular writing in this piece, zig-zagging around.
  You know, zig zig, zig rag... yeah, hilarious, I know.`
},

takeit: {
  title: "Take It",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-take-it.pdf"
},

sippinfrommykleinbottle: {
  title: "Sippin from My Klein Bottle",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-sippin-from-my-klein-bottle.pdf"
},

radrag: {
  title: "Rad Rag",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-rad-rag.pdf"
},

prismatic: {
  title: "Prismatic",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-prismatic.pdf"
},

philosophersrag: {
  title: "Philosopher’s Rag",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-philosophers-rag.pdf"
},

octobermoon: {
  title: "October Moon",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-october-moon.pdf"
},

mandelbrotsgrapefruit: {
  title: "Mandelbrot’s Grapefruit",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-mandelbrots-grapefruit.pdf",
  youtube: "https://www.youtube.com/watch?v=bMTUMHiCGiA"
},

lakesiderevery: {
  title: "Lakeside Revery",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-lakeside-revery.pdf"
},

jalopy: {
  title: "Jalopy",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-jalopy.pdf"
},

intriguerag: {
  title: "Intrigue Rag",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-intrigue-rag.pdf"
},

dodecarag: {
  title: "Dodecarag",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-dodecarag.pdf",
  description: `Begun on Schoenberg's 150th birthday.`
},

backyardchickens: {
  title: "Backyard Chickens",
  project: "New Ragtime",
  movements: [
    "Hen Hut Rag",
    "Roost",
    "Peck! Peck!"
  ],
  instrumentation: "Piano",
  score: "/scores/thornock-neil-backyard-chickens.pdf",
  youtube: "https://www.youtube.com/watch?v=P0aYZ1dfvhU"
},

turtlestew: {
  title: "Turtle Stew",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-turtle-stew.pdf"
},

tangerineserenade: {
  title: "Tangerine Serenade",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-tangerine-serenade.pdf",
  youtube: "https://www.youtube.com/watch?v=emHbvScOOvM"
},

spaceglider: {
  title: "Space Glider",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-space-glider.pdf"
},

somethingspring: {
  title: "Something Spring",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-something-spring.pdf",
  youtube: "https://www.youtube.com/watch?v=YLZrM_vdv6M"
},

ramshacklestrawberry: {
  title: "Ramshackle Strawberry",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-ramshackle-strawberry.pdf"
},

meanderag: {
  title: "Meanderag",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-meanderag.pdf"
},

maplecopterrag: {
  title: "Maple Copters Rag",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-maple-copters-rag.pdf",
  youtube: "https://www.youtube.com/watch?v=9lgPUISRw2g"
},

labyrinth: {
  title: "Labyrinth",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-labyrinth.pdf",
  youtube: "https://www.youtube.com/watch?v=FGTuGKahtSQ"
},

junicornrag: {
  title: "Junicorn Rag",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-junicorn-rag.pdf",
  youtube: "https://www.youtube.com/watch?v=rQkXF4BejNM"
},

fluxion: {
  title: "Fluxion",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-fluxion.pdf",
  youtube: "https://www.youtube.com/watch?v=rT4goBdBDvw"
},

dreamdance: {
  title: "Dream Dance",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-dream-dance.pdf"
},

dallyrag: {
  title: "Dally Rag",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-dally-rag.pdf",
  youtube: "https://www.youtube.com/watch?v=7AJFAiwfb64"
},

bluedoorstomp: {
  title: "Blue Door Stomp",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-blue-door-stomp.pdf",
  youtube: "https://www.youtube.com/watch?v=HwRYM6kGABE"
},

bamboozle: {
  title: "Bamboozle",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-bamboozle.pdf",
  youtube: "https://www.youtube.com/watch?v=kYliGPz-2BQ"
},

// ORGAN

"variations-on-slane": {
  title: "Variations on Slane",
  instrumentation: "Organ",
  description: `One of my two sets of hymn variations (see also my <a href="neilthornock.org/?piece=canonic-variations">Canonic Variations on <em>Lord, We Come before Thee Now</em></a>), on one of my favorite hymn tunes. Composed in 2014.`,
  project: "Hymn Settings",
  youtube: "https://www.youtube.com/watch?v=lnE-r9foHC4",
  score: "/scores/thornock-neil-variations-on-slane.pdf"
},

spheres: {
  title: "Spheres",
  instrumentation: "Organ",
  description: `As with my piece <a href="https://neilthornock.org/?piece=odyssey"><em>Odyssey</em></a>, the melody was written with a hand-coded algorithm—this piece was generated by an earlier version of the algorithm. I’m also leaning harder into the detuning effects with the tierce stop here.`,
  score: "/scores/thornock-neil-spheres.pdf",
  youtube: "https://www.youtube.com/watch?v=DRw57-f8jdw"
},

odyssey: {
  title: "Odyssey",
  instrumentation: "Organ",
  description: `An algorithmic “melody” accompanied by drones that give it harmonic context, an elaboration of the algorithm used in <a href="https://neilthornock.org/?piece=spheres"><em>Spheres</em></a>. It uses one of my favorite tricks: the drone notes on the Swell are the Tierce stop, which is tuned to the fifth harmonic, about 16 cents flat of the equal tempered pipes, resulting in the detuned shimmer throughout the piece. In these days of AI, hand-coded algorithmic music may sound quaint, but I like to think that, someday, our nostalgia for days when real people knew how to write computer programs will bring us back to hackneyed, old-fashioned algorithms.`,
  score: "/scores/thornock-neil-odyssey.pdf",
  youtube: "https://www.youtube.com/watch?v=3m0yCJi7Ig4"
},

groovelitanies: {
  title: "Groove Litanies",
  instrumentation: "Organ",
  score: "/scores/thornock-neil-groove-litanies.pdf",
  youtube: "https://www.youtube.com/watch?v=ArnV-Ads9P8"
},

sixfuguesoncage: {
  title: "Six Fugues on CAGE",
  instrumentation: "Organ",
  score: "/scores/thornock-neil-six-fugues-on-cage.pdf",
  description: "Fugues on the name of Cage, about the most un-Cage-like homage one could make (though mine isn’t the first such set). Begun in the mid-2010s with most of the first fugue and the subjects for the other five; resumed and finished on 30 June 2026."
},

"restless-iteration": {
  title: "Restless Iteration",
  instrumentation: "Organ",
  description: `One of my six pieces inspired by and named from Wallace Stevens’ “The Place of the Salitaires.” This piece marked a culmination in my technique as an organist (I spent two years learning this thing) and a summation of my technique as a composer to that point—looping structures, grooves, ostinati, bitonality, Messiaen's modes, spectral (harmonic-series-based) harmony, melody, juxtapositions, etc.`,
  score: "/scores/thornock-neil-restless-iteration.pdf",
  youtube: "https://www.youtube.com/watch?v=2GVDHS01x1k",
  project: "Hexaptych"
},

  "manifold-continuation": {
    title: "Manifold Continuation",
    instrumentation: "Organ",
    description: `One of my six pieces inspired by and named from Wallace Stevens’ “The Place of the Solitaires,” and the first of the set to be written (in 2003). Premiered by Don Cook in his October 2004 Eccles Organ Festival recital, and performed by him again as part of the inaugural organ recitals for BYU’s new Letourneau organ.`,
    score: "/scores/thornock-neil-manifold-continuation.pdf",
    project: "Hexaptych"
  },

  "renewal-of-noise": {
    title: "Renewal of Noise",
    instrumentation: "Organ",
    description: `One of my six pieces inspired by and named from Wallace Stevens’ “The Place of the Solitaires.”`,
    score: "/scores/thornock-neil-renewal-of-noise.pdf",
    project: "Hexaptych"
  },

  "noise-of-motion": {
    title: "Noise of Motion",
    instrumentation: "Organ",
    description: `One of my six pieces inspired by and named from Wallace Stevens’ “The Place of the Solitaires.”`,
    score: "/scores/thornock-neil-noise-of-motion.pdf",
    project: "Hexaptych"
  },

  "motion-of-thought": {
    title: "Motion of Thought",
    instrumentation: "Organ",
    description: `One of my six pieces inspired by and named from Wallace Stevens’ “The Place of the Solitaires,” and the longest of the set.`,
    score: "/scores/thornock-neil-motion-of-thought.pdf",
    project: "Hexaptych"
  },

  "perpetual-undulation": {
    title: "Perpetual Undulation",
    instrumentation: "Organ",
    description: `One of my six pieces inspired by and named from Wallace Stevens’ “The Place of the Solitaires.”.`,
    score: "/scores/thornock-neil-perpetual-undulation.pdf",
    project: "Hexaptych"
  },

"pavane-and-galliard": {
  title: "Pavane and Galliard",
  instrumentation: "Organ",
  movements: [
    "Pavane",
    "Galliard"
  ],
  description: `For organ manuals. Written at the request of, and for, Carson Cooman.`,
  score: "/scores/thornock-neil-pavane-and-galliard.pdf"
},

"he-is-not-here": {
  title: "He is not here; for he is risen",
  instrumentation: "Organ",
  description: "Version for standard-tuned concert organ. The video below links to the version for 31-tone organ.",
  score: "/scores/thornock-neil-he-is-not-here-for-he-is-risen.pdf",
  youtube: "https://www.youtube.com/watch?v=ZboqBJ_I1I4"
},

"motion-fragments": {
  title: "Motion Fragments",
  movementInfo: "Three movements",
  description: `These pieces started as fragmentary sketches for the “motion” movements of <a href="https://neilthornock.org/projects/hexaptych.html"><em>Hexaptych</em></a>, but they didn’t make the cut for the set in the end. See also <a href="https://neilthornock.org/?piece=exordium"><em>Exordium</em></a> for another such sketch.`,
  instrumentation: "Organ",
  score: "/scores/thornock-neil-motion-fragments.pdf"
},

"fugue-and-passacaglia": {
  title: "Fugue and Passacaglia",
  instrumentation: "Organ",
  description: `A couple little unfinished trinkets, fetching as they are, and all the better for keeping each other company.`,
  score: "/scores/thornock-neil-fugue-and-passacaglia.pdf"
},

"timpanogos-litanies": {
  title: "Timpanogos Litanies",
  instrumentation: "Organ",
  description: "Performable on standard concert organ or on digital organ tuned to 5edo. The video below features the 5edo version.",
  score: "/scores/thornock-neil-timpanogos-litanies.pdf",
  youtube: "https://www.youtube.com/watch?v=EUNDPFXHJ2o",
  project: "Microtonal Organ"
},

"canonic-variations": {
  title: "Canonic Variations on <em>Lord, We Come before Thee Now</em>",
  instrumentation: "Organ",
  score: "/scores/thornock-neil-lord-we-come-before-thee-now.pdf"
},

"toccata-0": {
  title: "Toccata No. 0",
  description: "(Probably) the second piece I wrote for organ. Or maybe the first...",
  instrumentation: "Organ",
  score: "/scores/thornock-neil-toccata-0.pdf"
},

"two-preludes": {
  title: "Two Preludes",
  description: "The first of these is (probably) the first piece I wrote for organ.",
  instrumentation: "Organ",
  score: "/scores/thornock-neil-two-preludes.pdf"
},

"two-more-preludes": {
  title: "Two More Preludes",
  instrumentation: "Organ",
  score: "/scores/thornock-neil-two-more-preludes.pdf"
},

visions: {
  title: "Visions",
  movementInfo: "Three movements",
  instrumentation: "Organ",
  score: "/scores/thornock-neil-visions.pdf"
},

  chordo: {
    title: "Chordo",
    movements: [
      "24x2",
      "60x2",
      "12x2",
      "48x2"
    ],
    instrumentation: "Organ",
    score: "/scores/thornock-neil-chordo.pdf"
  },

"toccata-fugue": {
  title: "Toccata-Fugue",
  description: "Rather than a toccata <em>and</em> fugue, this is a toccata <em>as</em> fugue.",
  instrumentation: "Organ",
  score: "/scores/thornock-neil-toccata-fugue.pdf"
},

"trio-sonata": {
  title: "Trio Sonata",
  instrumentation: "Organ",
  description: "One quite brief—albeit charming—movement.",
  score: "/scores/thornock-neil-trio-sonata.pdf"
},


"eccentric": {
  title: "Eccentric",
  instrumentation: "Organ",
  score: "/scores/thornock-neil-eccentric.pdf"
},

"vespers": {
  title: "Vespers",
  instrumentation: "Organ",
  score: "/scores/thornock-neil-vespers.pdf"
},

  "moon-kissd-conifers-organ": {
    title: "Moon-kiss'd Conifers (organ)",
    instrumentation: "Organ",
    description: `A transcription for organ of a work I composed for accordion. See <a href="https://neilthornock.org/?piece=moon-kissd-conifers">this page</a> for the accordion version of this piece for more details.`,
    score: "/scores/thornock-neil-moon-kissd-conifers-organ.pdf"
  },

  "fantasy-organ": {
    title: "Fantasy",
    instrumentation: "Organ",
    description: "One of my early attempts to write a larger organ work. I remember taking this piece in to a lesson with David Sargent, who criticized the piece for not being harmonically clear. The following week I snapped the pitches in various passages to Messiaen's third mode, changing the transposition of the mode now and then—even at that time it seemed like a cheap trick. After Dave pronounced it much better at the next lesson, I wasn't sure if it was actually much improved, or if I pulled the wool over his eyes, or if he just wanted to move on to the next project. Well ... maybe the piece is good? Here it is anyway.",
    score: "/scores/thornock-neil-fantasy-organ.pdf"
  },

  exordium: {
    title: "Exordium",
    instrumentation: "Organ",
    description: `One of many fragments from around 2010 as I was writing <a href="https://neilthornock.org/projects/hexaptych.html"><em>Hexaptych</em></a>, a sketch I ended up not including in that set of pieces. See also <a href="https://neilthornock.org/?piece=motion-fragments"><em>Motion Fragments</em></a> for other such sketches.`,
    score: "/scores/thornock-neil-exordium.pdf"
  },

  quark: {
    title: "Quark",
    instrumentation: "Organ",
    description: "Over the years, I accumulated a large number of sketches and drafts on my hard drive, pieces I would start but then lose inspiration for, or not know how to complete, or I would get distracted by another more exciting project. I have no idea where this little fragment came from, but it was compelling enough to tidy up.",
    score: "/scores/thornock-neil-quark.pdf"
  },

  "beloved-soul": {
    title: "Beloved Soul",
    instrumentation: "Organ",
    description: "This little piece started life as a movement for clarinet and piano from an intended multi-movement work for Pierrot ensemble (or some such instrumentation). It was labeled as Mvt. VII but was, as far as I can see, the only one I wrote. In any case, it makes for a charming organ work, I think.",
    score: "/scores/thornock-neil-beloved-soul.pdf"
  },

  "variations-on-puer-natus": {
    title: "Variations on Puer Natus",
    instrumentation: "Organ",
    description: `Inspired by John Cage’s experiments with musical erasures of early American hymnody (see his <em>Some of “The Harmony of Maine”</em>), and equally inspired by Buxtehude’s <em>Puer natus in Bethlehem</em>—written during my early student days. Around that time I was quite inspired by Buxtehude. See, for the best example, my piece <a href="https://neilthornock.org/?piece=buxtehude-remix"><em>Buxtehude Remix</em></a>, a slapdash pastiche of Buxtehude pieces, and also <a href="https://neilthornock.org/?piece=praeludium"><em>Praeludium</em></a>.`,
    score: "/scores/thornock-neil-variations-on-puer-natus.pdf"
  },

  praeludium: {
    title: "Praeludium",
    instrumentation: "Organ",
    description: `Inspired by the big organ preludes of Buxtehude, but left incomplete and hidden on my hard drive until I dug it up and gave it a finish, one of a few of my Buxtehude-inspired pieces (see also <a href="https://neilthornock.org/?piece=variations-on-puer-natus"><em>Variations on Puer Natus</em></a> and <a href="https://neilthornock.org/?piece=buxtehude-remix"><em>Buxtehude Remix</em></a>).`,
    score: "/scores/thornock-neil-praeludium.pdf"
  },

  "buxtehude-remix": {
    title: "Buxtehude Remix",
    instrumentation: "Organ",
    description: `A remix of a few pieces of Buxtehude. I don’t remember exactly what I did, but apparently I did it, and here it is, bits and pieces of Buxtehude played on top of each other, bitonal and wonky as can be. When I compiled all my organ work in 2026, I found a large number of incomplete sketches, most of which I finished up for the collection. This one, I decided, was best left unfinished as it was, an appropriate approach for something already hacked up and pieced together. For my other takes on Buxtehude, see <a href="https://neilthornock.org/?piece=variations-on-puer-natus"><em>Variations on Puer Natus</em></a> and <a href="https://neilthornock.org/?piece=praeludium"><em>Praeludium</em></a>.`,
    score: "/scores/thornock-neil-buxtehude-remix.pdf"
  },

  "fanfare-toccata": {
    title: "Fanfare Toccata",
    instrumentation: "Organ",
    description: "A sketch left incomplete on my hard drive for many years, tidied up and polished off in 2026, the kind of dissonant, percussive thing I liked but perhaps knew better than to do. Well ... it’s not so bad, is it?",
    score: "/scores/thornock-neil-fanfare-toccata.pdf"
  },

  carilliope: {
    title: "Carilliope",
    instrumentation: "Organ",
    description: `A work originally intended for carillon and calliope (get it? <em>Carilliope</em>—HAHAHA!!), as cheesy as ever, and a precursor to <a href="https://neilthornock.org/projects/new-ragtime.html">my hard left turn toward ragtime</a>. Well, the original instrumentation would be cute but as impractical as anything, so get those bells swinging metaphorically I guess. I unashamedly, unironically like this piece.`,
    score: "/scores/thornock-neil-carilliope.pdf"
  },

  "organ-sketchbook": {
    title: "Organ Sketchbook",
    instrumentation: "Organ",
    description: `My version of an <em>Orgelbüchlein</em> of sorts (actually, that would be the <a href="https://neilthornock.org/projects/millennium-book.html"><em>Millennium Book</em></a>), this is a collection of sketches that didn’t otherwise have a home, and which I, for whatever reason, collected together. (There could have been many more sketches in this particular sketchbook had I been more thorough ... but those are all lurking somewhere here ... ) The compositional approaches range from a nice melody, as in <em>Song</em> (which I might originally have intended for melodica duo) to a wildly experimental math-y thing (<em>Systems</em>). I think they would somehow work nicely as a set, but only in light of the coup of postmodernist pastiche.`,
    score: "/scores/thornock-neil-organ-sketchbook.pdf"
  },

  "halcyon": {
    title: "Halcyon",
    instrumentation: "Organ duet",
    instrumentationFilters: ["Organ"],
    description: `My only organ duet. I had intended to write 20 movements and make this the fourth volume of the <a href="https://neilthornock.org/projects/millennium-book.html"><em>Millennium Book</em></a>, but ... I burned out. So, we get 7 movements—the perfect number :)`,
    score: "/scores/thornock-neil-halcyon.pdf"
  },

  aria: {
    title: "Aria",
    instrumentation: "Organ",
    description: `Originally written for digital organ tuned to 7edo (see also my <a href="https://neilthornock.org/projects/edotudes.html"><em>Edotudes</em></a>), I think this works beautifully for good ol’ 12-tone equal temperament. Sometimes an alternate tuning can open up paths that result in better 12-equal music than you might otherwise write. See, for example, my large-scale 5edo organ sonata <a href="https://neilthornock.org/?piece=timpanogos-litanies"><em>Timpanogos Litanies</em></a> and my 7edo <a href="https://neilthornock.org/?piece=toccata-2"><em>Toccata</em></a>, each also performable on standard concert organ.`,
    score: "/scores/thornock-neil-aria.pdf"
  },

  splendoris: {
    title: "Splendoris",
    instrumentation: "Organ",
    description: `From my student days, when I was smitten with the work of Brian Ferneyhough and the sonic effect of his <em>Sieben Sterne</em>—but probably most directly inspired by Xavier Darasse’s amazing work <a href="https://www.youtube.com/watch?v=rStyLi0jeIU&list=OLAK5uy_m4j7LiHpxC0qJ5iP8P7nbMxcbqlsras2Y&index=3" target="_blank" rel="noopener"><em>Organum III ↗</em></a>, which I bought on some rando CD during a student field trip to Germany, and it changed my life (seriously, listen to that piece). <em>Splendoris</em> doesn’t quite achieve what I had wanted to, though it may be a pretty good piece. (I did finally crack the code for reals; see <a href="https://neilthornock.org/?piece=restless-iteration"><em>Restless Iteration</em></a>.)`,
    score: "/scores/thornock-neil-splendoris.pdf"
  },

  didymus: {
    title: "Didymus",
    instrumentation: "Organ",
    description: `The other name of Thomas the apostle, which means “twin” (as does the name Thomas itself), which I used here when I initially wrote this piece for two melodicas (twins), played by one performer, but modified here for organ solo—a better solution to the musical material, and still “twinning” between two manuals.`,
    score: "/scores/thornock-neil-didymus.pdf"
  },

  canzonetta: {
    title: "Canzonetta",
    instrumentation: "Organ",
    description: `Originally for two melodicas (seriously, <a href="https://neilthornock.org/?piece=didymus">how many of those did I have to write?</a>), made much better, I think, as an organ solo. Titled <em>Canzonetta</em> in honor of the piece of the same name by Buxtehude (the G major double-notey-thing), which I played in Germany on a student field trip, and which my not-yet-bride Tammy fell in love with when she heard me play it.`,
    score: "/scores/thornock-neil-canzonetta.pdf"
  },

  "sorting-machine": {
    title: "Sorting Machine",
    instrumentation: "Organ",
    description: `I’m using some kind of sorting algorithms here (maybe not <em>efficient</em> sorting algorithms ... this is art after all) to get an angular melody into a scale.`,
    score: "/scores/thornock-neil-sorting-machine.pdf"
  },

  "toccata-2": {
    title: "Toccata (7edo)",
    instrumentation: "Organ",
    description: `A toccata originally written for digital organ tuned to 7edo, but it works well in 12-tone equal temperament as well.`,
    score: "/scores/thornock-neil-toccata-2.pdf",
    youtube: "https://www.youtube.com/watch?v=kFoXuN_gkJM",
    project: "Microtonal Organ"
  },

  "fantasia-and-passacaglia": {
    title: "Fantasia and Passacaglia",
    instrumentation: "Organ",
    description: `Assembled from abandoned sketches I found on my hard drive in 2026. The passacaglia came from a time when I kept trying to write ginormous-as-heck passacaglias with mega-long bass lines (see also <a href="https://neilthornock.org/?piece=orbit"><em>Orbit</em></a>), the result of the inexorable Reger influence on the organist in me.`,
    score: "/scores/thornock-neil-fantasia-and-passacaglia.pdf"
  },

  toccatina-organ: {
    title: "Toccatina (organ)",
    instrumentation: "Organ",
    description: `A charming little fragment dug up from my hard drive, which I decided could be a whole piece if played three times, each a slight tad bit different.`,
    score: "/scores/thornock-neil-toccatina-organ.pdf"
  },

  "toccata-1": {
    title: "Toccata No. 1",
    instrumentation: "Organ",
    description: `I wrote this to try to impress one of my favorite living organists (it didn’t seem to work), but I still think it may be a decent piece.`,
    score: "/scores/thornock-neil-toccata-1.pdf"
  },

  eikositriophilia: {
    title: "Eikositriophilia",
    instrumentation: "Organ",
    description: `Compiling my complete organ works in 2026, I ran across the algorithm I used to write <a href="https://neilthornock.org/?piece=spheres"><em>Spheres</em></a> and <a href="https://neilthornock.org/?piece=odyssey"><em>Odyssey</em></a>, but those pieces are both gigantic, and I wanted to see if <em>ye olde algorithm</em> could make something shorter that was interesting, so I tightened up the algorithm, deciding (given my love of 23) to have it generate 529 notes (23x23), and then to repeat each 23-note chunk an alternating amount of 2x, 3x, 2x, 3x, etc. (you know, 2-3--2-3, like, you know, 23...). Except, rather than ending on 2x repeat (which doesn't finish a 23), I decided to end on a 5x repeat (2 <em>plus</em> 3—wow I’m clever). Well, I ran the algorithm twice, and liked ‘em both, and so we have two movements—and, of course, a title that means “the love of 23.”`,
    score: "/scores/thornock-neil-eikositriophilia.pdf"
  },

  snowdrops: {
    title: "Snowdrops",
    instrumentation: "Organ",
    description: `Written originally in Archy temperament with a pure 7/6 minor third, this pentatonic piece would work just fine in equal temperament as well.`,
    score: "/scores/thornock-neil-snowdrops.pdf",
    project: "Microtonal Organ",
    youtube: "https://youtu.be/0tR51CapCHM"
  },

  "duo-of-duo-sonatas": {
    title: "Duo of Duo Sonatas",
    instrumentation: "Organ",
    description: `These aren’t the more familiar trio sonatas but rather duo sonatas, manuals-only pieces. And there’s two of them. They started as melodica duos but work much better for organ.`,
    score: "/scores/thornock-neil-duo-of-duo-sonatas.pdf"
  },

  kromatikon: {
    title: "Kromatikon",
    instrumentation: "Organ",
    description: `Oh chromatic scales, how we love you! One of those obsessive pieces cut from the same cloth as <a href="https://neilthornock.org/?piece=seek-whence><em>Seek Whence</em></a> or <a href="https://neilthornock.org/?piece=orbit><em>Orbit</em></a>.`,
    score: "/scores/thornock-neil-kromatikon.pdf"
  },

  orbit: {
    title: "Orbit",
    instrumentation: "Organ",
    description: `Meditative, slow, like huge planets lumbering along their destined paths. Determined to write the longest passacaglia in the past and future history of the universe, I fortunately abandoned this thing long enough to come back to it and realize that it would work fine even if it were four hours shorter than originally intended.`,
    score: "/scores/thornock-neil-orbit.pdf"
  },

  wiltz: {
    title: "Wiltz",
    instrumentation: "Organ",
    description: `So <em>cheeeeezy</em> it didn’t make the cut for the <a href="https://neilthornock.org/projects/millennium-book.html"><em>Millennium Book</em></a>, but I LIKE IT ANYWAY!! So there.`,
    score: "/scores/thornock-neil-wiltz.pdf"
  },

  "passion-and-resurrection": {
    title: "Passion and Resurrection",
    instrumentation: "Organ",
    description: `Possibly a sketch that eventually led to <a href="https://neilthornock.org/?piece=he-is-not-here"><em>He is not here; for he is risen</em></a>.`,
    score: "/scores/thornock-neil-passion-and-resurrection.pdf"
  },

  "space-ditties": {
    title: "Space Ditties",
    instrumentation: "Organ",
    description: `The leftovers of my gigantic organ+electronics piece <a href="https://neilthornock.org/?piece=planetarium"><em>Planetarium</em></a>, but we’re fond of leftovers, aren’t we? Plus these ones don’t require electronics.`,
    score: "/scores/thornock-neil-space-ditties.pdf"
  },

  planetarium: {
    title: "Planetarium",
    instrumentation: "Organ and electronics",
    instrumentationFilters: ["Organ"],
    movements: [
      "Mercury",
      "Earth",
      "Neptune",
      "Haumea",
      "Pluto",
      "Oumuama",
      "Proxima Centauri b",
      "J1407b",
      "HAT-P-1b",
      "V803 Tauri b",
      "CoRoT-7b",
      "TrES-2b",
      "PSRJ1719-1438 b",
      "OGLE-2005-BLG-390Lb",
      "Kolob"
    ],
    description: `A sonic description of my impression of several celestial (and one terrestrial) bodies, from Mercury to Pluto to J1407b and clear out to Kolob of the Mormon collective consciousness, a work intended to be as maximally cosmic as possible.`,
    score: "/scores/thornock-neil-planetarium.pdf"
  },

  "passacaglia-fugue-and-dance": {
    title: "Passacaglia, Fugue, and Dance",
    instrumentation: "Organ",
    description: `A passacaglia, a fugue, and a dance, left on my hard drive like roadside litter, somehow found their way to each other in this little set of pieces. The passacaglia, like many of these sketches, is probably the better for being left unfinished—the abrupt ending leaves its potential for the imagination. The fugue (also mostly unfinished) is a rewrite of Bach’s fugue, which is a rewrite of something Legrenzi wrote (<a href="https://neilthornock.org/?piece=curio-cabinet">I did eventually complete a rewrite of a Bach rewrite</a>) And after such a joyful fragment of a dance, who cares where these three incompletions met up?`,
    score: "/scores/thornock-neil-passacaglia-fugue-and-dance.pdf"
  },

  "curio-cabinet": {
    title: "Curio Cabinet",
    instrumentation: "Organ",
    movements: [
      "Trumpet Tune",
      "Calliope",
      "Hymn with Variations",
      "Fugue"
    ],
    description: `An eclectic sonata of sorts, each of the movements engages with a real or imagined past in various ways: the trumpet tune, with a trumpet solo that slides across the register in ways Purcell wouldn’t have dreamed of; a frantic take on the joyful busy-ness of calliope music; a re-imagining of Yankee tunesmith voice-leading in an original “hymn”; and a fugue, that is based on a fuge, that is based on a (sort of?) fugue—my rewrite of Bach’s rewrite (BWV 954) of Reincken.`,
    score: "/scores/thornock-neil-curio-cabinet.pdf"
  },

  "chromatic-passacaglia-b": {
    title: "Chromatic Passacaglia B",
    instrumentation: "Organ",
    description: `In my obsession to make something of a strictly chromatic scale (see especially <a href="https://neilthornock.org/?piece=kromatikon"><em>Kromatikon</em></a>), I wrote a passacaglia on ostensibly the most dullest series of pitches imaginable. (I don’t really believe that...) See also the <em>other</em> chromatic passacaglia, <a href="https://neilthornock.org/?piece=chromatic-passacaglia"><em>Chromatic Passacaglia</em></a>.`,
    score: "/scores/thornock-neil-chromatic-passacaglia-b.pdf"
  },

  "chromatic-passacaglia": {
    title: "Chromatic Passacaglia",
    instrumentation: "Organ",
    description: `In my obsession to make something of a strictly chromatic scale (see especially <a href="https://neilthornock.org/?piece=kromatikon"><em>Kromatikon</em></a>), I wrote a passacaglia on ostensibly the most dullest series of pitches imaginable. (I don’t really believe that...) See also the <em>other</em> chromatic passacaglia, <a href="https://neilthornock.org/?piece=chromatic-passacaglia-b"><em>Chromatic Passacaglia B</em></a>.`,
    score: "/scores/thornock-neil-chromatic-passacaglia.pdf"
  },

  "seek-whence": {
    title: "Seek Whence",
    instrumentation: "Organ",
    description: `A piece consisting of obsessively worked-over sequences (seek-whence, sequence ... oh boy it must be getting late), two of which I stole from Bach, and one which may have come from Dudley Buck, or was at least inspired by ... though I don’t remember from which specific Bach and Buck pieces—for that info, you’ll have to (ahem) <em>seek whence</em> the fragments came.`,
    score: "/scores/thornock-neil-seek-whence.pdf"
  },

  magma: {
    title: "Magma",
    instrumentation: "Organ",
    description: `Ooze slowly oozing—but don’t get too close.`,
    score: "/scores/thornock-neil-magma.pdf"
  },

  "tilk-talk": {
    title: "Tilk Talk",
    instrumentation: "Organ",
    description: `A series of variations on a tune—the tune is folksy as can be; the variations, anything but.`,
    score: "/scores/thornock-neil-tilk-talk.pdf"
  },

  marbles: {
    title: "Marbles",
    instrumentation: "Organ",
    description: `A collection of tiny-to-short preludes with the initial goal of trying out some of Messiaen’s techniques—but I quickly turned toward other sources of inspiration.`,
    score: "/scores/thornock-neil-marbles.pdf"
  },

  "meditatio-commotio": {
    title: "Meditatio/Commotio",
    instrumentation: "Organ",
    description: `A student work, what I called a ‘liturgical drama,’ one of my first works in which I grappled with many movements spread across a large(-ish) structure.`,
    score: "/scores/thornock-neil-meditatio-commotio.pdf"
  },

  "space-pastoral": {
    title: "Space Pastoral",
    instrumentation: "Organ",
    description: `I wrote this piece for my daughter Megan to try to pique her interest in playing the organ. I intended it to be at her skill level at the time. She improvised the 16th-note line that features in the last half of the piece with such panache that I had to use it.`,
    score: "/scores/thornock-neil-space-pastoral.pdf"
  },

  klb: {
    title: "klb",
    instrumentation: "Organ",
    description: `A brief piece that grew from my attempts to write the Kolob movement of <a href="https://neilthornock.org/?piece=planetarium"><em>Planetarium</em></a>.`,
    score: "/scores/thornock-neil-klb.pdf"
  },

  "beethovens-rule-britannia": {
    title: "Beethoven’s “Rule Britannia”",
    instrumentation: "Organ",
    description: `Take Beethoven’s <em>5 Variations “Rule Britannia,”</em> switch it from piano (booorrrringggg) to organ (yay!), pump it full of 21st-century juice, and then decide not to finish the project—<em>voila!</em>—you have the makings of a quirky postmodern organ piece. I did similar things with van den Gheyn in my <a href="https://neilthornock.org/?piece=preeloodiooz1"><em>Preeloodiooz 1</em></a> and <a href="https://neilthornock.org/?piece=preeloodiooz2"><em>Preeloodiooz 2</em></a> for carillon.`,
    score: "/scores/thornock-neil-beethovens-rule-britannia.pdf"
  },

  "hard-rock": {
    title: "Hard Rock",
    instrumentation: "Organ",
    description: `I thought I’d write a piece that put the <em>hard-as-in-difficult</em> into <em>hard rock</em>. I got halfway there—hard enough, I’d say, and hopefully loads of fun.`,
    score: "/scores/thornock-neil-hard-rock"
  },

  "variations-on-come-o-thou-king": {
    title: "Variations on “Come, O Thou King of Kings”",
    instrumentation: "Organ",
    description: `I wrote the theme of this set of variations as a four-part vocal setting of the text by early Mormon apostle Parley P. Pratt “Come, O Thou King of Kings.” I liked it well enough to write a whole series of variations. I capped it with a big double fugue, a genre that has enchanted me since I learned Bach’s Fugue on a Theme by Giovanni Legrenzi as a university freshman.`,
    score: "/scores/thornock-neil-variations-on-come-o-thou-king.pdf"
  },

  questus: {
    title: "Questus",
    instrumentation: "Organ",
    description: `Written for my college buddy Art Moore and then revised a bit later, this was the piece I wrote intending to poke my thumb in the eyes of my modernist-leaning composition teachers. Turns out, they weren’t as modernist as I had suspected, and they loved the piece. It was a moment that taught me to follow my own instinct, forget what anyone else has to say about it.`,
    score: "/scores/thornock-neil-questus.pdf"
  },

// HYMNS

"angels-we-have-heard-on-high": {
  title: "Angels We Have Heard on High",
  instrumentation: "Organ",
  score: "/scores/thornock-neil-angels-we-have-heard-on-high.pdf",
  project: "Hymn Settings"
},

"for-the-beauty-of-the-earth": {
  title: "For the Beauty of the Earth",
  instrumentation: "Organ",
  score: "/scores/thornock-neil-for-the-beauty-of-the-earth.pdf",
  project: "Hymn Settings"
},

seymour: {
  title: "Prelude on Seymour",
  instrumentation: "Organ",
  score: "/scores/thornock-neil-seymour.pdf",
  project: "Hymn Settings"
},

"the-lord-my-pasture": {
  title: "The Lord My Pasture Will Prepare",
  instrumentation: "Organ",
  score: "/scores/thornock-neil-the-lord-my-pasture.pdf",
  project: "Hymn Settings"
},

caithness: {
  title: "Caithness",
  instrumentation: "Organ",
  score: "/scores/thornock-neil-caithness.pdf",
  project: "Hymn Settings"
},

"i-need-thee-2": {
  title: "I Need Thee Every Hour",
  description: `Hymn settings in my church could do with less solemnity and more joy, or even playfulness (see also my arrangement of <a href="https://neilthornock.org/?piece=i-am-a-child-of-god"<em>I Am a Child of God</em></a>).`,
  instrumentation: "Organ",
  score: "/scores/thornock-neil-i-need-thee-every-hour-2.pdf",
  project: "Hymn Settings"
},

"father-in-heaven": {
  title: "Father in Heaven, We Do Believe",
  instrumentation: "Organ",
  description: "Free accompaniment.",
  score: "/scores/thornock-neil-father-in-heaven-we-do-believe.pdf",
  project: "Hymn Settings"
},

"sabbath-day-short": {
  title: "Sabbath Day (short version)",
  instrumentation: "Organ",
  score: "/scores/thornock-neil-sabbath-day-short.pdf",
  project: "Hymn Settings"
},

  "let-zion-in-her-beauty-rise": {
  title: "Let Zion in Her Beauty Rise",
  instrumentation: "Organ",
  score: "/scores/thornock-neil-let-zion-in-her-beauty-rise.pdf",
  project: "Hymn Settings"
},

"ill-seek-the-lord-early-1": {
  title: "I'll Seek the Lord Early",
  description: "The first of two settings.",
  instrumentation: "Organ",
  score: "/scores/thornock-neil-ill-seek-the-lord-early-1.pdf",
  project: "Hymn Settings"
},

"thee-hymn-harmonizations": {
  title: "Three Hymn Harmonizations",
  instrumentation: "Organ",
  score: "/scores/thornock-neil-three-hymn-harmonizations.pdf",
  project: "Hymn Settings"
},

"nearer-my-god-to-thee": {
  title: "Nearer, My God, to Thee",
  instrumentation: "Organ",
  score: "/scores/thornock-neil-nearer-my-god-to-thee.pdf",
  project: "Hymn Settings"
},

"prayer-is-the-souls-sincere-desire": {
  title: "Prayer Is the Soul's Sincere Desire",
  instrumentation: "Organ",
  score: "/scores/thornock-neil-prayer-is-the-souls-sincere-desire.pdf",
  project: "Hymn Settings"
},

  "christ-the-lord-is-risen-today": {
    title: "Christ the Lord Is Risen Today",
    instrumentation: "Organ",
    score: "/scores/thornock-neil-christ-the-lord-is-risen-today.pdf"
  },

  "five-bicinia": {
    title: "Five Bicinia",
    instrumentation: "Organ",
    movements: [
      "Come, Come, Ye Saints",
      "Amazing Grace",
      "Come Thou Fount",
      "A Poor Wayfaring Man of Grief",
      "The Lord’s My Shepherd"
    ],
    description: `I wrote these pieces as a demonstration for my counterpoint class, whom I assign to write a bicinium. I have always loved setting “Come, Come, Ye Saints” (<a href="https://neilthornock.org/?piece=piano-sonata-7">see here for a fresh take on the tune</a> and <a href="https://neilthornock.org/?piece=come-come-ye-saints-choir">here for a fresh take on the text</a>), partly because it’s tricky-slash-fun and partly because there is so much more to be done with such an iconic LDS tune. “Amazing Grace” finally hit Latter-day Saint hymnbooks, which is reason enough for lots of settings of this amazingly graceful tune so long neglected in my tradition; same with “Come Thou Fount.” The tune to “A Poor Wayfaring Man of Grief” is even more difficult to work with than “Come, Come Ye Saints”—it’s so meandering and notey—but hey, counterpoint will get you anywhere. And finally “The Lord’s My Shepherd, another wonderful old tune that’s new to my religious tradition.`,
    score: "/scores/thornock-neil-five-bicinia.pdf"
  },

// MILLENNIUM BOOK

"spring-song": {
  title: "Spring Song",
  project: "Millennium Book",
  instrumentation: "Organ",
  youtube: "https://www.youtube.com/watch?v=HXYH9ouvLQ0",
  extScore: {
    href: "https://fireheadorganworks.com/shop/ols/products/fh152-millennium-organ-book-vol-1",
    label: "Purchase score from Firehead ↗"
  }
},

// HYMN SETTINGS

"away-in-a-manger-2": {
  title: "Away in a Manger (2nd ver.)",
  project: "Hymn Settings",
  instrumentation: "Organ",
  score: "/scores/thornock-neil-away-in-a-manger-2.pdf",
  youtube: "https://www.youtube.com/watch?v=TOvDS1z6Z9c"
},

"triptych-on-o-come-o-come-emmanuel": {
  title: "Triptych on O Come, O Come, Emmanuel",
  instrumentation: "Organ",
  project: "Hymn Settings",
  movementInfo: "Three movements",
  score: "/scores/thornock-neil-triptych-on-o-come.pdf",
  youtube: "https://www.youtube.com/playlist?list=PLLo_KrfM9ZY_tolbFvne-LVdAoTfbP1yG"
},

"i-am-a-child-of-god": {
  title: "I Am a Child of God",
  project: "Hymn Settings",
  instrumentation: "Organ",
  score: "/scores/thornock-neil-i-am-a-child-of-god.pdf",
  youtube: "https://www.youtube.com/watch?v=LDL_8FN8GQk"
},

// PIANO HYMN SETTINGS

ohthedeepdeeplove: {
  title: "Oh, the Deep, Deep Love of Jesus",
  project: "Hymn Settings",
  instrumentation: "Piano",
  description: "Setting of a tune by Stephen Jones.",
  score: "/scores/thornock-neil-oh-the-deep-deep-love.pdf",
  youtube: "https://www.youtube.com/watch?v=fIqP0DvqNYE"
},

amazinggrace: {
  title: "Amazing Grace",
  project: "Hymn Settings",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-amazing-grace.pdf"
},

// CARILLON
  
bookofbronze: {
  title: "Book of Bronze",
  movements: [
    "Evening Reflection",
    "Echoes",
    "Topple",
    "Sway",
    "Hillside"
  ],
  description: "Brief movements for three-octave carillon.",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-bookofbronze.pdf"
},

campanarium1: {
  title: "Campanarium 1",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-campanarium1.pdf",
  youtube: "https://www.youtube.com/watch?v=jP5UuWXUHS4"
},

campanarium2: {
  title: "Campanarium 2",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-campanarium2.pdf",
  youtube: "https://www.youtube.com/watch?v=xrZXG7S3A3I"
},

campanarium3: {
  title: "Campanarium 3",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-campanarium3.pdf"
},

carillonbooklet: {
  title: "Carillon Booklet",
  movementInfo: "Five movements",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-carillon-booklet.pdf"
},

ceremonialpreludes: {
  title: "Ceremonial Preludes",
  movementInfo: "Six movements",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-ceremonial-preludes.pdf"
},

cleardance: {
  title: "Clear Dance",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-cleardance.pdf"
},

construction: {
  title: "Construction",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-construction.pdf"
},

dandelionslowdrag: {
  title: "Dandelion Slow Drag",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-dandelionslowdrag.pdf",
  youtube: "https://www.youtube.com/watch?v=0f7nvNXaRSI"
},

dawnwalk: {
  title: "Dawn Walk",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-dawnwalk.pdf"
},

duskdescending: {
  title: "Dusk Descending",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-dusk-descending.pdf",
  youtube: "https://www.youtube.com/watch?v=UPxgheCngm4"
},

fantasia: {
  title: "Fantasia",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-fantasia.pdf"
},

fantasy: {
  title: "Fantasy",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-fantasy.pdf"
},

fantasyonenglishfolktunesno1: {
  title: "Fantasy on English Folk Tunes No. 1",
  movements: [
    "Greensleeves",
    "My Robin Is to the Greenwood Gone",
    "Oh Waly, Waly, Gin Love Be Bonny",
    "Lovely Joan"
  ],
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-fantasyonenglishfolktunes1.pdf"
},

fastdances: {
  title: "Fast Dances",
  movementInfo: "Four dances",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-fastdances.pdf"
},

festivalprelude: {
  title: "Festival Prelude",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-festival-prelude.pdf"
},

fivefancies: {
  title: "Five Fancies",
  instrumentation: "Carillon",
  extScore: {
    href: "https://www.gcna.org/music-store#!/PDF-Five-Fancies/p/275598049",
    label: "Purchase score from GCNA ↗"
  }
},

fivefantasiesonromaniancarols: {
  title: "Five Fantasies on Romanian Carols",
  movements: [
    "Doamne Isuse Hristoase",
    "Domnulet si Domn din Cer",
    "Ia sculati, sculati",
    "Colindul Vanatorilor",
    "Intreaba, Intreaba"
  ],
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-five-fantasies-on-romanian-carols.pdf"
},

halfsteptwostep: {
  title: "Half Step Two Step",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-half-step-two-step.pdf"
},

hypergoxary: {
  title: "Hypergoxary",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-hypergoxary.pdf"
},

impressions: {
  title: "Impressions",
  movements: [
    "Fleeting",
    "Turquoise Empress",
    "The Snow Never Fell",
    "Water Spell"
  ],
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-impressions.pdf"
},

lavendershroud: {
  title: "Lavender Shroud",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-lavender-shroud.pdf"
},

litany: {
  title: "Litany",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-litany.pdf"
},

litanychaconne: {
  title: "Litany-Chaconne",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-litanychaconne.pdf"
},

lurgy: {
  title: "Lurgy",
  movements: [
    "Ring the Heavens",
    "Slow Lurgy",
    "Whirling Lurgy",
    "Meta-Lurgy"
  ],
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-lurgy.pdf",
  description: "Version for solo carillon.",
  youtube: "https://www.youtube.com/watch?v=BvNQXxuuuf8"
},

meditation: {
  title: "Meditation",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-meditation.pdf"
},

morningdance: {
  title: "Morning Dance",
  instrumentation: "Carillon",
  extScore: {
    href: "https://americancarillonmusiceditions.com/index.php?main_page=product_book_info&cPath=4&prev_page=index&manufacturers_id=171&sort=3a&products_id=517&zenid=pbtgdn03k97vglh19jjvm2g013",
    label: "Purchase score from ACME ↗"
  }
},

motorhythmia: {
  title: "Motorhythmia",
  instrumentation: "Carillon",
  description: `Second prize winner in the 2002 Franco Carillon Composition Contest. I submitted it to the contest under the title Motorhythmic Slimebucket, but <em>for some reason</em> the committee didn't like it, so we changed it to the current, much more pedestrian, title.`,
  extScore: {
    href: "https://www.gcna.org/music-store#!/PDF-Motorhythmia/p/275652576",
    label: "Purchase score from GCNA ↗"
  },
  youtube: "https://www.youtube.com/watch?v=Efc-f9DvYG0"
},

musing: {
  title: "Musing",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-musing.pdf"
},

nativity: {
  title: "Nativity",
  movements: [
    "The Word Made Flesh",
    "Shepherds",
    "Angels",
    "Joseph and Mary",
    "Lullaby",
    "Alleluia"
  ],
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-nativity.pdf"
},

nocturne: {
  title: "Nocturne",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-nocturne.pdf"
},

octogoxary: {
  title: "Octogoxary",
  movementInfo: "Eight movements",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-octogoxary.pdf"
},

oldforms: {
  title: "Old Forms",
  movements: [
    "Ciaconna",
    "Recitative",
    "Toccata"
  ],
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-oldforms.pdf"
},

orb: {
  title: "Orb",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-orb.pdf"
},

ouroboros: {
  title: "Ouroboros",
  movements: [
    "Circles",
    "Cycles"
  ],
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-ouroboros.pdf"
},

oval: {
  title: "Oval",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-oval.pdf"
},

patriotictriptych: {
  title: "Patriotic Triptych",
  movements: [
    "You’re a Grand Old Flag",
    "When Johnny Comes Marching Home",
    "Yankee Doodle"
  ],
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-patriotic-triptych.pdf",
  youtube: "https://www.youtube.com/watch?v=S1WMGivR5_8"
},

phantasmagoriacamptownraces: {
  title: "Phantasmagoria (Camptown Races)",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-phantasmagoria-camptown.pdf"
},

phantasmagoriapartita: {
  title: "Phantasmagoria (Partita)",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-phantasmagoria-partita.pdf",
  youtube: "https://www.youtube.com/watch?v=k9EXiGZqgm8"
},

phantasmagoriawestminster: {
  title: "Phantasmagoria (Westminster)",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-phantasmagoria-westminster.pdf",
  youtube: "https://www.youtube.com/watch?v=h2kG44-glCg"
},

polyjamitron: {
  title: "Polyjamitron",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-polyjamitron.pdf",
  youtube: "https://www.youtube.com/watch?v=J-ZYUkHAlyo"
},

preeloodiooz1: {
  title: "Preeloodiooz 1",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-preeloodiooz1.pdf"
},

preeloodiooz2: {
  title: "Preeloodiooz 2",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-preeloodiooz2.pdf"
},

preludeandchaconne: {
  title: "Prelude and Chaconne",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-prelude-and-chaconne.pdf"
},

preludes: {
  title: "Preludes",
  movementInfo: "Three preludes",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-preludes.pdf",
  description: "Preludes incorporating Messiaen's modes of limited transposition. YouTube recording of Prelude 1 below.",
  youtube: "https://www.youtube.com/watch?v=sEfVpig6pys"
},

preludinos: {
  title: "Preludinos",
  movementInfo: "Three movements",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-preludinos.pdf"
},

quadmode: {
  title: "Quadmode",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-quadmode.pdf"
},

raccoonrag: {
  title: "Raccoon Rag",
  movements: [
    "Nocturnal Jaunt",
    "Uncertain Encounter",
    "Scurry"
  ],
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-raccoonrag.pdf",
  youtube: "https://www.youtube.com/watch?v=GvZh1u1SwIk"
},

reddance: {
  title: "Red Dance",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-red-dance.pdf"
},

redhorizon: {
  title: "Red Horizon",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-red-horizon.pdf"
},

saltyraisin: {
  title: "Salty Raisin",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-salty-raisin.pdf",
  youtube: "https://www.youtube.com/watch?v=qyG6hIADLbs"
},


serenade: {
  title: "Serenade",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-serenade.pdf"
},

slowdances: {
  title: "Slow Dances",
  movementInfo: "Three dances",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-slowdances.pdf",
  youtube: "https://www.youtube.com/watch?v=q38fUhvikiY"
},

slowsofteven: {
  title: "slow-soft-even",
  movementInfo: "Three movements",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-slowsofteven.pdf"
},

carillonsonata: {
  title: "Sonata (carillon)",
  instrumentation: "Carillon",
  description: `First prize in the 2004 Franco Composition Contest of the Guild of Carillonneurs in North America.`,
  extScore: {
    href: "https://www.gcna.org/music-store#!/PDF-Sonata-for-Carillon/p/275584392/",
    label: "Purchase score from GCNA ↗"
  }
},
  
carillonsonata2: {
  title: "Sonata 2 (carillon)",
  instrumentation: "Carillon"
},

carillonsonata3: {
  title: "Sonata 3 (carillon)",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-sonata-3.pdf"
},

sonatinetypiqueatypique: {
  title: "Sonatine Typique / Atypique",
  movementInfo: "Six movements",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-sonatine-typique-atypique.pdf"
},

summerpieces: {
  title: "Summer Pieces",
  movements: [
    "Rain Garden",
    "The Sun Looks Down with a Golden Frown",
    "The Jovial Moon Laughs and Dances",
    "Daydream"
  ],
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-summerpieces.pdf"
},

threepieces: {
  title: "Three Pieces",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-three-pieces.pdf"
},

threetunesfromfloraememoriae: {
  title: "Three Tunes from Florae Memoriae",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-three-tunes-florae.pdf"
},

threeyankeetunesmithsongs: {
  title: "Three Yankee Tunesmith Songs",
  movements: ["Heroism", "When Jesus Wept", "Northfield"],
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-three-yankee-tunes.pdf"
},

toccatagloriosa: {
  title: "Toccata Gloriosa",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-toccata-gloriosa.pdf"
},

toccatina: {
  title: "Toccatina (carillon)",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-toccatina.pdf"
},

tokenmoon: {
  title: "Token Moon",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-tokenmoon.pdf"
},

toytinker: {
  title: "Toy Tinker",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-toy-tinker.pdf"
},

twilight: {
  title: "Twilight",
  movementInfo: "Four pieces",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-twilight.pdf"
},

uncertainlandscape: {
  title: "Uncertain Landscape",
  instrumentation: "Carillon",
  movements: ["Grey Trees", "Blam!", "Legend"]
},

waltzes: {
  title: "Waltzes",
  movements: ["Five waltzes"],
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-waltzes.pdf"
},

whimsicaldances: {
  title: "Whimsical Dances",
  movementInfo: "Five dances",
  instrumentation: "Carillon",
  score: "/scores/thornock-neil-whimsical-dances.pdf"
},

// ACCORDION

"moon-kissd-conifers": {
  title: "Moon-kiss’d Conifers (accordion)",
  description: `Winner of the 2022 Elsie M. Bennett Contemporary Accordion Composition Contest.

I composed Moon-kiss'd Conifers in 2022 to showcase the stunning and very reverberant acoustic of the central atrium in the Harris Fine Arts Center at Brigham Young University, a building which was demolished in 2023. The slowly shifting harmonies and supple melodies give space for the resonance to shine through. The result is nocturnal and perhaps a bit liturgical.

It's also a farewell tribute to a building I had worked in and loved for more than half my life at that point. As a late-life beginner of the accordion who has an extensive music background otherwise, I have been on the lookout for music that is easy enough for my budding technique but musically challenging enough to sustain my interest.

I wrote this piece to suit my own accordion technique, which mostly consists of carrying over my organ technique to the accordion keyboard and a little bit of left-hand experience.

Organ transcription available <a href="https://neilthornock.org/?piece=moon-kissd-conifers-organ">here</a>.`,
  instrumentation: "Accordion",
  score: "/scores/thornock-neil-moon-kissd-conifers.pdf",
  youtube: "https://www.youtube.com/watch?v=aAHHJUXh82Q",
},

// OTHER


"all-the-goods-are-stolen": {
  title: "All the Goods Are Stolen",
  album: "No Stopping, Standing, or Parking",
  instrumentation: ["Piano, alto saxophone, tenor saxophone"],
  instrumentationFilters: ["alto saxophone", "tenor saxophone"],
  score: "/scores/thornock-neil-allthegoods.pdf",
  description: `The stolen good of this piece is the title,
    which I stole from Gertrude Stein.`
},

sonatinaviolin: {
  title: "Sonatina",
  instrumentation: "Violin and piano",
  instrumentationFilters: ["violin"],
  description: "Written for my friend and colleague and spectacular violinist Monte Belknap.",
  score: "/scores/thornock-neil-sonatina-violin.pdf"
},

monolith: {
  title: "Monolith",
  instrumentation: "String quartet",
  description: "String quartet in just intonation.",
  score: "/scores/thornock-neil-monolith.pdf"
},

// MICROTONAL OTHER

edotudes: {
  title: "Edotudes",
  instrumentation: "Electronic Keyboard",
  instrumentationFilters: ["microtonal"],
  project: "Edotudes",
  movementInfo: "21 pieces",
  youtube: "https://www.youtube.com/watch?v=Hkg25ppUcik&list=PLLo_KrfM9ZY_9ftrr7_8c4HlVONUraSyu"
},

meadowsunbeam: {
  title: "Meadow Sunbeam",
  instrumentation: "Electronic",
  instrumentationFilters: ["microtonal"],
  project: "Happy Plant",
  youtube: "https://www.youtube.com/watch?v=ev2thf5QRhs",
},

underthecanyonbridge: {
  title: "Under the Canyon Bridge on a Rainy Day",
  instrumentation: "Electronic",
  instrumentationFilters: ["microtonal"],
  project: "Happy Plant",
  youtube: "https://www.youtube.com/watch?v=qL3TrIdpxhU"
},
 
duskonthehillside: {
  title: "Dusk on the Hillside",
  instrumentation: "Electronic",
  instrumentationFilters: ["microtonal"],
  project: "Happy Plant",
  youtube: "https://www.youtube.com/watch?v=DJWONwdN2Xg"
},
 
springnocturne: {
  title: "Spring Nocturne",
  instrumentation: "Electronic",
  instrumentationFilters: ["microtonal"],
  project: "Happy Plant",
  youtube: "https://youtube.com/shorts/CDspRs22A7U"
},
 
rivermagic: {
  title: "River Magic",
  instrumentation: "Electronic",
  instrumentationFilters: ["microtonal"],
  project: "Happy Plant",
  youtube: "https://www.youtube.com/watch?v=qeg-tAfDodM"
},
 
mountaindawn: {
  title: "Mountain Dawn",
  instrumentation: "Electronic",
  instrumentationFilters: ["microtonal"],
  project: "Happy Plant",
  youtube: "https://www.youtube.com/watch?v=lP00ZlTkW4M"
},

springalbum: {
  title: "Spring (album)",
  instrumentation: "Electronic",
  instrumentationFilters: ["microtonal", "electronic"],
  movements: [
    "Meadow Sunbeam",
    "Under the Canyon Bridge on a Rainy Day",
    "Dusk on the Hillside",
    "Spring Nocturne",
    "River Magic",
    "Mountain Dawn"
  ],
  project: "Happy Plant",
  youtube: "https://www.youtube.com/watch?v=ev2thf5QRhs&list=PLLo_KrfM9ZY8p_l2jpd7JwTMb-p2U9vTa"
},

perkylittleorangethings: {
  title: "Perky Little Orange Things",
  instrumentation: "Electronic",
  instrumentationFilters: ["microtonal"],
  project: "Happy Plant",
  youtube: "https://www.youtube.com/watch?v=kwgxfRp_O4w"
},

"come-come-ye-saints-choir": {
  title: "Come, Come Ye Saints (choir)",
  instrumentation: "SATB Choir, Piano",
  instrumentationFilters: "Choir",
  description: `My friend Glenn Gordon invited a bunch of composers, including myself, to write new choral settings of the text “Come, Come Ye Saints.”`,
  score: "/scores/thornock-neil-come-come-ye-saints-choir.pdf",
  youtube: "https://www.youtube.com/watch?v=UCXOTsxc3OQ"
}

};

