import "./App.css";
import "./sass/global.scss";
import PokeContainer from "./containers/PokeContainer";
import { PokeProvider } from "./context/PokeContext";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();
function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <PokeProvider>
        <div className="title">
          <h1>Weaker or Stronger ?</h1>
        </div>
        <PokeContainer />
      </PokeProvider>
    </QueryClientProvider>
  );
}

export default App;
