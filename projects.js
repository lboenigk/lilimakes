// ============================================================
//  THIS IS THE ONLY FILE YOU NEED TO EDIT.
//  Change the text between the quotes, then save.
// ============================================================

const SITE = {
  name: "lili's projects",
  intro: "A collection of my favorites.",
  email: "liliboenigk@gmail.com"   // leave as "" to hide the email link
};

// Each project is one { ... } block.
// To add a project: copy a whole block (from { to },) and paste it below.
// Leave a blank line inside a blurb to start a new paragraph.
// "year" and "materials" show as subheadings under the title (leave "" to hide one).
// To add a link inside a blurb: [the words to click](https://the-link.com)
// Formatting inside a blurb: **bold words**, *italic words*
// Watch the commas: every block and every photo line ends with one.
//
// "category" controls the filter buttons at the top of the page.
// Use the same word for projects that belong together (e.g. "costumes").
// A new category word automatically gets its own button.
// Videos (.mov / .mp4) work in the photos list too.

const PROJECTS = [
  {
    title: "Fish candleholder",
    category: "ceramics",
    year: "2022",
    materials: "Hand-built clay",
    blurb: "Ceramic candleholder for my fishy friend Freda.\n\nMade while studying abroad at UCL in their Institute of Making (I miss it dearly!)",
    photos: [
      { src: "photos/ceramics/fish_candleholder/IMG_5428.jpg", caption: "" },
      { src: "photos/ceramics/fish_candleholder/IMG_7124.jpg", caption: "" },
    ],
  },

  {
    title: "Octopus plate",
    category: "ceramics",
    year: "",
    materials: "Hand-built clay",
    blurb: "serving breakfast in an Octopus' garden",
    photos: [
      { src: "photos/ceramics/octopus_plate/4decc493-9845-4d96-bb68-db1db0b2ff5a-image_edit_oai_img_n_trVkBtqraCTJJZnLZsi.png", caption: "" },
      { src: "photos/ceramics/octopus_plate/61a9b1e3-a82a-4960-844d-f7dcd5d6a6d2-image_edit_oai_img_2zHk0lIMrlCBPQLKIFkbf.png", caption: "" },
    ],
  },

  {
    title: "CitiBike costume",
    category: "costumes",
    year: "2022",
    materials: "cardboard, bike lights, heroic mobility infrastructure",
    blurb: "For one magical night I joined the venerable fleet.",
    photos: [
      { src: "photos/costumes/citibike_costume/IMG_7005.PNG", caption: "" },
      { src: "photos/costumes/citibike_costume/IMG_8075.JPG", caption: "" },
      { src: "photos/costumes/citibike_costume/IMG_8090.JPG", caption: "" },
    ],
  },

  {
    title: "Egghead - Easter Parade",
    category: "costumes",
    year: "2023",
    materials: "egg cartons, repurposed birthday decorations, paper easter grass",
    blurb: "Eggstravagant hat for NYC's annual Fift Avenue Easter Parade.\n\n[The New York Times called me an egghead,](https://www.nytimes.com/2023/04/10/style/easter-parade-manhattan-fashion.html) I've never felt better.",
    photos: [
      { src: "photos/costumes/egg_hat/IMG_2196.jpeg", caption: "" },
      { src: "photos/costumes/egg_hat/BB4AFEF6-5E3A-4F9B-9A74-A1F7E6BA5A70IMG_0244.jpeg", caption: "" },
      { src: "photos/costumes/egg_hat/6657AFB0-89C1-4467-8E79-9D43C36E94F2IMG_8447.jpeg", caption: "" },
      { src: "photos/costumes/egg_hat/IMG_6403.JPEG", caption: "" },
    ],
  },

  {
    title: "Extendable toilet paper holder",
    category: "furniture",
    year: "2026",
    materials: "welded steel",
    blurb: "Toilet paper has never been more accessible. The original idea was Ari's– a fun introductory welding project!\n\nWe added a bison-shaped steel cutout that was given to me by a steel fabricator during a research trip exploring steel reuse.",
    photos: [
      { src: "photos/furniture/bison_toilet_holder/IMG_0995.JPG", caption: "" },
      { src: "photos/furniture/bison_toilet_holder/IMG_0996.JPG", caption: "" },
    ],
  },

  {
    title: "TopoPlay: topology-Optimized seesaw",
    category: "furniture",
    year: "2025",
    materials: "cnc-routed plywood",
    blurb: "**TopoPlay** invites the MIT community to learn about *topology optimization*, which leverages generative algorithms to design structures for specific goals. The installation **makes science accessible** while celebrating the **beauty of topology optimized structures**.\n\nThe seesaw is composed out of ribs, each of which was optimized to support different loads while minimizing overall weight. I collaborated with fellow Building Technology researchers Darya Guettler and Mark Hellrich on this project with the support of a *Chancellor's Fund Mind Hand Heart* grant.\n\nI really enjoyed learning how to use a CNC router!",
    photos: [
      { src: "photos/furniture/topo_seesaw/IMG_7621.mov", caption: "" },
      { src: "photos/furniture/topo_seesaw/IMG_2576.MOV", caption: "" },
      { src: "photos/furniture/topo_seesaw/0CD864F0-1A48-4408-9923-14DDD3B7F123.jpeg", caption: "" },
      { src: "photos/furniture/topo_seesaw/IMG_2661.jpeg", caption: "" },
      { src: "photos/furniture/topo_seesaw/IMG_3053.jpeg", caption: "" },
      { src: "photos/furniture/topo_seesaw/IMG_2584.mov", caption: "" },
    ],
  },

  {
    title: "Paper Joints",
    category: "other",
    year: "2024",
    materials: "chopsticks, rubber bands, paper",
    blurb: "Paper Joints explores the structure of a book through iteration. Similar to the lamination of pages along a spine, the project utilizes the iteration of base units to create an expandable and mobile structure. The project considers the relationship of narrative to book form.",
    photos: [
      { src: "photos/other/exploded_book/IMG_8507.jpeg", caption: "" },
      { src: "photos/other/exploded_book/IMG_8510.jpeg", caption: "" },
      { src: "photos/other/exploded_book/IMG_8516.jpeg", caption: "" },
      { src: "photos/other/exploded_book/IMG_8736.MOV", caption: "" },
    ],
  },

  {
    title: "TopoCandle: topology-optimized candle",
    category: "other",
    year: "2025",
    materials: "cnc-router cut plastic mold, wax candles",
    blurb: "Inspired by the elegant forms of topology-optimized concrete beam by building technology colleagues, I translated the geometry from concrete into wax for lab holiday gifts. I used a CNC router to cut the mold out of a block of plastic. Maybe in the next iteration I can get it to melt along stress lines!",
    photos: [
      { src: "photos/other/top_opt_candle/IMG_0005.JPG", caption: "" },
      { src: "photos/other/top_opt_candle/IMG_9840.PNG", caption: "" },
      { src: "photos/other/top_opt_candle/IMG_9948.JPG", caption: "" },
      { src: "photos/other/top_opt_candle/IMG_9952.JPG", caption: "" },
    ],
  },

  {
    title: "TopoPlay Offcut Table",
    category: "furniture",
    year: "2026",
    materials: "plywood offcuts",
    blurb: "This table is made from the offcuts of our TopoPlay topology-optimized seesaw project (see above). It's not quite [Ron Arad's elegant No Waste Table](https://hivemodern.com/pages/product6676/moroso-ron-arad-no-waste-table?srsltid=AU7gw4WXG7MtGikEYlS4J81ylsM3Xzsd2Sl4qUC0Z0t7HxtmC9O_guMv) but it will hold my coffee.\n\nWhile carrying the pieces to the woodshop, three people asked if I was building a surfboard.",
    photos: [
      { src: "photos/furniture/offcut_table/IMG_9505_2.JPG", caption: "" },
    ],
  },

  {
    title: "Jali-inspired Frame",
    category: "furniture",
    year: "2024",
    materials: "laser-cut basswood",
    blurb: "This frame is inspired by jali, perforated stone or wooden lattice screen featuring geometric, floral, or kalligraphic patterns, widely used in Indo-Islamic and Mughal architecture. I made it to frame photos from a trip my father, stepmother, and grandmother took to Rajasthan in India, where they fell in love with gorgeous jali screens.",
    photos: [
      { src: "photos/furniture/jali_frame/72938891994__A36759BB-8CAB-4123-A6E0-1D48112B7707.jpeg", caption: "" },
      { src: "photos/furniture/jali_frame/IMG_1877.jpeg", caption: "" },
    ],
  },

  {
    title: "Alphabet Frame",
    category: "furniture",
    year: "2026",
    materials: "laser-cut basswood",
    blurb: "These frames are engraved with patterns referencing the prints within. I designed it  without mechanical connectors: the frame layers are held together by laser cut clips echoing the same print motifs.",
    photos: [
      { src: "", caption: "" },
    ],
  },

  {
    title: "ClimateGuessr",
    category: "other",
    year: "2026",
    materials: "online game",
    blurb: "[ClimateGuessr](https://lboenigk.github.io/Climate-GeoGuessr/) is a web-based game inspired by [GeoGuessr](https://www.geoguessr.com/) that challenges players to identify a location based on climate data. Players are provided sunpath diagrams, psychrometric charts, precipitation data, and other information. It was inspired by an in-class exercise I helped develop for a graduate-level architecture course on climate-responsive design. The game translates the analog exercise into a fun, dynamic game to help students develop their skills in interpreting climate data and understanding how it relates to building design.",
    photos: [
      { src: "photos/other/climate_guessr/climateguessr.png", caption: "" },
    ],
  },

  {
    title: "T-Shirt Quilt",
    category: "textiles",
    year: "2026",
    materials: "old t-shirts, sewing machine",
    blurb: "Quilt made from t-shirts I want to remember but don't wear.",
    photos: [
      { src: "", caption: "" },
    ],
  },

  {
    title: "HERE IS FISHING - Flag",
    category: "textiles",
    year: "2026",
    materials: "fabric, programmable embroidery machine",
    blurb: "Gone fishing? No, **HERE IS FISHING**! This summer, my friends and I learned how to fish. I made a flag with a programmable embdoidery machine to commemorate the occasion, in the PRESENT TENSE. The fish depicted is modeled after Brutus, a dear departed pet guppy who lives on in our hearts and on this flag.",
    photos: [
      { src: "", caption: "" },
    ],
  },

  {
    title: "Salvaged Steel Table",
    category: "furniture",
    year: "2026",
    materials: "steel beams, acrylic sheet",
    blurb: "My bedside table is made from two steel beams salvaged from a deconstructed chapel in Newton, MA. I'm collaborating with a Building Technology colleague to coordinate a reuse project with the rest of the steel from the chapel, hopefully for undergraduate students interested in sustainable engineering. ",
    photos: [
      { src: "", caption: "" },
    ],
  },

  {
    title: "New Haven, Vermont - Density and History",
    category: "other",
    year: "2024",
    materials: "adaptive reuse conceptual design",
    blurb: "This project repurposes New Haven, Vermont's 170-year-old solid-brick train depot, which was moved from its original site mile and a half over frozen fields in 2021 after Amtrak deemed its distance from the tracks unsafe. Now located in the town center, our intervention activates the historic building by making it the centerpiece of a multi-use recreational and commercial space. The project also facilitates future urban density in New Haven by incorporating onsite wastewater treatment. New Haven currently lacks centralized wastewater infrastructure, leaving homes reliant on septic systems that are costly to maintain and prone to clogging and flooding. Our project pairs a Living Machine, which uses native plants and microbes to digest waste, with a constructed wetland to serve both the depot and neighboring homes. Beyond cutting chemical use, odor, and cost while supporting biodiversity and flood resilience, this shared system lays the groundwork for higher-density housing, offering a path to ease the town's housing shortage while honoring the character and community that define it.\n\n*Senior Civil Engineering Capstone project at Columbia University with Sophia Olmeda, Aaliyah Benjamin-Roach, Nicole Carillo, and Yusuf Hafez*\n\nPhotos of site model below, full writeup here.",
    photos: [
      { src: "photos/other/NH_density/IMG_5061.jpeg", caption: "" },
      { src: "photos/other/NH_density/IMG_5244.jpeg", caption: "" },
      { src: "photos/other/NH_density/IMG_5275.jpeg", caption: "" },
      { src: "photos/other/NH_density/IMG_5277.jpeg", caption: "" },
    ],
  },

  {
    title: "Novarden",
    category: "other",
    year: "2025",
    materials: "guerilla gardening",
    blurb: "Novarden stands for community, belonging, and the belief that biotech fills voids and brings people together.\n\nThe 2025 harvest yielded 3 spaghetti squash, 2 pints of tomatoes, and sent new roots into the 250 Massachusetts Ave, Cambridge, MA soil.",
    photos: [
      { src: "photos/other/novarden/IMG_2703.jpeg", caption: "" },
      { src: "photos/other/novarden/IMG_3748.jpeg", caption: "" },
      { src: "photos/other/novarden/IMG_2125.jpeg", caption: "" },
      { src: "photos/other/novarden/IMG_0966 (1).jpeg", caption: "" },
      { src: "photos/other/novarden/IMG_3746.jpeg", caption: "" },

    ],
  },

  {
    title: "i eat cement",
    category: "textiles",
    year: "2026",
    materials: "printed tshirt",
    blurb: "I designed the MIT Building Technology merch this year it really speaks to our values",
    photos: [
      { src: "photos/textiles/ieatcement/IMG_4410.jpeg", caption: "" },
    ],
  },

];
