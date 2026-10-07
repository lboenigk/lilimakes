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
    year: "",
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
    blurb: "serving breakast in an Octopus' garden",
    photos: [
      { src: "photos/ceramics/octopus_plate/IMG_1625.jpg", caption: "" },
      { src: "photos/ceramics/octopus_plate/IMG_1626.jpg", caption: "" },
      { src: "photos/ceramics/octopus_plate/IMG_1627.jpg", caption: "" },
      { src: "photos/ceramics/octopus_plate/IMG_1628.jpg", caption: "" },
    ],
  },

  {
    title: "Citi Bike costume",
    category: "costumes",
    year: "",
    blurb: "For one night, I was honored to join the venerable fleet.",
    photos: [
      { src: "photos/costumes/citibike_costume/IMG_7005.PNG", caption: "" },
      { src: "photos/costumes/citibike_costume/IMG_8075.JPG", caption: "" },
      { src: "photos/costumes/citibike_costume/IMG_8090.JPG", caption: "" },
    ],
  },

  {
    title: "Egg hat",
    category: "costumes",
    year: "",
    blurb: "I made this egg carton hat for the annual Easter Parade on Fifth Avenue in New York. I was so glamorous that New York Times called me an egghead. https://www.nytimes.com/2023/04/10/style/easter-parade-manhattan-fashion.html",
    photos: [
      { src: "photos/costumes/egg_hat/7184B5A6-E6B0-4EA6-BD66-7FAAC097F971IMG_0270.JPEG", caption: "" },
      { src: "photos/costumes/egg_hat/IMG_2231.JPG", caption: "" },
      { src: "photos/costumes/egg_hat/IMG_6403.JPEG", caption: "" },
    ],
  },

  {
    title: "Bison toilet paper holder",
    category: "furniture",
    year: "",
    blurb: "A short description of this project.",
    photos: [
      { src: "photos/furniture/bison_toilet_holder/IMG_0995.JPG", caption: "" },
      { src: "photos/furniture/bison_toilet_holder/IMG_0996.JPG", caption: "" },
    ],
  },

  {
    title: "Topo seesaw",
    category: "furniture",
    year: "",
    blurb: "A short description of this project.",
    photos: [
      { src: "photos/furniture/topo_seesaw/IMG_9505_2.JPG", caption: "" },
      { src: "photos/furniture/topo_seesaw/IMG_2576.MOV", caption: "" },
    ],
  },

  {
    title: "Exploded book",
    category: "other",
    year: "",
    blurb: "A short description of this project.",
    photos: [
      { src: "photos/exploded_book/IMG_8736.MOV", caption: "" },
    ],
  },

  {
    title: "Topology-optimized candle",
    category: "other",
    year: "",
    blurb: "A short description of this project.",
    photos: [
      { src: "photos/top_opt_candle/IMG_0005.JPG", caption: "" },
      { src: "photos/top_opt_candle/IMG_9840.PNG", caption: "" },
      { src: "photos/top_opt_candle/IMG_9948.JPG", caption: "" },
      { src: "photos/top_opt_candle/IMG_9952.JPG", caption: "" },
    ],
  },
];
