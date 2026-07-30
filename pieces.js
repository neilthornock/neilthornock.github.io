const pieces = {

// PIANO SONATAS

pianosonata1: {
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

pianosonata2: {
  title: "Piano Sonata No. 2",
  project: "Piano Sonatas",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-piano-sonata-2.pdf"
},

pianosonata3: {
  title: "Piano Sonata No. 3",
  project: "Piano Sonatas",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-piano-sonata-3.pdf"
},

pianosonata4: {
  title: "Piano Sonata No. 4",
  project: "Piano Sonatas",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-piano-sonata-4.pdf"
},

pianosonata5: {
  title: "Piano Sonata No. 5",
  project: "Piano Sonatas",
  instrumentation: "Piano",
  movementInfo: "Four very brief movements",
  score: "/scores/thornock-neil-piano-sonata-4.pdf"
},

pianosonata6: {
  title: "Piano Sonata No. 6",
  project: "Piano Sonatas",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-piano-sonata-4.pdf"
},

pianosonata7: {
  title: "Piano Sonata No. 7",
  project: "Piano Sonatas",
  instrumentation: "Piano or clavichord",
  instrumentationFilters: ["piano", "clavichord"],
  movementInfo: "Three movements",
  description: `Each movement takes the hymn tune “Come, Come, Ye Saints” as a cantus firmus.`,
  score: "/scores/thornock-neil-piano-sonata-7.pdf"
},

pianosonata8: {
  title: "Piano Sonata No. 8 (Piano Sonata No. ∞)",
  project: "Piano Sonatas",
  instrumentation: "Piano",
  score: "/scores/thornock-neil-piano-sonata-8.pdf"
},

// OTHER PIANO

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
  score: "/scores/thornock-neil-not-for-a-nickle.pdf"
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

restlessiteration: {
  title: "Restless Iteration",
  instrumentation: "Organ",
  score: "/scores/thornock-neil-restless-iteration.pdf",
  youtube: "https://www.youtube.com/watch?v=2GVDHS01x1k"
},

pavanegalliard: {
  title: "Pavane and Galliard",
  instrumentation: "Organ",
  movements: [
    "Pavane",
    "Galliard"
  ],
  description: "For organ manuals."
},

heisnothere: {
  title: "He is not here; for he is risen",
  instrumentation: "Organ",
  description: "Version for standard-tuned concert organ. The video below links to the version for 31-tone organ.",
  score: "/scores/thornock-neil-he-is-not-here-for-he-is-risen.pdf",
  youtube: "https://www.youtube.com/watch?v=ZboqBJ_I1I4"
},

motionfragments: {
  title: "Motion Fragments",
  movementInfo: "Three movements",
  instrumentation: "Organ",
  score: "/scores/thornock-neil-motion-fragments.pdf"
},

fugueandpassacaglia: {
  title: "Fugue and Passacaglia",
  instrumentation: "Organ",
  score: "/scores/thornock-neil-fugue-and-passacaglia.pdf"
},

timpanogoslitanies: {
  title: "Timpanogos Litanies",
  instrumentation: "Organ",
  description: "Performable on standard concert organ or on digital organ tuned to 5edo. The video below features the 5edo version.",
  score: "/scores/thornock-neil-timpanogos-litanies.pdf",
  youtube: "https://www.youtube.com/watch?v=EUNDPFXHJ2o"
},

canonicvariations: {
  title: "Canonic Variations on <em>Lord, We Come before Thee Now</em>",
  instrumentation: "Organ",
  score: "/scores/thornock-neil-lord-we-come-before-thee-now.pdf"
},

toccata0: {
  title: "Toccata No. 0",
  description: "(Probably) the second piece I wrote for organ. Or maybe the first...",
  instrumentation: "Organ",
  score: "/scores/thornock-neil-toccata-0.pdf"
},

twopreludes: {
  title: "Two Preludes",
  description: "The first of these is (probably) the first piece I wrote for organ.",
  instrumentation: "Organ",
  score: "/scores/thornock-neil-two-preludes.pdf"
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

// HYMNS

angelswehaveheard: {
  title: "Angels We Have Heard on High",
  instrumentation: "Organ",
  score: "/scores/thornock-neil-angels-we-have-heard-on-high.pdf",
  project: "Hymn arrangements"
},

forthebeauty: {
  title: "For the Beauty of the Earth",
  instrumentation: "Organ",
  score: "/scores/thornock-neil-for-the-beauty-of-the-earth.pdf",
  project: "Hymn arrangements"
},

seymour: {
  title: "Prelude on Seymour",
  instrumentation: "Organ",
  score: "/scores/thornock-neil-seymour.pdf",
  project: "Hymn arrangements"
},

thelordmypasture: {
  title: "The Lord My Pasture Will Prepare",
  instrumentation: "Organ",
  score: "/scores/thornock-neil-the-lord-my-pasture.pdf",
  project: "Hymn arrangements"
},

caithness: {
  title: "Caithness",
  instrumentation: "Organ",
  score: "/scores/thornock-neil-caithness.pdf",
  project: "Hymn arrangements"
},

ineedthee2: {
  title: "I Need Thee Every Hour",
  description: `Hymn settings in my church could do with less solemnity and more joy, or even playfulness (see also my arrangement of <a href="https://neilthornock.org/?piece=iamachildofgod"<em>I Am a Child of God</em></a>).`,
  instrumentation: "Organ",
  score: "/scores/thornock-neil-i-need-thee-every-hour-2.pdf",
  project: "Hymn arrangements"
},

fatherinheaven: {
  title: "Father in Heaven, We Do Believe",
  instrumentation: "Organ",
  description: "Free accompaniment.",
  score: "/scores/thornock-neil-father-in-heaven-we-do-believe.pdf",
  project: "Hymn arrangements"
},

sabbathdayshort: {
  title: "Sabbath Day (short version)",
  instrumentation: "Organ",
  score: "/scores/thornock-neil-sabbath-day-short.pdf",
  project: "Hymn arrangements"
},


// MILLENNIUM BOOK

springsong: {
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

awayinamanger2: {
  title: "Away in a Manger (2nd ver.)",
  project: "Hymn Settings",
  instrumentation: "Organ",
  score: "/scores/thornock-neil-away-in-a-manger-2.pdf",
  youtube: "https://www.youtube.com/watch?v=TOvDS1z6Z9c"
},

triptychonocomeocome: {
  title: "Triptych on O Come, O Come, Emmanuel",
  instrumentation: "Organ",
  project: "Hymn Settings",
  movementInfo: "Three movements",
  score: "/scores/thornock-neil-triptych-on-o-come.pdf",
  youtube: "https://www.youtube.com/playlist?list=PLLo_KrfM9ZY_tolbFvne-LVdAoTfbP1yG"
},

iamachildofgod: {
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
  title: "Toccatina",
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

moonkissdconifers: {
  title: "Moon-kiss’d Conifers",
  instrumentation: "Accordion",
  score: "/scores/thornock-neil-moon-kissd-conifers.pdf"
},

// OTHER


allthegoodsarestolen: {
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
}

};
