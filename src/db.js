import _sampleSize from "lodash/sampleSize";
import { uuidv4 } from "./utils";

export const MEN_PRODUCT_NAMES = [
  "Stealth",
  "Bomber",
  "Wolfpack",
  "Storm",
  "Operator",
  "Denim",
  "Navigator",
  "Parka",
  "Gulf",
  "Compound",
  "Pullover",
  "Arrow",
  "Shacket",
  "Jacket",
];
export const MEN_PRODUCT_TAGS = ["Men", "New In", "Sale"];

export const WOMEN_PRODUCT_NAMES = [
  "Wedding dress",
  "Sweater",
  "T-shirt",
  "Sheath dress",
  "Dress",
  "Gym clothes",
  "Tank top",
  "Shorts",
  "Hoodie",
  "Jeans",
  "Long coat",
  "Uniform",
  "Dress pants",
  "Long-sleeve top",
  "Skirt",
  "Jacket",
];

export const WOMEN_PRODUCT_TAGS = [
  "Women",
  "Girl",
  "New In",
  "Sale",
  "Tops",
  "Dresses",
];

export const PRODUCT_CATEGORIES = ["Denim", "Outerwear", "Shirts", "Dresses"];

export const PRODUCT_CATEGORIES_ = [
  {
    id: 2,
    name: "Accessories",
    link: "/categories/accessories",
  },
  {
    id: 3,
    name: "Denim",
    link: "/categories/denim",
  },
  {
    id: 4,
    name: "Footwear",
    link: "/categories/footwear",
  },
  {
    id: 6,
    name: "Outerwear",
    link: "/categories/outerwear",
  },
  {
    id: 7,
    name: "Pants",
    link: "/categories/pants",
  },
  {
    id: 8,
    name: "Shirts",
    link: "/categories/shirts",
  },
  {
    id: 9,
    name: "T-Shirts",
    link: "/categories/t-shirts",
  },
  {
    id: 10,
    name: "Shorts",
    link: "/categories/shorts",
  },
  {
    id: 12,
    name: "Dresses",
    link: "/categories/dresses",
  },
];

export const SITE_BANNERS = [
  {
    label: "First slide",
    link: "/categories/dresses",
  },
  {
    label: "Second slide",
    link: "/categories/t-shirts",
  },
  {
    label: "Third slide",
    link: "/categories/pants",
  },
];

export const SIZES = [
  {
    short: "S",
    long: "Small",
    chest: "34 - 36",
    waist: "28 - 30",
  },
  {
    short: "M",
    long: "Medium",
    chest: "38 - 40",
    waist: "32 - 34",
  },
  {
    short: "L",
    long: "Large",
    chest: "42 - 44",
    waist: "36 - 38",
  },
  {
    short: "XL",
    long: "X-Large",
    chest: "46 - 48",
    waist: "40 - 42",
  },
  {
    short: "2XL",
    long: "2X-Large",
    chest: "50 - 52",
    waist: "44 - 46",
  },
  {
    short: "3XL",
    long: "3X-Large",
    chest: "54 - 56",
    waist: "48 - 50",
  },
];

