import { useQuery } from "@tanstack/react-query";
import { DIVISIONS, Root } from "../types/mlb-standings";

export function useMLBStandings() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["mlb-standings"],
    queryFn: async () => {
      const divisionData = Object.entries(DIVISIONS).map(async ([divisionName, teamIdArray]) => {
        const teamData = teamIdArray.map(async (id) => {
          const teamJson = await fetch(`https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/teams/${id}`);
          const json = await teamJson.json();
          const team = json as Root;
          return {
            name: team.team.displayName,
            record: team.team.record.items[0].summary,
            gamesBack: team.team.record.items[0].stats[19].value,
            logo: team.team.logos[1].href,
          };
        });

        const teams = await Promise.all(teamData);
        return {
          name: divisionName,
          teams: teams,
        };
      });
      const allDivisions = await Promise.all(divisionData);
      return allDivisions;
    },
  });

  return { data, isLoading, error };
}

// specify longer cache time since standings only change once a day
