'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/components/CartContext';
import Button from './Button';

export default function CartDrawer() {
  const { state, dispatch } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const handleRemoveItem = (productId: string, size: string, color: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { productId, size, color } });
  };

  const handleUpdateQuantity = (productId: string, size: string, color: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, size, color, quantity } });
  };

  const handleClearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <>
      {/* Cart Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="relative p-2 text-gray-600 hover:text-green-600 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {state.itemCount}
        </span>
      </button>

      {/* Cart Drawer */}
      <div
        className={`fixed inset-0 z-50 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={() => setIsOpen(false)}
        />

        {/* Cart Panel */}
        <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-bold">Shopping Cart</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-md"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {state.items.length === 0 ? (
                <div className="text-center py-12">
                  <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <p className="text-gray-500">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {state.items.map((item) => {
                    const price = item.product.salePrice || item.product.price;
                    return (
                      <div key={`${item.product.id}-${item.size}-${item.color}`} className="flex gap-4 p-4 border rounded-lg">
                        <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-md">
                          <Image
                            src={item.product.images[0] || '/images/placeholder-product.jpg'}
                            alt={item.product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="font-medium">{item.product.name}</h3>
                          <p className="text-sm text-gray-500">
                            Size: {item.size} | Color: {item.color}
                          </p>
                          <p className="font-bold text-green-600">
                            ${price.toFixed(2)}
                          </p>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleUpdateQuantity(item.product.id, item.size, item.color, item.quantity - 1)}
                            className="w-8 h-8 border border-gray-300 rounded hover:border-green-600"
                          >
                            -
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => handleUpdateQuantity(item.product.id, item.size, item.color, item.quantity + 1)}
                            className="w-8 h-8 border border-gray-300 rounded hover:border-green-600"
                          >
                            +
                          </button>
                          <button
                            onClick={() => handleRemoveItem(item.product.id, item.size, item.color)}
                            className="ml-2 text-red-500 hover:text-red-700"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Cart Footer */}
            <div className="border-t p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-2xl font-bold text-green-600">
                  ${state.total.toFixed(2)}
                </span>
              </div>
              
              <div className="space-y-3">
                <Link href="/checkout">
                  <Button
                    onClick={() => setIsOpen(false)}
                    className="w-full"
                  >
                    Proceed to Checkout
                  </Button>
                </Link>
                
                <Button
                  variant="secondary"
                  onClick={handleClearCart}
                  className="w-full"
                  disabled={state.items.length === 0}
                >
                  Clear Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}