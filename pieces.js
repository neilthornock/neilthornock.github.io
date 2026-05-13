const pieces = {

// PIANO SONATAS

pianosonata1: {
  title: "Piano Sonata No. 1",
  project: "Piano Sonatas",
  instrumentation: "Piano",
  score: "/scores/thornock_neil_piano_sonata_1.pdf",
  description: "See the related blog post.",
  relatedPages: [
    {
      title: "On composing fragments",
      url: "/blog/2026-04-25-fragments.html"
    }
  ],
  youtube: "https://www.youtube.com/watch?v=jkYH7sam_1o"
},

pianosonata2: {
  title: "Piano Sonata No. 2",
  project: "Piano Sonatas",
  instrumentation: "Piano",
  score: "/scores/thornock_neil_piano_sonata_2.pdf"
},

pianosonata3: {
  title: "Piano Sonata No. 3",
  project: "Piano Sonatas",
  instrumentation: "Piano",
  score: "/scores/thornock_neil_piano_sonata_3.pdf"
},

// OTHER PIANO

suite: {
  title: "Suite",
  instrumentation: "Piano",
  movements: [
    "Allemande",
    "Courante",
    "Sarabande",
    "Gigue",
    "Musette"
  ],
  description: "Suitable for either clavichord or piano.",
  score: "/scores/thornock_neil_suite.pdf"
},

stellalunasol: {
  title: "Stella—Lunna—Sol",
  score: "/scores/thornock_neil_stella_luna_sol.pdf",
  instrumentation: "Piano",
  youtube: "https://www.youtube.com/watch?v=hSor0HCBjsY"
},

// NEW RAGTIME

lostwaltz1: {
  title: "Lost Waltz No. 1",
  instrumentation: "Piano",
  score: "/scores/thornock_neil_lost_waltz_1.pdf"
},

iridescentwaltz: {
  title: "Iridescent Waltz",
  instrumentation: "Piano",
  score: "/scores/thornock_neil_iridescent_waltz.pdf",
  youtube: "https://www.youtube.com/watch?v=-MYTVgfIpK4"
},

trag: {
  title: "Trag",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock_neil_trag.pdf"
},

sonaragatina: {
  title: "Sonaragatina",
  project: "New Ragtime",
  instrumentation: "Piano",
  movementInfo: "Three movements",
  score: "/scores/thornock_neil_sonaragatina.pdf"
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
  score: "/scores/thornock_neil_river_delta_birds.pdf"
},

ragoveralostpenny: {
  title: "Rag Over a Lost Penny",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock_neil_rag_over_a_lost_penny.pdf"
},

ragoveralostkey: {
  title: "Rag Over a Lost Key",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock_neil_rag_over_a_lost_key.pdf",
  description: `As a high school student, I attended
  a ragtime recital featuring a handful of William Bolcom's rags.
  I already knew Joplin's rags, but this new twist on the genre inspired me.
  Full of excitement, I ran home and wrote “Rag over a Lost Key.”
  This is essentially the same piece I wrote as a 17-year-old,
  but gussied up a bit after sitting unthought of four a few decades.`
},

notforanickle: {
  title: "Not for a Nickle",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock_neil_not_for_a_nickle.pdf"
},

mirage: {
  title: "Mirage",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock_neil_mirage.pdf"
},

ephemerag: {
  title: "Ephemerag",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock_neil_ephemerag.pdf"
},

beamish: {
  title: "Beamish",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock_neil_beamish.pdf"
},

ackamarackus: {
  title: "Ackamarackus",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock_neil_ackamarackus.pdf"
},

zigrag: {
  title: "Zig Rag",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock_neil_zig_rag.pdf",
  description: `Lots of angular writing in this piece, zig-zagging around.
  You know, zig zig, zig rag... yeah, hilarious, I know.`
},

takeit: {
  title: "Take It",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock_neil_take_it.pdf"
},

sippinfrommykleinbottle: {
  title: "Sippin from My Klein Bottle",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock_neil_sippin_from_my_klein_bottle.pdf"
},

radrag: {
  title: "Rad Rag",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock_neil_rad_rag.pdf"
},

prismatic: {
  title: "Prismatic",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock_neil_prismatic.pdf"
},

philosophersrag: {
  title: "Philosopher’s Rag",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock_neil_philosophers_rag.pdf"
},

octobermoon: {
  title: "October Moon",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock_neil_october_moon.pdf"
},

mandelbrotsgrapefruit: {
  title: "Mandelbrot’s Grapefruit",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock_neil_mandelbrots_grapefruit.pdf",
  youtube: "https://www.youtube.com/watch?v=bMTUMHiCGiA"
},

lakesiderevery: {
  title: "Lakeside Revery",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock_neil_lakeside_revery.pdf"
},

jalopy: {
  title: "Jalopy",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock_neil_jalopy.pdf"
},

intriguerag: {
  title: "Intrigue Rag",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock_neil_intrigue_rag.pdf"
},

dodecarag: {
  title: "Dodecarag",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock_neil_dodecarag.pdf",
  description: `Begun on Schoenberg's 150th birthday.`
},

backyardchickens: {
  title: "Backyard Chickens",
  project: "New Ragtime",
  movements: [
    "Hen Hut",
    "Roost",
    "Peck! Peck!"
  ],
  instrumentation: "Piano",
  score: "/scores/thornock_neil_backyard_chickens.pdf",
  youtube: "https://www.youtube.com/watch?v=P0aYZ1dfvhU"
},

turtlestew: {
  title: "Turtle Stew",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock_neil_turtle_stew.pdf"
},

tangerineserenade: {
  title: "Tangerine Serenade",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock_neil_tangerine_serenade.pdf",
  youtube: "https://www.youtube.com/watch?v=emHbvScOOvM"
},

spaceglider: {
  title: "Space Glider",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock_neil_space_glider.pdf"
},

somethingspring: {
  title: "Something Spring",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock_neil_something_spring.pdf",
  youtube: "https://www.youtube.com/watch?v=YLZrM_vdv6M"
},

ramshacklestrawberry: {
  title: "Ramshackle Strawberry",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock_neil_ramshackle_strawberry.pdf"
},

meanderag: {
  title: "Meanderag",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock_neil_meanderag.pdf"
},

maplecopterrag: {
  title: "Maple Copters Rag",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock_neil_maple_copters_rag.pdf",
  youtube: "https://www.youtube.com/watch?v=9lgPUISRw2g"
},

labyrinth: {
  title: "Labyrinth",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock_neil_labyrinth.pdf",
  youtube: "https://www.youtube.com/watch?v=FGTuGKahtSQ"
},

junicornrag: {
  title: "Junicorn Rag",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock_neil_junicorn_rag.pdf",
  youtube: "https://www.youtube.com/watch?v=rQkXF4BejNM"
},

fluxion: {
  title: "Fluxion",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock_neil_fluxion.pdf",
  youtube: "https://www.youtube.com/watch?v=rT4goBdBDvw"
},

dreamdance: {
  title: "Dream Dance",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock_neil_dream_dance.pdf"
},

dallyrag: {
  title: "Dally Rag",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock_neil_dally_rag.pdf",
  youtube: "https://www.youtube.com/watch?v=7AJFAiwfb64"
},

bluedoorstomp: {
  title: "Blue Door Stomp",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock_neil_blue_door_stomp.pdf",
  youtube: "https://www.youtube.com/watch?v=HwRYM6kGABE"
},

bamboozle: {
  title: "Bamboozle",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock_neil_bamboozle.pdf",
  youtube: "https://www.youtube.com/watch?v=kYliGPz-2BQ"
},

// ORGAN

restlessiteration: {
  title: "Restless Iteration",
  instrumentation: "Organ",
  score: "/scores/thornock_neil_restless_iteration.pdf",
  youtube: "https://www.youtube.com/watch?v=2GVDHS01x1k"
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
  score: "/scores/thornock_neil_away_in_a_manger_2.pdf",
  youtube: "https://www.youtube.com/watch?v=TOvDS1z6Z9c"
},

triptychonocomeocome: {
  title: "Triptych on O Come, O Come, Emmanuel",
  instrumentation: "Organ",
  project: "Hymn Settings",
  movementInfo: "Three movements",
  score: "/scores/thornock_neil_triptych_on_o_come.pdf",
  youtube: "https://www.youtube.com/playlist?list=PLLo_KrfM9ZY_tolbFvne-LVdAoTfbP1yG"
},

iamachildofgod: {
  title: "I Am a Child of God",
  project: "Hymn Settings",
  instrumentation: "Organ",
  score: "/scores/thornock_neil_i_am_a_child_of_god.pdf",
  youtube: "https://www.youtube.com/watch?v=LDL_8FN8GQk"
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
  score: "/scores/thornock_neil_bookofbronze.pdf"
},

campanarium1: {
  title: "Campanarium 1",
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_campanarium1.pdf",
  youtube: "https://www.youtube.com/watch?v=jP5UuWXUHS4"
},

campanarium2: {
  title: "Campanarium 2",
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_campanarium2.pdf",
  youtube: "https://www.youtube.com/watch?v=xrZXG7S3A3I"
},

campanarium3: {
  title: "Campanarium 3",
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_campanarium3.pdf"
},

carillonbooklet: {
  title: "Carillon Booklet",
  movementInfo: "Five movements",
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_carillon_booklet.pdf"
},

ceremonialpreludes: {
  title: "Ceremonial Preludes",
  movementInfo: "Six movements",
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_ceremonial_preludes.pdf"
},

cleardance: {
  title: "Clear Dance",
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_cleardance.pdf"
},

construction: {
  title: "Construction",
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_construction.pdf"
},

dandelionslowdrag: {
  title: "Dandelion Slow Drag",
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_dandelionslowdrag.pdf",
  youtube: "https://www.youtube.com/watch?v=0f7nvNXaRSI"
},

dawnwalk: {
  title: "Dawn Walk",
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_dawnwalk.pdf"
},

duskdescending: {
  title: "Dusk Descending",
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_dusk_descending.pdf",
  youtube: "https://www.youtube.com/watch?v=UPxgheCngm4"
},

fantasia: {
  title: "Fantasia",
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_fantasia.pdf"
},

fantasy: {
  title: "Fantasy",
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_fantasy.pdf"
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
  score: "/scores/thornock_neil_fantasyonenglishfolktunes1.pdf"
},

fastdances: {
  title: "Fast Dances",
  movementInfo: "Four dances",
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_fastdances.pdf"
},

festivalprelude: {
  title: "Festival Prelude",
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_festival-prelude.pdf"
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
  score: "/scores/thornock_neil_five_fantasies_on_romanian_carols.pdf"
},

halfsteptwostep: {
  title: "Half Step Two Step",
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_half_step_two_step.pdf"
},

hypergoxary: {
  title: "Hypergoxary",
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_hypergoxary.pdf"
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
  score: "/scores/thornock_neil_impressions.pdf"
},

lavendershroud: {
  title: "Lavender Shroud",
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_lavender_shroud.pdf"
},

litany: {
  title: "Litany",
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_litany.pdf"
},

litanychaconne: {
  title: "Litany-Chaconne",
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_litanychaconne.pdf"
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
  score: "/scores/thornock_neil_lurgy.pdf",
  description: "Version for solo carillon.",
  youtube: "https://www.youtube.com/watch?v=BvNQXxuuuf8"
},

meditation: {
  title: "Meditation",
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_meditation.pdf"
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
  score: "/scores/thornock_neil_musing.pdf"
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
  score: "/scores/thornock_neil_nativity.pdf"
},

nocturne: {
  title: "Nocturne",
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_nocturne.pdf"
},

octogoxary: {
  title: "Octogoxary",
  movementInfo: "Eight movements",
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_octogoxary.pdf"
},

oldforms: {
  title: "Old Forms",
  movements: [
    "Ciaconna",
    "Recitative",
    "Toccata"
  ],
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_oldforms.pdf"
},

orb: {
  title: "Orb",
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_orb.pdf"
},

ouroboros: {
  title: "Ouroboros",
  movements: [
    "Circles",
    "Cycles"
  ],
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_ouroboros.pdf"
},

oval: {
  title: "Oval",
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_oval.pdf"
},

patriotictriptych: {
  title: "Patriotic Triptych",
  movements: [
    "You’re a Grand Old Flag",
    "When Johnny Comes Marching Home",
    "Yankee Doodle"
  ],
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_patriotic_triptych.pdf",
  youtube: "https://www.youtube.com/watch?v=S1WMGivR5_8"
},

phantasmagoriacamptownraces: {
  title: "Phantasmagoria (Camptown Races)",
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_phantasmagoria_camptown.pdf"
},

phantasmagoriapartita: {
  title: "Phantasmagoria (Partita)",
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_phantasmagoria_partita.pdf",
  youtube: "https://www.youtube.com/watch?v=k9EXiGZqgm8"
},

phantasmagoriawestminster: {
  title: "Phantasmagoria (Westminster)",
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_phantasmagoria_westminster.pdf",
  youtube: "https://www.youtube.com/watch?v=h2kG44-glCg"
},

polyjamitron: {
  title: "Polyjamitron",
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_polyjamitron.pdf",
  youtube: "https://www.youtube.com/watch?v=J-ZYUkHAlyo"
},

preeloodiooz1: {
  title: "Preeloodiooz 1",
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_preeloodiooz1.pdf"
},

preeloodiooz2: {
  title: "Preeloodiooz 2",
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_preeloodiooz2.pdf"
},

preludeandchaconne: {
  title: "Prelude and Chaconne",
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_prelude_and_chaconne.pdf"
},

preludes: {
  title: "Preludes",
  movementInfo: "Three preludes",
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_preludes.pdf",
  description: "Preludes incorporating Messiaen's modes of limited transposition. YouTube recording of Prelude 1 below.",
  youtube: "https://www.youtube.com/watch?v=sEfVpig6pys"
},

preludinos: {
  title: "Preludinos",
  movementInfo: "Three movements",
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_preludinos.pdf"
},

quadmode: {
  title: "Quadmode",
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_quadmode.pdf"
},

raccoonrag: {
  title: "Raccoon Rag",
  movements: [
    "Nocturnal Jaunt",
    "Uncertain Encounter",
    "Scurry"
  ],
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_raccoonrag.pdf",
  youtube: "https://www.youtube.com/watch?v=GvZh1u1SwIk"
},

reddance: {
  title: "Red Dance",
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_red_dance.pdf"
},

redhorizon: {
  title: "Red Horizon",
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_red_horizon.pdf"
},

saltyraisin: {
  title: "Salty Raisin",
  project: "New Ragtime",
  instrumentation: "Piano",
  score: "/scores/thornock_neil_salty_raisin.pdf",
  youtube: "https://www.youtube.com/watch?v=qyG6hIADLbs"
},


serenade: {
  title: "Serenade",
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_serenade.pdf"
},

slowdances: {
  title: "Slow Dances",
  movementInfo: "Three dances",
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_slowdances.pdf",
  youtube: "https://www.youtube.com/watch?v=q38fUhvikiY"
},

slowsofteven: {
  title: "slow-soft-even",
  movements: ["Three movements"],
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_slowsofteven.pdf"
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
  score: "/scores/thornock_neil_sonata_3.pdf"
},

sonatinetypiqueatypique: {
  title: "Sonatine Typique / Atypique",
  movementInfo: "Six movements",
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_sonatine_typique_atypique.pdf"
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
  score: "/scores/thornock_neil_summerpieces.pdf"
},

threepieces: {
  title: "Three Pieces",
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_three-pieces.pdf"
},

threetunesfromfloraememoriae: {
  title: "Three Tunes from Florae Memoriae",
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_three_tunes_florae.pdf"
},

threeyankeetunesmithsongs: {
  title: "Three Yankee Tunesmith Songs",
  movements: ["Heroism", "When Jesus Wept", "Northfield"],
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_three_yankee_tunes.pdf"
},

toccatagloriosa: {
  title: "Toccata Gloriosa",
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_toccata_gloriosa.pdf"
},

toccatina: {
  title: "Toccatina",
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_toccatina.pdf"
},

tokenmoon: {
  title: "Token Moon",
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_tokenmoon.pdf"
},

toytinker: {
  title: "Toy Tinker",
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_toy_tinker.pdf"
},

twilight: {
  title: "Twilight",
  movements: ["Four pieces"],
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_twilight.pdf"
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
  score: "/scores/thornock_neil_waltzes.pdf"
},

whimsicaldances: {
  title: "Whimsical Dances",
  movementInfo: "Five dances",
  instrumentation: "Carillon",
  score: "/scores/thornock_neil_whimsical-dances.pdf"
},

// OTHER


allthegoodsarestolen: {
  title: "All the Goods Are Stolen",
  album: "No Stopping, Standing, or Parking",
  instrumentation: ["piano", "alto sax", "tenor sax"],
  score: "/scores/thornock_neil_allthegoods.pdf",
  description: `The stolen good of this piece is the title,
    which I stole from Gertrude Stein.`
}

};
