import React from 'react';
import { View, FlatList, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const PokemonList = ({ pokemons, navigation }) => {
  const handlePress = (pokemon) => {
    navigation.navigate('PokemonDetail', { pokemon });
  };

  return (
    <FlatList
      data={pokemons}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => handlePress(item)}>
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      )}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f8f8f8',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
    marginHorizontal: 10,
    width: '100%',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
});

export default PokemonList;
