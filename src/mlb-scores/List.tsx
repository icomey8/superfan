import { List } from "@raycast/api";
import MLBScoresDetail from "./ListDetail";
import useMLBScores from "../hooks/useMLBScores";

export default function ScoreList() {
  const { data: scores } = useMLBScores();

  return (
    <List navigationTitle="MLB Scores" filtering={true} searchBarPlaceholder="Filter by team name..." isShowingDetail>
      <List.Section title="Ongoing Games">
        {scores?.events
          .filter((event) => event.status.type.state === "in")
          .map((event) => {
            const teams = event.competitions[0].competitors;
            const liveSituation = event.competitions[0].situation;
            const home = teams.find((t) => t.homeAway === "home")!;
            const away = teams.find((t) => t.homeAway === "away")!;

            return (
              <List.Item
                key={event.id}
                title={`${home.team.name} ${home.score}, ${away.team.name} ${away.score}`}
                accessories={[{ text: event.status.type.shortDetail, tooltip: "Inning" }]}
                detail={<MLBScoresDetail home={home} away={away} liveAtBat={liveSituation} />}
              />
            );
          })}
      </List.Section>
      <List.Section title="Finished Games">
        {scores?.events
          .filter((event) => event.status.type.state === "post")
          .map((event) => {
            const teams = event.competitions[0].competitors;
            const liveSituation = event.competitions[0].situation;
            const home = teams.find((t) => t.homeAway === "home")!;
            const away = teams.find((t) => t.homeAway === "away")!;

            return (
              <List.Item
                key={event.id}
                title={`${home.team.name} ${home.score}, ${away.team.name} ${away.score}`}
                accessories={[{ text: event.status.type.shortDetail, tooltip: "Inning" }]}
                detail={<MLBScoresDetail home={home} away={away} liveAtBat={liveSituation} />}
              />
            );
          })}
      </List.Section>
      <List.Section title="Upcoming Games">
        {scores?.events
          .filter((event) => event.status.type.state === "pre")
          .map((event) => {
            const teams = event.competitions[0].competitors;
            const liveSituation = event.competitions[0].situation;
            const home = teams.find((t) => t.homeAway === "home")!;
            const away = teams.find((t) => t.homeAway === "away")!;

            return (
              <List.Item
                key={event.id}
                title={`${home.team.name} ${home.score}, ${away.team.name} ${away.score}`}
                accessories={[{ text: event.status.type.shortDetail, tooltip: "Inning" }]}
                detail={<MLBScoresDetail home={home} away={away} liveAtBat={liveSituation} />}
              />
            );
          })}
      </List.Section>
    </List>
  );
}
