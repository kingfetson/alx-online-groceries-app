import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import useCartStore from '../store/useCartStore';

export default function HomeScreen() {
  const addToCart = useCartStore((state) => state.addToCart);

  const sampleItem = {
    id: '1',
    name: 'Fresh Apples',
    price: 3.99,
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>🛒 Online Groceries</Text>
        <Text style={styles.subtitle}>Fresh groceries delivered to your door</Text>
        
        <View style={styles.productCard}>
          <Text style={styles.productName}>{sampleItem.name}</Text>
          <Text style={styles.productPrice}>${sampleItem.price}</Text>
          <TouchableOpacity 
            style={styles.addButton} 
            onPress={() => addToCart(sampleItem)}
          >
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f8f9fa' 
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    marginBottom: 10,
    color: '#2A9D8F'
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
    textAlign: 'center'
  },
  productCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    minWidth: 200,
    alignItems: 'center'
  },
  productName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333'
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E76F51',
    marginBottom: 15
  },
  addButton: {
    backgroundColor: '#2A9D8F',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16
  }
});
