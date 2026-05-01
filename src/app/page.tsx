import Link from 'next/link';
import Image from 'next/image';
import ProductCard from '@/components/ProductCard';
import { getFeaturedProducts, getNewArrivals } from '@/lib/products';

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  const newArrivals = getNewArrivals();

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Abd Rehem
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-green-100">
                Premium quality clothing for the modern lifestyle
              </p>
              <p className="text-lg mb-8 text-green-100">
                Discover our collection of premium shirts and hoodies crafted with attention to detail and quality.
              </p>
              <div className="flex gap-4">
                <Link href="/shop">
                  <button className="bg-white text-green-600 px-8 py-3 font-bold rounded-md hover:bg-green-50 transition-colors">
                    Shop Collection
                  </button>
                </Link>
                <Link href="/about">
                  <button className="border-2 border-white text-white px-8 py-3 font-bold rounded-md hover:bg-white hover:text-green-600 transition-colors">
                    About Us
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-white/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-green-600 font-bold text-4xl">AR</span>
                  </div>
                  <p className="text-green-100">Brand Logo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our most popular items that embody the Abd Rehem quality and style.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/shop">
              <button className="bg-green-600 text-white px-8 py-3 font-bold rounded-md hover:bg-green-700 transition-colors">
                View All Products
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      {newArrivals.length > 0 && (
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">New Arrivals</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Just in! Check out our latest collection of premium clothing.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {newArrivals.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link href="/shop/new-arrivals">
                <button className="bg-green-600 text-white px-8 py-3 font-bold rounded-md hover:bg-green-700 transition-colors">
                  See All New Arrivals
                </button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Abd Rehem?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">High-quality materials and craftsmanship in every piece.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
              <p className="text-gray-600">Quick and reliable delivery to your doorstep.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
              <p className="text-gray-600">30-day return policy for your peace of mind.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
