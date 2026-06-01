import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <nav className="sidebar">

      <h4>Pokemon</h4>
      
      {/* example of 3 links */}
      <Link to={"/pokemon-details/bulbasaur"}>bulbasaur</Link>
      <Link to={"/pokemon-details/charmander"}>charmander</Link>
      <Link to={"/pokemon-details/squirtle"}>squirtle</Link>

    </nav>
  )
}

export default Sidebar