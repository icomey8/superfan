// last play

// home team current 5 ------> basic stats ( ex. 15 pts | 5 rebs | 3 asts | 2 to )

// away team current 5 ------> basic stats

// fg%
// ft%
// 3p%
// rebs
// ast
// to

import { List } from "@raycast/api";

export default function ListDetail() {
  return (
    <List.Item.Detail
      metadata={
        <List.Item.Detail.Metadata>
          <List.Item.Detail.Metadata.Label title="Last Play" text="S. Gilgeous Alexander makes free throw 1 of 2." />
          <List.Item.Detail.Metadata.Separator />
          <List.Item.Detail.Metadata.Label title="S. Gilgeous-Alexander" text="15 pts - 5 rebs - 3 asts - 2 to" />
          <List.Item.Detail.Metadata.Label title="Jal. Williams" text="10 pts - 2 rebs - 1 asts - 0 to" />
          <List.Item.Detail.Metadata.Label title="C. Holmgren" text="5 pts | 5 rebs | 2 asts | 2 to" />
          <List.Item.Detail.Metadata.Label title="C. Holmgren" text="5 pts | 5 rebs | 2 asts | 2 to" />
          <List.Item.Detail.Metadata.Label title="C. Holmgren" text="5 pts | 5 rebs | 2 asts | 2 to" />
          <List.Item.Detail.Metadata.Separator />
          <List.Item.Detail.Metadata.Label title="T. Haliburton" text="15 pts | 5 rebs | 3 asts | 2 to" />
          <List.Item.Detail.Metadata.Label title="P. Siakam" text="10 pts | 2 rebs | 1 asts | 0 to" />
          <List.Item.Detail.Metadata.Label title="P. Siakam" text="10 pts | 2 rebs | 1 asts | 0 to" />
          <List.Item.Detail.Metadata.Label title="P. Siakam" text="10 pts | 2 rebs | 1 asts | 0 to" />
          <List.Item.Detail.Metadata.Label title="A. Nembhard" text="5 pts | 5 rebs | 2 asts | 2 to" />
          <List.Item.Detail.Metadata.Separator />
          <List.Item.Detail.Metadata.Label title="FG%" />
          <List.Item.Detail.Metadata.Label title="3P%" />
          <List.Item.Detail.Metadata.Label title="FT%" />
          <List.Item.Detail.Metadata.Label title="REB" />
          <List.Item.Detail.Metadata.Label title="TO" />
        </List.Item.Detail.Metadata>
      }
    />
  );
}
