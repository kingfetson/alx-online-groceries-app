// src/types/navigation.ts

export interface CartItem {
  id: string;
  name: string;
  quantity: number;
}

export type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  Cart: { cartItems: CartItem[] };
  Profile: undefined;
  ProductDetail: { productId: string };
};
