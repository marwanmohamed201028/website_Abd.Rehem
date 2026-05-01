'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const hasSale = product.salePrice && product.salePrice < product.price;
  const discountPercentage = hasSale 
    ? Math.round(((product.price - product.salePrice) / product.price) * 100)
    : 0;

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.images[0] || '/images/placeholder-product.jpg'}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Sale Badge */}
        {hasSale && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-bold">
            -{discountPercentage}%
          </div>
        )}
        
        {/* New Arrival Badge */}
        {product.newArrival && (
          <div className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 rounded-md text-xs font-bold">
            New
          </div>
        )}
        
        {/* Quick View Button */}
        <button className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <span className="text-white font-medium">Quick View</span>
        </button>
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <div className="mb-2">
          <span className="text-sm text-gray-500 uppercase tracking-wide">
            {product.category}
          </span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          <Link href={`/product/${product.slug}`} className="hover:text-green-600 transition-colors">
            {product.name}
          </Link>
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        {/* Colors */}
        <div className="flex items-center gap-2 mb-3">
          {product.colors.map((color) => (
            <div
              key={color}
              className={`w-4 h-4 rounded-full border ${
                color === 'green' ? 'bg-green-600' : 'bg-white border-gray-300'
              }`}
              title={color}
            />
          ))}
        </div>
        
        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          {hasSale ? (
            <>
              <span className="text-lg font-bold text-green-600">
                ${product.salePrice!.toFixed(2)}
              </span>
              <span className="text-sm text-gray-500 line-through">
                ${product.price.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="text-lg font-bold text-green-600">
              ${product.price.toFixed(2)}
            </span>
          )}
        </div>
        
        {/* View Details Button */}
        <Link href={`/product/${product.slug}`}>
          <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-200 font-medium">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}