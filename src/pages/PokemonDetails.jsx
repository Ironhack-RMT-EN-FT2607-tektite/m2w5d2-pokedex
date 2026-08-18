import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function PokemonDetails() {

  const params = useParams()
  const navigate = useNavigate()

  const [pokemon, setPokemon] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getData()
  }, [params.pokemonName])

  const getData = async() => {

    setIsLoading(true) // we can ask info again to the api as the user clicks on another link

    try {
      // instead of fetch, let's use axios and async/await instead of then/catch
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`)
      console.log(response)
      setPokemon(response.data)
      setIsLoading(false)
    } catch (error) { 
      console.log(error)
      // redirect the user to an error page
      if (error.status === 404) {
        navigate("/not-found")
      } else {
        navigate("/error")
      }
    }
    
  }

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <div>
      
      <h2>Pokemon Details</h2>

      <h1>{pokemon.name}</h1>

      <img src={pokemon.sprites.other.dream_world.front_default} alt="pokemon" height="150px" />

      <h4>Height: {pokemon.height} m</h4>
      <h4>Weight: {pokemon.weight} kg</h4>

      <h4>Types:</h4>

      {pokemon.types.map((type, i) => {
        return <p key={i}>{type.type.name}</p>
      })}

    </div>
  );
}
export default PokemonDetails;
