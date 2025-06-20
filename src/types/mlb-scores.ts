export interface Game {
  id: string;
  homeTeam: MLBTeam;
  awayTeam: MLBTeam;
  status: {
    state: string;
    inning: string;
  };
  situation: Situation;
}

export type Situation = {
  balls: number;
  strikes: number;
  outs: number;
  lastPlay: string;
  pitcher: Athlete;
  batter: Athlete;
  onFirst: boolean;
  onSecond: boolean;
  onThird: boolean;
};

export type Athlete = {
  name: string;
  shortName: string;
  headshot: string;
};

export type Team = {
  id: string;
  name: string;
  shortName: string;
  logo: string;
  record: string;
};

export interface MLBTeam extends Team {
  stats: {
    runs: string;
    hits: number;
    errors: number;
  };
}
