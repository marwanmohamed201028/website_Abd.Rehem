import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import { getProductBySlug } from '@/lib/products';

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = getProductBySlug(params.id);
  
  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <Link href="/" className="text-gray-600 hover:text-green-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/shop" className="text-gray-600 hover:text-green-600">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 font-medium">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg">
            <Image
              src={product.images[0] || '/images/placeholder-product.jpg'}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          
          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-md cursor-pointer">
                <Image
                  src={image || '/images/placeholder-product.jpg'}
                  alt={`${product.name} ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <span className="text-sm text-gray-500 uppercase tracking-wide">
              {product.category}
            </span>
            <h1 className="text-3xl font-bold mt-2">{product.name}</h1>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-green-600">
              ${product.price.toFixed(2)}
            </span>
            {product.salePrice && (
              <>
                <span className="text-lg text-gray-500 line-through">
                  ${product.price.toFixed(2)}
                </span>
                <span className="bg-red-100 text-red-600 px-2 py-1 rounded-md text-sm font-medium">
                  Save ${(product.price - product.salePrice).toFixed(2)}
                </span>
              </>
            )}
          </div>

          <p className="text-gray-600 leading-relaxed">
            {product.description}
          </p>

          {/* Size Selection */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Size</h3>
            <div className="flex gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className="w-12 h-12 border border-gray-300 rounded-md hover:border-green-600 transition-colors"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Color</h3>
            <div className="flex gap-3">
              {product.colors.map((color) => (
                <button
                  key={color}
                  className={`w-8 h-8 rounded-full border-2 ${
                    color === 'green' ? 'bg-green-600' : 'bg-white'
                  }`}
                  title={color}
                />
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quantity</h3>
            <div className="flex items-center gap-3">
              <button className="w-10 h-10 border border-gray-300 rounded-md hover:border-green-600 transition-colors">
                -
              </button>
              <span className="font-medium">1</span>
              <button className="w-10 h-10 border border-gray-300 rounded-md hover:border-green-600 transition-colors">
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button className="flex-1">
              Add to Cart
            </Button>
            <Button variant="secondary" className="flex-1">
              Buy Now
            </Button>
          </div>

          {/* Product Info */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-3">Product Details</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Premium quality materials</li>
              <li>• Comfortable fit for everyday wear</li>
              <li>• Durable construction</li>
              <li>• Easy care instructions</li>
              <li>• Available in multiple sizes and colors</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}