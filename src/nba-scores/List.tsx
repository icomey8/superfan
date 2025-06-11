import { List } from "@raycast/api";
import ListDetail from "./ListDetail";

export default function ScoreList() {
  return (
    <List navigationTitle="NBA Scores" filtering={true} searchBarPlaceholder="Filter by team name..." isShowingDetail>
      <List.Section title="Ongoing Games">
        <List.Item title="IND 56, OKC 52" detail={<ListDetail />} />
      </List.Section>
      <List.Section title="Finished Games">
        <List.Item title="No finished games" />
      </List.Section>
      <List.Section title="Upcoming Games">
        <List.Item title="No upcoming games" />
      </List.Section>
    </List>
  );
}
