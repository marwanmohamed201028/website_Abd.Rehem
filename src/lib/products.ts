export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  category: 'shirt' | 'hoodie';
  sizes: string[];
  colors: string[];
  images: string[];
  featured: boolean;
  newArrival: boolean;
  salePrice?: number;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic T-Shirt',
    slug: 'classic-tshirt',
    description: 'Premium quality cotton t-shirt with comfortable fit and durable fabric. Perfect for everyday wear.',
    price: 29.99,
    category: 'shirt',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['green', 'white'],
    images: ['/images/products/tshirt-green.jpg', '/images/products/tshirt-white.jpg'],
    featured: true,
    newArrival: true
  },
  {
    id: '2',
    name: 'Logo Tee',
    slug: 'logo-tee',
    description: 'Brand logo tee with premium cotton blend. Show your Abd Rehem pride.',
    price: 34.99,
    category: 'shirt',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['green', 'white'],
    images: ['/images/products/logo-tee-green.jpg', '/images/products/logo-tee-white.jpg'],
    featured: true,
    newArrival: true
  },
  {
    id: '3',
    name: 'Pullover Hoodie',
    slug: 'pullover-hoodie',
    description: 'Comfortable pullover hoodie with soft fleece lining. Perfect for cooler weather.',
    price: 59.99,
    category: 'hoodie',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['green', 'white'],
    images: ['/images/products/hoodie-green.jpg', '/images/products/hoodie-white.jpg'],
    featured: true,
    newArrival: false
  },
  {
    id: '4',
    name: 'Zip-up Hoodie',
    slug: 'zip-up-hoodie',
    description: 'Modern zip-up hoodie with functional pockets and adjustable hood.',
    price: 69.99,
    category: 'hoodie',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['green', 'white'],
    images: ['/images/products/zip-hoodie-green.jpg', '/images/products/zip-hoodie-white.jpg'],
    featured: true,
    newArrival: true,
    salePrice: 54.99
  },
  {
    id: '5',
    name: 'V-Neck Shirt',
    slug: 'v-neck-shirt',
    description: 'Stylish v-neck shirt made from premium cotton blend. Great for casual and smart-casual occasions.',
    price: 39.99,
    category: 'shirt',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['green', 'white'],
    images: ['/images/products/vneck-green.jpg', '/images/products/vneck-white.jpg'],
    featured: false,
    newArrival: true
  },
  {
    id: '6',
    name: 'Classic Hoodie',
    slug: 'classic-hoodie',
    description: 'Timeless classic hoodie with ribbed cuffs and hem. Built to last.',
    price: 54.99,
    category: 'hoodie',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['green', 'white'],
    images: ['/images/products/classic-hoodie-green.jpg', '/images/products/classic-hoodie-white.jpg'],
    featured: false,
    newArrival: false
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export function getProductsByCategory(category: 'shirt' | 'hoodie'): Product[] {
  return products.filter(product => product.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured);
}

export function getNewArrivals(): Product[] {
  return products.filter(product => product.newArrival);
}