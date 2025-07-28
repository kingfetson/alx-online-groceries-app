import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import useCartStore from '@/store/useCartStore'; // adjust path if needed

const CartScreen: React.FC = () => {
  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🛒 Your Cart</Text>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyText}>Your cart is empty.</Text>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemQty}>Price: ${item.price}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  emptyText: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginTop: 50,
  },
  itemContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  itemName: {
    fontSize: 18,
    fontWeight: '600',
  },
  itemQty: {
    fontSize: 16,
    color: '#555',
  },
});
