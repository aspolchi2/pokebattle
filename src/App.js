import "./App.css";
import PokeContainer from "./containers/PokeContainer";
import { PokeContext, PokeProvider } from "./context/PokeContext";

function App() {
  return (
    <PokeProvider>
      <PokeContainer/>
    </PokeProvider>
      
  );
}

export default App;
