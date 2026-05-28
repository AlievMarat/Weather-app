import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Board from "./components/Board";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Board />
    </QueryClientProvider>
  );
}

export default App;