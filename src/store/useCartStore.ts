// src/store/useCartStore.ts
import { create } from 'zustand';

type CartItem = {
  id: string;
  name: string;
  price: number;
};

type CartStore = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
};

const useCartStore = create<CartStore>((set) => ({
  cartItems: [],
  addToCart: (item) =>
    set((state) => ({
      cartItems: [...state.cartItems, { ...item, id: `${item.id}-${Date.now()}` }],
    })),
  removeFromCart: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item, index) => 
        index !== state.cartItems.findIndex(cartItem => cartItem.id === id)
      ),
    })),
  clearCart: () => set({ cartItems: [] }),
}));

export default useCartStore;
