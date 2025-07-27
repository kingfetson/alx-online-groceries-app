export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Search: undefined;
  Cart: { cartItems: string[] }; // Example item type: string[]
   ProductDetail: { productId: string }; // example screen with params
};

export interface CartItem {
  id: string;
  name: string;
  quantity: number;
}

export type RootStackParamList = {
  Home: undefined;
  Cart: { cartItems: CartItem[] };
  Profile: undefined;
};
