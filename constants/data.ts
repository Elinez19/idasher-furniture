export type NavSubItem = { label: string; href: string; description?: string };
export type FeaturedItem = { label: string; href: string; image: string };
export type NavItem = {
  label: string;
  href: string;
  className?: string;
  children?: NavSubItem[];
  columns?: { label?: string; links: NavSubItem[] }[];
  featured?: { label: string; href: string; image: string }[];
};

export const NAV_LINKS: NavItem[] = [
  {
    label: 'New',
    href: '/rooms/living-room',
    columns: [
      {
        links: [
          { label: 'New Arrivals', href: '/rooms/living-room' },
          { label: 'Designed for Living', href: '/rooms/living-room' },
          { label: 'Worth Coming Home To', href: '/rooms/living-room' },
        ]
      },
      {
        links: [
          { label: 'Curated by Steve Cordony', href: '/rooms/living-room' },
          { label: 'New & Ready to Ship', href: '/rooms/living-room' },
        ]
      }
    ],
    featured: [
      { 
        label: 'New Arrivals', 
        href: '/rooms/living-room', 
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600&auto=format&fit=crop' 
      },
      { 
        label: 'Designed for Living', 
        href: '/rooms/living-room', 
        image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=600&auto=format&fit=crop' 
      },
      { 
        label: 'Curated by Steve Cordony', 
        href: '/rooms/living-room', 
        image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=600&auto=format&fit=crop' 
      },
    ]
  },
  {
    label: 'Sofas',
    href: '/rooms/living-room',
    columns: [
      {
        links: [
          { label: 'All Sofas', href: '/rooms/living-room' },
          { label: 'Sectionals', href: '/rooms/living-room' },
          { label: 'Sleeper Sofas', href: '/rooms/living-room' },
        ]
      },
      {
        links: [
          { label: 'Loveseats', href: '/rooms/living-room' },
          { label: 'Modular Sectionals', href: '/rooms/living-room' },
          { label: 'Leather Sofas', href: '/rooms/living-room' },
        ]
      }
    ],
    featured: [
      { 
        label: 'The Sven Collection', 
        href: '/rooms/living-room', 
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600&auto=format&fit=crop' 
      },
      { 
        label: 'Modular Living', 
        href: '/rooms/living-room', 
        image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=600&auto=format&fit=crop' 
      },
      { 
        label: 'Velvet Comfort', 
        href: '/rooms/living-room', 
        image: 'https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=600&auto=format&fit=crop' 
      },
    ]
  },
  { 
    label: 'Tables', 
    href: '/rooms/living-room',
    columns: [
      {
        links: [
          { label: 'Coffee Tables', href: '/rooms/living-room' },
          { label: 'Dining Tables', href: '/rooms/dining-room' },
          { label: 'Side Tables', href: '/rooms/living-room' },
        ]
      },
      {
        links: [
          { label: 'Console Tables', href: '/rooms/living-room' },
          { label: 'Nightstands', href: '/rooms/bedroom' },
          { label: 'Desks', href: '/rooms/home-office' },
        ]
      }
    ],
    featured: [
      { 
        label: 'Natural Wood', 
        href: '/rooms/living-room', 
        image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=600&auto=format&fit=crop' 
      },
      { 
        label: 'Marble Surfaces', 
        href: '/rooms/living-room', 
        image: 'https://images.unsplash.com/photo-1583209814683-c023dd293cc6?q=80&w=600&auto=format&fit=crop' 
      },
      { 
        label: 'Modern Dining', 
        href: '/rooms/dining-room', 
        image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=600&auto=format&fit=crop' 
      },
    ]
  },
  { 
    label: 'Chairs', 
    href: '/rooms/living-room',
    columns: [
      {
        links: [
          { label: 'Dining Chairs', href: '/rooms/dining-room' },
          { label: 'Armchairs', href: '/rooms/living-room' },
          { label: 'Office Chairs', href: '/rooms/home-office' },
        ]
      },
      {
        links: [
          { label: 'Stools', href: '/rooms/living-room' },
          { label: 'Benches', href: '/rooms/living-room' },
          { label: 'Ottomans', href: '/rooms/living-room' },
        ]
      }
    ],
    featured: [
      { 
        label: 'Accent Seating', 
        href: '/rooms/living-room', 
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop' 
      },
      { 
        label: 'Dining Style', 
        href: '/rooms/dining-room', 
        image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=600&auto=format&fit=crop' 
      },
    ]
  },
  { 
    label: 'Beds', 
    href: '/rooms/bedroom',
    columns: [
      {
        links: [
          { label: 'All Beds', href: '/rooms/bedroom' },
          { label: 'Upholstered Beds', href: '/rooms/bedroom' },
          { label: 'Storage Beds', href: '/rooms/bedroom' },
        ]
      },
      {
        links: [
          { label: 'King Beds', href: '/rooms/bedroom' },
          { label: 'Queen Beds', href: '/rooms/bedroom' },
          { label: 'Twin Beds', href: '/rooms/bedroom' },
        ]
      }
    ],
    featured: [
      { 
        label: 'Dreamy Comfort', 
        href: '/rooms/bedroom', 
        image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=600&auto=format&fit=crop' 
      },
      { 
        label: 'Modern Frames', 
        href: '/rooms/bedroom', 
        image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=600&auto=format&fit=crop' 
      },
    ]
  },
  { 
    label: 'Storage', 
    href: '/rooms/living-room',
    columns: [
      {
        links: [
          { label: 'Dressers', href: '/rooms/bedroom' },
          { label: 'Sideboards', href: '/rooms/living-room' },
          { label: 'Bookshelves', href: '/rooms/living-room' },
        ]
      },
      {
        links: [
          { label: 'TV Stands', href: '/rooms/living-room' },
          { label: 'Cabinets', href: '/rooms/living-room' },
          { label: 'Pantry Storage', href: '/rooms/dining-room' },
        ]
      }
    ],
    featured: [
      { 
        label: 'Organized Living', 
        href: '/rooms/living-room', 
        image: 'https://images.unsplash.com/photo-1595514535316-2c5957badd7d?q=80&w=600&auto=format&fit=crop' 
      },
      { 
        label: 'Minimalist Storage', 
        href: '/rooms/living-room', 
        image: 'https://images.unsplash.com/photo-1495433324511-bf8e92934d90?q=80&w=600&auto=format&fit=crop' 
      },
    ]
  },
  { 
    label: 'Furniture Sets', 
    href: '/rooms/living-room',
    columns: [
      {
        links: [
          { label: 'Living Room Sets', href: '/rooms/living-room' },
          { label: 'Dining Sets', href: '/rooms/dining-room' },
          { label: 'Bedroom Sets', href: '/rooms/bedroom' },
        ]
      },
      {
        links: [
          { label: 'Outdoor Sets', href: '/rooms/outdoor' },
          { label: 'Office Sets', href: '/rooms/home-office' },
        ]
      }
    ],
    featured: [
      { 
        label: 'Curated Sets', 
        href: '/rooms/living-room', 
        image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=600&auto=format&fit=crop' 
      },
    ]
  },
  { 
    label: 'Outdoor', 
    href: '/rooms/outdoor',
    columns: [
      {
        links: [
          { label: 'Outdoor Sofas', href: '/rooms/outdoor' },
          { label: 'Outdoor Dining', href: '/rooms/outdoor' },
          { label: 'Outdoor Chairs', href: '/rooms/outdoor' },
        ]
      },
      {
        links: [
          { label: 'Fire Pits', href: '/rooms/outdoor' },
          { label: 'Umbrellas', href: '/rooms/outdoor' },
          { label: 'Planters', href: '/rooms/outdoor' },
        ]
      }
    ],
    featured: [
      { 
        label: 'Patio Paradise', 
        href: '/rooms/outdoor', 
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop' 
      },
    ]
  },
  { 
    label: 'Accessories', 
    href: '/rooms/decor',
    columns: [
      {
        links: [
          { label: 'Rugs', href: '/rooms/decor' },
          { label: 'Pillows', href: '/rooms/decor' },
          { label: 'Lighting', href: '/rooms/decor' },
        ]
      },
      {
        links: [
          { label: 'Mirrors', href: '/rooms/decor' },
          { label: 'Decor', href: '/rooms/decor' },
          { label: 'Textiles', href: '/rooms/decor' },
        ]
      }
    ],
    featured: [
      { 
        label: 'Soft Touches', 
        href: '/rooms/decor', 
        image: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=600&auto=format&fit=crop' 
      },
      { 
        label: 'Ambient Light', 
        href: '/rooms/decor', 
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop' 
      },
    ]
  },
  { 
    label: 'Tools', 
    href: '#',
    children: [
      { label: 'Assembly Tools', href: '#', description: 'Everything you need to build your furniture.' },
      { label: 'Care Kits', href: '#', description: 'Keep your furniture looking new.' },
      { label: 'Swatches', href: '#', description: 'Order fabric and leather samples.' },
    ]
  },
  { label: 'Sale', href: '/rooms/living-room', className: 'text-[#a54334] hover:text-[#8a382c]' },
];

