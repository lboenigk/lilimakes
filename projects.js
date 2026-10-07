// ============================================================
//  THIS IS THE ONLY FILE YOU NEED TO EDIT.
//  Change the text between the quotes, then save.
// ============================================================

const SITE = {
  name: "making things",
  intro: "my things.",
  email: "you@example.com"   // leave as "" to hide the email link
};

// Each project is one { ... } block.
// To add a project: copy a whole block (from { to },) and paste it below.
// Leave a blank line inside a blurb to start a new paragraph.
// "year" and "materials" show as subheadings under the title (leave "" to hide one).
// To add a link inside a blurb: [the words to click](https://the-link.com)
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
    blurb: "Ceramic candleholder for my fishy friend Freda. I made this while studying abroad at UCL in the free handbuilding studio at the Institute of Making (I miss it dearly)",
    photos: [
      { src: "photos/ceramics/fish_candleholder/IMG_5427.jpg", caption: "" },
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
      { src: "photos/ceramics/octopus_plate/IMG_1625.jpg", caption: "" },
      { src: "photos/ceramics/octopus_plate/IMG_1626.jpg", caption: "" },
      { src: "photos/ceramics/octopus_plate/IMG_1627.jpg", caption: "" },
      { src: "photos/ceramics/octopus_plate/IMG_1628.jpg", caption: "" },
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
    blurb: "Egg carton hat for the annual Easter Parade on Fifth Avenue in New York. [The New York Times called me an egghead. I've never felt better.](https://www.nytimes.com/2023/04/10/style/easter-parade-manhattan-fashion.html)",
    photos: [
      { src: "photos/costumes/egg_hat/7184B5A6-E6B0-4EA6-BD66-7FAAC097F971IMG_0270.JPEG", caption: "" },
      { src: "photos/costumes/egg_hat/IMG_2231.JPG", caption: "" },
      { src: "photos/costumes/egg_hat/IMG_6403.JPEG", caption: "" },
    ],
  },

  {
    title: "Extendable toilet paper holder",
    category: "furniture",
    year: "2026",
    materials: "welded steel",
    blurb: "Toilet paper has never been more accessible. I welded on a bison-shaped steel cutout that was given to me by a steel service center in Denver during a research trip for my master's thesis. The original idea was Ari's– it was a fun introductory welding project!",
    photos: [
      { src: "photos/furniture/bison_toilet_holder/IMG_0995.JPG", caption: "" },
      { src: "photos/furniture/bison_toilet_holder/IMG_0996.JPG", caption: "" },
    ],
  },

  {
    title: "TopoPlay: a topology-Optimized seesaw",
    category: "furniture",
    year: "2025",
    materials: "cnc-routed plywood",
    blurb: "TopoPlay invites the MIT community to learn about topology optimization, which leverages generative algorithms to design structures for specific goals. The installation makes  science accessible while celebrating the beauty of topology optimized structures. The seesaw is composed out of ribs, each of which was optimized to support different loads while minimizing overall weight. I collaborated with fellow Building Technology researchers Darya Guettler and Mark Hellrich on this project with the support of a Chancellor's Fund Mind Hand Heart grant. I really enjoyed learning how to use a CNC router!",
    photos: [
      { src: "photos/furniture/topo_seesaw/IMG_9505_2.JPG", caption: "" },
      { src: "photos/furniture/topo_seesaw/IMG_2576.MOV", caption: "" },
    ],
  },

  {
    title: "Paper Joints",
    category: "other",
    year: "2024",
    materials: "chopsticks, rubber bands, paper",
    blurb: "Paper Joints explores the structure of a book through iteration. Similar to the lamination of pages along a spine, the project utilizes the iteration of base units to create an expandable and mobile structure. The project considers the relationship of narrative to book form.",
    photos: [
      { src: "photos/exploded_book/IMG_8736.MOV", caption: "" },
    ],
  },

  {
    title: "TopoCandle: topology-optimized candle",
    category: "other",
    year: "2025",
    materials: "cnc-router cut plastic mold, wax candles",
    blurb: "Inspired by the elegant forms of topology-optimized concrete beam by building technology colleagues, I translated the geometry from concrete into wax for lab holiday gifts. I used a CNC router to cut the mold out of a block of plastic. Maybe in the next iteration I can get it to melt along stress lines!",
    photos: [
      { src: "photos/top_opt_candle/IMG_0005.JPG", caption: "" },
      { src: "photos/top_opt_candle/IMG_9840.PNG", caption: "" },
      { src: "photos/top_opt_candle/IMG_9948.JPG", caption: "" },
      { src: "photos/top_opt_candle/IMG_9952.JPG", caption: "" },
    ],
  },

  {
    title: "TopoPlay Offcut Table",
    category: "furniture",
    year: "2026",
    materials: "plywood offcuts",
    blurb: "This table is made from the offcuts of our TopoPlay topology-optimized seesaw project. It's not as efficient as [Ron Arad's elegant No Waste Table] (https://hivemodern.com/pages/product6676/moroso-ron-arad-no-waste-table?srsltid=AU7gw4WXG7MtGikEYlS4J81ylsM3Xzsd2Sl4qUC0Z0t7HxtmC9O_guMv) but it will hold my coffee. While carrying the pieces to the woodshop, three people asked if I was building a surfboard.",
    photos: [
      { src: "", caption: "" },
    ],
  },

  {
    title: "Jali-inspired Frame",
    category: "furniture",
    year: "2024",
    materials: "laser-cut basswood",
    blurb: "This frame is inspired by jali, perforated stone or wooden lattice screen featuring geometric, floral, or kalligraphic patterns, widely used in Indo-Islamic and Mughal architecture. I made it to frame photos from a trip my father, stepmother, and grandmother took to Rajasthan in India, where they fell in love with gorgeous jali screens.",
    photos: [
      { src: "", caption: "" },
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
      { src: "", caption: "" },
    ],
  },

];
