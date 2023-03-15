import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Grid } from "./features/grid/components/Grid";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Grid></Grid>
    </QueryClientProvider>
  );
};

export default App;
