export const obtenerPokemonAleatorio = async () => {
  try {
    const idAleatorio = Math.floor(Math.random() * 150) + 1;
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${idAleatorio}`);
    
    if (!respuesta.ok) {
      throw new Error('Error al obtener el Pokémon');
    }
    
    const data = await respuesta.json();
    
    return {
      content: `Pokémon: ${data.name.toUpperCase()}`,
      author: `PokéAPI (ID: ${data.id})`,
      image: data.sprites.front_default 
    };
    
  } catch (error:any) {
    console.log("Error de red:", error.message);
    return { 
      content: "Pokémon: PIKACHU", 
      author: "PokéAPI (Respaldo)",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    };
  }
};