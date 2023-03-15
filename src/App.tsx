import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { OrderGrid } from "./features/grid/components/OrderGrid";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <OrderGrid></OrderGrid>
    </QueryClientProvider>
  );
};

export default App;
