'use client';

import Link from 'next/link';
import Button from './Button';
import CartDrawer from './CartDrawer';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">AR</span>
            </div>
            <span className="text-2xl font-bold text-green-600">Abd Rehem</span>
          </Link>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/shop" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Shop
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Contact
            </Link>
          </nav>
          
          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <CartDrawer />
            
            {/* Shop Button */}
            <Link href="/shop">
              <Button variant="primary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Shop
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}