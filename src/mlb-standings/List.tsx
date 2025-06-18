import { useMLBStandings } from "../hooks/useMLBStandings";
import { List, Image, Icon, Color } from "@raycast/api";

export const StandingsList = () => {
  const { data: divisions } = useMLBStandings();
  const trophy = { source: Icon.Trophy, tintColor: Color.Yellow };

  return (
    <List navigationTitle="MLB Scores" filtering={true} searchBarPlaceholder="Filter by team name...">
      {divisions?.map((division) => (
        <List.Section key={division.name} title={division.name}>
          {division.teams
            .sort((a, b) => a.gamesBack - b.gamesBack)
            .map((team, index) => (
              <List.Item
                icon={{
                  source: `${team.logo}`,
                  mask: Image.Mask.Circle,
                }}
                key={team.name}
                title={team.name}
                accessories={
                  index === 0
                    ? [{ icon: trophy, tooltip: "First Place" }, { text: `${team.gamesBack} GB` }]
                    : [{ text: `${team.gamesBack} GB` }]
                }
                subtitle={team.record}
              ></List.Item>
            ))}
        </List.Section>
      ))}
    </List>
  );
};
