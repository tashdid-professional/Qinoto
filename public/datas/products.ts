export interface ProductVariant {
  name: string;
  image: string;
  gallery: string[];
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  badge?: "Sale" | "New";
  description: string;
  slug: string;
  tags: string[];
  gallery: string[];
  videos: string[]; // YouTube video IDs
  purchaseLink?: string;
  variantType?: string; // e.g., "Colors", "Flavors", "Sizes"
  variants?: ProductVariant[];
  featured: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Film Eyeshadow",
    category: "Lip Gloss",
    price: 23.0,
    oldPrice: 27.0,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop",
    badge: "Sale",
    description: "An dico accommodare ius, porro mnesarchum pro in. Cetero fierent urbanitas eam id, sed movet voluptua ut. Eu agam malorum nec. Eu has vide putent, dico option nominati no eam. Ea erant impetus consequuntur eos, velit congue vidisse eos ne.",
    slug: "film-eyeshadow",
    tags: ["Cosmetic", "Make Up"],
    gallery: ["https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop", "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop", "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=800&auto=format&fit=crop"],
    variantType: "Colors",
    variants: [
      {
        name: "Classic Pink",
        image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop",
        gallery: ["https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop", "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop", "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=800&auto=format&fit=crop"]
      },
      {
        name: "Velvet Red",
        image: "https://images.unsplash.com/photo-1601049541289-9b1b7abcfe19?q=80&w=800&auto=format&fit=crop",
        gallery: ["https://images.unsplash.com/photo-1601049541289-9b1b7abcfe19?q=80&w=800&auto=format&fit=crop", "https://images.unsplash.com/photo-1620916566391-c94101bad4a8?q=80&w=800&auto=format&fit=crop"]
      },
      {
        name: "Deep Ocean",
        image: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg",
        gallery: ["https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg", "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop"]
      }
    ],
    videos: ["EngW7tLk6R8", "a3ICNMQW7Ok"],
    purchaseLink: "#",
    featured: true
  },
  {
    id: 2,
    name: "WILD PALETTES",
    category: "Lip Gloss",
    price: 25.0,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop",
    description: "An dico accommodare ius, porro mnesarchum pro in. Cetero fierent urbanitas eam id, sed movet voluptua ut. Eu agam malorum nec. Eu has vide putent, dico option nominati no eam.",
    slug: "wild-palettes",
    tags: ["Cosmetic", "Palettes"],
    gallery: ["https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop", "https://images.unsplash.com/photo-1601049541289-9b1b7abcfe19?q=80&w=800&auto=format&fit=crop"],
    videos: ["vP9X2V9c3Uw"],
    purchaseLink: "#",
    featured: true
  },
  {
    id: 3,
    name: "ROSE SAFARI",
    category: "Lip Gloss",
    price: 35.0,
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=800&auto=format&fit=crop",
    description: "An dico accommodare ius, porro mnesarchum pro in. Cetero fierent urbanitas eam id, sed movet voluptua ut. Eu agam malorum nec.",
    slug: "rose-safari",
    tags: ["Classic", "Lipstick"],
    gallery: ["https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=800&auto=format&fit=crop"],
    videos: ["vP9X2V9c3Uw"],
    purchaseLink: "#",
    featured: true
  },
  {
    id: 4,
    name: "SUMMER MIRAGE",
    category: "Lip Gloss",
    price: 32.0,
    image: "https://images.unsplash.com/photo-1515688594390-b649af70d282?q=80&w=800&auto=format&fit=crop",
    badge: "New",
    description: "An dico accommodare ius, porro mnesarchum pro in. Cetero fierent urbanitas eam id, sed movet voluptua ut.",
    slug: "summer-mirage",
    tags: ["Summer", "Limited"],
    gallery: ["https://images.unsplash.com/photo-1515688594390-b649af70d282?q=80&w=800&auto=format&fit=crop"],
    videos: ["vP9X2V9c3Uw"],
    purchaseLink: "#",
    featured: true
  },
  {
    id: 5,
    name: "SUMMER DRAMA",
    category: "Lip Gloss",
    price: 32.0,
    image: "https://picsum.photos/500/600?random=1",
    badge: "New",
    description: "An dico accommodare ius, porro mnesarchum pro in. Cetero fierent urbanitas eam id, sed movet voluptua ut.",
    slug: "summer-drama",
    tags: ["Drama", "Intense"],
    gallery: ["https://picsum.photos/500/600?random=1"],
    videos: ["vP9X2V9c3Uw"],
    purchaseLink: "#",
    featured: true
  },
  {
    id: 6,
    name: "VELVET MATTE",
    category: "Lipstick",
    price: 18.0,
    image: "https://images.unsplash.com/photo-1586776977607-310e9c725c37?q=80&w=800&auto=format&fit=crop",
    badge: "Sale",
    description: "An dico accommodare ius, porro mnesarchum pro in. Cetero fierent urbanitas eam id, sed movet voluptua ut.",
    slug: "velvet-matte",
    tags: ["Matte", "Velvet"],
    gallery: ["https://images.unsplash.com/photo-1586776977607-310e9c725c37?q=80&w=800&auto=format&fit=crop"],
    videos: ["vP9X2V9c3Uw"],
    purchaseLink: "#",
    featured: true
  },
  {
    id: 7,
    name: "GLOW SERUM",
    category: "Skin Care",
    price: 45.0,
    image: "/images/products/4.jpeg",
    badge: "New",
    description: "An dico accommodare ius, porro mnesarchum pro in. Cetero fierent urbanitas eam id, sed movet voluptua ut.",
    slug: "glow-serum",
    tags: ["Serum", "Glow"],
    gallery: ["/images/products/4.jpeg"],
    videos: ["vP9X2V9c3Uw"],
    purchaseLink: "#",
    featured: false
  },
  {
    id: 8,
    name: "SILK FOUNDATION",
    category: "Skin Care",
    price: 38.0,
    image: "https://images.unsplash.com/photo-1599733594230-6b823276abcc?q=80&w=800&auto=format&fit=crop",
    description: "An dico accommodare ius, porro mnesarchum pro in. Cetero fierent urbanitas eam id, sed movet voluptua ut.",
    slug: "silk-foundation",
    tags: ["Foundation", "Silk"],
    gallery: ["https://images.unsplash.com/photo-1599733594230-6b823276abcc?q=80&w=800&auto=format&fit=crop"],
    videos: ["vP9X2V9c3Uw"],
    purchaseLink: "#",
    featured: false
  },
  {
    id: 9,
    name: "EYELASH CURLER",
    category: "Eye Care",
    price: 12.0,
    image: "https://picsum.photos/500/600?random=9",
    description: "An dico accommodare ius, porro mnesarchum pro in. Cetero fierent urbanitas eam id, sed movet voluptua ut.",
    slug: "eyelash-curler",
    tags: ["Tools", "Curler"],
    gallery: ["https://picsum.photos/500/600?random=9"],
    videos: ["vP9X2V9c3Uw"],
    purchaseLink: "#",
    featured: true,
  },
  {
    id: 10,
    name: "BROW GEL",
    category: "Eye Care",
    price: 15.0,
    image: "/images/products/1.jpg",
    badge: "New",
    description: "An dico accommodare ius, porro mnesarchum pro in. Cetero fierent urbanitas eam id, sed movet voluptua ut.",
    slug: "brow-gel",
    tags: ["Brows", "Gel"],
    gallery: ["/images/products/1.jpg","/images/products/2.jpg"],
    videos: ["vP9X2V9c3Uw"],
    purchaseLink: "#",
    featured: false
  },
  {
    id: 11,
    name: "PEACH BLUSH",
    category: "Cheek",
    price: 22.0,
    image: "https://picsum.photos/1000/1000?random=11",
    badge: "Sale",
    description: "An dico accommodare ius, porro mnesarchum pro in. Cetero fierent urbanitas eam id, sed movet voluptua ut.",
    slug: "peach-blush",
    tags: ["Blush", "Peach"],
    gallery: ["/images/products/7.jpeg"],
    videos: ["vP9X2V9c3Uw"],
    purchaseLink: "#",
    featured: true
  },
  {
    id: 12,
    name: "MATTE BRONZER",
    category: "Cheek",
    price: 28.0,
    image: "/images/products/5.jpeg",
    description: "An dico accommodare ius, porro mnesarchum pro in. Cetero fierent urbanitas eam id, sed movet voluptua ut.",
    slug: "matte-bronzer",
    tags: ["Bronzer", "Matte"],
    gallery: ["/images/products/5.jpeg"],
    videos: ["vP9X2V9c3Uw"],
    purchaseLink: "#",
    featured: false
  },
];
