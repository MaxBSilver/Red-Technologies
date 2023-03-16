import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavBar } from "./features/Navigation/components/NavBar";
import { Grid } from "./features/OrderGrid/components/Grid";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavBar/>
      <Grid />
    </QueryClientProvider>
  );
};

export default App;
