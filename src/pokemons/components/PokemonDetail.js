// src/pokemons/components/PokemonDetail.js
import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';

const PokemonDetail = ({ route }) => {
  const { pokemon } = route.params; // Desestructurar el Pokémon desde los parámetros de la ruta

  if (!pokemon) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>No se encontró el Pokémon.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: pokemon.image }} style={styles.image} />
      <Text style={styles.name}>{pokemon.name}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 250,
    height: 150,
    marginBottom: 20,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default PokemonDetail;