export const COLORS = [
  { key: uuidv4(), name: "Alice Blue", value: "#F0F8FF" },
  { key: uuidv4(), name: "Amethyst", value: "#9966CC" },
  { key: uuidv4(), name: "Antique White", value: "#FAEBD7" },
  { key: uuidv4(), name: "Aqua", value: "#00FFFF" },
  { key: uuidv4(), name: "Aquamarine", value: "#7FFFD4" },
  { key: uuidv4(), name: "Azure", value: "#F0FFFF" },
  { key: uuidv4(), name: "Beige", value: "#F5F5DC" },
  { key: uuidv4(), name: "Bisque", value: "#FFE4C4" },
  { key: uuidv4(), name: "Black", value: "#000000" },
  { key: uuidv4(), name: "Blanched Almond", value: "#FFEBCD" },
  { key: uuidv4(), name: "Blue", value: "#0000FF" },
  { key: uuidv4(), name: "Blue Violet", value: "#8A2BE2" },
  { key: uuidv4(), name: "Brown", value: "#A52A2A" },
  { key: uuidv4(), name: "Burly Wood", value: "#DEB887" },
  { key: uuidv4(), name: "Cadet Blue", value: "#5F9EA0" },
  { key: uuidv4(), name: "Chartreuse", value: "#7FFF00" },
  { key: uuidv4(), name: "Chocolate", value: "#D2691E" },
  { key: uuidv4(), name: "Coral", value: "#FF7F50" },
  { key: uuidv4(), name: "Cornflower Blue", value: "#6495ED" },
  { key: uuidv4(), name: "Cornsilk", value: "#FFF8DC" },
  { key: uuidv4(), name: "Crimson", value: "#DC143C" },
  { key: uuidv4(), name: "Cyan", value: "#00FFFF" },
  { key: uuidv4(), name: "Dark Blue", value: "#00008B" },
  { key: uuidv4(), name: "Dark Cyan", value: "#008B8B" },
  { key: uuidv4(), name: "Dark Goldenrod", value: "#B8860B" },
  { key: uuidv4(), name: "Dark Gray", value: "#A9A9A9" },
  { key: uuidv4(), name: "Dark Green", value: "#006400" },
  { key: uuidv4(), name: "Dark Khaki", value: "#BDB76B" },
  { key: uuidv4(), name: "Dark Magenta", value: "#8B008B" },
  { key: uuidv4(), name: "Dark Olive Green", value: "#556B2F" },
  { key: uuidv4(), name: "Dark Orange", value: "#FF8C00" },
  { key: uuidv4(), name: "Dark Orchid", value: "#9932CC" },
  { key: uuidv4(), name: "Dark Red", value: "#8B0000" },
  { key: uuidv4(), name: "Dark Salmon", value: "#E9967A" },
  { key: uuidv4(), name: "Dark Sea Green", value: "#8FBC8F" },
  { key: uuidv4(), name: "Dark Slate Blue", value: "#483D8B" },
  { key: uuidv4(), name: "Dark Slate Gray", value: "#2F4F4F" },
  { key: uuidv4(), name: "Dark Turquoise", value: "#00CED1" },
  { key: uuidv4(), name: "Dark Violet", value: "#9400D3" },
  { key: uuidv4(), name: "Deep Pink", value: "#FF1493" },
  { key: uuidv4(), name: "Deep Sky Blue", value: "#00BFFF" },
  { key: uuidv4(), name: "Dim Gray", value: "#696969" },
  { key: uuidv4(), name: "Dodger Blue", value: "#1E90FF" },
  { key: uuidv4(), name: "Fire Brick", value: "#B22222" },
  { key: uuidv4(), name: "Floral White", value: "#FFFAF0" },
  { key: uuidv4(), name: "Forest Green", value: "#228B22" },
  { key: uuidv4(), name: "Fuchsia", value: "#FF00FF" },
  { key: uuidv4(), name: "Gainsboro", value: "#DCDCDC" },
  { key: uuidv4(), name: "Ghost White", value: "#F8F8FF" },
  { key: uuidv4(), name: "Gold", value: "#FFD700" },
  { key: uuidv4(), name: "Goldenrod", value: "#DAA520" },
  { key: uuidv4(), name: "Gray", value: "#808080" },
  { key: uuidv4(), name: "Green", value: "#008000" },
  { key: uuidv4(), name: "Green Yellow", value: "#ADFF2F" },
  { key: uuidv4(), name: "Honeydew", value: "#F0FFF0" },
  { key: uuidv4(), name: "Hot Pink", value: "#FF69B4" },
  { key: uuidv4(), name: "Indian Red", value: "#CD5C5C" },
  { key: uuidv4(), name: "Indigo", value: "#4B0082" },
  { key: uuidv4(), name: "Ivory", value: "#FFFFF0" },
  { key: uuidv4(), name: "Khaki", value: "#F0E68C" },
  { key: uuidv4(), name: "Lavender", value: "#E6E6FA" },
  { key: uuidv4(), name: "Lavender Blush", value: "#FFF0F5" },
  { key: uuidv4(), name: "Lawn Green", value: "#7CFC00" },
  { key: uuidv4(), name: "Lemon Chiffon", value: "#FFFACD" },
  { key: uuidv4(), name: "Light Blue", value: "#ADD8E6" },
  { key: uuidv4(), name: "Light Coral", value: "#F08080" },
  { key: uuidv4(), name: "Light Cyan", value: "#E0FFFF" },
  { key: uuidv4(), name: "Light Goldenrod Yellow", value: "#FAFAD2" },
  { key: uuidv4(), name: "Light Green", value: "#90EE90" },
  { key: uuidv4(), name: "Light Grey", value: "#D3D3D3" },
  { key: uuidv4(), name: "Light Pink", value: "#FFB6C1" },
  { key: uuidv4(), name: "Light Salmon", value: "#FFA07A" },
  { key: uuidv4(), name: "Light Salmon", value: "#FFA07A" },
  { key: uuidv4(), name: "Light Sea Green", value: "#20B2AA" },
  { key: uuidv4(), name: "Light Sky Blue", value: "#87CEFA" },
  { key: uuidv4(), name: "Light Slate Gray", value: "#778899" },
  { key: uuidv4(), name: "Light Steel Blue", value: "#B0C4DE" },
  { key: uuidv4(), name: "Light Yellow", value: "#FFFFE0" },
  { key: uuidv4(), name: "Lime", value: "#00FF00" },
  { key: uuidv4(), name: "Lime Green", value: "#32CD32" },
  { key: uuidv4(), name: "Linen", value: "#FAF0E6" },
  { key: uuidv4(), name: "Magenta", value: "#FF00FF" },
  { key: uuidv4(), name: "Maroon", value: "#800000" },
  { key: uuidv4(), name: "Medium Aquamarine", value: "#66CDAA" },
  { key: uuidv4(), name: "Medium Blue", value: "#0000CD" },
  { key: uuidv4(), name: "Medium Orchid", value: "#BA55D3" },
  { key: uuidv4(), name: "Medium Purple", value: "#9370DB" },
  { key: uuidv4(), name: "Medium Sea Green", value: "#3CB371" },
  { key: uuidv4(), name: "Medium Slate Blue", value: "#7B68EE" },
  { key: uuidv4(), name: "Medium Slate Blue", value: "#7B68EE" },
  { key: uuidv4(), name: "Medium Spring Green", value: "#00FA9A" },
  { key: uuidv4(), name: "Medium Turquoise", value: "#48D1CC" },
  { key: uuidv4(), name: "Medium Violet Red", value: "#C71585" },
  { key: uuidv4(), name: "Midnight Blue", value: "#191970" },
  { key: uuidv4(), name: "Mint Cream", value: "#F5FFFA" },
  { key: uuidv4(), name: "Misty Rose", value: "#FFE4E1" },
  { key: uuidv4(), name: "Moccasin", value: "#FFE4B5" },
  { key: uuidv4(), name: "Navajo White", value: "#FFDEAD" },
  { key: uuidv4(), name: "Navy", value: "#000080" },
  { key: uuidv4(), name: "Old Lace", value: "#FDF5E6" },
  { key: uuidv4(), name: "Olive", value: "#808000" },
  { key: uuidv4(), name: "Olive Drab", value: "#6B8E23" },
  { key: uuidv4(), name: "Orange", value: "#FFA500" },
  { key: uuidv4(), name: "Orange Red", value: "#FF4500" },
  { key: uuidv4(), name: "Orchid", value: "#DA70D6" },
  { key: uuidv4(), name: "Pale Goldenrod", value: "#EEE8AA" },
  { key: uuidv4(), name: "Pale Green", value: "#98FB98" },
  { key: uuidv4(), name: "Pale Turquoise", value: "#AFEEEE" },
  { key: uuidv4(), name: "Pale Violet Red", value: "#DB7093" },
  { key: uuidv4(), name: "Papaya Whip", value: "#FFEFD5" },
  { key: uuidv4(), name: "Peach Puff", value: "#FFDAB9" },
  { key: uuidv4(), name: "Peru", value: "#CD853F" },
  { key: uuidv4(), name: "Pink", value: "#FFC0CB" },
  { key: uuidv4(), name: "Plum", value: "#DDA0DD" },
  { key: uuidv4(), name: "Powder Blue", value: "#B0E0E6" },
  { key: uuidv4(), name: "Purple", value: "#800080" },
  { key: uuidv4(), name: "Red", value: "#FF0000" },
  { key: uuidv4(), name: "Rosy Brown", value: "#BC8F8F" },
  { key: uuidv4(), name: "Royal Blue", value: "#4169E1" },
  { key: uuidv4(), name: "Saddle Brown", value: "#8B4513" },
  { key: uuidv4(), name: "Salmon", value: "#FA8072" },
  { key: uuidv4(), name: "Sandy Brown", value: "#F4A460" },
  { key: uuidv4(), name: "Sea Green", value: "#2E8B57" },
  { key: uuidv4(), name: "Seashell", value: "#FFF5EE" },
  { key: uuidv4(), name: "Sienna", value: "#A0522D" },
  { key: uuidv4(), name: "Silver", value: "#C0C0C0" },
  { key: uuidv4(), name: "Sky Blue", value: "#87CEEB" },
  { key: uuidv4(), name: "Slate Blue", value: "#6A5ACD" },
  { key: uuidv4(), name: "Slate Gray", value: "#708090" },
  { key: uuidv4(), name: "Snow", value: "#FFFAFA" },
  { key: uuidv4(), name: "Spring Green", value: "#00FF7F" },
  { key: uuidv4(), name: "Steel Blue", value: "#4682B4" },
  { key: uuidv4(), name: "Tan", value: "#D2B48C" },
  { key: uuidv4(), name: "Teal", value: "#008080" },
  { key: uuidv4(), name: "Thistle", value: "#D8BFD8" },
  { key: uuidv4(), name: "Tomato", value: "#FF6347" },
  { key: uuidv4(), name: "Turquoise", value: "#40E0D0" },
  { key: uuidv4(), name: "Violet", value: "#EE82EE" },
  { key: uuidv4(), name: "Wheat", value: "#F5DEB3" },
  { key: uuidv4(), name: "White", value: "#FFFFFF" },
  { key: uuidv4(), name: "White Smoke", value: "#F5F5F5" },
  { key: uuidv4(), name: "Yellow", value: "#FFFF00" },
  { key: uuidv4(), name: "Yellow Green", value: "#9ACD32" },
];

