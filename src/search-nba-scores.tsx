import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ScoreList from "./nba-scores/List";

const queryClient = new QueryClient();

export default function Command() {
  return (
    <QueryClientProvider client={queryClient}>
      <ScoreList />
    </QueryClientProvider>
  );
}
