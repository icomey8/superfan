import { Root } from "../types/nba-scores-raw";
import { useFetch } from "@raycast/utils";
import { cleanRawNBAScores } from "../utils/nba-data mapper";

export default function useNBAScores() {
  const { isLoading, data, revalidate } = useFetch<Root>(
    "http://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard",
  );
  //   console.log(data);
  const gameData = cleanRawNBAScores(data);
  //   console.log(gameData);

  return { isLoading, data, gameData, revalidate };
}
