import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StandingsList } from "./mlb-standings/List";

const queryClient = new QueryClient();

export default function Command() {
  return (
    <QueryClientProvider client={queryClient}>
      <StandingsList />
    </QueryClientProvider>
  );
}
