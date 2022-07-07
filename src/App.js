import "./App.css";
import './sass/global.scss'
import PokeContainer from "./containers/PokeContainer";
import { PokeProvider } from "./context/PokeContext";

function App() {
  return (
    <PokeProvider>
    <div className="title">
      <h1>Weaker or Stronger ?</h1>
    </div>
      <PokeContainer/>
    </PokeProvider>
      
  );
}

export default App;