export const PRODUCTS_LIST = [
  {
    sku: "3945319881",
    name: "Denim Wolfpack",
    salePrice: 1129.19,
    price: 1970.71,
    colors: [
      {
        name: "Blue",
        value: "#0000FF",
      },
      {
        name: "Light Pink",
        value: "#FFB6C1",
      },
      {
        name: "Yellow",
        value: "#FFFF00",
      },
      {
        name: "Dim Gray",
        value: "#696969",
      },
    ],
    sizes: [
      {
        short: "L",
        long: "Large",
        chest: "42 - 44",
        waist: "36 - 38",
      },
      {
        short: "3XL",
        long: "3X-Large",
        chest: "54 - 56",
        waist: "48 - 50",
      },
      {
        short: "M",
        long: "Medium",
        chest: "38 - 40",
        waist: "32 - 34",
      },
    ],
    landingPageUrl: "/products/3945319881/denim-wolfpack",
    image: "/assets/images/products/3945319881.jpg",
    tags: ["Sale", "New In"],
    categories: ["Outerwear", "Shirts"],
    description:
      "vitae nulla sit dolor consequuntur? Quos repudiandae consectetur elit. Accusantium",
  },
  {
    sku: "2267728447",
    name: "Gulf Compound",
    salePrice: 1622.29,
    price: 3549.8,
    colors: [
      {
        name: "Saddle Brown",
        value: "#8B4513",
      },
      {
        name: "Spring Green",
        value: "#00FF7F",
      },
      {
        name: "Dark Goldenrod",
        value: "#B8860B",
      },
      {
        name: "Dim Gray",
        value: "#696969",
      },
    ],
    sizes: [
      {
        short: "2XL",
        long: "2X-Large",
        chest: "50 - 52",
        waist: "44 - 46",
      },
      {
        short: "M",
        long: "Medium",
        chest: "38 - 40",
        waist: "32 - 34",
      },
      {
        short: "3XL",
        long: "3X-Large",
        chest: "54 - 56",
        waist: "48 - 50",
      },
    ],
    landingPageUrl: "/products/2267728447/gulf-compound",
    image: "/assets/images/products/2267728447.jpg",
    tags: ["New In", "Men"],
    categories: ["Denim", "Outerwear"],
    description:
      "dolorem autem. sit repudiandae omnis officiis Quos accusamus eaque vitae",
  },
  {
    sku: "5389222625",
    name: "Denim Parka",
    salePrice: 1047.03,
    price: 1226.87,
    colors: [
      {
        name: "Gray",
        value: "#808080",
      },
      {
        name: "Dark Green",
        value: "#006400",
      },
      {
        name: "Fuchsia",
        value: "#FF00FF",
      },
      {
        name: "Forest Green",
        value: "#228B22",
      },
    ],
    sizes: [
      {
        short: "3XL",
        long: "3X-Large",
        chest: "54 - 56",
        waist: "48 - 50",
      },
      {
        short: "XL",
        long: "X-Large",
        chest: "46 - 48",
        waist: "40 - 42",
      },
      {
        short: "M",
        long: "Medium",
        chest: "38 - 40",
        waist: "32 - 34",
      },
    ],
    landingPageUrl: "/products/5389222625/denim-parka",
    image: "/assets/images/products/5389222625.jpg",
    tags: ["New In", "Sale"],
    categories: ["Denim", "Dresses"],
    description:
      "in Lorem accusamus ipsum dolor reiciendis omnis adipisicing amet dolorem",
  },
  {
    sku: "2629853385",
    name: "Denim Bomber",
    salePrice: 2110.47,
    price: 2213.31,
    colors: [
      {
        name: "White Smoke",
        value: "#F5F5F5",
      },
      {
        name: "Bisque",
        value: "#FFE4C4",
      },
      {
        name: "Ivory",
        value: "#FFFFF0",
      },
      {
        name: "Lime",
        value: "#00FF00",
      },
    ],
    sizes: [
      {
        short: "2XL",
        long: "2X-Large",
        chest: "50 - 52",
        waist: "44 - 46",
      },
      {
        short: "M",
        long: "Medium",
        chest: "38 - 40",
        waist: "32 - 34",
      },
      {
        short: "L",
        long: "Large",
        chest: "42 - 44",
        waist: "36 - 38",
      },
    ],
    landingPageUrl: "/products/2629853385/denim-bomber",
    image: "/assets/images/products/2629853385.jpg",
    tags: ["New In", "Sale"],
    categories: ["Outerwear", "Shirts"],
    description:
      "consequuntur? vitae officiis omnis elit. amet non expedita ipsum Lorem",
  },
  {
    sku: "5376319800",
    name: "Denim Arrow",
    salePrice: 5101.22,
    price: 8323.02,
    colors: [
      {
        name: "Snow",
        value: "#FFFAFA",
      },
      {
        name: "Indian Red",
        value: "#CD5C5C",
      },
      {
        name: "Forest Green",
        value: "#228B22",
      },
      {
        name: "Lawn Green",
        value: "#7CFC00",
      },
    ],
    sizes: [
      {
        short: "S",
        long: "Small",
        chest: "34 - 36",
        waist: "28 - 30",
      },
      {
        short: "M",
        long: "Medium",
        chest: "38 - 40",
        waist: "32 - 34",
      },
      {
        short: "XL",
        long: "X-Large",
        chest: "46 - 48",
        waist: "40 - 42",
      },
    ],
    landingPageUrl: "/products/5376319800/denim-arrow",
    image: "/assets/images/products/5376319800.jpg",
    tags: ["Men", "Sale"],
    categories: ["Outerwear", "Dresses"],
    description:
      "alias amet Quos adipisicing aspernatur omnis expedita cupiditate consectetur accusamus",
  },
  {
    sku: "8723844335",
    name: "Parka Stealth",
    salePrice: 2415.4,
    price: 7607.21,
    colors: [
      {
        name: "Fire Brick",
        value: "#B22222",
      },
      {
        name: "Moccasin",
        value: "#FFE4B5",
      },
      {
        name: "Peach Puff",
        value: "#FFDAB9",
      },
      {
        name: "Midnight Blue",
        value: "#191970",
      },
    ],
    sizes: [
      {
        short: "L",
        long: "Large",
        chest: "42 - 44",
        waist: "36 - 38",
      },
      {
        short: "3XL",
        long: "3X-Large",
        chest: "54 - 56",
        waist: "48 - 50",
      },
      {
        short: "M",
        long: "Medium",
        chest: "38 - 40",
        waist: "32 - 34",
      },
    ],
    landingPageUrl: "/products/8723844335/parka-stealth",
    image: "/assets/images/products/8723844335.jpg",
    tags: ["New In", "Men"],
    categories: ["Shirts", "Dresses"],
    description:
      "nulla ipsum Lorem omnis nam, accusamus expedita reiciendis eaque alias",
  },
  {
    sku: "2017294173",
    name: "Bomber Denim",
    salePrice: 1074.26,
    price: 1792.34,
    colors: [
      {
        name: "Azure",
        value: "#F0FFFF",
      },
      {
        name: "Peach Puff",
        value: "#FFDAB9",
      },
      {
        name: "Saddle Brown",
        value: "#8B4513",
      },
      {
        name: "Bisque",
        value: "#FFE4C4",
      },
    ],
    sizes: [
      {
        short: "2XL",
        long: "2X-Large",
        chest: "50 - 52",
        waist: "44 - 46",
      },
      {
        short: "XL",
        long: "X-Large",
        chest: "46 - 48",
        waist: "40 - 42",
      },
      {
        short: "S",
        long: "Small",
        chest: "34 - 36",
        waist: "28 - 30",
      },
    ],
    landingPageUrl: "/products/2017294173/bomber-denim",
    image: "/assets/images/products/2017294173.jpg",
    tags: ["Men", "Sale"],
    categories: ["Denim", "Shirts"],
    description:
      "repudiandae dolorem recusandae sit amet Quos adipisicing non alias officiis",
  },
  {
    sku: "3968350008",
    name: "Navigator Compound",
    salePrice: 3360.18,
    price: 9547.68,
    colors: [
      {
        name: "Cadet Blue",
        value: "#5F9EA0",
      },
      {
        name: "Olive Drab",
        value: "#6B8E23",
      },
      {
        name: "Dark Red",
        value: "#8B0000",
      },
      {
        name: "Dark Sea Green",
        value: "#8FBC8F",
      },
    ],
    sizes: [
      {
        short: "L",
        long: "Large",
        chest: "42 - 44",
        waist: "36 - 38",
      },
      {
        short: "3XL",
        long: "3X-Large",
        chest: "54 - 56",
        waist: "48 - 50",
      },
      {
        short: "2XL",
        long: "2X-Large",
        chest: "50 - 52",
        waist: "44 - 46",
      },
    ],
    landingPageUrl: "/products/3968350008/navigator-compound",
    image: "/assets/images/products/3968350008.jpg",
    tags: ["New In", "Sale"],
    categories: ["Outerwear", "Dresses"],
    description:
      "dolor eaque expedita alias consectetur aspernatur nam, Accusantium cupiditate officiis",
  },
  {
    sku: "2736245812",
    name: "Operator Shacket",
    salePrice: 7248.52,
    price: 9239.77,
    colors: [
      {
        name: "Gray",
        value: "#808080",
      },
      {
        name: "Medium Orchid",
        value: "#BA55D3",
      },
      {
        name: "Dark Cyan",
        value: "#008B8B",
      },
      {
        name: "Rosy Brown",
        value: "#BC8F8F",
      },
    ],
    sizes: [
      {
        short: "M",
        long: "Medium",
        chest: "38 - 40",
        waist: "32 - 34",
      },
      {
        short: "2XL",
        long: "2X-Large",
        chest: "50 - 52",
        waist: "44 - 46",
      },
      {
        short: "3XL",
        long: "3X-Large",
        chest: "54 - 56",
        waist: "48 - 50",
      },
    ],
    landingPageUrl: "/products/2736245812/operator-shacket",
    image: "/assets/images/products/2736245812.jpg",
    tags: ["Sale", "Men"],
    categories: ["Denim", "Outerwear"],
    description:
      "ipsum sit omnis blanditiis cupiditate Lorem aspernatur nam, amet autem.",
  },
  {
    sku: "6684519651",
    name: "Denim Shacket",
    salePrice: 4346.68,
    price: 4435.66,
    colors: [
      {
        name: "Purple",
        value: "#800080",
      },
      {
        name: "Dark Cyan",
        value: "#008B8B",
      },
      {
        name: "Light Blue",
        value: "#ADD8E6",
      },
      {
        name: "Light Cyan",
        value: "#E0FFFF",
      },
    ],
    sizes: [
      {
        short: "2XL",
        long: "2X-Large",
        chest: "50 - 52",
        waist: "44 - 46",
      },
      {
        short: "M",
        long: "Medium",
        chest: "38 - 40",
        waist: "32 - 34",
      },
      {
        short: "S",
        long: "Small",
        chest: "34 - 36",
        waist: "28 - 30",
      },
    ],
    landingPageUrl: "/products/6684519651/denim-shacket",
    image: "/assets/images/products/6684519651.jpg",
    tags: ["New In", "Sale"],
    categories: ["Denim", "Shirts"],
    description:
      "Lorem elit. aspernatur accusamus expedita vitae reiciendis amet cupiditate Quos",
  },
  {
    sku: "7531347802",
    name: "Long-sleeve top",
    salePrice: 1195.15,
    price: 2091.62,
    colors: [
      {
        name: "Moccasin",
        value: "#FFE4B5",
      },
      {
        name: "Dim Gray",
        value: "#696969",
      },
      {
        name: "White",
        value: "#FFFFFF",
      },
      {
        name: "Light Cyan",
        value: "#E0FFFF",
      },
    ],
    sizes: [
      {
        short: "3XL",
        long: "3X-Large",
        chest: "54 - 56",
        waist: "48 - 50",
      },
      {
        short: "L",
        long: "Large",
        chest: "42 - 44",
        waist: "36 - 38",
      },
      {
        short: "M",
        long: "Medium",
        chest: "38 - 40",
        waist: "32 - 34",
      },
    ],
    landingPageUrl: "/products/7531347802/long-sleeve-top",
    image: "/assets/images/products/7531347802.jpg",
    tags: ["New In", "Women", "Sale", "Girl"],
    categories: ["Denim", "Shirts"],
    description:
      "in autem. omnis consequuntur? nulla Accusantium accusamus amet vitae dolor",
  },
  {
    sku: "6716706258",
    name: "Dress pants",
    salePrice: 1111.93,
    price: 3098.32,
    colors: [
      {
        name: "Blue Violet",
        value: "#8A2BE2",
      },
      {
        name: "Antique White",
        value: "#FAEBD7",
      },
      {
        name: "Salmon",
        value: "#FA8072",
      },
      {
        name: "Teal",
        value: "#008080",
      },
    ],
    sizes: [
      {
        short: "M",
        long: "Medium",
        chest: "38 - 40",
        waist: "32 - 34",
      },
      {
        short: "XL",
        long: "X-Large",
        chest: "46 - 48",
        waist: "40 - 42",
      },
      {
        short: "S",
        long: "Small",
        chest: "34 - 36",
        waist: "28 - 30",
      },
    ],
    landingPageUrl: "/products/6716706258/dress-pants",
    image: "/assets/images/products/6716706258.jpg",
    tags: ["Tops", "Dresses", "Girl", "Women"],
    categories: ["Denim", "Dresses"],
    description:
      "reiciendis Lorem alias in eaque nulla elit. consequuntur? consectetur ipsum",
  },
  {
    sku: "6789811628",
    name: "T-shirt",
    salePrice: 1972,
    price: 2183.36,
    colors: [
      {
        name: "White Smoke",
        value: "#F5F5F5",
      },
      {
        name: "Medium Violet Red",
        value: "#C71585",
      },
      {
        name: "Violet",
        value: "#EE82EE",
      },
      {
        name: "Mint Cream",
        value: "#F5FFFA",
      },
    ],
    sizes: [
      {
        short: "2XL",
        long: "2X-Large",
        chest: "50 - 52",
        waist: "44 - 46",
      },
      {
        short: "L",
        long: "Large",
        chest: "42 - 44",
        waist: "36 - 38",
      },
      {
        short: "3XL",
        long: "3X-Large",
        chest: "54 - 56",
        waist: "48 - 50",
      },
    ],
    landingPageUrl: "/products/6789811628/t-shirt",
    image: "/assets/images/products/6789811628.jpg",
    tags: ["Dresses", "Girl", "Women", "Tops"],
    categories: ["Outerwear", "Shirts"],
    description:
      "dolor aspernatur eaque consequuntur? sit recusandae reiciendis Lorem dolorem elit.",
  },
  {
    sku: "2878745250",
    name: "Long-sleeve top",
    salePrice: 1498.94,
    price: 5350.79,
    colors: [
      {
        name: "Indigo",
        value: "#4B0082",
      },
      {
        name: "Goldenrod",
        value: "#DAA520",
      },
      {
        name: "Medium Aquamarine",
        value: "#66CDAA",
      },
      {
        name: "Medium Purple",
        value: "#9370DB",
      },
    ],
    sizes: [
      {
        short: "L",
        long: "Large",
        chest: "42 - 44",
        waist: "36 - 38",
      },
      {
        short: "XL",
        long: "X-Large",
        chest: "46 - 48",
        waist: "40 - 42",
      },
      {
        short: "2XL",
        long: "2X-Large",
        chest: "50 - 52",
        waist: "44 - 46",
      },
    ],
    landingPageUrl: "/products/2878745250/long-sleeve-top",
    image: "/assets/images/products/2878745250.jpg",
    tags: ["Girl", "Tops", "New In", "Sale"],
    categories: ["Shirts", "Outerwear"],
    description:
      "reiciendis non cupiditate eaque autem. Accusantium repudiandae nulla nam, in",
  },
  {
    sku: "1067875032",
    name: "Tank top",
    salePrice: 2581.89,
    price: 5168.9,
    colors: [
      {
        name: "Dark Salmon",
        value: "#E9967A",
      },
      {
        name: "Gold",
        value: "#FFD700",
      },
      {
        name: "Light Salmon",
        value: "#FFA07A",
      },
      {
        name: "Medium Orchid",
        value: "#BA55D3",
      },
    ],
    sizes: [
      {
        short: "M",
        long: "Medium",
        chest: "38 - 40",
        waist: "32 - 34",
      },
      {
        short: "L",
        long: "Large",
        chest: "42 - 44",
        waist: "36 - 38",
      },
      {
        short: "2XL",
        long: "2X-Large",
        chest: "50 - 52",
        waist: "44 - 46",
      },
    ],
    landingPageUrl: "/products/1067875032/tank-top",
    image: "/assets/images/products/1067875032.jpg",
    tags: ["New In", "Tops", "Women", "Dresses"],
    categories: ["Denim", "Shirts"],
    description:
      "accusamus eaque vitae Quos omnis reiciendis consectetur aspernatur dolorem repudiandae",
  },
  {
    sku: "6706508256",
    name: "Tank top",
    salePrice: 1045.05,
    price: 1292.52,
    colors: [
      {
        name: "Amethyst",
        value: "#9966CC",
      },
      {
        name: "Lawn Green",
        value: "#7CFC00",
      },
      {
        name: "Dark Slate Gray",
        value: "#2F4F4F",
      },
      {
        name: "Light Sky Blue",
        value: "#87CEFA",
      },
    ],
    sizes: [
      {
        short: "3XL",
        long: "3X-Large",
        chest: "54 - 56",
        waist: "48 - 50",
      },
      {
        short: "2XL",
        long: "2X-Large",
        chest: "50 - 52",
        waist: "44 - 46",
      },
      {
        short: "XL",
        long: "X-Large",
        chest: "46 - 48",
        waist: "40 - 42",
      },
    ],
    landingPageUrl: "/products/6706508256/tank-top",
    image: "/assets/images/products/6706508256.jpg",
    tags: ["Tops", "Girl", "Sale", "Women"],
    categories: ["Denim", "Dresses"],
    description:
      "Accusantium aspernatur amet reiciendis recusandae adipisicing omnis non officiis vitae",
  },
  {
    sku: "2133940578",
    name: "Hoodie",
    salePrice: 2012.43,
    price: 5052.98,
    colors: [
      {
        name: "Olive",
        value: "#808000",
      },
      {
        name: "Dark Salmon",
        value: "#E9967A",
      },
      {
        name: "Misty Rose",
        value: "#FFE4E1",
      },
      {
        name: "Dark Gray",
        value: "#A9A9A9",
      },
    ],
    sizes: [
      {
        short: "L",
        long: "Large",
        chest: "42 - 44",
        waist: "36 - 38",
      },
      {
        short: "XL",
        long: "X-Large",
        chest: "46 - 48",
        waist: "40 - 42",
      },
      {
        short: "M",
        long: "Medium",
        chest: "38 - 40",
        waist: "32 - 34",
      },
    ],
    landingPageUrl: "/products/2133940578/hoodie",
    image: "/assets/images/products/2133940578.jpg",
    tags: ["Tops", "Women", "Dresses", "New In"],
    categories: ["Dresses", "Outerwear"],
    description:
      "nam, alias adipisicing vitae expedita autem. officiis cupiditate amet non",
  },
  {
    sku: "5236892738",
    name: "Dress pants",
    salePrice: 1162.23,
    price: 5082.19,
    colors: [
      {
        name: "Khaki",
        value: "#F0E68C",
      },
      {
        name: "Light Blue",
        value: "#ADD8E6",
      },
      {
        name: "Navajo White",
        value: "#FFDEAD",
      },
      {
        name: "Indian Red",
        value: "#CD5C5C",
      },
    ],
    sizes: [
      {
        short: "3XL",
        long: "3X-Large",
        chest: "54 - 56",
        waist: "48 - 50",
      },
      {
        short: "XL",
        long: "X-Large",
        chest: "46 - 48",
        waist: "40 - 42",
      },
      {
        short: "L",
        long: "Large",
        chest: "42 - 44",
        waist: "36 - 38",
      },
    ],
    landingPageUrl: "/products/5236892738/dress-pants",
    image: "/assets/images/products/5236892738.jpg",
    tags: ["New In", "Dresses", "Sale", "Tops"],
    categories: ["Denim", "Outerwear"],
    description:
      "alias nulla aspernatur nam, expedita omnis Accusantium blanditiis elit. adipisicing",
  },
  {
    sku: "3406285036",
    name: "Dress",
    salePrice: 3626.65,
    price: 8597.54,
    colors: [
      {
        name: "Lemon Chiffon",
        value: "#FFFACD",
      },
      {
        name: "Thistle",
        value: "#D8BFD8",
      },
      {
        name: "Bisque",
        value: "#FFE4C4",
      },
      {
        name: "Chartreuse",
        value: "#7FFF00",
      },
    ],
    sizes: [
      {
        short: "2XL",
        long: "2X-Large",
        chest: "50 - 52",
        waist: "44 - 46",
      },
      {
        short: "L",
        long: "Large",
        chest: "42 - 44",
        waist: "36 - 38",
      },
      {
        short: "M",
        long: "Medium",
        chest: "38 - 40",
        waist: "32 - 34",
      },
    ],
    landingPageUrl: "/products/3406285036/dress",
    image: "/assets/images/products/3406285036.jpg",
    tags: ["New In", "Girl", "Sale", "Tops"],
    categories: ["Denim", "Shirts"],
    description:
      "reiciendis nam, cupiditate omnis non aspernatur eaque Lorem dolor ipsum",
  },
  {
    sku: "1258149460",
    name: "Sweater",
    salePrice: 1325.09,
    price: 1990.4,
    colors: [
      {
        name: "Gray",
        value: "#808080",
      },
      {
        name: "Blue",
        value: "#0000FF",
      },
      {
        name: "Moccasin",
        value: "#FFE4B5",
      },
      {
        name: "Deep Pink",
        value: "#FF1493",
      },
    ],
    sizes: [
      {
        short: "M",
        long: "Medium",
        chest: "38 - 40",
        waist: "32 - 34",
      },
      {
        short: "2XL",
        long: "2X-Large",
        chest: "50 - 52",
        waist: "44 - 46",
      },
      {
        short: "3XL",
        long: "3X-Large",
        chest: "54 - 56",
        waist: "48 - 50",
      },
    ],
    landingPageUrl: "/products/1258149460/sweater",
    image: "/assets/images/products/1258149460.jpg",
    tags: ["Girl", "Women", "Tops", "Dresses"],
    categories: ["Dresses", "Outerwear"],
    description:
      "officiis cupiditate consequuntur? Accusantium consectetur non eaque accusamus blanditiis dolor",
  },
];
