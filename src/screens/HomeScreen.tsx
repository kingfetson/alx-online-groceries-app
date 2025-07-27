import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import useCartStore from '../store/useCartStore';

export default function HomeScreen() {
  const addToCart = useCartStore((state) => state.addToCart);

  const sampleItem = {
    id: '1',
    name: 'Fresh Apples',
    price: 3.99,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen 🏠</Text>
      <Button title="Add to Cart" onPress={() => addToCart(sampleItem)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
});
