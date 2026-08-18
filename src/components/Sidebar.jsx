import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

// how to we call the API URL "https://pokeapi.co/api/v2/pokemon"? fetch(URL) or axios.get(URL)
// how to we process the response from the api? then/catch + .json()
// where do we call the API? useEffect => componentDidMount 
// what do we do with that data? state
// how do we render that list of pokemon names on the JSX .map()

function Sidebar() {

  const [ allPokemon, setAllPokemon ] = useState(null)
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((response) => {
      // console.log(response)
      return response.json()
    })
    .then((response) => {
      // console.log(response)
      // setTimeout(() => {
        setAllPokemon(response.results)
        setIsLoading(false)
      // }, 1500)
    })
    .catch((err) => {
      console.log(err)
    })

  }, [])

  // if (!allPokemon) {
  //   return <h3>Loading...</h3>
  // }

  return (
    <nav className="sidebar">

      <h4>Pokemon</h4>

      {!isLoading ? allPokemon.map((pokemon, i) => {
        return <Link key={i} to={`/pokemon-details/${pokemon.name}`}>{pokemon.name}</Link>
      }) : <h3>Loading...</h3>}
      
      {/* example of 3 links */}
      {/* <Link to={"/pokemon-details/bulbasaur"}>bulbasaur</Link>
      <Link to={"/pokemon-details/charmander"}>charmander</Link>
      <Link to={"/pokemon-details/squirtle"}>squirtle</Link> */}

    </nav>
  )
}

export default Sidebar