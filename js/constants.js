const artGallery = {
  lateAutumnGrapevine: {
    id: 001,
    heading: "LATE AUTUMN GRAPEVINE",
    description: "Vitis Vinifera. The leaves are turning and the grapes are over; a few dried, empty skins remain, the fruit having been eaten by birds. This branch is one season’s growth and casts a precise, dark shadow in the strong Spanish sun.",
    medium: "Colour pencil and graphite",
    size: "Approx 53cmW X 38cmH",
    original: "SOLD",
    print: "&#163;80",
    images: {
      preview: "late-autumn-grapevice-preview.jpeg",
      main: "late-autumn-grapevine.jpeg"
    }
  },
  palmShadows: {
    id: 002,
    heading: "PALM SHADOWS",
    description: "Arecaceae. Washingtonia Robusta. This palm produces large fan shaped, pleated leaves and the shadows cast by the upper leaves form a zig zag shifting pattern.",
    medium: "Colour pencil",
    size: "Approx 35cmW X 54cmH",
    original: "Not available for sale",
    print: "&#163;75",
    images: {
      preview: "palm-shadows-preview.jpeg",
      main: "palm-shadows.jpeg"
    }
  },
  wigandiaCaracasana: {
    id: 003,
    heading: "WIGANDIA CARACASANA",
    description: "The play of strong sunlight on and through the large leaves of this evergreen shrub was the inspiration for this picture. This plant was found in an Andalusian garden where it grows to 3 metres and bears purple flowers in the summer.",
    medium: "Colour pencil",
    size: "Approx 34cmW X 55cmH",
    original: "Not available for sale",
    print: "&#163;80.00",
    images: {
      preview: "wigandia-caracasana-preview.jpeg",
      main: "wigandia-caracasana.jpeg"
    }
  },
  bindweedOnCotoneaster: {
    id: 004,
    heading: "BINDWEED ON COTONEASTER",
    description: "Calystegia sepium. An attractive menace that grows up anything in a wild part of my garden in Suffolk.",
    medium: "Colour pencil and graphite",
    size: "Approx 27cmW X 40cmH",
    original: "SOLD",
    print: "&#163;45.00",
    images: {
      preview: "bindweed-on-cotoneaster-preview.jpeg",
      main: "bindweed-on-cotoneaster.jpeg"
    }
  },
  weepingWillow: {
    id: 005,
    heading: "WEEPING WILLOW",
    description: "Salix Babylonica. This picture shows the different seasons of a large specimen that grows in my Suffolk garden.",
    medium: "Colour pencil",
    size: "Approx 51cmW X 74cmH",
    original: "Not available for sale",
    print: "&#163;60.00",
    images: {
      preview: "weeping-willow-preview.jpeg",
      main: "weeping-willow.jpeg"
    }
  },
  spanishGrapevine: {
    id: 006,
    heading: "SPANISH GRAPEVINE",
    description: "Vitis Vinifera. This vine was growing on a trellis in an Andalusian garden with an abundance of ripening grapes hanging down, untouched and with their bloom intact.",
    medium: "Colour pencil",
    size: "Approx 39cmW X 61cmH",
    original: "Not available for sale",
    print: "&#163;75.00",
    images: {
      preview: "spanish-grapevine-preview.jpeg",
      main: "spanish-grapevine.jpeg"
    }
  }
}

  // <name>: {
  //   id: 00,
  //   heading: "",
  //   description: "",
  //   medium: "Colour pencil",
  //   size: "Approx ",
  //   original: "",
  //   print: "&#163;75.00",
  //   images: {
  //     preview: "-preview.jpeg",
  //     main: ".jpeg"
  //   }
  // }


const fabricGallery = {
  fabric_vitis: {
    heading: "FABRIC VITIS",
    description: "Fabric description.",
    detail1: "detail one",
    detail2: "detail two",
    detail3: "detail three",
    img: "late-autumn-grapevine.jpeg"

  },
  fabric_palm: {
    heading: "FABRIC PALM",
    description: "Fabric description.",
    detail1: "detail one",
    detail2: "detail two",
    detail3: "detail three",
    img: "palm-shadows.jpeg"

  },
  fabric_wigandia: {
    heading: "FABRIC WIGANDIA",
    description: "Fabric description.",
    detail1: "detail one",
    detail2: "detail two",
    detail3: "detail three",
    img: "wigandia-caracasana.jpeg"
  },
}

const artGalleryEntries = ['heading', 'description', 'medium', 'size', 'original', 'print', 'img'];
const fabricGalleryEntries = ['heading', 'description', 'detail1', 'detail2', 'detail3', 'img'];

const topLeftStart = 'polygon(0 0, 0 0, 0 0, 0 0)';
const topLeftEnd = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';
const topToBottomStart = 'polygon(0 0, 100% 0, 100% 0, 0 0)';
const topToBottomEnd = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';
