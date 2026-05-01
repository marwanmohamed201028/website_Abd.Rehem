'use client';

import { createContext, useContext, useReducer, ReactNode } from 'react';

interface CartItem {
  product: {
    id: string;
    name: string;
    price: number;
    salePrice?: number;
    images: string[];
  };
  size: string;
  color: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

type CartAction =
  | { type: 'ADD_TO_CART'; payload: Omit<CartItem, 'quantity'> & { quantity?: number } }
  | { type: 'REMOVE_FROM_CART'; payload: { productId: string; size: string; color: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: string; size: string; color: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: CartItem[] };

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | null>(null);

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { product, size, color, quantity = 1 } = action.payload;
      const existingItemIndex = state.items.findIndex(
        item => item.product.id === product.id && item.size === size && item.color === color
      );

      let newItems: CartItem[];
      if (existingItemIndex >= 0) {
        newItems = [...state.items];
        newItems[existingItemIndex].quantity += quantity;
      } else {
        newItems = [...state.items, { product, size, color, quantity }];
      }

      const total = newItems.reduce((sum, item) => {
        const price = item.product.salePrice || item.product.price;
        return sum + price * item.quantity;
      }, 0);

      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);

      return { items: newItems, total, itemCount };
    }

    case 'REMOVE_FROM_CART': {
      const { productId, size, color } = action.payload;
      const newItems = state.items.filter(
        item => !(item.product.id === productId && item.size === size && item.color === color)
      );

      const total = newItems.reduce((sum, item) => {
        const price = item.product.salePrice || item.product.price;
        return sum + price * item.quantity;
      }, 0);

      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);

      return { items: newItems, total, itemCount };
    }

    case 'UPDATE_QUANTITY': {
      const { productId, size, color, quantity } = action.payload;
      
      if (quantity <= 0) {
        return cartReducer(state, { type: 'REMOVE_FROM_CART', payload: { productId, size, color } });
      }

      const newItems = state.items.map(item =>
        item.product.id === productId && item.size === size && item.color === color
          ? { ...item, quantity }
          : item
      );

      const total = newItems.reduce((sum, item) => {
        const price = item.product.salePrice || item.product.price;
        return sum + price * item.quantity;
      }, 0);

      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);

      return { items: newItems, total, itemCount };
    }

    case 'CLEAR_CART':
      return { items: [], total: 0, itemCount: 0 };

    case 'LOAD_CART': {
      const items = action.payload;
      const total = items.reduce((sum, item) => {
        const price = item.product.salePrice || item.product.price;
        return sum + price * item.quantity;
      }, 0);

      const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

      return { items, total, itemCount };
    }

    default:
      return state;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
    itemCount: 0,
  });

  // Load cart from localStorage on mount
  React.useEffect(() => {
    const savedCart = localStorage.getItem('abd-rehem-cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        dispatch({ type: 'LOAD_CART', payload: parsedCart });
      } catch (error) {
        console.error('Failed to load cart:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever state changes
  React.useEffect(() => {
    localStorage.setItem('abd-rehem-cart', JSON.stringify(state.items));
  }, [state.items]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}