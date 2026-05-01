import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';

export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Shop Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Shop Collection</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Browse our premium selection of shirts and hoodies crafted with attention to detail.
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex justify-center gap-4 mb-8">
        <button className="px-6 py-2 bg-green-600 text-white rounded-md font-medium">
          All Products
        </button>
        <button className="px-6 py-2 bg-white text-gray-700 border border-gray-300 rounded-md font-medium hover:bg-gray-50">
          Shirts
        </button>
        <button className="px-6 py-2 bg-white text-gray-700 border border-gray-300 rounded-md font-medium hover:bg-gray-50">
          Hoodies
        </button>
        <button className="px-6 py-2 bg-white text-gray-700 border border-gray-300 rounded-md font-medium hover:bg-gray-50">
          New Arrivals
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-12">
        <button className="px-8 py-3 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition-colors">
          Load More Products
        </button>
      </div>
    </div>
  );
}