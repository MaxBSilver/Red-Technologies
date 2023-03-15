import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Grid } from "./features/OrderGrid/components/Grid";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Grid />
    </QueryClientProvider>
  );
};

export default App;
