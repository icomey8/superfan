import { Root } from "../types/mlb-scores-raw";
import { useFetch } from "@raycast/utils";
import { cleanRawMlbScores } from "../utils/mlb-data-mapper";

export default function useMLBScores() {
  const { isLoading, data, revalidate } = useFetch<Root>(
    "http://site.api.espn.com/apis/site/v2/sports/baseball/mlb/scoreboard",
  );
  const gameData = cleanRawMlbScores(data);

  return { isLoading, data, gameData, revalidate };
}
