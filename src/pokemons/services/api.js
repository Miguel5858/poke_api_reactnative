export const fetchPokemons = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
      const data = await response.json();
  
      const pokemonData = await Promise.all(
        data.results.map(async (pokemon) => {
          const pokemonDetails = await fetch(pokemon.url);
          const details = await pokemonDetails.json();
  
          return {
            name: pokemon.name,
            image: details.sprites.front_default,  // Usamos el sprite frontal del Pokémon
          };
        })
      );
  
      return pokemonData;
    } catch (error) {
      console.error('Error fetching pokemons:', error);
      throw error;  // Propagar el error para que el componente lo maneje
    }
  };
  