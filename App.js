import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PokemonList from './src/pokemons/components/PokemonList';  
import PokemonDetail from './src/pokemons/components/PokemonDetail';
import { fetchPokemons } from './src/pokemons/services/api';    

const Stack = createStackNavigator();

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPokemons = async () => {
      const data = await fetchPokemons();
      setPokemons(data);
      setLoading(false);
    };

    getPokemons();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Cargando pokemones...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PokemonList">
        <Stack.Screen name="PokemonList">
          {props => <PokemonList {...props} pokemons={pokemons} />}
        </Stack.Screen>
        <Stack.Screen name="PokemonDetail" component={PokemonDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
