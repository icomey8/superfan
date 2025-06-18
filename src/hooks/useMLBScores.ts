import { useQuery } from "@tanstack/react-query";
import { Root } from "../types/mlb-scores";

export default function useMLBScores() {
  const { data, isLoading, error } = useQuery<Root>({
    queryKey: ["mlb-scores"],
    queryFn: async (): Promise<Root> => {
      const apiUrl = "http://site.api.espn.com/apis/site/v2/sports/baseball/mlb/scoreboard";
      if (!apiUrl) {
        throw new Error("MLB_SCORES_API_URL is not defined in environment variables");
      }
      const scores = await fetch(apiUrl);
      if (!scores.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await scores.json();
      return json as Root;
    },
  });

  return { data, isLoading, error };
}
