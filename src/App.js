import "./App.css";
import PokemonContainer from "./containers/PokemonContainer";
import PokeContext from "./context/PokeContext";

function App() {
  return (
    <PokeContext>
      <PokemonContainer />
    </PokeContext>
  );
}

export default App;