export type ColorSwatch = {
  name: string;
  hex: string;
};

export type RoomProduct = {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  badge?: string;
  rating?: number;
  reviewCount?: number;
  colors?: ColorSwatch[];
  category?: string;
  material?: string;
  style?: string;
};

export type RoomData = {
  name: string;
  slug: string;
  image: string;
  hero: string;
  description: string;
  products: RoomProduct[];
};

export const ROOMS_DATA: RoomData[] = [
  {
    name: 'Living Room',
    slug: 'living-room',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=400&auto=format&fit=crop',
    hero: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1600&auto=format&fit=crop',
    description: 'Create a living room you love with our curated sofas, sectionals, coffee tables, and more.',
    products: [
      {
        id: 1, name: 'Sven Tufted Velvet Sofa – Pacific Green', price: 1299, originalPrice: 1599,
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600&auto=format&fit=crop',
        images: [
          'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=600&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=600&auto=format&fit=crop',
        ],
        badge: 'Best Seller', rating: 4.8, reviewCount: 312,
        colors: [{ name: 'Pacific Green', hex: '#5a7a6b' }, { name: 'Charme Tan', hex: '#c4a882' }, { name: 'Denim Blue', hex: '#4a6fa5' }, { name: 'Midnight Black', hex: '#1a1a1a' }],
        category: 'Sofas & Sectionals', material: 'Velvet', style: 'Mid-Century',
      },
      {
        id: 2, name: 'Lars 110" Modular Sectional – Charme Tan', price: 2199,
        image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=600&auto=format&fit=crop',
        images: [
          'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=600&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop',
        ],
        rating: 4.7, reviewCount: 188,
        colors: [{ name: 'Charme Tan', hex: '#c4a882' }, { name: 'Stone Grey', hex: '#9e9e9e' }, { name: 'Ivory', hex: '#f5f0e8' }],
        category: 'Sofas & Sectionals', material: 'Fabric', style: 'Scandinavian',
      },
      {
        id: 3, name: 'Ceni 66" Loveseat – Denim Blue', price: 899, originalPrice: 1099,
        image: 'https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=600&auto=format&fit=crop',
        images: [
          'https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=600&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=600&auto=format&fit=crop',
        ],
        badge: 'Sale', rating: 4.6, reviewCount: 95,
        colors: [{ name: 'Denim Blue', hex: '#4a6fa5' }, { name: 'Blush Pink', hex: '#e8b4b8' }, { name: 'Forest Green', hex: '#3d6b4f' }],
        category: 'Sofas & Sectionals', material: 'Fabric', style: 'Modern',
      },
      {
        id: 4, name: 'Timber Coffee Table – Walnut', price: 549,
        image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=600&auto=format&fit=crop',
        images: [
          'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=600&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1583209814683-c023dd293cc6?q=80&w=600&auto=format&fit=crop',
        ],
        rating: 4.9, reviewCount: 241,
        colors: [{ name: 'Walnut', hex: '#6b3d21' }, { name: 'White Oak', hex: '#d4b896' }, { name: 'Black Oak', hex: '#1a1a1a' }],
        category: 'Coffee Tables', material: 'Wood', style: 'Mid-Century',
      },
      {
        id: 5, name: 'Andes Armchair – Mezcal', price: 699,
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop',
        images: [
          'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=600&auto=format&fit=crop',
        ],
        badge: 'New', rating: 4.5, reviewCount: 67,
        colors: [{ name: 'Mezcal', hex: '#c4a882' }, { name: 'Cognac', hex: '#a0522d' }, { name: 'Slate', hex: '#708090' }],
        category: 'Chairs & Armchairs', material: 'Leather', style: 'Modern',
      },
      {
        id: 6, name: 'Nora Area Rug 8×10 – Ivory/Mocha', price: 449,
        image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=600&auto=format&fit=crop',
        images: [
          'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=600&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1583209814683-c023dd293cc6?q=80&w=600&auto=format&fit=crop',
        ],
        rating: 4.7, reviewCount: 143,
        colors: [{ name: 'Ivory/Mocha', hex: '#d4c4a8' }, { name: 'Charcoal/Cream', hex: '#888' }, { name: 'Sage/White', hex: '#a3b899' }],
        category: 'Rugs & Pillows', material: 'Wool', style: 'Bohemian',
      },
      {
        id: 7, name: 'Anton Bookshelf – Black Oak', price: 379,
        image: 'https://images.unsplash.com/photo-1583209814683-c023dd293cc6?q=80&w=600&auto=format&fit=crop',
        images: [
          'https://images.unsplash.com/photo-1583209814683-c023dd293cc6?q=80&w=600&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=600&auto=format&fit=crop',
        ],
        rating: 4.4, reviewCount: 55,
        colors: [{ name: 'Black Oak', hex: '#1a1a1a' }, { name: 'Walnut', hex: '#6b3d21' }, { name: 'White Oak', hex: '#d4b896' }],
        category: 'Storage', material: 'Wood', style: 'Industrial',
      },
      {
        id: 8, name: 'Deco Floor Lamp – Brass', price: 279,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
        images: [
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1583209814683-c023dd293cc6?q=80&w=600&auto=format&fit=crop',
        ],
        rating: 4.6, reviewCount: 89,
        colors: [{ name: 'Brass', hex: '#b5a642' }, { name: 'Matte Black', hex: '#222' }],
        category: 'Lighting', material: 'Metal', style: 'Industrial',
      },
      {
        id: 9, name: 'Haven Round Ottoman – Oatmeal', price: 399,
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600&auto=format&fit=crop',
        images: [
          'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=600&auto=format&fit=crop',
        ],
        rating: 4.5, reviewCount: 72,
        colors: [{ name: 'Oatmeal', hex: '#e8dcc8' }, { name: 'Charcoal', hex: '#4a4a4a' }, { name: 'Blush', hex: '#e8b4b8' }],
        category: 'Chairs & Armchairs', material: 'Fabric', style: 'Scandinavian',
      },
      {
        id: 10, name: 'Corda Side Table – Walnut/Brass', price: 319,
        image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=600&auto=format&fit=crop',
        images: [
          'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=600&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=600&auto=format&fit=crop',
        ],
        badge: 'New', rating: 4.8, reviewCount: 34,
        colors: [{ name: 'Walnut/Brass', hex: '#b5a642' }, { name: 'Black/Black', hex: '#1a1a1a' }],
        category: 'Coffee Tables', material: 'Wood', style: 'Mid-Century',
      },
      {
        id: 11, name: 'Slab Sofa – Cream Boucle', price: 1899,
        image: 'https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=600&auto=format&fit=crop',
        images: [
          'https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=600&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=600&auto=format&fit=crop',
        ],
        rating: 4.9, reviewCount: 207,
        colors: [{ name: 'Cream', hex: '#f5f0e8' }, { name: 'Ivory', hex: '#fffde7' }, { name: 'Taupe', hex: '#c4a882' }],
        category: 'Sofas & Sectionals', material: 'Boucle', style: 'Scandinavian',
      },
      {
        id: 12, name: 'Wyatt Accent Chair – Sage Green', price: 649, originalPrice: 849,
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop',
        images: [
          'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=600&auto=format&fit=crop',
        ],
        badge: 'Sale', rating: 4.3, reviewCount: 48,
        colors: [{ name: 'Sage Green', hex: '#a3b899' }, { name: 'Sand', hex: '#c4a882' }, { name: 'Terracotta', hex: '#c05c4b' }],
        category: 'Chairs & Armchairs', material: 'Fabric', style: 'Bohemian',
      },
      {
        id: 13, name: 'Luca Marble Coffee Table – White/Gold', price: 789,
        image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=600&auto=format&fit=crop',
        images: [
          'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=600&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=600&auto=format&fit=crop',
        ],
        rating: 4.7, reviewCount: 126,
        colors: [{ name: 'White/Gold', hex: '#d4af37' }, { name: 'Grey/Black', hex: '#555' }],
        category: 'Coffee Tables', material: 'Marble', style: 'Modern',
      },
      {
        id: 14, name: 'Finn TV Stand – White Oak', price: 599,
        image: 'https://images.unsplash.com/photo-1583209814683-c023dd293cc6?q=80&w=600&auto=format&fit=crop',
        images: [
          'https://images.unsplash.com/photo-1583209814683-c023dd293cc6?q=80&w=600&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=600&auto=format&fit=crop',
        ],
        rating: 4.6, reviewCount: 93,
        colors: [{ name: 'White Oak', hex: '#d4b896' }, { name: 'Walnut', hex: '#6b3d21' }],
        category: 'Storage', material: 'Wood', style: 'Scandinavian',
      },
      {
        id: 15, name: 'Reed Throw Pillow Set/2 – Terracotta', price: 79,
        image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=600&auto=format&fit=crop',
        images: [
          'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=600&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=600&auto=format&fit=crop',
        ],
        rating: 4.5, reviewCount: 315,
        colors: [{ name: 'Terracotta', hex: '#c05c4b' }, { name: 'Dusty Rose', hex: '#e8b4b8' }, { name: 'Sage', hex: '#a3b899' }, { name: 'Ivory', hex: '#f5f0e8' }],
        category: 'Rugs & Pillows', material: 'Linen', style: 'Bohemian',
      },
      {
        id: 16, name: 'Ames Pendant Light – Black/Walnut', price: 349,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
        images: [
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=600&auto=format&fit=crop',
        ],
        badge: 'Best Seller', rating: 4.8, reviewCount: 178,
        colors: [{ name: 'Black/Walnut', hex: '#1a1a1a' }, { name: 'Brass/Oak', hex: '#b5a642' }],
        category: 'Lighting', material: 'Metal', style: 'Industrial',
      },
    ],
  },
  {
    name: 'Outdoor',
    slug: 'outdoor',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400&auto=format&fit=crop',
    hero: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
    description: 'Bring comfort outside with weather-resistant sofas, dining sets, and lounge chairs.',
    products: [
      { id: 17, name: 'Caspian Outdoor Sofa – Weathered Grey', price: 1199, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop', images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600&auto=format&fit=crop'], badge: 'Best Seller', rating: 4.8, reviewCount: 142, colors: [{ name: 'Grey', hex: '#9e9e9e' }, { name: 'Charcoal', hex: '#4a4a4a' }], category: 'Sofas & Sectionals', material: 'Fabric', style: 'Modern' },
      { id: 18, name: 'Maui Outdoor Dining Table – Teak', price: 799, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600&auto=format&fit=crop', images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=600&auto=format&fit=crop'], rating: 4.7, reviewCount: 88, colors: [{ name: 'Teak', hex: '#8b5e3c' }], category: 'Dining Tables', material: 'Teak', style: 'Scandinavian' },
      { id: 19, name: 'Haven Lounge Chair – Stone', price: 499, originalPrice: 699, image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=600&auto=format&fit=crop', images: ['https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop'], badge: 'Sale', rating: 4.5, reviewCount: 63, colors: [{ name: 'Stone', hex: '#a0a0a0' }, { name: 'Slate', hex: '#708090' }], category: 'Chairs & Armchairs', material: 'Fabric', style: 'Modern' },
      { id: 20, name: 'Palma Sectional – Slate', price: 1899, image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=600&auto=format&fit=crop', images: ['https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600&auto=format&fit=crop'], badge: 'New', rating: 4.6, reviewCount: 29, colors: [{ name: 'Slate', hex: '#708090' }, { name: 'Cream', hex: '#f5f0e8' }], category: 'Sofas & Sectionals', material: 'Fabric', style: 'Modern' },
      { id: 21, name: 'Side Table – Powder Coated Black', price: 149, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop', images: ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=600&auto=format&fit=crop'], rating: 4.4, reviewCount: 55, colors: [{ name: 'Black', hex: '#1a1a1a' }, { name: 'White', hex: '#f5f5f5' }], category: 'Coffee Tables', material: 'Metal', style: 'Industrial' },
      { id: 22, name: 'Outdoor Throw Pillow Set – Terracotta', price: 89, image: 'https://images.unsplash.com/photo-1583209814683-c023dd293cc6?q=80&w=600&auto=format&fit=crop', images: ['https://images.unsplash.com/photo-1583209814683-c023dd293cc6?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=600&auto=format&fit=crop'], rating: 4.7, reviewCount: 204, colors: [{ name: 'Terracotta', hex: '#c05c4b' }, { name: 'Sage', hex: '#a3b899' }, { name: 'Ivory', hex: '#f5f0e8' }], category: 'Rugs & Pillows', material: 'Fabric', style: 'Bohemian' },
      { id: 23, name: 'Bistro Dining Set – 4 Chairs', price: 999, image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=600&auto=format&fit=crop', images: ['https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600&auto=format&fit=crop'], rating: 4.5, reviewCount: 71, colors: [{ name: 'Navy', hex: '#1a2a5a' }, { name: 'Black', hex: '#1a1a1a' }], category: 'Dining Tables', material: 'Metal', style: 'Industrial' },
      { id: 24, name: 'Market Umbrella – Sand', price: 349, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop', images: ['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1583209814683-c023dd293cc6?q=80&w=600&auto=format&fit=crop'], rating: 4.3, reviewCount: 38, colors: [{ name: 'Sand', hex: '#c4a882' }, { name: 'Forest', hex: '#3d6b4f' }], category: 'Storage', material: 'Fabric', style: 'Scandinavian' },
    ],
  },
  {
    name: 'Bedroom',
    slug: 'bedroom',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=400&auto=format&fit=crop',
    hero: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=1600&auto=format&fit=crop',
    description: "Design a bedroom sanctuary with beds, dressers, nightstands and bedding you'll love.",
    products: [
      { id: 25, name: 'Bria Upholstered Platform Bed – Queen', price: 999, image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=600&auto=format&fit=crop', images: ['https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=600&auto=format&fit=crop'], badge: 'Best Seller', rating: 4.9, reviewCount: 312, colors: [{ name: 'Ivory', hex: '#f5f0e8' }, { name: 'Charcoal', hex: '#4a4a4a' }, { name: 'Blush', hex: '#e8b4b8' }], category: 'Beds & Headboards', material: 'Fabric', style: 'Modern' },
      { id: 26, name: 'Lenia 6-Drawer Double Dresser – Walnut', price: 849, image: 'https://images.unsplash.com/photo-1595514535316-2c5957badd7d?q=80&w=600&auto=format&fit=crop', images: ['https://images.unsplash.com/photo-1595514535316-2c5957badd7d?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1583209814683-c023dd293cc6?q=80&w=600&auto=format&fit=crop'], rating: 4.7, reviewCount: 188, colors: [{ name: 'Walnut', hex: '#6b3d21' }, { name: 'White Oak', hex: '#d4b896' }], category: 'Dressers & Storage', material: 'Wood', style: 'Mid-Century' },
      { id: 27, name: 'Reed Nightstand – White Oak', price: 299, originalPrice: 399, image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=600&auto=format&fit=crop', images: ['https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=600&auto=format&fit=crop'], badge: 'Sale', rating: 4.6, reviewCount: 95, colors: [{ name: 'White Oak', hex: '#d4b896' }, { name: 'Walnut', hex: '#6b3d21' }], category: 'Dressers & Storage', material: 'Wood', style: 'Scandinavian' },
      { id: 28, name: 'Soma King Bed Frame – Dark Walnut', price: 1199, image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=600&auto=format&fit=crop', images: ['https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1583209814683-c023dd293cc6?q=80&w=600&auto=format&fit=crop'], badge: 'New', rating: 4.8, reviewCount: 67, colors: [{ name: 'Dark Walnut', hex: '#3d2b1f' }, { name: 'Light Oak', hex: '#d4b896' }], category: 'Beds & Headboards', material: 'Wood', style: 'Mid-Century' },
      { id: 29, name: 'Cotton Duvet Set – Warm White', price: 189, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop', images: ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=600&auto=format&fit=crop'], rating: 4.5, reviewCount: 204, colors: [{ name: 'Warm White', hex: '#f5f0e8' }, { name: 'Stone', hex: '#9e9e9e' }, { name: 'Navy', hex: '#1a2a5a' }], category: 'Rugs & Pillows', material: 'Cotton', style: 'Scandinavian' },
      { id: 30, name: 'Ames Reading Chair – Blush', price: 549, image: 'https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=600&auto=format&fit=crop', images: ['https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop'], rating: 4.4, reviewCount: 48, colors: [{ name: 'Blush', hex: '#e8b4b8' }, { name: 'Sage', hex: '#a3b899' }], category: 'Chairs & Armchairs', material: 'Fabric', style: 'Modern' },
      { id: 31, name: 'Corda Pendant Light – Brass', price: 229, image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=600&auto=format&fit=crop', images: ['https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop'], rating: 4.7, reviewCount: 89, colors: [{ name: 'Brass', hex: '#b5a642' }, { name: 'Matte Black', hex: '#222' }], category: 'Lighting', material: 'Metal', style: 'Industrial' },
      { id: 32, name: 'Mirka Wall Mirror – Arched', price: 319, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop', images: ['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=600&auto=format&fit=crop'], rating: 4.6, reviewCount: 132, colors: [{ name: 'Gold', hex: '#d4af37' }, { name: 'Black', hex: '#1a1a1a' }, { name: 'Walnut', hex: '#6b3d21' }], category: 'Lighting', material: 'Metal', style: 'Modern' },
    ],
  },
  {
    name: 'Dining Room & Kitchen',
    slug: 'dining-room',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=400&auto=format&fit=crop',
    hero: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1600&auto=format&fit=crop',
    description: 'Set a table worth gathering around with dining tables, chairs, benches and storage.',
    products: [
      { id: 33, name: 'Slab 82" Dining Table – White Oak', price: 1099, image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=600&auto=format&fit=crop', images: ['https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=600&auto=format&fit=crop'], badge: 'Best Seller', rating: 4.8, reviewCount: 201, colors: [{ name: 'White Oak', hex: '#d4b896' }, { name: 'Walnut', hex: '#6b3d21' }], category: 'Dining Tables', material: 'Wood', style: 'Scandinavian' },
      { id: 34, name: 'Lucia Washable Dining Chair – Black Set/2', price: 449, image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=600&auto=format&fit=crop', images: ['https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=600&auto=format&fit=crop'], rating: 4.7, reviewCount: 315, colors: [{ name: 'Black', hex: '#1a1a1a' }, { name: 'White', hex: '#f5f5f5' }, { name: 'Dusty Blue', hex: '#7aadba' }], category: 'Chairs & Armchairs', material: 'Fabric', style: 'Modern' },
      { id: 35, name: 'Aden Bench – Natural Linen', price: 349, originalPrice: 449, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600&auto=format&fit=crop', images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop'], badge: 'Sale', rating: 4.5, reviewCount: 67, colors: [{ name: 'Natural', hex: '#d4b896' }, { name: 'Charcoal', hex: '#4a4a4a' }], category: 'Chairs & Armchairs', material: 'Linen', style: 'Scandinavian' },
      { id: 36, name: 'Mira Sideboard – Smoked Oak', price: 899, image: 'https://images.unsplash.com/photo-1495433324511-bf8e92934d90?q=80&w=600&auto=format&fit=crop', images: ['https://images.unsplash.com/photo-1495433324511-bf8e92934d90?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1583209814683-c023dd293cc6?q=80&w=600&auto=format&fit=crop'], badge: 'New', rating: 4.6, reviewCount: 38, colors: [{ name: 'Smoked Oak', hex: '#6b5a49' }, { name: 'White', hex: '#f5f5f5' }], category: 'Dressers & Storage', material: 'Wood', style: 'Mid-Century' },
      { id: 37, name: 'Counter Stool Set/2 – Brass/Caramel', price: 399, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop', images: ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=600&auto=format&fit=crop'], rating: 4.7, reviewCount: 159, colors: [{ name: 'Caramel/Brass', hex: '#b5a642' }, { name: 'Black/Chrome', hex: '#555' }], category: 'Chairs & Armchairs', material: 'Leather', style: 'Industrial' },
      { id: 38, name: 'Pendant Cluster Light – Matte Black', price: 279, image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=600&auto=format&fit=crop', images: ['https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop'], rating: 4.8, reviewCount: 88, colors: [{ name: 'Matte Black', hex: '#222' }, { name: 'Brass', hex: '#b5a642' }], category: 'Lighting', material: 'Metal', style: 'Industrial' },
      { id: 39, name: 'Finn Round Table – 48"', price: 749, image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=600&auto=format&fit=crop', images: ['https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=600&auto=format&fit=crop'], rating: 4.6, reviewCount: 112, colors: [{ name: 'Walnut', hex: '#6b3d21' }, { name: 'White', hex: '#f5f5f5' }], category: 'Dining Tables', material: 'Wood', style: 'Mid-Century' },
      { id: 40, name: 'Linen Napkin Set/4 – Warm Oat', price: 49, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop', images: ['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=600&auto=format&fit=crop'], rating: 4.4, reviewCount: 275, colors: [{ name: 'Warm Oat', hex: '#e8dcc8' }, { name: 'Sage', hex: '#a3b899' }, { name: 'Navy', hex: '#1a2a5a' }], category: 'Rugs & Pillows', material: 'Linen', style: 'Scandinavian' },
    ],
  },
  {
    name: 'Home Office',
    slug: 'home-office',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=400&auto=format&fit=crop',
    hero: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop',
    description: 'Work better, think clearer. Desks, chairs, shelving and storage for the perfect home office.',
    products: [
      { id: 41, name: 'Lewis 60" Writing Desk – Walnut', price: 799, image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=600&auto=format&fit=crop', images: ['https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1583209814683-c023dd293cc6?q=80&w=600&auto=format&fit=crop'], badge: 'Best Seller', rating: 4.8, reviewCount: 143, colors: [{ name: 'Walnut', hex: '#6b3d21' }, { name: 'Black', hex: '#1a1a1a' }, { name: 'White Oak', hex: '#d4b896' }], category: 'Dressers & Storage', material: 'Wood', style: 'Mid-Century' },
      { id: 42, name: 'Boden Task Chair – Cognac Leather', price: 649, image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=600&auto=format&fit=crop', images: ['https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop'], rating: 4.7, reviewCount: 96, colors: [{ name: 'Cognac', hex: '#a0522d' }, { name: 'Black', hex: '#1a1a1a' }], category: 'Chairs & Armchairs', material: 'Leather', style: 'Industrial' },
      { id: 43, name: 'Keaton Bookcase – White/Oak', price: 499, originalPrice: 649, image: 'https://images.unsplash.com/photo-1583209814683-c023dd293cc6?q=80&w=600&auto=format&fit=crop', images: ['https://images.unsplash.com/photo-1583209814683-c023dd293cc6?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=600&auto=format&fit=crop'], badge: 'Sale', rating: 4.6, reviewCount: 78, colors: [{ name: 'White/Oak', hex: '#d4b896' }, { name: 'Black', hex: '#1a1a1a' }], category: 'Dressers & Storage', material: 'Wood', style: 'Scandinavian' },
      { id: 44, name: 'Mabel Corner Desk – Black Oak', price: 999, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop', images: ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=600&auto=format&fit=crop'], badge: 'New', rating: 4.5, reviewCount: 32, colors: [{ name: 'Black Oak', hex: '#1a1a1a' }, { name: 'Walnut', hex: '#6b3d21' }], category: 'Dressers & Storage', material: 'Wood', style: 'Modern' },
      { id: 45, name: 'Monitor Riser – Bamboo', price: 89, image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=600&auto=format&fit=crop', images: ['https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1583209814683-c023dd293cc6?q=80&w=600&auto=format&fit=crop'], rating: 4.4, reviewCount: 188, colors: [{ name: 'Natural', hex: '#c4a882' }], category: 'Dressers & Storage', material: 'Bamboo', style: 'Scandinavian' },
      { id: 46, name: 'Desk Lamp – Matte Black', price: 149, image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=600&auto=format&fit=crop', images: ['https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop'], rating: 4.7, reviewCount: 234, colors: [{ name: 'Matte Black', hex: '#222' }, { name: 'Brass', hex: '#b5a642' }, { name: 'White', hex: '#f5f5f5' }], category: 'Lighting', material: 'Metal', style: 'Industrial' },
      { id: 47, name: 'Cable Management Box – White', price: 49, image: 'https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=600&auto=format&fit=crop', images: ['https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=600&auto=format&fit=crop'], rating: 4.3, reviewCount: 412, colors: [{ name: 'White', hex: '#f5f5f5' }, { name: 'Black', hex: '#1a1a1a' }], category: 'Dressers & Storage', material: 'Plastic', style: 'Modern' },
      { id: 48, name: 'File Cabinet 2-Drawer – Charcoal', price: 299, image: 'https://images.unsplash.com/photo-1595514535316-2c5957badd7d?q=80&w=600&auto=format&fit=crop', images: ['https://images.unsplash.com/photo-1595514535316-2c5957badd7d?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1583209814683-c023dd293cc6?q=80&w=600&auto=format&fit=crop'], rating: 4.5, reviewCount: 67, colors: [{ name: 'Charcoal', hex: '#4a4a4a' }, { name: 'White', hex: '#f5f5f5' }], category: 'Dressers & Storage', material: 'Metal', style: 'Industrial' },
    ],
  },
  {
    name: 'Decor',
    slug: 'decor',
    image: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=400&auto=format&fit=crop',
    hero: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=1600&auto=format&fit=crop',
    description: 'The finishing touches that make a house a home — art, lighting, vases, pillows and more.',
    products: [
      { id: 49, name: 'Linen Throw Pillow – Terracotta', price: 59, image: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=600&auto=format&fit=crop', images: ['https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=600&auto=format&fit=crop'], badge: 'Best Seller', rating: 4.8, reviewCount: 512, colors: [{ name: 'Terracotta', hex: '#c05c4b' }, { name: 'Sage', hex: '#a3b899' }, { name: 'Ivory', hex: '#f5f0e8' }, { name: 'Navy', hex: '#1a2a5a' }], category: 'Rugs & Pillows', material: 'Linen', style: 'Bohemian' },
      { id: 50, name: 'Ceramic Vase Set/3 – Cream', price: 99, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop', images: ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=600&auto=format&fit=crop'], rating: 4.7, reviewCount: 188, colors: [{ name: 'Cream', hex: '#f5f0e8' }, { name: 'Black', hex: '#1a1a1a' }], category: 'Storage', material: 'Ceramic', style: 'Modern' },
      { id: 51, name: 'Abstract Canvas Print – 30×40"', price: 199, originalPrice: 249, image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=600&auto=format&fit=crop', images: ['https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop'], badge: 'Sale', rating: 4.5, reviewCount: 67, colors: [{ name: 'Warm', hex: '#c4a882' }, { name: 'Cool', hex: '#4a6fa5' }], category: 'Lighting', material: 'Canvas', style: 'Modern' },
      { id: 52, name: 'Arch Mirror – Antique Gold', price: 279, image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=600&auto=format&fit=crop', images: ['https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=600&auto=format&fit=crop'], badge: 'New', rating: 4.6, reviewCount: 93, colors: [{ name: 'Gold', hex: '#d4af37' }, { name: 'Black', hex: '#1a1a1a' }, { name: 'Silver', hex: '#c0c0c0' }], category: 'Lighting', material: 'Metal', style: 'Modern' },
      { id: 53, name: 'Woven Basket Set/2 – Natural', price: 79, image: 'https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=600&auto=format&fit=crop', images: ['https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop'], rating: 4.5, reviewCount: 204, colors: [{ name: 'Natural', hex: '#c4a882' }, { name: 'Black', hex: '#1a1a1a' }], category: 'Storage', material: 'Rattan', style: 'Bohemian' },
      { id: 54, name: 'Travertine Candle Holder – Small', price: 45, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop', images: ['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1595514535316-2c5957badd7d?q=80&w=600&auto=format&fit=crop'], rating: 4.7, reviewCount: 316, colors: [{ name: 'Travertine', hex: '#d4c4a8' }, { name: 'Black Marble', hex: '#333' }], category: 'Storage', material: 'Stone', style: 'Modern' },
      { id: 55, name: 'Macramé Wall Hanging – Ivory', price: 89, image: 'https://images.unsplash.com/photo-1595514535316-2c5957badd7d?q=80&w=600&auto=format&fit=crop', images: ['https://images.unsplash.com/photo-1595514535316-2c5957badd7d?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1583209814683-c023dd293cc6?q=80&w=600&auto=format&fit=crop'], rating: 4.4, reviewCount: 78, colors: [{ name: 'Ivory', hex: '#f5f0e8' }, { name: 'Natural', hex: '#c4a882' }], category: 'Rugs & Pillows', material: 'Cotton', style: 'Bohemian' },
      { id: 56, name: 'Dried Pampas Grass Bouquet', price: 39, image: 'https://images.unsplash.com/photo-1583209814683-c023dd293cc6?q=80&w=600&auto=format&fit=crop', images: ['https://images.unsplash.com/photo-1583209814683-c023dd293cc6?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=600&auto=format&fit=crop'], rating: 4.6, reviewCount: 428, colors: [{ name: 'Natural', hex: '#d4c4a8' }, { name: 'Blush', hex: '#e8b4b8' }], category: 'Storage', material: 'Dried Grass', style: 'Bohemian' },
    ],
  },
];

export const TOP_SELLERS_DATA = [
  { 
    id: 1,
    name: 'Sven Yt... Tufted Velvet Sofa - Plush Pacific/Green', 
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=400&auto=format&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=600&auto=format&fit=crop'],
    link: '/product/1-sven-tufted-velvet-sofa' 
  },
  { 
    id: 34,
    name: 'Lucia Washable Dining Chair - Black', 
    image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=400&auto=format&fit=crop',
    images: ['https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=600&auto=format&fit=crop'],
    link: '/product/34-lucia-washable-dining-chair' 
  },
  { 
    id: 2,
    name: 'Timber 90" Leather Sofa - Charme Tan', 
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=400&auto=format&fit=crop',
    images: ['https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600&auto=format&fit=crop'],
    link: '/product/2-timber-90-leather-sofa' 
  },
  { 
    id: 25,
    name: 'Bria Upholstered Bed Frame - Queen', 
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=400&auto=format&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=600&auto=format&fit=crop'],
    link: '/product/25-bria-upholstered-bed-frame' 
  },
  { 
    id: 3,
    name: 'Ceni 66" Loveseat - Denim Blue', 
    image: 'https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=400&auto=format&fit=crop',
    images: ['https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=600&auto=format&fit=crop'],
    link: '/product/3-ceni-66-loveseat' 
  },
  { 
    id: 26,
    name: 'Lenia 6-Drawer Double Dresser - Walnut', 
    image: 'https://images.unsplash.com/photo-1595514535316-2c5957badd7d?q=80&w=400&auto=format&fit=crop',
    images: ['https://images.unsplash.com/photo-1595514535316-2c5957badd7d?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1583209814683-c023dd293cc6?q=80&w=600&auto=format&fit=crop'],
    link: '/product/26-lenia-6-drawer-double-dresser' 
  },
];

export const SOCIAL_PROOF_POSTS = [
  { img: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=600&auto=format&fit=crop', user: 'Photo by @jessicahal', link: '#' },
  { img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=600&auto=format&fit=crop', user: 'Photo by @smithmodernhomes', link: '#' },
  { img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=600&auto=format&fit=crop', user: 'Photo by @rileyinterior', link: '#' },
];

export const FOOTER_LINKS = {
  Help: [
    { label: 'Help Center', href: '#' },
    { label: 'Shipping', href: '#' },
    { label: 'Returns', href: '#' },
    { label: 'Product Recalls', href: '#' },
    { label: 'Corporate Responsibility', href: '#' },
    { label: 'Contact Us', href: '#' },
  ],
  Explore: [
    { label: 'Ideas & Inspiration', href: '#' },
    { label: 'Gift Cards', href: '#' },
    { label: 'Financing', href: '#' },
    { label: 'About Us', href: '#' },
    { label: 'Reviews', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
  ],
  Account: [
    { label: 'Login / Register', href: '#' },
    { label: 'My Favorites', href: '#' },
  ],
  Professionals: [
    { label: 'Idasher Pro', href: '#' },
    { label: 'Content Studio', href: '#' },
    { label: 'Industries We Serve', href: '#' },
  ]
};
